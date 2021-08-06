let a = 2;
function {
  let a = 1;
  function fn2() {
    let a = 3;
    console.log(a);
  }
  fn2();
}
fn1();
