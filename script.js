// List of countries and their hints
const countries = [
    { 
        name: "Brazil",
        hint: "Negara dengan Flora dan Fauna Endemik Terbanyak.",
        altNames: ["brasil"]
    },
    { 
        name: "Japan",
        hint: "Negara dengan teknologi canggih.",
        altNames: ["jepang"]
    },
    { 
        name: "Australia",
        hint: "Negara dengan kanguru, koala, dan Great Barrier Reef.",
        altNames: ["australia", "Australi"]
    },
    { 
        name: "Japan",
        hint: "Negara mana yang mata uangnya Yen.",
        altNames: ["jepang"]
    },
    { name: "Indonesia", hint: "Negara dengan banyak pulau 17000 lebih.", altNames: ["indonesia"] },
    { name: "Malaysia", hint: "Negara dengan Petronas Twin Towers.", altNames: ["malaysia"] },
    { name: "Thailand", hint: "Terletak di Negara mana Kuil Wat Arun", altNames: ["thailand"] },
    { name: "Vietnam", hint: "Negara dengan Warisan Dunia Halong Bay.", altNames: ["vietnam"] },
    { name: "Indonesia", hint: "Negara Manakah yang Presidennya Bernama Joko widodo", altNames: ["indonesia"] },
    { name: "Philippines", hint: "Negara dengan banyak pantai indah.", altNames: ["filipina", "filipin", "philipines", "philippin", "philipin"] },
    { name: "Singapore", hint: "Negara dengan ikon Merlion.", altNames: ["singapur", "singapura"] },
    { name: "South Korea", hint: "Negara dengan K-pop dan kimchi.", altNames: ["Korea Selatan"] },
    { name: "Indonesia", hint: "Negara Manakah yang Presiden Pertamanya IR.Soekarno", altNames: ["indonesia"] },
    { name: "China", hint: "Negara dengan Tembok Besar.", altNames: ["cina"] },
    { name: "Indonesia", hint: "Terletak di Negara mana Gunung Merapi", altNames: ["indonesia"] },
    { name: "India", hint: "Negara dengan Taj Mahal.", altNames: ["india"] },
    { name: "Pakistan", hint: "Negara dengan Pegunungan Karakoram.", altNames: ["pakistan"] },
    { name: "Bangladesh", hint: "Negara dengan Sungai Gangga.", altNames: ["banglades"] },
    { name: "Indonesia", hint: "Negara mana yang mata uangnya Rupiah.", altNames: ["indonesia"] },
    { name: "Sri Lanka", hint: "Negara ini dijuluki dengan Gajah Asia.", altNames: ["srilangka", "sri lanka", "sri langka", "srilanka"] },
    { name: "Nepal", hint: "Negara dengan Gunung Everest.", altNames: ["nepal"] },
    { name: "Bhutan", hint: "Negara dengan Fesival Tshechu.", altNames: ["butan", "bhutan"] },
    { name: "Maldives", hint: "Negara dengan Pulau yang paling Eksotis.", altNames: ["Maladewa", "Republik Maladewa", "Kepulauan Maladewa"] },
    { name: "Afghanistan", hint: "Negara dengan Pegunungan Hindu Kush.", altNames: ["afganistan"] },
    { name: "Indonesia", hint: "Terletak di Negara manakah Danau Toba.", altNames: ["indonesia"] },
    { name: "Iran", hint: "Negara ini dulunya Persia Kuno.", altNames: ["iran"] },
    { name: "Iraq", hint: "Negara dengan Sungai Tigris dan Efrat.", altNames: ["iraq"] },
    { name: "Palestine", hint: "Mahmoud Abbas Adalah Presiden dari Negara.", altNames: ["Palestina"] },
    { name: "Saudi Arabia", hint: "Negara dengan Padang Pasir Rub' al Khali.", altNames: ["arab saudi"] },
    { name: "Malaysia", hint: "Negara manakah yang mata uangnya Ringgit.", altNames: ["malaysia"] },
    { name: "United Arab Emirates", hint: "Negara dengan Menara Burj Khalifa.", altNames: ["uae", "Uni Emirat Arab"] },
    { name: "Israel", hint: "Negara dengan Kota Tua Yerusalem.", altNames: ["israel"] },
    { name: "Jordan", hint: "Negara dengan Petra, Kota Batu Kuno.", altNames: ["jordania"] },
    { name: "Lebanon", hint: "Negara dengan Gunung Lebanon.", altNames: ["lebanon", "libanon"] },
    { name: "Syria", hint: "Negara dengan Kota Bersejarah Damaskus.", altNames: ["Suriah", "suria"] },
    { name: "Turkey", hint: "Negara dengan Hagia Sophia.", altNames: ["turki", "turkey"] },
    { name: "Yemen", hint: "Negara dengan Terusan Bab-el-Mandeb.", altNames: ["yaman"] },
    { name: "Oman", hint: "Negara dengan Wadi Shab.", altNames: ["oman"] },
    { name: "Qatar", hint: "Negara dengan Doha Corniche.", altNames: ["katar", "qatar"] },
    { name: "Kuwait", hint: "Negara dengan Menara Kuwait.", altNames: ["kuwait"] },
    { name: "Bahrain", hint: "Negara dengan Pulau Bahrain.", altNames: ["bahrain"] },
    { name: "Cyprus", hint: "Negara dengan Pulau Aphrodite.", altNames: ["cyprus"] },
    { name: "Indonesia", hint: "Negara mana yang jumlah provinsinya 38.", altNames: ["indonesia"] },
    { name: "Egypt", hint: "Negara dengan Piramida Giza.", altNames: ["mesir"] },
    { name: "Libya", hint: "Negara dengan Gurun Sahara.", altNames: ["libya"] },
    { name: "Tunisia", hint: "Negara dengan Kota Kuno Carthage.", altNames: ["tunisia"] },
    { name: "Algeria", hint: "Negara dengan Taman Nasional Tassili n'Ajjer.", altNames: ["algeria", "Aljazair"] },
    { name: "Morocco", hint: "Negara dengan Kota Bersejarah Marrakech.", altNames: ["moroco", "maroko"] },
    { name: "Indonesia", hint: "Terletak di Negara manakah Taman Nasional Komodo.", altNames: ["indonesia"] },
    { name: "Sudan", hint: "Negara dengan Sungai Nil.", altNames: ["sudan", "ethiopia", "mesir", "egypt"] },
    { name: "South Sudan", hint: "Negara dengan Gunung Stanley.", altNames: ["Republik Demokratik Kongo", "kongo", "uganda"] },
    { name: "Eritrea", hint: "Negara dengan Kepulauan Dahlak.", altNames: ["Laut Merah"] },
    { name: "Djibouti", hint: "Negara dengan Teluk Tadjoura.", altNames: ["djibouti"] },
    { name: "Somalia", hint: "Negara dengan Gurun Ogaden.", altNames: ["somalia"] },
    { name: "Indonesia", hint: "Yogyakarta Adalah Salah satu Kota yang Terletak di Negara.", altNames: ["indonesia"] },
    { name: "Ethiopia", hint: "Negara dengan Gereja Lalibela.", altNames: ["ethiopia"] },
    { name: "Kenya", hint: "Negara dengan Taman Nasional Masai Mara.", altNames: ["kenya"] },
    { name: "Uganda", hint: "Negara dengan Danau Victoria.", altNames: ["uganda"] },
    { name: "Rwanda", hint: "Negara dengan Populasi Gorila Gunung.", altNames: ["rwanda", "Republik Demokratik Kongo", "kongo", "uganda"] },
    { name: "Burundi", hint: "Negara dengan Danau Tanganyika.", altNames: ["burundi"] },
    { name: "Tanzania", hint: "Negara dengan Gunung Kilimanjaro.", altNames: ["tanzania"] },
    { name: "Mozambique", hint: "Negara dengan Taman Nasional Gorongosa.", altNames: ["Mozambik"] },
    { name: "Brazil", hint: "Negara dengan Flora dan Fauna Endemik Terbanyak.", altNames: ["brasil"] },
    { name: "Zambia", hint: "Negara dengan Air Terjun Victoria.", altNames: ["Zimbabwe"] },
    { name: "Zimbabwe", hint: "Negara dengan Sungai Zambezi.", altNames: ["Zambia"] },
    { name: "Malawi", hint: "Negara dengan Danau Malawi.", altNames: ["malawi"] },
    { name: "Botswana", hint: "Negara dengan Delta Okavango.", altNames: ["botswana"] },
    { name: "Namibia", hint: "Negara dengan Gurun Namib.", altNames: ["namibia"] },
    { name: "South Africa", hint: "Negara dengan Taman Nasional Kruger.", altNames: ["afrika selatan"] },
    { name: "Lesotho", hint: "Negara dengan Kingdom di Dalam Kingdom.", altNames: ["leshoto"] },
    { name: "Swaziland", hint: "Negara dengan Kerajaan Swazi.", altNames: ["eSwatini"] },
    { name: "Ghana", hint: "Negara dengan Benteng Elmina.", altNames: ["gana", "ghana"] },
    { name: "Nigeria", hint: "Negara dengan Sungai Niger.", altNames: ["nigeria"] },
    { name: "Senegal", hint: "Negara dengan Pantai Pink.", altNames: ["senegal"] },
    { name: "Mali", hint: "Negara dengan Kota Bersejarah Timbuktu.", altNames: ["mali"] },
    { name: "Mauritania", hint: "Negara dengan Padang Pasir Sahara.", altNames: ["algeria", "Aljazair", "mesir", "Chad", "Libya", "Mali", "Sudan", "tunisia", "maroko", "maroco", "marocco", "morocco", "niger"] },
    { name: "Cameroon", hint: "Negara dengan Pegunungan Mandara.", altNames: ["kamerun", "cameron", "kameron"] },
    { name: "Chad", hint: "Negara dengan Danau Chad.", altNames: ["chad"] },
    { name: "Niger", hint: "Negara dengan Gurun Tenere.", altNames: ["niger"] },
    { name: "Burkina Faso", hint: "Negara dengan Sabuk Budaya Mossi.", altNames: ["burkinafaso"] },
    { name: "Benin", hint: "Negara dengan Kota Bersejarah Ouidah.", altNames: ["benin"] },
    { name: "Togo", hint: "Negara dengan Gunung Agou.", altNames: ["togo"] },
    { name: "Ivory Coast", hint: "Negara dengan Gunung Nimba.", altNames: ["Côte d'Ivoire", "Pantai Gading"] },
    { name: "Liberia", hint: "Negara dengan Pantai Roberts.", altNames: ["liberia"] },
    { name: "Sierra Leone", hint: "Negara dengan Gunung Bintang.", altNames: ["Republik Sierra Leone"] },
    { name: "Guinea", hint: "Negara dengan Air Terjun Kambadaga.", altNames: ["Republik Guinea"] },
    { name: "Guinea-Bissau", hint: "Negara dengan Orangutan Guinea.", altNames: ["guinea"] },
    { name: "Equatorial Guinea", hint: "Negara dengan Gunung Pico Basile.", altNames: ["Guinea Khatulistiwa"] },
    { name: "Gabon", hint: "Negara dengan Taman Nasional Loango.", altNames: ["gabon"] },
    { name: "Republic of Congo", hint: "Negara dengan Hutan Basang.", altNames: ["kongo"] },
    { name: "Democratic Republic of Congo", hint: "Negara dengan Sungai Kongo.", altNames: ["Republik Demokratik Kongo", "kongo"] },
    { name: "Albania", hint: "Negara dengan Situs Arkeologi Butrint.", altNames: ["albania"] },
    { name: "Andorra", hint: "Negara dengan Pegunungan Pyrenees.", altNames: ["andora"] },
    { name: "Armenia", hint: "Negara dengan Gunung Ararat.", altNames: ["armenia"] },
    { name: "Austria", hint: "Negara dengan Istana Schonbrunn.", altNames: ["austria"] },
    { name: "Azerbaijan", hint: "Negara dengan Flame Towers.", altNames: ["azerbaijan"] },
    { name: "Belarus", hint: "Negara dengan Kastil Mir.", altNames: ["belarus"] },
    { name: "Belgium", hint: "Negara dengan Kuil Grand Place.", altNames: ["belgia"] },
    { name: "Bosnia and Herzegovina", hint: "Negara dengan Jembatan Stari Most.", altNames: ["Bosnia dan Herzegowina", "bosnia"] },
    { name: "Bulgaria", hint: "Negara dengan Biara Rila.", altNames: ["bulgaria"] },
    { name: "Croatia", hint: "Negara dengan Pantai Dubrovnik.", altNames: ["kroasia"] },
    { name: "Czech Republic", hint: "Negara dengan Kastil Praha.", altNames: ["Ceko"] },
    { name: "Denmark", hint: "Negara dengan Patung Little Mermaid.", altNames: ["denmark"] },
    { name: "Estonia", hint: "Negara dengan Kota Tua Tallinn.", altNames: ["estonia"] },
    { name: "Finland", hint: "Negara dengan Desa Santa Claus.", altNames: ["finlandia"] },
    { name: "France", hint: "Negara dengan Menara Eiffel.", altNames: ["perancis", "prancis"] },
    { name: "Georgia", hint: "Negara dengan Biara Jvari.", altNames: ["georgia"] },
    { name: "Germany", hint: "Negara dengan Tembok Berlin.", altNames: ["jerman"] },
    { name: "Greece", hint: "Negara dengan Kuil Parthenon.", altNames: ["yunani"] },
    { name: "Hungary", hint: "Negara dengan Istana Buda.", altNames: ["hungaria"] },
    { name: "Iceland", hint: "Negara dengan Air Terjun Seljalandsfoss.", altNames: ["islandia"] },
    { name: "Ireland", hint: "Negara dengan Klip Moher.", altNames: ["irlandia"] },
    { name: "Italy", hint: "Negara dengan Colosseum.", altNames: ["italia", "itali"] },
    { name: "Latvia", hint: "Negara dengan Kastil Turaida.", altNames: ["latvia"] },
    { name: "Liechtenstein", hint: "Negara dengan Istana Vaduz.", altNames: ["liechtenstein"] },
    { name: "Lithuania", hint: "Negara dengan Kubah Katedral Vilnius.", altNames: ["lituania"] },
    { name: "Luxembourg", hint: "Negara dengan Istana Grand Ducal.", altNames: ["luksemburg"] },
    { name: "Macedonia", hint: "Negara dengan Danau Ohrid.", altNames: ["makedonia", "makedonia utara", "makadonia"] },
    { name: "Malta", hint: "Negara dengan Kuil Megalitik Hagar Qim.", altNames: ["malta"] },
    { name: "Moldova", hint: "Negara dengan Biara Capriana.", altNames: ["moldova"] },
    { name: "Monaco", hint: "Negara dengan Kasino Monte Carlo.", altNames: ["monako"] },
    { name: "Montenegro", hint: "Negara dengan Teluk Kotor.", altNames: ["montenegro"] },
    { name: "Netherlands", hint: "Negara dengan Taman Keukenhof.", altNames: ["belanda"] },
    { name: "Norway", hint: "Negara dengan Fjord Geiranger.", altNames: ["norwegia"] },
    { name: "Poland", hint: "Negara dengan Kamp Konsentrasi Auschwitz.", altNames: ["polandia"] },
    { name: "Portugal", hint: "Negara dengan Menara Belem.", altNames: ["portugal"] },
    { name: "Romania", hint: "Negara dengan Istana Dracula.", altNames: ["romania"] },
    { name: "Russia", hint: "Negara dengan Kremlin Moscow.", altNames: ["rusia"] },
    { name: "San Marino", hint: "Negara dengan Benteng Guaita.", altNames: ["sanmarino"] },
    { name: "Serbia", hint: "Negara dengan Gereja Saborna.", altNames: ["serbia"] },
    { name: "Slovakia", hint: "Negara dengan Kastil Bojnice.", altNames: ["Slowakia"] },
    { name: "Slovenia", hint: "Negara dengan Danau Bled.", altNames: ["slovenia"] },
    { name: "Spain", hint: "Negara dengan Alhambra.", altNames: ["spanyol"] },
    { name: "Sweden", hint: "Negara dengan Istana Drottningholm.", altNames: ["swedia"] },
    { name: "Switzerland", hint: "Negara dengan Matterhorn.", altNames: ["swiss"] },
    { name: "Ukraine", hint: "Negara dengan Biara Lavra Kiev.", altNames: ["ukraina"] },
    { name: "United Kingdom", hint: "Negara dengan Big Ben.", altNames: ["uk", "Britania Raya"] },
    { name: "Vatican City", hint: "Negara dengan Basilika Santo Petrus.", altNames: ["vatican", "vatikan"] },
    { name: "United States", hint: "Negara dengan Liberty Bell.", altNames: ["us", "Amerika Serikat"] },
    { name: "Canada", hint: "Negara dengan Banff National Park.", altNames: ["kanada"] },
    { name: "Mexico", hint: "Negara dengan Piramida Teotihuacan.", altNames: ["meksiko"] },
    { name: "Brazil", hint: "Negara dengan Amazon Rainforest.", altNames: ["brasil"] },
    { name: "Argentina", hint: "Negara dengan Iguazu Falls.", altNames: ["argentina"] },
    { name: "Indonesia", hint: "Candi Borobudur berasal dari Negara", altNames: ["indonesia"] },
    { name: "Chile", hint: "Negara dengan Patagonia.", altNames: ["chili"] },
    { name: "Peru", hint: "Negara dengan Machu Picchu.", altNames: ["peru"] },
    { name: "Colombia", hint: "Negara dengan Kebun Binatang Santa Fe.", altNames: ["kolombia"] },
    { name: "Venezuela", hint: "Negara dengan Salto Angel.", altNames: ["venezuela"] },
    { name: "Ecuador", hint: "Negara dengan Kepulauan Galapagos.", altNames: ["ekuador"] },
    { name: "Indonesia", hint: "Candi Prambanan berasal dari Negara", altNames: ["indonesia"] },
    { name: "Guyana", hint: "Negara dengan Hutan Amazon.", altNames: ["guyana", "Brazil"] },
    { name: "Suriname", hint: "Negara dengan Resor Danau Blanche Marie.", altNames: ["suriname"] },
    { name: "Uruguay", hint: "Negara dengan Kota Bersejarah Colonia del Sacramento.", altNames: ["uruguay"] },
    { name: "Paraguay", hint: "Negara dengan Pantanal.", altNames: ["paraguay"] },
    { name: "Bolivia", hint: "Negara dengan Salar de Uyuni.", altNames: ["bolivia"] },
    { name: "Fiji", hint: "Negara dengan Kepulauan Mamanuca.", altNames: ["fiji"] },
    { name: "Papua New Guinea", hint: "Negara dengan Pulau New Britain.", altNames: ["papua nugini"] },
    { name: "Indonesia", hint: "Ki Hajar Dewantara adalah pahlawan dan bapak pendidikan nasional dari negara.", altNames: ["indonesia"] },
    { name: "Australia", hint: "Negara dengan Great Barrier Reef.", altNames: ["australi"] },
    { name: "New Zealand", hint: "Negara dengan Hobbiton.", altNames: ["selandia baru"] },
    { name: "Samoa", hint: "Negara dengan Gunung Silisili.", altNames: ["samoa"] },
    { name: "Tonga", hint: "Negara dengan Pesisir Coral Tongatapu.", altNames: ["tonga"] },
    { name: "Kiribati", hint: "Negara dengan Gugusan Pulau Gilbert.", altNames: ["karibati"] },
    { name: "Marshall Islands", hint: "Negara dengan Pulau Bikini.", altNames: ["marshall island", "marshal island"] },
    { name: "Nauru", hint: "Negara dengan Sungai Buada.", altNames: ["nauru"] },
    { name: "Indonesia", hint: "Rendang Makanan Khas dari Negara.", altNames: ["indonesia"] },
    { name: "Palau", hint: "Negara dengan Danau Air Asin.", altNames: ["palau", "Turkmenistan", "Kazakhstan", "Rusia", "Azerbaijan", "iran"] },
    { name: "Tuvalu", hint: "Negara dengan Kepulauan Ellice.", altNames: ["tuvalu"] },
    { name: "Vanuatu", hint: "Negara dengan Gunung Yasur.", altNames: ["vanuatu"] },
    { name: "Solomon Islands", hint: "Negara dengan Guadalcanal.", altNames: ["solomon island", "solomon"] },
    { name: "Indonesia", hint: "Tempe Makanan Khas dari Negara.", altNames: ["indonesia"] },
    { name: "Micronesia", hint: "Pulau Yap Terletak di Negara.", altNames: ["micronesia"] },

    // Tambahkan negara-negara lain dengan nama-nama alternatif jika diperlukan
];

