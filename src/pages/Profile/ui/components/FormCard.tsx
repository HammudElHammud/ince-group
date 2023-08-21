import React from "react";
import {Formik} from "formik";
import * as yup from "yup";
import {
    TextField,
    Grid,
    Button,
    Paper,
} from "@mui/material";
import {useDispatch, useSelector} from 'react-redux'
import {IReducer} from "@/store";
import { UserActionEnum} from "@/store/reducers/User";

const demoUser =  {
    firstName: 'Hammud',
    image: 'https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Image-Transparent-Background.png',
    lastName: 'Elhammud',
    email: 'hammudelhammud94@gmail.com',
    date:  '2023-08-25',
    id: '602fcae651b00d54ec4222bc',
}

const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string(),
    date: yup.date(),
});

const FormCard = () => {
    const user = useSelector((state: IReducer) => state.User)
    const dispatch = useDispatch()


    const handleFormSubmit = (values: any, onSubmitProps: any) => {
        console.log({value: values});
        dispatch({
            type: UserActionEnum.UPDATE_USER,
            payload: values, // here just send the data but in real will update user data in the backend the return the response after deal with date
        })
    };

    return (
        <Grid item xs={12} sm={8}>
            <Paper sx={{padding: "1rem 2rem"}}>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <Formik
                            onSubmit={handleFormSubmit}
                            initialValues={{
                                firstName: demoUser?.firstName,
                                lastName: demoUser?.lastName,
                                email: demoUser?.email,
                                date: demoUser?.date,
                            }}
                            validationSchema={userSchema}
                        >
                            {({
                                  values,
                                  errors,
                                  touched,
                                  handleBlur,
                                  handleChange,
                                  handleSubmit,
                                  resetForm
                              }) => (
                                <form
                                    onSubmit={handleSubmit}
                                    style={{maxWidth: 600, margin: "0 auto"}}
                                >
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                required
                                                label="First Name"
                                                name="firstName"
                                                value={values.firstName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={Boolean(touched.firstName && errors.firstName)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                label="Last Name"
                                                name="lastName"
                                                value={values.lastName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={Boolean(touched.lastName && errors.lastName)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                type="email"
                                                label="Email"
                                                name="email"
                                                value={values.email}
                                                InputProps={{readOnly: true}}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                type="date"
                                                label="Join Date"
                                                name="date"
                                                value={values.date}
                                                InputProps={{readOnly: true}}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button type="submit" variant="contained" color="primary">
                                                Save Changes
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            )}
                        </Formik>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )

}

export default FormCard