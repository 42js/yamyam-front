import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

import {formatDistanceToNow, formatRelative} from "date-fns";
import {ko} from "date-fns/locale";
import {Tooltip} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    "&:hover": {
      cursor: "pointer"
    }
  },
  cardAvatar: {
    width: theme.spacing(6),
    height: theme.spacing(6)
  },
  orderCardImg: {
    height: 0,
    paddingTop: "56.25%"
  },
  assignButton: {
    marginLeft: "auto"
  }
}));

export default function OrderCard({
  order,
  onOrderCardClicked,
  onOrderEditClicked,
  onOrderJoinClicked
}) {
  const {restaurant_name, restaurant_image, deadline, intra_id, content, join, maximum} = order;

  const [cardElevation, setCardElevation] = useState(1);
  const [detailAnchorEl, setDetailAnchorEl] = useState(null);
  const isMenuOpened = Boolean(detailAnchorEl);

  const nowDate = new Date();
  const classes = useStyles();

  const onCardMouseOver = () => setCardElevation(4);
  const onCardMouseOut = () => setCardElevation(1);

  const onOptionClicked = (e) => setDetailAnchorEl(e.target);
  const onOptionMenuClosed = () => {
    setDetailAnchorEl(null);
  };
  const onEditMenuClicked = () => {
    onOrderEditClicked(order);
  }
  const onOrderJoinButtonClicked = () => {
    onOrderCardClicked(undefined, order);
    onOrderJoinClicked();
  }


  return (
    <Card
      elevation={cardElevation}
      onMouseOver={onCardMouseOver}
      onMouseOut={onCardMouseOut}
      onClick={(e) => onOrderCardClicked(e, order)}
      className={classes.cardContainer}
    >
      <CardHeader
        avatar={
          <Tooltip title={intra_id} arrow>
            <Avatar
              aria-label={intra_id}
              className={classes.cardAvatar}
              src={`https://cdn.intra.42.fr/users/medium_${intra_id}.jpg`}
            />
          </Tooltip>
        }
        action={
          <>
            <IconButton aria-label="settings" onClick={onOptionClicked}>
              <MoreVertIcon/>
            </IconButton>
            <Menu
              anchorEl={detailAnchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={isMenuOpened}
              onClose={onOptionMenuClosed}
            >
              <MenuItem onClick={onEditMenuClicked}>????????????</MenuItem>
            </Menu>
          </>
        }
        title={
          <Typography variant="h6">{restaurant_name}</Typography>
        }
        subheader={
          <Tooltip title={formatRelative(deadline, nowDate, {locale: ko})} arrow className="subheader">
            <span>
              {`${join} / ${maximum} ?? ?????? ${formatDistanceToNow(order.deadline, {addSuffix: true, locale: ko})}`}
            </span>
          </Tooltip>
        }
      />
      <CardMedia
        className={classes.orderCardImg}
        image={restaurant_image}
        title={restaurant_name}
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://cdn.intra.42.fr/users/medium_sunpark.jpg"/>
          <Avatar alt="Travis Howard" src="https://cdn.intra.42.fr/users/medium_sunpark.jpg"/>
          <Avatar alt="Cindy Baker" src="https://cdn.intra.42.fr/users/medium_sunpark.jpg"/>
          <Avatar alt="Agnes Walker" src="https://cdn.intra.42.fr/users/medium_sunpark.jpg"/>
        </AvatarGroup>
        <Tooltip title="?????? ??????!" arrow>
          <IconButton
            aria-label="?????? ??????"
            className={classes.assignButton}
            onClick={onOrderJoinButtonClicked}
          >
            <AssignmentTurnedInIcon/>
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
