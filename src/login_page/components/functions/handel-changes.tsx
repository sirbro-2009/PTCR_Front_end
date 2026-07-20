import { useContext } from "react";
import { Provider } from "@/hooks/Provide";
import { useNavigate } from "react-router-dom";
import type { IProvider } from "@/hooks/Provide";
import * as React from "react";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const userNameRegex = /^[a-zA-Z0-9_]{3,16}$/;
export default function useAuthActions() {
  const { signUp, setSignUp, login, setLogin, showTerms, setShowTerms } =
    useContext(Provider) as IProvider;
  ////native
  const navigate = useNavigate();
  const navigateFunction = () => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  };
  ////////////////SHOW TERMS
  const showTermsF = (value: boolean) => {
    if (value) {
      setShowTerms({ ...showTerms, accept: true });
    } else if (!value) {
      setShowTerms({ ...showTerms, accept: false });
    }
  };
  const showTermsFuntion = () => {
    console.log("true");
    setShowTerms({ ...showTerms, show: true });
  };
  //////////////////////////////////////////SignUP
  const email = (e: React.ChangeEvent<HTMLInputElement>) => {
    let isValid = false;
    if (!e.target.value.match(emailRegex)) {
      isValid = true;
    } else if (e.target.value.match(emailRegex)) {
      isValid = false;
    }
    setSignUp({ ...signUp, email: e.target.value, isValid_email: isValid });
  };
  const Gender = (e: any) => {
    setSignUp({ ...signUp, Gender: e });
  };
  const fullName = (e: React.ChangeEvent<HTMLInputElement>) => {
    let isValid = false;
    if (!e.target.value.length) {
      isValid = true;
    } else if (e.target.value.length) {
      isValid = false;
    }
    setSignUp({ ...signUp, fullName: e.target.value, isValidName: isValid });
  };

  const userName = (e: React.ChangeEvent<HTMLInputElement>) => {
    let isValid = false;
    if (!e.target.value.match(userNameRegex)) {
      isValid = true;
    } else if (e.target.value.match(userNameRegex)) {
      isValid = false;
    }
    setSignUp({
      ...signUp,
      userName: e.target.value,
      isValidUserName: isValid,
    });
  };

  const password = (e: React.ChangeEvent<HTMLInputElement>) => {
    let isValid = false;
    if (e.target.value.length < 8) {
      isValid = true;
    } else if (e.target.value.length >= 8) {
      isValid = false;
    }
    setSignUp({
      ...signUp,
      password: e.target.value,
      isValid_password: isValid,
    });
  };

  const confirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    let isValid = false;
    if (e.target.value !== signUp.password) {
      isValid = true;
    } else if (e.target.value === signUp.password) {
      isValid = false;
    }
    setSignUp({
      ...signUp,
      confirmPassword: e.target.value,
      isValid_confirm: isValid,
    });
  };

  const userType = (e: string) => {
    setSignUp({ ...signUp, userType: e });
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////LOGIN
  const emailL = (e: React.ChangeEvent<HTMLInputElement>) => {
    let isValid = false;
    if (!e.target.value.match(emailRegex)) {
      isValid = true;
    } else if (e.target.value.match(emailRegex)) {
      isValid = false;
    }
    setLogin({ ...login, email: e.target.value, isValid_email: isValid });
  };
  const passwordL = (e: React.ChangeEvent<HTMLInputElement>) => {
    let isValid_password;
    if (e.target.value.length >= 8) {
      isValid_password = false;
    } else {
      isValid_password = true;
    }
    setLogin({
      ...login,
      password: e.target.value,
      isValid_password: isValid_password,
    });
  };

  return {
    email,
    fullName,
    userName,
    password,
    confirmPassword,
    userType,
    emailL,
    passwordL,
    Gender,
    showTermsF,
    showTermsFuntion,
    navigateFunction,
    emailRegex,
  };
}
