import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./App.css";
import Navbar from "./components/Navbar";
import Wellcomepage from "./components/Wellcomepage";
import SmartPhones from "./components/Smartphones";
import Categories from "./components/Categories";
import Ebreands from "./components/Ebreands";
import Essentials from "./components/Essentials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]">
        <div className="bg-[#f5f5f5]">
          <Header />
        </div>
        <SearchBar />
        <Navbar />
      </div>
      <Wellcomepage />
      <SmartPhones />
      <Categories />
      <Ebreands />
      <Essentials />
      <Footer />
    </>
  );
}

export default App;
