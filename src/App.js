// App.js
import ProductProvider from "./ProductContext";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";
import Layout from "./layout";
import logo from "./assets/logo.png";
import fot from "./assets/footer.png"

function App() {
  return (
    <ProductProvider>
      <div className="nav">
        <img src={logo} alt="logo" />
        <ul className="list">
          <li>Discovery</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
        <ul className="ul2">
          <li>
            <i class="bi bi-person"></i>
          </li>
          <li>
            <i class="bi bi-cart3"></i>
          </li>
        </ul>
      </div>
      <div className="poster">
        <div className="box">
          <span>🌱</span>
          <h3>The nature candle</h3>
          <p>
            All handmade with natural soy wax, Candleaf is a companion for all
            your pleasure moments{" "}
          </p>
          <h5>Discovery our collection</h5>
        </div>
      </div>

      
      <Layout />
         
      <div className="App">
        <ProductList />
        <ShoppingCart />
      </div>

      <div className="foother">
       <div className="line"></div>
       <img src={fot} alt="fot" />
       <p>Your natural candle made for <br></br> your home and for your wellness.</p>
       <div className="box2">
        <div >
        <ul>
          <li className="hname">Discovery</li>
          <li className="sname">New season</li>
          <li className="sname">Most searched</li>
          <li className="sname">Most selled</li>
        </ul>
        </div>

        <div>
        <ul>
          <li className="hname">About</li>
          <li className="sname">Help</li>
          <li className="sname">Shipping</li>
          <li className="sname">Affiliate</li>
        </ul>
        </div>

        <div>
        <ul>
          <li className="hname">Info</li>
          <li className="sname">Contact us</li>
          <li className="sname">Privacy Policies</li>
          <li className="sname">Terms & Conditions</li>
        </ul>
        </div>
       </div>
      </div>

    </ProductProvider>
  );
}

export default App;
