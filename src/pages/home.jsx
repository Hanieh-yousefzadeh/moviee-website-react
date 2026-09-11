import { useState, useEffect } from "react";
import ShowCart from "../components/showCart";
function Home() {

    const [shows, setShows] = useState([]);

    useEffect(() => {
        async function fetchShows() {
            const response = await fetch("https://api.tvmaze.com/shows?page=1")
            const data = await response.json();
            setShows(data)
        }

        fetchShows();
    }, [])

    console.log(shows);
    return (
        <div>
            <h1>Home Page</h1>
            {shows.map((show) => (
                <ShowCart key={show.id} show={show} />
            ))}
        </div>
    )
};
export default Home;