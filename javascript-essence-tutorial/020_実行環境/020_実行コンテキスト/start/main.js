// この場合はmain.js直下に書かれたコードが実行される環境がグローバルコンテキストとなる
// グローバルな実行環境
let a = 0;
function b () {
  //このナビブロックの中が関数コンテキストという
  console.log(this,arguments,a);
}

// console.log(a)
b();
