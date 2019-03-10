import React from "react";
import ReactSVG from "react-svg";
import { TweenMax, Power2, TimelineLite } from "gsap/TweenMax";

var i = 1;
function makeSmokePuff(origPuff) {
  var newPuff = origPuff.cloneNode(true);
  newPuff.style.opacity = 1;
  var newID = "smoke" + i;
  newPuff.setAttribute("id", newID);
  const DADnGrill = document.getElementById("DADnGrill");
  if (DADnGrill) {
    DADnGrill.insertAdjacentElement("beforeend", newPuff);
  }
  var newPuffEl = document.getElementById(newID);

  setTimeout(function() {
    if (DADnGrill) {
      TweenMax.to(newPuffEl, 8, { y: -300, x: -200, opacity: 0, scale: 4 });
    }
  }, 500);
  setTimeout(function() {
    if (DADnGrill) {
      DADnGrill.removeChild(newPuffEl);
    }
  }, 8500);

  i++;
}

function flipBurger(burger, arm) {
  const flipTime = 1;
  TweenMax.from(burger, flipTime, {
    rotation: 2,
    transformOrigin: "50% 50%"
  });
  TweenMax.to(burger, flipTime, {
    y: -120,
    rotation: 180,
    ease: Power1.easeOut,
    transformOrigin: "50% 50%"
  });
  TweenMax.to(burger, flipTime, {
    y: 0,
    rotation: 359,
    delay: flipTime,
    ease: Power1.easeIn,
    transformOrigin: "50% 50%"
  });

  TweenMax.to(arm, flipTime / 2, {
    rotation: 30,
    ease: Power1.easeOut,
    transformOrigin: "top 3"
  });

  TweenMax.to(arm, flipTime, {
    rotation: 0,
    ease: Power1.easeOut,
    delay: flipTime,
    transformOrigin: "top 3"
  });
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

        const burger = document.getElementById("Burger");
        const arm = document.getElementById("ARM");
        flipBurger(burger, arm);
        setInterval(function() {
          flipBurger(burger, arm);
        }, 5000);
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
