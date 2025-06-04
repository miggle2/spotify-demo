import { Box } from '@mui/material'
import React from 'react'
import LoginBotton from '../../common/components/LoginBotton'

const Navbar = () => {
    return (
        <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"} height="64px">
            <LoginBotton />
        </Box>
    )
}

export default Navbar