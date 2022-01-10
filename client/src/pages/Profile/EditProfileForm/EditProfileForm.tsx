import { Grid, Button, TextField, Box, Typography, CircularProgress, Select, MenuItem } from '@mui/material';
import { ProfileFormData } from '../../../interface/Profile';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import useStyles from './useStyles';

interface Props {
  userEmail: string;
  handleSubmit: (data: ProfileFormData, { setStatus, setSubmitting }: FormikHelpers<ProfileFormData>) => void;
}

const EditProfileForm = ({ userEmail, handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();

  const range = (start: number, end: number): number[] => {
    const arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  };

  const initValues: ProfileFormData = {
    firstName: '',
    lastName: '',
    gender: '',
    birthMonth: 0,
    birthDay: 0,
    birthYear: 0,
    email: userEmail,
    phoneNumber: '',
    address: '',
    description: '',
  };

  return (
    <Formik
      initialValues={initValues}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        birthMonth: Yup.number().notRequired(),
        birthDay: Yup.number().notRequired(),
        birthYear: Yup.number().notRequired(),
        email: Yup.string().required('Email is required').email('Email is not valid'),
        phoneNumber: Yup.string()
          .notRequired()
          .matches(/^\d{3}-\d{3}-\d{4}$/, 'Phone number must be in the form XXX-XXX-XXXX'),
        address: Yup.string().notRequired(),
        description: Yup.string().notRequired(),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography className={classes.label}>First Name</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="firstName"
                name="firstName"
                fullWidth
                variant="outlined"
                autoFocus
                value={values.firstName}
                helperText={touched.firstName ? errors.firstName : ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.label}>Last Name</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="lastName"
                fullWidth
                name="lastName"
                variant="outlined"
                value={values.lastName}
                helperText={touched.lastName ? errors.lastName : ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.label}>Gender</Typography>
            </Grid>
            <Grid item xs={4}>
              <Select
                id="gender"
                fullWidth
                name="gender"
                variant="outlined"
                value={values.gender}
                onChange={handleChange}
              >
                <MenuItem value="Undefined">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </Grid>
            <Box width="100%" />
            <Grid item xs={4}>
              <Typography className={classes.label}>Birth Date</Typography>
            </Grid>
            <Grid item xs={2}>
              <Select
                id="birthMonth"
                fullWidth
                name="birthMonth"
                variant="outlined"
                value={values.birthMonth}
                onChange={handleChange}
              >
                <MenuItem value={0} />
                {range(1, 12).map((month) => (
                  <MenuItem key={month} value={month}>
                    {month}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={2}>
              <Select
                id="birthDay"
                fullWidth
                name="birthDay"
                variant="outlined"
                value={values.birthDay}
                onChange={handleChange}
              >
                <MenuItem value={0} />
                {range(1, 31).map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Select
                id="birthYear"
                fullWidth
                name="birthYear"
                variant="outlined"
                value={values.birthYear}
                onChange={handleChange}
              >
                <MenuItem value={0} />
                {range(1900, 2021)
                  .reverse()
                  .map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.label}>Email Address</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="email"
                fullWidth
                name="email"
                variant="outlined"
                value={values.email}
                helperText={touched.email ? errors.email : ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.label}>Phone Number</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="phoneNumber"
                fullWidth
                name="phoneNumber"
                variant="outlined"
                value={values.phoneNumber}
                helperText={touched.phoneNumber ? errors.phoneNumber : ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.label}>Where You Live</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="address"
                fullWidth
                name="address"
                variant="outlined"
                value={values.address}
                helperText={touched.address ? errors.address : ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.label}>Describe Yourself</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="description"
                fullWidth
                multiline
                minRows={4}
                name="description"
                variant="outlined"
                value={values.description}
                helperText={touched.description ? errors.description : ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} className={classes.submit}>
              <Box textAlign="center">
                <Button type="submit" color="error" size="large" variant="contained">
                  {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Save'}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default EditProfileForm;
