import { NavLink } from "react-router-dom";

function Nav() {
    // This function determines the style for each NavLink depending on whether it is active
    const getNavLinkClass = (isActive) => {
        return isActive ? "nav-link active" : "nav-link";
    };

    return (
        <nav className="nav flex-column nav-pills mt-2">
            <NavLink className={({ isActive }) => getNavLinkClass(isActive)} to="./home">
                Home
            </NavLink>
            <NavLink className={({ isActive }) => getNavLinkClass(isActive)} to="./search">
                Search
            </NavLink>
            <NavLink className={({ isActive }) => getNavLinkClass(isActive)} to="./Signin">
                Signin
            </NavLink>
            <NavLink className={({ isActive }) => getNavLinkClass(isActive)} to="./Signup">
                Signup
            </NavLink>
            <NavLink className={({ isActive }) => getNavLinkClass(isActive)} to="./Account">
                Account
            </NavLink>
        </nav>
    );
}

export default Nav;
