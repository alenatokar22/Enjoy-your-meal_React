import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="nav">
          <GiKnifeFork />
          <Link className="logo" to={"/"}>
            delicious
          </Link>
        </div>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
