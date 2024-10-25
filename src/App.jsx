import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import "./App.css";

const loadGoogleFonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=EB+Garamond:wght@400;700&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

loadGoogleFonts();

const App = () => {
  return (
    <div className="page__container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
