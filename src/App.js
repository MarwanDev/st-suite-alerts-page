import "./App.css";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="app">
      <SearchBar />
      <Navbar />
      <Layout />
    </div>
  );
}

export default App;
