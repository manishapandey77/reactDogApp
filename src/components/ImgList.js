import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Grid } from '@mui/material';
import Box from '@mui/material/Box';

const ImgList = (props) => {
  return (
    <Box sx={{flexGrow: 1}}>
    <Grid container mt={10} justifyContent="center" alignItems="center">

<Grid item xs={12} md={6}justifyContent="center" alignItems="center">
    <Card sx={{ maxWidth: 600 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={props.photo}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Dog
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    
  </Card>
</Grid>
</Grid>
</Box>
  
  )
}

export default ImgList

