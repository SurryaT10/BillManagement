import React from 'react'
import './CSS/home.css'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            users: {}
        }
    }

    render() {
        return (
            <div className='home'>
                <div className='content'>
                    <h1 className="pay-bills-here">Pay your Bills Here</h1>
                    <p>Move cashless.Be tension less</p>
                    <Link to='/login'><button className='pay-now-btn'>Pay Now</button></Link>
                    <button className='learn-more-btn'>Learn More</button>
                </div>
                <img src='https://www.freepngimg.com/thumb/light/78162-electric-light-lamp-incandescent-bulb-free-clipart-hd.png'
                className='elec-img' alt='elec-img'
                />
            </div>
        )
    }
}

export default Home