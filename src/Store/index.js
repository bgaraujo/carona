const initialState = {
    firebase: '',
    userID:'',
    page:'login',
    tab:0
};
  
const reducer = (state = initialState, action) => {
  console.log( state, action );

  switch (action.type) {
    case 'FIREBASE':
      return {
        ...state,
        firebase: action.data
      };
    case 'UID':
      return{
        ...state,
        userID: action.data
      }
    case 'NAVIGATE':
      return{
        ...state,
        page: action.data
      }
    case 'TAB':
      return{
        ...state,
        tab: action.data
      }
    default:
      return state;
  }
  
}

//const Store = createStore(reducer)

export default reducer