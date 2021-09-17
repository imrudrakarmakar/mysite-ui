import React from 'react';
import './TableData.css';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import PanoramaFishEyeOutlinedIcon from '@mui/icons-material/PanoramaFishEyeOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import { Link } from "react-router-dom";

function TableData() {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          color: theme.palette.common.black,
        },
    }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:last-child td, &:last-child th': {
          border: 0,
        },
    }));

    function createData(check, team, access, members, active, view) {
        return { check, team, access, members, active, view };
    }

    const rows = [
        createData(<PanoramaFishEyeOutlinedIcon fontSize="small" />, 'Management Team', 'All Access', 4, '1 min ago', <RemoveRedEyeOutlinedIcon />),
        createData(<PanoramaFishEyeOutlinedIcon fontSize="small" />, 'Procurement Team', 'Restricted Access', 8, '1 min ago', <RemoveRedEyeOutlinedIcon />),
        createData(<PanoramaFishEyeOutlinedIcon fontSize="small" />, 'Project Team', 'Restricted Access', 16, '1 min ago', <RemoveRedEyeOutlinedIcon />),
        createData(<PanoramaFishEyeOutlinedIcon fontSize="small" />, 'IT Team', 'Restricted Access', 4, '1 min ago', <RemoveRedEyeOutlinedIcon />),
        createData('', 'Super Admin', 'All Access', 1, '1 min ago', <RemoveRedEyeOutlinedIcon />),
    ];

    function trueAccess(access) {
        if(access === 'All Access') {
            return true;
        } else {
            return false;
        }
    }


    return (
        <div>
            <div className="table__main">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow className="tabledata__tablerow">
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell>Department/Role Name</StyledTableCell>
                            <StyledTableCell align="center">Access Level</StyledTableCell>
                            <StyledTableCell align="center">No of members</StyledTableCell>
                            <StyledTableCell align="center">Last Updated</StyledTableCell>
                            <StyledTableCell align="center"></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.team}>
                        <StyledTableCell>{row.check}</StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                            <Link to="/tabledatacontent">
                            {row.team}
                            </Link>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            <div className={trueAccess(row.access) ? "accessStl1" : "accessStl2"}>
                                {row.access}
                            </div>
                        </StyledTableCell>
                        <StyledTableCell align="center">{row.members}</StyledTableCell>
                        <StyledTableCell align="center">{row.active}</StyledTableCell>
                        <StyledTableCell align="center">{row.view}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        </div>
    )
}

export default TableData;
