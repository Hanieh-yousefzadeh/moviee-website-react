import { Link } from "react-router";
import { Search } from "lucide-react"
function Header() {
    return (
        <header className="flex justify-between">

            <div className="flex">
                <h1>Moviee</h1>
                <Link to="genre/drama">Drama</Link>
                <Link to="genre/Comedy">Comedy</Link>
                <Link to="genre/Action">Action</Link>
            </div>
            <div className="flex gap-5">
                 <Link to="/search" className="flex"><Search /> Search</Link>
                <button>Sing in</button>
            </div>

        </header>
    )
};
export default Header;