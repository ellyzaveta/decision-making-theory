import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./AlternativeTable.css"
  
const AlternativeTable = ({ alternatives }) => {
    
    return (
        <div className="horizontal-table">
            <Paper style={{ boxShadow: 'none', border: '1px solid rgba(125, 125, 125, 0.8)' }}>
                <TableContainer>
                    <Table aria-label="Alternative Table" style={{ borderCollapse: 'collapse', border: '1px solid rgba(125, 125, 125, 0.2)' }}>
                        <TableHead>
                            <TableRow className='highlighted-row'>
                                <TableCell className='cell'>{"Ai"}</TableCell>
                                {alternatives.map((alternative, index) => (
                                    <TableCell className='cell' key={index} s>{alternative.label}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell className='cell' >{"Q1"}</TableCell>
                                {alternatives.map((alternative, index) => (
                                    <TableCell key={index} className='cell' >
                                        {alternative.q1}
                                    </TableCell>
                                ))}
                            </TableRow>
                            <TableRow>
                                <TableCell className='cell' >{"Q2"}</TableCell>
                                {alternatives.map((alternative, index) => (
                                    <TableCell key={index} className='cell'>
                                        {alternative.q2}
                                    </TableCell>
                                ))}
                            </TableRow>
                            <TableRow>
                                <TableCell className='cell' >{"P"}</TableCell>
                                {alternatives.map((alternative, index) => (
                                    <TableCell key={index} className='cell' >
                                        {alternative.dominated == null ? "  " : alternative.dominated}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
};
  
export default AlternativeTable;