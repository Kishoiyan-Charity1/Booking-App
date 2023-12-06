import express from "express";

const router = express.Router();

router.get("/", (req,res) =>{
    res.send("hello this auth endpoint")
} )
router.get("/register", (req,res)=> {
    res.send("hello, this is auth registaration endpoint")
})

export default router