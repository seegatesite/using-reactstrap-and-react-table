import React from "react";
import { Container } from "reactstrap";

import "./styles.css";
import profile from "./data.json";
import XTable from "./TableComponent/Table";

export default function App() {
  const listHeader = [
    {
      Header: "ID",
      className: "t-cell-1 text-left",
      accessor: "id",
      notShowSortingDisplay: true
    },
    {
      Header: "First Name",
      accessor: "first_name",
      className: "t-cell-2 text-left"
    },
    {
      Header: "Last Name",
      accessor: "last_name",
      className: "t-cell-3 text-left"
    },
    {
      Header: "Gender",
      accessor: "gender",
      className: "t-cell-4 text-center"
    },
    {
      Header: "Email",
      accessor: "email",
      className: "t-cell-5 text-left"
    }
  ];
  const listData = profile;
  return (
    <div className="App">
      <Container className="themed-container" fluid={true}>
        <h1>The Using of Reactstrap and React-Table</h1>
        <div>
          <XTable columns={listHeader} loading={false} data={listData} />
        </div>
      </Container>
    </div>
  );
}
