import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  foodCard: {
    backgroundColor: '#fff',
    padding: '0.5em',
    minWidth: '160px',
    maxWidth: '200px',
    cursor: 'pointer',
    position: 'relative',
    width: '12vh',
    margin: '0.4em',
    minHeight: '140px',
    fontFamily:
      'Eina, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif',
    '& img': {
      // 'display': 'block',
      'maxWidth': '17vh',
      'maxHeight': '140px',
      'width': 'auto',
      'height': 'auto',
      'margin': '0',
      'position': 'absolute',
      'top': '50%',
      'left': '50%',
      'MsTransform': 'translate(-50%, -50%)',
      'transform': 'translate(-50%, -50%)'
    },
    '& h4': {
      color: '#000',
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '0',
      maxWidth: '150px',
      maxHeight: '18px',
      overflow: 'hidden',
      marginTop: '10px',
    },
    '& p': {
      padding: '1px 5px 1px 0px',
      margin: '0',
      maxHeight: '40px',
      fontSize: '13px',
    },
  },
  foodPrice: {
    display: 'inline',
    'textShadow': '0.2px 0.2px #0000000e',
    lineHeight: '1.5em',
  },
  foodSize: {
    color: 'rgb(153, 153, 153)',
    lineHeight: '19.5px',
    fontWeight: '400',
  },
  deleteButton: {
    color: '#65001b !important',
    backgroundColor: '#e86e6e',
  },
  addButton: {
    height: '42px',
    width: '42px',
    fontSize: '2.5em',
    color: 'rgb(67, 176, 42)',
    backgroundColor: 'white',
    border: '1px solid rgb(67, 176, 42)',
    borderRadius: '50%',
    position: 'absolute',
    top: '-4px',
    right: '-8px',
    touchAction: 'manipulation',
    fontWeight: '100',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    webkitFontSmoothing: 'antialiased',
    backgroundImage: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    zIndex: '2',
    padding: '0px',
    justifyContent: 'center',
    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 0px 4px',
    },
  },
  editButton: {
    color: 'black',
    backgroundColor: '#fff3d0',
  },
  purchaseSize: {
    paddingLeft: '5px !important',
    color: 'rgb(90, 90, 90)',
    display: 'inline',
  },
  foodName: {
    margin: '0',
    marginBottom: '5px !important',
    overflowWrap: 'anywhere',
  },
  imageContainer: {
    'width': '17vh',
    height: '17vh',
    position: 'relative',
    'maxHeight': '140px',
    padding: '10px',
    margin: 'auto',
  },
  expandButton: {
    display: 'inline',
    position: 'absolute',
    width: 'fit-content',
    color: 'gray',
    right: '25px',
    '& svg': {
      fontSize: '20px',
      'margin': '0',
      'position': 'absolute',
      'top': '0%',
      'left': '0',
      'transform': 'translate(0%, 0%)',
      'MsTransform': 'translate(0%, 0%)',
    }
  },
  infoText: {
    display: 'inline',
    'margin': '0',
    'position': 'absolute',
    'left': '80%',
    'transform': 'translate(80%, 0%)',
    'MsTransform': 'translate(80%, 0%)',
  },
}));