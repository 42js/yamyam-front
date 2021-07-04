import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import {makeStyles} from "@material-ui/core/styles";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

export default function OrderJoinDialog({ isOpen, onDialogClose, order }) {
  const [storeId, setStoreId] = useState('');
  const [content, setContent] = useState('');

  // TODO: API 연동
  const storeData = [
    {
      storeId: 1,
      name: "우리생고기",
      menu: [
        {
          menuId: 1,
          name: "불백"
        },
        {
          menuId: 2,
          name: "콜라"
        },
        {
          menuId: 3,
          name: "사이다"
        }
      ]
    },
    {
      storeId: 2,
      name: "스파게티스토리",
      menu: [
        {
          menuId: 4,
          name: "토마토스파게티"
        },
        {
          menuId: 5,
          name: "콜라"
        }
      ]
    },
    {
      storeId: 3,
      name: "교동짬뽕",
      menu: [
        {
          menuId: 6,
          name: "짬뽕"
        },
        {
          menuId: 7,
          name: "짜장면"
        },
        {
          menuId: 8,
          name: "뽁금밥"
        }
      ]
    }
  ]

  const handleStoreSelect = (e) => setStoreId(e.target.value);
  const handleContentInput = (e) => setContent(e.target.value);

  const onConfirmClicked = () => {
    console.log(storeId);
    console.log(content);
    onDialogClose();
  };

  return (
    <Dialog open={isOpen} onClose={onDialogClose} scroll="paper" fullWidth>
      <DialogTitle id="form-dialog-title">모임 참가하기</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {formatDistanceToNow(order.deadline, {addSuffix: true, locale: ko})} 진행되는
          {' ' + order.intra_id}의 {order.restaurant_name} 모임에 참가해봐요!
        </DialogContentText>
        <FormControl fullWidth>
          <InputLabel id="menu-select-label">메뉴</InputLabel>
          <Select id="menu-select" labelId="menu-select-label" value={storeId} onChange={handleStoreSelect}>
            {storeData.map((store) => (
              <MenuItem value={store.storeId} key={store.storeId}>{store.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          margin="dense"
          label="남길 말"
          multiline
          fullWidth
          value={content}
          onChange={handleContentInput}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onDialogClose} color="primary">
          취소
        </Button>
        <Button onClick={onConfirmClicked} color="primary">
          참가
        </Button>
      </DialogActions>
    </Dialog>
  )
}