// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskdescriptions = [];

// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// function newTask(title) {
//   taskTitles.push(title);
//   taskDescriptions.push(description);
//   taskComplete.push(false);

// }

const newTask = (title, description) => {
  const task = {
    title: title,
    //task: task,
    description: description,
    complete: false,

    logState: function(){
      console.log(`Let's forgot the compass for 5 seconds, then, we will back to ${this.title} if ${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }

    // celebrateFriday: function() {
    //   console.log(`Let's forgot the compass for 5 seconds, then, we will back to ${this.title} once `);
    // }
  };
  return task;
}

const task1 = newTask("beat monsters/nail the core works", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const task3 = newTask("Core works", " Drink wine");
//const tasks = [task1, task2];
const tasks = [task1, task3];

// console.log(tasks);
task1.logState();
task1.markCompleted();
task1.logState();
//task1.celebrateFriday();

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// // DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
