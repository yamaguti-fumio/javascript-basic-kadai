const oneDay = new Date('2023-08-22');

const year = oneDay.getFullYear();
const month = oneDay.getMonth() + 1; 
const day = oneDay.getDate();

const format = `${year}年${month}月${day}日`;

console.log(format);
