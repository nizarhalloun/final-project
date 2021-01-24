import './SelectButton.css';
////////////
import React from 'react';
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

export default function SelectButton(props) {
    const classes = useStyles();

    const handleChange = (event) => {
        props.setData(event.target.value);
    };

    return (
        <div>
            <FormControl row className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">{props.header}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.content[0] || "None!"}
                    onChange={handleChange}
                    className={classes.selectEmpty}
                >
                    {(() => {
                        const options = [];
                        for (let elem of props.content) {
                            options.push(<MenuItem value={elem}>{elem}</MenuItem>);
                        }
                        return options;
                    })()}
                    {/* <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
            </FormControl>
        </div>
    )
}