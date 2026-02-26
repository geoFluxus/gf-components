import GlobalStyle from "../../../globalStyles";
import NPCE from "../NPCE";

const data = {
    vervangen: {
        begin: { renew: 37, other: 63 },
        curr: { renew: 42, other: 58 },
        unit: '%'
    },
    besparen: {
        begin: { total: 2051, raw: 2051, reduction: 0 },
        curr: { total: 2051, raw: 1210, reduction: 2051 - 1210 },
        goals: {
            begin: { total: 2051, raw: 1928, reduction: 2051 - 1928 },
            curr: { total: 2051, raw: 1743, reduction: 2051 - 1743 },
            unit: 'kt'
        },
        unit: 'kt'
    },
    behouden_hoeveelheid: {
        begin: { total: 275, raw: 275, reduction: 0 },
        curr: { total: 275, raw: 197, reduction: 275 - 197 },
        goals: {
            begin: { total: 275, raw: 275 * 0.85, reduction: 275 * 0.15 },
            curr: { total: 275, raw: 275 * 0.85, reduction: 275 * 0.15 },
            unit: 'kt'
        },
        unit: 'kt'
    },
    behouden_verwerking: {
        begin: { high: 1, other: 76, low: 23 },
        curr: { high: 2, other: 70, low: 28 },
        unit: '%'
    }
}

const Example: FC<GFButtonProps> = ({
}) => {
    return (
        <>
            <GlobalStyle />
            <NPCE
                year={2023}
                data={data}
            />
        </>
    );
};

export default Example;