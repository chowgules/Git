import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name : '',
            ph_no : ''

        }
        
    } 
        handelChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    render() { 
        return ( 

            <React.fragment>
                <div classname="container">
                    <div classame="row">
                        <h1>Customer</h1>

                    </div>

                    <div className="row">
                    name:
                    
                    <input type="text" name="name" onChange={this.handelChange}value={this.state.name} className="form-control"/>
                    </div>

                    <div className="row">
                    ph_no:
                    <input type="text" name="ph_no"onChange={this.handelChange}value={this.state.ph_no} className="form-control"/>
                    </div>


                    <div className="row">

                    <button type="button" className="btn btn-success" onClick={ () => {
                    return (
                      this.props.submitForm(this.state),
                      this.setState({
                        name: "",
                        ph_no: "",
                        
                      })
                    );
                  }}
                >
                  Submit
                </button>

                    </div>

                </div>
            </React.fragment>
         );
    }
}
 
export default Form;