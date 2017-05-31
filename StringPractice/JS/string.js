var person = {
name: "极客",
age: 20,
height: 1.80,
motto: "让学习更有效！"
}

alert(typeof(person));
alert(typeof(person.name));
alert(typeof(person.age));
alert(typeof(person.height));
alert(typeof(person.motto));


var sentence = "大家好，我叫";
sentence = sentence + person.name +"，今年" + person.age + "岁，身高" + person.height + "m。\n" + "我的座右铭是：“" + person.motto + "”";
alert(sentence);


alert(sentence.length);