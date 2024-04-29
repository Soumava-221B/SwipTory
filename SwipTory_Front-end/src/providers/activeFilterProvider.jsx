import { createContext, useContext, useState, useEffect } from "react";

const ActiveFilterContext = createContext();

export const useActiveFilter = () => {
  return useContext(ActiveFilterContext);
};

export const ActiveFilterProvider = ({ children }) => {
  const [activeFilter, setActiveFilter] = useState(
    localStorage.getItem("activeFilter") || "All"
  );

  useEffect(() => {
    localStorage.setItem("activeFilter", activeFilter);
  }, [activeFilter]);

  return (
    <ActiveFilterContext.Provider value={{ activeFilter, setActiveFilter }}>
      {children}
    </ActiveFilterContext.Provider>
  );
};
