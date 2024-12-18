import React from "react";

const Card = () => {
  const CARD_HEADINGS = [
    "Word Association Test",
    "Thematic Apperception Test",
    "SSB Friends.",
  ];
  const CARD_CONTENT = [
    "Write sentence on a word which will be displayed for 15 seconds",
    "Write a story on picture in 4 minutes which will be dispalyed for 30 seconds",
    "Find your future SSB friends to plan you SSB journey and accomodation",
  ];

  return (
    <div>
        Hello this is a CARD
      {CARD_HEADINGS.map((cardHeading, index) => {
        <div key={index}>
          <h2>{cardHeading}</h2>
          <p>{CARD_CONTENT[index]}</p>
        </div>;
      })}
    </div>
  );
};

export default Card;
