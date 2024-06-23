
import mongoose from "mongoose";

const mongoURI =
  "mongodb+srv://KarthikKonduru:Karthik_k7@deliveryapp.4qxzxoz.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=deliveryApp";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected Successfully");

    // Accessing the collection using model
    const FoodItem = mongoose.model("food_item", new mongoose.Schema({}));

    // // Fetching data from the collection
    const data = await FoodItem.find({}).lean();

    global.food_item = data;

    const FoodCat = mongoose.model("food_categorys", new mongoose.Schema({}));

    // Fetching data from the collection
    const data2 = await FoodCat.find({}).lean();

    global.foodCategory= data2;

    // console.log("foodCategory data:", global.foodCategory);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } 
};

export default mongoDB;
