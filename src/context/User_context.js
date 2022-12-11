import { createContext, useEffect ,useReducer } from "react";
import { onAuthStateChangedListener } from "../components/SignIn";
import { createUserDocumentsFromAuth } from "../utils/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER : 'SET_CURRENT_USER'
}

const INITIAL_USER_STATE = {
  currentUser : null
}

const userReducer = (state,action) =>{
  const {type,payload} = action

  switch (type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser : payload
      }
    default:
      throw new Error(`unregistered type ${type} in userReducer`)
  }
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_USER_STATE);
  const {currentUser} = state
  console.log(currentUser)
  const setCurrentUser = (user) => {
    dispatch({type : USER_ACTION_TYPES.SET_CURRENT_USER,payload:user})
  }
  const value = { currentUser, setCurrentUser };
  

  useEffect(() => {
    const  unsubscribe =  onAuthStateChangedListener((user) => {
        if(user){
             createUserDocumentsFromAuth(user);
        }
        setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};


