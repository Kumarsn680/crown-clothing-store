import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import {  Route,Routes } from 'react-router-dom';
import SignIn, { onAuthStateChangedListener } from './components/SignIn';
import SignUpForm from './components/SignUpForm';
import Shop from './components/Shop';
import Checkout from './components/Checkout';
import { createUserDocumentsFromAuth } from './utils/firebase';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {USER_ACTION_TYPES} from './store/User_Reducer'





export const setCurrentUser = (user) => {
  return { type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user }
};

function App() {

   const dispatch = useDispatch()

useEffect(() => {
  const unsubscribe = onAuthStateChangedListener((user) => {
    if (user) {
      createUserDocumentsFromAuth(user);
    }
    dispatch(setCurrentUser(user));
  });
  return unsubscribe;
}, []);



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route  element={<Home categories={[]} />}></Route>
          <Route  path="/shop/*" element={<Shop />}></Route>
          <Route path="signin" element={<SignIn />}></Route>
          <Route path="signup" element={<SignUpForm />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
