import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
useNowPlayingMovies();
usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
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
