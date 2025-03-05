// 1/10の確率でアタリを返すクジ引きプログラム
const challengeLottery = () => {
  const result = Math.random();
  if (result < 0.1) {
    return console.log('アタリ！');
  } else {
    return console.log('ハズレ！');;
  }
};
challengeLottery();

// タイトルの文字数が20文字を超えていたら、「...」をつけて省略するプログラム
const omitPostTitle = (title) => {
  if (title.length > 20) {
    return console.log(title.slice(0, 20) + '...');
  } else {
    return console.log(title);
  }
};
omitPostTitle('Javascript基礎を学ぼう！初心者～中級者までこれさえ読めばOK！');

// メソッドチェーン
const fullName = ['Yamada', 'Taro'];
console.log(fullName.join(' ').toUpperCase());