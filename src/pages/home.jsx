import { useState, useEffect } from "react";
import ShowCart from "../components/showCart";
import Header from "../components/header";
import { Link } from "react-router";
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
            <Header />


            <h2>برترین ها</h2>
            <Link to="/shows"> مشاهده همه</Link>
            <div className="grid grid-cols-4">
                {shows.slice(0, 8).map((show) => (
                    <ShowCart key={show.id} show={show} />
                ))}
            </div>
        </div>
    )
};
export default Home;