import { Link } from "react-router";
function Header() {
    return (
        <header>
            <Link to="genre/Drama">Drama</Link>
            <Link to="genre/Comedy">Comedy</Link>
            <Link to="genre/Ation">Action</Link>
        </header>
    )
};
export default Header;