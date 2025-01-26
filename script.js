const questions = [
    {
        question: "Q1 アイクラと言えばポポと？",
        choices: ["バカ", "チャチャ", "ボポボ", "ナナ"],
        correct: 3,
        explanation: "アイクラといえばポポとナナ 2人は友達以上恋人未満の関係だがスマブラDXでは恋愛関係がほのめかされているよ"
    },
    {
        question: "Q2 最もセンスのいいカラーは？<br>※作問者の独断とする",
        choices: ["1P(<span style='color: rgb(106, 90, 205);'>あお</span>/<span style='color: pink;'>ピンク</span>)", "2P(<span style='color: blue;'>あお</span>/<span style='color: rgb(0, 132, 255);'>みずいろ</span>)", "7P(<span style='color: lightcyan;'>みずいろ</span>/<span style='color: lightcyan;'>みずいろ</span>)", "8(<span style='color: orange;'>オレンジ</span>/<span style='color: purple;'>むらさき</span>)"],
        correct: 1,
        explanation: "問題の枠組みのデザインが青と水色を基調としていることから作問者にとってセンスのいいカラーは2Pだと推測できるよね 忖度ではない"
    },
    {
        question: "Q3 次の選択肢のうち, あゆじゃん切り離し下投げ相方空前を当てた際にファルコが立ち吹っ飛びになる最大の蓄積ダメージは？<br><br><b>条件 スマメイトルール1on1 アイクラ側はどちらも0% OPは初期状態 相方は大ジャンプ空前 回答は下投げ直前の%</b>",
        choices: ["17%", "18%", "19%", "20%"],
        correct: 0,
        explanation: "ファルコは軽い 前投げ空前は掴み打撃2回いけるけど下投げ空前は間に合わないので別解はないよ"
    },
    {
        question: "Q4 アイクラの参戦ナンバーは？",
        choices: ["14", "15", "16", "17"],
        correct: 1,
        explanation: "選択画面では17番目だがダークサムスとデイジーがダッシュファイターだから15番だよ"
    },
    {
        question: "Q5 アイクラが負けた時にリザルトでする拍手は",
        choices: ["ふたりどうじである", "ナナがすこしおくれる", "ポポがすこしおくれる", "カラバリによる"],
        correct: 4,
        explanation: "アイクラはめそめそ泣いて拍手をしないことから わからない が正解  かわいい"
    },
    {
        question: "Q6 技の全体フレームに関する記述で正しいものは？<br>1. 下強 < 空上 < 空後 < 横強 < DA<br>2. 空上 = 空後 < 下強 = 横強 < DA<br>3. 下強 < 横強 < 空上 = DA = 空後<br>4. 下強 < 横強 < DA < 空上 = 空後<br>5. 下強 < 横強 < 空上 = 空後 < DA",
        choices: ["1", "2", "3", "4", "5"],
        correct: 4,
        explanation: "下強30 横強32 空上35 空後35 DA39 空上空上切り離しが空後でもできるから同じ全体フレームだと推測できるよね？"
    },
    {
        question: "Q7 ～ドキドキ2択クイズ～ 制限時間は20秒<br>チームメンバーのポポとナナ(1Pカラー)がステージ外で尻もち落下していてどちらかしか助けられません どちらを助ける？",
        choices: ["ポポ", "ナナ"],
        correct: 0,
        explanation: "ナナを助けてもポポが消えたタイミングでナナも消えてしまうためポポを助けよう！沈黙しちゃだめだよ"
    },
    {
        question: "Q8 スマブラSPにおいてアイクラの横強がアプデで変更されポポナックル&ナナナックル(通称ポックルナックル)になりました 1Pカラーの場合ポポが殴った後に同じ動きでナナが殴る技です 2人の攻撃がヒットした際の全体ダメージが70%のときポポの攻撃のダメージは何%？",
        choices: ["35%", "40%", "42%", "45%"],
        correct: 1,
        explanation: "相方の技のダメージは本体の0.75倍に設定されている 後は計算を頑張ってね NBとかは例外だよ"
    },
    {
        question: "Q9 ポポとナナが本気でかけっこしたら勝つのはどっち？<br>ただしスマブラSPにおける走行速度の最大値を本気と定義する",
        choices: ["ポポ", "ナナ", "ひきわけ"],
        correct: 2,
        explanation: "本体と相方では相方の方が合流時などの走行速度が高く設定されている ただしカラバリによってポポとナナは入れ替わるので最大値は同じ"
    },
    {
        question: "Q10(ラスト) 終点の両端にアイクラとファルコが向かい合いアイクラがNBをします 地上でNBをした時と小ジャンプの頂点でNBをした時のファルコに与えるダメージについての記述で正しいのは？",
        choices: ["ちじょう > しょうジャンプ", "ちじょう < しょうジャンプ", "おなじ", "ランダム"],
        correct: 1,
        explanation: "NBは地上を滑るほど大きさが小さくなりダメージも減ってしまうよ(最初の数fは減らない) ジャンプNBだと地上を滑る距離が短くなるのでダメージが高いのだ"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let intervalID = null;

function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("question-screen").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question-title").innerHTML = question.question;
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    question.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.innerHTML = choice;
        button.onclick = () => checkAnswer(index);
        button.classList.add("ans-button"); 
        choicesContainer.appendChild(button);
        if(currentQuestionIndex == 6) startCountdown();
    });
}

