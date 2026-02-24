import GlobalStyle from "../../../globalStyles";
import NPCE from "../NPCE";

const data = {
    vervangen: {
        begin: { renew: 37, other: 63},
        curr: { renew: 42, other: 58 },
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