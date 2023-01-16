import React, { createContext, useState } from "react";

export const ReportSidebarContext = createContext();


export const ReportSidebarContextProvider = (props) => {
  const [setToggled, setSetToggled] = useState(null);
  return (
    <ReportSidebarContext.Provider value={{selectedCondition, setSelectedCondition }}>
      {props.children}
    </ReportSidebarContext.Provider>
  );
}