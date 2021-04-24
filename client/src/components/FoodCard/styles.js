import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    foodCard: {
        cursor: "pointer",
        position: "relative",
        minHeight: "100px",
        margin: "1em",
        fontFamily: "Eina, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        '& img': {
            maxHeight: "18vw",
            minHeight: "120px",
            height: "16vw", 
            display: "inherit",
            margin: "10px auto",
        },
        '& h4': {
            color: "#000",
            fontSize: "16px",
            fontWeight: "600",
            marginBottom: "0",
        },
        '& p': {
            padding: "1px 5px 1px 0px",
            margin: "0",
            maxHeight: "40px",
            fontSize: "13px",
        }
    },
    foodPrice: {
        color: "rgb(90, 90, 90)",
        lineHeight: "1.5em",
    },
    foodSize: {
        color: "rgb(153, 153, 153)",
        lineHeight: "19.5px",
        fontWeight: "400",
    },
    deleteButton: {
        color: "#65001b !important",
        backgroundColor: "#e86e6e",
    },
    addButton: {
        height: "42px",
        width: "42px",
        fontSize: "2.5em",
        color: "rgb(67, 176, 42)",
        backgroundColor: "white",
        border: "1px solid rgb(67, 176, 42)",
        borderRadius: "50%",
        position: "absolute",
        top: "-4px",
        right: "-8px",
        touchAction: "manipulation",
        fontWeight: "100",
        whiteSpace: "nowrap",
        userSelect: "none",
        webkitFontSmoothing: "antialiased",
        backgroundImage: "none",
        display: "inline-flex",
        alignItems: "center",
        zIndex: "99",
        padding: "0px",
        justifyContent: "center",
        '&:hover': {
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 4px",
        }
    },
    editButton: {
        color: "black",
        backgroundColor: "#fff3d0",
    },
}));
