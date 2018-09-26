const initialAuthState = { isLoggedIn: false,justLoggedIn:false };


export default function reducer(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    case 'justLoggedIn':
    console.log('justloggedin state',action)
    return { ...state, justLoggedIn: true };
    case 'justLoggedOut':
    console.log('justloggedOut state',action)
    return { ...state, justLoggedIn: false };
    default:
      return state;
  } 
}
export const dispatchJustLoggedIn = async()=>{
  // const authToken = await AsyncStorage.getItem('authToken');
  // console.log('Hello from store',authToken)
  return dispatch=>{
    dispatch({type:'justLoggedIn'})
  }

}

