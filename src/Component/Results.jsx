import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Results = ({ results }) => {
  console.log(results);
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((elem) => (
        <Thumbnail key={elem.id} result={elem} />
      ))}
    </FlipMove>
  );
};

export default Results;
