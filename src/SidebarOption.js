import React from 'react'
import { useDataLayerValue } from './DataLayer'
import './css/SidebarOption.css'

function SidebarOption({ title, id, Icon }) {

    const [{ discover_weekly, spotify }, dispatch] = useDataLayerValue();    

    const setPlaylist = (title, id) => (
    
        spotify.getPlaylist(id).then( response => (
    
            dispatch({
              type: "SET_DISCOVER_WEEKLY",
              discover_weekly: response,
            })
        ))
    )

    return (
        <div className="sidebarOption" onClick={ () => setPlaylist(title, id) }>
            {Icon && <Icon className="sidebarOption__icon" />}
            { Icon ? <h4>{title}</h4> :  <p>{title}</p>}
        </div>
    )
}

export default SidebarOption
