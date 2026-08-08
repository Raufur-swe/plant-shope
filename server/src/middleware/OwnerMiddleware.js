import ownerModel from "../model/ownerModel"


const verifyOwner = async(req ,res , next)=>{
    const owner = await ownerModel.findOne({
        user : req.user.id
    })


    if(!owner){
        return res.status(404).json({
            message:"Owner profile not found."
        });
    }

    if(owner.isVerifiedSeller !== true){
         return res.status(403).json({
            success:false,
            message:"Please verify your account "
        });
    }
    next()
}

export default verifyOwner