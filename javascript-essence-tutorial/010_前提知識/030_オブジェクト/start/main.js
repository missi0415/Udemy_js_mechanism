// オブジェクトとは
//　名前（プロパティー、またはキー）と
//　値(バリュー)をペアで管理する入れ物

let obj = {
  prop1: "value1",
  prop2: "value2",
  prop3: function(){
    //メソッドとはオブジェクトに格納された関数
    console.log('value3')
  },
  prop4: {
    prop5: "value5"
  }
}
obj.prop3();
obj.prop6 = "value6"
console.log(obj.prop4.prop5,obj.prop6)

let member = {
  name: "taro",
  number: "6",
  form: function(){
    console.log("sidetrowe")
  },
  age: {
    realage: 15
  }
}
member.form();
console.log(member.name,member.age.realage)
console.log(obj)
console.log(member)
