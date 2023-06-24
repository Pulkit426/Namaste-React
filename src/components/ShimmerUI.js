import ShimmerCard from "./ShimmerCard";

const ShimmerUI = () => {
  let cardList = [];
  for (let i = 0; i < 10; i++) {
    cardList.push(<ShimmerCard key={Math.floor(Math.random() * 10101)} />);
  }

  return <div className="res-container">{cardList}</div>;
};

export default ShimmerUI;
