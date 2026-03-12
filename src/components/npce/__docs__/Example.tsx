import GlobalStyle from "../../../globalStyles";
import NPCE from "../NPCE";

const data = {
  "vervangen": {
    "begin": {
      "renew": 59,
      "other": 41
    },
    "curr": {
      "renew": 69,
      "other": 31
    },
    "unit": "%"
  },
  "besparen": {
    "begin": {
      "total": 3719,
      "raw": 3719,
      "reduction": 0
    },
    "curr": {
      "total": 3719,
      "raw": 3674,
      "reduction": 45
    },
    "goals": {
      "begin": {
        "total": 3719,
        "raw": 3533,
        "reduction": 186
      },
      "curr": {
        "total": 3719,
        "raw": 3124,
        "reduction": 595
      },
      "unit": "kt"
    },
    "unit": "kt"
  },
  "behouden_hoeveelheid": {
    "begin": {
      "total": 485,
      "raw": 485,
      "reduction": 0
    },
    "curr": {
      "total": 485,
      "raw": 561,
      "reduction": -76
    },
    "goals": {
      "begin": {
        "total": 485,
        "raw": 456,
        "reduction": 29
      },
      "curr": {
        "total": 485,
        "raw": 412,
        "reduction": 73
      },
      "unit": "kt"
    },
    "unit": "kt"
  },
  "behouden_verwerking": {
    "begin": {
      "high": 0,
      "other": 50,
      "low": 30,
      "unknown": 20
    },
    "curr": {
      "high": 0,
      "other": 76,
      "low": 20,
      "unknown": 19
    },
    "unit": "%"
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