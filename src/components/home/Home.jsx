import React, { useState, useEffect} from 'react';
import { getHomePageStyles } from './Home.Styles';
import { Grid, Typography, Button } from '@mui/material';
import CommonButton from '../button/CommonButton';
import MealBookingDialog from '../mealbooking/MealBookingDialog';
import InvitationDialog from '../dialog/InvitationDialog';
import MenuSwiper from '../swiper/MenuSwiper';
import LunchImage from '../../assets/lunch image.png';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const { classes }= getHomePageStyles();
    const navigate = useNavigate();

    const [inviteOpen, setInviteOpen] = useState(false);
    const [inviteScroll, setInviteScroll] = useState('paper');
    const [isAdmin, setIsAdmin] = useState(true);

    const handleMealBooking = () => {
        navigate("/bookyourmeal");
    };

    const handleInvitation = (scrollType) => () => {
        setInviteOpen(true);
        setInviteScroll(scrollType);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleInvitationClose = () => {
        setInviteOpen(false);
    }

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
            descriptionElement.focus();
        }
        }
    }, [open]);

    return (
        <Grid container className={classes.getGridContStyles}>
            <Grid item lg={6} md={6} sm={12} xs={12} className={classes.getGridItemOneStyles}>
                <motion.div className={classes.getHomeTextContStyles}>
                    <motion.div
                        initial={{ translateY: '50px', opacity: 0 }}
                        animate={{ translateY:'0px', opacity: 1 }}
                        transition={{
                            duration: 2,
                            repeatType: 'reverse',
                            ease:'easeInOut',
                        }}
                    >
                        <Typography className={classes.getHomeTextOneStyles}>
                        Buckle up it's
                        </Typography>
                    </motion.div>
                    
                    <motion.div
                        initial={{ translateY: '40px', opacity: 0 }}
                        animate={{ translateY:'0px', opacity: 1 }}
                        transition={{
                            duration: 2.25,
                            repeatType: 'reverse',
                            ease:'easeInOut',
                        }}
                    >
                        <Typography className={classes.getHomeTextTwoStyles}>
                            <span style={{color:"#ef5d36"}}>Food O'Clock! </span>
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ translateY: '50px', opacity: 0 }}
                        animate={{ translateY:'0px', opacity: 1 }}
                        transition={{
                            duration: 2.75,
                            repeatType: 'reverse',
                            ease:'easeInOut',
                        }}
                    >
                        <Typography className={classes.getHomeTextThreeStyles}>
                        Say goodbye to the stress of worrying about meal planning. We've got you covered!
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ translateY: '50px', opacity: 0 }}
                        animate={{ translateY:'0px', opacity: 1 }}
                        transition={{ 
                            duration: 3,
                            repeatType: 'reverse',
                            ease:'easeInOut',
                        }}
                    >
                        {
                            isAdmin
                            ?
                            <>
                                <Button 
                                    onClick={handleMealBooking}
                                    className={classes.getBookYourMealButtonStyles}
                                >
                                    Book your meal
                                </Button>
                                <Button 
                                    onClick={handleInvitation('paper')}
                                    className={classes.getInviteButtonStyles}
                                >
                                    Invite Members
                                </Button>
                                {
                                    inviteOpen
                                    ?
                                    <InvitationDialog 
                                        open={inviteOpen}
                                        scroll={inviteScroll}
                                        handleClose={handleInvitationClose}
                                    />
                                    :
                                    <></>
                                }
                            </>
                            :
                            <Button 
                                onClick={handleMealBooking}
                                className={classes.getBookYourMealButtonStyles}
                            >
                                Book your meal
                            </Button>
                        }
                    </motion.div>
                </motion.div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} className={classes.getGridItemTwoStyles}>
                <motion.div
                    className={classes.getHomeImageContStyles}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 2,
                        repeatType: 'reverse',
                        ease:'easeInOut',
                    }}
                >
                    <img src={LunchImage} alt="" className={classes.getHomeImageStyles} />
                </motion.div>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} className={classes.getGridItemThreeStyles}>
                <motion.div
                    className={classes.getSwiperContStyles}
                >
                    <MenuSwiper />
                </motion.div>
            </Grid>
        </Grid>
    );
}

export default Home;