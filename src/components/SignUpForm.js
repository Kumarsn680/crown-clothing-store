import React from "react";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "./SignIn";
import { createUserDocumentsFromAuth } from "../utils/firebase";
import FormInput from "./FormInput";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleForm = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const response = await createUserDocumentsFromAuth(user, {
        displayName: displayName,
      });
      console.log(response);
    } catch (error) {
      console.log("user creation encountered" + error);
    }
    resetForm()
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(value);
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };


   const resetForm = () => {
     setFormFields(defaultFormFields);
   };


  return (
    <div>
      <h1>Enter Your Data</h1>
      <form onSubmit={handleForm}>
        <FormInput
          labelname="Display Name"
          type="text"
          value={displayName}
          name="displayName"
          onChange={handleChange}
          required
        />

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

        <FormInput
          labelname="Confirm Password"
          type="text"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
          required
        />

        <button type="submit" onSubmit={handleForm}>
          Sign UP
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;

