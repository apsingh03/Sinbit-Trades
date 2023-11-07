import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import Demo from "./pages/Demo";

import { Routes, Route } from "react-router-dom";
import Calculator from "./pages/Calculator";

function App() {
  // document.body.addEventListener('onscroll', function( event ) {
  //   console.log(event);
  // } );

  // when user scrolls header bg will change to white etc ...
  window.onscroll = function () {
    myScrollFunction();
  };

  function myScrollFunction() {
    if (document.documentElement.scrollTop > 100) {
      let header = document.querySelector("#header");
      header.style.backgroundColor = "white";
      header.style.position = "fixed";
      header.style.top = 0;
      header.style.left = 0;
      header.style.width = "100%";
      header.style.zIndex = 3;
      header.style.transition = "all 0.5s ease-in";
      header.style.opacity = 1;

      let headerChild = document.querySelectorAll("#header  a");

      headerChild.forEach((childEle) => (childEle.style.color = "#151515"));
    }

    if (document.documentElement.scrollTop < 100) {
      let header = document.querySelector("#header");
      header.style.backgroundColor = "transparent";
      header.style.position = "relative";
      header.style.transition = "all 0.5s ease-out";

      let headerChild = document.querySelectorAll("#header  a");

      headerChild.forEach((childEle) => (childEle.style.color = "#fff"));
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
