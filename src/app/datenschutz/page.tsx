'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/locale-context';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/ui/Container';

export default function Datenschutz() {
  const { locale } = useLocale();

  const content = {
    en: {
      title: 'Privacy Policy',
      subtitle: 'Information about data processing according to GDPR',
      lastUpdated: 'Last updated: January 2025',
      sections: [
        {
          title: '1. Data Controller',
          content: `MOTOGNA Tech Studio
Alex Daniel Motogna
Murzgasse 2/13
8600 Bruck an der Mur
Austria

Email: office@motogna.tech`
        },
        {
          title: '2. Data Collection on Our Website',
          content: `When you visit our website, our web server temporarily stores the following data for technical reasons:

- IP address of the requesting computer
- Date and time of access
- Name and URL of the retrieved file
- Website from which access is made (referrer URL)
- Browser used and, if applicable, operating system

This data is processed on the basis of Art. 6 para. 1 lit. f GDPR for the purpose of enabling the use of the website and ensuring system security.`
        },
        {
          title: '3. Contact Form',
          content: `When you contact us via the contact form, the data you provide (name, email address, message, and optionally project type and budget) will be stored for the purpose of processing your inquiry and for follow-up questions.

Legal basis: Art. 6 para. 1 lit. b GDPR (contract initiation) or Art. 6 para. 1 lit. f GDPR (legitimate interest in answering inquiries).

Your data will be deleted after final processing of your inquiry, unless legal retention obligations apply.`
        },
        {
          title: '4. Cookies and Local Storage',
          content: `Our website uses local storage (localStorage) to save your language preference. This data is stored only in your browser and is not transmitted to our servers.

We use:
- Local storage for language preference (to remember your selected language)

This data is processed on the basis of Art. 6 para. 1 lit. f GDPR (legitimate interest in providing a user-friendly website). You can delete this data at any time through your browser settings.

We do not use tracking cookies or third-party cookies.`
        },
        {
          title: '5. Your Rights',
          content: `Under the GDPR, you have the following rights:

- Right of access (Art. 15 GDPR)
- Right to rectification (Art. 16 GDPR)
- Right to erasure (Art. 17 GDPR)
- Right to restriction of processing (Art. 18 GDPR)
- Right to data portability (Art. 20 GDPR)
- Right to object (Art. 21 GDPR)
- Right to lodge a complaint with a supervisory authority

To exercise your rights, please contact us at the above address.`
        },
        {
          title: '6. Data Security',
          content: `We use appropriate technical and organizational security measures to protect your personal data against accidental or intentional manipulation, loss, destruction, or unauthorized access.

Our security measures are continuously improved in line with technological developments.`
        },
        {
          title: '7. Changes to This Privacy Policy',
          content: `We reserve the right to amend this privacy policy to always comply with current legal requirements or to implement changes to our services. The new privacy policy will apply to your next visit.`
        }
      ]
    },
    de: {
      title: 'Datenschutzerklärung',
      subtitle: 'Informationen zur Datenverarbeitung gemäß DSGVO',
      lastUpdated: 'Zuletzt aktualisiert: Januar 2025',
      sections: [
        {
          title: '1. Verantwortlicher',
          content: `MOTOGNA Tech Studio
Alex Daniel Motogna
Murzgasse 2/13
8600 Bruck an der Mur
Österreich

E-Mail: office@motogna.tech`
        },
        {
          title: '2. Datenerfassung auf unserer Website',
          content: `Bei Ihrem Besuch auf unserer Website speichert unser Webserver aus technischen Gründen vorübergehend folgende Daten:

- IP-Adresse des anfragenden Rechners
- Datum und Uhrzeit des Zugriffs
- Name und URL der abgerufenen Datei
- Website, von der aus der Zugriff erfolgt (Referrer-URL)
- Verwendeter Browser und ggf. Betriebssystem

Diese Daten werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeitet, um die Nutzung der Website zu ermöglichen und die Systemsicherheit zu gewährleisten.`
        },
        {
          title: '3. Kontaktformular',
          content: `Wenn Sie uns über das Kontaktformular kontaktieren, werden die von Ihnen angegebenen Daten (Name, E-Mail-Adresse, Nachricht sowie optional Projektart und Budget) zum Zweck der Bearbeitung Ihrer Anfrage und für eventuelle Rückfragen gespeichert.

Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).

Ihre Daten werden nach abschließender Bearbeitung Ihrer Anfrage gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.`
        },
        {
          title: '4. Cookies und lokaler Speicher',
          content: `Unsere Website verwendet lokalen Speicher (localStorage), um Ihre Sprachpräferenz zu speichern. Diese Daten werden nur in Ihrem Browser gespeichert und nicht an unsere Server übertragen.

Wir verwenden:
- Lokalen Speicher für die Sprachpräferenz (um Ihre gewählte Sprache zu speichern)

Diese Daten werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeitet (berechtigtes Interesse an einer benutzerfreundlichen Website). Sie können diese Daten jederzeit über Ihre Browsereinstellungen löschen.

Wir verwenden keine Tracking-Cookies oder Cookies von Drittanbietern.`
        },
        {
          title: '5. Ihre Rechte',
          content: `Nach der DSGVO stehen Ihnen folgende Rechte zu:

- Recht auf Auskunft (Art. 15 DSGVO)
- Recht auf Berichtigung (Art. 16 DSGVO)
- Recht auf Löschung (Art. 17 DSGVO)
- Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
- Recht auf Datenübertragbarkeit (Art. 20 DSGVO)
- Widerspruchsrecht (Art. 21 DSGVO)
- Recht auf Beschwerde bei einer Aufsichtsbehörde

Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte unter der oben genannten Adresse.`
        },
        {
          title: '6. Datensicherheit',
          content: `Wir setzen geeignete technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre personenbezogenen Daten gegen zufällige oder vorsätzliche Manipulation, Verlust, Zerstörung oder unbefugten Zugriff zu schützen.

Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung kontinuierlich verbessert.`
        },
        {
          title: '7. Änderungen dieser Datenschutzerklärung',
          content: `Wir behalten uns vor, diese Datenschutzerklärung zu ändern, um stets den aktuellen rechtlichen Anforderungen zu entsprechen oder um Änderungen unserer Leistungen umzusetzen. Die neue Datenschutzerklärung gilt für Ihren nächsten Besuch.`
        }
      ]
    },
    es: {
      title: 'Política de Privacidad',
      subtitle: 'Información sobre el procesamiento de datos según el RGPD',
      lastUpdated: 'Última actualización: Enero 2025',
      sections: [
        {
          title: '1. Responsable del Tratamiento',
          content: `MOTOGNA Tech Studio
Alex Daniel Motogna
Murzgasse 2/13
8600 Bruck an der Mur
Austria

Email: office@motogna.tech`
        },
        {
          title: '2. Recopilación de Datos en Nuestra Web',
          content: `Cuando visita nuestra web, nuestro servidor almacena temporalmente los siguientes datos por razones técnicas:

- Dirección IP del ordenador solicitante
- Fecha y hora del acceso
- Nombre y URL del archivo recuperado
- Sitio web desde el que se accede (URL de referencia)
- Navegador utilizado y, si corresponde, sistema operativo

Estos datos se procesan sobre la base del Art. 6 párr. 1 lit. f RGPD para permitir el uso del sitio web y garantizar la seguridad del sistema.`
        },
        {
          title: '3. Formulario de Contacto',
          content: `Cuando nos contacta a través del formulario, los datos proporcionados (nombre, correo electrónico, mensaje y opcionalmente tipo de proyecto y presupuesto) se almacenarán para procesar su consulta.

Base legal: Art. 6 párr. 1 lit. b RGPD (inicio de contrato) o Art. 6 párr. 1 lit. f RGPD (interés legítimo en responder consultas).`
        },
        {
          title: '4. Cookies y Almacenamiento Local',
          content: `Nuestra web utiliza almacenamiento local (localStorage) para guardar su preferencia de idioma. Estos datos se almacenan solo en su navegador y no se transmiten a nuestros servidores.

Utilizamos:
- Almacenamiento local para preferencia de idioma (para recordar su idioma seleccionado)

Estos datos se procesan sobre la base del Art. 6 párr. 1 lit. f RGPD (interés legítimo en proporcionar una web fácil de usar). Puede eliminar estos datos en cualquier momento a través de la configuración de su navegador.

No utilizamos cookies de seguimiento ni cookies de terceros.`
        },
        {
          title: '5. Sus Derechos',
          content: `Bajo el RGPD, tiene los siguientes derechos:

- Derecho de acceso (Art. 15 RGPD)
- Derecho de rectificación (Art. 16 RGPD)
- Derecho de supresión (Art. 17 RGPD)
- Derecho a la limitación del tratamiento (Art. 18 RGPD)
- Derecho a la portabilidad de datos (Art. 20 RGPD)
- Derecho de oposición (Art. 21 RGPD)
- Derecho a presentar una reclamación ante una autoridad de control`
        },
        {
          title: '6. Seguridad de Datos',
          content: `Utilizamos medidas de seguridad técnicas y organizativas apropiadas para proteger sus datos personales contra manipulación accidental o intencional, pérdida, destrucción o acceso no autorizado.`
        },
        {
          title: '7. Cambios en esta Política',
          content: `Nos reservamos el derecho de modificar esta política de privacidad para cumplir siempre con los requisitos legales actuales o para implementar cambios en nuestros servicios.`
        }
      ]
    },
    it: {
      title: 'Informativa sulla Privacy',
      subtitle: 'Informazioni sul trattamento dei dati secondo il GDPR',
      lastUpdated: 'Ultimo aggiornamento: Gennaio 2025',
      sections: [
        {
          title: '1. Titolare del Trattamento',
          content: `MOTOGNA Tech Studio
Alex Daniel Motogna
Murzgasse 2/13
8600 Bruck an der Mur
Austria

Email: office@motogna.tech`
        },
        {
          title: '2. Raccolta Dati sul Nostro Sito',
          content: `Quando visiti il nostro sito web, il nostro server memorizza temporaneamente i seguenti dati per motivi tecnici:

- Indirizzo IP del computer richiedente
- Data e ora dell'accesso
- Nome e URL del file recuperato
- Sito web da cui si accede (URL referrer)
- Browser utilizzato e, se applicabile, sistema operativo

Questi dati vengono elaborati sulla base dell'Art. 6 par. 1 lett. f GDPR per consentire l'utilizzo del sito web e garantire la sicurezza del sistema.`
        },
        {
          title: '3. Modulo di Contatto',
          content: `Quando ci contatti tramite il modulo, i dati forniti (nome, indirizzo email, messaggio e opzionalmente tipo di progetto e budget) saranno memorizzati per elaborare la tua richiesta.

Base giuridica: Art. 6 par. 1 lett. b GDPR (avvio contratto) o Art. 6 par. 1 lett. f GDPR (interesse legittimo a rispondere alle richieste).`
        },
        {
          title: '4. Cookie e Archiviazione Locale',
          content: `Il nostro sito utilizza l'archiviazione locale (localStorage) per salvare la tua preferenza linguistica. Questi dati sono memorizzati solo nel tuo browser e non vengono trasmessi ai nostri server.

Utilizziamo:
- Archiviazione locale per la preferenza linguistica (per ricordare la lingua selezionata)

Questi dati vengono elaborati sulla base dell'Art. 6 par. 1 lett. f GDPR (interesse legittimo a fornire un sito web user-friendly). Puoi eliminare questi dati in qualsiasi momento attraverso le impostazioni del browser.

Non utilizziamo cookie di tracciamento o cookie di terze parti.`
        },
        {
          title: '5. I Tuoi Diritti',
          content: `Ai sensi del GDPR, hai i seguenti diritti:

- Diritto di accesso (Art. 15 GDPR)
- Diritto di rettifica (Art. 16 GDPR)
- Diritto alla cancellazione (Art. 17 GDPR)
- Diritto alla limitazione del trattamento (Art. 18 GDPR)
- Diritto alla portabilità dei dati (Art. 20 GDPR)
- Diritto di opposizione (Art. 21 GDPR)
- Diritto di reclamo presso un'autorità di controllo`
        },
        {
          title: '6. Sicurezza dei Dati',
          content: `Utilizziamo misure di sicurezza tecniche e organizzative appropriate per proteggere i tuoi dati personali da manipolazione accidentale o intenzionale, perdita, distruzione o accesso non autorizzato.`
        },
        {
          title: '7. Modifiche a Questa Informativa',
          content: `Ci riserviamo il diritto di modificare questa informativa sulla privacy per conformarci sempre ai requisiti legali attuali o per implementare modifiche ai nostri servizi.`
        }
      ]
    },
    ro: {
      title: 'Politica de Confidențialitate',
      subtitle: 'Informații despre prelucrarea datelor conform GDPR',
      lastUpdated: 'Ultima actualizare: Ianuarie 2025',
      sections: [
        {
          title: '1. Operator de Date',
          content: `MOTOGNA Tech Studio
Alex Daniel Motogna
Murzgasse 2/13
8600 Bruck an der Mur
Austria

Email: office@motogna.tech`
        },
        {
          title: '2. Colectarea Datelor pe Site-ul Nostru',
          content: `Când vizitați site-ul nostru, serverul nostru web stochează temporar următoarele date din motive tehnice:

- Adresa IP a computerului solicitant
- Data și ora accesului
- Numele și URL-ul fișierului recuperat
- Site-ul web de pe care se face accesul (URL referrer)
- Browserul utilizat și, dacă este cazul, sistemul de operare

Aceste date sunt prelucrate pe baza Art. 6 alin. 1 lit. f GDPR pentru a permite utilizarea site-ului web și a asigura securitatea sistemului.`
        },
        {
          title: '3. Formularul de Contact',
          content: `Când ne contactați prin formularul de contact, datele furnizate (nume, adresă de email, mesaj și opțional tipul proiectului și bugetul) vor fi stocate pentru procesarea cererii dumneavoastră.

Baza legală: Art. 6 alin. 1 lit. b GDPR (inițiere contract) sau Art. 6 alin. 1 lit. f GDPR (interes legitim în răspunsul la solicitări).`
        },
        {
          title: '4. Cookie-uri și Stocare Locală',
          content: `Site-ul nostru folosește stocare locală (localStorage) pentru a salva preferința dvs. de limbă. Aceste date sunt stocate doar în browserul dvs. și nu sunt transmise serverelor noastre.

Utilizăm:
- Stocare locală pentru preferința de limbă (pentru a memora limba selectată)

Aceste date sunt prelucrate pe baza Art. 6 alin. 1 lit. f GDPR (interes legitim în a oferi un site web ușor de utilizat). Puteți șterge aceste date oricând prin setările browserului.

Nu folosim cookie-uri de urmărire sau cookie-uri de la terți.`
        },
        {
          title: '5. Drepturile Dumneavoastră',
          content: `Conform GDPR, aveți următoarele drepturi:

- Dreptul de acces (Art. 15 GDPR)
- Dreptul la rectificare (Art. 16 GDPR)
- Dreptul la ștergere (Art. 17 GDPR)
- Dreptul la restricționarea prelucrării (Art. 18 GDPR)
- Dreptul la portabilitatea datelor (Art. 20 GDPR)
- Dreptul la opoziție (Art. 21 GDPR)
- Dreptul de a depune o plângere la o autoritate de supraveghere`
        },
        {
          title: '6. Securitatea Datelor',
          content: `Folosim măsuri de securitate tehnice și organizatorice adecvate pentru a vă proteja datele personale împotriva manipulării accidentale sau intenționate, pierderii, distrugerii sau accesului neautorizat.`
        },
        {
          title: '7. Modificări ale Acestei Politici',
          content: `Ne rezervăm dreptul de a modifica această politică de confidențialitate pentru a ne conforma întotdeauna cerințelor legale actuale sau pentru a implementa modificări la serviciile noastre.`
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
            <p className="text-lg text-neutral-600 mb-2">
              {t.subtitle}
            </p>
            <p className="text-sm text-neutral-400 mb-12">
              {t.lastUpdated}
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
