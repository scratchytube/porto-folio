import React from 'react'
import me from '../assets/it-me.png'

const Header = () => {
    return (
        <div>
            <div className="logo">
                <img src={me} alt="" />
            </div>
            <button className='nav-toggle' aria-label='toggle navigation'>
                <span className="hamburger"></span>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item"></li>
                    </ul>
                </nav>
            </button>
        </div>
    )
}

export default Header
