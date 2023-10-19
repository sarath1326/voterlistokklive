

const model = require("../Model/Schema")






module.exports = {



    // add data

    add_data: (data) => {

        return new Promise((resolve, reject) => {

            try {

                const final = new model.userModel(data)

                final.save().then(() => {

                    resolve({ flag: true });

                }).catch(err => {

                    resolve({ flag: fales });
                    console.log("err")

                })

            } catch (error) {

                reject();
                console.log("err")

            }

        });



    },

    // get data 

    getData: () => {

        return new Promise(async (resolve, reject) => {

            try {

                const result = model.userModel.find();

                if (result) {

                    resolve(result)

                } else {

                    reject()
                    console.log("err")
                }

            } catch (error) {

                reject()
                console.log("err")

            }

        })

    },



    // delete data 


    delete_Data: (id) => {


        return new Promise((resolve, reject) => {

            try {

                model.userModel.deleteOne({ _id: id }).then(() => {

                     resolve()


                }).catch(err=>{

                     reject()
                     console.log("err")


                })

            } catch (error) {

                reject()
                console.log("err")

            }



        })

    },

    
    // check connect


    check_connect:()=>{

        return new Promise((resolve,reject)=>{

                try {

                    model.userModel.find().then(()=>{

                        resolve()
   
                   }).catch(err=>{
   
                       reject()
                       console.log('err')
                   })
                    
                } catch (error) {

                    reject()
                    console.log("err")
                    
                }

        })

    }

}
