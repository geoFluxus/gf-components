import FlowWrapper from './FlowWrapper'
import AanbodEigenRegioFlow from './AanbodEigenRegioFlow'
import ImportVanAfvalFlow from './ImportVanAfvalFlow'
import ExportVanAfvalFlow from './ExportVanAfvalFlow'
import HuishoudelijkAfvalFlow from './HuishoudelijkAfvalFlow'
import InvoerNationaalFlow from './InvoerNationaalFlow'
import InvoerInternationaalFlow from './InvoerInternationaalFlow'
import ProductieVanAfvalBinnenDeRegioFlow from './ProductieVanAfvalBinnenDeRegioFlow'
import UitvoerNationaalFlow from './UitvoerNationaalFlow'
import UitvoerInternationaalFlow from './UitvoerInternationaalFlow'
import InvoerVoorWederuitvoerFlow from './InvoerVoorWederuitvoerFlow'
import DistributieFlow from './DistributieFlow'
import WederuitvoerFlow from './WederuitvoerFlow'
import DoorvoerFlow from './DoorvoerFlow'


const flowComponents = {
    aanbod_eigen_regio: AanbodEigenRegioFlow,
    distributie: DistributieFlow,
    invoer_internationaal: InvoerInternationaalFlow,
    uitvoer_internationaal: UitvoerInternationaalFlow,
    invoer_voor_wederuitvoer: InvoerVoorWederuitvoerFlow,
    wederuitvoer: WederuitvoerFlow,
    doorvoer: DoorvoerFlow,
    invoer_nationaal: InvoerNationaalFlow,
    uitvoer_nationaal: UitvoerNationaalFlow,
    productie_van_afval_binnen_de_regio: ProductieVanAfvalBinnenDeRegioFlow,
    huishoudelijk_afval: HuishoudelijkAfvalFlow,
    import_van_afval: ImportVanAfvalFlow,
    export_van_afval: ExportVanAfvalFlow,
}

const flowInfo = {
    aanbod_eigen_regio: 'De goederen die worden vervoerd van een productielocatie in de regio naar een gebruikslocatie in de regio.',
    distributie: 'De goederenstroom binnen het intraregionaal vervoer die niet wordt verklaard door direct productie-gebruik-vervoer.',
    invoer_internationaal: 'De goederen die worden gebruikt in de regio en afkomstig zijn uit het buitenland. Dit is exclusief invoer voor wederuitvoer.',
    uitvoer_internationaal: 'De goederen die zijn geproduceerd in de regio en de regio verlaten met een bestemming in het buitenland. Dit is exclusief wederuitvoer.',
    invoer_voor_wederuitvoer: 'De goederen die afkomstig zijn uit het buitenland, de regio binnenkomen, daarbij (tijdelijk) eigendom worden van een ingezetene, en daarna, zonder dat significant industriële bewerking plaatsvindt, de regio weer verlaten met een bestemming in het buitenland.',
    wederuitvoer: 'De goederen die zijn geproduceerd in de regio en de regio verlaten met een bestemming in het buitenland. Dit is exclusief wederuitvoer.',
    doorvoer: 'De goederen die op weg van de ene naar de andere locatie buiten de regio minimaal een keer overgeslagen worden binnen de regio. De wederuitvoer, waarbij er sprake kan zijn van een niet significante bewerking van goederen en (tijdelijk) eigendom van de goederen door een ingezetene, is niet inbegrepen.',
    invoer_nationaal: 'De goederen die worden gebruikt in de regio en afkomstig zijn uit een andere regio in Nederland.',
    uitvoer_nationaal: 'De goederen die zijn geproduceerd in de regio en de regio verlaten met een bestemming in een andere regio in Nederland.',
    productie_van_afval_binnen_de_regio: 'Afval dat zowel wordt geproduceerd als verwerkt binnen de grenzen van de regio.',
    huishoudelijk_afval: 'De statistiek huishoudelijk afval representeert de totale hoeveelheid huishoudelijk afval geproduceerd binnen de regio.',
    import_van_afval: 'Afval dat wordt geproduceerd buiten de regio en vervolgens binnen de regio wordt verwerkt.',
    export_van_afval: 'Afval dat wordt geproduceerd binnen de regio en vervolgens buiten de regio wordt verwerkt.',
}


const Flows = ({data}) => {
    return (
        <>
            {Object.entries(flowComponents).map(([type, component], index) => {
                const Component = component,
                      compData = data?.type
                return (
                    <FlowWrapper
                        key={`flow-${index}`}
                        name={type}
                        value={compData?.value}
                        unit={compData?.unit}
                    >
                        <Component />
                    </FlowWrapper>
                )
            })}
        </>
    )
}

export default Flows