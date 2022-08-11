import React, { Component } from "react";
class TableHeader extends Component {
  //input: columns, sortColumn, onSort
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.path === sortColumn.path) {
      return sortColumn.order === "asc" ? (
        <i className="fas fa-sort-up" />
      ) : (
        <i className="fas fa-sort-down" />
      );
    }
    return null;
  };
  render() {
    const { sortColumn, onSort, columns } = this.props;

    return (
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
              style={{ cursor: "pointer" }}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
