import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { thisExpression } from '@babel/types';

const path = require('path')

export default class Houses extends Component {

    state = {
        houses: [],
        overl: [],
        overl2: ""
    }

    // axios.get(url)
    //     .then((res) => {
    //         for(var i in res.data){
    //        axios.get(`http://cors-anywhere.herokuapp.com/${res.data[i].overlord}`)
    //             .then((res) => {
    //                 console.log(res.data.name)
    //                 bald = res.data.name
    //             })}
    //         var houses = res.data
    //         this.setState({ houses })
    //         console.log(bald)

    //         //console.log(houses);
    //     })

    getOverlord = function (overlordurl) {
        return (
            axios.get(`https://cors-anywhere.herokuapp.com/${overlordurl}`)
                .then((res) => {
                    this.setState((state) => { 
                        let overl = [];
                        overl = overl.concat(res.data.name);
                        return {overl};
                    })
                })
            )
    }

    componentDidMount() {
        const url = `https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/houses?pageSize=444`;

        axios.get(url)
            .then((res) => {
                this.setState({ houses: res.data })
            })
            
        
    }

    render() {
        const columns = [
            {
                Header: "The House Names",
                Cell: props => {
                    return <a href={props.original.url}>{props.original.name}</a>
                },
                // accessor: "name",
                sortable: true,
                style: {
                    textAlign: 'center'
                }
            },
            {
                Header: "Region",
                accessor: "region",
                sortable: true,
                style: {
                    textAlign: 'center'
                }
            },
            {
                Header: "The Overlord of the House",
                Cell: props => {

                    return <button>Click for Overlord Info</button>

                },
                // accessor: "overlord",
                sortable: false,
                style: {
                    textAlign: 'center'
                }
            }
        ]
        return (
            <>
                <h1 style={{ textAlign: "center" }}>List of Houses</h1>
                <ReactTable
                    columns={columns}
                    data={this.state.houses}
                    showPageSizeOptions={false}>
                </ReactTable>
            </>
        )
    }
}
