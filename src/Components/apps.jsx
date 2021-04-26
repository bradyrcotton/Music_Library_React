import './apps.css';
import React, {Component} from 'react';
import axios from 'axios'
import Song from '../Components/Song/song'
import SongTable from '../Components/Table/SongTable'
import SongCreator from './SongCreator/songCreator';
import SongFilter from './Filter/filter';



class App extends Component {
    state = {
        songs: [],
        song: {},
        sortValue: '',
        inputValue: ''
    }

    songFilterOnChange =  (event) => {
        console.log("hi from onChange", event.target.value)
        this.setState({
            inputValue: event.target.value
        })
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
        // console.log("this.state", this.state);
        // const filteredSongs = 
        //     this.state.pets.filter(song => {
        //         return song.title.toLowerCase().includes(this.state.inputValue.toLowerCase())
        //     })

        return(
        <div className="container=fluid">
            <SongTable mapSongs={() => this.mapSongs()}/>
            <SongCreator addNewSong={this.addNewSong.bind(this)}/>
            {/* <SongFilter songs={this.sortSongs(filteredSongs)} songFilterOnChange={this.songFilterOnChange} inputValue={this.state.inputValue} /> */}
        </div>
        );
    }
}

export default App;