import React from 'react';
import Song from '../Song/song';

function SongFilter(props){
    return(
        <div className="row row-spacer">
           <label htmlFor="search">Search</label>
           <input type="text" value ={props.inputValue} onChange={props.songFilterOnChange}></input>
        </div>
    )
}

export default SongFilter;
