import ReactDOM from "react-dom";
import App from "./App";
//import { Sidenavcontext } from "./context/context";
import { createContext, useState } from "react";
export const Sidenavcontext = createContext(null);

const Root = () => {
  // Use useState to manage the initial state of the context
  const [sidenav, setSidenav] = useState(false);

  return (
    <Sidenavcontext.Provider value={{ setSidenav, sidenav }}>
      <App />
    </Sidenavcontext.Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
