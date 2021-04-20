import './apps.css';
import React, {Component} from 'react';
import axios from 'axios'
import Song from '../Components/Song/song'
import SongTable from '../Components/Table/SongTable'

class App extends Component {
    state = {
        songs: []
    }

    componentDidMount(){
        console.log("component did mount");
        this.getAllSongs();
    }
    async getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data
        })
    }

    mapSongs(){
        return this.state.songs.map(song =>
            <Song
              key={song.id}
              song={song}
            />
        )
}

render(){
    console.log("this.state", this.state);
    return(
    <div>
        <SongTable mapSongs={() => this.mapSongs()}/>
    </div>
    );
}
}

export default App;