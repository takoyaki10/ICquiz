const combolist = [
    {
        root: "降り空後→ステップ掴み(あゆじゃん)→下投げ→相方大ジャンプ空前→本体小ジャンプ降り空n→ステップ掴み(あゆじゃん)→前投げ→相方ジャンプ空前",
        level: 1,
        explanation: "アイクラの即死コンボといえばこれ！あゆじゃんをマスターしよう",
        pass: "https://youtu.be/RekQgr0aGNs",
        index: 1
    },
    {
        root: "ステップ掴み(あゆじゃん)→下投げ→相方大ジャンプ空前→本体小ジャンプ降り空ｎ→相方下ｂ→本体弱→ダッシュ掴み→前投げ→相方ジャンプ空前",
        level: 1,
        explanation: "崖が近いときの0%あゆじゃんはコレ！下bをしっかり入力しよう",
        pass: "https://youtu.be/-H6eRxDOTSA",
        index: 2
    },
    {
        root: "ステップ掴み(あゆじゃん)→下投げ→相方空ｎ→本体上強→相方二段ジャンプ空前→本体横ｂ→相方ジャンプ空前",
        level: 1,
        explanation: "二段ジャンプと空前のタイミングが鍵 相手を踏まないように位置調整をしよう",
        pass: "https://youtu.be/KxtjkTduyaA",
        index: 3
    },
    {
        root: "ステップ掴み→下投げ→相方大ジャンプ空前→本体ジャンプ空下→相方大ジャンプ空前→本体降り空n→ステップ掴み(あゆじゃん)→前投げ→相方ジャンプ空前",
        level: 2,
        explanation: "重いキャラ限定 空下をうつ位置を調整しよう",
        pass: "https://youtu.be/da91YM0PbX4",
        index: 4
    },
    {
        root: "掴み→下投げ切り離し→相方横回避→本体横強→相方横ｂ→ダッシュ掴み→下投げ→相方大ジャンプ空前→本体踏み→斜め下移動回避→相方弱→本体ステップ弱→相方下b→ステップ掴み→前投げ→相方ジャンプ空前",
        level: 2,
        explanation: "空前踏みは空前をできるだけ遅らせるのが鍵 遅すぎると本体横強がでるから気を付けて",
        pass: "https://youtu.be/6CyFktVCxJ4",
        index: 5
    },
    {
        root: "降り空後→ステップ掴み(あゆじゃん)→下投げ→相方大ジャンプ空前→本体(微歩き)下回避→相方横強→ダッシュ掴み(あゆじゃん)→前投げ→相方ジャンプ空前",
        level: 2,
        explanation: "横強の前に歩きを入れると相方がついてきやすいよ",
        pass: "https://youtu.be/rOWhl6yxzxE",
        index: 6
    },
    {
        root: "降り空後→ステップ掴み(あゆじゃん)→下投げ→相方大ジャンプ空前→本体小ジャンプ降り空ｎ→ステップ相方下ｂ→本体弱→ダッシュ掴み→前投げ→相方ジャンプ空前",
        level: 2,
        explanation: "基本コンボをステップ下b弱で伸ばしたコンボ 降り空nを低い位置で出そう",
        pass: "https://youtu.be/gAZE_eixwgI",
        index: 7
    },
    {
        root: "ステップ掴み(あゆじゃん)→下投げ→相方大ジャンプ空前→本体小ジャンプ降り空ｎ→相方横強→ダッシュ掴み(あゆじゃん)→前投げ→相方ジャンプ空前",
        level: 2,
        explanation: "相方がついてくるためには空nと横強のタイミングをつかむのが大事！",
        pass: "https://youtu.be/s29CmsFSweE",
        index: 8
    },
    {
        root: "ステップ掴み(あゆじゃん)→下投げ→相方空前→本体空上→相方空前→本体下回避→相方下b→本体弱→掴み→前投げ→相方ジャンプ空前",
        level: 3,
        explanation: "空前に前慣性をいれてメテオしないようにしよう",
        pass: "https://youtu.be/VfaUi2MwCOA",
        index: 9
    },
    {
        root: "降り空n→下投げ→相方空前+本体空n→相方下ｂ→本体弱→ダッシュ掴み→前投げ→相方ジャンプ空前",
        level: 3,
        explanation: "下bの入力で相方だけに急降下をいれよう",
        pass: "https://youtu.be/CBXwz9chgxs",
        index: 10
    },
    {
        root: "ダッシュ弱切り離し→相方下b→ステップ掴み→下投げ→相方大ジャンプ空前→本体ガード→ステップ→相方下B→本体弱→歩き掴み→前投げ→相方空前",
        level: 3,
        explanation: "ブリザードの内ずらしに強いのが魅力 ガード解除のタイミングを見極めよう",
        pass: "https://youtu.be/eXVnYxeYEsk",
        index: 11
    },
    {
        root: "掴み→下投げ→相方ガード+本体上り空上→相方小ジャンプ上り空前→本体ガード→相方下B→本体弱→掴み前投げ→相方ジャンプ空前",
        level: 3,
        explanation: "崖が近い0%掴みはこれ(キャラ限) 空前の急降下からガード→下b→弱の順で入力しよう",
        pass: "https://youtu.be/i1tZiuNboWE",
        index: 12
    },
    {
        root: "ステップ掴み(あゆじゃん)→下投げ→相方大ジャンプ空前→本体小ジャンプ降り空ｎ→相方横強→本体降り空n→ステップ下b弱→前投げ→相方ジャンプ空前",
        level: 3,
        explanation: "相方の弱は気にしない！たくさん運びたい時に使おう",
        pass: "https://youtu.be/JQVNmcSv3Ag",
        index: 13
    },
    {
        root: "ステップ掴み(あゆじゃん)→下投げ→相方大ジャンプ空前→本体小ジャンプ降り空後→バックステップ→相方下ｂ→本体弱→ステップ掴み→前投げ→相方ジャンプ空前",
        level: 3,
        explanation: "本体の空後を最低空で出す意識を徹底しよう",
        pass: "https://youtu.be/C3un8t5FZnY",
        index: 14
    },
    {
        root: "降り空後→ステップ掴み(あゆじゃん)→下投げ→相方大ジャンプ空前→本体(微歩き)下回避→相方上り空ｎ→本体小ジャンプ降り空ｎ→ステップ掴み(あゆじゃん)→前投げ→相方ジャンプ空前",
        level: 4,
        explanation: "相方の上り空nの直後の本体小ジャンプは忙しいけれど落ち着いて入力しよう",
        pass: "https://youtu.be/d40RvlRhfEk",
        index: 15
    },
    {
        root: "あゆじゃん→下投げ→相方空前+本体下回避→相方下b→本体弱→本体空n→ステップ下b弱→掴み前投げ→相方ジャンプ空前",
        level: 4,
        explanation: "0%で運びたいときはこのコンボ！ 本体の空nを低い位置で出そう",
        pass: "https://youtu.be/G5c_zV6JwIE",
        index: 16
    },
    {
        root: "降り空n→下投げ→相方空前+本体空上→本体空n→あゆじゃん前投げ→相方ジャンプ空前",
        level: 4,
        explanation: "空前をめっちゃ遅らせて空上を先に当てよう 入力は空前が先だよ",
        pass: "https://youtu.be/u49GLA_bwro",
        index: 17
    },
    {
        root: "降り空n→ステップ掴み(あゆじゃん)→下投げ→相方空前→本体下回避→相方空n→本体ステップ弱→相方ジャンプ空n→あゆじゃん前投げ→相方ジャンプ空前",
        level: 4,
        explanation: "弱空nは弱の直後にジャンプボタンを押すと簡易入力できるよ",
        pass: "https://youtu.be/K4RWUXVMwjo",
        index: 18
    },
    {
        root: "掴み→下投げ→相方ガード+本体上り空上→相方小ジャンプ上り空前→本体ガード→相方下B→本体弱→本体小ジャンプ降り空ｎ→ステップ→相方下ｂ→本体弱→ダッシュ掴み→前投げ→相方ジャンプ空前",
        level: 5,
        explanation: "相方下bが敵と近すぎると凍ってしまうので空前時の慣性で調整しよう",
        pass: "https://youtu.be/rqdinQMxTIU",
        index: 19
    },
    {
        root: "掴み→下投げ→新型ガード本体空上→相方大ジャンプ空前→本体下回避→相方上り空ｎ→本体小ジャンプ降り空ｎ→ステップ掴み(あゆじゃん)→前投げ→相方ジャンプ空前",
        level: 5,
        explanation: "相方空前を遅らせるほど下回避からの動きがやりやすくなるよ",
        pass: "https://youtu.be/i3_UYVaVEQ4",
        index: 20
    },
    {
        root: "降り空後→ステップ掴み(あゆじゃん)→下投げ→相方空前→本体下回避→相方下b→本体弱→掴み→下投げ踏み→本体nb→相方下b→掴み+打撃→上投げ→上b",
        level: 5,
        explanation: "掴み打撃のタイミングがシビア！反復練習しよう",
        pass: "https://youtu.be/5_l_RQi0Lno",
        index: 21
    },
    {
        root: "降り空n→下投げ→相方空前+本体空n→相方下強→相方下強→ダッシュ掴み→前投げ→相方ジャンプ空前",
        level: 5,
        explanation: "下強と下強の前後はダッシュではなくステップを使おう",
        pass: "https://youtu.be/GqBLj4iZTPc",
        index: 22
    }

];

