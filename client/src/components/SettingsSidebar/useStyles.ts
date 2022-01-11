import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  sideBar: {
    height: '100vh',
    padding: '1rem 1rem',
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      padding: '2rem 2rem',
      width: '300px',
    },
  },
  userPanel: {
    paddingBottom: '2rem',
  },
  sideLink: {
    // fontWeight: 700,
    fontSize: 20,
    padding: '1rem 0',
    color: 'rgb(0,0,0)',
  },
  boldLink: {
    fontWeight: 700,
    fontSize: 20,
    padding: '1rem 0',
    color: 'rgb(0,0,0)',
  },
}));

export default useStyles;
