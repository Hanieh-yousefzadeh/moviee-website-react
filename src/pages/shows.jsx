import { useEffect, useState } from "react";
import ShowCart from "../components/showCart";
import Header from "../components/header";

function Shows() {

    const [shows, setShows] = useState([]);

    useEffect(() => {
        async function fetchShows() {
            const response = await fetch("https://api.tvmaze.com/shows?page=1")
            const data = await response.json();
            // console.log(data)
            setShows(data)
        }

        fetchShows();
    }, [])

    return (
        <div>
            <Header/>
            <div>
                <h1>All movies</h1>

                {shows.map((show) => (
                    <ShowCart key={show.id} show={show} />
                ))}
            </div>
        </div>
    );

};
export default Shows;