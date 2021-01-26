import './SelectButton.css';

import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectButton({ setData, data, header, content }) {
  const classes = useStyles();

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">{header}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={data || content[0] || 'None!'}
        onChange={handleChange}
        className={classes.selectEmpty}
      >
        {content.map((elem) => (
          <MenuItem key={elem} value={elem}>
            {elem}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
