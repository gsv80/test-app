const loggedReducer =(state = false, action) => {
    switch(action.type){
        case 'Sign_in':
            return !state;
        default:
            return state;

    }
};

export default loggedReducer;