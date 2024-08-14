const usersReducer =(states=[],action)=>{
    switch (action.type) {
        case 'FETCH_USERS':
            if(action.payload)
            return [...action.payload]
            else return states

        case 'UPDATE_CURRENT_USER':
            
            const updatedList = states.map(state => state._id === action.payload._id ? action.payload : state);
            return [...updatedList];
        default:
            return states;
    }
}
export default usersReducer