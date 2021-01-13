import React from 'react';
import {Link} from 'react-router-dom'
import history from '../history';


class NavBar extends React.Component{

    logoutClick = () =>{
        this.props.changeLoggedIn(false);
        history.push('/');
    }

    logOut = (value) =>{
            if(value){
                return (
                    <div onClick={this.logoutClick} className="navbar__login">Logout</div> 
                )
            }else{
                return(
                    <>
                    <Link to="/login" className="navbar__login">Login</Link>
                    <Link to="/signup" className="navbar__signup">Sign Up</Link>
                    </>
                )
            }
        
    }


    render(){
        return(
            <nav className="section-navbar">
                <Link to="/" className="navbar__logo">Logo</Link>
                {this.logOut(this.props.isLoggedIn)}
                <Link to="/company-details" className="navbar__details">Company Details</Link>
            </nav>
        )
    }
}

export default NavBar;
