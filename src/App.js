import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav/Nav";
import RoundedOuterContainer from "./components/rounded-container/RoundedOuterContainer";
import ItemsHome from "./components/home-item/HomeItem";
import Home from "./pages/home/Home";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <>
      <Nav />
      <Home />
    </>
  );
}

export default App;