function checkAnswer(index) {
    const question = questions[currentQuestionIndex];
    if (index === question.correct) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    stopCountdown();
    document.getElementById("timer").innerText = "";

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function giveup() {
    currentQuestionIndex++;
    stopCountdown();
    document.getElementById("timer").innerText = "";
    if (currentQuestionIndex == 5) score++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("question-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
    const newscore = 10 * score;
    document.getElementById("result-text").innerText = `あなたのスコアは ${newscore} てんです`;
    if(newscore == 100) document.getElementById("last-text").innerText = `てんさい あなたがアイスクライマーだ`;
    if(newscore == 90) document.getElementById("last-text").innerText = `おしい まんぞくしちゃだめだよ`;
    if(newscore == 80) document.getElementById("last-text").innerText = `ゆうとうせい ポポなみのちのう`;
    if(newscore == 70) document.getElementById("last-text").innerText = `わるないね ナナくらいのかしこさ`;
    if(newscore == 60) document.getElementById("last-text").innerText = `ふつうのじんせい それもよし`;
    if(newscore == 50) document.getElementById("last-text").innerText = `とくにいうことがない ホームランならすごい`;
    if(newscore == 40) document.getElementById("last-text").innerText = `よくないよ アイクラもないている`;
    if(newscore == 30) document.getElementById("last-text").innerText = `すごい てきとうにえらんだみたいなてんすう`;
    if(newscore == 20) document.getElementById("last-text").innerText = `ひかんしちゃだめ やっぱしろ`;
    if(newscore == 10) document.getElementById("last-text").innerText = `よろこべ 100てんまんのテストだよ`;
    if(newscore == 0) document.getElementById("last-text").innerText = `ぎゃくにすごい わけでもない`;
    const container = document.getElementById("normal-container");
    container.style.display = "block";
    const explanationContainer = document.getElementById("explanation-container");
    questions.forEach((q, index) => {
        const explanationElement = document.createElement("div");
        explanationElement.className = "explanation-item";
        if(index == 4){
            explanationElement.innerHTML = `
            <p>${q.question}</p>
            <p>正解: わからない</p>
            <p>解説: ${q.explanation}</p>
        `;
        explanationContainer.appendChild(explanationElement);
        } else {
        explanationElement.innerHTML = `
            <p>${q.question}</p>
            <p>正解: ${q.choices[q.correct]}</p>
            <p>解説: ${q.explanation}</p>
        `;
        explanationContainer.appendChild(explanationElement);
        }
    });
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result-screen").style.display = "none";
    document.getElementById("start-screen").style.display = "block";
    document.getElementById("normal-container").style.display = "none";
    const explanationContainer = document.getElementById("explanation-container");
    explanationContainer.innerHTML = ""; // 解説をリセット

}

function startCountdown() {
    const timerElement = document.getElementById("timer");
    let time = 20; // 20秒からスタート
    stopCountdown();

    intervalID = setInterval(() => {
        timerElement.innerText = time; // 現在の秒数を表示
        time--; // 秒を減らす

        if (time < 0) { // 0以下になったらカウントダウンを終了
            stopCountdown();
            timerElement.innerText = "";
            nextQuestion();
        }
    }, 1000); // 1秒ごとに実行
}

function stopCountdown() {
    if (intervalID !== null) {
        clearInterval(intervalID); // タイマーを停止
        intervalID = null; // タイマーIDをクリア
    }
}
