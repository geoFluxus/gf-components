import {
    LokaleWinningFlow,
    AanbodEigenRegioFlow,
    InvoerInternationaalFlow,
    UitvoerInternationaalFlow,
    InvoerNationaalFlow,
    UitvoerNationaalFlow,
    ProductieVanAfvalBinnenDeRegioFlow,
    HuishoudelijkAfvalFlow,
    ImportVanAfvalFlow,
    ExportVanAfvalFlow
}
from './OverviewSankey'


export const flows = {
    lokale_winning: {
        key: 1,
        comp: LokaleWinningFlow,
        name: 'Lokale winning',
        info: 'Missing description',
    },
    invoer_nationaal: {
        key: 2,
        comp: InvoerNationaalFlow,
        name: 'Invoer nationaal',
        info: 'De goederen die worden gebruikt in de regio en afkomstig zijn uit een andere regio in Nederland.',
    },
    invoer_internationaal: {
        key: 3,
        comp: InvoerInternationaalFlow,
        name: 'Invoer internationaal',
        info: 'De goederen die worden gebruikt in de regio en afkomstig zijn uit het buitenland. Dit is exclusief invoer voor wederuitvoer.',
    },
    aanbod_eigen_regio: {
        key: 4,
        comp: AanbodEigenRegioFlow,
        name: 'Aanbod eigen regio',
        info: 'De goederen die worden vervoerd van een productielocatie in de regio naar een gebruikslocatie in de regio.',
    },
    uitvoer_nationaal: {
        key: 5,
        comp: UitvoerNationaalFlow,
        name: 'Uitvoer nationaal',
        info: 'De goederen die zijn geproduceerd in de regio en de regio verlaten met een bestemming in een andere regio in Nederland.',
    },
    uitvoer_internationaal: {
        key: 6,
        comp: UitvoerInternationaalFlow,
        name: 'Uitvoer internationaal',
        info: 'De goederen die zijn geproduceerd in de regio en de regio verlaten met een bestemming in het buitenland. Dit is exclusief wederuitvoer.',
    },
    productie_van_afval_binnen_de_regio: {
        key: 7,
        comp: ProductieVanAfvalBinnenDeRegioFlow,
        name: 'Productie van afval binnen de regio',
        info: 'Afval dat zowel wordt geproduceerd als verwerkt binnen de grenzen van de regio.',
    },
    import_van_afval: {
        key: 8,
        comp: ImportVanAfvalFlow,
        name: 'Import van afval',
        info: 'Afval dat wordt geproduceerd buiten de regio en vervolgens binnen de regio wordt verwerkt.',
    },
    huishoudelijk_afval: {
        key: 9,
        comp: HuishoudelijkAfvalFlow,
        name: 'Huishoudelijk afval',
        info: 'De statistiek huishoudelijk afval representeert de totale hoeveelheid huishoudelijk afval geproduceerd binnen de regio.',
    },
    export_van_afval: {
        key: 10,
        comp: ExportVanAfvalFlow,
        name: 'Export van afval',
        info: 'Afval dat wordt geproduceerd binnen de regio en vervolgens buiten de regio wordt verwerkt.',
    },
}
