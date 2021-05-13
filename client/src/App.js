import React from "react"
import { useSelector } from "react-redux"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import BrowseGroceries from "./components/BrowseGroceries/BrowseGroceries"
import Form from "./components/Form/Form"
import Cart from "./components/Cart/Cart"
import Settings from "./components/Settings/Settings"
import Error from "./components/Error/Error"
import Footer from "./components/Footer/Footer"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Recommended from "./components/Recommended/Reccomended"
import "./index.css"

const App = () => {
  const authStatus = useSelector((state) => state.authStatus)

  return (
    <BrowserRouter>
      <NavBar />
      {authStatus
        ?
        <Switch>
          <Route exact path="/">
            <BrowseGroceries />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/recommended">
            <Recommended />
          </Route>
          <Route path="/">
            <Error />
          </Route>          
        </Switch>
        :
        <Switch>  
          <Route exact path="/register">
            <Register />
          </Route>       
          <Route path="/">
            <Login />
          </Route> 
        </Switch>
        
      }
      <Footer />
    </BrowserRouter>
  )
}

export default App
