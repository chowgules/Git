import React, { Component } from 'react';
import Form from './Form';
import View from './View';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ViewData : [],
            customer:{
                name : "",
                ph_no : ""
            }
            
         }

         this.submitForm = this.submitForm.bind(this);
    }
    componentDidMount(){
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET','http://localhost:8080/customer');
        xmlhttp.send();
        xmlhttp.onload = function(){
                let serverData = xmlhttp.responseText;
                console.log(serverData); 
                serverData = JSON.parse(serverData);
                console.log(serverData); 
                this.setState({customers:serverData});
                this.props.handleViewChange(serverData);

        }
        .bind(this);

    }
        submitForm(person) {
            if (person.name === "" || person.ph_no === "") {
              return alert("Enter Details");
            } else {
              let initial_state = { name: "", ph_no: "" };
              let xmlhttp = new XMLHttpRequest();
              xmlhttp.open("POST", "http://localhost:8080/");
              xmlhttp.setRequestHeader("Content-Type", "application/json");
              xmlhttp.send(JSON.stringify(person));
              let customer_array = [...this.state.ViewData];
              console.log(customer_array);
              customer_array.push(person);
              console.log(customer_array);
        
              this.setState({
                ViewData: customer_array,
                customer: initial_state
              });
        
              console.log(person);
            }
          }

        
    
    render() { 
        return ( 
            <div className="container">
                <Form
                 submitForm={this.submitForm}
                 
                /> 
                    
                <br/> <br/>

                <div className="container"s>

                <View
                
                customers = {this.state.customers}
                handleViewChange = {this.handleViewChange}
                />

                </div>


                
            </div>
         );
    }
}
 
export default App;