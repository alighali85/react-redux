
// create Initial state to statrt the application with 

const initialState = {
    angular: 0,
    react: 0,
    vuejs: 0
}

// create the reducers 
export default( state = initialState, action )=> {
    switch( action.type ) {

        case 'VOTE_ANGULAR':
        console.log('Vote to angular ');
        return Object.assign( {}, state, {
            angular: state.angular + 1
        })

        case 'VOTE_REACT':
        console.log('Vote to react ');
        return Object.assign( {}, state, {
            react: state.react + 1 
        })

        case 'VOTE_VUEJS':
        console.log('Vote to vuejs ')
        return Object.assign( {}, state, {
            vuejs: state.vuejs + 1 
        })

        default:
        return state
    }
}