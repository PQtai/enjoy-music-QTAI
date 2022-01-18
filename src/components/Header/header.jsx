import clsx  from "clsx";

import Navbar from "../Navbar/navbar";
import styles from "./Header.module.scss";

function Header() {
    return (
        <div className={clsx(styles.header)}>
            <Navbar/>
        </div>
    )
}
export default Header;