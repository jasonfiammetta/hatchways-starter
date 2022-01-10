import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  header: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 5,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    alignItems: 'center',
    padding: '1rem',
  },
  editForm: {
    marginBottom: 20,
    color: '#000000',
  },
}));

export default useStyles;
