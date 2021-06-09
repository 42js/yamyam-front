import React from 'react';
import Grid from "@material-ui/core/Grid";
import OrderCard from "./OrderCard";

export default function OrderCardContainer() {
  // TODO: API를 통해 호출해 가져와야함.
  const data = [
    {
      "order_id": 1,
      "restaurant_name": "우리생고기",
      "restaurant_image": "https://img1.kakaocdn.net/relay/local/R680x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2F362E294D6BA84672BF656B8A44DB9154",
      "created_at": Date("2021-06-11T18:00:00+09:00"),
      "intra_id": "sunpark",
      "content": "또리갓고기 먹고싶다",
      "join": 2,
      "maximum": 4,
    },
    {
      "order_id": 2,
      "restaurant_name": "우리생고기",
      "restaurant_image": "https://img1.kakaocdn.net/relay/local/R680x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2F362E294D6BA84672BF656B8A44DB9154",
      "created_at": Date("2021-06-11T18:00:00+09:00"),
      "intra_id": "sunpark",
      "content": "또리갓고기 먹고싶다",
      "join": 2,
      "maximum": 4,
    },
    {
      "order_id": 3,
      "restaurant_name": "우리생고기",
      "restaurant_image": "https://img1.kakaocdn.net/relay/local/R680x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2F362E294D6BA84672BF656B8A44DB9154",
      "created_at": Date("2021-06-11T18:00:00+09:00"),
      "intra_id": "sunpark",
      "content": "또리갓고기 먹고싶다",
      "join": 2,
      "maximum": 4,
    },
    {
      "order_id": 4,
      "restaurant_name": "우리생고기",
      "restaurant_image": "https://img1.kakaocdn.net/relay/local/R680x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2F362E294D6BA84672BF656B8A44DB9154",
      "created_at": Date("2021-06-11T18:00:00+09:00"),
      "intra_id": "sunpark",
      "content": "또리갓고기 먹고싶다",
      "join": 2,
      "maximum": 4,
    },
    {
      "order_id": 5,
      "restaurant_name": "우리생고기",
      "restaurant_image": "https://img1.kakaocdn.net/relay/local/R680x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2F362E294D6BA84672BF656B8A44DB9154",
      "created_at": Date("2021-06-11T18:00:00+09:00"),
      "intra_id": "sunpark",
      "content": "또리갓고기 먹고싶다",
      "join": 2,
      "maximum": 4,
    },
  ];

  return (
    <Grid container spacing={6}>
      {data.map(d => (
        <Grid item key={d.order_id} xs={12} sm={6} md={4}>
          <OrderCard order={d}/>
        </Grid>
      ))}
    </Grid>
  )
}