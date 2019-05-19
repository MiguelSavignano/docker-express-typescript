import React from "react";
import "./App.css";
import "react-table/react-table.css";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

// const API_URL = process.env.API_URL || "/api";
const API_URL = process.env.API_URL || "http://localhost:3000";

function onAfterSaveCell(row, cellName, cellValue) {
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
}

function onBeforeSaveCell(row, cellName, cellValue) {
  // You can do any validation on here for editing value,
  // return false for reject the editing
  return true;
}

const cellEditProp = {
  mode: "click",
  blurToSave: true,
  beforeSaveCell: onBeforeSaveCell, // a hook for before saving cell
  afterSaveCell: onAfterSaveCell // a hook for after saving cell
};

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
  render() {
    if (this.state.loading) return null;
    const { data } = this.state;
    return (
      <div className="app-container">
        <BootstrapTable data={data} striped hover cellEdit={cellEditProp}>
          <TableHeaderColumn isKey dataField="id">
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
