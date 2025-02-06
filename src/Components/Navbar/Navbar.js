import React from "react";
import "./Navbar.css"
import logo from "../../Assets/logo/logo-1500x400-white.png"
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-main">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="" />
                        </a>
                        {/* <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                                <Link className="nav-link" to="/leave">
                                    Leave
                                </Link>
                                <Link className="nav-link" href="/attendence">
                                    Attendence
                                </Link>
                                <Link className="nav-link" href="/more">
                                    More
                                </Link>
                            </div>
                        </div>
                        <div className="profile">
                            <div className="dropdown">
                                <a className="btn " href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FaRegCircleUser />
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><Link className="dropdown-item" href="/profile">Profile</Link></li>
                                    <li><Link className="dropdown-item" href="#">Logout</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    );
};

export default Navbar;
