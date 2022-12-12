import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel } from "@mui/material";
import { Box } from "@mui/system";

function ToppingsDialog({ open, handleClose, toppings }) {
    return (
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Toppings</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              ml: 3,
            }}
          >
            {toppings.map((Toppings) => {
                                                return (
                                                    <FormControlLabel
                                                        label={Toppings}
                                                        control={<Checkbox />}
                                                    />
                                                )
                                            })}
            
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    )
}

export default ToppingsDialog;