import {Carousel} from '3d-react-carousal';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import {NavLink} from 'react-router-dom'
import Button from '@material-ui/core/Button'


function Photobooth(){

    let slides = [
        <img src="https://lh3.googleusercontent.com/8JhEP_O07UG2xbjBywNxGwIUrcoA6E3WWpZEotXtIsLgS115U3eBMRYdQwlq4B3S0rxp0XwOSCMVqXHGTJUV6QtdNKdXMO9iAYYM0WVtfAY00MP2R2nyzBJ1MZr-beQXP8kJd8cnD2M=w600-h315-p-k" /> ,
        <img src="https://lh3.googleusercontent.com/rJd6W_IrTLtCC1RyuxOw1hPXVG3m76ZWserIDLZH7xugu2Y9Y2Nwzbd7qjQo0zTRTugEpsLHA85mP3A-kxpYyEDxARJX4dMEyqZty9lmBsAECmzpb0OLa2bsFUL1GbrfA8nGypNco88=w600-h315-p-k" />,
       <img src= "https://lh3.googleusercontent.com/gtg-OiL94SCMVU5g51-WeeO-MZTOT7rAm7h9zljhWEGRsNSemOSFOuNQO_WzMlOMGL7NYjCWFqge0WT0EXV44aDes13CTAH5U9XWkDrNIeMYZ60ndsQnrEQR5Sgg9yYrvailWZQS6ao=w600-h315-p-k" />,
       <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
       <img src="https://lh3.googleusercontent.com/D_gid6dVg3JON_hP4GBJwuWsYNZYf2F2h-oRheptF3ALXR7ngIblWlKaybcSW_FxLNGNoKJSAMG7X0LyU0crU5--eX-a7EDfLXjXqX5nqwTHncRX39CcryFdpRxUN-yWldHyVSftIUw=w600-h315-p-k" /> ,
       <img src="https://lh3.googleusercontent.com/ZgmsmrE-Ef0zdGxSSffAjJGO5PnJCedJjzaOU_lBkbampqFmFVL0q0ilQRPqfBlsHucgW4cwIiBlsQJmcVOGJmwiuftpWMLE1u-mKxnisbwpDsZhuI8TYvqR-QV18nfScuIJ4p1ybxM=w600-h315-p-k" /> ,
        <img  src="https://picsum.photos/800/301/?random" alt="2" />,
    ];


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