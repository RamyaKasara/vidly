import { toBeDisabled } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import _ from "lodash";


class TableBody extends Component {
  //Using conditional rendering to render regular columns and buttons (like and delete)
  renderCell = (item, column) => {
    if (column.key) return column.content(item);
    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)} 
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
