import PlainPage from "./Components/PlainPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="main" />
      <PlainPage />
      <Footer />
    </div>
  );
}

export default App;
