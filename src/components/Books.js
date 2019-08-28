import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class Books extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    const url = `https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/books?pageSize=12`;

    axios.get(url)
      .then((res) => {
        var books = res.data
        this.setState({ books })
      })
  }

  render() {
    const columns = [
      {
        Header: "The Book Names",
        Cell: props => {
          return <a href={props.original.url}>{props.original.name}</a>
        },
        accessor: "name",
        sortable: false,
        style: {
          textAlign: 'center'
        }
      }
    ]
    return (
      <>
        <h1 style={{ textAlign: "center" }}>List of Books</h1>
        <ReactTable
          columns={columns}
          data={this.state.books}
          defaultPageSize={12}
          showPageSizeOptions={false}>
        </ReactTable>
      </>
    )
  }
}

export default Books