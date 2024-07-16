const getdata = (req, res) =>
{
 
    res.send("i am get Api response ")
    console.log("I received request")
}
const postdata=(req,res) =>
{
       const name=req.body.username
    res.send(`I am post api response  ${name} `)
    console.log("I am post api response")
    console.log(name)
}
module.exports = {
    getdata,
    postdata,
 
}