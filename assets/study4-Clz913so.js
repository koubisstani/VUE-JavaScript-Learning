import{a as v,M as b,S as x}from"./StudyContent-DmgqnPrB.js";import{M as V}from"./MyTitle-BnWlqeve.js";import{c as j}from"./codeItem-BKQqYzK7.js";import{_ as C,a as M}from"./demoCode-Ct16FRVs.js";import{_,f as o,o as p,c as B,w as n,b as s,a as e,d as i,e as E,v as I,g as c,h as L,F as D,j as S,t as h}from"./index-NwAmraC0.js";const U="/VUE-JavaScript-Learning/assets/task-list-example-DDcxXkFw.png",F={components:{"my-title":V,"my-footer":v,"my-container":b,"study-content":x,"code-item":j,"my-demo":C,"demo-code":M},data(){return{newTask:"",tasks:[]}},methods:{addTask(){this.newTask.trim()?(this.tasks.push({description:this.newTask.trim(),completed:!1}),this.newTask=""):alert("The task description cannot be empty.")},toggleTask(l){this.tasks[l].completed=!this.tasks[l].completed}}},N={class:"task-list-generator"},A=["onClick"];function J(l,t,O,G,d,r){const y=o("my-title"),m=o("code-item"),k=o("demo-code"),f=o("my-demo"),g=o("study-content"),w=o("my-footer"),T=o("my-container");return p(),B(T,null,{default:n(()=>[s(y,{title1:"Task List Generator",title2:"In this section, you'll learn how to dynamically generate a list of tasks using JavaScript and Vue.js, and implement features such as adding tasks, marking them as complete, and more."}),s(g,null,{default:n(()=>[t[9]||(t[9]=e("h2",null,"Introduction to the Task List application",-1)),t[10]||(t[10]=e("p",null," In our daily life, we often need to manage various tasks. With this project, you will learn how to create a simple task management application that can add tasks, mark tasks as completed or uncompleted, and dynamically update the task list. This project will help you understand basic data binding, event handling and dynamic DOM manipulation in Vue.js. ",-1)),s(m,null,{code:n(()=>t[2]||(t[2]=[i('<input v-model="newTask" placeholder="Enter a description of the task"></input>')])),item:n(()=>t[3]||(t[3]=[i(" In Vue.js, two-way binding of form elements to component data is possible using v-model. This means that the value entered by the user in the input box will be automatically updated into the `newTask` variable and vice versa. ")])),_:1}),t[11]||(t[11]=e("p",null," Next, we add tasks to the task list. By clicking the `Add Task` button, the `addTask` method is called, adding the new task to the `tasks` array and updating the task list in real time. ",-1)),s(m,null,{code:n(()=>t[4]||(t[4]=[i('@click="addTask"')])),item:n(()=>t[5]||(t[5]=[i(" Using the `@click` directive, we can bind a click event handler. In this example, clicking the button triggers the `addTask` method, which adds the currently entered task to the list. ")])),_:1}),t[12]||(t[12]=e("p",null," Once a task has been added, we can mark it as complete or not by using the buttons next to each task in the task list. We use the `toggleTask` method to toggle the task's completion status. ",-1)),s(m,null,{code:n(()=>t[6]||(t[6]=[i('v-for="(task, index) in tasks" :key="index"')])),item:n(()=>t[7]||(t[7]=[i(" Using the `v-for` directive, we can iterate through the `tasks` array and generate a corresponding DOM element for each task. By binding a unique identifier to `:key`, Vue.js can efficiently track and update each element in the list. ")])),_:1}),t[13]||(t[13]=e("h2",null,"code example",-1)),t[14]||(t[14]=e("p",null," Below are complete code samples showing how to implement a dynamic task management application with Vue.js. You can try running the code and tweak it as needed to further understand the data binding and event handling mechanisms of Vue.js. ",-1)),s(f,null,{code:n(()=>[s(k,{type:"HTML",code:`\r
<div id="app">\r
  <input v-model="newTask" type="text" placeholder="Enter task description">\r
  <button @click="addTask">Add Task</button>\r
  \r
  <h2>Tasks:</h2>\r
  <div v-for="(task, index) in tasks" :key="index" class="task">\r
    <span :class="{ completed: task.completed }">{{ task.description }}</span>\r
    <button @click="toggleTask(index)">\r
      {{ task.completed ? "Undo" : "Complete" }}\r
    </button>\r
  </div>\r
</div>\r
              `}),s(k,{type:"JS",code:`\r
export default {\r
  data() {\r
    return {\r
      newTask: "",\r
      tasks: []\r
    };\r
  },\r
  methods: {\r
    addTask() {\r
      if (this.newTask.trim()) {\r
        this.tasks.push({ description: this.newTask.trim(), completed: false });\r
        this.newTask = ""; \r
      } else {\r
        alert("Task description cannot be empty.");\r
      }\r
    },\r
    toggleTask(index) {\r
      this.tasks[index].completed = !this.tasks[index].completed;\r
    }\r
  }\r
};\r
              `})]),_:1}),t[15]||(t[15]=e("h2",null,"Example of task list application",-1)),t[16]||(t[16]=e("p",null," Below is a sample image of the actual effect of the Task List application, showing how to use this component for task management. ",-1)),t[17]||(t[17]=e("img",{src:U,alt:"Example of task list application"},null,-1)),t[18]||(t[18]=e("h2",null,"Examples of interactions",-1)),t[19]||(t[19]=e("p",null," You can see for yourself how to dynamically add tasks and mark them with a completion status in the task list builder below. Give it a try and see how Vue.js handles these operations in real-time! ",-1)),e("div",N,[E(e("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>d.newTask=a),type:"text",placeholder:"Enter a description of the task"},null,512),[[I,d.newTask]]),e("button",{onClick:t[1]||(t[1]=(...a)=>r.addTask&&r.addTask(...a))},"Add Tasks"),t[8]||(t[8]=e("h2",null,"Task List:",-1)),(p(!0),c(D,null,L(d.tasks,(a,u)=>(p(),c("div",{key:u,class:"task"},[e("span",{class:S({completed:a.completed})},h(a.description),3),e("button",{onClick:W=>r.toggleTask(u)},h(a.completed?"undo ":"complete"),9,A)]))),128))])]),_:1}),s(w,{week:"2",num:"4"})]),_:1})}const $=_(F,[["render",J],["__scopeId","data-v-1f3e7daa"]]);export{$ as default};
