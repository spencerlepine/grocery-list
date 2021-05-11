import mongoose from "mongoose";
import GroceryItem from "../models/groceryItem.js";
import DemoGroceryItem from "../models/demoGroceryItem.js";
import CartItem from "../models/cartItem.js";
import DemoCartItem from "../models/demoCartItem.js"

export const displayError = async (req, res) => {
  res.status(200).json("Usage: url/recommended/<authKey>");
};

export const getRecommended = async (req, res) => {
  try {
    const startTime = new Date().getTime();

    const { key } = req.params;

    const customQueryFields = {
      $project : {
        _id : 1,
        name: 1,
        category: 1,
        serving_cost: 1,
        last_purchased: 1,
        purchase_price: 1,
        priority: 1,
      } 
    }

    // Fetch all of the grocery items
    let groceryItems;
    let cartIds;
    if (key === process.env.USER_KEY) {
      groceryItems = await GroceryItem.aggregate([customQueryFields]);
      cartIds = await CartItem.aggregate([
        {
          $group: { _id: "$_id" },
        },
      ]);
    } else if (key === "demo123") {
      groceryItems = await DemoGroceryItem.aggregate([customQueryFields]);
      cartIds = await DemoCartItem.aggregate([
        {
          $group: { _id: "_$id" },
        },
      ]);
    } else {
      res.status(404).json("invalid authentication key");
      return;
    }

    // Extract available categories
    const allGroceryCategories = {};
    groceryItems.forEach((grocery) => {
      // Save unique category keys
      if (!allGroceryCategories[grocery.category]) {
        allGroceryCategories[grocery.category] = [];
      }
    });

    let todaysDate = new Date();

    // Group groceries by category
    let groupedGroceries = {}

    groceryItems.filter(grocery => {
      // Cross-reference stored cart data
      let thisId = grocery["_id"];

      const itemInCart = cartIds.includes(thisId)

      if (!itemInCart) {
        // Get the date last purchased
        let dateString = grocery["last_purchased"];
        let groceryExpirationDate = new Date(dateString);

        // Find out how many days it ussually lasts
        let groceryLifeSpan = Math.round(
          grocery["purchase_price"] / grocery["serving_cost"]
        );
        
        groceryExpirationDate.setDate(
          groceryExpirationDate.getDate() + groceryLifeSpan
        );

        // If it is past when it expired
        let groceryExpired = (todaysDate >= groceryExpirationDate);

        if (groceryExpired) {
          let categoryArray = allGroceryCategories[grocery.category];
          categoryArray.push(grocery);
        }
      }
    });

    // Sort groceries
    for (const prop in allGroceryCategories) {
      let thisCategoryList = [...allGroceryCategories[prop]];
      // Sort by proirity
      thisCategoryList.sort((groceryA, groceryB) => {
        const priorityA = groceryA["priority"];
        const priorityB = groceryB["priority"];
        
        const servingCostA = Math.max(0, 5 - groceryA["serving_cost"] * 2.5);
        const servingCostB = Math.max(0, 5 - groceryB["serving_cost"] * 2.5);

        const lastPurchaseA = parseInt(
          (Date.now() - Date.parse(groceryA["last_purchased"])) / 100000000
        );
        const lastPurchaseB = parseInt(
          (Date.now() - Date.parse(groceryB["last_purchased"])) / 100000000
        );

        const scoreA = priorityA + servingCostA + lastPurchaseA;
        const scoreB = priorityB + servingCostB + lastPurchaseB;

        return scoreB - scoreA;
      });

      // Only return the _id of reccomendations to save bandwidth

      // Return top 6 from each category
      let topRange = prop === "bread" ? 2 : 6;
      groupedGroceries[prop] = thisCategoryList.slice(
        0,
        Math.min(thisCategoryList.length, topRange)
      ).map(itemObj => ({"_id": itemObj._id }));
    }

    const endTime = new Date().getTime();
    console.log("Code finished running in: " + (Number.parseFloat(endTime - startTime).toFixed(4) / 1000) + " seconds");

    res.status(200).json(groupedGroceries);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
