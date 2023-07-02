import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    
    "team": String,
    "google" : [String],
    "names": Array,
    "moneyowed": Array,
    "moneygiven":Array,
    "history": Array,
    "note": Array
},
{timestamps:true}
);

const storage=mongoose.model("savedata", transactionSchema);

export default storage;