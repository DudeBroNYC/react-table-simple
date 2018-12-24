import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const columns = [
  {
    Header: "Name",
    columns: [
      {
        Header: "First Name",
        accessor: "firstName"
      },
      {
        Header: "Last Name",
        id: "lastName",
        accessor: d => d.lastName
      }
    ]
  },
  {
    Header: "Info",
    columns: [
      {
        Header: "Wins",
        accessor: "wins"
      },
      {
        Header: "Losses",
        accessor: "losses"
      }
    ]
  },
  {
    Header: "Last 10 Matches",
    columns: [
      {
        Header: "Trend",
        accessor: "trend"
      }
    ]
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
          SubComponent={row => {
            return (
              <div style={{ padding: "20px" }}>
                <em>Last 10 Matches</em>
                <br />
                <br />
                <ReactTable
                  //data={data}
                  columns={columns}
                  defaultPageSize={3}
                  showPagination={false}
                  //SubComponent={row => {
                  //return (
                  //<div style={{ padding: "20px" }}>
                  //Another Sub Component!
                  //</div>
                  //);
                  //}}
                />
              </div>
            );
          }}
        />
        <br />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
