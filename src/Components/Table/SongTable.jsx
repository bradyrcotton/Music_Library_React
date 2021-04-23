import React from 'react';


const SongTable = (props) => {
    return (
        <div> 
            <label htmlFor="search">Search</label>
            <input type="text" value ={props.inputValue} onChange={props.songFilterOnChange}></input>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th> 
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                {props.mapSongs()}
            </table>
        </div>
    );
}

export default SongTable;