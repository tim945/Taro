var Mock = require("mockjs");

var Random = Mock.Random;

const p = [
  'https://storage.jd.com/taro-jd-com/static/cdc.png', 
  'https://storage.jd.com/taro-jd-com/static/cdc.png', 
  'https://storage.jd.com/taro-jd-com/static/cdc.png', 
  'https://storage.jd.com/taro-jd-com/static/cdc.png'
]

// const images = [
//   ...p,
//   ...p,
//   ...p,
//   ...p,
//   ...p
// ];
const images = new Array(20).fill(1).map(x=>Random.image('110x150',Random.color(),Random.word(2,6)));

const titles = Random.shuffle([
  "Brother's Rainbow",
  "A Dream of Justice",
  "A Marriage Collection",
  "Midwife and Light",
  "The Trophy Failure",
  "Destiny's Cut",
  "Rakehell's Fog",
  "The Ragged ",
  "Thread",
  "The Thug Chaser",
  "Church in the Glass",
  "Destiny's Hero",
  "Cat in the Underworld",
  "Triumph of the Empire",
  "Sapphire Raiders",
  "The Time of War",
  "冬天的早班飞机",
  "我们始终没有牵手旅行",
  "不想告别的夏天",
  "最初的爱情",
  "最后的仪式",
  "十一种孤独",
  "一部法国小说",
  "还乡之谜",
  "地下时光",
  "给樱桃以性别",
  "天使与昆虫",
  "在路上",
  "绿皮书",
  "老人与海",
  "追风筝的人",
  "小王子",
  "百年孤独",
  "人类简史",
  "时间简史",
  "心有林夕",
  "麦田里的守望者"
]);

const authors = (function() {
  let t = ["[哥]加西亚·马尔克斯", "[英]毛姆", "[法]圣-埃克苏佩里"];
  for (let i = 0; i < 10; i++) t.push(Random.name());
  return Random.shuffle(t);
})();

// 包含mock占位符的数据模板
const BasicBookSeed = {
  id: "@increment",
  "title|+1": titles,
  isbn: "@natural(9781782910284, 9981782910284)",
  publisher: "上海人民出版社",
  pubdate: "@date",
  "author|+1": authors,
  translator: "@cname",
  binding: "精装",
  price: "@float(60, 100, 2, 2)",
  pages: "@integer(60, 100)",
  words: "@integer(60, 100)",
  tags: ["小说", "文学", "名著"],
  score: "@float(0, 10, 1, 1)",
  review_num: "@integer(60, 100)",
  "image|+1": images,
  introduction: Random.cparagraph(0,10)
};

const bookSeed = {
  ...BasicBookSeed,
  "related_books|5": [BasicBookSeed]
};

module.exports = {
  images,
  titles,
  authors,
  bookSeed,
  randomOne: () => Mock.mock(bookSeed),
  randomMulti: (number = 6) => {
    let seeds = [];
    for (let i = 0; i < number; i++) seeds.push(bookSeed);
    return Mock.mock(seeds);
  }
};
