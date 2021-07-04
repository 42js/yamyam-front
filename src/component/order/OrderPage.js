import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

import OrderCardContainer from "./OrderCardContainer";
import OrderDetailDialog from "./OrderDetailDialog";
import OrderEditDialog from "./OrderEditDialog";
import { getOrders } from "../../api/orderApi";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  }
}));

export default function OrderPage() {
  const [isDetailDialogOpen, setDetailDialogOpen] = useState(false);
  const [focusOrder, setFocusOrder] = useState(undefined);
  const [isOrderEditOpen, setIsOrderEditOpen] = useState(false);

  useEffect(() => {
    getOrders();
  }, []);

  // TODO: API를 통해 호출해 가져와야함.
  const data = [
    {
      "order_id": 1,
      "restaurant_name": "우리생고기",
      "restaurant_image": "https://postfiles.pstatic.net/MjAyMDA3MTJfMTY3/MDAxNTk0NTAzNjA0MjQ4._v7cqowx3WntgZqhlceqE1NbeZveVf0w-zvXNYlAaycg.Bf2rgxUZGmoPGYhpKxk-pJ09IKkNONgApMGP7BWiGC4g.JPEG.lookshu/20200709_161255.jpg?type=w2",
      "deadline": new Date("2021-06-24T18:00:00+09:00"),
      "intra_id": "sunpark",
      "content": "또리갓고기 먹고싶다",
      "join": 2,
      "maximum": 4,
    },
    {
      "order_id": 2,
      "restaurant_name": "우리생고기",
      "restaurant_image": "https://postfiles.pstatic.net/MjAyMDA3MTJfMTY3/MDAxNTk0NTAzNjA0MjQ4._v7cqowx3WntgZqhlceqE1NbeZveVf0w-zvXNYlAaycg.Bf2rgxUZGmoPGYhpKxk-pJ09IKkNONgApMGP7BWiGC4g.JPEG.lookshu/20200709_161255.jpg?type=w2",
      "deadline": new Date("2021-06-11T18:00:00+09:00"),
      "intra_id": "sunpark",
      "content": "또리갓고기 먹고싶다",
      "join": 2,
      "maximum": 4,
    },
    {
      "order_id": 3,
      "restaurant_name": "우리생고기",
      "restaurant_image": "https://postfiles.pstatic.net/MjAyMDA3MTJfMTY3/MDAxNTk0NTAzNjA0MjQ4._v7cqowx3WntgZqhlceqE1NbeZveVf0w-zvXNYlAaycg.Bf2rgxUZGmoPGYhpKxk-pJ09IKkNONgApMGP7BWiGC4g.JPEG.lookshu/20200709_161255.jpg?type=w2",
      "deadline": new Date("2021-06-11T18:00:00+09:00"),
      "intra_id": "sunpark",
      "content": "또리갓고기 먹고싶다",
      "join": 2,
      "maximum": 4,
    },
    {
      "order_id": 4,
      "restaurant_name": "우리생고기",
      "restaurant_image": "https://postfiles.pstatic.net/MjAyMDA3MTJfMTY3/MDAxNTk0NTAzNjA0MjQ4._v7cqowx3WntgZqhlceqE1NbeZveVf0w-zvXNYlAaycg.Bf2rgxUZGmoPGYhpKxk-pJ09IKkNONgApMGP7BWiGC4g.JPEG.lookshu/20200709_161255.jpg?type=w2",
      "deadline": new Date("2021-06-11T18:00:00+09:00"),
      "intra_id": "sunpark",
      "content": "또리갓고기 먹고싶다",
      "join": 2,
      "maximum": 4,
    },
    {
      "order_id": 5,
      "restaurant_name": "우리생고기",
      "restaurant_image": "https://postfiles.pstatic.net/MjAyMDA3MTJfMTY3/MDAxNTk0NTAzNjA0MjQ4._v7cqowx3WntgZqhlceqE1NbeZveVf0w-zvXNYlAaycg.Bf2rgxUZGmoPGYhpKxk-pJ09IKkNONgApMGP7BWiGC4g.JPEG.lookshu/20200709_161255.jpg?type=w2",
      "deadline": new Date("2021-06-09T22:00:00+09:00"),
      "intra_id": "sunpark",
      "content": "또리갓고기 먹고싶다",
      "join": 2,
      "maximum": 4,
    },
  ];
  const classes = useStyles();

  const onOrderCardClicked = (e, order) => {
    if (e.target.nodeName === 'BUTTON' || e.target.nodeName === 'svg' || e.target.nodeName === 'path' ||
      e.target.nodeName === 'LI' || (e.target.nodeName === 'DIV' && e.target.className === ''))
      return;
    setFocusOrder(order);
    setDetailDialogOpen(true);
  }
  const onDetailDialogClosed = () => {
    setFocusOrder(undefined);
    setDetailDialogOpen(false);
  };

  const onOrderEditClicked = (order) => {
    setFocusOrder(order);
    setIsOrderEditOpen(true);
  };
  const onOrderCreateClicked = () => (setIsOrderEditOpen(true));

  const onOrderEditClosed = () => {
    setFocusOrder(undefined);
    setIsOrderEditOpen(false)
  };

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
                <Button variant="contained" color="primary" onClick={onOrderCreateClicked}>
                  새로운 밥팟 만들기
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  내가 들어간 밥팟 보기
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <OrderCardContainer data={data} onOrderCardClicked={onOrderCardClicked} onOrderEditClicked={onOrderEditClicked}/>
      <div role="presentation" className={classes.fab}>
        <Fab color="primary" aria-label="add" onClick={onOrderCreateClicked}>
          <AddIcon />
        </Fab>
      </div>
      { focusOrder && (
        <OrderDetailDialog order={focusOrder} isOpen={isDetailDialogOpen} onDialogClose={onDetailDialogClosed} />
      )}
      { isOrderEditOpen && (
        <OrderEditDialog isOpen={isOrderEditOpen} onDialogClose={onOrderEditClosed} order={focusOrder}/>
      )}
    </>
  )
}