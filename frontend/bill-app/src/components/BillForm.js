import React from 'react'
import axios from 'axios'

class BillForm extends React.Component{

    constructor() {
        super()
        this.state = {
            customerId: '',
            customerName: '',
            unitsUsed: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        axios.post('http://localhost:3000/bills', {
            customerId: this.state.customerId,
            customerName: this.state.customerName,
            unitsUsed: this.state.unitsUsed
        })
        .then(res => console.log(res))
        .catch(e => console.log(e))
    }

    render() {
        return (
            <div>
                <div className="login-box">
                        <h1>Fill the details</h1>
                        <form method="post" onSubmit={this.handleSubmit}>
                            <p>Customer Id</p>
                            <select className="arrows">
                                {[1,2,3,4,5].map(num => {
                                    return <option key={num} name='customerId' onChange={this.handleChange}>{num}</option>
                                }) }
                            </select>
                            <p>Customer Name</p>
                            <input type="text" name="customerName" placeholder="Enter customer name" onChange={this.handleChange} />
                            <input type="number" name="unitsUsed" placeholder="Enter units used" step="0.1" max="50" onChange={this.handleChange} />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    {this.state.customerId}
            </div>
        )
    }
}

export default BillForm