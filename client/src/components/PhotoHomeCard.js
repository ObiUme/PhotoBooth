import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import IconButton from '@material-ui/core/IconButton'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    margin: 'auto',
    borderRadius: 120,
    padding: 50,
  },
  media: {
    borderRadius: 10,
  },
}));

export const PhotoHomeCard = React.memo(function PhotoHomeCard({ photolink, handlePhotoDelete, handleUserFavoritePhotos }) {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  
  const { image, title, description, id } = photolink

  
   
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={cx(styles.media, mediaStyles.root)}
        image={image}
      />
      <CardContent>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={title}
          heading={description}
        
        />
        <ButtonGroup variant="text" aria-label="text button group" className={styles.root}>
            <Button onClick={() => handlePhotoDelete(id)}>Delete</Button>
            <Button>Edit</Button>
            <Button onClick={()=> handleUserFavoritePhotos(photolink)}>Save</Button>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
        </ButtonGroup>
    
      </CardContent>
    </Card>
  );
});
export default PhotoHomeCard;