import React, {useRef, useState, useEffect} from "react";
import {
    Box,
    Grid,
    Avatar,
    Typography,
    Paper,
} from "@mui/material";
import {IReducer} from "@/store";
import {useSelector} from 'react-redux'

const ImageCard = () => {
    const User = useSelector((state: IReducer) => state.User)
    const [user, setUser] = useState<any | null>( {
        firstName: 'Hammud',
        image: 'https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Image-Transparent-Background.png',
        lastName: 'Elhammud',
        email: 'hammudelhammud94@gmail.com',
        date:  '2023-08-25',
        id: '602fcae651b00d54ec4222bc',
    })


    useEffect(()=>{
        if (Object.keys(User).length !== 0) {
            setUser(User)
        }
    }, [useSelector((state: IReducer) => state.User) , ])



    const profileImage = useRef<HTMLInputElement>(null)

    const openChooseImage = () => {
        if (profileImage !== null) {
            if (profileImage?.current) {
                profileImage?.current?.click()
            }
        }
    }

    const [userProfile, setUserProfile] = useState<any | null>(null)

    const changeProfileImage = (event: any) => {
        const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg']
        const selected = event.target.files[0]

        if (selected && ALLOWED_TYPES.includes(selected.type)) {
            let reader = new FileReader()
            // should send to update user's image but now we don't have backend
            reader.onloadend = () => setUserProfile(reader.result)
            return reader.readAsDataURL(selected)
        }
    }
    return (
        <Paper sx={{padding: "1rem 2rem"}}>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={12} md={12}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Avatar
                            sx={{
                                width: 50,
                                height: 50,
                                position: 'relative',
                                border: '1px solid  #1976d2'
                            }}
                            alt="profile image"
                            src={userProfile ? userProfile : 'https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Image-Transparent-Background.png'}
                        >
                        </Avatar>
                        <div className='upload-div'
                             style={{
                                 position: 'absolute',
                                 zIndex: '999'
                             }}
                             onClick={openChooseImage}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 20 17">
                                <path
                                    d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                            </svg>
                            <input
                                hidden
                                type="file"
                                accept="image/*"
                                ref={profileImage}
                                onChange={changeProfileImage}
                            />
                        </div>
                        <Typography variant="subtitle1" component="div">
                            First Name: {user?.firstName ?? '' }
                            <br/>
                            Last Name: {user?.lastName ?? '' }
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )

}

export default ImageCard