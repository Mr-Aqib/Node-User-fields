const getdata = (req, res) =>
{
    res.send("i am get Api response ")
    console.log("I received request")
}
const postdata=(req,res) =>
{
    const id=req.params.id
    res.send(`I am post api response ${id}`)
}
module.exports = {
    getdata,
    postdata,
 
}