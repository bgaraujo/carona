import React from 'react'
import useStyles from  '../../Styles/style'
import { 
    Typography,
    Grid,
    Paper
} from '@material-ui/core';

const Find = () => {
	const classes = useStyles();

	return(
		<Grid justify="center" xs={12} container className={classes.GrigPage}>
            <Paper className={classes.Page}>
				<Grid container alignItems="center">
					<Grid item alignItems="center">
						<Typography variant="h5" component="h2">
							Buscar carona
						</Typography>
					</Grid>
					<Grid item xs={12}>

					</Grid>
				</Grid>

				

			</Paper>
		</Grid>
	)
};

export default Find;
