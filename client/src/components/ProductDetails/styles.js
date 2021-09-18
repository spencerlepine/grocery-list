import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  detailsContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  productGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '3em',
    flexDirection: 'column',
  },
  productImage: {
    position: 'relative !important',
    top: '0 !important',
    left: '0 !important',
    transform: 'translate(0, 0) !important',
    maxWidth: '200px',
    maxHeight: '200px',
    height: 'auto',
    margin: '0.25em auto !important',
  },
  productRating: {
    '@media (max-width:900px)': {
      gridRowStart: '2',
      gridRowEnd: '3',
      gridColumnStart: '0',
    },
    width: 'fit-content',
    margin: 'auto',
    marginTop: '5px',
  },
  foodName: {
    '@media (max-width:900px)': {
      marginTop: '0',
      display: 'block',
      marginBottom: '15px',
    },
    marginTop: '10px',
    marginBottom: '5px',
    height: 'fit-content',
    fontSize: '1.5em',
    color: '#4f4e4e',
  },
  cartIcon: {
    paddingTop: '4px',
  },
  addButton: {
    '@media (max-width:900px)': {
      gridRowStart: '5',
      gridRowEnd: '6',
      gridColumnStart: '0',
    },
    // height: '42px',
    width: 'fit-content',
    fontSize: '1.2em',
    backgroundColor: 'rgb(67, 176, 42)',
    border: '1px solid rgb(67, 176, 42)',
    borderRadius: '25px',
    touchAction: 'manipulation',
    fontWeight: '200',
    color: 'white',
    height: 'fit-content',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    webkitFontSmoothing: 'antialiased',
    backgroundImage: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    zIndex: '2',
    padding: '10px 20px 10px 20px',
    margin: ' 5px auto 5px auto',
    justifyContent: 'center',
    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 0px 4px',
    },
  },
  editButton: {
    '@media (max-width:900px)': {
      gridRowStart: '6',
      gridRowEnd: '7',
      gridColumnStart: '0',
    },
    width: 'fit-content',
    fontSize: '1.2em',
    backgroundColor: 'white',
    border: '1px solid rgb(154 97 27)',
    borderRadius: '5px',
    touchAction: 'manipulation',
    fontWeight: '400',
    color: 'rgb(241 154 47)',
    whiteSpace: 'nowrap',
    height: 'fit-content',
    userSelect: 'none',
    webkitFontSmoothing: 'antialiased',
    backgroundImage: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    zIndex: '2',
    padding: '10px 20px 10px 20px',
    margin: ' 1em auto 1em auto',
    justifyContent: 'center',
    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 0px 4px',
    },
  },
  productDetails: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    maxHeight: '30em',
    overflowY: 'scroll',
    paddingBottom: '2em',
    margin: '0 2em',
    '@media (max-width:900px)': {
      textAlign: 'left',
      gridRowStart: '4',
      gridRowEnd: '5',
      marginBottom: '15px',
    },
  },
  foodPrice: {
    float: 'right',
    display: 'block',
    '@media (max-width:900px)': {
      float: 'right',
    },
    'color': '#929292',
    width: 'fit-content',
    'fontWeight': '400',
    'margin': 'auto',
    'fontSize': '1.7em',
  },
  productSpecification: {
    display: 'block',
    color: '#4f4e4e',
    maxWidth: '250px',
    padding: '2px',
    margin: '0',
    wordWrap: 'wrap',
  },
  foodBrand: {
    'background': '#d8d8d8',
    'width': 'fit-content',
    'padding': '0.3em',
    'margin': '1px',
    'color': '#4f4d4b',
    'borderRadius': '5px',
  },
  nutritionDetials: {
    margin: 'auto',
    // width: '100%',
    maxWidth: '400px',
    gridColumnStart: 1,
    gridColumnEnd: 2,
    minWidth: '300px',
  },
  extraDetials: {
    backgroundColor: '#fbfbfb',
    border: '1px solid #d8d8d8',
    borderRadius: '6px',
    padding: '10px',
    marginTop: '0.5em',
  },
}));
