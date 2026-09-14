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
            // console.log(data)
            setShows(data)
        }

        fetchShows();
    }, [])

    // console.log(shows);
    return (
        <div>
            <Header />

            <div className="">
                <div className="flex justify-between">
                    <h2>Latest</h2>
                    <Link to="/shows">Veiw all</Link>
                </div>
                <div className="grid grid-cols-4">
                    {[...shows].sort((a, b) => new Date(b.premiered) - new Date(a.premiered)).slice(0, 8).map((show) => (
                        <ShowCart key={show.id} show={show} />
                    ))}

                </div>
            </div>
        </div>
    )
};
export default Home;