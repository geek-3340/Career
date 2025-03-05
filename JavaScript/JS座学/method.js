// 標準組み込み関数・オブジェクト
// Javascriptに標準で定義されている

// 【 関 数 】
// parseInt:stringをnumberに変換する関数
console.log(parseInt('10')); //10


// 【 オブジェクトとそのプロパティ・メソッド 】
// Math:数学的な計算を行うプロパティ・メソッドを持つオブジェクト
// Math.PI:円周率を表す
console.log(Math.PI); // 3.1415...

// Math.ceil(数値):小数点以下を切り上げる
console.log(Math.ceil(3.14)); // 4

// Math.floor(数値):小数点以下を切り捨てる
console.log(Math.floor(3.14)); // 3

// Math.round(数値):小数点以下を四捨五入
console.log(Math.round(3.14)); // 3

// Math.round(数値):0以上1未満のランダムな数値を返す
console.log(Math.random()); // 3

// Date:日付を扱うオブジェクト
// 引数無しで現在を年～秒で返す
console.log(new Date()); // Wed Mar 05 2025 00:39:28 GMT+0900 (日本標準時)

// 引数ありで指定日時を返す
console.log(new Date(1996, 6, 4)); // Thu Jul 04 1996 00:00:00 GMT+0900 (日本標準時)

// get～:年、月、日など抽出して返す
console.log(new Date().getFullYear()); // 2025
console.log(new Date().getMonth()); // 2
console.log(new Date().getDate()); // 5
console.log(new Date().getHours()); // 0
console.log(new Date().getMinutes()); // 39
console.log(new Date().getSeconds()); // 28

// 【その他標準で使えるメソッド】
// join(区切り文字):配列の文字を区切り文字で結合
const arr = ['Hello', 'World'];
console.log(arr.join(' of the ')); // Hello of the World

// split(区切り文字):文字を区切り文字で分割して配列にする
const foo = 'Hello & World';
console.log(foo.split(' & ')); // ['Hello','World']

// push(値):配列の末尾に要素を追加
arr.push('2');
console.log(arr); // ['Hello', 'World', '2']

// slice(開始位置,終了位置):指定した位置の要素を取得
console.log(foo.slice(0, 4)); // Hell(終了の指定位置は含まない)

// replaceAll(検索文字列,'置換文字列'):検索文字列を全て置換文字列に置き換える
const bar = 'Hexxo Worxd!';
console.log(bar.replaceAll('x', 'l')); // Hello World!

// reverse():配列の順番を並び変える
console.log(arr.reverse()); // ['2', 'World', 'Hello']

// shift():配列の先頭要素を削除して返す、削除された配列は先頭要素が消える
console.log(arr.shift()); // 2
console.log(arr); // ['World', 'Hello']

// toString():値を文字列に変換する
const num = 5;
console.log(num.toString()); // 5

// indexOf(検索文字):値の中で検索文字が最初に出現する位置を返す
const apl = 'Apple';
console.log(apl.indexOf('l'));

// toUpperCase():値を大文字に変換
console.log(apl.toUpperCase());

// toLowerCase():値を小文字に変換
console.log(apl.toLowerCase());