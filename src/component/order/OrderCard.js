import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {formatDistance, formatRelative} from "date-fns";
import {ko} from "date-fns/locale";
import {Tooltip} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardAvatar: {
    width: theme.spacing(6),
    height: theme.spacing(6)
  },
  orderCardImg: {
    height: 0,
    paddingTop: "56.25%"
  }
}));

export default function OrderCard({order: {order_id, restaurant_name, restaurant_image, deadline, intra_id, content, join, maximum}}) {
  const nowDate = new Date();
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        avatar={
          <Tooltip title={intra_id} arrow>
            <Avatar aria-label={intra_id} className={classes.cardAvatar} src={`https://cdn.intra.42.fr/users/medium_${intra_id}.jpg`} />
          </Tooltip>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography variant="h6">{restaurant_name}</Typography>
        }
        subheader={
          <Tooltip title={formatRelative(deadline, nowDate, {locale: ko})} arrow className="subheader">
            <span>
              {`${join} / ${maximum} · 마감 ${formatDistance(deadline, nowDate, {locale: ko})} 전`}
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
        <Tooltip title="먹으러가기" arrow>
          <IconButton aria-label="같이 먹으러가기!">
            <AssignmentTurnedInIcon />
          </IconButton>
        </Tooltip>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
