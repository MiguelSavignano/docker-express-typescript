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
    const item = row;
    console.log(item);

    const url = `${API_URL}/posts/${item.id}`;
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

  onDeleteRow = rowsIds => {
    console.log(rowsIds);
    const fetchDeleteFncs = rowsIds.map(itemId => {
      return new Promise((resolve, reject) => {
        fetch(`${API_URL}/posts/${itemId}`, {
          method: "DELETE"
        });
      });
    });
    Promise.all(fetchDeleteFncs);

    const data = this.state.data.filter(item => {
      return !rowsIds.includes(item.id);
    });

    this.setState({ data });
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
      onAddRow: this.onAddRow,
      onDeleteRow: this.onDeleteRow
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
          insertRow
          deleteRow
          selectRow={{ mode: "checkbox" }}
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
