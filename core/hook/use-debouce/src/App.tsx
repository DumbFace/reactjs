/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line no-undef

// import { FilterOutlined } from "@ant-design/icons";
// import { Badge, Button, Popover } from "antd";
import React, { memo, useState } from "react";
import "./App.css";
import { Filter, ISelectProps, StatusStudent } from "./components/filter";
import Popover from "antd/es/popover";
import Badge from "antd/es/badge";
import Button from "antd/es/button";
import FilterOutlined from "@ant-design/icons/lib/icons/FilterOutlined";
// import Button from "antd/es/button/button";
// import Badge from "antd/es/badge";
// import Popover from "antd/es/popover";
const initStudents: Student[] = [
  {
    name: "Nguyen An",
    age: 12,
    grade: "3",
    status: StatusStudent.IsScholarship,
  },
  {
    name: "Tran Binh",
    age: 16,
    grade: "4",
    status: StatusStudent.IsScholarship,
  },
  {
    name: "Le Chi",
    age: 10,
    grade: "2",
    status: StatusStudent.IsPoor,
  },
  {
    name: "Pham Dung",
    age: 14,
    grade: "3",
    status: StatusStudent.IsPoor,
  },
  {
    name: "Vu Hang",
    age: 11,
    grade: "2",
    status: StatusStudent.IsPoor,
  },
];

interface Student {
  name: string;
  age: number;
  grade: string;
  status: StatusStudent;
}

interface IListStudentsProps {
  students: Array<Student>;
}

const ListStudents = memo((props: IListStudentsProps) => {
  const { students } = props;
  console.log("Redner list student: ");
  return (
    <ul>
      {students.map((student, index) => {
        return <li key={index}>{student.name}</li>;
      })}
    </ul>
  );
});

function App() {
  const [students, setStudents] = useState<Array<Student>>(initStudents);
  const [countFilter, setCountFilter] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const handleOpenChange = (open: boolean) => {
    setOpen(open);
  };

  const handleFilterStudent = (selected: ISelectProps) => {
    if (!selected) return;
    let newStudent: Array<Student> = initStudents;

    if (selected.status.length > 0) {
      newStudent = initStudents.filter((student) =>
        selected.status.includes(student.status)
      );
    }
    setCountFilter(selected.status.length);
    setStudents([...newStudent]);
  };

  return (
    <React.Fragment>
      <div style={{ display: "flex", gap: "126px" }}>
        <Popover
          content={<Filter filterStudent={handleFilterStudent}></Filter>}
          title="Title"
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}
        >
          <Badge count={countFilter}>
            <Button
              icon={<FilterOutlined></FilterOutlined>}
              type="primary"
            ></Button>
          </Badge>
        </Popover>

        <ListStudents students={students}></ListStudents>
      </div>
    </React.Fragment>
  );
}

export default App;
