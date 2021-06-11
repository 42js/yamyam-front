import React from 'react';
import Grid from "@material-ui/core/Grid";
import {styled} from "@material-ui/core/styles";

import OrderCard from "./OrderCard";

const OrderGrid = styled(Grid)({
  maxWidth: "400px"
});

export default function OrderCardContainer() {
  // TODO: API를 통해 호출해 가져와야함.
  const data = [
    {
      "order_id": 1,
      "restaurant_name": "우리생고기",
      "restaurant_image": "https://postfiles.pstatic.net/MjAyMDA3MTJfMTY3/MDAxNTk0NTAzNjA0MjQ4._v7cqowx3WntgZqhlceqE1NbeZveVf0w-zvXNYlAaycg.Bf2rgxUZGmoPGYhpKxk-pJ09IKkNONgApMGP7BWiGC4g.JPEG.lookshu/20200709_161255.jpg?type=w2",
      "deadline": new Date("2021-06-11T18:00:00+09:00"),
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

  return (
    <Grid container spacing={6} justify="center" alignItems="flex-start">
      {data.map(d => (
        <OrderGrid item key={d.order_id} xs={12} sm={6} md={4}>
          <OrderCard order={d}/>
        </OrderGrid>
      ))}
    </Grid>
  )
}