let currentQuestionIndex = 0; 

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // 要素を入れ替え
    }
}

function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("root-screen").style.display = "block";
    loadQuestion();
}

function startQuiz2() {
    shuffleArray(combolist);
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("root-screen").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const root = combolist[currentQuestionIndex];
    const iframeElement = document.getElementById("youtube-iframe");
    
    // YouTube埋め込みリンクの生成
    const videoId = root.pass.split("https://youtu.be/")[1]; // 動画IDを取得
    const youtubeEmbedLink = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&fs=0&iv_load_policy=3`;


    iframeElement.src = youtubeEmbedLink;
    console.log("動画をロード:", youtubeEmbedLink);

    document.getElementById("level-show").innerText = "難易度: " + root.level;
    document.getElementById("exp").innerText = root.explanation;
}

function giveup() {
        showResult();
}
function nevergiveup() {
    currentQuestionIndex++;
    const activeElement = document.activeElement;
    if (activeElement && activeElement.blur) {
        activeElement.blur();
    }
    if (currentQuestionIndex < combolist.length - 1) {
        loadQuestion();
    } else if(currentQuestionIndex == combolist.length - 1){
        document.getElementById("textt").innerText = ""
        loadQuestion();
    } 
}

function showResult() {
    document.getElementById("root-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
}

function restartQuiz() {
    currentQuestionIndex = 0;
    combolist.sort((a, b) => a.index - b.index);
    document.getElementById("result-screen").style.display = "none";
    document.getElementById("start-screen").style.display = "block";
    document.getElementById("textt").innerText = "つぎのコンボ！"
}

