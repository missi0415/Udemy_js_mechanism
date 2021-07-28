//実行コンテキストとはコードが実行される状況
//スコープとは実行中のコードから見える範囲（参照できる範囲）

function a() {
  let b = 0;
  //関数スコープこの中のこと
  console.log(b)
}
a();

//{}ブロックスコープとはこの波括弧のこと
//function {}のことは関数スコープと呼び、ブロックスコープとは呼ばない
{
  var c = 1;
  function d() {
    console.log("d is called")
  }
  const e = function () {
    console.log("ブロックスコープが働く宣言")
  }
  d();
  e();
}
// var と関数宣言ではブロック宣言は無視される。
// そのためブロックスコープ内で使用するのはlet,constもしくは変数宣言（let a = function()みたいなやつ）のみにしておく
//ブロックスコープは普段はif(条件){ここがブロックスコープ}とかで使われている。
console.log(c);
