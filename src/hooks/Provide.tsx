import { createContext } from "react";
export interface IProvider {
  ready?:boolean;
  setReady?:any;
  theme?:string|null;
  setTheme?:any;
  signUp?:any;
  setSignUp?:any;
  login?:any;
  setLogin?:any;
  dateOfborn?:string|undefined,
  isValidDate?:any,
  showTerms?:{
  show?:boolean,
  accept?:boolean} 
  setShowTerms?:any;
  dpIndex?:Number;
  setDpindex?:any;
  theScreen?:boolean,
  setScreen:any
}

export const Provider = createContext<IProvider|{}>({});
