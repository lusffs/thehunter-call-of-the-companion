import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';



const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: '100%',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function RecipeReviewCard({animal, onBackClick, onCloseClick}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if(!animal){
      return null
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
            <>
            <IconButton aria-label="settings" onClick={onBackClick}>
            <KeyboardReturnIcon/>
          </IconButton>
          <IconButton aria-label="settings" onClick={onCloseClick}>
            <CloseIcon/>
          </IconButton>

          </>
        }
        title={animal.name}
        subheader={`Trophy rating: ${animal.diamondRequirement.trophyRating}`}
      />
        <Grid>
            
        </Grid>

      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title=""
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            {animal.hunterTips && animal.hunterTips.map((tip, index) => {
                return (         
                <Typography paragraph key={index}>
                    {tip}
                </Typography>
                )
            })}
        </CardContent>
      </Collapse>
    </Card>
  );
}