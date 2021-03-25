import React from 'react';
import { NavLink } from 'react-router-dom';

const home = () => {
    return (
        <div>
            <div>Home</div>
            <ul>
                <li><NavLink to="/courses">Courses</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
            </ul>
        </div>
    )
}

export default home;