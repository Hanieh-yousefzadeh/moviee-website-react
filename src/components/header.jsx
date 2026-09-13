import { Link } from "react-router";
function Header() {
    return (
        <header>
            <Link to="genre/drama">Drama</Link>
            <Link to="genre/Comedy">Comedy</Link>
            <Link to="genre/Action">Action</Link>
        </header>
    )
};
export default Header;