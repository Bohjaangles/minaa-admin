import React, { createContext, useState } from "react";

export const ReportSidebarContext = createContext();


export const ReportSidebarContextProvider = (props) => {
  const [reportCondition, setReportCondition] = useState(null);
  return (
    <ReportSidebarContext.Provider value={{reportCondition, setReportCondition }}>
      {props.children}
    </ReportSidebarContext.Provider>
  );
}
