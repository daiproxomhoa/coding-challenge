import React, { useContext, useEffect, useState } from "react";
import { LIST_VIDEO, USER_INFO } from "../components/constants";

const AppContext = React.createContext();
const DispatchContext = React.createContext(() => {});

export const useAppState = () => {
  const ref = useContext(AppContext);
  return ref;
};
export const useDispatch = () => {
  const ref = useContext(DispatchContext);
  return ref;
};

const RootProvider = ({ children }) => {
  const [state, setState] = useState({ auth: false });

  useEffect(() => {
    const userInfo = localStorage.getItem(USER_INFO);
    const listVideo = localStorage.getItem(LIST_VIDEO);
    if (userInfo) {
      setState((old) => ({
        ...old,
        auth: true,
        userInfo: JSON.parse(userInfo),
        listVideo: JSON.parse(listVideo),
      }));
    }
  }, []);

  return (
    <DispatchContext.Provider
      value={(value) => setState((old) => ({ ...old, ...value }))}
    >
      <AppContext.Provider value={state}>{children}</AppContext.Provider>
    </DispatchContext.Provider>
  );
};
export default RootProvider;
