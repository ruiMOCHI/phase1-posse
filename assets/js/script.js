const header = document.getElementById("js-header");
const button = document.getElementById("js-headerButton");

button.addEventListener('click', () => {
    header.classList.toggle('is-open');
});

const mainVisual = document.getElementById('js-mainVisual');

window.addEventListener('scroll', () => {
  if(window.scrollY > mainVisual.clientHeight - header.clientHeight){
    header.classList.remove('is-transparent');
  } else {
    header.classList.add('is-transparent');
  }
});

const eventSlideOptions = {
  type: 'loop',/*4枚目から1枚目に移動できる*/
  gap: -10,
  width: 1096,/*全体幅指定はこれでok*/
  perPage: 3,
  padding: 28,
  pagination: false,/*デフォルトでtrue(適用されている)のでfalseにしないと消えない*/
  breakpoints: {
    768: {
      gap: 40,
      perPage: 1,
      pagination: true,/*カリキュラムでは、「スマホでは」とあるが、そこは大体で*/
    },
  },
}

new Splide('#js-eventSlide', eventSlideOptions).mount();


const dailySlideOptions = {
  pagination: false,
  destroy: true,
  breakpoints: {
    768: {
      destroy: false,/*スライドショーの破棄*/
      type: 'loop',/*5枚目から1枚目に移動できる,*/
      gap: 40,
      perPage: 1,
      padding: 28,
      pagination: true,/*デフォルトでtrue(適用されている)のでfalseにしないと消えない*/
    },
   },
  }

new Splide('#js-dailySlide', dailySlideOptions).mount();

/*JavaScript(以下、JS) におけるオブジェクトは、関連するプロパティとメソッドの集まりを表すデータ型です。
オブジェクトは、異なる種類の情報や機能をひとまとめにして表現するためのもので、JSにおける基本的なデータ構造のひとつです。

オブジェクトは、名前と値のペア（プロパティと値）を格納し、その値にアクセスするための手段を提供します。
プロパティは、オブジェクト内で識別子（通常は文字列）で指定され、対応する値は任意のデータ型（数値、文字列、配列、関数、他のオブジェクトなど）となります。
また、関数をプロパティとして持つオブジェクトは、そのプロパティをメソッドと呼びます。

以下は、オブジェクトの基本的な構文です：

javascript
Copy code
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
この例では、person という名前のオブジェクトが定義されています。
このオブジェクトには、firstName、lastName、age といったプロパティがあり、fullName というメソッドもあります。
プロパティへのアクセスは オブジェクト名.プロパティ名 の形式で行い、メソッド呼び出しは オブジェクト名.メソッド名() の形式で行います。

オブジェクトは、JSにおいて非常に重要で多用されるデータ構造です。
DOM要素、配列、関数、クラスなど、JSのほぼすべての要素はオブジェクトとして表現されます。
オブジェクト指向プログラミングの概念を活用して、複雑なデータや機能を構造化し、効率的に管理することができます。*/