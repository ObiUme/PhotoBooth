import Box from '@material-ui/core/Box'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  list: {
    width: 250,
  }
})

function FavDrawer({onLogout, currentUser}){
    const history = useHistory()

  const classes = useStyles()
  const [open, setOpen] = useState(false)


  function handleLogout(){
    fetch('/logout', {
        method: 'DELETE',
    })
    .then(()=> onLogout())
    history.push('/signin')
}
  return (
    <div>
      <IconButton
      edge='start'
      color='inherit'
      aria-label='open drawer'
      onClick={() => setOpen(true)}
      style={{ top: 16, left: 16 ,  position: 'absolute'}}
     
      >
        <MenuIcon/>
      </IconButton>
      <SwipeableDrawer
        anchor='left'
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <div className={classes.list}>
          <Box textAlign='center' p={2}>
            PhotoBooth
          </Box>
          <Divider/>
          <List>
            <ListItem button onClick={() => history.push('/home')}>
              <ListItemText primary={ 'Home'}/>
            </ListItem>
            <ListItem button onClick={() => history.push('/photoupload')}>
              <ListItemText primary={ 'Upload'}/>
            </ListItem>
            <ListItem button onClick={() => history.push('/schedule')}>
              <ListItemText primary={ 'Scheduling'}/>
            </ListItem>
            <ListItem button onClick={() => history.push('/userfavoritephotos')}>
              <ListItemText primary={`${currentUser.username}'s Favorites`}/>
            </ListItem>
            <ListItem button onClick={() => history.push('/appointments')}>
              <ListItemText primary={`${currentUser.username}'s Appointments`}/>
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemText primary={ 'Logout'}/>
            </ListItem>
            
            <ListItem button onClick={() => {}}>
              <ListItemText primary={ 'PlaceHolder'}/>
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  )
}

export default FavDrawer;