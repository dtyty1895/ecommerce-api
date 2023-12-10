import exppress from "express";
// import catetgoryFileUpload from "../config/categoryUpload.js";
import {
  createCategoryCtrl,
  getAllCategoriesCtrl,
  getSingleCategoryCtrl,
  updateCategoryCtrl,
  deleteCategoryCtrl,
} from "../controllers/categoriesCtrl.js";
import { isLoggedIn } from "../middlewares/isLogedIn.js";
import categoryFileUpload from "../config/categoryUpload.js";

const categoriesRouter = exppress.Router();

categoriesRouter.post(
    "/",
    isLoggedIn,
    categoryFileUpload.single("file"),
    createCategoryCtrl
  );
categoriesRouter.get("/", getAllCategoriesCtrl);
categoriesRouter.get("/:id", getSingleCategoryCtrl);
categoriesRouter.delete("/:id", deleteCategoryCtrl);
categoriesRouter.put("/:id", updateCategoryCtrl);

export default categoriesRouter