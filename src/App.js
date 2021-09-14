import "./styles/App.css";
import Header from "./components/NavBarPage";
import InputForm from "./components/form";
import Cards from "./components/Cards";
import CardTwo from "./components/CardTwo";
import Footer from "./components/footer";
import Socials from "./components/social";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="wrap">
      <Header />
      <InputForm />
      <Cards />
      <CardTwo />
      <Socials />
      <Footer />
    </div>
  );
}
export default App;


