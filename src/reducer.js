import { getTokenFromUrl } from "./spotify";

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    
    track: null
    
    //token: "BQCEXQtiCs-qSrm98hsG6NS5hjGk___Srqar6MYnWW8rLXLCF_492VjQd049gHdsEOBoCZGWm663Vp0rN2JEiTBcLInx7ixGgXc7AWGc-LFrglLcT6QYoCU9Pxa3rBaEZg2MR1dhCoPxDO1x_G//EyqZkAgI6ADRFcfVGFMJLKZhguSMpk7ZZD",
}

const reducer = (state, action) => { 
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }      
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }   
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing
            }
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };    
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };    
        case "SET_SPOTIFY":
        return {
            ...state,
            spotify: action.spotify,
        };  
        case "SET_SONG":
        return {
            ...state,
            song: action.song,
        };                                                                       
        default:
            return state;
    }

}

export default reducer;