let shuffledCountries = []; // Array to store shuffled countries
let currentQuestionIndex = 0;
let score = 0;
let playerName = "";
const numberOfQuestions = 25;

function shuffleArray(array) {
    let shuffled = array.slice(); // Copy the array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled;
}

function startGame() {
    playerName = document.getElementById("playerName").value.trim();
    
    if (playerName === "") {
        alert("Masukkan nama Anda terlebih dahulu!");
        return;
    }
    
    // Shuffle countries if not already shuffled or if all have been used
    if (shuffledCountries.length === 0) {
        shuffledCountries = shuffleArray(countries);
    }
    
    if (currentQuestionIndex < numberOfQuestions) {
        const currentCountry = shuffledCountries[currentQuestionIndex];
        
        const hintElement = document.getElementById("hint");
        hintElement.textContent = currentCountry.hint;
        
        document.getElementById("gameContainer").style.display = "block"; // Display the game container
        document.getElementById("playerName").disabled = true; // Disable input after starting game
        document.getElementById("result").textContent = "";
        document.getElementById("answerInput").value = "";
        
        currentQuestionIndex++;
    } else {
        // Game over
        showGameOver();
    }
}

function showGameOver() {
    document.getElementById("gameContainer").style.display = "none";
    document.getElementById("gameOver").style.display = "block";
    
    const accuracy = (score / numberOfQuestions) * 100;
    const accuracyText = `${playerName}, Anda menjawab ${score} dari ${numberOfQuestions} pertanyaan dengan benar (${accuracy.toFixed(2)}%)`;
    
    document.getElementById("finalScore").textContent = accuracyText;
}

