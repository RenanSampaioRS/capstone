import React, { useState } from "react";
export const VacContext = React.createContext({});

export const VacProvider = (props) => {
  //Tornar Componentes dinamicos
  const [vacCountClick, setVacCountClick] = useState(0);

  return (
    <VacContext.Provider
      value={{
        vacCountClick,
        setVacCountClick,
      }}
    >
      {props.children}
    </VacContext.Provider>
  );
};

export const Vac = () => React.useContext(VacContext);
