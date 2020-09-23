import {createStore} from 'redux'

const initialState = {
    user: {
            name: 'bsh',
            age: 21,
            phone: '89969378313',
            password: 'admin'
        }
}

function reducer(state = initialState, action) {

    // switch (action.type) {
    //     case 'ADD_USER': {
    //         return store
    //     }
    // }

    return state
}

export const store = createStore(reducer)