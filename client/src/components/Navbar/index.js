import * as React from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import bifrost_logo from '../../bifrost_logo.png';
import './Styles.css';

const pages = [
  'Connect',
  'Images',
  'Faces',
  'homeNFT',
  'create-nft',
  'my-nfts',
  'dashboard',
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigateHandler = (e) => {
    navigate(`/${e.target.name}`);
  };
  const homeNav = () => {
    navigate('/');
  };

  return (
    <div style={{}}>
      <AppBar
        position='static'
        sx={{
          backgroundColor: 'black',
          displayPrint: 'flex',
          alignSelf: 'center',
          justifyContent: 'space-between',
          marginY: 1,
          marginBottom: 8,
        }}
      >
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <img
                src={bifrost_logo}
                onClick={homeNav}
                style={{ width: 65, height: 65 }}
                alt='logo'
              />
            </Typography>

            {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleCloseNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography> */}
            {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> */}
            {pages.map((page) => (
              <Button
                key={page}
                name={page}
                onClick={navigateHandler}
                className='myNavButton'
                // sx={{
                //   my: 2,
                //   color: 'white',
                //   display: 'block',
                //   fontSize: '30px',
                //   fontFamily: 'Roboto Mono, monospace',
                //   marginX: 2,
                // }}
              >
                {page}
              </Button>
            ))}
            {/* </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default Navbar;
