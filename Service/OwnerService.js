const owner = require('../MongooseSchema/Owner');

const getAllOwners = async ()=>{
    return await owner.find({});
}


const getOwner = async (id)=>{
    return await owner.findById(id);
}

const addOwner = async (data) => {
    return await owner.create(data);
}

module.exports = {
    getAllOwners:getAllOwners,
    getOwner: getOwner,
    addOwner:addOwner
}