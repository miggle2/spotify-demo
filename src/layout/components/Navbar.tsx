import { Avatar, Box, CircularProgress } from '@mui/material'
import React from 'react'
import LoginBotton from '../../common/components/LoginBotton'
import useGetCurrentUserProfile from '../../hooks/useGetCurrentUserProfile'
import { deepPurple, green } from '@mui/material/colors'

const Navbar = () => {
    const { data: userProfile, isLoading, isError } = useGetCurrentUserProfile()
    console.log("profile", userProfile);
    return (
        <Box 
            display={"flex"} 
            justifyContent={"flex-end"} 
            alignItems={"center"} 
            height="64px"
        >
            {isLoading ? (
                <CircularProgress size={28}/>
            ): isError || !userProfile ? (
                <LoginBotton />
            ) : (
                <Avatar sx={{ bgcolor: green[500] }} alt={userProfile.display_name} src={userProfile.images[0]?.url} > 
                {userProfile.display_name?.charAt(0)}
                </Avatar>
            )}
            
        </Box>
    )
}

export default Navbar