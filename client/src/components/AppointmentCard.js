import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@mui/icons-material/Edit';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/Delete';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function AppointmentCard({schedule, handleDeleteAppointment}) {

  
  console.log(schedule)
  return (
    <Card sx={{ minWidth: 275 }} style={{marginTop: '5vh'}}>
      <CardContent>
        <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
          Appointment: {schedule.consultation}
        </Typography>
        <Typography variant="h5" component="div">
          Artist: {schedule.artist_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Length: {schedule.length} mins
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Client: {schedule.name} 
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Client Contact: {schedule.email} 
        </Typography>

        <Typography variant="body2">
          Shoot-Type: {schedule.shoot_description}
        
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup variant='outlined' aria-label='outlined button group' color='inherit'>
            {/* <IconButton>
                <EditIcon/>
            </IconButton> */}
            <IconButton onClick={() => handleDeleteAppointment(schedule.id)}>
                <DeleteIcon/>
            </IconButton>
        </ButtonGroup>
     </CardActions>
    </Card>
  );
}