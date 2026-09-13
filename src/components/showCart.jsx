import { Link } from "react-router";
function ShowCart({ show }) {
    return (
        <Link to={`/show/${show.id}`}>

            <img src={show.image.medium} alt="" />
            <h3>{show.name}</h3>
            <p>{show.premiered}</p>
            <span>⭐{show.rating.average}</span>
        </Link>
    )
};
export default ShowCart;