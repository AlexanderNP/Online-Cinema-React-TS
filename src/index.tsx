import ReactDOM from "react-dom/client";
import "./globalStyles/reset.css";
import "./globalStyles/index.css";
import App from "./app/App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </HashRouter>
);
