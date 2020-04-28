import React,{Component} from 'react'

const Context = React.createContext()

const Reducer = (state,action) => {
    switch(action.type){
        case 'DELETE_CONTACT':
            return {
                contacts : state.contacts.filter(contact => contact.id !== action.payload)
            };

        case 'ADD_CONTACT':
            return {
                contacts : [action.payload,...state.contacts]
            }
        default : return state;
    }
}

export class Provider extends Component {


    
    state = {
        contacts : [
            {   id : 1,
                nom : 'John Doe',
                email : 'JohnD@gmail.com',
                tel : "385-486-785"
            },
            {   id : 2,
                nom : 'John Wick',
                email : 'JWick@gmail.com',
                tel : "575-123-748"
            },
            {   id : 3,
                nom : 'Thatcher',
                email : 'ThatcherR6@gmail.com',
                tel : "777-626-165"
            }
        ],

        dispatch : action => {
            this.setState(state => Reducer(state,action))
        }

    }


    render (){
        return (
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>

        )
    }

}

export const Consumer = Context.Consumer;