import { useState,useEffect } from "react";
function Home(){

    const [shows, setShows]= useState([]);

    useEffect (()=>{
        async function fetchShows(){
            const response = await fetch( "https://api.tvmaze.com/shows?page=1")
            const data = await response.json();
            setShows(data)
        }

        fetchShows();
    },[])

    console.log(shows);
    return(
        <h1>Home Page</h1>
    )
};
export default Home;