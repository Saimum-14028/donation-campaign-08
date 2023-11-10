import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        
        <div className="navbar bg-base-100 md:w-11/12 mx-auto mb-5">
            <div className="flex-1">
                <img src="https://i.ibb.co/t8g6nwV/Logo.png" alt="logo" />
            </div>
            <div className="flex-none">
                <ul className="menu-horizontal gap-1 md:gap-5 px-1 text-lg font-semibold">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                            }
                            >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                            }
                            >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                            }
                            >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;