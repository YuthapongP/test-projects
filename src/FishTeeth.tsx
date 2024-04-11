import React from "react";
import "./SwiperComponent.css";
import { HamburgerIcon } from "@chakra-ui/icons";
export default function FishTeeth() {
  const allBoxes = () => {
    const allFishBoxes = [];

    for (let i = 1; i <= 10; i++) {
      const fishElement = (
        <div key={i} className="fish2">
          {/* <div className={`fish2 ${i}`}></div> */}
          <span>
            Harry Potter's (Daniel Radcliffe) third year at Hogwarts starts off
            badly when he learns deranged killer Sirius Black (Gary Oldman) has
            escaped from Azkaban prison and is bent on murdering the teenage
            wizard. While Hermione's (Emma Watson) cat torments Ron's (Rupert
            Grint) sickly rat, causing a rift among the trio, a swarm of nasty
            Dementors is sent to protect the school from Black. A mysterious new
            teacher helps Harry learn to defend himself, but what is his secret
            tie to Sirius Black?
          </span>
          {/* <iframe
            id="inlineFrameExample"
            title="Inline Frame Example"
            width="300"
            height="200"
            src={"https://www.kapook.com/"}
            allowFullScreen={true}
          ></iframe> */}

          <div> 1991 </div>
          {/* <HamburgerIcon className="iconSVG"></HamburgerIcon> */}
        </div>
      );
      allFishBoxes.push(fishElement);
    }
    return allFishBoxes;
  };

  return (
    <div className="fish">
      {allBoxes()}
      {/* <div className="fish2">
        <div></div>
      </div>
      <div className="fish2"></div>
      <div className="fish2"></div>
      <div className="fish2"></div>
      <div className="fish2"></div>
      <div className="fish2"></div>
      <div className="fish2"></div>
      <div className="fish2"></div>
      <div className="fish2"></div>
      <div className="fish2"></div> */}
    </div>
  );
}
