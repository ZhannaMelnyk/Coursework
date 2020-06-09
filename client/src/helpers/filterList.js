export function filterList(list, query) {
  if (list) {
    return list.filter(product => {
      return product.name.toLowerCase()
        .includes(query.trim()
        .toLowerCase());
    })
  }
}