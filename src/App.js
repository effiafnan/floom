import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header";
import Carousal from "./components/Carousal";
import ReviewsSection from "./components/Reviews";
import Features from "./components/Features";
import Contact from "./components/Contactus";
import DeliveryLocations from "./components/DeliveryLocations";
import About from "./components/Aboutus";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Carousal />
        <ReviewsSection />
        <Features />
        <Contact />
        <DeliveryLocations /> 
        <About />
        <Footer />
        
        
    </div>
  );
}

export default App;
