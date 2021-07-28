a();
function a() {
  console.log(c)
  var c = 1;
  d();
  function d() {
    console.log('d is called')
  }
  console.log( 'a is called')
}

//別の関数の書き方（関数式）
b();
//これだけのホスティングの仕方が変数と同じになるので通常の関数宣言とは違い関数式は逆順で実行できない
const b = function() {
  
}

//varで変数を定義した場合には最初undefindという変数が用意されており、値を代入しておけばその値になる
//letの場合は初期値が設定されないエラーになる
//関数の場合は先にメモリスペースが確保されるのでグローバルな変数がなければ、後ろに書いても実行される

let b = 0;
console.log(b);
