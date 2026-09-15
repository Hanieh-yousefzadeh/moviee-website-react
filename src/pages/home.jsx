import { useState, useEffect } from "react";
import ShowCart from "../components/showCart";
import Header from "../components/header";
import { Link } from "react-router";
import {ChevronRight} from "lucide-react"
import Hero from "../components/hero";
import Footer from "../components/footer";
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
            <Hero/>
            <section className="text-neutral-50 bg-[#0c0c0cfa] sm:py-25 lg:px-15 px-5 sm:px-8 pt-10 pb-13">
                <div className="flex justify-between sm:pb-15 sm:text-xl text-sm pb-5 ">
                    <h2 className="lg:pl-1 xl:pl-2 ">Latest</h2>
                    <Link to="/shows" className="flex items-center sm:gap-2.5 hover:text-[#CF900C] xl:pr-2">Veiw all <ChevronRight className="sm:size-6 pt-1 size-5"/></Link>
                </div>
                <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-y-0 gap-y-3 ">
                    {[...shows].sort((a, b) => new Date(b.premiered) - new Date(a.premiered)).slice(0, 4).map((show) => (
                        <ShowCart key={show.id} show={show} />
                    ))}

                </div>
            </section>
            <Footer/>
        </div>
    )
};
export default Home;