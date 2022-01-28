import clsx from 'clsx';


import style from './Navbar.module.scss';
import Navslide from './Navslide/navslide'
import {
FaSearch,
FaBell,
FaCog
} 
from 'react-icons/fa'
function Navbar() {
    return (
        <div className={clsx(style.navbar)}>
            <ul className={clsx(style.list)}>
                <li className={clsx(style.listItem,style.listItem_Search)}>
                    <div className={style.listItemSearch}>
                        <label htmlFor='search'>
                        <FaSearch className={style.navIcon}></FaSearch>
                        </label>
                        <input 
                        id='search'
                        placeholder="Search for song,artist..."
                        className={style.listItemInput}
                        ></input>
                    </div>
                </li>
                <li className={clsx(style.listItem)}>
                    <span className={style.listItem_Custom}>
                    <FaBell className={style.navIcon}></FaBell>
                    </span>
                    <span className={style.listItem_Custom}>
                    <FaCog className={style.navIcon}></FaCog>
                    </span>
                    <button className={clsx(style.navbtn)}>Upgrade your account</button>
                </li>
            </ul>
            <Navslide/>
        </div>
    )
}
export default Navbar;