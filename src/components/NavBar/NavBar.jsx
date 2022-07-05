import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import logoNav from '../../logo.svg'

const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="logoNav">
                <a href={"#"}><img src={logoNav} alt="Logo" /></a>
            </div>
            <ul>
                <li><a href={"www.google.com"} target="_blank">Home</a></li>
                <li><a href={"#"}>Products</a></li>
                <li><a href={"#"}>About</a></li>
                <li><a href={"#"}>Contact</a></li>
                <CartWidget />
            </ul>

        </nav>);
}

export default NavBar;