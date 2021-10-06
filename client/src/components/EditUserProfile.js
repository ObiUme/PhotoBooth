import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { useState } from 'react'
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import { useHistory } from 'react-router-dom'


function EditUserProfile({setOpen, open, currentUser, setCurrentUser}){

    function handleClose(){
        setOpen(false)
    }
    const [username, setUsername] = useState(currentUser.username)
    const [avatar, setAvatar] = useState(currentUser.avatar)
    const [is_photographer, setIs_photographer] = useState(false)

    console.log(currentUser)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        const newUserObj = {
            username: username,
            avatar: avatar,
            is_photographer: is_photographer
        }
        fetch(`/users/${currentUser.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUserObj)
            
        }).then(res => res.json())
          .then(setCurrentUser)

          history.push('/home')
          
    }

    return (
        <Dialog open={open} onClose={handleClose} component='form' onSubmit={handleSubmit}>
            <Paper e={10} />
            <DialogTitle>Update</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Welcome to PhotoBooth, please fill out the following
                to update your user profile. 
                
          </DialogContentText>
          
          <br/>
          <Divider />
          <Divider />
          <Divider />
          <br/>
          <Typography>Username</Typography>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="UserName"
            type="text"
            fullWidth
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Typography>Avatar</Typography>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Avatar"
            type="text"
            fullWidth
            variant="outlined"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
          <Typography>Photographer?</Typography>
          <Grid style={{marginLeft: '1vh'}}>
            <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value={is_photographer} color="primary" />}
                  label='Are you a Photographer? Join the Expereince!'
                  onChange={(e) => setIs_photographer(e.target.checked)}
                />
              </Grid>
            </Grid>
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
        </DialogContent>
        <DialogActions>
          <Button type='submit' color='inherit'>Submit Update</Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>)
}
export default EditUserProfile