import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();

    const nowplayingMovies = useSelector(store=> store.movies.nowplayingMovies);


    const getNowPlayingMovies = async()=>{
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?page=1',
        API_OPTIONS
      );
      const json = await data.json();
    
      dispatch(addNowPlayingMovies(json.results));
    };
    
    useEffect(()=>{
      if(!nowplayingMovies)
      getNowPlayingMovies();
    },[]);
  
}

export default useNowPlayingMovies;