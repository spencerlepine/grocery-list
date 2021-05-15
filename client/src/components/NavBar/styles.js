import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(() => ({
  navBarSpacing: {
    height: "65px",
    top: "0",
    width: "10px",
  },
  navBar: {
    zIndex: 6,  
    position: "fixed",
    top: "0",
    backgroundColor: "#333333",
    width: "100%",
    borderBottom: "2px solid #828282",
  },
  navbarContainer: {
    display: "flex",
    // width: "70%",
    margin: "auto",
  },
  menuToggleBtn: {
    zIndex: 99,
    width: "max-content",
    display: "inline-flex",
    borderRadius: "4px",
    padding: "14px 10px",
    fontSize: "1.3em !important",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    textDecoration: "none",
    color: "#e2e2e6",
    marginTop: "auto",
    marginBottom: "auto",
  },
  settingIcon: {
    marginLeft: "0",
    "@media (max-width: 900px)": {
      marginLeft: "auto",
    },
  },
  cartLink: {
    display: "flex",
    margin: "auto",
    marginLeft: "auto",
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
    // "@media (max-width: 900px)": {
    //   margin: "auto",
    // },
  },
  recommendedIcon: {
    "@media (max-width: 900px)": {
      margin: "auto",
    },
  },
  sidebar: {
    zIndex: 11,
    position: "fixed",
    top: "0",
    height: "100vh",
    paddingTop: "50px",
    minWidth: "250px",
    maxWidth: "300px",
    backgroundColor: "rgb(35, 35, 35)",
  },
  link: {
    width: "max-content",
    marginLeft: "20%",
    display: "flex",  
    borderRadius: "4px",
    padding: "14px 10px",
    fontSize: "1.3em !important",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    color: "#e2e2e6",
    "& p": {
      margin: "5%",
      float: "right",
      padding: "0",
      marginLeft: "5px",
      whiteSpace: "nowrap",
    },
    "&:hover": {
      color: "gray",
    }
  }
}))
