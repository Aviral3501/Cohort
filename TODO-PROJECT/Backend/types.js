//this file is used for ZOD  and other similar functions
const zod = require("zod");

//for get route you dont need zod 

//for post route the schema will be 
// {
//     title:string
//     description:string
// }

// fir the put route we nust just need the id  of the item to update
// {
//     id:string
// }

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    createTodo:createTodo,
    updateTodo:updateTodo
}