// 1.ボタンをクリックするとinputのvalueが変更される関数
const onChangeText = () => {
  document.getElementById("textbox");
  textbox.value = "変更されます";
}


// 2.複数のクラス名から値を取得し、各要素を割り当てる関数
const changeMenu = () => {
  let menus = document.getElementsByClassName("menu");
  console.log(menus);
  menus[0].style.color = "#ff0000";
  menus[1].innerHTML = "ラーメン定食";
  menus[2].remove();
}
// menus変数の中身　→ [p.menu, p.menu, p.menu]


// 3.連想配列のkey-valueを順番に取得する
// let hash = {
//   key0: "value0",
//   key1: "value1"
// };

// for (let key in hash) {
//   alert('key:' + key + ' value:' + hash[key]);
// }

// // mapを使う
// {
//   let hash = {
//     key0: "value0", key1: "value1"
//   };

//   Object.keys(hash).map(key => console.log('key:' + key + ' value:' + hash[key]));
  // [undefined, undefined]が出てしまうが内容を確認したいだけなら十分
  // Object.keys(obj) オブジェクトのプロパティ名(キー)を取得
  // 配列に使う場合
  // const array = ["sa", "mu", "ra", "i"];
  // console.log(Object.keys(array));
  // ["0", "1", "2", "3"] → インデクスを取得
// }

//円グラフ用にカテゴリと合計金額を配列に入れる
// let keyArray = [];
// let valueArray = [];
// for (key in pieChartData) {
//   keyArray.push(key);
//   valueArray.push(pieChartData[key])
// }



// 4.現在時刻を取得
const current = new Date();
const result = document.getElementById("result");
result.textContent = current.toLocaleString();

  // toLocaleString()
  // 日付を地域の日付書式に従った文字列に変換

  // ●innerHTML
  // "HTMLを解釈して出力する"のがinnerHTML

  // ●textContent
  // "HTMLを解釈せずにそのまま文字として出力する"のがtextContent



// 5.aタグを全て取得し、リンク先を一覧表示する
  const list = document.getElementsByTagName('a');
  for (let i=0; i < list.length; i++) {
    // console.log(list.item(i).href);
    // console.log(list[i].href); // 同じ意味
  }

    // item(i) → i番目の要素を取得(iは0~length-1の範囲)
    // namedItem(name) →id、またはname属性が一致する要素を取得



// 6.テキストボックスに現在時刻を表示
  const current_time = new Date();
  const nam = document.getElementsByName('time'); //inputのname属性を取得
  nam[0].value = current_time.toLocaleString(); //nam[0]としているのはgetElementsByNameメソッドの戻り値がノードの集合(NodeListオブジェクト)のため



// 7.class名からリンクを取得し、一覧表示する
const list_class = document.getElementsByClassName('my');
for (let i=0; i < list_class.length; i++) {
  console.log(list_class[i].href);
}

  //複数のクラス名を取得することも可能 ('my me mu') → この場合同一タグにmy me muが指定されていないと取得できない



// 8.「id='list'」である要素の配下から「class='external'であるアンカータグ」を取り出し、そのリンク先を列挙
const list3 = document.querySelectorAll('#list .external')

for (let i=0; i < list3.length; i++) {
  console.log(list3[i].href);
}

  // セレクター式で取得する
  // getXXXとqueryXXXの使い分け
  // 特定のid値、class属性などで要素を検索できる場合 → getXXXメソッド
  // より複雑な検索条件で検索をしたい場合(getXXXより低速) → queryXXXメソッド 



// 9.ノードウォーキングを使う
// ノードウォーキング → あるノードを起点として、相対的な位置関係からノードを取得する
const s = document.getElementById('food')
const opts = s.childNodes; //子ノードを取得
// 子ノードを順に取得
for (let i=0; i < opts.length; i++) {
  const opt = opts.item(i);

  if (opt.nodeType === 1) {  //子ノードが要素ノードである場合にログを表示  1 ELEMENT_NODE = 要素ノード
    console.log(opt.value);
  }
}

  // fistChildで書き換え
  // const child = s.firstChild  // 最初の子ノードを取得
  // // 子ノードが存在する間、ループを繰り返す
  // while (child)  {
  //   if (child.nodeType === 1) {
  //     console.log(child.value);
  //   }
  //   次の子ノードを取得
  //   child1 = child.nextSibling;
  //   console.log(child1);
  // }



// 10.ボタンがクリックされたらダイアログを表示する
function btn_click() {
  window.alert('ボタンがクリックされました');
}

  // ページロード時に実行されるイベントハンドラを登録
  // htmlの中にjsを混在させないパターン
  window.onload = function() {
    document.getElementById('btn').onclick = function() {
      window.alert('ボタンがクリックされたよ');
    }
  }

  // イベントリスナーを使った書き方
  // ページロード時に実行されるイベントハンドラを登録
  // DOMContentLoaded → コンテンツ本体が読み込まれたタイミングで実行される/ページの初期化は基本的にDOMContentLoadedを使う
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn1').addEventListener('click', function() {
      window.alert('ボタンがクリックされました')
    })
  })