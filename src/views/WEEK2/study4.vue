<template>
  <my-container>
    <my-title
      title1="Task List Generator"
      title2="In this section, you'll learn how to dynamically generate a list of tasks using JavaScript and Vue.js, and implement features such as adding tasks, marking them as complete, and more."
    ></my-title>
    <study-content>
      <h2>Introduction to the Task List application</h2>
      <p>
        In our daily life, we often need to manage various tasks. With this project, you will learn how to create a simple task management application that can add tasks, mark tasks as completed or 
        uncompleted, and dynamically update the task list. This project will help you understand basic data binding, event handling and dynamic DOM manipulation in Vue.js.
      </p>

      <code-item>
        <template #code>&lt;input v-model="newTask" placeholder="Enter a description of the task"&gt;&lt;/input&gt;</template>
        <template #item>
          In Vue.js, two-way binding of form elements to component data is possible using v-model. This means that the value entered by the user in the input box will be automatically updated into the `newTask` variable and vice versa.
        </template>
      </code-item>

      <p>
        Next, we add tasks to the task list. By clicking the `Add Task` button, the `addTask` method is called, adding the new task to the `tasks` array and updating the task list in real time.
      </p>

      <code-item>
        <template #code>@click="addTask"</template>
        <template #item>
          Using the `@click` directive, we can bind a click event handler. In this example, clicking the button triggers the `addTask` method, which adds the currently entered task to the list.
        </template>
      </code-item>

      <p>
        Once a task has been added, we can mark it as complete or not by using the buttons next to each task in the task list. We use the `toggleTask` method to toggle the task's completion status.
      </p>

      <code-item>
        <template #code>v-for="(task, index) in tasks" :key="index"</template>
        <template #item>
          Using the `v-for` directive, we can iterate through the `tasks` array and generate a corresponding DOM element for each task. By binding a unique identifier to `:key`, Vue.js can efficiently track and update each element in the list.
        </template>
      </code-item>

      <h2>code example</h2>
      <p>
        Below are complete code samples showing how to implement a dynamic task management application with Vue.js. You can try running the code and tweak it as needed to further understand the data binding and event handling mechanisms of Vue.js.
      </p>

      <my-demo>
        <template #code>
          <demo-code
            type="HTML"
            code='
<div id="app">
  <input v-model="newTask" type="text" placeholder="Enter task description">
  <button @click="addTask">Add Task</button>
  
  <h2>Tasks:</h2>
  <div v-for="(task, index) in tasks" :key="index" class="task">
    <span :class="{ completed: task.completed }">{{ task.description }}</span>
    <button @click="toggleTask(index)">
      {{ task.completed ? "Undo" : "Complete" }}
    </button>
  </div>
</div>
              '
          ></demo-code>
          <demo-code
            type="JS"
            code='
export default {
  data() {
    return {
      newTask: "",
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ description: this.newTask.trim(), completed: false });
        this.newTask = ""; 
      } else {
        alert("Task description cannot be empty.");
      }
    },
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    }
  }
};
              '
          ></demo-code>
        </template>
      </my-demo>

      <h2>Example of task list application</h2>
      <p>
        Below is a sample image of the actual effect of the Task List application, showing how to use this component for task management.
      </p>
      <img src="@/assets/week2/task-list-example.png" alt="Example of task list application" />

      <h2>Examples of interactions</h2>
      <p>
        You can see for yourself how to dynamically add tasks and mark them with a completion status in the task list builder below. Give it a try and see how Vue.js handles these operations in real-time!
      </p>

      <!-- 交互式任务清单生成器 -->
      <div class="task-list-generator">
        <input v-model="newTask" type="text" placeholder="Enter a description of the task" />
        <button @click="addTask">Add Tasks</button>

        <h2>Task List:</h2>
        <div v-for="(task, index) in tasks" :key="index" class="task">
          <span :class="{ completed: task.completed }">{{ task.description }}</span>
          <button @click="toggleTask(index)">
            {{ task.completed ? "undo " : "complete" }}
          </button>
        </div>
      </div>

    </study-content>

    <my-footer week="2" num="4"></my-footer>
  </my-container>
</template>

<script>
import MyFooter from '@/components/MyFooter.vue';
import MyTitle from '@/components/MyTitle.vue';
import MyContainer from '@/components/MyContainer.vue';
import StudyContent from '@/components/StudyContent.vue';
import codeItem from '@/components/codeItem.vue';
import mydemo from '@/components/demo.vue';
import demoCode from '@/components/demoCode.vue';

export default {
  components: {
    'my-title': MyTitle,
    'my-footer': MyFooter,
    'my-container': MyContainer,
    'study-content': StudyContent,
    'code-item': codeItem,
    'my-demo': mydemo,
    'demo-code': demoCode,
  },
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ description: this.newTask.trim(), completed: false });
        this.newTask = ''; // Clear the input box
      } else {
        alert('The task description cannot be empty.');
      }
    },
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    }
  }
};
</script>

<style scoped>
.task-list-generator {
  margin-top: 20px;
}

input[type="text"] {
  padding: 10px;
  font-size: 16px;
  width: 300px;
  margin-right: 10px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.task {
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.completed {
  text-decoration: line-through;
  color: grey;
}
</style>
