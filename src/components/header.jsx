import { Link, NavLink } from "react-router";
import { Search } from "lucide-react"
function Header() {
    return (
        <header className="flex justify-between">

            <div className="flex">
                <Link to="/">Moviee</Link>
                <NavLink to="/genre/drama" className={({isActive})=> isActive ? "text-red-500" :"text-black"}>Drama</NavLink>
                <NavLink to="/genre/Comedy" className={({isActive})=> isActive ? "text-red-500" :"text-black"}>Comedy</NavLink>
                <NavLink to="/genre/Action" className={({isActive})=> isActive ? "text-red-500" :"text-black"}>Action</NavLink>
            </div>
            <div className="flex gap-5">
                 <NavLink to="/search"className={({isActive})=>`flex ${isActive ? "text-red-500" :"text-black"}`}><Search /> Search</NavLink>
                <button>Sing in</button>
            </div>

        </header>
    )
};
export default Header;