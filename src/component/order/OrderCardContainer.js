import React from 'react';
import Grid from "@material-ui/core/Grid";
import {styled} from "@material-ui/core/styles";

import OrderCard from "./OrderCard";

const OrderGrid = styled(Grid)({
  maxWidth: "400px"
});

export default function OrderCardContainer({data, onOrderCardClicked}) {
  return (
    <>
      <Grid container spacing={6} justify="center" alignItems="flex-start">
        {data.map(d => (
          <OrderGrid item key={d.order_id} xs={12} sm={6} md={4}>
            <OrderCard order={d} onOrderCardClicked={onOrderCardClicked}/>
          </OrderGrid>
        ))}
      </Grid>
    </>
  )
}