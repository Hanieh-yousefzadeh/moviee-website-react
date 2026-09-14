import { Link } from "react-router";
function ShowCart({ show }) {

    let rating = 1;
    if (show.rating && show.rating.average) {
        rating = show.rating.average;
    }
    return (
        <Link to={`/show/${show.id}`}>

            <img src={show.image.medium} alt="" />
            <h3>{show.name}</h3>
            <p>{show.premiered?.slice(0, 4)}</p>
            <span>⭐{rating}</span>
        </Link>
    )
};
export default ShowCart;