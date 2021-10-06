import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
import Button from '@material-ui/core/Button';
import { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router-dom'



const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: 'auto',
    borderRadius: 0,
    position: 'relative',
  },
  content: {
    padding: 24,
  },
  cta: {
    display: 'block',
    textAlign: 'center',
    color: '#fff',
    letterSpacing: '3px',
    fontWeight: 200,
    fontSize: 12,
  },
  title: {
    color: '#fff',
    letterSpacing: '2px',
  },
}));

export const NewCard = React.memo(function NewCard({ url, setUrl, handleAddToPhotos, currentUser  }) {
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();
  const shadowStyles = useLightTopShadowStyles();
  const history = useHistory()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [photographer_name, setPhotographer_name] = useState('')

  function handleSubmit(e){
    e.preventDefault();
    
    fetch('/photos', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'user_id': currentUser.id,
        title: title,
        image: url,
        description: description,
        photographer_name: photographer_name})
    }).then(res=> res.json())
      .then(handleAddToPhotos)
      setUrl('')
      setTitle('')
      setDescription('')
      setPhotographer_name('')
      history.push('/dashboard')
  }

  return (
    
    <Box component='form' onSubmit={handleSubmit} >
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        classes={mediaStyles}
        image={url}
        value={url}
      />
      <CardActionArea>
        <CardContent className={styles.content}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            minHeight={360}
            color={'common.white'}
            textAlign={'center'}
          >
            <h1 className={styles.title}>Space</h1>
          </Box>
          <Typography className={styles.cta} variant={'overline'}>
            New Upload
          </Typography>
        </CardContent>
      </CardActionArea>
      
      </Card>

    <Grid container spacing={50}  elevation={4} className={styles.root} >
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id='title'
          name='title'
          label='Title'
          style={{width: 300, marginTop: '2vh'}}
          variant='outlined'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
          required
          id='Description'
          name='Description'
          label='Description'
          style={{width: 300}}
          variant='outlined'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
          required
          id='photographer'
          name='Photographer'
          label='Photographer'
          style={{width: 300}}
          variant='outlined'
          value={photographer_name}
          onChange={(e) => setPhotographer_name(e.target.value)}
          />
          <Button
            style={{width: 300, color: 'black'}}
            type='submit'
            color='primary'
          >
            Submit
          </Button>
        </Grid>
    </Grid>
    
    
    </Box>
    
  
  );
});

export default NewCard;