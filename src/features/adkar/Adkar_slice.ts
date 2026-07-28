import { createSlice } from "@reduxjs/toolkit";
import adkar_object from "@/assets/JSON/adkarObject.json";
export interface initialState{
        search:boolean,
        searchArrayRes:string[],
        searchArrayResLength:number,
        searchStatue:boolean|null
        readArray:{count:number,text:string}[];
        Read:boolean,   
        searchElement:boolean
}
const initialState:initialState = {
        search:false,
        searchArrayRes:(Object.keys(adkar_object) as Array<keyof typeof adkar_object>),
        searchStatue:false,
        readArray:[],
        Read:false,
        searchArrayResLength:0,
        searchElement:true
    }
export const adkarSlice = createSlice({
    name:'adkar',
    initialState,
    reducers:{
        handelInputSearch:(state,action)=>{
            const {searchValue}:{searchValue:string} = action.payload
            if(searchValue?.trim().length >0){
            state.search = searchValue.length >0
            const reagExp = new RegExp(searchValue)
            state.searchArrayRes = (Object.keys(adkar_object) as Array<keyof typeof adkar_object>).filter((e,i)=>{
                return reagExp.test(e) === true
            })
            if(state.searchArrayRes.length ){
                state.searchArrayResLength = state.searchArrayRes.length
                state.searchStatue = true
            }
            else if(!state.searchArrayRes.length ){
                state.searchStatue = null
                state.search = false
            }
            }
            else{
            state.search = false 
             state.searchArrayRes = (Object.keys(adkar_object) as Array<keyof typeof adkar_object>)     
            }
        },
        setShow:(state,action?)=>{
            state.readArray = action?.payload
            state.Read = !state.Read
            state.searchElement = !state.searchElement
        }
    },
})
export const {handelInputSearch,setShow} = adkarSlice.actions
export default adkarSlice.reducer