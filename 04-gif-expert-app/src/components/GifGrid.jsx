import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifCard } from "./GifCard";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <div>
      <h3> {category} </h3>
      {isLoading && <h2>Loading...</h2>}
      <div className="card-grid">
        {gifs.map((gif) => (
          <GifCard key={gif.id} {...gif} />
        ))}
      </div>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
