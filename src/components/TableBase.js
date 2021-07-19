import React from 'react'
// import { useTable } from 'react-table'
import { COLUMNS } from './table'
import './table.css'

export const TableBase = (props) => {

    const columns = useMemo(() => COLUMNS, [])
    const data = null 

    const tableInstance = useTable({
        columns,
        data: null

    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance


    return(
        <table {...getTableProps()}>
           <thead>
               {
                   headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) =>(
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                row.cells.map( cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('cell')}</td>
                                })}
                            </tr>
                        )
                    })
                }
                <tr>
                    <td>

                    </td>
                </tr>
            </tbody> 

        </table>
        // <div>
        //     <h1>{props.items[0].songTitle}</h1>
        // </div>

    )
}