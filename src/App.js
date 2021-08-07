import "./styles/App.css";
import Header from "./components/NavBarPage";
import InputForm from "./components/form";
import Cards from "./components/Cards";
import Card_two from "./components/card_two";
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
      <Card_two />
      <Socials />
      <Footer />
    </div>
  );
}
export default App;
