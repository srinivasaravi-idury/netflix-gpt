import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (movieId) => {
  //fetch trailer video && updating the store with trailer video data
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const response = await data.json();
    const filteredData = response.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : response.results[0];
    dispatch(addTrailerVideo(trailer.key));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer