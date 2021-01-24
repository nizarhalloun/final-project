import './DateTimeButton.css';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DateAndTimePickers({ header }) {
  const classes = useStyles();
  const handleChange = (event) => {};

  return (
    <div>
      <form className={classes.container} noValidate>
        <TextField
          id="datetime-local"
          label={header}
          type="datetime-local"
          defaultValue="2021-02-24T10:30"
          className={classes.textField}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    </div>
  );
}
