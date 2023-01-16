import React, { createContext, useState } from "react";

export const ReportSidebarContext = createContext();


export const ReportSidebarContextProvider = (props) => {
  const [isToggled, setIsToggled] = useState(null);
  return (
    <ReportSidebarContext.Provider value={{isToggled, setIsToggled }}>
      {props.children}
    </ReportSidebarContext.Provider>
  );
}