import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import { Route, Switch } from 'react-router-dom'
import {useState, useEffect} from 'react'
import PhotoHome from './components/PhotoHome'

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
          component={() => <PhotoHome onLogout={onLogout} homephotos={homephotos} currentUser={currentUser}/>}
        />
      
      </Switch>
    </div>
  );
}

export default App;
