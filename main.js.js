const prompt = require('prompt-sync')({sigint: true});

 console.log('Welcome to the To-Do List Manager Application!\n----------------------------------------------------');


 //actions for ui
 console.log('~Select an action~');
 console.log('[1] Create a to-do item');
 console.log('[2] Complete a to-do item');
 console.log('[3] Exit To-Do List Application');
 
//prompt for user
 let option = Number(prompt('> '));
//empty array
 let toDoList = [];
 let statusArray = []
 //while loop, for to do list ending only when user enters '3' to exit
 while(option !== 3){
//if statement for users choices 
    if (option === 1){
        //if user chooses option 1, log creation message, and asks user what task needs to be done
  
console.log('~ Creating a new to-do item ~');
​
console.log('What is this To-Do item called?');
   
    //add to do item , using a new prompt variable
        let addItem = prompt('> ');
      //if user doesnt enter anything while loop will re prompt user until user enters To-Do item  
        while(addItem.length === 0){
            console.log('Invalid: Input cannot be empty')
            addItem = prompt('> ');
        }
      //  to-do item gets pushed to end of to-do list  array  
        toDoList.push(addItem);
    // status array assigns false , for incomplete to match index of item in to do list array
        statusArray.push(false);
​
    //displaying  toDoList function
      displayList();
    
        
    //reprompt the user
       selectOption();
   //if user chooses option , user can complete option
    }else if (option === 2){
​
    //if list length is greater than zero, user gets prompted for the item to complete
    if(toDoList.length !== 0){
        console.log("\nCompleting a to-do item")
        console.log("Which to-do item would you like to complete?")
        
    displayList();}
    //complete an item
​
       
    //change items from incomplete to complete
    let newStatus = Number(prompt('> '));
​

    while(isNaN((newStatus)) || newStatus > statusArray.length || newStatus < 1 ){
    console.log('Please input a number that corresponds to an item in the list: ')
    newStatus = Number(prompt('> '));
​
        }
    
​
        statusArray[newStatus-1] = true;
​
       
    //complete an item
        displayList()
    //reprompt user 
        selectOption()
    }else {
    console.log('Invalid operation');
     
    selectOption()
    }
    
}
​   //exit app
 console.log("Exiting To-Do list Application")
​
 
 //functions

function selectOption(){
    console.log("\nSelect an action");
    console.log("[1] Create a to-do item");
    console.log("[2] Complete a to-do item");
    console.log("[3} Exit To-Do List Application");
    
    option = Number(prompt("> "));
 }
​
 function displayList(){
    if(toDoList.length === 0){
        console.log("Your to-do list is empty.")
    }else{
        console.log("You have ${toDoList.length} item(s)")
    }
    for (let i = 0; i< toDoList.length; i++){
        let status = '';
​
        if (statusArray[i]=== false){
            status = "[incomplete]";
        } else if (statusArray[i]=== true){
            status = "[complete]";
        }
​
        console.log("${i+1}. ${status} ${toDoList[i]}");
    }
}

​