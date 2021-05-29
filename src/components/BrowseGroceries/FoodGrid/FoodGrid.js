import React from "react"
import FoodCard from "../../FoodCard/FoodCard"
import EmptyPrompt from "../../EmptyPrompt/EmptyPrompt"
import missingImage from "../../../images/empty.jpg"
import CardGrid from "../../CardGrid/CardGrid"
import { FORM } from "../../../constants/routeConstants"
import useStyles from "./styles"

import useGroceries from "../../../context/GroceriesContext/GroceriesContext.js"

const FoodGrid = () => {
  const classes = useStyles()
  
  const { allGroceryItems, totalGroceryCount } = useGroceries()
  
  const foodCards = allGroceryItems.map((item, i) => <FoodCard key={i} groceryItem={item} />)
  const fetchProgress = Math.ceil((allGroceryItems.length / totalGroceryCount)*100)
  const progressStyle = { width: `${fetchProgress}%` }

  return (
    <>
      {foodCards.length > 0
        ?
        <>
          {fetchProgress < 100 && <div className={classes.progressBar} style={progressStyle}></div>}
          <CardGrid cardItems={foodCards} />
        </>
        :
        <div className={classes.overviewContainer}>
          <EmptyPrompt
            image={missingImage}
            message="No groceries saved"
            destination={FORM}
            buttonText="New Item"
          />
        </div>
      }
    </>
  )
}

export default FoodGrid
