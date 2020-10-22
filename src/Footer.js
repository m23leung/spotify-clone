import React from 'react'
import './css/Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import { Grid, Slider } from '@material-ui/core'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import { useDataLayerValue } from './DataLayer'

function Footer() {

    const [{ song } , dispatch] = useDataLayerValue();
        //console.log("SET SONG PLAYING", track);
    
        //track.name
        //track.artists
        //track.album.images[0].url

    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo" src={ song ? song.album.images[0].url : 'https://upload.wikimedia.org/wikipedia/en/7/74/Usher_-_Confessions_album_cover.jpg'} alt="" />
                <div className="footer__songInfo">
                    <h4>{song ? song.name : 'Yeah!'}</h4>
                    <p>{song ? song.artists.map((artist) => artist.name).join('', '') : 'Usher'}</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>      
                    <Grid item xs>
                        <Slider></Slider>
                    </Grid>                               
                </Grid>
            </div>                        
        </div>
    )
}

export default Footer
