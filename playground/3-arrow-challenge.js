const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        return this.tasks.filter(x=>!x.completed);
            // .forEach((task) => {
            //     console.log(task.text + " is not completed! ")
            // }, this);
    }
}
 
console.log(tasks.getTasksToDo())