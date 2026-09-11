import { useEffect, useState } from "react";
import ShowCart from "../components/showCart";

function Shows() {
   
        const [shows, setShows] = useState([]);

     useEffect(() => {
        async function fetchShows() {
            const response = await fetch("https://api.tvmaze.com/shows?page=1")
            const data = await response.json();
            setShows(data)
        }

        fetchShows();
    }, [])

    return (
        <div>
            <h1>همه سریال‌ها</h1>

            {shows.map((show) => (
                <ShowCart key={show.id} show={show} />
            ))}
        </div>
    );
   
};
export default Shows;