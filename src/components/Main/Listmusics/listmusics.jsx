import clsx  from 'clsx'
import style from './Listmusics.module.scss'
import {useStore , action} from '../../../store'
import {FaHeart}  from 'react-icons/fa'

function ListMusics() {
    const [state , dispatch] = useStore();
    const {Songs , trackIndex} = state;
    const hanleClickSong = (index) => {
        dispatch(action.setIndexSong(index));
    }
    return (
        <div className={clsx(style.listMusics)}>
            <div className={`${clsx(style.listMusicsWrap)} row sm-gutter`}>
                <div className={`${clsx(style.listMusicsTitle)} col l-12`}>
                    <p className={clsx(style.TitlePopular)}>Most Popular</p>
                    <span className={clsx(style.quantilyMusics)}>84 Songs</span>
                </div>
                {Songs.map((song, index) => {
                    return (
                    <div className={`${clsx(style.musicItem)} col l-12`}
                    key={index}  
                    onClick={() => {
                        hanleClickSong(index);
                    }}
                    >
                        <ul className={`${clsx(style.listMusicsSong,index === trackIndex?style.active:"")}`} >
                            <li className={`${clsx(style.listMusicsItem)}`}>
                                <div style={{backgroundImage: `url(${song.image})`}} className={clsx(style.listItemImg)}></div>
                            </li>
                            <li className={`${clsx(style.listMusicsItem,style.ItemIfoSong)}`}>
                                <span  className={`${clsx(style.itemNameSong)}`}>{song.song}</span>
                                <span  className={`${clsx(style.itemNameSinger)}`}>{song.singer}</span>
                            </li>
                            <li className={`${clsx(style.listMusicsItem,style.listMusicsItemTitle)}`}>{song.type}</li>
                            <li className={`${clsx(style.listMusicsItem,style.listMusicsItemTime)}`}>{song.time}</li>
                            <li className={`${clsx(style.listMusicsItem, style.listMusicsHeart)}`}>
                                    <FaHeart className={clsx(style.heartIcon)} />
                            </li>
                        </ul>
                    </div>)
                })}
            </div>
        </div>
    )
}
export default ListMusics;