/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty-pattern */

import {
  ContextDasboardProps,
  useDashboardContext
} from "./DashboardContextProvider";

interface SidebarProps {}

export function Sidebar({}: SidebarProps) {
  const {
    user: { name, isSubscribed },
  }: ContextDasboardProps = useDashboardContext();
  console.log("user?.isSubscribed: ", name);
  return (
    <div>
      <div>{name}</div>
      <div>Subscription Status: {isSubscribed ? "true" : "false"}</div>
    </div>
  );
}

interface ProfileProps {}

export function Profile({}: ProfileProps) {
  const {
    user: { name },
  }: ContextDasboardProps = useDashboardContext();
  return <div>{name}</div>;
}
