$(document).ready(onReady);

let fungusHP = 100;
let apCost = 100;
// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    
$(`.attack-btn`).on('click' , attack)
console.log(`Attack when weapon button is clicked` , attack);
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
function attack () {
        if($(this).hasClass("arcane-sceptre")) {
            (apCost > 12)
                apCost -= 12
                fungusHP -= 14
                if (apCost <0 ){
                    apCost = 0;
            }
        } else if($(this).hasClass("entangle")){
        apCost -=23
        fungusHP -=9
        if (apCost <0  ){
            apCost = 0;
        }
        
    } else if ($(this).hasClass("dragon-blade")){
            apCost -= 38
            fungusHP -= 47
        if (apCost <0 ){
            apCost = 0;
        }
        }  else if ($(this).hasClass("star-fire")){
            apCost -= 33
            fungusHP -=25
            if (apCost <0 ){
                apCost = 0;
        }   } else {
            console.log("this isnt working");
    
        }
       
    render ();
        }
        }

function render (){
    $('#hp-meter').val(fungusHP)
    console.log('Decrease the HP damage of Fungus' , fungusHP);
    $( ".attack-btn:disabled" ).val( "Cannot Use" );
    console.log('Button No Good after AP is gone');
    $('#ap-meter').val(apCost)
    console.log('Decrease the AP Cost Bar', apCost);
    $('.hp-text').text(fungusHP)
    console.log("Decrease the Fungus HP text from 100" , fungusHP);
    $('.ap-text').text(apCost)
    console.log('Decrease the text above the AP bar', apCost);
   if (fungusHP <= 0){
    $(".freaky-fungus.walk").removeClass("walk").addClass("dead");
   } else if (apCost <= 0 ){
    $(".freaky-fungus.walk").removeClass("walk").addClass("jump");
}
 if (apCost === 0){
        $(".attack-btn").attr("disabled",true);
        console.log('disable attack button if APCost =0' , apCost);
    }
   if (apCost <= 12) {
    $(".arcane-sceptre").attr("disabled",true);
}
else if (apCost <= 38) {
    $("dragon-blade").attr("disabled",true);
}
else if (apCost <= 23 ) {
    $("entangle").attr("disabled",true); 
}
else if (apCost <= 33 ){
    $("star-fire").attr("disabled",true);
}
if (fungusHP <=0) {
    $('.freaky-fungus.walk').removeClass("walk").addClass("dead");
}
else if (apCost < 12 ) {
    $('.freaky-fungus.walk').removeClass("walk").addClass("jump");

}
}


