const { Schema, model } = require('mongoose');

const celebritySchema = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String,
  },
  {
    timestamps: true
  }
);

module.exports = model('Celebrity', celebritySchema);

// const Customer = mongoose.model(
//     'Customer', customerSchema);
  
// // creating document using create method
// Customer.create({ name: 'Rahul', orderCount: 5 })
//     .then(result => {
//         console.log(result)
//     })
