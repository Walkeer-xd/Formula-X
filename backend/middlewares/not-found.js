const notFound=(req,res)=>{
    res.status(404).json({msg:"the path was not found"})
}
module.exports=notFound