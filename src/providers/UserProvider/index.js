import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import api from "../../services/api";
export const UserContext = React.createContext({});

export const UserProvider = (props) => {
  const [id, setId] = useState();

  const [loggedUser, setLoggedUser] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setId(JSON.parse(jwt_decode(localStorage.getItem("token")).sub));
    }
  }, []);

  useEffect(() => {
    if (id) {
      api
        .get(`/users/${id}`)
        .then((response) => {
          setLoggedUser(response.data);
        })
        .catch((e) => console.log(e));
    }
  }, [id]);

  return (
    <UserContext.Provider
      value={{
        id,
        setId,
        loggedUser,
        setLoggedUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export const User = () => React.useContext(UserContext);
