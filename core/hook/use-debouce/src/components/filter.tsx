/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { Button, Space } from "antd";
import React, { useEffect, useState } from "react";
import "./filter.style.scss";
// import { useDebounce } from "use-debounce";
import Button from "antd/es/button";
import Space from "antd/es/space";
import { useDebounce } from "use-debounce";

export enum StatusStudent {
  IsPoor = 1,
  IsScholarship = 2,
}

export interface IStudentStatus {
  isPoor: boolean;
  isScholarship: boolean;
}

export interface ISelectProps {
  status: Array<number>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Filter = (props: any) => {
  const { filterStudent } = props;

  const [isPoorSelect, setIsPoor] = useState(false);
  const [isScholarShipSelect, setScholarShip] = useState(false);
  const [status, setStatus] = useState<Array<number>>([]);
  const [selected, setSelected] = useState<ISelectProps>();
  const [debouce] = useDebounce(selected, 1000);

  useEffect(() => {
    filterStudent(selected);
    console.log("selected: ", selected);
  }, [debouce]);

  const onHandleClickButton = (typeButton: number) => {
    let newStatus: Array<number> = [];
    switch (typeButton) {
      case StatusStudent.IsPoor:
        setIsPoor(!isPoorSelect);
        if (!isPoorSelect) {
          newStatus = [...status, StatusStudent.IsPoor];
        } else {
          newStatus = [...status].filter(
            (status) => status !== StatusStudent.IsPoor
          );
        }
        setStatus(newStatus);
        setSelected({
          ...selected,
          status: newStatus,
        });
        break;
      case StatusStudent.IsScholarship:
        setScholarShip(!isScholarShipSelect);
        if (!isScholarShipSelect) {
          newStatus = [...status, StatusStudent.IsScholarship];
        } else {
          newStatus = [...status].filter(
            (status) => status !== StatusStudent.IsScholarship
          );
        }
        setStatus(newStatus);
        setSelected({
          ...selected,
          status: newStatus,
        });
        break;
      default:
        break;
    }
  };

  return (
    <React.Fragment>
      <Space className="filter">
        <Button
          onClick={() => onHandleClickButton(StatusStudent.IsPoor)}
          type={isPoorSelect ? "primary" : undefined}
          value={StatusStudent.IsPoor}
        >
          Age
        </Button>
        <Button
          onClick={() => onHandleClickButton(StatusStudent.IsScholarship)}
          type={isScholarShipSelect ? "primary" : undefined}
          value={StatusStudent.IsScholarship}
        >
          Grade
        </Button>
      </Space>
    </React.Fragment>
  );
};
