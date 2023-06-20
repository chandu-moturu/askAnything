const usersReducer =(states=[],action)=>{
    switch (action.type) {
        case 'FETCH_USERS':
            if(action.payload)
            return [...action.payload]
            else return states

        case 'UPDATE_CURRENT_USER':
            
            const newList= states.map((state)=>state._id === action.payload.id ? action.payload : state)
            let newState=[...states,...newList]
            return newState
        default:
            return states;
    }
}
export default usersReducer