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
        info: 'Alle goederen die in de regio gewonnen worden (bijv. geteelde aardappels of gewonnen grind).',
    },
    aanbod_eigen_regio: {
        key: 2,
        comp: AanbodEigenRegioFlow,
        name: 'Aanbod eigen regio',
        info: 'De goederen die in de regio worden geproduceerd, en ook in de regio worden gebruikt.',
    },
    invoer_nationaal: {
        key: 3,
        comp: InvoerNationaalFlow,
        name: 'Invoer nationaal',
        info: 'De goederen die worden gebruikt in de regio en afkomstig zijn uit een andere regio in Nederland.',
    },
    invoer_internationaal: {
        key: 4,
        comp: InvoerInternationaalFlow,
        name: 'Invoer internationaal',
        info: 'De goederen die worden gebruikt in de regio en afkomstig zijn uit het buitenland.',
    },
    uitvoer_nationaal: {
        key: 5,
        comp: UitvoerNationaalFlow,
        name: 'Uitvoer nationaal',
        info: 'De goederen die in de regio worden geproduceerd, en elders in Nederland worden gebruikt.',
    },
    uitvoer_internationaal: {
        key: 6,
        comp: UitvoerInternationaalFlow,
        name: 'Uitvoer internationaal',
        info: 'De goederen die in de regio worden geproduceerd, en in het buitenland worden gebruikt.',
    },
    productie_van_afval_binnen_de_regio: {
        key: 7,
        comp: ProductieVanAfvalBinnenDeRegioFlow,
        name: 'Lokaal afvalbeheer',
        info: 'Afval dat zowel geproduceerd als verwerkt wordt binnen de regio.',
    },
    import_van_afval: {
        key: 8,
        comp: ImportVanAfvalFlow,
        name: 'Import van afval',
        info: 'Afval dat buiten de regio wordt geproduceerd, en in de regio wordt verwerkt.',
    },
    huishoudelijk_afval: {
        key: 9,
        comp: HuishoudelijkAfvalFlow,
        name: 'Huishoudelijk afval',
        info: 'De hoeveelheid afval dat door huishoudens in de regio wordt geproduceerd.',
    },
    export_van_afval: {
        key: 10,
        comp: ExportVanAfvalFlow,
        name: 'Export van afval',
        info: 'Afval dat binnen de regio wordt geproduceerd, en vervolgens elders wordt verwerkt.',
    },
}
