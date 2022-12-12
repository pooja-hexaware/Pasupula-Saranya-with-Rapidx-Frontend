import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    Typography
} from '@mui/material'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { fetchRestaurantList } from './store/restaurant.actions';


const Restaurant= () => {   

    const navigate=useNavigate();
    const dispatch= useDispatch();
    const rest = useSelector((state)=> state.rest.restaurant);
    const menu = useSelector((state)=>state.home.menu);
    console.log(menu)

    useEffect( ()=>{
        dispatch(fetchRestaurantList());},[]
    )

    return (
        <center>
        <br />
        <br />
        <br />

            <object align = "left">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    {" "}
                    <img
                        style={{ width: 850, height: 150 }}
                        src= "https://asset---north-carolina.bldg15.net/img/8/b/8bedc0e9-a165-4fbe-80d3-ad5a34edab7f/Sam%20Jones%20BBQ%20Restaurant%20Barbecue%20Platters%20Drinks%20Winterville-fit(800,600).31865ef9.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component="div">
                            Foodaholic Veg Restaurant
                        </Typography>
                        <Button  onClick={() => navigate("/Home")}>Down-to-Earth Eatery With Global Dishes</Button>
                    </CardContent>
                </CardActionArea>
            </Card>
            </object>
            <object align = "left">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <img
                        style={{ width: 850, height: 150 }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFC7Xm2Z9kT9tPOuFu7vhFiKcpBZxj8-CkmA&usqp=CAU"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Nandhana Palace Restaurant
                        </Typography>
                        <Button  onClick={() => navigate("/Home")}> India's Best Restaurant with good food</Button>
                    </CardContent>
                </CardActionArea>
            </Card>
            </object>
        </center>
    )
    }

export default Restaurant