

const express = require("express");
const router = express();
const control = require("../Controler/control")



// post form data



router.post("/formsubmit", (req, res) => {

    control.add_data(req.body).then((respo) => {

        if (respo.flag) {

            res.json({ flag: true });

               console.log("ok")
               return
        } else {

            res.json({ flag: false });
            console.log("errrr")
            return
        }


    }).catch(err => {

         res.json({err:true});

         console.log("er")
         return


    });

});



  router.get("/getdata",(req,res)=>{

    control.getData().then((respo)=>{

          res.json({flag:true,data:respo});
          return

    }).catch(err=>{

        res.json({flag:false});
        return


    });

       

  });


  

   router.delete("/datadelete",(req,res)=>{

            let id= req.body.id

            control.delete_Data(id).then(()=>{

                  res.json({flag:true});
                  return

            }).catch(err=>{

                 res.json({flag:false});
                 return

            });

              

   })


    router.get("/checkconnect",(req,res)=>{

        control.check_connect().then(()=>{

             
            res.json({flag:true})
            return

        }).catch(err=>{

            res.json({flag:false})
            return
        })

           

    })














module.exports = router;