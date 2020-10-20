import React from 'react';
import './../App.scss';

const Sidebar = () =>{
    return (
        <div className="sidebar">
            <nav className="nav-sidebar">
                <a className="nav-item" href="#">Profile</a>
                <a className="nav-item" href="#">Messages</a>
                <a className="nav-item" href="#">News</a>
                <a className="nav-item" href="#">Music</a>
                <a className="nav-item" href="#">Settings</a>
            </nav>
        </div>
    )
}
export default Sidebar