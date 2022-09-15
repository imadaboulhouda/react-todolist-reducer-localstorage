import React from "react";
import Home from "./pages/Home";
import { TodoAppProvider } from "./context/cp";
function App() {
  return (
    <React.Fragment>
      <TodoAppProvider>
        <Home />
      </TodoAppProvider>
    </React.Fragment>
  );
}

export default App;
