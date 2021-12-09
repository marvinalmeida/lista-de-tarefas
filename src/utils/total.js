export const getTotalProductsPrice = (produtos) =>
  produtos.map(p=> p.compras.reduce((acc, item) => acc + +item.price, 0));

export const getTotalPrice = (produtos) => {
  return produtos.map(o=> o.compras.reduce((acc, c) => acc + c.price * c.quantity, 0))
};
