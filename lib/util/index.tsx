const getDate = (month: number) => {
  let realMonth = ''
  switch (month) {
    case 0:
      realMonth = 'January'
      break
    case 1:
      realMonth = 'February'
      break
    case 2:
      realMonth = 'March'
      break
    case 3:
      realMonth = 'April'
      break
    case 4:
      realMonth = 'May'
      break
    case 5:
      realMonth = 'June'
      break
    case 6:
      realMonth = 'July'
      break
    case 7:
      realMonth = 'Agoust'
      break
    case 8:
      realMonth = 'September'
      break
    case 9:
      realMonth = 'October'
      break
    case 10:
      realMonth = 'November'
      break
    case 11:
      realMonth = 'December'
      break
    default:
      break
  }
  return realMonth
}

export { getDate }
