export const CallApiExample = async () => {
  const response = fetch("https://catfact.ninja/fact");
  return response;
};

export const GetOrderProductReport = async () => {
  const authToken =
    "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjU5NWE4NjcwLTc2ZmUtNGY4YS04YjFmLWExYWEwODg5Njk5YSIsIkFDQ09VTlRfSUQiOiIyZTAxN2MwOS0zOTkxLTQ0YzItODM5YS0xMmQ2MWEyNmZkNjEiLCJGVUxMX05BTUUiOiJMaW5oIiwiQUNDT1VOVF9UWVBFIjoiQURNSU4iLCJTVE9SRV9JRCI6IjY3ZGU1MWFhLWZiYjktNGRmNy05YWZjLTgwNzg0Y2JmMmMwNCIsIkVNQUlMIjoibGluaGxpbmhoMjYwMUBnbWFpbC5jb20iLCJQSE9ORV9OVU1CRVIiOiIwMTIzNDU2Nzg4OSIsIkNVUlJFTkNZX0NPREUiOiJWTkQiLCJDVVJSRU5DWV9TWU1CT0wiOiLEkSIsImV4cCI6MTcxMzA1MTc0MSwiaXNzIjoiR29Gb29kQmV2ZXJhZ2UuQVBJIiwiYXVkIjoiR29Gb29kQmV2ZXJhZ2UifQ.9iRb_G52pSQnGJfYsOtDkzh5sSZUg1zs_Psk4B2r2LI";
  const platformId = "6C626154-5065-616C-7466-6F7200000000";
  const headers = {
    "Platform-Id": platformId,
    Authorization: `Bearer ${authToken}`,
  };

  const response = fetch(
    "https://api.stag-admin.beecowdeal.vn/api/v3.3/order/get-order-product-report?branchId&startDate=04/13/2024&endDate=04/13/2024&businessSummaryWidgetFilter=0&pageNumber=1&pageSize=20&keySearch=undefined",
    // "https://api.stag-admin.beecowdeal.vn/api/v3.3/order/get-order-product-report?branchId=&startDate=01/01/2024&endDate=12/31/2024&businessSummaryWidgetFilter=6&pageNumber=1&pageSize=20&keySearch=undefined",

    {
      headers: headers,
    //   signal: AbortSignal.timeout(10000)
    }
  );
  return response;
};
