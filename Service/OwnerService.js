const owner = require('../MongooseSchema/Owner');

const getAllOwners = async ()=>{
    return await owner.find({});
}


const getOwner = async (id)=>{
    return await owner.findById(id);
}



module.exports = {
    getAllOwners:getAllOwners,
    getOwner: getOwner
}