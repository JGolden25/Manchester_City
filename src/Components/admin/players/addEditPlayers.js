import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';

import FormField from '../../ui/formFields';
import { validate } from '../../ui/misc';

import Fileuploader from '../../ui/fileuploader';
import { firebasePlayers , firebaseDB, firebase } from '../../../firebase';

class AddEditPlayers extends Component {

    state = {
        playerId:'',
        formType:'',
        formError: false,
        formSuccess:'',
        defaultImg:'',
        formdata:{
            name:{
                element:'input',
                value:'',
                config:{
                    label: 'Player Name',
                    name:'name_input',
                    type: 'text'
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel: true
            },
            lastname:{
                element:'input',
                value:'',
                config:{
                    label: 'Player Last name',
                    name:'lastname_input',
                    type: 'text'
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel: true
            },
            number:{
                element:'input',
                value:'',
                config:{
                    label: 'Player number',
                    name:'number_input',
                    type: 'text'
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel: true
            },
            position:{
                element:'select',
                value:'',
                config:{
                    label: 'Select a position',
                    name:'select_position',
                    type: 'select',
                    options: [
                        {key:"Keeper",value:"Keeper"},
                        {key:"Defence",value:"Defence"},
                        {key:"Midfield",value:"Midfield"},
                        {key:"Striker",value:"Striker"}
                    ]
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel: true
            },
            image:{
                element:'image',
                value:'',
                validation:{
                    required: true
                },
                valid:false
            }
        }
    }

    updateForm(element, content = ''){
        const newFormdata = {...this.state.formdata}
        const newElement = { ...newFormdata[element.id]}

        if(content === ''){
            newElement.value = element.event.target.value;
        } else {
            newElement.value = content
        }
        
        let validData = validate(newElement)
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1]

        newFormdata[element.id] = newElement;

        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }



    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default AddEditPlayers;