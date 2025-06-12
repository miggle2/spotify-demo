import { Avatar, Box, CircularProgress, IconButton, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import LoginBotton from '../../common/components/LoginBotton'
import useGetCurrentUserProfile from '../../hooks/useGetCurrentUserProfile'
import { deepPurple, green } from '@mui/material/colors'
import useLogout from '../../hooks/useLogout'

const Navbar = () => {
    const { data: userProfile, isLoading, isError } = useGetCurrentUserProfile()
    console.log("profile", userProfile);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const logout = useLogout();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        logout();
    }

    return (
        <Box
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            height="64px"
        >
            {isLoading ? (
                <CircularProgress size={28} />
            ) : isError || !userProfile ? (
                <LoginBotton />
            ) : (
                <>
                    <IconButton onClick={handleClick}>
                        <Avatar
                            sx={{ bgcolor: green[500] }}
                            alt={userProfile.display_name}
                            src={userProfile.images[0]?.url}
                        >
                            {userProfile.display_name?.charAt(0)}
                        </Avatar>
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
                    </Menu>
                </>
            )}

        </Box>
    )
}

export default Navbar