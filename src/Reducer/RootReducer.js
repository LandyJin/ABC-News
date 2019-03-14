const initialState = {
    items: [],
    isLoading: true,
    logo: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "ITEMS":
        return { 
            ...state, 
            items: action.items,
            isLoading: false
        }
    
    case "LOGO":
        return { 
            ...state, 
            logo: action.logo,
        }

    default:
        return state
  }
}
