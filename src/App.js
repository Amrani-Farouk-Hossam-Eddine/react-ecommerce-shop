import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import { ShopContxtProvider } from "./context/ShopContxt";

function App() {
  return (
    <div className="App">
      <ShopContxtProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContxtProvider>
    </div>
  );
}

export default App;
