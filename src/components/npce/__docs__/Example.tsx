import GlobalStyle from "../../../globalStyles";
import NPCE from "../NPCE";

const data = {
    vervangen: {
        begin: { renew: 37, other: 63},
        curr: { renew: 42, other: 58 },
        unit: '%'
    },
    behouden_verwerking: {
        begin: { high: 1, other: 76, low: 23},
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