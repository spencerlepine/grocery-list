import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
  formContainer: {
    marginTop: "2%",
    minHeight: "80vh",
  },
  form: {
    maxWidth: "600px",
    margin: "auto",
    padding: "24px",
    marginBottom: "1vh",
    backgroundColor: "white",
    borderRadius: "1vh",
  },
  itemDetails: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    paddingLeft: ".9375rem",
    paddingRight: ".9375rem",
    gridRowGap: "15px",
  },
  itemName: {
    gridColumnStart: "1",
    gridColumnEnd: "3",
    "& input": {
      color: "rgb(57, 57, 57)",
      fontSize: "24px",
      fontWeight: "600",
      lineHeight: "32px",
      padding: "6px",
    },
  },
  itemSize: {
    width: "30vw",
    "& input": {
      margin: "0px",
      fontWeight: "400",
      color: "rgb(142, 142, 142)",
      fontSize: "16px",
      lineHeight: "17px",
      padding: "6px",
    },
  },
  imageContainer: {
    position: "relative",
    width: "fit-content",
    margin: "auto",
    height: "max(10vh, auto)",
    minHeight: "160px",
    "& img": {
      maxWidth: "200px",
      maxHeight: "200px",
    },
    "& button": {
      content: '"X"',
      position: "absolute",
      display: "block",
      top: "-10px",
      right: "-10px",
      borderRadius: "50%",
      height: "35px",
      width: "35px",
      color: "#e23535",
      backgroundColor: "#fff1f1",
      border: "2px solid #cc3131",
      fontSize: "1.3em",
      fontWeight: "900",
      "&:hover": {
        backgroundColor: "#dc3434",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 4px",
      },
    },
  },
  itemPrice: {
    "& input": {
      fontSize: "26px",
      lineHeigt: "26px",
      fontWeight: "700",
      padding: "6px",
    },
  },
  priceIndicator: {
    position: "absolute",
    fontSize: "26px",
    margin: "0",
    padding: "0",
    left: "-15px",
    bottom: "15px",
  },
  itemPriority: {
    margin: "inherit",
    ["@media (max-width:600px)"]: {
      // eslint-disable-line no-useless-computed-key
      gridColumnStart: "1",
      gridColumnEnd: "3",
      margin: "auto",
    },
  },
  dollarSign: {
    position: "relative",
    width: "50%",
    marginLeft: "auto",
    "& div": {
      marginTop: "0",
    },
  },
  divLabel: {
    fontSize: "13px",
    padding: "0",
    color: "#403e3e",
  },
  itemServing: {
    color: "#6261a0",
    "& input": {
      color: "#6261a0",
    },
  },
  itemDate: {
    width: "fit-content",
    marginLeft: "auto",
    ["@media (max-width:600px)"]: {
      // eslint-disable-line no-useless-computed-key
      gridColumnStart: "1",
      gridColumnEnd: "3",
      margin: "20px auto 20px auto",
    },
  },
  button: {
    gridColumnStart: "1",
    gridColumnEnd: "3",
  },
  fileInput: {
    outlineOffset: "-10px",
    height: "200px",
    margin: "auto",
    display: "block",
    "& div": {
      backgroundColor: "#f5f5f5",
      border: "2px dashed #b7b7b7",
      height: "100%",
      width: "fit-content",
      margin: "auto",
      position: "relative",
    },
    "& input": {
      width: "80%",
      padding: "15px",
      color: "#0f690f",
      margin: "auto",
      minHeight: "200px",
    },
  },
}))
