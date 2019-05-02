import React from "react";
import "./App.css";
import matchSorter from "match-sorter";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const API_URL = process.env.API_URL || "/api";

class App extends React.Component<{}, { data: any; loading: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true
    };
  }
  componentDidMount() {
    fetch(`${API_URL}/posts`).then(r =>
      r.json().then(posts => {
        console.log(posts);
        this.setState({
          data: posts,
          loading: false
        });
      })
    );
  }
  render() {
    if (this.state.loading) return null;
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value
          }
          columns={[
            {
              columns: [
                {
                  Header: "Title",
                  accessor: "title",
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["body"] }),
                  filterAll: true
                },
                {
                  Header: "Body",
                  accessor: "body",
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["body"] }),
                  filterAll: true
                },
                {
                  Header: "Userid",
                  accessor: "userId"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

export default App;
