import { useState } from "react";
import { Link } from "react-router";
import { CircleX } from "lucide-react";
import Header from "../components/header";
import ShowCart from "../components/showCart";

function Search() {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);

    function handelSearch(e) {
        setSearch(e.target.value);
    }

    async function searchShows() {
        const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${search}`
        );

        const data = await response.json();
        console.log(data)

        setResult(data);
    }

    function handelEnter(e) {
        if (e.key === "Enter") {
            searchShows()
        }
    }

    return (
        <div>
            <Header />

            <div className="flex">
                <Link to="/"> <CircleX /> </Link>

                <input type="text" value={search} onChange={handelSearch} onKeyDown={handelEnter} placeholder="Search..." className="border" />
            </div>

            <div>
                {result.map((item) => (
                    <ShowCart key={item.show.id} show={item.show} />
                ))}
            </div>
        </div>
    );
}

export default Search;