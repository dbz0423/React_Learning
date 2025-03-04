import { createContext, useContext, useState } from "react";
// 先创建空值 Context ， 然后通过两个属性重新构造
const UserLoginContext = createContext(null);

// 用于包裹组件树的某一部分，并为其下的组件提供 Context 值
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ username });
    console.log(1111);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserLoginContext.Provider value={{ user, login, logout }}>
      {children}
    </UserLoginContext.Provider>
  );
};

// 用于访问 Context 值
export const useUser = () => {
  return useContext(UserLoginContext);
};
