import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Login extends React.Component{

    state = { email:'', password:'' }

   

    onFormSubmit =async (e)=>{
        e.preventDefault();

        let Lemail = `${localStorage.getItem('gs-email')}`;
        let Lpwd = localStorage.getItem('gs-password');

        // eslint-disable-next-line
        if(Lemail == this.state.email && Lpwd == this.state.password ){
            await this.props.changeLoggedIn(true);
            await this.props.history.push('/movie-list');
        }else{
            alert('Invalid credentials')
        }
    }

    render(){
        return(
            <section className="section-signup">
                <div className="signup__card">
                <div className="form-container">
                    <div className="head">
                        <h3>Sign In</h3>
                    </div>
                    <form className="Inputs" onSubmit={this.onFormSubmit}>
                        
                        <label >Email</label>
                        <input type="email" name="email" required
                        value={this.state.email} onChange={e=>this.setState({email:e.target.value})}  />

                        <label >Password</label>
                        <input type="password" name="password" required
                         value={this.state.password} onChange={e=>this.setState({password:e.target.value})} />

                        <button type="submit">Login</button>
                    
                    </form>
                    </div>
                    <div className="signup"> Don't have a account ? <Link to="/signup">Sign Up Here</Link></div>
                </div>                

            </section>
        )
    }
}

export default withRouter(Login);