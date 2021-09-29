import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react'
import NewCard from '../components/NewCard'

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})

function PhotoUpload( {handleAddToPhotos, currentUser}){
    const classes = useStyles()
    // const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [url, setUrl] = useState('')

    
    

    

    // const photoType= [
    //     {
    //         value: 'professional',
    //         label: 'Professional',
    //       },
    //       {
    //         value: 'social media',
    //         label: 'Social Media',
    //       },
    //       {
    //         value: 'pet',
    //         label: 'Pet',
    //       },
    //       {
    //         value: 'fitness',
    //         label: 'Fitness',
    //       },
    // ]

    function handleUpload(){
        
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'bootypics')
        data.append('cloud_name', 'blackasspie')
        fetch('https://api.cloudinary.com/v1_1/blackasspie/image/upload',{
            method: 'Post',
            body: data
        })
        .then(resp => resp.json())
        .then(data => {
            setUrl(data.url)
        })
        .catch(err => console.log(err))

    }

    // function handleSubmit(e) {
    //     e.preventDefault()
    // }
    return (
        <>
        <Box 
            p={5} 
        >
            <Typography>
                Photo Upload
            </Typography>
            <Paper elevation={10}>
                <TextField
                    required
                    id="outlined-disabled"
                    label="Image"
                    variant='outlined'
                    fullWidth
                    type='file'
                    defaulttValue={image}
                    onChange={(e) => setImage(e.target.files[0])}

                 />
            </Paper>
            <Button 
                variant='contained'
                elevation={5}
                sx={{align: 'center'}}
                startIcon={<CloudUploadIcon />}
                onClick={handleUpload}
            >
                Upload
            </Button>
        </Box>
        <NewCard url={url} setUrl={setUrl} handleAddtoPhotos={handleAddToPhotos} currentUser={currentUser}/>
        </>
    )

}
export default PhotoUpload;