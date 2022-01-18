import clsx  from 'clsx'
import style from './Category.module.scss' 

import {
    FaHome,
    FaWindowRestore,
    FaImages,
    FaHeadphonesAlt,
    FaVideo,
    FaHistory,
    FaFile,
} from "react-icons/fa"

function Category() {
    return (
        <div className={`${clsx(style.category)} row no-gutters`}>
            <div className={`${clsx(style.userLogin)} col l-12`}>
                <div className={clsx(style.CategoryImg)}
                style={{
                    backgroundImage : `url("http://windows79.com/wp-content/uploads/2021/02/Thay-the-hinh-dai-dien-tai-khoan-nguoi-dung-mac.png")`,
                    backgroundSize : '50% auto',
                    paddingTop: '50%',
                    backgroundPosition: 'center',
                    backgroundRepeat : 'no-repeat',
                }}
                ></div>
                <button className={clsx(style.btnLogin)}>Login</button>
            </div>
            <div className={`${clsx(style.CategoryList)} col l-12`}>
                <ul className={clsx(style.List)}>
                    <li className={clsx(style.ListItem)}>
                        <FaHome className={clsx(style.ItemIcon)}/>
                        <span className={style.ListItemTitle}>Home</span>
                    </li>
                    <li className={clsx(style.ListItem,style.active)}>
                        <FaWindowRestore className={clsx(style.ItemIcon)}/>
                        <span className={style.ListItemTitle}>Browser</span>
                    </li>
                    <li className={clsx(style.ListItem)}>
                        <FaImages className={clsx(style.ItemIcon)}/>
                        <span className={style.ListItemTitle}>Album</span>
                    </li>
                    <li className={clsx(style.ListItem)}>
                        <FaHeadphonesAlt className={clsx(style.ItemIcon)}/>
                        <span className={style.ListItemTitle}>Artists</span>
                    </li>
                    <li className={clsx(style.ListItem)}>
                        <FaVideo className={clsx(style.ItemIcon)}/>
                        <span className={style.ListItemTitle}>Videos</span>
                    </li>
                </ul>
            </div>
            <div className={`${clsx(style.CategoryList)} col l-12`}>
                <h1 className={clsx(style.CategoryMyMusic)}>MY MUSIC</h1>
                <ul className={clsx(style.List)}>
                    <li className={clsx(style.ListItem)}>
                        <FaHistory className={clsx(style.ItemIcon)}/>
                        <span className={style.ListItemTitle}>Recently Played</span>
                    </li>
                    <li className={clsx(style.ListItem)}>
                        <FaFile className={clsx(style.ItemIcon)}/>
                        <span className={style.ListItemTitle}>Local Files</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Category;