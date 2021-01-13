import React from 'react';
import {Link} from 'react-router-dom'

class Home extends React.Component{

    render(){
        return(
            <section className="section-home">
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/movie-list">Movie List</Link>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Home;