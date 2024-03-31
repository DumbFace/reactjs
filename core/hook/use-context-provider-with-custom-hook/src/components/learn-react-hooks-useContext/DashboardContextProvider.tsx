/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from "react";

export interface User {
  isSubscribed: boolean;
  name: string;
}

export interface ContextDasboardProps {
  user: User;
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
  const [user] = useState<User>({
    isSubscribed: false,
    name: "ZZZZZZZZZZZZZz",
  });

  const context: ContextDasboardProps | undefined = {
    user: {
      name: user.name,
      isSubscribed: user.isSubscribed,
    },
  };

  return (
    <DashboardContext.Provider value={context}>
      {children}
    </DashboardContext.Provider>
  );
};
