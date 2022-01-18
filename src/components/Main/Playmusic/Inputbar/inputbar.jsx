import clsx  from 'clsx';
import style from './Inputbar.module.scss';
function Inputbar( {duration , handleOnChange , handleMouse , trackProgress} ) {
    return (
        <input 
        className={clsx(style.progress)}
        type="range" 
        value={trackProgress}  
        step="1" 
        min="0" 
        max={duration?duration:`${duration}`}
        onChange={(e) => {handleOnChange(e.target.value)}}
        onMouseUp={handleMouse}
        onKeyUp={handleMouse}
        ></input>
    )
}
export default Inputbar;