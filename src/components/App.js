import React from 'react';
import NavBar from './NavBar';
import { Router, Route } from 'react-router-dom';

import history from '../history';
import SignUp from './SignUp';
import Login from './Login';
import CompanyDetails from './CompanyDetails';
import MovieList from './MovieList';
import Home from "./Home";

class App extends React.Component{

    state={
        isLoggedIn:false,
        email:'',
        password:''
    }

    changeLoggedIn = (val,email,password)=>{
        this.setState({isLoggedIn: val ? true : false})
        this.setState({email:email});
        this.setState({password:password});
    }
    
    render(){
        return(
            <main>
                <Router history={history}>
                    <NavBar isLoggedIn={this.state.isLoggedIn}
                    changeLoggedIn={this.changeLoggedIn}
                    />
                    
                    <Route path="/" exact component={Home} />

                    <Route path="/signup" exact render={(props)=><SignUp {...props} isLoggedIn={this.state.isLoggedIn} 
                    changeLoggedIn={this.changeLoggedIn} />}/>
                    
                    <Route path="/login" render={(props)=><Login {...props} isLoggedIn={this.state.isLoggedIn} 
                    changeLoggedIn={this.changeLoggedIn} />} />

                    <Route path="/movie-list" render={(props)=><MovieList {...props} 
                    isLoggedIn={this.state.isLoggedIn }
                    />}   />

                    <Route path="/company-details"
                    component={CompanyDetails} />
                </Router>
            </main>
        )
    }
}

export default App;