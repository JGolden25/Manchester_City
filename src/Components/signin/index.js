import React, { Component } from 'react';

class SignIn extends Component {
    state = {
        formError:false,
        formSuccess:'',
        formdata:{
            email:{
                element:'input',
                value:'',
                config:{
                    name:'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage:''
            }
        }

    }
   
    render() {
        return (
            <div>
                signin
            </div>
        );
    }
}

export default SignIn;