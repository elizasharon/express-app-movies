let mongoose=require('mongoose');

const movieSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('movie',movieSchema);