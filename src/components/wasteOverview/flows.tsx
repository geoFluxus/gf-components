import {
    AanbodEigenRegioFlow,
    DistributieFlow,
    InvoerInternationaalFlow,
    UitvoerInternationaalFlow,
    InvoerVoorWederuitvoerFlow,
    WederuitvoerFlow,
    DoorvoerFlow,
    InvoerNationaalFlow,
    UitvoerNationaalFlow,
    ProductieVanAfvalBinnenDeRegioFlow,
    HuishoudelijkAfvalFlow,
    ImportVanAfvalFlow,
    ExportVanAfvalFlow
}
from './OverviewSankey'


export const flows = {
    aanbod_eigen_regio: {
        key: 1,
        comp: AanbodEigenRegioFlow,
        name: 'Aanbod eigen regio',
        info: 'De goederen die worden vervoerd van een productielocatie in de regio naar een gebruikslocatie in de regio.',
    },
    distributie: {
        key: 2,
        comp: DistributieFlow,
        name: 'Distributie',
        info: 'De goederenstroom binnen het intraregionaal vervoer die niet wordt verklaard door direct productie-gebruik-vervoer.',
    },
    invoer_internationaal: {
        key: 3,
        comp: InvoerInternationaalFlow,
        name: 'Invoer internationaal',
        info: 'De goederen die worden gebruikt in de regio en afkomstig zijn uit het buitenland. Dit is exclusief invoer voor wederuitvoer.',
    },
    uitvoer_internationaal: {
        key: 4,
        comp: UitvoerInternationaalFlow,
        name: 'Uitvoer internationaal',
        info: 'De goederen die zijn geproduceerd in de regio en de regio verlaten met een bestemming in het buitenland. Dit is exclusief wederuitvoer.',
    },
    invoer_voor_wederuitvoer: {
        key: 5,
        comp: InvoerVoorWederuitvoerFlow,
        name: 'Invoer voor wederuitvoer',
        info: 'De goederen die afkomstig zijn uit het buitenland, de regio binnenkomen, daarbij (tijdelijk) eigendom worden van een ingezetene, en daarna, zonder dat significant industriële bewerking plaatsvindt, de regio weer verlaten met een bestemming in het buitenland.',
    },
    wederuitvoer: {
        key: 6,
        comp: WederuitvoerFlow,
        name: 'Wederuitvoer',
        info: 'De goederen die zijn geproduceerd in de regio en de regio verlaten met een bestemming in het buitenland. Dit is exclusief wederuitvoer.',
    },
    doorvoer: {
        key: 7,
        comp: DoorvoerFlow,
        name: 'Doorvoer',
        info: 'De goederen die op weg van de ene naar de andere locatie buiten de regio minimaal een keer overgeslagen worden binnen de regio. De wederuitvoer, waarbij er sprake kan zijn van een niet significante bewerking van goederen en (tijdelijk) eigendom van de goederen door een ingezetene, is niet inbegrepen.',
    },
    invoer_nationaal: {
        key: 8,
        comp: InvoerNationaalFlow,
        name: 'Invoer nationaal',
        info: 'De goederen die worden gebruikt in de regio en afkomstig zijn uit een andere regio in Nederland.',
    },
    uitvoer_nationaal: {
        key: 9,
        comp: UitvoerNationaalFlow,
        name: 'Uitvoer nationaal',
        info: 'De goederen die zijn geproduceerd in de regio en de regio verlaten met een bestemming in een andere regio in Nederland.',
    },
    productie_van_afval_binnen_de_regio: {
        key: 10,
        comp: ProductieVanAfvalBinnenDeRegioFlow,
        name: 'Productie van afval binnen de regio',
        info: 'Afval dat zowel wordt geproduceerd als verwerkt binnen de grenzen van de regio.',
    },
    huishoudelijk_afval: {
        key: 11,
        comp: HuishoudelijkAfvalFlow,
        name: 'Huishoudelijk afval',
        info: 'De statistiek huishoudelijk afval representeert de totale hoeveelheid huishoudelijk afval geproduceerd binnen de regio.',
    },
    import_van_afval: {
        key: 12,
        comp: ImportVanAfvalFlow,
        name: 'Import van afval',
        info: 'Afval dat wordt geproduceerd buiten de regio en vervolgens binnen de regio wordt verwerkt.',
    },
    export_van_afval: {
        key: 13,
        comp: ExportVanAfvalFlow,
        name: 'Export van afval',
        info: 'Afval dat wordt geproduceerd binnen de regio en vervolgens buiten de regio wordt verwerkt.',
    },
}
