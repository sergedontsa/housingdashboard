import React from 'react';
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop:30
    }
}))

const TextInputField = ({label, type, value, disable}) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <TextField id={'standard-basic'} label={label} type={type} fullWidth={true} defaultValue={value} disabled={disable}/>
        </div>
    );

}

export default TextInputField;