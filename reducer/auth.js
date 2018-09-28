const initialAuthState = { isLoggedIn: false,justLoggedIn:false,tokens:null,day:null,classCode:null };


export default function reducer(state = initialAuthState, action) {
  const {payload} = action;
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    case 'justLoggedIn':
    return { ...state, justLoggedIn: true, tokens: payload };
    case 'justLoggedOut':
    return { ...state, justLoggedIn: false,tokens:null,day:null,classCode:null };
    case 'CourseSelected':
    return { ...state, day:payload.day, classCode:payload.classCode };
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

