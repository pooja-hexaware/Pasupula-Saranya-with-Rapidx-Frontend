import { Card, Divider } from "@mui/material";
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart)
  return (
    <>
    {/* {console.log("test111",cartItems["6386fc834adc419a5d147d31"].itemName)}  */}
      <div>
        <center>
          <div>
                {/* <p>{cartItems["6386fc834adc419a5d147d31"].itemName}</p>
                <p>{cartItems["6386fc834adc419a5d147d31"].quantity}</p>
                <p>{cartItems["6386fc834adc419a5d147d31"].amount}</p> */}
              </div>
            <Divider />
            <h4>Total Amount</h4>
            <form className="form" name="form" id="form">
              <div className="form-content">
                <div className="form-group mt-3">
                  <label>Your Name</label>
                  <br />
                  <input
                    type="text"
                    className="form-control mt-1"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Street</label>
                  <br />
                  <input
                    type="text"
                    id="desc"
                    name="desc"
                    className="form-control mt-1"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Postal Code</label>
                  <br />
                  <input
                    type="text"
                    id="desc"
                    name="desc"
                    className="form-control mt-1"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>City</label>
                  <br />
                  <input
                    type="text"
                    id="desc"
                    name="desc"
                    className="form-control mt-1"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Phone Number</label>
                  <br />
                  <input
                    type="number"
                    id="desc"
                    name="desc"
                    className="form-control mt-1"
                  />
                </div>
              </div>
            </form>
        </center>
      </div>
    </>
  );
};

export default Cart;
