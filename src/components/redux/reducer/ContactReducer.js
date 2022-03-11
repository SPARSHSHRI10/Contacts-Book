import React from 'react'

const initialState = [
    {
        id: 0,
        name: "Sparsh Shrivastava",
        email: "ss@gmail.com",
        number : 9174700000,
    },
    {
        id: 1,
        name: "Monu",
        email: "monu@test.com",
        number: 9890098900,
    }
];

//contact reducer - initialState defined above and actions to be executed listed below
const ContactReducer = (state = initialState, action) => {
    if(action.type === "Add_Contact")
    {
        state = [...state, action.payload];
        return state;
    }
    if(action.type === "Edit_Contact")
    {
        const updatedState = state.map((contact) => contact.id === action.payload.id ? action.payload : contact)
        state = updatedState;
        return state;
    }
    if(action.type === "Delete_Contact")
    {
        const remainState = state.filter((contact) => contact .id !== action.payload);
        state = remainState;
        return state;
    }
    return state;
}

export default ContactReducer 
