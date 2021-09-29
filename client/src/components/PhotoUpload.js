import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react'

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})

function PhotoUpload(){
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

    function handleSubmitImg(e){
        e.preventDefault()
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
    return (
        <Box 
            p={5} 
            component='form'
            noValidate
            autoComplete='off'
            onSubmit={handleSubmitImg}
        >
            <Typography>
                Photo Upload
            </Typography>
            <Paper elevation={3}>
                {/* <TextField
                   style={{ marginBotton: '20px'}}
                    required
                    id="outlined-required"
                    label="Title"
                    defaultValue="Title"
                    variant='outlined'
                    fullWidth
                /> */}
                <TextField
                   style={{ marginTop: '20px' }}
                    required
                    id="outlined-disabled"
                    label="Image"
                    variant='outlined'
                    fullWidth
                    defaultValue=""
                    type='file'
                    name='files[]'
                    value={image}
                    onChange={(e) => setImage(e.target.files[0])}

                 />
                 {/* <TextField
                   style={{ marginTop: '20px' }}
                    required
                    id="outlined-select-description"
                    select
                    label="Description"
                    variant='outlined'
                    fullWidth
                    helperText='Please select photo description'
                 >
                     {photoType.map((option) => <option key={option.value} value={option.value}>
                         {option.label}
                         </option>)}
                 </TextField> */}
                 {/* <TextField
                   style={{ marginTop: '20px' }}
                    required
                    id="outlined-required"
                    label="Photographer"
                    variant='outlined'
                    fullWidth
                    defaultValue="Photographer"
                 /> */}
            </Paper>
            <Button 
                variant='contained'
                elevation={5}
                sx={{align: 'center'}}
                startIcon={<CloudUploadIcon />}
            >
                Upload
            </Button>
        </Box>
    )

}
export default PhotoUpload;