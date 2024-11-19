import "./App.css";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductsProvider } from "./context/ProductsProvider";

function App() {
  return (
    <ProductsProvider>
      <div className="container">
        <Header />
        <Card />
        <Footer />
        <ToastContainer />
      </div>
    </ProductsProvider>
  );
}

export default App;
