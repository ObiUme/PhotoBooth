import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

function Comment({currentUser, comments, photo, handleDeleteComment}) {
    console.log(comments)
    const classes = useStyles();
    const filteredComments = comments? comments.filter(comment => comment.photo.id === photo.id) : null
    console.log(filteredComments)

    

    return (
        <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={currentUser.profile_image} />
        </ListItemAvatar>
        <ListItemText
          primary={currentUser.username}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {filteredComments.map(comment => 
                 <div style={{display: 'flex', flexDirection:'row', alignItems: 'center'}}><Typography variant='caption' key={comment.content}>{comment.content}</Typography> 
                  {currentUser.id !== comment.user.id ? <IconButton disabled
                  onClick={() => handleDeleteComment(comment.id)}><DeleteIcon /></IconButton> :<IconButton
                  onClick={() => handleDeleteComment(comment.id)}><DeleteIcon /></IconButton> }
                  </div>)}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />  
    </List>
    )
}
export default Comment;
