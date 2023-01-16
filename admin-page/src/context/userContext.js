import React, { createContext, useState } from "react";

export const UserSidebarContext = createContext();


export const UserSidebarContextProvider = (props) => {
  const [userCondition, setUserCondition] = useState(null);
  return (
    <UserSidebarContext.Provider value={{userCondition, setUserCondition }}>
      {props.children}
    </UserSidebarContext.Provider>
  );
}
