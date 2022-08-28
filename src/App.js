import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
