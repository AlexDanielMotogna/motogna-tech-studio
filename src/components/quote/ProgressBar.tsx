'use client';

import { useLocale } from '@/lib/locale-context';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const { t } = useLocale();
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="py-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-neutral-600">
          {t.quote.step} {currentStep} {t.quote.of} {totalSteps}
        </span>
        <span className="text-sm font-medium text-neutral-900">{Math.round(progress)}%</span>
      </div>
      <div className="h-2 bg-neutral-200 overflow-hidden">
        <div
          className="h-full bg-neutral-900 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
