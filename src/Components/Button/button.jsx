import React from 'react';
import styles from './button.css';


function SongDelete(props){
    return(
        <div className="row row-spacer">
            <div className="col-md-4">
                <button onClick={() => props.deleteSong(props.song.id)}>Delete Song</button>
            </div>
        </div>
    )
}

export default SongDelete;