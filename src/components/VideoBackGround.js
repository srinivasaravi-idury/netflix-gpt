import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackGround = ({movieId}) => {
const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
useMovieTrailer(movieId);
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo + "?autoplay=1&mute=1&controls=0&loop=1&playlist=" + trailerVideo}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
