import style from './Navslide.module.scss'
import clsx  from 'clsx'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
function Navslide() {
    return (
    <div className={clsx(style.navslide)}>
        <div className='row sm-gutter'>
            <div className='col m-10'>
                <h2 className={clsx(style.title)}>Billboard Topchart</h2>
            </div>
            <div className={`${style.navslide_btn} col m-2`}>
                <button className={clsx(style.navbtn)}>
                    <FaChevronLeft/>
                </button>
                <button className={clsx(style.navbtn)}>
                    <FaChevronRight/>
                </button>
            </div>
        </div>
        <div className={`${clsx(style.slideLists)} row no-gutters`}>
            <div className={`${clsx(style.listItem)} col l-2 m-3`}>
                <div className={clsx(style.slideItem)}></div>
                <p className={clsx(style.slideTitle)}>Gọi Mưa</p>
                <span className={clsx(style.slideSinger)} >Trung Quân</span>
            </div>
            <div className={`${clsx(style.listItem)} col l-2 m-3`}>
                <div className={clsx(style.slideItem)}></div>
                <p className={clsx(style.slideTitle)}>Gọi Mưa</p>
                <span className={clsx(style.slideSinger)} >Trung Quân</span>
            </div>
            <div className={`${clsx(style.listItem)} col l-2 m-3`}>
                <div className={clsx(style.slideItem)}></div>
                <p className={clsx(style.slideTitle)}>Gọi Mưa</p>
                <span className={clsx(style.slideSinger)} >Trung Quân</span>
            </div>
            <div className={`${clsx(style.listItem)} col l-2 m-3`}>
                <div className={clsx(style.slideItem)}></div>
                <p className={clsx(style.slideTitle)}>Gọi Mưa</p>
                <span className={clsx(style.slideSinger)} >Trung Quân</span>
            </div>
            <div className={`${clsx(style.listItem)} col l-2 m-3`}>
                <div className={clsx(style.slideItem)}></div>
                <p className={clsx(style.slideTitle)}>Gọi Mưa</p>
                <span className={clsx(style.slideSinger)} >Trung Quân</span>
            </div>
            <div className={`${clsx(style.listItem)} col l-2 m-3`}>
                <div className={clsx(style.slideItem)}></div>
                <p className={clsx(style.slideTitle)}>Gọi Mưa</p>
                <span className={clsx(style.slideSinger)} >Trung Quân</span>
            </div>
            <div className={`${clsx(style.listItem)} col l-2 m-3`}>
                <div className={clsx(style.slideItem)}></div>
                <p className={clsx(style.slideTitle)}>Gọi Mưa</p>
                <span className={clsx(style.slideSinger)} >Trung Quân</span>
            </div>
        </div>
    </div>
    )
}
export default Navslide;