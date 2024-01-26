import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import AddFields from "./components/AddFields";
import DisplayFields from "./components/DisplayFields";
import DynamicDataCollection from "./components/DynamicDataCollection";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <Provider store={store}>
      {showSplash ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <div>
          <AddFields />
          <DisplayFields />
          <DynamicDataCollection />
        </div>
      )}
    </Provider>
  );
}

export default App;
