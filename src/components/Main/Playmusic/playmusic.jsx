import clsx  from 'clsx'
import style from './Playmusic.module.scss'
import {useRef,useEffect, memo} from 'react'
import {useStore,action} from '../../../store'
import Inputbar from './Inputbar/inputbar' 
import Control from './Control/control';
function PlayMusic() {
    const [state, dispatch] = useStore();
    const {trackIndex,trackProgress,isPlaying,Songs} = state;
    const {audio , image , singer , song } = Songs[trackIndex];
    const audioElement = useRef(new Audio(audio));
    const imageSongPlaying = useRef();
    const animationImageSong = useRef();
    const isReady = useRef(false);
    const isLoopSong = useRef(false);
    const isRandomSong = useRef(false);
    const timerId = useRef();
    const {duration} = audioElement.current;

    const start = ()=> {
        clearInterval(timerId.current);
        timerId.current = setInterval(() => {
           if(audioElement.current.ended){
                isRandomSong.current?dispatch(action.setIndexSong(handleRandomSong())):handleNextSong();
           }else {
                dispatch(action.setSongProgress(audioElement.current.currentTime));
           }
        },[1000]);
    }
    const handleRandomSong = () => {
        let newcurrentindex
        do {
            newcurrentindex = Math.floor(Math.random() * Songs.length)
        } while (newcurrentindex === trackIndex);
        return newcurrentindex;
    }
    const handleNextSong = () => {
        if(isRandomSong.current){
            dispatch(action.setIndexSong(handleRandomSong()));
        }else{
            trackIndex === Songs.length -1? dispatch(action.setIndexSong(0)):dispatch(action.setIndexSong(trackIndex + 1));
        }
    }
    const handlePrevSong = () => {
        if(isRandomSong.current){
            dispatch(action.setIndexSong(handleRandomSong()));
        }else{
            trackIndex > 0?dispatch(action.setIndexSong(trackIndex - 1)):dispatch(action.setIndexSong(Songs.length  - 1));
        }
    }
    const handlePlayings = () => {
        dispatch(action.setIsPlaying(!isPlaying));
    }
    const handleOnChange = (value) => {
        clearInterval(timerId.current)
        audioElement.current.currentTime = value;
        dispatch(action.setSongProgress(audioElement.current.currentTime));
        start();
    }
    const handleMouse = () => {
        if(!isPlaying){
            dispatch(action.setIsPlaying(true));
        }
        start();
    }
    useEffect(() => {
        animationImageSong.current =  imageSongPlaying.current.animate([{ transform: "rotate(360deg)" }], {
            duration: 10000,
            iterations: Infinity
        });
        animationImageSong.current.pause();
    },[]);
    useEffect(() => {
        if(isPlaying){
            audioElement.current.play();
            animationImageSong.current.play();
            start();
        }else {
            audioElement.current.pause();
            animationImageSong.current.pause();
        }
    },[isPlaying]);// eslint-disable-line react-hooks/exhaustive-deps
    
    useEffect(() => {
        audioElement.current.pause();
    
        audioElement.current = new Audio(audio);
        dispatch(action.setSongProgress(audioElement.current.currentTime));
    
        if (isReady.current) {
          audioElement.current.play();
          dispatch(action.setIsPlaying(true));
          start();
        } else {
          isReady.current = true;
        }
      }, [trackIndex , audio]);// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className={clsx(style.PlayMusic)}>
            <div className="row sm-gutter">
                <div className={`${clsx(style.NowMusic)} col l-12`}>
                    <p className={clsx(style.NowPlaying)}>Now Playing</p> 
                    <span className={clsx(style.quantilyItem)}
                    >32 Items on the list</span>
                </div>
                <div className="col l-12">
                    <div className={clsx(style.SongPlayer)}>
                        <div className={style.NowSong}>
                            <div className={clsx(style.cd)}>
                                <div ref={imageSongPlaying} className={clsx(style.cdThum)} style={{backgroundImage: `url(${image})`}}></div>
                            </div>
                            <div className={clsx(style.infoMusic)}>
                                <h3 className={clsx(style.nameMusic)}>{`${song}`}</h3>
                                <span className={clsx(style.nameSinger)}>{`${singer}`}</span>
                            </div>
                            <Inputbar 
                                duration = {duration}
                                handleOnChange = {handleOnChange}
                                handleMouse = {handleMouse}
                                trackProgress = {trackProgress}
                            />
                        </div>
                        <Control 
                        handleNextSong = {handleNextSong}
                        handlePrevSong = {handlePrevSong}
                        handlePlayings = {handlePlayings}
                        isPlaying = {isPlaying}
                        isLoopSong = {isLoopSong}
                        audioElement = {audioElement}
                        trackIndex = {trackIndex}
                        isRandomSong = {isRandomSong}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default   memo(PlayMusic) ;