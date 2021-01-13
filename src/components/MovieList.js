import React from 'react';
import axios from 'axios';
import history from '../history';

class MovieList extends React.Component{

    state = {  title:'Gultoo' ,
        Title:null,
        Genre:null,
        Director:null,
        Actors:null,
        Runtime:null,
        Language:null,
        Released:null,
        Poster:null,
        response:null,
    }
    async componentDidMount(){
        // let response = await axios.post('https://hoblist.com/movieList',{},{
        //     params:{
        //         category: "movies",
        //         language: "kannada",
        //         genre: "all",
        //         sort: "voting"
        //     }
        // });

        this.apiCall();
    }

    apiCall =async () =>{
        let response = await axios.get('https://www.omdbapi.com/',{
            params:{
                apikey:'8ede4beb',
                t:this.state.title
            }
        });

        let data =response.data
        this.setState({
            Title: data.Title,
            Genre:data.Genre,
            Director:data.Director,
            Actors:data.Actors,
            Runtime:data.Runtime,
            Language:data.Language,
            Released:data.Released,
            Poster:data.Poster,
            response:data.Response
        })
    }


    renderCard = () =>{
        if(this.state.response == 'True'){
            return(
                <>
                <div className="movieList__card">
                    <div className="movieList__flex">
                        <div className="movieList__vote">
                            <div className="movieList__upparrow">&#8593;</div>
                            <div>12</div>
                            <div className="movieList__downarrow">&#8595;</div>
                        </div>
                        <div className="movieList__image">
                            <img
                            className="movieList__image--img" 
                            src={this.state.Poster}/>
                        </div>
                        <div className="movieList__details">
                            <p className="movieList__heading">Movie Name:{this.state.Title}</p>
                            <p className="movieList__genere">Genere: {this.state.Genre}</p>
                            <p className="movieList__direction">Director: {this.state.Director}</p>
                            <p className="movieList__staring">Staring: {this.state.Actors}</p>
                            <p className="movieList__i">{this.state.Runtime} | {this.state.Language} | {this.state.Released} </p>
                            <p className="movieList__votes">137 views | voted by 12 people</p>
                        </div>
                    </div>
                        <button className="movieList__button">Watch trailer</button>
                </div>
                        </>
            )
        }else{
            return(
                <div className="error">
                    <div className="u-center-align">
                        <h2 className="heading-secondary">Error Try Different Name</h2>
                    </div>
                </div>
            )
        }
    }

    renderContent = ()=>{
        return(
            <section className="section-movieList">

                <div className="movieList__searchbox u-center-align u-margin-bottom-large">
                    <input type="text" className="movieList__ipt" value={this.state.title}
                    onChange={e=>this.setState({title:e.target.value})}
                    />
                    <button className="movieList__btn" onClick={this.apiCall}>Search</button>
                </div>

                {this.renderCard()}
            </section>
        )
    }
    
    checkLoggedIn = (val )=>{
        if(val){
            return this.renderContent();
        }else{
            alert('Login again, Invalid credentials');
            history.push('/login')
        }
    }

    render(){
        let loggedIn = this.props.isLoggedIn;
        return(
            <div>
                {this.checkLoggedIn(loggedIn)}
            </div>
        )
    }
}

export default MovieList;