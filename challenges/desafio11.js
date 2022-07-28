db.produtos.find({
  $and: [
    { nome: { $not: { $eq: "Big Mac" } } },
    { nome: { $not: { $eq: "McChicken" } } },
  ],
}, { _id: false, nome: true, curtidas: true, vendidos: true });