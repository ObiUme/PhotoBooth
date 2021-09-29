import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import { Route, Switch } from 'react-router-dom'
import {useState, useEffect} from 'react'
import PhotoHome from './components/PhotoHome'
import PhotoUpload from './components/PhotoUpload'

function App() {

  const [currentUser, setCurrentUser] = useState(false)
  const [homephotos, setHomePhotos] = useState([])


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

  function handlePhotoDelete(id){
    fetch(`/photos/${id}`, {
      method: 'DELETE'
    })
    let updatedPhotos = homephotos.filter(photo => photo.id !== id)
    setHomePhotos(updatedPhotos)
  }

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
  console.log(homephotos)

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
          component={() => <PhotoHome onLogout={onLogout} homephotos={homephotos} currentUser={currentUser} handlePhotoDelete={handlePhotoDelete} />}
        />
        <Route  
          path='/photoupload'
          component={() => <PhotoUpload handleAddToPhotos={handleAddToPhotos} currentUser={currentUser}/>}
        />
      
      </Switch>
    </div>
  );
}

export default App;
