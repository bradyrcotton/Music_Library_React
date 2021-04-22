import React from 'react';
import SongDelete from '../Button/button';

const Song = (props) => {
    return (
        <tbody>
            <tr>
                <td>{props.song.title}</td> 
                <td>{props.song.artist}</td>
                <td>{props.song.album}</td>
                <td>{props.song.genre}</td>
                <td>{props.song.release_date}</td>
                <SongDelete deleteSong={props.deleteSong} song={props.song}/>
            </tr>
        </tbody>
    );
}

export default Song;