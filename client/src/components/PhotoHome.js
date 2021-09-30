import PhotoHomeCard from '../components/PhotoHomeCard'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import AppointmentForm from '../components/AppointmentForm'
import Container from '@material-ui/core/Container'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import ScheduleTwoToneIcon from '@mui/icons-material/ScheduleTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { useHistory, useLocation } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { format } from 'date-fns'



const drawerWidth = 240

const useStyles = makeStyles({
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth
    },
    root: {
        display: 'flex'
    },
    active: {
        backgroud: '#f4f4f4'
    },
    appbar: {
        width: `calc(100% - ${drawerWidth}px)`,
        backgroundColor: 'inherit',
        fontColor: 'black',
    },
    toolbar: {
        date: {
            flexGrow: 1
        }
    }
})

function PhotoHome( {homephotos, onLogout, currentUser, handlePhotoDelete, setUserFavorites, handleUserFavoritePhotos }){
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: 'Home',
            icon: <HomeTwoToneIcon/>,
            path: '/home'
        },
        {
            text: 'Scheduling',
            icon: <ScheduleTwoToneIcon/>,
            path: '/schedule'
        },
        // {
        //     text: 'Logout',
        //     icon: <LogoutTwoToneIcon />,
        //     path: '/logout'
        // }
    ]

    function handleLogout(){
        fetch('/logout', {
            method: 'DELETE',
        })
        .then(()=> onLogout())
        history.push('/signin')
    }
    return (
        <div className={classes.root}>
            {/* app bar */}
            <AppBar
                className={classes.appbar}
            >
               <Toolbar>
                   <Typography 
                        className={classes.date}
                        variant = 'h5' 
                        style={{color: 'black', flexGrow: 1}}
                    >
                     Today is the {format(new Date(), 'do MMMM Y')}
                   </Typography>
                   <Typography variant = 'h5' style={{color: 'black'}}>
                       {`Welcome ${currentUser.username}`}
                   </Typography>
                </Toolbar> 
            </AppBar>
            <Drawer
             className={classes.drawer}
             variant= 'permanent'
             anchor= 'left'
             classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant="h5">
                        PhotoBooth
                    </Typography>
                </div>

                {/* list/ links */}
                <List>
                  {menuItems.map(item =>
                    <ListItem
                        button
                        key={item.text}
                        onClick={() => history.push(item.path)}
                        className={location.pathname === item.path ? classes.active : null}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                    )}
                    <ListItem
                        button
                        onClick={handleLogout}
                    >
                        <ListItemIcon>
                            <LogoutTwoToneIcon />
                                <ListItemText primary= 'Logout' />
                        </ListItemIcon>

                    </ListItem>  
                </List>
            </Drawer>
            <Container>
                <Typography>
                   
                </Typography> 
                <Grid container spacing={4} style={{marginTop: '10vh'}}>
                    {homephotos.map((photolink) => 
                        <Grid item key={photolink.id} xs={12} md={6} lg={4}>
                            <PhotoHomeCard photolink={photolink} handlePhotoDelete={handlePhotoDelete} setUserFavorites={setUserFavorites} handleUserFavoritePhotos={handleUserFavoritePhotos}/>
                        </Grid>)}
                </Grid>
            
           
            </Container>
        </div>
    )
}

export default PhotoHome;