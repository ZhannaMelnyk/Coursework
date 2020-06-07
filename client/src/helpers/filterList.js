export function filterList(list, query) {
  if (list) {
    return list.filter(product => {
      const productName = product.name.toLowerCase();
      const searchQuery = query.toLowerCase()
      return productName.includes(searchQuery);
    })
  }
}