$(document).ready(start);
var textAreaArray = $('textarea').get();
var date;
var noteIdArray = [];
var time = new Date().getHours();
//var textAreaArray = document.getElementsByTagName("textarea");

/**
 * runs when page initially loads loads all info and runs moment.js
 */
function start() {
    date = moment().format('MMMM Do YYYY, h:mm:ss a');
            //code
            $('#date').html(`<h2>${date}</h2>`);
            time = 10;
            renderColor();
            storage("fetch");
}
/**
 * either add's or retrieves data from storage, both options are run as a single command
 */
function storage(action, element) {
    var index = 0;
    
    switch(action){
        //case save saves the notes and puts it into the localstorage
        case "save":
            var textArea = $(element).siblings("textarea");
            var notes = textArea.val();
            var id = textArea.attr("id");
            window.localStorage.setItem(id, notes);

            console.log(id+"id");
            console.log(notes+"notes");     
         break;
        
         case "fetch": //case fetch retrieves the info from local storage and 
            var id;
            var array;
            var eleAttr;

            for (var i = 0; i < 9; i++) {
                var ele = $("textarea[data-index='" + i +"']");
                noteIdArray[i] = $("textarea[data-index='" + i +"']").attr('id');
                eleAttr = $("textarea[data-index='" + i +"']").attr('data-militaryTime');
                renderColor(ele, eleAttr); //chooses the color while retriving info from the localstorage
                id = noteIdArray[i];
                
                if (localStorage.getItem(id)) {
                    $("textarea[data-index='" + i +"']").text(localStorage.getItem(id)); //loads text into element
                    
                }
            }

        break;
    }
}

/**
 * 
 * @param {target element that we will manipulate} ele 
 * @param {this is the ele data-militaryTime attribute} eleAttr 
 */
function renderColor(ele, eleAttr){
    if (eleAttr == time) {
        ele.addClass("present");
    }
    if (eleAttr < time) {
        ele.addClass("past");
    }
    if (eleAttr > time) {
        ele.addClass("future");
    }  
    
}

/**
 * event listener for button
 */
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    currentEle = $(this);
    storage("save",currentEle);
});


