import React from "react";
// import './custom-bootstrap.css';
 import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table'
function Reacttable(){
    return(
        <>
        <Table stripped bordered hover size="sm">
            <thead>
                <tr>
                    <th width="170">Name</th>
                    <th width="170">Rollno</th>
                    <th width="170">Branch</th>
                </tr>
            
            </thead>
            <tbody>
            <tr>
                    <td>Arvind</td>
                    <td>22CSR023</td>
                    <td>BE</td>
                    </tr>
                    <tr>
                    <td>Arvind</td>
                    <td>22CSR023</td>
                    <td>BE</td>
                    </tr>
            </tbody>
        </Table>
        </>
    )
}
export default Reacttable;