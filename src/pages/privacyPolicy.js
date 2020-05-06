import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const privacyPolicy = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path='/' locale={locale} data={data}>

      <section className='container' style={{ margin: '140px 0', padding: ' 0 4%' }}>
        <h1>Privacy</h1>
        <strong>Il titolare del trattamento</strong>

        <p>La informa che i Suoi dati personali saranno trattati nel rispetto della normativa citata, al fine di garantire i diritti, le libertà fondamentali, nonchè la dignità delle persone fisiche, con particolare riferimento alla riservatezza e all’identità personale.</p>
        <strong>Comunicazione</strong>
        <p>I dati potranno essere comunicati a soggetti terzi nominati responsabili del trattamento ai sensi dell’articolo 28 del GDPR e in particolare a istituti bancari, a società attive nel campo assicurativo, a fornitori di servizi strettamente necessari allo svolgimento dell’attività d’impresa, ovvero a consulenti dell’azienda, ove ciò si riveli necessario per ragioni fiscali, amministrative, contrattuali o per esigenze tutelate dalle vigenti normative.
I Suoi dati personali, ovvero i dati personali di terzi nella sua titolarità, potranno altresì essere comunicati a società esterne, individuate di volta in volta, cui il Titolare affidi l’esecuzione di obblighi derivanti dall’incarico ricevuto alle quali saranno trasmessi i soli dati necessari alle attività loro richieste.
Tutti i dipendenti, consulenti, e ogni altra “persona fisica” che svolgono la propria attività sulla base delle istruzioni ricevute dal Titolare del Trattamento dei Dati, ai sensi dell’art. 29 del GDPR, sono nominati “Incaricati del trattamento” (nel seguito anche “Incaricati”).
Agli Incaricati o ai Responsabili, eventualmente designati, il Titolare impartisce adeguate istruzioni operative, con particolare riferimento all’adozione e al rispetto delle misure di sicurezza, al fine di poter garantire la riservatezza e la sicurezza dei dati. In riferimento agli aspetti di protezione dei dati personali l’utente è invitato, ai sensi dell’art. 33 del GDPR a segnalare al Titolare del trattamento eventuali
circostanze o eventi dai quali possa discendere una potenziale “violazione dei dati personali (data breach)” al fine di consentire una immediata valutazione e l’adozione di eventuali azioni volte a contrastare tale evento mediante ai recapiti sopra indicati.
Il Titolare è tenuto inoltre a comunicare i dati ad Autorità Pubbliche su loro specifica richiesta.
                                        </p>
        <strong>Tipologie di Dati Raccolti e Finalità</strong>
        <p>Le tipologie di Dati Personali raccolti da questo sito web, in modo autonomo o tramite terze parti sono: Riferimenti Anagrafici, Cookie e Dati di Statistici di Utilizzo.
Altri Dati Personali raccolti potrebbero essere indicati in altre sezioni di questa privacy policy o mediante testi informativi visualizzati contestualmente alla raccolta dei Dati stessi.
                                        </p>
        <strong>Form di Contatto</strong>
        <p>I Dati Personali possono essere inseriti volontariamente dall’Utente mediante apposito form di contatto, hanno lo scopo puramente identificativo, per la gestione anagrafica e comunicazioni espressamente richieste dall’Utente.</p>
        <strong>Cookies</strong>
        <p>All’interno dei cookie creati dal sito e dai servizi di cui si avvale non vengono memorizzati tuoi dati personali che consentano di risalire e/o conoscere in modo diretto la tua identità e non rappresentano un rischio per la tua privacy o per l’integrità dei sistemi informatici che utilizzi per accedere alla rete di comunicazione Internet ovvero al Sito.
L’eventuale utilizzo di Cookies, o mediante altri strumenti di tracciamento, da parte di questo sito o dei titolari dei servizi terzi utilizzati da questo sito, ove non diversamente precisato, ha la finalità di identificare l’Utente e registrare le relative preferenze per finalità strettamente legate all’erogazione del servizio richiesto dall’Utente.
Il mancato conferimento da parte dell’Utente di alcuni Dati Personali potrebbe impedire il corretto funzionamento del sito e l’impossibilità di erogare i propri servizi.
L’Utente si assume la responsabilità dei Dati Personali pubblicati o condivisi mediante questo sito e ne garantisce il diritto di comunicarli o diffonderli, liberando il Titolare da qualsiasi responsabilità verso terzi.
Per visionare maggiori informazioni sui cookie presenti nel sito e le relative finalità visita questo indirizzo:<span> <a href='https://www.techniplate.it/privacy-policy/cookie-policy/'>Cookie policy</a></span>
                                        </p>
        <strong>Google Analytics</strong>
        <p>In relazione a specifici servizi offerti da Google Inc. è stato predisposta una specifica integrazione alla presente visionabile a questo indirizzo: <span><a href='https://www.techniplate.it/privacy-policy/privacy-policy-google-analytics/'>Privacy Policy Google Analytics</a></span></p>
        <strong>Titolare del Trattamento dei Dati</strong>
        <p>Telefono di riferimento: +39 071 204002<br />

Indirizzo email di riferimento: info@vanillamarketing.it
        </p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query privacyPolicy($locale: String) {
    header: file(name: { eq: $locale }, relativeDirectory: { eq: "header" }) {
      childHeaderJson {
        home
        homeLink
        about
        aboutLink
        services
        contact
        contactLink
        linkGetStarted
        textGetStarted
      }
    }
    socialMedia: file(
      name: { eq: $locale }
      relativeDirectory: { eq: "social-media" }
    ) {
      childSocialMediaJson {
        overtitle
        title
        multiline1
        subtitle
        titleSeo
        descriptionSeo
      }
    }
    portfolio: file(
      name: { eq: $locale }
      relativeDirectory: { eq: "portfolio" }
    ) {
      childPortfolioJson {
        overtitle
        title
        subtitle
      }
    }
    footerCta: file(
      name: { eq: $locale }
      relativeDirectory: { eq: "footer-cta" }
    ) {
      childFooterCtaJson {
        title
        subtitle
      }
    }
  }
`
export default privacyPolicy
