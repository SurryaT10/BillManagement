import React from 'react'
import axios from 'axios'
// import BillForm from './BillForm'
import Photo from './images.jpg'
import './CSS/login.css'
import {Route, Redirect} from 'react-router-dom'


const styles = {
    transition: "all 1s ease-out"
}
class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            userCred: {},
            isLogged: false,
            wrongCred: false,
            isUser: true,
            opacity: 0,
            scale: 1,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.loginAs = this.loginAs.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({opacity: 1})
        }, 500)
    }

    handleChange(e) {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })

    }

    handleSubmit(e) {
        const loginAs = this.state.isUser?'users':'admin'
        e.preventDefault()
        axios.post('http://localhost:3001/'+ loginAs +'/login' ,{
            email: this.state.email,
            password: this.state.password
        })
        .then((res) => {
            console.log(res.data.user)
            this.setState({
                userCred: {
                    id: res.data.user._id,
                    name: res.data.user.name,
                    age: res.data.user.age,
                    email: res.data.user.email                  
                },
                wrongCred: false,
                isLogged: true
                })
        })
        .catch(e => {
            this.setState({
                isLogged: false,
                wrongCred: true
            })
        })
        
    }

    
    loginAs() {
        this.setState({isUser: !this.state.isUser})
    }

    render() {
        return (
            
            <div className="body">
                {!this.state.isLogged?
                    <div style={{...styles, opacity: this.state.opacity}} className="login-box">
                        <img src={Photo} alt="form-logo" className={"photo-img"}/>
                        {this.state.isUser? <h1>User Login</h1> : <h1>Admin Login</h1>}
                        <form method="post" onSubmit={this.handleSubmit}>
                            <p className="para">Email</p>
                            <input type="text" name="email" value={this.state.email} placeholder="Enter email" onChange={this.handleChange} />
                            <p className="para">Password</p>
                            <input type="password" name="password" value={this.state.password} placeholder="Enter password" onChange={this.handleChange} />
                            {this.state.wrongCred? <p>Wrong email or password</p> : <></>}
                            <button className='submit' type="submit">Submit</button>

                            {this.state.isUser?<p onClick={this.loginAs}>Login as admin</p>: <p onClick={this.loginAs}>Login as user</p>}
                        </form>
                    </div>
                : <Route exact path="/login">
                    {this.state.isLogged ? this.state.isUser? <Redirect to={{
                        pathname: '/bill',
                        state:  this.state.userCred 
                    }}
/> : <Redirect to="/bill-form" cred={this.state.userCred} /> : <Login />}
                    </Route>}
                    
            </div>
        )
    }
}

export default Login