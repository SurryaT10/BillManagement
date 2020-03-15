import React from 'react'
import Axios from 'axios'

class Bill extends React.Component {
    constructor() {
        super() 
        this.state = {

        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3001/users/me')
        .then(res => console.log(res))
        .catch(e => console.log(e))
    }
    render() {
        return (
            <>
            </>
        )
    }
}

export default Bill