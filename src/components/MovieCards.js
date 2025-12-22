import { IMG_CDN_URL } from "../utils/constant";

const MovieCards = ({ posterPath }) => {
  //   console.log(posterPath);
  return (
    <div className="w-48 p-2">
      <img alt="Movie card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCards;
