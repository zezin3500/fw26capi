module.exports=(app)=>{
    app.get("/noticias/tipo/:tiponoticias",async (req,res)=>{
        res.send(req.params.tiponoticias)
    })
}