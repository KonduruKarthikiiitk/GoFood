import express from "express";
const router2 = express.Router()

router2.use(express.json())

router2.get("/foodData", async (req, res) => {
    try {
        res.send([global.food_item, global.foodCategory])
    }
    catch {
        console.error(error.message);
        res.send("Server Error")
    }
})

export default router2