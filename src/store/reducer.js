import Songs from "../Songs"
import {
    SET_IS_PLAYSONG,
    SET_SONG_PROGRESS,
    SET_INDEX_SONG
} from "./constants"
const initState = {
    trackIndex: 0,
    trackProgress: 0,
    isPlaying : false,
    Songs: Songs,
}
function reducer(state,action) {
    switch (action.type) {
        case SET_IS_PLAYSONG:
            return {
                ...state,
                isPlaying : action.payload
            }
        case SET_SONG_PROGRESS:
            return {
                ...state,
                trackProgress : action.payload
            }
        case SET_INDEX_SONG:
            return {
                ...state,
                trackIndex : action.payload
            }
        default: 
            throw new Error('Invalid action.')
    }
}
export {initState};
export default reducer;