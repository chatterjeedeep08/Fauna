import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

function LandingPage() {

    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={10} marginLeft={12} marginTop={10}>
                <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Paper elevation={4} >
                    <Typography variant="h4"> Hi </Typography>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper elevation={4} >
                    <Typography variant="h4"> Hi </Typography>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper elevation={4} >
                    <Typography variant="h4"> Hi </Typography>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper elevation={4} >
                    <Typography variant="h4"> Hi </Typography>
                </Paper>
            </Grid>
        </Grid>
      </Box>
      </>
    );
}

export default LandingPage;