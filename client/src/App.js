
// ROUTER
import { Route, BrowserRouter as Router } from "react-router-dom";

//SCRENNS
import CreateScreen from "./screens/CreateScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <Route path="/create" component = {CreateScreen} />
      <Route path="/" component = {HomeScreen} exact/>
    </Router>
  );
}

export default App;
