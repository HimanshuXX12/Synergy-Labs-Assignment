import React, { useState } from "react";
import { createContext } from "react";



export const UserContext= createContext(null);

function ContextProvider(props)
{
     const [SingleData,setSingleData]= useState({});
    const  ContextValue={SingleData,setSingleData};
   return (
      <UserContext.Provider value={ContextValue}>
         {props.children}
      </UserContext.Provider>
   )
}


export default  ContextProvider;