import React, {useState} from "react";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";

function App() {

  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (<>
    <Navbar />
    <LandingPage/>
    </>
  );
}

export default App;
