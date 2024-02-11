import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "'Poppins', sans-serif",
        },
        components: {
          Menu: {
            colorPrimary: "#818CF8",
          },
        },
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);
