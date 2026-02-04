'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/locale-context';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/ui/Container';

export default function Impressum() {
  const { locale } = useLocale();

  const content = {
    en: {
      title: 'Legal Notice (Impressum)',
      subtitle: 'Information according to § 5 ECG and disclosure obligation according to § 25 MedienG',
      sections: [
        {
          title: 'Company Information',
          content: `MOTOGNA Tech Studio
Alex Daniel Motogna
Murzgasse 2/13
8600 Bruck an der Mur
Austria`
        },
        {
          title: 'Contact',
          content: `Email: alex@motogna.tech
Phone: +43 660 175 9059`
        },
        {
          title: 'Business Registration',
          content: `Business type: Einzelunternehmen (Sole Proprietorship)
Trade: Services in automatic data processing and information technology
GISA Number: 39260086
Registration date: 26.01.2026
Supervisory Authority: Bezirkshauptmannschaft Bruck-Mürzzuschlag`
        },
        {
          title: 'Professional Regulations',
          content: `Applicable regulations: Gewerbeordnung (GewO)
Trade classification: Freies Gewerbe (Free Trade)
Professional title: IT Service Provider
Awarding country: Austria`
        },
        {
          title: 'Liability for Content',
          content: `The contents of this website have been created with the utmost care. However, we cannot guarantee the accuracy, completeness, and timeliness of the content. As a service provider, we are responsible for our own content on these pages according to general laws. However, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.`
        },
        {
          title: 'Liability for Links',
          content: `Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content.`
        },
        {
          title: 'Copyright',
          content: `The content and works created by the site operators on these pages are subject to Austrian copyright law. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator.`
        }
      ]
    },
    de: {
      title: 'Impressum',
      subtitle: 'Informationen gemäß § 5 ECG und Offenlegungspflicht gemäß § 25 MedienG',
      sections: [
        {
          title: 'Angaben zum Unternehmen',
          content: `MOTOGNA Tech Studio
Alex Daniel Motogna
Murzgasse 2/13
8600 Bruck an der Mur
Österreich`
        },
        {
          title: 'Kontakt',
          content: `E-Mail: alex@motogna.tech
Telefon: +43 660 175 9059`
        },
        {
          title: 'Unternehmensregistrierung',
          content: `Unternehmensform: Einzelunternehmen
Gewerbe: Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik
GISA-Zahl: 39260086
Anmeldedatum: 26.01.2026
Aufsichtsbehörde: Bezirkshauptmannschaft Bruck-Mürzzuschlag`
        },
        {
          title: 'Berufsrechtliche Regelungen',
          content: `Anwendbare Rechtsvorschriften: Gewerbeordnung (GewO)
Gewerbeart: Freies Gewerbe
Berufsbezeichnung: IT-Dienstleister
Verleihungsstaat: Österreich`
        },
        {
          title: 'Haftung für Inhalte',
          content: `Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.`
        },
        {
          title: 'Haftung für Links',
          content: `Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.`
        },
        {
          title: 'Urheberrecht',
          content: `Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.`
        }
      ]
    },
    es: {
      title: 'Aviso Legal (Impressum)',
      subtitle: 'Información según § 5 ECG y obligación de divulgación según § 25 MedienG',
      sections: [
        {
          title: 'Información de la Empresa',
          content: `MOTOGNA Tech Studio
Alex Daniel Motogna
Murzgasse 2/13
8600 Bruck an der Mur
Austria`
        },
        {
          title: 'Contacto',
          content: `Email: alex@motogna.tech
Teléfono: +43 660 175 9059`
        },
        {
          title: 'Registro Comercial',
          content: `Tipo de empresa: Einzelunternehmen (Empresa Individual)
Actividad comercial: Servicios en procesamiento automático de datos y tecnología de la información
Número GISA: 39260086
Fecha de registro: 26.01.2026
Autoridad de Supervisión: Bezirkshauptmannschaft Bruck-Mürzzuschlag`
        },
        {
          title: 'Regulaciones Profesionales',
          content: `Regulaciones aplicables: Gewerbeordnung (GewO)
Clasificación comercial: Freies Gewerbe (Comercio Libre)
Título profesional: Proveedor de servicios IT
País otorgante: Austria`
        },
        {
          title: 'Responsabilidad por Contenido',
          content: `Los contenidos de esta web han sido creados con el mayor cuidado. Sin embargo, no podemos garantizar la exactitud, integridad y actualidad del contenido. Como proveedor de servicios, somos responsables de nuestro propio contenido en estas páginas según las leyes generales.`
        },
        {
          title: 'Responsabilidad por Enlaces',
          content: `Nuestra web contiene enlaces a sitios web externos de terceros sobre cuyo contenido no tenemos influencia. Por lo tanto, no podemos aceptar ninguna responsabilidad por este contenido externo.`
        },
        {
          title: 'Derechos de Autor',
          content: `El contenido y las obras creadas por los operadores del sitio en estas páginas están sujetos a la ley de derechos de autor austriaca. La duplicación, procesamiento, distribución y cualquier tipo de explotación fuera de los límites de la ley de derechos de autor requieren el consentimiento por escrito del autor o creador respectivo.`
        }
      ]
    },
    it: {
      title: 'Note Legali (Impressum)',
      subtitle: 'Informazioni ai sensi del § 5 ECG e obbligo di divulgazione ai sensi del § 25 MedienG',
      sections: [
        {
          title: 'Informazioni Aziendali',
          content: `MOTOGNA Tech Studio
Alex Daniel Motogna
Murzgasse 2/13
8600 Bruck an der Mur
Austria`
        },
        {
          title: 'Contatto',
          content: `Email: alex@motogna.tech
Telefono: +43 660 175 9059`
        },
        {
          title: 'Registrazione Aziendale',
          content: `Tipo di attività: Einzelunternehmen (Ditta Individuale)
Attività commerciale: Servizi di elaborazione automatica dei dati e tecnologia dell'informazione
Numero GISA: 39260086
Data di registrazione: 26.01.2026
Autorità di vigilanza: Bezirkshauptmannschaft Bruck-Mürzzuschlag`
        },
        {
          title: 'Regolamenti Professionali',
          content: `Normative applicabili: Gewerbeordnung (GewO)
Classificazione commerciale: Freies Gewerbe (Commercio Libero)
Titolo professionale: Fornitore di servizi IT
Paese di conferimento: Austria`
        },
        {
          title: 'Responsabilità per i Contenuti',
          content: `I contenuti di questo sito web sono stati creati con la massima cura. Tuttavia, non possiamo garantire l'accuratezza, la completezza e l'attualità dei contenuti.`
        },
        {
          title: 'Responsabilità per i Link',
          content: `Il nostro sito web contiene link a siti web esterni di terze parti sui cui contenuti non abbiamo alcuna influenza. Pertanto, non possiamo assumerci alcuna responsabilità per questi contenuti esterni.`
        },
        {
          title: 'Copyright',
          content: `I contenuti e le opere create dagli operatori del sito su queste pagine sono soggetti alla legge austriaca sul diritto d'autore.`
        }
      ]
    },
    ro: {
      title: 'Mențiuni Legale (Impressum)',
      subtitle: 'Informații conform § 5 ECG și obligația de divulgare conform § 25 MedienG',
      sections: [
        {
          title: 'Informații Companie',
          content: `MOTOGNA Tech Studio
Alex Daniel Motogna
Murzgasse 2/13
8600 Bruck an der Mur
Austria`
        },
        {
          title: 'Contact',
          content: `Email: alex@motogna.tech
Telefon: +43 660 175 9059`
        },
        {
          title: 'Înregistrare Comercială',
          content: `Tip afacere: Einzelunternehmen (Întreprindere Individuală)
Activitate comercială: Servicii de prelucrare automată a datelor și tehnologia informației
Număr GISA: 39260086
Data înregistrării: 26.01.2026
Autoritate de Supraveghere: Bezirkshauptmannschaft Bruck-Mürzzuschlag`
        },
        {
          title: 'Reglementări Profesionale',
          content: `Reglementări aplicabile: Gewerbeordnung (GewO)
Clasificare comercială: Freies Gewerbe (Comerț Liber)
Titlu profesional: Furnizor servicii IT
Țara de acordare: Austria`
        },
        {
          title: 'Răspundere pentru Conținut',
          content: `Conținuturile acestui site web au fost create cu cea mai mare grijă. Cu toate acestea, nu putem garanta acuratețea, completitudinea și actualitatea conținutului.`
        },
        {
          title: 'Răspundere pentru Linkuri',
          content: `Site-ul nostru conține linkuri către site-uri web externe ale unor terțe părți asupra cărora nu avem nicio influență. Prin urmare, nu putem accepta nicio răspundere pentru acest conținut extern.`
        },
        {
          title: 'Drepturi de Autor',
          content: `Conținutul și lucrările create de operatorii site-ului pe aceste pagini sunt supuse legii austriece a drepturilor de autor.`
        }
      ]
    }
  };

  const t = content[locale] || content.en;

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <Container>
          <div className="max-w-3xl">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 mb-8 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>
            <h1 className="text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
              {t.title}
            </h1>
            <p className="text-lg text-neutral-600 mb-12">
              {t.subtitle}
            </p>

            <div className="space-y-10">
              {t.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-lg font-semibold text-neutral-900 mb-4">{section.title}</h2>
                  <div className="text-neutral-600 whitespace-pre-line leading-relaxed">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