function checkAnswer() {
    const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();
    const correctCountry = shuffledCountries[currentQuestionIndex - 1];

    // Dapatkan nama yang benar dan nama-nama alternatif
    const correctName = correctCountry.name.toLowerCase();
    const altNames = correctCountry.altNames.map(name => name.toLowerCase());

    // Periksa jika jawaban pengguna cocok dengan nama yang benar atau salah satu nama alternatif
    if (userAnswer === correctName || altNames.includes(userAnswer)) {
        score++;
        document.getElementById("result").textContent = `Benar! Skor: ${score}`;
    } else {
        document.getElementById("result").textContent = "Salah. Coba lagi!";
    }
    
    setTimeout(startGame, 1500);
}
// Start the game when the page loads
window.onload = function() {
    document.getElementById("gameContainer").style.display = "none";
    document.getElementById("gameOver").style.display = "none";
};
function restartGame() {
    shuffledCountries = shuffleArray(countries);
    currentQuestionIndex = 0;
    score = 0;
    playerName = "";

    document.getElementById("playerName").value = "";
    document.getElementById("playerName").disabled = false;
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("result").textContent = "";

    startGame();
}

function resetGame() {
    shuffledCountries = [];
    currentQuestionIndex = 0;
    score = 0;
    playerName = "";
    document.getElementById("playerName").value = "";
    document.getElementById("playerName").disabled = false;
    document.getElementById("gameContainer").style.display = "none"; // Hide the game container
    document.getElementById("gameOver").style.display = "none"; // Hide the game over container
}

