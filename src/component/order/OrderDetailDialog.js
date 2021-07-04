import React from "react";
import {formatRelative} from "date-fns";
import {ko} from "date-fns/locale";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import Dialog from "@material-ui/core/Dialog";
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  detailContainer: {
    position: "relative",
    padding: theme.spacing(6),
  },
  detailAvatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
  inline: {
    display: 'inline',
  },
}));

export default function OrderDetailDialog({
  isOpen,
  onDialogClose,
  order: {
    id,
    restaurant_name,
    restaurant_image,
    deadline,
    intra_id,
    content,
    join,
    maximum
  }
}) {
  const classes = useStyles();
  const nowDate = new Date();

  const orderData = [
    {
      intra_id: "jaeskim",
      menu: [
        "불백"
      ],
      comment: "맛있겠다!"
    },
    {
      intra_id: "honlee",
      menu: [
        "불백", "커피"
      ],
      comment: "맛있겠다! ㅎㅎ"
    },
  ];

  return (
    <Dialog open={isOpen} onClose={onDialogClose} scroll="paper">
      <Container className={classes.detailContainer}>
        <Grid container spacing={4}>
          <Grid item>
            <Avatar
              alt={intra_id}
              src={`https://cdn.intra.42.fr/users/medium_${intra_id}.jpg`}
              className={classes.detailAvatar}
            />
          </Grid>
          <Grid item>
            <Grid container alignItems="flex-end" spacing={1}>
              <Grid item><Typography variant="h5">{restaurant_name}</Typography></Grid>
              <Grid item><Typography variant="subtitle1">{`with ${intra_id}`}</Typography></Grid>
            </Grid>
            <Typography variant="subtitle1">{formatRelative(deadline, nowDate, {locale: ko})}</Typography>
            <Typography variant="subtitle1">{`참가인원: ${join}명 / 모집인원: ${maximum}명`}</Typography>
          </Grid>
        </Grid>

        <Typography variant="body1">{content}</Typography>
        <List>
          {orderData.map((data, index) => (
            <div key={data.intra_id}>
              <ListItem alignItems="flex-start" key={data.intra_id}>
                <ListItemAvatar>
                  <Avatar alt={data.intra_id} src={`https://cdn.intra.42.fr/users/medium_${data.intra_id}.jpg`} />
                </ListItemAvatar>
                <ListItemText
                  primary={data.menu.join(', ')}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {data.intra_id}
                      </Typography>
                      {` — ${data.comment}`}
                    </>
                  }
                />
              </ListItem>
              { index !== orderData.length - 1 &&
              <Divider key={`${data.intra_id}_divider`} variant="inset" component="li" />}
            </div>
          ))}
        </List>
      </Container>
      <div role="presentation" className={classes.fab}>
        <Fab color="primary" aria-label="add">
          <AssignmentTurnedInIcon />
        </Fab>
      </div>
    </Dialog>
  )
}