//コールスタックとはコンテキストの積み重ね
//javascriptがどのような順序で実行されていくかの履歴のようなもの
function a() {
}
function b() {
    a();
}
function c() {
    b();
}
c();
