import React, {useEffect, useState} from "react";
import Spinner from "./Spinner";
import axios from "axios";
import useGif from "../hooks/useGif";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

  // const [gifSrc, setGifSrc] = useState(''); 
  // const [loader, setLoader] = useState('false'); 
 
  
  // async function fetchData(){
  //   setLoader(true); 
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const {data} = await axios.get(url); 
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGifSrc(imageSource); 
  //   setLoader(false); 
  // }

  // useEffect( 
  //   ()=>{
  //     fetchData(); 
  //   },
  //   []
  // )

  const {gifSrc, loader, fetchData} = useGif();   //using custom Hook useGif for code reusability
  
  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black 
                    flex flex-col items-center gap-y-5">
      <h1 className=" mt-[15px] text-2xl font-bold underline uppercase">A Random Gif</h1>

      {
        loader?(<Spinner/>):(<img src={gifSrc} width="200px" height="200px" />)  
      } 

      <button onClick={() => fetchData()} 
              className="w-10/12 bg-blue-200  text-lg py-2 rounded-lg mb-[20px]">
        Generate
      </button>

    </div>
  );  
}

export default  Random; 
