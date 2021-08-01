menu_list_array = ["Veg Margherita Pizza",
"Veg Panner Pizza",
 "Veg double Cheese and corn Pizza", 
  "Farm House",
   "Mexican Green Wave",
   "Veg Extravaganza" ];

function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
       
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
         menu_list_array.sort();
         console.log("menu_list_array");

        htmldata;
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
