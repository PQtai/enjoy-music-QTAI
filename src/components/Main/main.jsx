import clsx  from 'clsx'

import style from './Main.module.scss'
import ListMusics from './Listmusics/listmusics';
import PlayMusic from './Playmusic/playmusic';
function Main() {
    return (
        <div className={clsx(style.main)}>
            <div className="row sm-gutter">
                <div className="col l-6">
                    <ListMusics/>
                </div>
                <div className="col l-6">
                    <PlayMusic/>
                </div>
            </div>
        </div>
    )
}
export default Main;