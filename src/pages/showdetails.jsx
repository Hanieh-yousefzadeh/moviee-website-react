import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Header from "../components/header";
function ShowDetails() {
    const { id } = useParams()
    const [show, setShow] = useState(null)
    // console.log(id)

    useEffect(() => {
        async function fetchShow() {
            const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
            const data = await response.json();
            // console.log(data)
            // console.log(data.genres)
            setShow(data)
        }
        fetchShow();
    }, [id]);

    if (!show) {
        return (<h1>Loading...</h1>)
    }

    return (
        <div>
            <Header/>
            <div>
                <img src={show.image.medium} alt="" />
                <h1>{show.name}</h1>
                <p>{show.premiered?.slice(0, 4)}</p>
                <p>⭐{show.rating.average}</p>
                <p>{show.genres.join(",")}</p>
                <div dangerouslySetInnerHTML={{ __html: show.summary }} />

            </div>
            <div>
                <button>Whatch Online</button>
                <button>Download</button>
            </div>
        </div>
    )
};
export default ShowDetails;