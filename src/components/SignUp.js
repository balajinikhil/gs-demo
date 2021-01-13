import React from 'react';
import { Link } from 'react-router-dom';
import history from '../history';


class SignUp extends React.Component{

    state = { 
        name:'',
        email:'',
        password:'',
        phonenumber:'',
        proffesion:''
    }

    onFormSubmit = (e) =>{
        e.preventDefault();
        localStorage.setItem('gs-email', this.state.email);
        localStorage.setItem('gs-password', this.state.password);
        this.props.changeLoggedIn(true, this.state.email, this.state.password);
        history.push('/movie-list')
    }

    render(){
        return(
            <section className="section-signup">
                <div className="signup__card">
                <div className="form-container">
                    <div className="head">
                        <h3>Sign Up</h3>
                        <p>It's free and only takes a minute</p>
                    </div>
                    <form className="Inputs" onSubmit={this.onFormSubmit}>
                        <label >Name</label>
                        <input type="text"  name="name" required
                         value={this.state.name} onChange={e=>this.setState({name:e.target.value})} />
                        
                        <label >Email</label>
                        <input type="email" name="email" required
                        value={this.state.email} onChange={e=>this.setState({email:e.target.value})}  />

                        <label >Password</label>
                        <input type="password" name="password" required
                         value={this.state.password} onChange={e=>this.setState({password:e.target.value})} />
                        
                        <label >Phone Number</label>
                        <input type="number"  name="phone" required
                        value={this.state.phonenumber} onChange={e=>this.setState({phonenumber:e.target.value})}  />
                        
                        <label>Proffesion</label>
                        <select value={this.state.proffesion} required
                        onChange={e=>this.setState({proffesion:e.target.value})} >
                            <option value="devops">DevOps</option>
                            <option value="dev">Dev</option>  
                            <option value="tester">Tester</option>  
                        </select>                        
                        <button type="submit">Sign Up</button>
                    </form>
                    </div>
                    <div className="signup"> Already have a account ? <Link to="/login">Login Here</Link></div>
                </div>                

            </section>
        )
    }
}

export default SignUp;