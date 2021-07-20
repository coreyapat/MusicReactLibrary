
import React from 'react'
// import { useTable } from 'react-table'
// import { COLUMNS } from './table'
// import './table.css'


const Table = (props) =>{


    return(
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>etc</th>
                    <th>somehitng</th>
                </tr>
            </thead>
            <tbody>
                {props.songs.map(function(song){
                    return <tr>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.title}</td>
                    <td>{song.title}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Table



// export const TableBase = (props) => {

//     const columns = useMemo(() => COLUMNS, [])
//     const data = null 

//     const tableInstance = useTable({
//         columns,
//         data: null

//     })

//     const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance


//     return(
//         <table {...getTableProps()}>
//            <thead>
//                {
//                    headerGroups.map(headerGroup => (
//                 <tr {...headerGroup.getHeaderGroupProps()}>
//                     {headerGroup.headers.map((column) =>(
//                     <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//                     ))}
//                 </tr>
//                 ))}
//             </thead>
//             <tbody {...getTableProps()}>
//                 {
//                     rows.map(row => {
//                         prepareRow(row)
//                         return (
//                             <tr {...row.getRowProps()}>
//                                 {
//                                 row.cells.map( cell => {
//                                     return <td {...cell.getCellProps()}>{cell.render('cell')}</td>
//                                 })}
//                             </tr>
//                         )
//                     })
//                 }
//                 <tr>
//                     <td>

//                     </td>
//                 </tr>
//             </tbody> 

//         </table>
//         // <div>
//         //     <h1>{props.items[0].songTitle}</h1>
//         // </div>

//     )
// }

// class App extends Component {
//     state = {
//         songs: []
//     }

//     componentDidMount(){
//         axios.get('http://127.0.0.1:8000/music/')
//         .then(response => this.setstate({
//             songs: response.data
//         }));
//     }



//     render(){
//         return(
//             this.state.songs.map(function(song){
//                 return (
//                     <div>{song.title}</div>
//                 )
//             })
//         )
//     }
// }

// export default App