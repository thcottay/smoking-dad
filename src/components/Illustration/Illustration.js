import React from "react";
import ReactSVG from 'react-svg';

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
        console.log(svg);
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
