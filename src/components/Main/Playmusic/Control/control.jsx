
import clsx  from 'clsx';
import style from './Control.module.scss';
import {
    FaRedo,
    FaBackward,
    FaPause,
    FaPlay,
    FaForward,
    FaRandom

} from "react-icons/fa";

import {useRef , useEffect}  from "react"

function Control({
    handleNextSong , 
    handlePrevSong , 
    handlePlayings , 
    isPlaying, 
    trackIndex, 
    audioElement , 
    isRandomSong
    }) {
    const loopSongElement = useRef()
    useEffect(() => {
        loopSongElement.current.classList.remove(clsx(style.loopSong));
    },[trackIndex])
    return (
        <div className={clsx(style.control)}>
            <div 
            className={clsx(style.btn)}
            ref={loopSongElement}
            onClick={(e) => {
                if(e.currentTarget.classList.contains(clsx(style.loopSong))){
                    e.currentTarget.classList.remove(clsx(style.loopSong));
                    audioElement.current.loop = false;
                }else {
                    e.currentTarget.classList.add(clsx(style.loopSong));
                    audioElement.current.loop = true;
                }
            }}
            >
                <FaRedo/>
            </div>
            <div 
            className={clsx(style.btn,style.btnPrev)}  
            onClick={handlePrevSong} >
                <FaBackward/>
            </div>
            <div className={clsx(style.btn,style.btnToggle)} onClick={handlePlayings}>
                {
                    isPlaying? 
                    <FaPause className={clsx(style.iconPause)}/>:
                    <FaPlay className={clsx(style.iconPlay)}/>
                }
            </div>
            <div 
            className={clsx(style.btn,style.btnNext)} 
            onClick={handleNextSong} >
                <FaForward/>
            </div>
            <div 
            className={clsx(style.btn,style.btnRandom)}
            onClick={(e) => {
                isRandomSong.current = !isRandomSong.current;
                if(e.currentTarget.classList.contains(clsx(style.randomSong))){
                    e.currentTarget.classList.remove(clsx(style.randomSong));
                }else {
                    e.currentTarget.classList.add(clsx(style.randomSong));
                }
            }}
            >
                <FaRandom/>
            </div>
        </div>
    )
}
export default Control;