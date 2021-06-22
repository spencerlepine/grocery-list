import React from "react";
// import FoodCard from "../../FoodCard/FoodCard"
import SearchCard from "../../SearchCard/SearchCard"
import useSpoonacular from "../../../context/SpoonacularContext/SpoonacularContext.js";
import formatGroceryObj from "../../../modules/formatGroceryObj"
import SearchMessage from "../../SearchMessage/SearchMessage"
import useStyles from "./styles.js";

const UPCResult = () => {
  const classes = useStyles();
  const { itemUPCSearch } = useSpoonacular()

  if (itemUPCSearch) {
    const product = formatGroceryObj({ ...itemUPCSearch })

    return (
      <div className={classes.upcResult}>
        <SearchCard product={product} />
      </div>
    );
  } else { return <SearchMessage message="Enter the product UPC" /> }
};

export default UPCResult
