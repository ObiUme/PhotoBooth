import FavPhotoCard from './FavPhotoCard';
import Grid from '@material-ui/core/Grid'

function UserFavPhotoContainer({userFavorites, setEditFavPhoto, handleUserFavDelete}){
    return (
        <div>
            <Grid container spacing={4} >
                {userFavorites.map((favphotos) => 
                <Grid item key={favphotos.id} xs={12} md={6} lg={4}>
                    <FavPhotoCard favphotos={favphotos} setEditFavPhoto={setEditFavPhoto} handleUserFavDelete={handleUserFavDelete}/>
                    </Grid>)}
            </Grid>
        </div>
    )
}

export default UserFavPhotoContainer;