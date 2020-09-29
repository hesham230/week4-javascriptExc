const input = require('readline-sync');
let menu = ['add item', 'delete item', 'mark as done', 'unmark as done',],
index = input.keyInSelect(menu, 'select what would you want to do'),
todo = [
  {
    task: 'Learn Javascript',
    isDone: true 
  },
  {
  task: 'Laern React',
  isDone: false 
  },
]



const add = (list) => {
    let todo = input.question("add item: ");
    list.push({
        task: todo,
        isDone: false
    });
    console.log(list);
}

const deleteItem = (list) => {
    console.log(list);
    let todo = input.question("which item you want to delete? ");
    console.log(todo);
    list.splice(todo,1);
    console.log(list);
}

const markDone = (list) => {
    console.log(list);
    let todo = input.question("which task you want to mark as done? ");
    list[todo-1].isDone=true;
    console.log(list);
}

const unmarkDone = (list) => {
    console.log(list);
    let todo = input.question("which task you want to mark as unDone? ");
    if(list[todo-1].isDone==true){
        list.isDone==false;
        console.log('Task '+ todo + ' is marked as unDone');
    }else{
       console.log('The task wasn\'t marked as done');
   }
   console.log(list);
}

switch(index){
    case 0:
        add(todo);
        break;
    case 1:
        deleteItem(todo,index);
        break;
    case 2:
        markDone(todo);
        break;
    case 3:
        unmarkDone(todo);
        break;
    default:
        break;
}