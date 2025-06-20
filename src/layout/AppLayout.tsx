import { Box, styled, Typography } from '@mui/material'
import { NavLink, Outlet } from 'react-router'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryHead from './components/LibraryHead';
import Library from './components/Library';
import Navbar from './components/Navbar';

const Layout = styled("div")({
  display: "flex",
  height: "100vh",
  padding: "8px",
})
const Sidebar = styled("div")(({ theme }) => ({
  width: "331px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}))

const ContentBox = styled(Box)(({ theme }) => ({
  borderRadius: "8px",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  width: "100%",
  padding: "8px",
  marginBottom: "8px",
  marginRight: "8px",
}))

const NavList = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
})

const StyledNavList = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  color: theme.palette.text.secondary,
  "&:hover": {
    color: theme.palette.text.primary
  },
  "&.active": {
    color: theme.palette.text.primary,
    fontWeight: "bold",
  },
}));

const AppLayout = () => {

  return (
    <Layout>
      <Sidebar>
        <ContentBox>
          <NavList>
            <StyledNavList to="/">
              <HomeIcon />
              <Typography variant="h2" fontWeight={700}>Home</Typography>
            </StyledNavList>
            <StyledNavList to="/search">
              <SearchIcon />
              <Typography variant="h2" fontWeight={700}>Search</Typography>
            </StyledNavList>
          </NavList>
        </ContentBox>
        <ContentBox height="100%">
          <LibraryHead></LibraryHead>
          <Library />
        </ContentBox>
      </Sidebar>
      <ContentBox>
        <Navbar/>
      <Outlet />
      </ContentBox>
    </Layout>

  )
}

export default AppLayout