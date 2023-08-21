import React, {useEffect} from "react";
import {
    Box,
    Grid,

} from "@mui/material";
import Cover from "@/pages/Profile/ui/components/Cover";
import ImageCard from "@/pages/Profile/ui/components/ImageCard";
import FormCard from "@/pages/Profile/ui/components/FormCard";
import {retrieveUserInfo, UserActionEnum} from "@/store/reducers/User";
import {useDispatch} from "react-redux";
const Profile = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        dispatch(
            {
                type: UserActionEnum.RETRIEVE_USER_INFO,
                payload: retrieveUserInfo(),
            })
    }, [])

    return (
        <>
         <Cover/>
            <Box
                px={10}
                width="100%"
                style={{
                    position: 'absolute',
                    transform: 'translateY(-80px)',
                }}
            >
                <Grid container spacing={1}>
                    <Grid item xs={12}  sm={4}>
                       <ImageCard/>
                    </Grid>
                   <FormCard/>
                </Grid>
            </Box>
        </>
    );
};

export default Profile;