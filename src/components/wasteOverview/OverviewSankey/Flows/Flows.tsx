import {
    AanbodEigenRegioFlow,
    ImportVanAfvalFlow,
    ExportVanAfvalFlow,
    HuishoudelijkAfvalFlow,
    InvoerNationaalFlow,
    InvoerInternationaalFlow
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
        </>
    )
}

export default Flows