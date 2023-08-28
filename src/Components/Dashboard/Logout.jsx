import React from "react";
import { FaSortDown, FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

function Logout({ toggleDropdown }) {

    const user = useSelector((state) => state.user);
    const nombre = user.propietario.split(' ');

    return (
        <li>
            <button className="menu-login" onClick={toggleDropdown}>
                <FaUserCircle style={{ marginRight: "8px" }} />
                {nombre[0]}
                <FaSortDown />
            </button>
        </li>
    );
}

export default Logout;