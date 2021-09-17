import React from 'react';
import './TableContent.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

function TableContent() {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
          backgroundColor: purple[700],
        },
        padding: '0 30px'
    }));
    return (
        <div>
            <div className="tablecontent__main">
                <ColorButton variant="contained">
                    <AddIcon />
                    <p>Add Role</p>
                </ColorButton>
                <div className="tablecontent__editdelete">
                    <ModeEditOutlineOutlinedIcon className="iconsStyle" />
                    <DeleteOutlineOutlinedIcon className="iconsStyle" />
                </div>
            </div>
        </div>
    )
}

export default TableContent;
