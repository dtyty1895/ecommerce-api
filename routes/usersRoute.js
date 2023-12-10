import  express  from "express";
import { loginUserCtrl, registerUserCtrl, getUserProfileCtrl, updateShippingAddresctrl } from "../controllers/usersCtrl.js";
import { isLoggedIn } from "../middlewares/isLogedIn.js";

const userRoutes = express.Router();

userRoutes.post("/register", registerUserCtrl);
userRoutes.post("/login", loginUserCtrl);
userRoutes.get("/profile", isLoggedIn, getUserProfileCtrl);
userRoutes.get("/colors", isLoggedIn, getUserProfileCtrl);
userRoutes.put("/update/shipping", isLoggedIn, updateShippingAddresctrl);

export default userRoutes;