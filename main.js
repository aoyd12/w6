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
