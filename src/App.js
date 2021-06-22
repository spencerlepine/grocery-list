import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/wrappers/Layout/Layout"
import Footer from "./components/Footer/Footer"
import Routes from "./components/pages/Routes/Routes";
import NotificationsPopup from "./components/NotificationsPopup/NotificationsPopup"

function App() {

  return (
    <>
      <NotificationsPopup />
      <Navbar />
      <Layout>
        <Routes />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
