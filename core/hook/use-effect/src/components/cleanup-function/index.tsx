/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useEffect, useState } from "react";
export const ExampleCleanUp = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    // setTimeout(() => {
    //   initData(count);
    // }, 2000);
    // initData2();

    const headers = new Headers();
    headers.append(
      "Authorization",
      `Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjU5NWE4NjcwLTc2ZmUtNGY4YS04YjFmLWExYWEwODg5Njk5YSIsIkFDQ09VTlRfSUQiOiIyZTAxN2MwOS0zOTkxLTQ0YzItODM5YS0xMmQ2MWEyNmZkNjEiLCJGVUxMX05BTUUiOiJMaW5oIiwiQUNDT1VOVF9UWVBFIjoiQURNSU4iLCJTVE9SRV9JRCI6IjY3ZGU1MWFhLWZiYjktNGRmNy05YWZjLTgwNzg0Y2JmMmMwNCIsIkVNQUlMIjoibGluaGxpbmhoMjYwMUBnbWFpbC5jb20iLCJQSE9ORV9OVU1CRVIiOiIwMTIzNDU2Nzg4OSIsIkNVUlJFTkNZX0NPREUiOiJWTkQiLCJDVVJSRU5DWV9TWU1CT0wiOiLEkSIsImV4cCI6MTcxMjQzMDYwOSwiaXNzIjoiR29Gb29kQmV2ZXJhZ2UuQVBJIiwiYXVkIjoiR29Gb29kQmV2ZXJhZ2UifQ.5QPhaTXK4EgThP8KPTpfJF2hA_wnOrapt95iun4pqY0`
    );
    headers.append("platform-id", "6C626154-5065-616C-7466-6F7200000000");

    fetch(
      `https://api.stag-admin.beecowdeal.vn/api/v3.3/transfermaterial/get-transfer-materials?pageNumber=${count}&pageSize=20&keySearch=`,
      {
        headers,
        signal: controller.signal
      }
    )
      .then((response) => response.json())
      .then((data) => setData(data.transferMaterials));

    return () => {
      controller.abort();
    };
  }, [count]);

  const initData2 = () => {
    const headers = new Headers();
    headers.append(
      "Authorization",
      `Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjU5NWE4NjcwLTc2ZmUtNGY4YS04YjFmLWExYWEwODg5Njk5YSIsIkFDQ09VTlRfSUQiOiIyZTAxN2MwOS0zOTkxLTQ0YzItODM5YS0xMmQ2MWEyNmZkNjEiLCJGVUxMX05BTUUiOiJMaW5oIiwiQUNDT1VOVF9UWVBFIjoiQURNSU4iLCJTVE9SRV9JRCI6IjY3ZGU1MWFhLWZiYjktNGRmNy05YWZjLTgwNzg0Y2JmMmMwNCIsIkVNQUlMIjoibGluaGxpbmhoMjYwMUBnbWFpbC5jb20iLCJQSE9ORV9OVU1CRVIiOiIwMTIzNDU2Nzg4OSIsIkNVUlJFTkNZX0NPREUiOiJWTkQiLCJDVVJSRU5DWV9TWU1CT0wiOiLEkSIsImV4cCI6MTcxMjQzMDYwOSwiaXNzIjoiR29Gb29kQmV2ZXJhZ2UuQVBJIiwiYXVkIjoiR29Gb29kQmV2ZXJhZ2UifQ.5QPhaTXK4EgThP8KPTpfJF2hA_wnOrapt95iun4pqY0`
    );
    headers.append("platform-id", "6C626154-5065-616C-7466-6F7200000000");

    fetch(
      `https://api.stag-admin.beecowdeal.vn/api/v3.3/transfermaterial/get-transfer-materials?pageNumber=${count}&pageSize=20&keySearch=`,
      {
        headers,
      }
    )
      .then((response) => response.json())
      .then((data) => setData(data.transferMaterials));
  };

  //   const initData = async (page: number) => {
  //     const headers = new Headers();
  //     headers.append(
  //       "Authorization",
  //       `Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjU5NWE4NjcwLTc2ZmUtNGY4YS04YjFmLWExYWEwODg5Njk5YSIsIkFDQ09VTlRfSUQiOiIyZTAxN2MwOS0zOTkxLTQ0YzItODM5YS0xMmQ2MWEyNmZkNjEiLCJGVUxMX05BTUUiOiJMaW5oIiwiQUNDT1VOVF9UWVBFIjoiQURNSU4iLCJTVE9SRV9JRCI6IjY3ZGU1MWFhLWZiYjktNGRmNy05YWZjLTgwNzg0Y2JmMmMwNCIsIkVNQUlMIjoibGluaGxpbmhoMjYwMUBnbWFpbC5jb20iLCJQSE9ORV9OVU1CRVIiOiIwMTIzNDU2Nzg4OSIsIkNVUlJFTkNZX0NPREUiOiJWTkQiLCJDVVJSRU5DWV9TWU1CT0wiOiLEkSIsImV4cCI6MTcxMjQzMDYwOSwiaXNzIjoiR29Gb29kQmV2ZXJhZ2UuQVBJIiwiYXVkIjoiR29Gb29kQmV2ZXJhZ2UifQ.5QPhaTXK4EgThP8KPTpfJF2hA_wnOrapt95iun4pqY0`
  //     );
  //     headers.append("platform-id", "6C626154-5065-616C-7466-6F7200000000");

  //     const response = await fetch(
  //       `https://api.stag-admin.beecowdeal.vn/api/v3.3/transfermaterial/get-transfer-materials?pageNumber=${page}&pageSize=20&keySearch=`,
  //       {
  //         headers,
  //       }
  //     );
  //     if (response) {
  //       const dataResponse = await response.json();
  //       setData(dataResponse.transferMaterials);
  //       console.log("data: ", dataResponse);
  //     }
  //   };

  const handleOnClick = () => {
    setCount(randomIntFromInterval(1, 7));

    // initData(count)
  };

  function randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <React.Fragment>
      {count}
      <button onClick={handleOnClick}>Add count</button>
      <div>
        <ul>
          {data?.map((item: any) => (
            <li key={item.id}>{item.code}</li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};
