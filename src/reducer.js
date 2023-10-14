const reducer = (state, action) => {
 switch(action.type){
    case "SET_LOADING":
        return {
            ...state,
            isLoading:true,
        }    

    case "GET_STORIES":
        return {
            ...state,
            isLoading: false,
            hits: action.payload.hits,
            nbPages: action.payload.nbPages,
        };

    case "REMOVE_POST":
        return{
            ...state,
            hits: state.hits.filter((curElem) => {
                return curElem.objectID !== action.payload
        }),
    }  
    
    case "SEARCH_QUERY" :
        return{
            ...state,
            query: action.payload,
        }

    case "NEXT_PAGE":
        let pageNumIncre = state.page + 1;

        if(pageNumIncre >= state.nbPages){
            pageNumIncre = 0;
        }
        return {
            ...state,
            page: pageNumIncre,
        }    

        case "PREV_PAGE":
            let pageNum = state.page - 1 ;

            if(pageNum <= 0) {
                pageNum = 0;
            }
            return {
                ...state,
                page: pageNum,
            }        
 }
 return state;
}

export default reducer;