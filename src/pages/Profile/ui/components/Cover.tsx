import React from "react";
import {
    Box,
} from "@mui/material";

const Cover = () => {

    return (
        <Box
            component="img"
            overflow="hidden"
            style={{
                height: 200,
                width: '100%',
                objectFit: 'cover',
                position: 'relative'
            }}
            alt="The house from the offer."
            src='https://th.bing.com/th/id/R.aba939e60654bdaa41213c6cb7daeb54?rik=KyqH2Y2C4O%2bE5A&riu=http%3a%2f%2fwww.evrosped.com%2fwp-content%2fuploads%2f2016%2f11%2fdemo-background-evrosped.jpg&ehk=LDjgU2wMWVPt5mi8GdA7vsGnD2FRQHILAIljWtd5iJ8%3d&risl=&pid=ImgRaw&r=0'
        />
    )

}

export default Cover