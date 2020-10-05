const {Schema, model} = require('mongoose')

const task2 = new Schema({
    name: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    lead: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    
    undergraduate: Boolean,
    magistracy:  Boolean,
    specialty: Boolean,
    aspirantura: Boolean,
    doctoralStudies: Boolean,
})

module.exports = model('Task2', task2)


