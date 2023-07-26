import React, { useReducer } from "react";
import { FirebaseContext } from "./firebaseReducer";
import { firebaseReducer } from "./firebaseContext";


export const FirebaseState=({children})=>{
    const initialState= {
        notes: [],
        loading: false
    }
    const [state, dispatch]= useReducer(firebaseReducer, initialState)

    return(
        <FirebaseContext.Provider 
            value={{
                
            }}>

            {children}
        </FirebaseContext.Provider>
    )
}