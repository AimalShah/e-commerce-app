import { createContext , useEffect, useState } from "react";


const SinglePageContext = createContext();

export function SinglePageProvider({children}){


    <SinglePageContext.Provider value={{singleItem , addDetails}}>
        {children}
    </SinglePageContext.Provider>
}

export default SinglePageContext;

