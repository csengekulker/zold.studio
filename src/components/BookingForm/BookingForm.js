import React from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import { Section } from '../../core/ui'
import useStyles from './useStyles'

// TODO: structure

/* 

    1 dropdown (massage name)
    1 radiobuttongroup
    1 dropdown (appointments)

    input STRING R 
    input DATE R 
    input STRING (possible redundance) R 
    input STRING R 
    input STRING R

    input STRING

    (R - REQUIRED)

    1 checkbox 

    1 submit button
*/

function BookingForm () {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    return (
        <>
        <p>valasszon kezelest</p>
        <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Válasszon kezelést a listából
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Masszazs 1</MenuItem>
        <MenuItem onClick={handleClose}>Masszazs 2</MenuItem>
        <MenuItem onClick={handleClose}>Masszazs 3</MenuItem>
      </Menu>
    </div>
        </>
    )
    

}  

export default BookingForm
