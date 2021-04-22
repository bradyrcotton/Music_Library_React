import './apps.css';
import React, {Component} from 'react';
import axios from 'axios'
import Song from '../Components/Song/song'
import SongTable from '../Components/Table/SongTable'
import SongCreator from './SongCreator/songCreator';



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
              deleteSong ={(songId) => this.deleteSong(songId)}
            />
        )
    }
   
   async addNewSong(song){ 
       console.log(song)
       await axios.post('http://127.0.0.1:8000/music/', song)
        this.getAllSongs();

    }

    async deleteSong(songId){
        await axios.delete('http://127.0.0.1:8000/music/'+songId+'/');
        this.getAllSongs();
    }

    render(){
        console.log("this.state", this.state);
        return(
        <div className="container=fluid">
            <SongTable mapSongs={() => this.mapSongs()}/>
            <SongCreator addNewSong={this.addNewSong.bind(this)}/>
        </div>
        );
    }
}

export default App;