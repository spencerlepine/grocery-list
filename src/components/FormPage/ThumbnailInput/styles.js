import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
  imageContainer: {
    position: "relative",
    width: "fit-content",
    margin: "auto",
    height: "max(10vh, auto)",
    minHeight: "160px",
    "& img": {
      "border": "4px solid white",
      height: "200px",
      maxWidth: "200px",
    },
  },
  removeImageBtn: {
    content: '"X"',
    position: "absolute",
    display: "block",
    top: "0%",
    right: "-5%",
    borderRadius: "50%",
    height: "45px",
    width: "45px",
    color: "#e23535",
    backgroundColor: "white",
    border: "5px solid #cc3131",
    fontSize: "1.6em",
    fontWeight: "900",
    "&:hover": {
      backgroundColor: "#f3f3f3",
      color: "#ab1515",
      border: "5px solid #ab1515",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 4px",
    },
  },
  divLabel: {
    fontSize: "13px",
    padding: "0",
    color: "#403e3e",
  },
  fileInput: {
    outlineOffset: "-10px",
    height: "200px",
    margin: "auto",
    maxWidth: "250px",
    display: "block",
    marginBottom: "1em",
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
      paddingBottom: "0",
      color: "#0f690f",
      margin: "auto",
      height: "100%",
      minHeight: "200px",
    },
  },
  newCategoryBtn: {
    "padding": "0px 6px",
    "margin": "auto",
    "color": "white",
    "background": "#ff9749",
    "fontWeight": "500",
    "fontSize": "24px",
    "border": "none",
    "borderRadius": "5px",
    "top": "22px",
    "position": "absolute",
    '&:hover': {
      backgroundColor: "#d47b39",
    },
  },
  itemCategory: {
    position: "relative",
  },
  searchPopup: {
    position: "absolute",
    width: "20%",
    height: "20%",
    padding: "0.75em 0.25em",
    fontSize: "2em",
    top: "25%",
    left: "-32%",
    backgroundColor: "orange",
    color: "white",
    "border": "3px solid #deaa6a",
    "@media (max-width:700px)": {
      top: "60%",
      left: "-2%",
      width: "95%",
    }
  },
}))
