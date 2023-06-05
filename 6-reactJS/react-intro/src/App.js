import logo from "./logo.svg";
import "./App.css";
import IncrementNumber from "./components/IncrementNumber/IncrementNumber";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
  return (
    <div>
      <Header />
      {/* <Main /> */}
      <IncrementNumber />
      <Footer />
    </div>
  );
}

export default App;
