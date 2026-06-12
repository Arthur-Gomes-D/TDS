let tarefas = ["estudar"]
tarefas.push("lavar roupa", "descansar")
tarefas.unshift("trabalhar")
console.log(tarefas.find(tarefa => tarefa == "estudar"));
console.log(tarefas.indexOf("estudar"));
console.log(tarefas.splice(-1,1));
tarefas.forEach(tarefa => console.log(tarefa))
