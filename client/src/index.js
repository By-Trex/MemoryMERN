import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//CSS
import "./bootstrap.min.css";
import { Provider } from "react-redux";

import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import MemoriesReducers from "./reducers/MemoriesReducers";
import thunk from "redux-thunk";

const reducers = combineReducers({
  memories: MemoriesReducers,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
