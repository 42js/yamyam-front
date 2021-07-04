import React from 'react';
import Grid from "@material-ui/core/Grid";
import {styled} from "@material-ui/core/styles";

import OrderCard from "./OrderCard";

const OrderGrid = styled(Grid)({
  maxWidth: "400px"
});

export default function OrderCardContainer({data, onOrderCardClicked, onOrderEditClicked}) {
  // TODO: 사용자에 따라 edit 메뉴가 보이거나 안보여야함
  return (
    <>
      <Grid container spacing={6} justify="center" alignItems="flex-start">
        {data.map(d => (
          <OrderGrid item key={d.id} xs={12} sm={6} md={4}>
            <OrderCard order={d} onOrderCardClicked={onOrderCardClicked} onOrderEditClicked={onOrderEditClicked}/>
          </OrderGrid>
        ))}
      </Grid>
    </>
  )
}