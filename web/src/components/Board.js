const Board = (cards) => {
  return (
    <div className="boardItem">
      {cards?.cards?.map((image, index) => (
        <img
          key={`image-${index}`}
          src={`http://localhost:3333/${image}`}
          height={150}
          width={70}
          alt="Image board item"
        />
      ))}
    </div>
  );
};

export default Board;
