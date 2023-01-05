a = {
  question: "MS word is software of ____",
  answer: ["Apple", "Android", "Google", "Microsoft"], 
  correctAns: "Microsoft",
  };
  b = {
    question: "Which is the word processing software?",
    answer: ["Avast", "MS word 2007", "Google Chrome ", "Mozilla Firefox"],
    correctAns: "MS word 2007",
  };
  c = {
    question: "MS Word is ____ software.    ",
   
    answer: [
      "Web browser",
      "Word processing",
      "Operating system",
      "Antivirus",],
 correctAns: "Word processing",

  };
  d = {
    question: "The valid format of MS Word is __",
     
    answer: [".exe", ".doc", ".png", " .jpeg"], 
      correctAns: ".doc",
  };
  e = {
    question: "What program is used in MS-Word to check the spelling?",
    answer: ["Research", "Word Count", "Set language", "Spelling & Grammar"],
    correctAns: "Spelling & Grammar",
  };
  f = {
    question: "A word gets selected by clicking it",
   
    answer: [" Once", "Twice", "Three times", "Four times"],
     correctAns: "Twice",
  };
  g = {
    question: "The center the selected text, the shortcut key is",
    
    answer: ["Ctrl + C", "Ctrl + E", " Ctrl + U", "Ctrl + O"],
    correctAns: "Ctrl + E",
  };
  h = {
    question: "Which option is not available in Microsoft office button?",
   
    answer: ["Bold", "New", "Save", "Open"], 
    correctAns: "Bold",
  };
  i = {
    question:
    "_____ is the change the way text warps around the selected object.",
  
  answer: ["Text wrapping", "Indent", "Clipart", " Line spacing"],
  correctAns: "Text wrapping",
  };
  j = {
    question: "A major step before taking print of the document is",
    
    answer: [
      "To save the document",
      "To set paper setting",
      "To see print preview of the document",
      "Both b and c",],
      correctAns: "Both b and c",
  };
  
  var arr = [a, b, c, d, e, f, g, j, i, j];
  var question = document.getElementById("question");
  var currentQuestionNumber = document.getElementById("currentQuestionNumber");
  var totalQuestionQuantity = document.getElementById("totalQuestionQuantity");
  var optionsParent = document.getElementById("optionsParent");
  var resultParent = document.getElementById("resultParent");
  var resultProgress = document.getElementById("resultProgress");
  var resultText = document.getElementById("resultText");
  var ind = 0;
  var score = 0;
  
  function displayQuestion() {
    optionsParent.innerHTML = "";
    question.innerHTML = arr[ind].question;
    currentQuestionNumber.innerHTML = ind + 1;
    totalQuestionQuantity.innerHTML = arr.length;
    for (var i = 0; i < arr[ind].answer.length; i++) {
      optionsParent.innerHTML += `<div class="col-md-6 py-3">
      <button onclick="checkAnswer('${arr[ind].answer[i]}')" class="btn px-5  rounded-pill btn-light">${arr[ind].answer[i]}</button>
  </div>`;
    }
  }
  displayQuestion();
  function nextQuestion() {
    ind++;
    displayQuestion();
  }
  
  function checkAnswer(e) {
    var userAnswer = e;
    var correctAnswer = arr[ind].correctAns;
    if (userAnswer == correctAnswer) {
      score++;
      console.log(score, "score");
    }
    if (ind + 1 == arr.length) {
      displayResult();
    } else {
      nextQuestion();
    }
  }
  
  function displayResult() {
    resultParent.style.display = "block";
    resultProgress.max = arr.length;
    resultProgress.value = score;
    optionsParent.style.display = "none";
    question.style.display = "none";
    var resultPercentage = (score / arr.length) * 100;
    resultText.innerHTML = resultPercentage + "%";
    if (resultPercentage < 50) {
      resultText.className += " text-danger";
    } else {
      resultText.className += " text-success";
    }
  }