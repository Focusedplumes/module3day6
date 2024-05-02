import prompts from 'prompts';

let todoList =[];

const main = async () => { //defined main as an async function
  const todoMenu = async() => {
    return await prompts({ //told it to wait
      type: 'select',
      name: 'value',
      message: 'What action to perform?',
      choices: [
        {title: 'Show todo list', value: 'S'},
        {title: 'Add todo list', value: 'A'},
        {title: 'Delete a todo list item', value: 'D'},
        {title: 'Quit todo list', value: 'Q'},
      ], 
    });
  };

const addTodo = async() => {
  return await prompts({
    type: 'text',
    name: 'value',
    message: 'What is your new todo item?'
  });
};

  // let message = await nextToDo();
  // console.log(message);
 
 const showTodo = () => {
  console.log('=================================');
    todoList.forEach((x) => console.log(x.value));
  console.log('=================================');
 };

 let option = {};
do{
  option = await todoMenu();
  switch (option.value){
     case 'S':
       showTodo();
       break;
     case 'A':
        todoList.push(await addTodo());
        break;
   }
  }while(option.value != 'Q');
};
   
main().catch(console.error); //then to make sure to catch any errors
