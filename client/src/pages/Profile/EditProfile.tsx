import React from 'react';
import { useAuth } from '../../context/useAuthContext';
import { useHistory } from 'react-router-dom';
import { CircularProgress, Grid, Box, Paper, Typography } from '@mui/material';
import { Navbar } from '../../components/Navbar/Navbar';
import SettingsSidebar from '../../components/SettingsSidebar/SettingsSidebar';
import EditProfileForm from './EditProfileForm/EditProfileForm';
import editProfile from '../../helpers/APICalls/editProfile';
import { ProfileFormData } from '../../interface/Profile';
import { FormikHelpers } from 'formik';
import useStyles from './useStyles';
import { useSnackBar } from '../../context/useSnackbarContext';

export default function EditProfile(): JSX.Element {
  const { loggedInUser } = useAuth();
  const classes = useStyles();
  const { updateSnackBarMessage } = useSnackBar();
  const history = useHistory();

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  const handleSubmit = (profileData: ProfileFormData, { setSubmitting }: FormikHelpers<ProfileFormData>): void => {
    editProfile(profileData).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        // updateProfileContext ? redirect too ?
        console.log('data success! redirect!');
      } else {
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Grid container component="main">
      <Navbar />
      <Grid container marginTop={5} justifyContent="center">
        <Grid item>
          <SettingsSidebar current="Edit Profile" />
        </Grid>
        <Grid item xs={12} sm={8} md={7} elevation={6} component={Paper} className={classes.editForm} square>
          <Box width="100%" p={3} justifyContent="center" alignSelf="center">
            <Grid container>
              <Grid item xs={12}>
                <Typography className={classes.header} variant="h4">
                  Edit Profile
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <EditProfileForm userEmail={loggedInUser.email} handleSubmit={handleSubmit} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
