import Dialog from "@material-ui/core/Dialog";
// import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles((theme) => ({
//   detailContainer: {
//     position: "relative",
//     padding: theme.spacing(6),
//   },
//   detailAvatar: {
//     width: theme.spacing(12),
//     height: theme.spacing(12),
//   }
// }));

export default function OrderEditDialog({ isOpen, onDialogClose, order }) {
  return (
    <Dialog open={isOpen} onClose={onDialogClose} scroll="paper">
      <DialogTitle id="form-dialog-title">{ order ? "모임 수정하기" : "새 모임 만들기"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          새로운 모임을 만들어 보아요!
        </DialogContentText>
        <TextField
          margin="dense"
          id="comments"
          label="남길 말"
          multiline
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onDialogClose} color="primary">
          취소
        </Button>
        <Button onClick={onDialogClose} color="primary">
          { order ? "수정" : "등록"}
        </Button>
      </DialogActions>
    </Dialog>
  )
}