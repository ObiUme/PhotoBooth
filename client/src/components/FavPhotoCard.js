import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderRounded from '@material-ui/icons/FavoriteBorderRounded';
import Share from '@material-ui/icons/Share';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import EditIcon from '@mui/icons-material/Edit';
import {NavLink} from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: 'auto',
  },
  content: {
    padding: 24,
  },
  avatar: {
    width: 50,
    height: 50,
    border: '2px solid #fff',
    margin: '-48px 32px 0 auto',
    '& > img': {
      margin: 0,
    },
  },
}));

export const FavPhotoCard = React.memo(function FavPhotoCard({favphotos, setEditFavPhoto, handleUserFavDelete, onLogout }) {
  const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();

  const { id, image, title, description, photographer_name } = favphotos
  return (
    <div style={{marginTop: '10vh'}}>
    <Card className={cx(cardStyles.root, shadowStyles.root)}>
      <CardMedia
        classes={mediaStyles}
        image={image}
      />
      <Avatar className={cardStyles.avatar} src={image} />
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          heading={title}
          body={description}
        />
        <Typography variant='overline'>{photographer_name}</Typography>
      </CardContent>
      <Box px={2} pb={2} mt={-1}>
        <IconButton onClick={()=> setEditFavPhoto(favphotos)} component={NavLink} to='/userfavphotoupdate'>
          <EditIcon/>
        </IconButton>
        <IconButton>
          <FavoriteBorderRounded />
        </IconButton>
        <IconButton onClick={()=> handleUserFavDelete(id)}>
            <DeleteIcon/>
        </IconButton>
      </Box>
    </Card>
    </div>
  );
});

export default FavPhotoCard;