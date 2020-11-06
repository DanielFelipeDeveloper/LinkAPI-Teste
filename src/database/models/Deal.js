const { Schema, model } = require('mongoose');

const DealSchema = new Schema(
  {
    numero: {
      type: String,
      required: true,
    },
    idPedido: {
      type: Number,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Deal = model('Deal', DealSchema);
module.exports = Deal