import React, { Component } from 'react';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {}
           
    }

    render() { 

        let ViewData = this.props.ViewData;

        return ( 

            <div>
                <div className="container">
                <table className="row">
                        <thead className="table">
                            <tr>
                                <th>Sr</th>
                                <th>Customer ID</th>
                                <th>Name</th>
                                <th>Ph_no</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            
                                {ViewData.map(function(details,index){
                                    return(
                                        <tr key={index}>
                                            <td>{index +1}</td>                                            
                                            <td>{details.customer_id}</td>
                                            <td>{details.name}</td>
                                            <td>{details.ph_no}</td>
                                            
                                        </tr>
                                            
                                    );
                                })
                            }
                        </tbody>

                    </table>


                </div>

            </div>
         );
    }
}

export default View;