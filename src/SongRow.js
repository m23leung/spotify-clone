import React from 'react'
import './css/SongRow.css'
import { useDataLayerValue } from './DataLayer';


function SongRow({track}) {

    const [{ song }, dispatch] = useDataLayerValue();

    const setSongPlaying = (song) => (
        dispatch({
            type: "SET_SONG",
            song: song,
          })
    )

    return (
        <div className="songRow">
                <img className="songRow__album" src={track.album.images[0].url}></img>
                <div className="songRow__info" onClick={() => setSongPlaying(track)  }>
                    <h1>{track.name}</h1>
                    <p>{track.artists.map((artist) => artist.name).join('', '')}                       
                    </p>
                    <p>
                    {track.album.name} 
                    </p>
                </div>
        </div>
    )
}

export default SongRow
