import Character from "./Character";

const Simpsons = (props) => {
  const { simpsons, onLikeToggle, onDelete } = props;

  return (
    <>
      {simpsons.map((item, index) => {
        return (
          <Character
            item={item}
            key={item.id}
            // onDelete={onDelete}
            // onLikeToggle={onLikeToggle}
          />
        );
      })}
    </>
  );
};

export default Simpsons;
