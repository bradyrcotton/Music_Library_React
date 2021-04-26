import React from 'react';
import styles from './SongTable.css';


const SongTable = (props) => {
    return (
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
            
    );
}

export default SongTable;