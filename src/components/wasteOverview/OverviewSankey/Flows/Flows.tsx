import {
    AanbodEigenRegioFlow,
    ImportVanAfvalFlow,
    ExportVanAfvalFlow,
    HuishoudelijkAfvalFlow,
    InvoerNationaalFlow,
    InvoerInternationaalFlow,
    ProductieVanAfvalBinnenDeRegioFlow,
    UitvoerNationaal,
    UitvoerInternationaal,
    InvoerVoorWederuitvoerFlow,
    DistributieFlow,
    WederuitvoerFlow,
    DoorvoerFlow
} from '.'


const Flows = () => {
    return (
        <>
            <AanbodEigenRegioFlow />
            <ImportVanAfvalFlow />
            <ExportVanAfvalFlow />
            <HuishoudelijkAfvalFlow />
            <InvoerNationaalFlow />
            <InvoerInternationaalFlow />
            <ProductieVanAfvalBinnenDeRegioFlow />
            <UitvoerNationaal />
            <UitvoerInternationaal />
            <InvoerVoorWederuitvoerFlow />
            <DistributieFlow />
            <WederuitvoerFlow />
            <DoorvoerFlow />
        </>
    )
}

export default Flows