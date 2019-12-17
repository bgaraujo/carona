import React from 'react';

import {CircularProgress ,makeStyles } from '@material-ui/core';

const LoadScreen = () => {
    const classes = makeStyles(theme => ({
        progress: {
          margin: theme.spacing(2),
        },
    }));

    return(
        <div show="true" className="text-center loading">
            <CircularProgress className={classes.progress} />
        </div>
    )
};

export default LoadScreen;
