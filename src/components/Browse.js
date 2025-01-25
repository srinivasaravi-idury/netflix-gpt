import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
useNowPlayingMovies()
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
