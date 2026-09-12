import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShowCart from "../components/showCart";
function Genre() {

    const [shows, setShows] = useState([]);
    const { genre } = useParams();
    console.log(genre)

    useEffect(() => {
        async function fetchShows() {
            const response = await fetch("https://api.tvmaze.com/shows?page=1")
            const data = await response.json();
            setShows(data);
            console.log(data[0].genres);
        }

        fetchShows();
    }, [])
    const filter = shows.filter((show) => (
        show.genres.includes(genre[0].toUpperCase()+genre.slice(1))
    ));
    console.log(filter)
    return (
        <div>
            <h1>{genre}</h1>
            {filter.map((show) => (<ShowCart key={show.id} show={show} />))}
        </div>
    )
};
export default Genre;