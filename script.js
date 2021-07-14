
$(document).ready(start);
var textAreaArray = $('textarea').get();
var date;
var noteIdArray = [];
var time = new Date().getHours();
//var textAreaArray = document.getElementsByTagName("textarea");

function start() {
    date = moment().format('MMMM Do YYYY, h:mm:ss a');
            //code
            $('#date').html(`<h2>${date}</h2>`);
            time = 10;
            renderColor();
            storage("fetch");

}
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    currentEle = $(this);
    storage("save",currentEle);
});

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
            var id;
            var array;
            var eleAttr;

            for (var i = 0; i < 9; i++) {
                var ele = $("textarea[data-index='" + i +"']");
                noteIdArray[i] = $("textarea[data-index='" + i +"']").attr('id');
                eleAttr = $("textarea[data-index='" + i +"']").attr('data-militaryTime');

                renderColor(ele, eleAttr);


                console.log(">>>>>>eleATTR>>>>>"+eleAttr+">>>>time>>>>"+time);
                //array = $("textarea[data-militaryTime]);
                console.log(noteIdArray[i]+"<<idarray");
                console.log(i+"<<i for index");
                //getAttribute('data-type')

                id = noteIdArray[i];
                
                if (localStorage.getItem(id)) {
                    $("textarea[data-index='" + i +"']").text(localStorage.getItem(id));
                    
                    console.log(localStorage.getItem(id)+"<<-======localstoragegetitem");
                    
                }
            }


        break;
    }
}

function getData(){
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      textAreaArray.forEach(function(ele) {
        if (ele.dataset.number == key) {
            ele.value = localStorage.getItem(key)
        }
      })   
    }
}


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


