// jsは5種類のスコープが存在する
// グローバルスコープ
// スクリプトスコープ
// 関数スコープ
// ブロックスコープ
// モジュールスコープ

let a = 0;
var b = 0;
function c() {
}

console.log(b)
//グローバルスコープの値は省略して書くことができる。window.b === b
//windowオブジェクト自体がグローバルスコープ
//スクリプトスコープもグローバルスコープとも呼ばれる異なるスコープであると覚えておく必要がある
window.d= 1
console.log(d)
