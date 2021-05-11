import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(() => ({
  navBar: {
    backgroundColor: "#333333",
    width: "100%",
    borderBottom: "2px solid #828282",
  },
  navbarContainer: {
    display: "flex",
    width: "70%",
    margin: "auto",
    "@media (max-width: 900px)": {
      width: "100%",
      margin: "0",
      display: "grid",
      gridTemplateColumns: "auto auto auto auto auto",
    },
  },
  link: {
    // minWidth: "125px",
    width: "max-content",
    display: "inline-flex",
    backgroundColor: "rgb(44, 44, 44)",
    borderRadius: "4px",
    padding: "14px 10px",
    fontSize: "1.3em !important",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    textDecoration: "none",
    color: "#e2e2e6",
    marginTop: "auto",
    marginBottom: "auto",
    "& p": {
      margin: "5%",
      float: "right",
      padding: "0",
      marginLeft: "5px",
      whiteSpace: "nowrap",
      "@media (max-width: 900px)": {
        display: "None",
      },
    },
  },
  settingIcon: {
    marginLeft: "0",
    "@media (max-width: 900px)": {
      marginLeft: "auto",
    },
  },
  cartLink: {
    display: "flex",
    marginRight: "0",
    backgroundColor: "ghostwhite",
    padding: "0px 10px 0px 10px",
    borderRadius: "15px",
    "& p": {
      color: "#333333",
      fontWeight: "700",
      margin: "auto",
      display: "inline !important",
    },
    "& svg": {
      color: "#333333",
    },
    "@media (max-width: 900px)": {
      margin: "auto",
    },
  },
  recommendedIcon: {
    "@media (max-width: 900px)": {
      margin: "auto",
    },
  },
}))
