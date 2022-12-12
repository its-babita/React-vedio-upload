const mongoose=require('mongoose');

const MediaSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    videos:[{type:String}],
},
{
    timestamps:true,
}
)
module.exports = media = mongoose.model("Media",MediaSchema )