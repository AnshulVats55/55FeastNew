import { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Container,
    Avatar,
    Drawer,
    List,
    ListItem,
    Box,
  } from '@mui/material';
import { Home, RestaurantMenu, RateReview, Close, RestartAlt, Logout } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { getNavbarStyles } from './Navbar.Styles';
import CommonButton from '../button/CommonButton';
import { motion } from 'framer-motion';
import MaleAvatar from '../../assets/male avatar.jpg';

const Navbar = () => {

    const { classes } = getNavbarStyles();

    const [isAdmin, setIsAdmin] = useState(true);

    const memberNavigationLinks = [
        { text: 'Home', icon: <Home className={classes.getListItemIconStyles} />, url: '/' },
        { text: "Book your meal", icon: <RestaurantMenu className={classes.getListItemIconStyles} />, url: '/bookyourmeal' },
        { text: 'Reviews', icon: <RateReview className={classes.getListItemIconStyles} />, url: '/reviews' },
    ];

    const adminNavigationLinks = [
        { text: 'Home', icon: <Home className={classes.getListItemIconStyles} />, url: '/' },
        { text: "Today's count", icon: <RestaurantMenu className={classes.getListItemIconStyles} />, url: '/todayscount' },
        { text: 'Reviews', icon: <RateReview className={classes.getListItemIconStyles} />, url: '/reviews' },
    ];

    const actionLinks = [
        {text: 'Reset password', icon:<RestartAlt className={classes.getListItemIconStyles} />},
        {text: 'Logout', icon:<Logout className={classes.getListItemIconStyles} />}
    ];

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = (open) => () => {
        setOpenDrawer(open);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        localStorage.removeItem("currentUserName");
    };

    return (
        <AppBar position="static" className={classes.getAppbarStyles}>
        <Container maxWidth="xl">
            <Box className={classes.getToolbarContStyles}>
                <Toolbar className={classes.getToolbarStyles}>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            className={classes.getHamburgerIconContStyles}
                        >
                            <MenuIcon className={classes.getHamburgerIconStyles} />
                        </IconButton>
                        {
                            isAdmin
                            ?
                            <Drawer anchor="left" open={Boolean(anchorElNav)} onClick={handleCloseNavMenu}>
                            <Box className={classes.getNavLinksContStylesOne} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                                <Close className={classes.getCloseIconStylesOne} onClick={handleCloseNavMenu} />
                                <List>
                                    {adminNavigationLinks.map((link, index) => (
                                    <ListItem
                                        key={index}
                                        component="a"
                                        href={link.url}
                                        className={classes.getListItemStylesOne}
                                        sx={{
                                            ...(index === 0 ? { marginTop:"2.5rem !important" } : { marginTop: "0.75rem !important" })
                                        }}
                                    >
                                            {link.icon}
                                        <Typography className={classes.getListItemTextStylesOne}>{link.text}</Typography>
                                    </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                        :
                        <Drawer anchor="left" open={Boolean(anchorElNav)} onClick={handleCloseNavMenu}>
                            <Box className={classes.getNavLinksContStylesOne} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                                <Close className={classes.getCloseIconStylesOne} onClick={handleCloseNavMenu} />
                                <List>
                                    {memberNavigationLinks.map((link, index) => (
                                    <ListItem
                                        key={index}
                                        component="a"
                                        href={link.url}
                                        className={classes.getListItemStylesOne}
                                        sx={{
                                            ...(index === 0 ? { marginTop:"2.5rem !important" } : { marginTop: "0.75rem !important" })
                                        }}
                                    >
                                            {link.icon}
                                        <Typography className={classes.getListItemTextStylesOne}>{link.text}</Typography>
                                    </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                        }
                    </Box>
                    <Typography
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            fontSize:"1.5rem !important",
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 0.70,
                            "@media screen and (max-width: 899px)": {
                                flexGrow: 1,
                            },
                            "@media screen and (max-width: 599px)": {
                                fontSize:"1.25rem !important",
                            },
                            "@media screen and (max-width: 399px)": {
                                fontSize:"1.10rem !important",
                            },
                        }}
                        className={classes.getBrandLogoStyles}
                    >
                        FoodMood
                    </Typography>

                    <Box className={classes.getNavLinksStylesTwo}>
                        <Typography
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontSize:"1.5rem !important",
                            }}
                            className={classes.getBrandLogoStyles}
                        >
                            FoodMood
                        </Typography>
                        {
                            isAdmin
                            ?
                            <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                            }}
                            className={classes.getNavLinksContStylesTwo}
                        >
                            {adminNavigationLinks.map((page, index) => (
                                <motion.div transition={{ duration: 0.15 }} whileTap={{ scale: 0.95 }} key={index}>
                                    <Typography
                                        component="a"
                                        href={page.url}
                                        key={page.text}
                                        onClick={handleCloseNavMenu}
                                        className={classes.getNavLinksStylesOne}
                                    >
                                        {page.text}
                                    </Typography>
                                </motion.div>
                            ))}
                        </Box>
                        :
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                            }}
                            className={classes.getNavLinksContStylesTwo}
                        >
                            {memberNavigationLinks.map((page, index) => (
                                <motion.div transition={{ duration: 0.15 }} whileTap={{ scale: 0.95 }} key={index}>
                                    <Typography
                                        component="a"
                                        href={page.url}
                                        key={page.text}
                                        onClick={handleCloseNavMenu}
                                        className={classes.getNavLinksStylesOne}
                                    >
                                        {page.text}
                                    </Typography>
                                </motion.div>
                            ))}
                        </Box>
                        }
                        <Box sx={{ flexGrow: 0, display:"flex", justifyContent:"center", alignItems:"center" }}>
                        <IconButton sx={{ p: 0, marginRight:"1rem" }}>
                            <Avatar
                                src={MaleAvatar}
                                alt=""
                                sx={{
                                    width: 36,
                                    height: 36
                                }}
                            />
                        </IconButton>   
                        <motion.div
                            initial={{ scale: 1 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration:0.1 }}
                        >
                            <CommonButton
                                onClick={handleLogout}
                                children="Logout"
                                type={""}
                                customStyles={{
                                    width:"80px",
                                    height:"40px",
                                    background:"transparent",
                                    color:"#FFF",
                                    borderRadius:"4px",
                                    border:"1px solid #FFF",
                                    "&:hover": {
                                        background:"#FFF",
                                        border:"none",
                                        color:"#232229",
                                    },
                                    "&:focus": {
                                        outline:"none",
                                    },
                                }}
                            />
                            </motion.div>
                        </Box>
                    </Box>
                    
                    <Box sx={{ flexGrow: 0, display:{ xs: 'flex', md: 'none' }, justifyContent:"center", alignItems:"center", }}>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, marginRight:"0.5rem" }}>
                            <Avatar
                            src={MaleAvatar}
                            alt=""
                            sx={{
                                width: 32,
                                height: 32
                            }}
                        />
                        </IconButton>
                        <Drawer anchor="right" open={Boolean(anchorElUser)} onClick={handleCloseUserMenu}>
                            <Box className={classes.getNavLinksContStylesOne} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                                <Close className={classes.getCloseIconStylesTwo} onClick={handleCloseUserMenu} />
                                <List>
                                    {actionLinks.map((link, index) => (
                                        <ListItem
                                            key={index}
                                            className={classes.getListItemStylesTwo}
                                            sx={{
                                                ...(index === 0 ? { marginTop:"2.5rem !important" } : { marginTop: "0.75rem !important" })
                                            }}
                                            onClick={link.text === "Logout" ? handleLogout : null}
                                        >
                                                {link.icon}
                                            <Typography className={classes.getListItemTextStylesTwo}>{link.text}</Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </Box>
                </Toolbar>
            </Box>
        </Container>
        </AppBar>
    );
}

export default Navbar;