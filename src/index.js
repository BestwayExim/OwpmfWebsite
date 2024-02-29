import ReactDOM from "react-dom";
import App from "./App";
//import { Sidenavcontext } from "./context/context";
import { createContext, useState } from "react";
export const Sidenavcontext = createContext(null);
export const QRCodeProvider = createContext(null);
export const SetScrollProvaider = createContext(null);

const Root = () => {
  // Use useState to manage the initial state of the context
  const [sidenav, setSidenav] = useState(true);
  const [isScrolled, setScrolled] = useState(false);

  const [show, handleClose] = useState(false);
  return (
    <QRCodeProvider.Provider value={{ handleClose, show }}>
      <Sidenavcontext.Provider value={{ setSidenav, sidenav }}>
        <SetScrollProvaider.Provider value={{ setScrolled, isScrolled }}>
          <App />
        </SetScrollProvaider.Provider>
      </Sidenavcontext.Provider>
    </QRCodeProvider.Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
