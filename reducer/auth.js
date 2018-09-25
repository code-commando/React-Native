const initialAuthState = { isLoggedIn: false };


export default function reducer(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
    console.log('login state',action)

      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}
export const dispatchLogin = async()=>{
  const authToken = await AsyncStorage.getItem('authToken');
  console.log('Hello from store',authToken)
  return dispatch=>{
    dispatch({type:'Login'})
  }

}

