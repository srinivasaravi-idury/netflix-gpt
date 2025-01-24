import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";

const Browse = () => {
useNowPlayingMovies()
  return (
    <div>
      <Header />
      {/* 
      Main container
        - Video BG
        -Video Title
      Secondary Movie Lst
        - Movie List * n
          -cards * n
       */}
    </div>
  );
};

export default Browse;
