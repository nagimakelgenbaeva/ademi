
// const text = "lorem ipsum dolor"
// console.log(text[15]);
// console.log(text.length);

//console.log ("hello world \nlorem klsdsa")
//console.log("hello world \"world\" lorem");
//const text = "hello world";

//console.log(text.toUpperCase());
//console.log(text.toLocaleLowerCase());
//console.log(text.concat ("nagima"));
//console.log(["a","b"].concat("c"));
//console.log(["c"].concat(["a","b"]));
// const text = "Hello dorod"
// //console.log(text.indexOf("w"));
// console.log(text.lastIndexOf("d"));
// console.log(text.indexOf("l"));
// console.log(text.indexOf("l"));
const t = (slovo, text) => {
      if (slovo.indexOf(text) === -1) {
            return 0
      }else if (slovo.indexOf(text) === slovo.lastIndexOf(text)) {
                  return 1
            } else {
                  return 2
            }
      }
t("say hi to mommy", "to");
