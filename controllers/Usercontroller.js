const getdata = (req, res) =>
{
 
    res.send("i am get Api response ")
    console.log("I received request")
}
const postdata=(req,res) =>
{
    const {name,email}=req.body
    if (!email || !name) {
        throw new Error("Enter Fields")

    } else {
        res.send(`I am post api response  ${name} and ${email}  `)
        console.log("I am post api response")
        console.log(email)
        console.log(name)
    }
}
module.exports = {
    getdata,
    postdata,
 
}