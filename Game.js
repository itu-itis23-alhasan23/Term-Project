var letterPositions = []; 
var finder0, finder1, finder2, finder3, finder4; 
function startFunc(){
    var img0 = document.getElementById("img0");
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");
    var img4 = document.getElementById("img4");
    let imgsArray=[img0,img1,img2,img3,img4];
    let svgsArray=["A1_ayham.svg","Y_ayham.svg","H_ayham.svg","A2_ayham.svg","M_ayham.svg"];
    let word="12345";
    let wordArr=word.split("");
    let result=shuffleString(word); 
    for(var i=0;i<word.length;i++)
    {
        var x=wordArr.indexOf(result[i]); 
        if(i==0)
        { 
            img0.src=svgsArray[x]; 
            
            finder0 =result.indexOf("1");
         
           
        }
        else if(i==1)
        {
            img1.src=svgsArray[x];
            finder1 =result.indexOf("2"); 
        }
        else if(i==2)
        {
            img2.src=svgsArray[x]; 
            finder2 =result.indexOf("3");
        }
        else if(i==3)
        {
            img3.src=svgsArray[x]; 
            finder3 =result.indexOf("4");
        }
        else 
        {
            img4.src=svgsArray[x];
            finder4 =result.indexOf("5"); 
        } 
        letterPositions = [finder0, finder1, finder2, finder3, finder4];  
    }
    setTimeout(function() {
        console.log("Hiding images and changing backgrounds");
    
        squares.forEach(square => {
            square.classList.add('black-square');
        });
        imgsArray.forEach(img => {
            img.style.visibility = 'hidden';
        });
    }, 2000);
}
       

function shuffleString(str) {
    const arr = str.split(''); 
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }
    return arr.join(''); 
} 

var squares = document.querySelectorAll(".square");

    function squareClickHandler(event) { 
        var squareId1 = event.target.id;
        
        
        }
    

var currentScore = 0;
var currentLetterIndex = 0;
var nameOrder = ['A1', 'Y', 'H', 'A2', 'M'];
var squares = document.querySelectorAll(".square");
var imgsArray = document.querySelectorAll(".text-display");

function checkCard(clickedSquareIndex, square) {
    console.log("Clicked index:", clickedSquareIndex, "Current letter index:", currentLetterIndex, "Letter position:", letterPositions[currentLetterIndex]);
    if (letterPositions[currentLetterIndex] == clickedSquareIndex) {
        
        currentScore += 20;
        document.getElementById("score").innerText = "Score: " + currentScore;

        
        imgsArray[clickedSquareIndex].style.visibility = 'visible';
        square.classList.remove('black-square');

        currentLetterIndex++;

        if (currentLetterIndex >= nameOrder.length) {
            alert("Game Won! Your score: " + currentScore);
            location.reload();
            
        }
    } else {
        alert("Game Over! Wrong sequence.");
        location.reload(); 
    }
}

squares.forEach(function(square, index) {
    square.addEventListener("click", function() {
        if (square.classList.contains('black-square')) {
            checkCard(index, square);
        }
    });
});



var restartButton = document.getElementById("Restart");
restartButton.addEventListener("click", function() {
    location.reload();
});