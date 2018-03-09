import {createStore} from 'redux';

// const incrementCount = (payload = {}) => {
//     return {
//         type: 'INCREMENT',
//         incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy:1
//     };
// };

const incrementCount = ({incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy
    };
};

const decrementCount = ({decrementBy = 1} = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    };
};

const setCount = ({set = 1} = {}) => {
    return {
        type: 'SET',
        count: set
    };
};

const resetCount = () => {
    return {
        type: 'RESET',
        countReset: 0
    };
};

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: action.countReset
            };
        default: 
            return state;
    }


    return state;
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());    
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy:50}));

store.dispatch(incrementCount());
// zatrzymanie nasluchiwania store
//unsubscribe(); 

// store.dispatch({
//     type: 'INCREMENT'
// });

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(setCount({set: 101}));