import React from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

const Character = (props) => {
  const { character, quote, image, id, characterDirection, liked } = props.item;

  return (
    <div className="characterContainer">
      <Name character={character} id={id} liked={liked} />
      <Quote quote={quote} />
      <Image image={image} character={character} />
      <Delete id={id} />
    </div>
  );
};

export default Character;
