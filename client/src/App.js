// ROUTER
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";

//SCRENNS
import CreateScreen from "./screens/CreateScreen.js";
import HomeScreen from "./screens/HomeScreen.js";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/create" element={<CreateScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
