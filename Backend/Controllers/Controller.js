const ModelSchema= require("../Model/Model");
const data= require("../Data");
function Controller(app)
{
    app.get("/",async (req,res)=>{
          res.send("Hello world");
    });

    // Getting all document

     app.get("/get", async (req,res)=>{
         const responce= await ModelSchema.find({});
         if(!responce)
         {
            res.json({error:"No documents",sucess:false});
         }

         res.json({sucess:true,error:"Getting document",responce});
     })

    //  Getting specific document

    app.get("/get/:id",async (req,res)=>{
         const {id}= req.params;
         try
         {
            const responce= await ModelSchema.findOne({id});
         if(!responce)
         {
             res.json({error:"Document Not fetched",sucess:false});
         }
         res.json({sucess:true,responce});

         }catch(error)
         {
            console.log(error);
         }
    })

    // Adding the data into database

    app.post("/insert", async (req,res)=>{
           
          await ModelSchema.insertMany(data).then((responce)=>{
             res.json({error:"Data inserted",sucess:true});
          }).catch((err)=>{
             res.json({sucess:false,error:"Failled to input data"});
             console.log(err);
          })
    })

    //  Adding a single data
    app.post("/create", async (req,res)=>{
         const maximum_id=await ModelSchema.findOne().sort({id:-1});
         const id=maximum_id.id+1;
          console.log("id",id);
         const data_to_added= new ModelSchema({
             id,
             name:req.body.name,
             age:req.body.age,
             email:req.body.email,  
             gender:req.body.gender,
             phone:req.body.phone,
             gpa:req.body.gpa,
             address:req.body.address
         })

        const responce=  await data_to_added.save();
        if(responce)
        {
            res.json({error:"Created",sucess:true});
        }
        else
         {
            res.json({sucess:false,error:"Not created"});
         }
    })
     
    // Updating the database

    app.put("/update/:id",async (req,res)=>{
         const {id}= req.params;
              console.log(req.body);
 
         const filter={
             id
         }

       
          try{
            const responce=await ModelSchema.findOneAndUpdate( {id},{$set:req.body},{
                new:true
            });
  
            if(responce)
            {
               res.json({sucess:true,error:"Document updatted",updatted_doc:responce});
            }
            else
            {
               res.json({sucess:false,error:"Failled to update the document"});
            }

          }catch(error)
          {
             console.log(error);

          }


    })


    // Delete

    app.delete("/delete/:id",async (req,res)=>{
         const {id}= req.params;
         const responce= await ModelSchema.findOneAndDelete(id);
         if(!responce)
         {
             res.json({sucess:false,error:"Not Deleted"});
         }
         res.json({sucess:true,error:"Deleted sucessfully"});
    })



}


module.exports= Controller;