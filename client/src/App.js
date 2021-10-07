import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import { Route, Switch } from 'react-router-dom'
import {useState, useEffect} from 'react'
import PhotoHome from './components/PhotoHome'
import PhotoUpload from './components/PhotoUpload'
import UserFavPhotoContainer from './components/UserFavPhotoContainer'
import EditUserFavPhotoForm from './components/EditUserFavPhotoForm'
import PhotoHeader from './components/PhotoHeader'
import Schedule from './components/Schedule'
import UserAppointmentContainer from './components/UserAppointmentContainer'
import Photobooth from './components/Photobooth'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Theme from './components/Theme'


function App() {

  const [currentUser, setCurrentUser] = useState(false)
  const [homephotos, setHomePhotos] = useState([])
  const [userFavorites, setUserFavorites] = useState([])
  const [errorMe, setErrorMe] = useState(false)
  const [editFavPhoto, setEditFavPhoto] = useState('')
  const [photographers, setPhotographers] = useState([])
  const [schedules, setSchedules] = useState([])
  const [comments, setComments] = useState([])
  const [darkMode, setDarkMode] = useState(false)



  //add to comments array
  function handleAddComment(obj){
    setComments([...comments, obj])
  }

  //delete a comment
  function handleDeleteComment(id){
    fetch(`/comments/${id}`, {
      method: 'DELETE'
    })
    let updatedComments = comments.filter(comment => comment.id !== id);
    setComments(updatedComments)
  }

  //logout and reset State
  function onLogout(){
    setCurrentUser(false)
  }

  // Login and set current_user state
  function onLogin(user){
    setCurrentUser(user)
  }
  // Add to Photos
  function handleAddToPhotos(obj){
    setHomePhotos([...homephotos, obj])
  }

  function handleAddtoSchedule(obj){
    setSchedules([...schedules, obj])
  }

  // handle Delete photos from index
  function handlePhotoDelete(id){
    fetch(`/photos/${id}`, {
      method: 'DELETE'
    })
    let updatedPhotos = homephotos.filter(photo => photo.id !== id)
    setHomePhotos(updatedPhotos)
  }

  // handle delete from fav photos index
  function handleUserFavDelete(id){
    fetch(`/user_favorite_photos/${id}`, {
      method: 'DELETE'
    })
    let updatedFavPhotos = userFavorites.filter(photo => photo.id !== id)
    setUserFavorites(updatedFavPhotos)
  }

  function handleDeleteAppointment(id) {
    fetch(`/users/${currentUser.id}/schedules/${id}`, {
      method: 'DELETE'
    })
    let updatedSchedules = schedules.filter(schedule => schedule.id !== id)
    setSchedules(updatedSchedules)
  }

  function handleUserFavoritePhotos(obj, currentUser){
    const newobj ={
      user_id: obj.user.id,
      photo_id: obj.id,
      image: obj.image,
      description: obj.description,
      title: obj.title,
      photographer_name: obj.photographer_name

    }
    fetch('/user_favorite_photos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newobj)
    }).then((res) => res.json())
      .then(data => {
        
         setUserFavorites([...userFavorites, data])
        // history.push('/userfavoritephotos')
        })    
  }
  
  function handleUserEditPhoto(obj) {
    setUserFavorites(userFavorites.map(favphoto => favphoto.id === obj.id ? obj : favphoto))
  }
  
  useEffect(() => {
    fetch('/user_favorite_photos')
    .then((res) => res.json())
    .then(setUserFavorites)
  }, [])


  useEffect(() => {
    fetch('/me')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => setCurrentUser(user))
      }
    })
  }, [])

  useEffect(() => {
    fetch('/photos')
    .then((res) => res.json())
    .then(setHomePhotos)
  }, [])

  useEffect(() => {
    fetch('/comments')
    .then(res => res.json())
    .then(setComments)
  }, [])

 
  // let id = currentUser.id

  useEffect(() => {
    let id = currentUser.id
    fetch(`/users/${id}`)
    .then(res => res.json())
    .then(data =>setUserFavorites(data.user_favorite_photos))
  }, [currentUser])
 
  
  //fetching active photographers

  useEffect(() => {
    fetch('/photographers')
    .then(res=> res.json())
    .then(setPhotographers)
  }, [])

  //fetch active schedules

  useEffect(()=> {
    fetch(`/users/${currentUser.id}/schedules`)
    .then(res=> res.json())
    .then(setSchedules)
  }, [currentUser])

  const paletteType = darkMode ? 'dark' : 'light'

  const darkTheme = createTheme({
    palette: {
      mode: paletteType
    },
    typography: {
      fontFamiy: 'Reenie Beanie'
    },
  })

  function handleToggleDarkMode(){
    setDarkMode(!darkMode)
  }


  return (
    
     
   
    
      <ThemeProvider theme={darkTheme}>
      <Switch>

        <Route 
          path='/signup'
          component={() => <SignUp onLogin={onLogin}/>}
        />

        <Route  
          path='/signin'
          component={() => <SignIn onLogin={onLogin}/>}
        />
        <Route
           exact path='/dashboard'
          component={() => <PhotoHome handleToggleDarkMode={handleToggleDarkMode} darkMode={darkMode} setCurrentUser={setCurrentUser} onLogout={onLogout} homephotos={homephotos} currentUser={currentUser} handlePhotoDelete={handlePhotoDelete} setUserFavorites={setUserFavorites} handleUserFavoritePhotos={handleUserFavoritePhotos} comments={comments} handleAddComment={handleAddComment} handleDeleteComment={handleDeleteComment} />}
        />
        <Route  
          path='/photoupload'
          component={() => <PhotoUpload handleAddToPhotos={handleAddToPhotos} currentUser={currentUser}/>}
        />
        <Route  
          path='/userfavoritephotos'
          component={() => <UserFavPhotoContainer onLogout={onLogout} userFavorites={userFavorites} setEditFavPhoto={setEditFavPhoto}  handleUserFavDelete={handleUserFavDelete} currentUser={currentUser}/>}
        />
        <Route  
          path='/userfavphotoupdate'
          component={() => <EditUserFavPhotoForm editFavPhoto={editFavPhoto} handleUserEditPhoto={handleUserEditPhoto} currentUser={currentUser}/>}
        />
        <Route 
          path='/schedule'
          component={()=> <Schedule photographers={photographers} currentUser={currentUser} handleAddtoSchedule={handleAddtoSchedule}/>}

        />
        <Route 
          path='/appointments'
          component={() => <UserAppointmentContainer schedules={schedules} onLogout={onLogout} currentUser={currentUser} handleDeleteAppointment={handleDeleteAppointment}/>}
        />

        <Route
          path='/header'
          component={() => <PhotoHeader currentUser={currentUser} onLogout={onLogout}/>}
       />

        <Route 
          path='/'
          component={() => <Photobooth />}
        />

      </Switch>
      
      </ThemeProvider>
    
   
    
   
  );
}

export default App;
