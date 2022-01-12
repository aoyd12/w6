function setUserName() {
  let myName = prompt('名前を入力してください');
  //promptは、組み込みの関数、prompt (pop-up) Windowを表示して、ユーザ入力をさせる。
  
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    //入力データを、特別な場所(変数ではない、ファイルなどに相当)に保存する。
    myHeading.innerHTML = 'こんにちは, ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  //以前に特別な場所(ファイルなど)保存していた名前があれば、それを使う。
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = '今日は ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
