import React from "react";
import axios from "../../config/axios";
import { Navigate } from 'react-router-dom';
import '../../index.css'

class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            username: '',
            errorMessage: ''
        }
    }

    handleChange = (e) => {
        this.setState({username: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.get('/users')
            .then((response) => {
                const user = response.data.find(user => user.username.toLowerCase() === this.state.username.toLowerCase())
                if(user) {
                    this.setState({ username: ''})
                    localStorage.setItem('user', JSON.stringify(user))
                    this.props.history.push('/dashboard')
                    alert('Logged in successfully')
                } else {
                    this.setState({ errorMessage: 'Enter a valid username'})
                }
            })
    }

     render () {
         const { errorMessage } = this.state
         return (
             localStorage.getItem('user') ? <Navigate to="/dashboard" /> : ( 
             <div className="container col-md-4 pb-1 card-login">
                 <form className="form-group" onSubmit={this.handleSubmit}>
                     <h1 className="text-dark mt-5 mb-5  pt-3 mb-3 text-center">Login Page</h1>
                     <input className={`form-control ${errorMessage && 'is-invalid'}`} type="text" placeholder="Username" id="username" value={this.state.username} onChange={this.handleChange} /><br />
                     <input className={`form-control ${errorMessage && 'is-invalid'}`} type="text" placeholder="Passsword" id="username" value={this.state.username} onChange={this.handleChange} />
                     <div className="invalid-feedback">{errorMessage}</div>
                     <input type="submit" className="btn btn-primary btn-block my-3 w-100" />
                 </form>
             </div>
             )
         )
     }
}

export default Login