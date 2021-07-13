
$(document).ready(start);
var timeblocks = $('textarea').get();
var date;
var noteIdArray = [];

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    currentEle = $(this);
    storage("save",currentEle);
});

function start() {
    date = moment().format("MMM Do YY");
            //code
            $('#date').html(`<h2>${date}</h2>`);
            storage("fetch");

}

function storage(action, element) {
    var index = 0;
    
    switch(action){
        //case save saves the notes and puts it into the localstorage
        case "save":
            var textArea = $(element).siblings("textarea");
            var notes = textArea.val();

            var id = textArea.attr("id");
            //var rowHourActive = $(this).siblings("textarea").data("number");
            window.localStorage.setItem(id, notes);

            console.log(id+"id");
            console.log(notes+"notes");

            //$(id).attr('saved','true')
           
          
         break;
        
         case "fetch": //case fetch retrieves the info from local storage and 

            for (var i = 0; i < 9; i++) {
                noteIdArray[i] = $("textarea[data-index='" + i +"']").attr('id');
                console.log(noteIdArray[i]+"<<idarray");
                console.log(i+"<<i for index");
            }
            var id = "";
            //noteIdArray = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];
            for (var i = 0; i < noteIdArray.length; i++ ) {
                id = noteIDArray[i];
                if (localStorage.getItem(id)) {
                    $(id).value = localStorage.getItem(id);
                    console.log(localStorage.getItem(id));
                }
                
            }
            

        break;
    }
}

function getData(){
    for (var j = 0; j < localStorage.length; j++) {
      var keyNumbers = localStorage.key(j);
      timeblocks.forEach(function(item) {
        if (item.dataset.number == keyNumbers) {
        item.value = localStorage.getItem(keyNumbers)
        }
      })   
    }
}

/*

var today = moment().format("dddd [|] LL [| Week] W");

// you can also use $("#currentDay").append(today); OR document.getElementById("currentDay").textContent = today;
$("#currentDay").text(today);

// moment.js
var now = new Date().getHours();

var timeblocks = Array.from(document.getElementsByTagName('textarea'));
console.log(timeblocks);

function getData(){
    for (var j = 0; j < localStorage.length; j++) {
      var keyNumbers = localStorage.key(j);
      timeblocks.forEach(function(item) {
        if (item.dataset.number == keyNumbers) {
        item.value = localStorage.getItem(keyNumbers)
        }
      })   
    }
}

getData();

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var notes = $(this).siblings("textarea").val();
    var rowHourActive = $(this).siblings("textarea").data("number");
    window.localStorage.setItem(rowHourActive, notes);
    
});

// you can also use: var timeblocks = [].slice.call(timeblocksHTML);


function statusTimeblock(){
    for (var i=0; i<timeblocks.length; i++) {
        var singleT = timeblocks[i];
        if (singleT.dataset.number == now) {
            singleT.classList.add("present");
        }
        if (singleT.dataset.number < now) {
            singleT.classList.add("past");
        }
        if (singleT.dataset.number > now) {
            singleT.classList.add("future");
        }  
    }  
}
statusTimeblock();
*/
