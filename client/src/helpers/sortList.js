export function sortList(list, field, order) {
  if (order === 'asc') {
    sort(list, field);
  } else if (order === 'desc') {
    sort(list, field);
    list.reverse();
  }
  return list;
}

function sort(list, field) {
  list.sort((a, b) => {
    if (a[field] > b[field]) {
      return 1;
    } else if (a[field] < b[field]) {
      return -1;
    } else {
      return 0;
    }
  })
}