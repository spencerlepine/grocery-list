import React from "react"
import { setId } from "../../../actions/selectedItem"
import { deleteGrocery } from "../../../actions/groceries"
import { addToCart } from "../../../actions/cart"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import searchMatch from "./searchMatch"
import useStyles from "./styles"

const FoodItem = ({ groceryItem, CellComponent, RowComponent }) => {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const currentSearch = useSelector(state => state.search)

    const handleEdit = (e) => {
        dispatch(setId(groceryItem._id))
        history.push("/form")
    }
    
    const handleAdd = (e) => {
        e.stopPropagation()
        dispatch(addToCart(groceryItem))
    }

    let expectedKeys = [
        "_id",
        "name",
        "purchase_price",
        "purchase_size",
        "serving_cost",
        "category",
        "last_purchased",
        "priority",
    ]
    
    let completeItem = Object.keys(groceryItem).filter(key => expectedKeys.includes(key))
    
    return (
        <>
            {(searchMatch(currentSearch, groceryItem.name) || currentSearch.length < 3)
                &&
            <div class={classes.foodCard} onClick={handleEdit}>
                <img alt={groceryItem.name} src={groceryItem.image || "https://d2d8wwwkmhfcva.cloudfront.net/197x/filters:fill(FFF,true):format(jpg)/d1s8987jlndkbs.cloudfront.net/assets/missing-item-4bbe82b8555e4d1c12626fd482cb2409713e8e30835645ff3650ef66a725d03c.png"}></img>
                <h4>{groceryItem.name}</h4>
                <p class={classes.foodPrice}>{parseFloat(groceryItem.purchase_price["$numberDecimal"]).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
                <p class={classes.foodSize}>{groceryItem.purchase_size}</p>
                <button onClick={handleAdd} className={classes.addButton}>+</button>
            </div>
            }
        </>
    )
}

export default FoodItem
