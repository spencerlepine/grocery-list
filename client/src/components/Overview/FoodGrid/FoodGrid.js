import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setId } from "../../../actions/selectedItem"

import FoodCard from "../../FoodCard/FoodCard"
import useStyles from "./styles"
import CircularProgress from "@material-ui/core/CircularProgress"


const FoodGrid = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const groceries = useSelector((state) => state.groceries)
  const foodItems =
    groceries && groceries[0] !== undefined
      ? groceries.map((item, i) => <FoodCard key={i} groceryItem={item} />)
      : []

  useEffect(() => {
    dispatch(setId(null))
  }, [dispatch])

  return (
    <>
        {foodItems.length ? (
        <div className={classes.itemsGrid}>{foodItems}</div>
        ) : (
        <div className={classes.warning}>
            <CircularProgress />
        </div>
        )}
    </>
  )
}

export default FoodGrid
