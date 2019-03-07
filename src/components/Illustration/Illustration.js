import React from "react";
import ReactSVG from "react-svg";
import { TweenMax, Power2, TimelineLite } from "gsap/TweenMax";

var i = 1;
function makeSmokePuff(origPuff) {
  var newPuff = origPuff.cloneNode(true);
  newPuff.style.opacity = 1;
  var newID = "smoke" + i;
  newPuff.setAttribute("id", newID);
  document.getElementById("DADnGrill").insertAdjacentElement("beforeend", newPuff);
  var newPuffEl = document.getElementById(newID);
  setTimeout(function() {
    TweenMax.to(newPuffEl, 8, { y: -300, x: -200, opacity: 0, scale: 4 });
  }, 500);
  i++;
}

const Illustration = props => {
  return (
    <ReactSVG
      src="picnic.svg"
      evalScripts="always"
      fallback={() => <span>Error 123!</span>}
      loading={() => <span>Loading</span>}
      onInjected={(error, svg) => {
        if (error) {
          console.error(error);
          return;
        }

        const origPuff = document.getElementById("smoke0");
        origPuff.style.opacity = 0;

        makeSmokePuff(origPuff);
        setInterval(function() {
          makeSmokePuff(origPuff);
        }, 500);
      }}
      renumerateIRIElements={false}
      svgClassName="family-bbq"
      wrapper="span"
      className="illustration"
      onClick={() => {
        console.log("wrapper onClick");
      }}
    />
  );
};

export default Illustration;
