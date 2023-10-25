import { NavLink } from "react-router-dom";

export default function Menu() {
    return(
        <div className="menu">
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/add">Ajouter Techno</NavLink></li>
            <li><NavLink to="/list">Toutes les technos</NavLink></li>
          
        </ul>
        </div>
    );
}