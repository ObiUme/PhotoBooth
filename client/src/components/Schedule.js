import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import PhotoHeader from './PhotoHeader'
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles(() =>({

    root: {
        margin: 'auto',
        position: 'relative',
    }
}))

function Schedule({currentUser, photographers, handleAddtoSchedule}){
    const [name, setName] = useState('')
    const [length, setLength] = useState(0)
    const [shoot_description, setShoot_description] = useState('')
    const [email, setEmail] = useState('')
    const [consultation, setConsultation] = useState('')
    const [shooter, setShooter] = useState('')
    const [artist_name, setArtist_name] = useState('')

    const classes = useStyles()
    
    const history = useHistory()

    function handleSubmit(e) {
        // let id = currentUser.id
        e.preventDefault()
        const newObj ={
            name: name,
            length: length,
            shoot_description: shoot_description,
            email: email,
            consultation: consultation,
            'photographer_id': shooter,
            artist_name: artist_name
        }

        fetch(`/users/${currentUser.id}/schedules`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newObj)
        }).then(res => res.json()).then(handleAddtoSchedule)

       history.push('/appointments')
    }
   

    return(
        // const classes = useStyles()
        <div>
            <PhotoHeader currentUser={currentUser}/>
            <Grid container  justifyContent='center'
                alignItems='center'>
                <Grid item xs={12} lg={12} >
                    <Typography style={{ marginTop: '10vh', textAlign: 'center'}}>
                         Consultation Scheduling 
                    </Typography>
                 </Grid>
            </Grid>
            <Box component= 'form' 
                noValidate 
                autoComplete='off' 
                onSubmit={handleSubmit}
                className={classes.root}
                
                >
                <Grid container elevation={4}>
                    <Grid item xs={12} sm={6} style={{margin: 'auto'}}>
                <TextField
                    // className={classes.field}
                    label='Name'
                    variant='outlined'
                    color='primary'
                    style={{marginTop: '5vh'}}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    // className={classes.field}
                    label='Length'
                    variant='outlined'
                    color='primary'
                    style={{marginTop: '2vh',}}
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    // className={classes.field}
                    label='Shoot Description'
                    variant='outlined'
                    color='primary'
                    style={{marginTop: '2vh'}}
                    value={shoot_description}
                    onChange={(e) => setShoot_description(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    // className={classes.field}
                    label='Email'
                    variant='outlined'
                    color='primary'
                    style={{marginTop: '2vh'}}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    // className={classes.field}
                    // label='Consultation'
                    variant='outlined'
                    color='primary'
                    type='datetime-local'
                    style={{marginTop: '2vh'}}
                    value={consultation}
                    onChange={(e) => setConsultation(e.target.value)}
                    fullWidth
                    required
                />
                <br/>
                <br/>
                <FormControl>
                    
                    <Typography>
                        Photographer ID
                    </Typography>
                    
                    <Select
                        
                       
                        width="100%"
                        value={shooter}
                        
                        onChange={(e) => setShooter(e.target.value)}>
                        {photographers.map(photographer =>
                            <MenuItem value={photographer.id}>{photographer.username}</MenuItem>)
                        }
                        </Select>
                        <br/>
                        <br/>

                    <Typography>
                        Artist
                    </Typography>
                   
                    <Select
                        // labelId='select-artist'
                        id='Artist'
                        width='100%'
                        value={artist_name}
                        onChange={(e) => setArtist_name(e.target.value)}>
                            {photographers.map(photographer =>
                                <MenuItem value={photographer.username}>{photographer.username}</MenuItem>)
                            }
                        </Select>
                        
                </FormControl>
                </Grid>
                </Grid>
                <br/>
                        <br/>
                <Grid container>
                    <Grid item xs={12} sm={6} style={{margin: 'auto'}}>
                        <Button type='submit'
                            display= 'block'
                            style={{margin: 'auto'}}
                        >
                           
                    Submit
                </Button>
                </Grid> 
                </Grid>
                
            </Box>
        </div>
    )
}
export default Schedule;