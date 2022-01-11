import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    display: 'flex',
    align: 'right',
    alignItems: 'center',
    padding: '1rem',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    justifyContent: 'center',
    height: 56,
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    fontWeight: 'bold',
  },
}));

export default useStyles;
