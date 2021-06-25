import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}));

export default function LandingPage() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            얌얌
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            다양한 카뎃과 함께 식사를 해봐요!
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <a href={`${process.env.REACT_APP_API_URL}/auth`}>
                  <Button variant="contained" color="primary">
                    42 intra로 로그인하기
                  </Button>
                </a>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>\
    </>
  )
}