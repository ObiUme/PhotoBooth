import {Carousel} from '3d-react-carousal';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import {NavLink} from 'react-router-dom'
import Button from '@material-ui/core/Button'


function Photobooth(){

    let slides = [
        <img  src="https://picsum.photos/800/300/?random" alt="1" />,
        <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
        <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
        <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
        <img src="https://picsum.photos/800/304/?random" alt="5" />   ];
    return (
        <div>
            <Box style={{marginBottom: '10vh'}}>
                <Typography variant='h2' style={{marginBottom: '10vh'}}>Photobooth</Typography>
            </Box>
                <Carousel slides={slides} autoplay={true} interval={1000} style={{marginTop: '5100px'}}/>
                <div style={{display: 'flex', flexDirection: 'row', float: 'left', position: 'absolute', right: 10, marginTop: '10vh'}}>
                    <Button component={NavLink} to='/signup'>Join the Experience</Button> 
                    <p>||</p>
                    <Button component={NavLink} to='/signin'>Login</Button>
                    
                  

                </div>
                <div style={{position: 'absolute', bottom: 0, height: '250px', width: '100vw', backgroundColor: 'black'}}></div>
        </div>
    )


}
export default Photobooth;