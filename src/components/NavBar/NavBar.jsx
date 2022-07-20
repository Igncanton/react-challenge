import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import logoNav from '../../logo.svg'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="logoNav">
                <Link className="navbarLogo" to={"/"}><img src={logoNav} alt="Logo" /></Link>
            </div>
            <ul>
                <li><Link to={"category/guitars"}>Guitars</Link></li>
                <li><Link to={"category/bass"}>Bass</Link></li>
                <li><Link to={"category/drums"}>Drums</Link></li>

                <CartWidget />
            </ul>

        </nav>);
}

export default NavBar;