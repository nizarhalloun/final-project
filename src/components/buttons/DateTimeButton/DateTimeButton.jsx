import './DateTimeButton.css';

import React from 'react';
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

export default function DateAndTimePickers(props) {
    const classes = useStyles();
    const handleChange = (event) => {
        props.setData(event.target.value);
    };
    return (
        <div>
            <form className={classes.container} noValidate>
                <TextField
                    id="datetime-local"
                    label={props.header}
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
