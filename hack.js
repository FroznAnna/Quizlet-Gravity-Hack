alert('Thank you for using FroznAnna\'s Quizlet Gravity Hack\nWhen the answer appears in the textbox, press space then enter')
words = {};
for(i = 0; i < Quizlet.gravityModeData.terms.length; i++){
	if(Quizlet.gravityModeData.terms[i].definition != null){
		words[Quizlet.gravityModeData.terms[i].definition] = Quizlet.gravityModeData.terms[i].word;
	}
}
let sort = {};
for(let key in words){
  sort[words[key]] = key;
}
words = sort
let lastWord;
setInterval(function() {
  let inputBox = document.getElementsByClassName('GravityTypingPrompt-input js-keymaster-allow')[0]
  try {
    let term = document.getElementsByClassName('TermText notranslate')[0].outerText
    if (term != lastWord) {
      inputBox.value = words[term]
      lastWord = term
    }
  } catch {
  }
}, 0);
