import storage from "./route.js";
import express from "express";
import mongoose from "mongoose";

const router=express.Router()

router.get("/team/name/:name",async (req,res)=>{
    let name=req.params.name;

    try{
        let team= await storage.find({"team": name });
        res.status(200).json(team);
    }
    catch(error){
        console.log(error)
    }
})

router.get("/auth/id/:authid",async (req,res)=>{
    let aid=req.params.authid;
   
    try{
        let teams= await storage.find({"google": aid})
        res.status(200).json(teams)
    }

    catch(error)
    {
        res.status(401).json(error)
    }
})

router.post("/new",async (req,res)=>{
    const newteam= new storage(req.body);
    try{
        const nteam= await newteam.save()
        res.status(200).json(nteam);
      
    }
    catch(err){
        console.log(err)
    }
})

router.put("/update/:id", async (req,res)=>{
    const  id  = req.params.id;
    const { team,google,names,moneyowed,moneygiven ,history, note} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = {team,google,names,moneyowed,moneygiven,history,note, _id: id };

    await storage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
})

router.get("/team/id/:id",async (req,res)=>{
    let id=req.params.id;

    try{
        let team= await storage.findById(id)
        res.status(200).json(team);
    }
    catch(error){
        console.log(error)
    }
})

router.delete("/id/:id",async (req,res)=>{
    let id=req.params.id;

    try{
        let f=await storage.findByIdAndDelete(id)
        res.status(200).json(f);
    }
    catch(err){
        console.log(err)
    }
})

export default router;