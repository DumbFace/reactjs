/* eslint-disable no-empty-pattern */
import Dashboard from "./Dashboard";
import { DashboardContextProvider } from "./DashboardContextProvider";

interface DemoProps {}

export default function Demo({}: DemoProps) {
  return (
    <div>
      <DashboardContextProvider>
        <Dashboard />
      </DashboardContextProvider>
    </div>
  );
}
