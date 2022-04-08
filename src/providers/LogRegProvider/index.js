import React, { useState } from "react";
export const LogRegContext = React.createContext({});

export const LogRegProvider = (props) => {
  //Fazer transição de Reg Pra log e virse e versa
  const [status, setStatus] = useState(false);

  return (
    <LogRegContext.Provider
      value={{
        status,
        setStatus,
      }}
    >
      {props.children}
    </LogRegContext.Provider>
  );
};

export const LogReg = () => React.useContext(LogRegContext);
