db.produtos.updateMany(
  {
    $or: [
      { nome: { $eq: "Big Mac" } },
      { nome: { $eq: "Quarteirão com Queijo" } },
    ],
  },
  { $addToSet: { ingredientes: "bacon" } },
);

db.produtos.find(
  {},
  { _id: false, nome: true, ingredientes: true },
);
