import { Button, Card, Divider, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { addToCart } from "views/CartDetails/store/cartSlice";
import ToppingsDialog from "./ToppingsDialog";

export default function Item({ menu }) {
  const [count, setCount] = useState(0);
  const [activeToppings, setActiveToppings] = useState([]);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = (toppings) => {
    setOpen(true);
    setActiveToppings(toppings);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
        dispatch(addToCart({
            [menu._id]: {
                ...menu,
                quantity: count
            }
        }))
  }, [count]);

    return (
        <div>
         <center>
           <Card sx={{ maxWidth: 800, padding:2.5 }}>
                <b><p align="left">{menu.menuname}</p></b>
                     <object align="right">
                     <Button
                        variant="oulined"
                        size="small"
                        onClick={() => {
                        setCount(c => c + 1)
                        }}
                        >
                            +
                      </Button>
                      {count}
                      <Button
                        variant="oulined"
                        size="small"
                        onClick={() => {
                        setCount(c => c - 1)
                        }}
                        >
                           -
                     </Button>
                   </object>
                    <p align="left">{menu.menudesc}</p>
                    <p align="left">
                       $ {menu.price} <></>
                       <Button
                            variant="outlined"
                          onClick={()=>handleClickOpen(menu.toppings)}
                        >
                          +Toppings
                      </Button>
                   </p>
        </Card>
             <Divider variant="middle"/>
             </center>
             <ToppingsDialog open={open} handleClose={handleClose} toppings={activeToppings} />

        </div>
    )
}