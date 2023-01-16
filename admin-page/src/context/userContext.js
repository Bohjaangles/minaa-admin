import React, { createContext, useState } from "react";

export const UserSidebarContext = createContext();


export const UserSidebarContextProvider = (props) => {
  const [selectedCondition, setSelectedCondition] = useState(null);
  return (
    <UserSidebarContext.Provider value={{selectedCondition, setSelectedCondition }}>
      {props.children}
    </UserSidebarContext.Provider>
  );
}
