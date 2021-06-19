import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  popupContainer: {
    "position": "fixed",
    "top": "0",
    "bottom": "0",
    "left": "0",
    "right": "0",
    "background": "rgba(0, 0, 0, 0.7)",
    "transition": "opacity 500ms",
    zIndex: "200",
  },
  popupElement: {
    maxHeight: "70%",
    overflowY: "scroll",
    "visibility": "visible",
    "opacity": "1",
    "margin": "70px auto",
    "padding": "20px",
    "background": "#fff",
    "borderRadius": "5px",
    "width": "60%",
    "transition": "all 5s ease-in-out",
    minWidth: "300px",
    minHeight: "70vh",
    height: "fit-content",
  },
  productGrid: {
    marginTop: "1em",
    display: "grid",
    gridTemplateColumns: "40% auto",
    justifyContent: "space-around",
    "@media (max-width:900px)": {
      gridTemplateColumns: "auto",
      margin: "auto",
      textAlign: "center",
    },
  },
  productImage: {
    maxWidth: "200px",
    maxHeight: "200px",
    height: "auto",
    margin: "auto",
    columnFill: "auto",
    "gridRowStart": "1",
    "gridRowEnd": "2"
  },
  productRating: {
    "@media (max-width:900px)": {
      gridRowStart: "2",
      gridRowEnd: "3",
      gridColumnStart: "0",
    },
    width: "fit-content",
    margin: "auto",
    marginTop: "5px",
  },
  foodName: {
    "@media (max-width:900px)": {
      marginTop: "0",
      display: "block",
      marginBottom: "15px",
    },
    marginTop: "10px",
    marginBottom: "5px",
    height: "fit-content",
    fontSize: "1.5em",
    color: "#4f4e4e",
  },
  cartIcon: {
    paddingTop: "4px",
  },
  addButton: {
    "@media (max-width:900px)": {
      gridRowStart: "5",
      gridRowEnd: "6",
      gridColumnStart: "0",
    },
    // height: "42px",
    width: "fit-content",
    fontSize: "1.2em",
    backgroundColor: "rgb(67, 176, 42)",
    border: "1px solid rgb(67, 176, 42)",
    borderRadius: "25px",
    touchAction: "manipulation",
    fontWeight: "200",
    color: "white",
    height: "fit-content",
    whiteSpace: "nowrap",
    userSelect: "none",
    webkitFontSmoothing: "antialiased",
    backgroundImage: "none",
    display: "inline-flex",
    alignItems: "center",
    zIndex: "2",
    padding: "10px 20px 10px 20px",
    margin: " 5px auto 5px auto",
    justifyContent: "center",
    "&:hover": {
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 4px",
    },
  },
  editButton: {
    "@media (max-width:900px)": {
      gridRowStart: "6",
      gridRowEnd: "7",
      gridColumnStart: "0",
    },
    width: "fit-content",
    fontSize: "1.2em",
    backgroundColor: "white",
    border: "1px solid rgb(154 97 27)",
    borderRadius: "5px",
    touchAction: "manipulation",
    fontWeight: "400",
    color: "rgb(241 154 47)",
    whiteSpace: "nowrap",
    height: "fit-content",
    userSelect: "none",
    webkitFontSmoothing: "antialiased",
    backgroundImage: "none",
    display: "inline-flex",
    alignItems: "center",
    zIndex: "2",
    padding: "10px 20px 10px 20px",
    margin: " 1em auto 1em auto",
    justifyContent: "center",
    "&:hover": {
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 4px",
    },
  },
  productDetails: {
    "@media (max-width:900px)": {
      textAlign: "left",
      gridRowStart: "4",
      gridRowEnd: "5",
      marginBottom: "15px",
    },
  },
  foodPrice: {
    float: "right",
    display: "block",
    "@media (max-width:900px)": {
      float: "right",
    },
    "color": "#929292",
    width: "fit-content",
    "fontWeight": "400",
    "margin": "auto",
    "fontSize": "1.7em"
  },
  productSpecification: {
    display: "block",
    color: "#4f4e4e",
    padding: "2px",
    margin: "0",
  },
  foodBrand: {
    "background": "#eeeeee",
    "width": "fit-content",
    "padding": "0.3em",
    "margin": "1px",
    "color": "#4f4d4b",
    "borderRadius": "5px"
  },
  nutritionDetials: {
    margin: "auto",
    // width: "100%",
    maxWidth: "400px",
    gridColumnStart: 1,
    gridColumnEnd: 2,
    minWidth: "300px",
  },
  extraDetials: {
    backgroundColor: "#dcdfe1",
    borderRadius: "6px",
    padding: "10px",
  },
}));