import React from 'react';
import { Grid, Link } from '@mui/material';
import useStyles from './useStyles';

interface Props {
  current: string;
}

const SettingsSidebar = ({ current }: Props): JSX.Element => {
  const classes = useStyles();

  const links = [
    { id: 'Edit Profile', href: '/edit-profile' },
    { id: 'Profile Photo', href: '/profile-photo' },
    { id: 'Availability', href: '/availability' },
    { id: 'Payment', href: '/payment' },
    { id: 'Security', href: '/security' },
    { id: 'Settings', href: '/settings' },
  ];

  // const handleClick = e => {
  //   if(e.target.link != history[0]) {
  //     history.push(e.target.link);
  //   }
  // };

  return (
    <Grid container display="flex" flexDirection="column" className={classes.sideBar}>
      {links.map(({ id, href }) => (
        <Grid item key={id} className={id === current ? classes.boldLink : classes.sideLink}>
          <Link href={href} underline="none" color="inherit">
            {id}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default SettingsSidebar;
