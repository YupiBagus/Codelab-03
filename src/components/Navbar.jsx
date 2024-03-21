import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return(
        <div>
            <h1>Ini Navbar</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Beranda</Link>
                    </li>
                    <li>
                        <Link to="/about">Tentang</Link>
                    </li>
                    <li>
                        <Link to="/contact">Kontak</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Navbar;