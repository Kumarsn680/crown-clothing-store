import React from "react";
import { useEffect, useState } from "react";
import {
  getRedirectResult,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import FormInput from "./FormInput";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentsFromAuth,
  signInWithGoogleRedirect,
} from "../utils/firebase";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {  email, password } = formFields;
  useEffect(() => {
    async function fetchData() {
      const response = await getRedirectResult(auth);
      console.log(response);
    }

    fetchData();
    return () => {};
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocumentsFromAuth(user);
    console.log(userDocRef);
  };

  const logGoogleUserRedirect = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log({ user });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(value);
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  const handleForm = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword( email, password);
      console.log(response)
    } catch (error) {
      console.log("User could not login becauase " + error);
    }
    resetForm()
  };

  const resetForm = ()=>{
    setFormFields(defaultFormFields)
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <FormInput
          labelname="Email"
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
          required
        />

        <FormInput
          labelname="Password"
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
          required
        />
        <button type="button" onClick={logGoogleUser}>
          Sign IN With GooglePOPUP
        </button>
        <button type="button" onClick={logGoogleUserRedirect}>
          Sign IN With Google Redirect
        </button>
        <button type="submit" onSubmit={handleForm}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignIn;
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
