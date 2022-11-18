import { Typography, Box } from "@mui/material"
import React from "react"
import useStyles from "./useStyles"

function Footer () {

    const { classes } = useStyles()

    return (
        <Box className={classes.box}>
            <Typography>Footer &copy; 2022</Typography>
        </Box>
    )
}

export default Footer
