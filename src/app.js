import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import UsersTable from "./components/usersTable/UsersTable";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "مهرداد",
      lastName: "منوری",
      national_id: "0925827381",
      age: "20",
    },
    {
      id: 2,
      firstName: "صادق",
      lastName: "احمدی",
      national_id: "0954769321",
      age: "18",
    },
  ]);

  const [headers, setHeaders] = useState({
    index: "ردیف",
    firstName: "نام",
    lastName: "نام خانوادگی",
    national_id: "کد ملی",
    age: "سن"
  });

  return <div>
    <UsersTable users={users} headers={headers} />
  </div>;
};

export default App;
