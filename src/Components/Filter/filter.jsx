import React from 'react';



const SongFilter = (props) => {
    return(
        <div className="col-md-12" style={{padding: 0}}>
            <label htmlFor="search">Search</label>
            <input type="text" value ={props.inputValue} onChange={props.songFilterOnChange}></input>
        </div>
    )
}

export default SongFilter;
