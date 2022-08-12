import React, { Component } from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
const Table = (props) => {
  const { columns, data, onSort, sortColumn } = props;
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        onSort={onSort}
        sortColumn={sortColumn}
      ></TableHeader>
      <TableBody data={data} columns={columns}></TableBody>
    </table>
  );
};

export default Table;
