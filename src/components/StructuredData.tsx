import Script from 'next/script';

export default function StructuredData() {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Antigravity',
        url: 'https://antigravity.pl',
        logo: 'https://antigravity.pl/logo.png',
        description: 'Kompleksowa optymalizacja Google w modelu subskrypcyjnym dla lokalnych biznesów',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'PL',
        },
        sameAs: [
            // Dodaj linki do social media
        ],
    };

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Google Ecosystem Optimization',
        provider: {
            '@type': 'Organization',
            name: 'Antigravity',
        },
        areaServed: {
            '@type': 'Country',
            name: 'Poland',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Pakiety Optymalizacji Google',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Pakiet Start',
                        description: 'Fundament widoczności w Google dla małych firm',
                    },
                    price: '1500',
                    priceCurrency: 'PLN',
                    priceSpecification: {
                        '@type': 'UnitPriceSpecification',
                        price: '1500',
                        priceCurrency: 'PLN',
                        referenceQuantity: {
                            '@type': 'QuantitativeValue',
                            value: '1',
                            unitCode: 'MON',
                        },
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Pakiet Core',
                        description: 'Kompleksowa optymalizacja dla rosnących firm',
                    },
                    price: '2500',
                    priceCurrency: 'PLN',
                    priceSpecification: {
                        '@type': 'UnitPriceSpecification',
                        price: '2500',
                        priceCurrency: 'PLN',
                        referenceQuantity: {
                            '@type': 'QuantitativeValue',
                            value: '1',
                            unitCode: 'MON',
                        },
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Pakiet Pro',
                        description: 'Dominacja w Google dla konkurencyjnych branż',
                    },
                    price: '4000',
                    priceCurrency: 'PLN',
                    priceSpecification: {
                        '@type': 'UnitPriceSpecification',
                        price: '4000',
                        priceCurrency: 'PLN',
                        referenceQuantity: {
                            '@type': 'QuantitativeValue',
                            value: '1',
                            unitCode: 'MON',
                        },
                    },
                },
            ],
        },
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Czy to jest SEO?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'To więcej niż tradycyjne SEO. To kompleksowa optymalizacja obecności w Google (Google Ecosystem Optimization). Nie skupiamy się tylko na słowach kluczowych, ale na dominacji w całym ekosystemie: Search, Maps, Images i AI Overviews. Dajemy Ci przewagę, której zwykłe SEO nie zapewni.',
                },
            },
            {
                '@type': 'Question',
                name: 'Czy muszę mieć stronę?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Tak, strona jest sercem Twojej obecności online, ale nie musi być skomplikowana. Jeśli jej nie masz lub jest przestarzała, pomożemy Ci stworzyć lub zoptymalizować fundament, na którym zbudujemy Twoją widoczność.',
                },
            },
            {
                '@type': 'Question',
                name: 'Co jeśli zrezygnuję?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Jesteśmy pewni naszej wartości, dlatego nie wiążemy Cię długoterminowymi, nierozerwalnymi umowami. Możesz zrezygnować z miesięcznym wyprzedzeniem. Wszystkie wypracowane efekty i treści pozostają Twoją własnością na zawsze.',
                },
            },
            {
                '@type': 'Question',
                name: 'Czy mogę zmienić pakiet?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Oczywiście. Twój biznes się zmienia, a my skalujemy się razem z Tobą. Możesz płynnie przechodzić między pakietami w górę (gdy potrzebujesz szybszego wzrostu) lub w dół, w zależności od aktualnych potrzeb.',
                },
            },
            {
                '@type': 'Question',
                name: 'Czy to działa w mojej branży?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Nasze metody opierają się na uniwersalnych zasadach algorytmów Google, które działają w każdej branży. Od usług lokalnych po e-commerce B2B – tam, gdzie Twoi klienci szukają rozwiązań, my sprawiamy, że znajdują Ciebie.',
                },
            },
        ],
    };

    return (
        <>
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
