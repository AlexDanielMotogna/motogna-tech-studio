'use client';

import { useState } from 'react';
import { useLocale } from '@/lib/locale-context';
import Header from '../Header';
import Container from '../ui/Container';
import ProgressBar from './ProgressBar';
import {
  QuoteState,
  PlatformType,
  ProjectType,
  platformOptions,
  projectTypes,
  pageOptions,
  featureOptions,
  designOptions,
  calculatePrice,
  formatPrice,
} from '@/lib/quote-data';

const TOTAL_STEPS = 6;

export default function QuoteWizard() {
  const { t } = useLocale();
  const [currentStep, setCurrentStep] = useState(1);
  const [quoteState, setQuoteState] = useState<QuoteState>({
    platform: null,
    projectType: null,
    selectedPages: ['home'],
    selectedFeatures: [],
    designOption: null,
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const goNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return quoteState.platform !== null;
      case 2:
        return quoteState.projectType !== null;
      case 3:
        return quoteState.selectedPages.length > 0;
      case 4:
        return true; // Features are optional
      case 5:
        return quoteState.designOption !== null;
      case 6:
        return true;
      default:
        return false;
    }
  };

  const handlePlatformSelect = (platform: PlatformType) => {
    setQuoteState({ ...quoteState, platform });
  };

  const handleProjectTypeSelect = (type: ProjectType) => {
    setQuoteState({ ...quoteState, projectType: type });
  };

  const handlePageToggle = (pageId: string) => {
    const pages = quoteState.selectedPages.includes(pageId)
      ? quoteState.selectedPages.filter((p) => p !== pageId)
      : [...quoteState.selectedPages, pageId];
    setQuoteState({ ...quoteState, selectedPages: pages });
  };

  const handleFeatureToggle = (featureId: string) => {
    const features = quoteState.selectedFeatures.includes(featureId)
      ? quoteState.selectedFeatures.filter((f) => f !== featureId)
      : [...quoteState.selectedFeatures, featureId];
    setQuoteState({ ...quoteState, selectedFeatures: features });
  };

  const handleDesignSelect = (design: 'custom' | 'template' | 'provided') => {
    setQuoteState({ ...quoteState, designOption: design });
  };

  const openContactModal = () => {
    setShowContactModal(true);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
    setSendError(null);
  };

  const handleSendQuote = async () => {
    // Validate contact info
    if (!contactInfo.name.trim() || !contactInfo.email.trim()) {
      setSendError('Please provide your name and email.');
      return;
    }

    setIsSending(true);
    setSendError(null);

    const price = calculatePrice(quoteState);
    const platformName = quoteState.platform
      ? t.quote.platform[quoteState.platform as keyof typeof t.quote.platform]
      : '';
    const selectedPageNames = quoteState.selectedPages
      .map((id) => {
        const key = `quote.pages.${id}` as keyof typeof t.quote.pages;
        return t.quote.pages[key as keyof typeof t.quote.pages] || id;
      });
    const selectedFeatureNames = quoteState.selectedFeatures
      .map((id) => {
        const feature = featureOptions.find((f) => f.id === id);
        if (!feature) return id;
        const key = feature.id as keyof typeof t.quote.features;
        return t.quote.features[key as keyof typeof t.quote.features] || id;
      });
    const designName = quoteState.designOption
      ? t.quote.design[quoteState.designOption as keyof typeof t.quote.design]
      : '';
    const projectTypeName = quoteState.projectType
      ? t.quote.projectTypes[quoteState.projectType as keyof typeof t.quote.projectTypes]
      : '';

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          platform: platformName,
          projectType: projectTypeName,
          pages: selectedPageNames,
          features: selectedFeatureNames,
          design: designName,
          priceMin: formatPrice(price.min),
          priceMax: formatPrice(price.max),
          name: contactInfo.name,
          email: contactInfo.email,
          phone: contactInfo.phone,
          notes: contactInfo.notes,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send quote');
      }

      setIsSent(true);
      setShowContactModal(false);
    } catch {
      setSendError('Failed to send quote. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const price = calculatePrice(quoteState);

  // Platform icons
  const getPlatformIcon = (iconName: string, isSelected: boolean) => {
    const colorClass = isSelected ? 'text-white' : 'text-neutral-400';
    switch (iconName) {
      case 'monitor':
        return (
          <svg className={`w-8 h-8 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'smartphone':
        return (
          <svg className={`w-8 h-8 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'devices':
        // Web + Mobile: show both icons side by side
        return (
          <div className="flex items-center gap-2">
            <svg className={`w-7 h-7 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className={colorClass}>+</span>
            <svg className={`w-6 h-6 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Progress Bar - with padding top for fixed header */}
      <div className="bg-white border-b border-neutral-200 pt-16 lg:pt-20">
        <Container>
          <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />
        </Container>
      </div>

      {/* Main Content */}
      <Container>
        <div className="py-8 lg:py-12">
          {/* Step 1: Platform */}
          {currentStep === 1 && (
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-2">
                {t.quote.platform.title}
              </h1>
              <p className="text-neutral-600 mb-8">{t.quote.platform.subtitle}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {platformOptions.map((platform) => {
                  const isSelected = quoteState.platform === platform.id;
                  return (
                    <button
                      key={platform.id}
                      onClick={() => handlePlatformSelect(platform.id)}
                      className={`p-6 text-left border transition-all ${
                        isSelected
                          ? 'border-neutral-900 bg-neutral-900 text-white'
                          : 'border-neutral-200 bg-white hover:border-neutral-400'
                      }`}
                    >
                      <div className="mb-4">
                        {getPlatformIcon(platform.icon, isSelected)}
                      </div>
                      <div className="font-semibold mb-1">
                        {t.quote.platform[platform.id as keyof typeof t.quote.platform]}
                      </div>
                      <div className={`text-sm ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                        {t.quote.platform[`${platform.id}Desc` as keyof typeof t.quote.platform]}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Project Type */}
          {currentStep === 2 && (
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-2">
                {t.quote.projectTypes.title}
              </h1>
              <p className="text-neutral-600 mb-8">{t.quote.subtitle}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleProjectTypeSelect(type.id)}
                    className={`p-6 text-left border transition-all ${
                      quoteState.projectType === type.id
                        ? 'border-neutral-900 bg-neutral-900 text-white'
                        : 'border-neutral-200 bg-white hover:border-neutral-400'
                    }`}
                  >
                    <div className="font-semibold mb-1">
                      {t.quote.projectTypes[type.id as keyof typeof t.quote.projectTypes]}
                    </div>
                    <div className={`text-sm ${quoteState.projectType === type.id ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      {t.quote.projectTypes[`${type.id}Desc` as keyof typeof t.quote.projectTypes]}
                    </div>
                    <div className={`mt-3 text-sm font-medium ${quoteState.projectType === type.id ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      {formatPrice(type.basePrice)}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Pages */}
          {currentStep === 3 && (
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-2">
                {t.quote.pages.title}
              </h1>
              <p className="text-neutral-600 mb-8">{t.quote.pages.subtitle}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {pageOptions.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => handlePageToggle(page.id)}
                    className={`p-4 text-left border transition-all ${
                      quoteState.selectedPages.includes(page.id)
                        ? 'border-neutral-900 bg-neutral-900 text-white'
                        : 'border-neutral-200 bg-white hover:border-neutral-400'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-5 h-5 border-2 flex items-center justify-center ${
                        quoteState.selectedPages.includes(page.id)
                          ? 'border-white bg-white'
                          : 'border-neutral-300'
                      }`}>
                        {quoteState.selectedPages.includes(page.id) && (
                          <svg className="w-3 h-3 text-neutral-900" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className="font-medium">
                        {t.quote.pages[page.id as keyof typeof t.quote.pages]}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Features */}
          {currentStep === 4 && (
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-2">
                {t.quote.features.title}
              </h1>
              <p className="text-neutral-600 mb-8">{t.quote.features.subtitle}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featureOptions.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => handleFeatureToggle(feature.id)}
                    className={`p-4 text-left border transition-all ${
                      quoteState.selectedFeatures.includes(feature.id)
                        ? 'border-neutral-900 bg-neutral-900 text-white'
                        : 'border-neutral-200 bg-white hover:border-neutral-400'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-5 h-5 mt-0.5 border-2 flex-shrink-0 flex items-center justify-center ${
                        quoteState.selectedFeatures.includes(feature.id)
                          ? 'border-white bg-white'
                          : 'border-neutral-300'
                      }`}>
                        {quoteState.selectedFeatures.includes(feature.id) && (
                          <svg className="w-3 h-3 text-neutral-900" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">
                            {t.quote.features[feature.id as keyof typeof t.quote.features]}
                          </span>
                          <span className={`text-sm ${quoteState.selectedFeatures.includes(feature.id) ? 'text-neutral-300' : 'text-neutral-600'}`}>
                            +{formatPrice(feature.price)}
                          </span>
                        </div>
                        <div className={`text-sm mt-1 ${quoteState.selectedFeatures.includes(feature.id) ? 'text-neutral-300' : 'text-neutral-500'}`}>
                          {t.quote.features[`${feature.id}Desc` as keyof typeof t.quote.features]}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Design */}
          {currentStep === 5 && (
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-2">
                {t.quote.design.title}
              </h1>
              <p className="text-neutral-600 mb-8">{t.quote.design.subtitle}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {designOptions.map((design) => (
                  <button
                    key={design.id}
                    onClick={() => handleDesignSelect(design.id)}
                    className={`p-6 text-left border transition-all ${
                      quoteState.designOption === design.id
                        ? 'border-neutral-900 bg-neutral-900 text-white'
                        : 'border-neutral-200 bg-white hover:border-neutral-400'
                    }`}
                  >
                    <div className="font-semibold mb-1">
                      {t.quote.design[design.id as keyof typeof t.quote.design]}
                    </div>
                    <div className={`text-sm ${quoteState.designOption === design.id ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      {t.quote.design[`${design.id}Desc` as keyof typeof t.quote.design]}
                    </div>
                    <div className={`mt-3 text-sm font-medium ${quoteState.designOption === design.id ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      {design.price > 0 ? `+${formatPrice(design.price)}` : t.quote.summary.included}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Summary */}
          {currentStep === 6 && (
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-2">
                {t.quote.summary.title}
              </h1>
              <p className="text-neutral-600 mb-8">{t.quote.summary.subtitle}</p>

              <div className="bg-white border border-neutral-200 divide-y divide-neutral-200">
                {/* Platform */}
                <div className="p-4 flex justify-between">
                  <span className="text-neutral-600">{t.quote.summary.platform}</span>
                  <span className="font-medium">
                    {quoteState.platform && t.quote.platform[quoteState.platform as keyof typeof t.quote.platform]}
                  </span>
                </div>

                {/* Project Type */}
                <div className="p-4 flex justify-between">
                  <span className="text-neutral-600">{t.quote.summary.projectType}</span>
                  <span className="font-medium">
                    {quoteState.projectType && t.quote.projectTypes[quoteState.projectType as keyof typeof t.quote.projectTypes]}
                  </span>
                </div>

                {/* Pages */}
                <div className="p-4 flex justify-between">
                  <span className="text-neutral-600">{t.quote.summary.selectedPages}</span>
                  <span className="font-medium text-right max-w-[60%]">
                    {quoteState.selectedPages.length > 0
                      ? quoteState.selectedPages
                          .map((id) => t.quote.pages[id as keyof typeof t.quote.pages])
                          .join(', ')
                      : t.quote.summary.noneSelected}
                  </span>
                </div>

                {/* Features */}
                <div className="p-4 flex justify-between">
                  <span className="text-neutral-600">{t.quote.summary.selectedFeatures}</span>
                  <span className="font-medium text-right max-w-[60%]">
                    {quoteState.selectedFeatures.length > 0
                      ? quoteState.selectedFeatures
                          .map((id) => t.quote.features[id as keyof typeof t.quote.features])
                          .join(', ')
                      : t.quote.summary.noneSelected}
                  </span>
                </div>

                {/* Design */}
                <div className="p-4 flex justify-between">
                  <span className="text-neutral-600">{t.quote.summary.designOption}</span>
                  <span className="font-medium">
                    {quoteState.designOption && t.quote.design[quoteState.designOption as keyof typeof t.quote.design]}
                  </span>
                </div>

                {/* Price */}
                <div className="p-6 bg-neutral-50">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">{t.quote.summary.estimatedPrice}</span>
                    <span className="text-2xl font-bold text-neutral-900">
                      {formatPrice(price.min)} – {formatPrice(price.max)}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-500 mt-2">{t.quote.summary.disclaimer}</p>
                </div>
              </div>

              {/* CTA */}
              {isSent ? (
                <div className="mt-8 p-8 bg-green-50 border border-green-200 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-green-800 mb-2">
                    Quote Request Sent!
                  </h2>
                  <p className="text-green-700">
                    We will review your project and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="mt-8 p-6 bg-neutral-900 text-white text-center">
                  <h2 className="text-xl font-semibold mb-2">{t.quote.summary.ctaTitle}</h2>
                  <p className="text-neutral-400 mb-4">{t.quote.summary.ctaSubtitle}</p>
                  <button
                    onClick={openContactModal}
                    className="px-8 py-3 bg-white text-neutral-900 font-semibold hover:bg-neutral-100 transition-colors"
                  >
                    {t.quote.summary.sendQuote}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </Container>

      {/* Navigation Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200">
        <Container>
          <div className="flex items-center justify-between py-4">
            <button
              onClick={goBack}
              disabled={currentStep === 1}
              className={`px-6 py-2 font-medium transition-colors ${
                currentStep === 1
                  ? 'text-neutral-300 cursor-not-allowed'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {t.quote.back}
            </button>

            {/* Price - always visible */}
            <div className="text-center">
              <div className="text-xs text-neutral-500">{t.quote.summary.estimatedPrice}</div>
              <div className="text-sm sm:text-base font-semibold text-neutral-900">
                {formatPrice(price.min)} – {formatPrice(price.max)}
              </div>
            </div>

            {currentStep < TOTAL_STEPS ? (
              <button
                onClick={goNext}
                disabled={!canProceed()}
                className={`px-6 py-2 font-medium transition-colors ${
                  canProceed()
                    ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                    : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                }`}
              >
                {t.quote.next}
              </button>
            ) : (
              <button
                onClick={isSent ? undefined : openContactModal}
                disabled={isSent}
                className="px-6 py-2 bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSent ? 'Sent!' : t.quote.summary.sendQuote}
              </button>
            )}
          </div>
        </Container>
      </div>

      {/* Spacer for fixed footer */}
      <div className="h-20" />

      {/* Contact Info Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-neutral-900">
                  Contact Information
                </h2>
                <button
                  onClick={closeContactModal}
                  className="text-neutral-400 hover:text-neutral-600"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="text-neutral-600 text-sm mb-6">
                Please provide your contact details so we can send you a detailed quote.
              </p>

              <div className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    value={contactInfo.name}
                    onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-neutral-700 mb-1">
                    Phone <span className="text-neutral-400">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none transition-colors"
                    placeholder="+49 123 456 789"
                  />
                </div>

                <div>
                  <label htmlFor="contact-notes" className="block text-sm font-medium text-neutral-700 mb-1">
                    Additional Notes <span className="text-neutral-400">(optional)</span>
                  </label>
                  <textarea
                    id="contact-notes"
                    value={contactInfo.notes}
                    onChange={(e) => setContactInfo({ ...contactInfo, notes: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none transition-colors resize-none"
                    placeholder="Any additional details about your project..."
                  />
                </div>
              </div>

              {sendError && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm">
                  {sendError}
                </div>
              )}

              <div className="mt-6 flex gap-3">
                <button
                  onClick={closeContactModal}
                  className="flex-1 px-4 py-3 border border-neutral-300 text-neutral-700 font-medium hover:bg-neutral-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendQuote}
                  disabled={isSending}
                  className="flex-1 px-4 py-3 bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? 'Sending...' : 'Send Quote Request'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
