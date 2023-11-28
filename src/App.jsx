import CountAnimate from "./component/countAnimate/CountAnimate";
import CarouselItems from "./component/carousel/CarouselItems";
import Footer from "./component/layout/footer/Footer";
import NavBar from "./component/layout/navBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <CarouselItems />
      <CountAnimate />
      <Footer />
    </div>
  );
}

export default App;
