// тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;

// тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0; 

// шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

// програм эхлэхэд бэлтгэе
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

var diceDom = document.querySelector('.dice');
diceDom.style.display = 'none';

// Шоог шидэх эвент листенер
document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1-6 доторх санамсаргүй нэг тоог гаргаж авна
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // Шооны зургийг вэб дээр гаргаж ирнэ.
    diceDom.style.display = 'block';

    // Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ.
    diceDom.src = 'dice-' + diceNumber + '.png';

    // буусан тоо нь 1 ээс ялгаатай бол идэвхитэй тоглогчийн ээлжийн оноог нэмэгдүүлнээ
    if(diceNumber !== 1){
        // 1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
        // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.

        // энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;

        // тоглогчийн ээлжийг нөгөө тийш шилжүүлнэ
        // хэрэв идэвхитэй тоглогч нь 0 байвал идэвхитэй тоглогийг 1 болго.
        // үгүй бол тоглогийг 0 болго.

        activePlayer ===0 ? (activePlayer = 1) : (activePlayer = 0);

        // улаан цэгийг шилжүүлэх
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        // шоог түр алга болгох
        diceDom.style.display = 'none';

        //if(activePlayer === 0){
        //    activePlayer = 1;
        //} else {
        //   activePlayer = 0;
        //}
    }
});
