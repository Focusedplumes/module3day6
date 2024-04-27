const prompts = require('prompts');

const main = async () => { //defined main as an async function
  const nextToDo = async() => {
    return await prompts({ //told it to wait
      type: 'text',
      name: 'value',
      message: 'What is your next todo item?',
    });
  
   };

  let message = await nextToDo();
  console.log(message);
};

main().catch(console.error); //then to make sure to catch any errors
