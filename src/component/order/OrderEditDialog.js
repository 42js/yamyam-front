import React, { useState } from "react";
import koLocale from "date-fns/locale/ko";
import addDays from "date-fns/addDays";
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
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import {DateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme) => ({
  deadlinePicker: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3)
  },
  maximumLabel: {
    marginTop: theme.spacing(4)
  }
}));

const peopleValueText = (value) => (`${value}명`);

export default function OrderEditDialog({ isOpen, onDialogClose, order }) {
  const nowDate = new Date();
  const classes = useStyles();

  const [deadline, setDeadline] = useState(order ? order.deadline : null);
  const [storeId, setStoreId] = useState(order ? order.id : '');
  const [maximum, setMaximum] = useState(order ? order.maximum : 4);
  const [content, setContent] = useState(order ? order.content : '');

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
  const handleMaximumSlider = (_, value) => setMaximum(value);
  const handleContentInput = (e) => setContent(e.target.value);

  const onConfirmClicked = () => {
    console.log(deadline);
    console.log(storeId);
    console.log(maximum);
    console.log(content);
    onDialogClose();
  };

  return (
    <Dialog open={isOpen} onClose={onDialogClose} scroll="paper" fullWidth>
      <DialogTitle id="form-dialog-title">{ order ? "모임 수정하기" : "새 모임 만들기"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          { order ?
            "기존에 만든 모임을 수정해요!" :
            "새로운 모임을 만들어 보아요!"}
        </DialogContentText>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={koLocale}>
          <DateTimePicker
            clearable
            label="만날 시간"
            value={deadline}
            onChange={setDeadline}
            minDate={nowDate}
            maxDate={addDays(nowDate, 7)}
            className={classes.deadlinePicker}
          />
        </MuiPickersUtilsProvider>
        <FormControl fullWidth>
          <InputLabel id="store-select-label">가게</InputLabel>
          <Select id="store-select" labelId="store-select-label" value={storeId} onChange={handleStoreSelect}>
            {storeData.map((store) => (
              <MenuItem value={store.storeId} key={store.storeId}>{store.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography variant="body2" id="maximum-label" className={classes.maximumLabel}>
          모집인원
        </Typography>
        <Slider
          getAriaValueText={peopleValueText}
          aria-labelledby="maximum-label"
          marks
          value={maximum}
          onChange={handleMaximumSlider}
          min={2}
          max={8}
          valueLabelDisplay="auto"
        />
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
          { order ? "수정" : "등록"}
        </Button>
      </DialogActions>
    </Dialog>
  )
}