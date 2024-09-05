const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();

const formatDate = year + '年' + month + '月' + date + '日';

console.log(formatDate);