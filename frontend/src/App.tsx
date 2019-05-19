// http://allenfang.github.io/react-bootstrap-table/index.html
import React from "react";
import "./App.css";
import "react-table/react-table.css";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

const API_URL =
  process.env.API_URL || process.env.NODE_ENV === "production"
    ? "/api"
    : "http://localhost:3000";

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
        console.log("fetch posts", posts);
        this.setState({
          data: posts,
          loading: false
        });
      })
    );
  }

  onAfterSaveCell = (row, cellName, cellValue) => {
    console.log(row);
    const post = row;

    const url = `${API_URL}/posts/${post.id}`;
    const data = { [cellName]: cellValue };

    fetch(url, {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => console.log("Success:", response));
  };

  onAddRow = row => {
    const url = `${API_URL}/posts`;
    const data = { ...row, id: undefined };

    fetch(url, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(r => {
      r.json().then(response =>
        this.setState({ data: [...this.state.data, { ...response }] })
      );
    });
  };

  render() {
    if (this.state.loading) return null;
    const options = {
      onAddRow: this.onAddRow
    };

    const cellEditProp = {
      mode: "click",
      blurToSave: true,
      afterSaveCell: this.onAfterSaveCell
    };

    const { data } = this.state;
    return (
      <div className="app-container">
        <BootstrapTable
          data={data}
          striped
          hover
          options={options}
          cellEdit={cellEditProp}
          insertRow={true}
        >
          <TableHeaderColumn isKey autoValue dataField="id">
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="title">Title</TableHeaderColumn>
          <TableHeaderColumn dataField="content">Content</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default App;
