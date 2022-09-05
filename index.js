var Doc = document.getElementById("Text")
var Words = document.getElementById("NumWords")
var WordCount = 3;
const Copy = document.getElementById("Copy")
Words.addEventListener("change", () => {
  WordCount = Words.value
})

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                Doc.innerText = allText.split(" ").slice(0, WordCount).join(" ")
            }
        }
    }
    rawFile.send(null);
}

function previewFile(){
  readTextFile("file.txt");
  console.log(WordCount)
}

Copy.addEventListener("click", () => {
  navigator.clipboard.writeText(Doc.innerText).then(function() {
   Copy.innerHTML = `<i class="bi bi-clipboard-check"></i>`
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
})