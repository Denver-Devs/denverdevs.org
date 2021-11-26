import netlifyAuth from "@/helpers/netlifyAuth";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export function UserStateProvider({ children }) {
  let [user, setUser] = useState(null);
  let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);

  let login = () => {
    netlifyAuth.authenticate((user) => {
      setLoggedIn(!!user);
      setUser(user);
    });
  };

  let logout = () => {
    netlifyAuth.signout(() => {
      setLoggedIn(false);
      setUser(null);
    });
  };

  useEffect(() => {
    const localUserStorage = localStorage.getItem("gotrue.user");
    const parsedUser = JSON.parse(localUserStorage);

    if (parsedUser) {
      setUser(parsedUser);
      setLoggedIn(true);
      netlifyAuth.initialize((user) => {
        setLoggedIn(!!user) + setUser(user);
      });
    } else {
      netlifyAuth.initialize((user) => {
        setLoggedIn(!!user) + setUser(user);
      });
    }
  }, []);

  return <UserContext.Provider value={{ user, setUser, loggedIn, login, logout }}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("userState not in provider");
  }
  return context;
}
