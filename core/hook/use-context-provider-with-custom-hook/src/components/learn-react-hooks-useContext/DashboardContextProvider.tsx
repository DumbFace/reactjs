/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useEffect, useState } from "react";
import { useAutolog } from "../../hook/useAutoLog";

export interface User {
  isSubscribed: boolean;
  name: string;
}

export interface ContextDasboardProps {
  user: User;
  clearIntervalLog: () => void;
}

export const DashboardContext = createContext<ContextDasboardProps | undefined>(
  undefined
);

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);

  if (context === undefined) {
    throw new Error(
      "useUserContext must be used with a DashboardContextProvider"
    );
  }

  return context;
};

export const DashboardContextProvider = ({ children }: any) => {
  const { setIntervalLog, clearIntervalLog } = useAutolog();
  const [user] = useState<User>({
    isSubscribed: false,
    name: "ZZZZZZZZZZZZZz",
  });

  useEffect(() => {
    setIntervalLog(2000);
    // clearIntervalLog();

    return () => clearIntervalLog();
  }, []);

  const context: ContextDasboardProps | undefined = {
    user: {
      name: user.name,
      isSubscribed: user.isSubscribed,
    },
    clearIntervalLog,
  };

  return (
    <DashboardContext.Provider value={context}>
      {children}
    </DashboardContext.Provider>
  );
};
