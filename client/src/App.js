import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import { Route, Switch } from 'react-router-dom'
import {useState, useEffect} from 'react'
import PhotoHome from './components/PhotoHome'
import PhotoUpload from './components/PhotoUpload'
import UserFavPhotoContainer from './components/UserFavPhotoContainer'
import EditUserFavPhotoForm from './components/EditUserFavPhotoForm'

function App() {

  const [currentUser, setCurrentUser] = useState(false)
  const [homephotos, setHomePhotos] = useState([])
  const [userFavorites, setUserFavorites] = useState([])
  const [errorMe, setErrorMe] = useState(false)
  const [editFavPhoto, setEditFavPhoto] = useState('')


  // const history = useHistory()


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
 
 console.log(userFavorites)
  return (
    <div>
      {/* <SignUp/>
      <SignIn/> */}
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
          path='/home'
          component={() => <PhotoHome onLogout={onLogout} homephotos={homephotos} currentUser={currentUser} handlePhotoDelete={handlePhotoDelete} setUserFavorites={setUserFavorites} handleUserFavoritePhotos={handleUserFavoritePhotos} />}
        />
        <Route  
          path='/photoupload'
          component={() => <PhotoUpload handleAddToPhotos={handleAddToPhotos} currentUser={currentUser}/>}
        />
        <Route  
          path='/userfavoritephotos'
          component={() => <UserFavPhotoContainer userFavorites={userFavorites} setEditFavPhoto={setEditFavPhoto}  handleUserFavDelete={handleUserFavDelete}/>}
        />
        <Route  
          path='/userfavphotoupdate'
          component={() => <EditUserFavPhotoForm editFavPhoto={editFavPhoto} handleUserEditPhoto={handleUserEditPhoto} />}
        />
      
      </Switch>
    </div>
  );
}

export default App;
