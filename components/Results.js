import Thumbnail from "./Thumbnail";

const Results = ({ res }) => {
  return (
    <>
      {res.map((result) => {
        <Thumbnail key={result.id} result={result} />;
      })}
    </>
  );
};

export default Results;
