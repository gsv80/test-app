export const increment = (nr) => {
    return {
        type: 'increment',
        payload: nr
    };
};

export const decrement = () => {
    return {
        type: 'decrement'
    };
};


export const loginIn = () => {
    return {
        type: 'Sign_in'
    };
};



