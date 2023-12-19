// Dependences
import { Link } from "react-router-dom";

function NavBar() {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;