import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";


export default function OrderDetailDialog({isOpen, onDialogClose, order: {order_id, restaurant_name, restaurant_image, deadline, intra_id, content, join, maximum}}) {
  return (
    <Dialog open={isOpen} onClose={onDialogClose} scroll="paper">
      <DialogTitle>{restaurant_name}</DialogTitle>
    </Dialog>
  )
}