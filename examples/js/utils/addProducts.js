export default function addProducts (quantity) {
  var products = [];
  var startId = products.length;
  
  for (var i = 0; i < quantity; i++) {
    var id = startId + i;
    products.push({
      id: id,
      name: "Item name " + id,
      price: 2100 + i
    });
  }

  return products;
}
