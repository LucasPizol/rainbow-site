import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <AboutUs />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
