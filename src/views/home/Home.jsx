import React, { useEffect } from 'react'
import { styled } from '@mui/system'
import { AddToCartButton, SimpleCard } from 'components'
import {
    Card,
    Button,
    Divider,
    Typography,
    CardContent,
} from '@mui/material'
import { CardActionArea } from '@mui/material'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import ToppingsDialog from './ToppingsDialog'
import { fetchMenuList } from './store/home.actions'
import { Navigate, useNavigate } from 'react-router-dom'
import Item from './Item'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const Home = () => {
    const dispatch = useDispatch();
    const menu1 = useSelector((state)=>state.home.menu)
    const rest=useSelector((state)=>state.rest.restaurant)
    const [open, setOpen] = React.useState(false)
    const navigate = useNavigate();
    const [activeToppings, setActiveToppings] = useState([]);
    const totalCount = useSelector((state) => state.cart.totalCount)

    const handleClickOpen = (toppings) => {
        setOpen(true)
        setActiveToppings(toppings)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const menulist = () => {
        dispatch(fetchMenuList())
    }

    useEffect(()=>{
       menulist();}, []
    );
    const [counter, setCounter] = useState(0)
    const [cartCount, setCartCount] = useState(0);
    const incrementCounter = () => {
        setCartCount((data)  => data+1)
        setCounter(counter + 1)
    }
    const decrementCounter = () => {  
        if (counter > 0) 
        setCartCount((data)  => data-1)
        setCounter(counter - 1)
    }

    const loading = useSelector((state) => state.loading)
    return (
       
        <Container>
            <SimpleCard>
                {loading ? (
                    'Loading...'
                ) : (
                    <div >
                        <h2>WiWi Food App (Capstone)
                        <object align="right">
                        <Button color="primary"  onClick={() => navigate('/cart')}>
                            <ShoppingCartIcon /> 
                            {totalCount} {" "}
                        </Button>
                        </object>
                        </h2>
                        
                    </div>
                )}
            </SimpleCard>
            <br />

            
               <div style={{backgroundImage:`url("https://assets.cntraveller.in/photos/632dc951969e60ec08d35e9a/3:2/w_1776,h_1184,c_limit/Food%20Shots%20by%20Madam%20Chutney.jpg")`}}>
                <br />
                <br />
               <center>
                <Card sx={{ maxWidth: 545, backgroundColor:'lightblue'}}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Good food, Great time
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Our chefs at WiWi make delicious food selections every week, you pick, we cook and deliver.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </center>
                <br />
                <br />
                <br />
                    {menu1.map((menu) => {
                        return (
                            <>
                            <Item menu={menu}/>
                            </>
                        ) 
                    })}
                {/* ) 
                } */}
                </div>

         
         </Container>
    )
            };

export default Home
