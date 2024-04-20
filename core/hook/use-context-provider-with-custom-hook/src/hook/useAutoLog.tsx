/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";

export const useAutolog = () =>
  // : {
  //   setIntervalLog: (time: number) => void;
  //   clearIntervalLog: () => void;
  // }
  {
    const intervalRef = useRef<number>();

    const setIntervalLog = (time: number) => {
      const intervalId = setInterval(() => {
        console.log("Logged!!");
      }, time);

      intervalRef.current = intervalId;
    };

    const clearIntervalLog = () => {
      if (intervalRef && intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };

    return { setIntervalLog, clearIntervalLog };
  };
