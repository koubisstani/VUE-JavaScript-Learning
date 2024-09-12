import{M as S,a as R,S as B}from"./StudyContent-DmgqnPrB.js";import{c as m}from"./codeItem-BKQqYzK7.js";import{M as A}from"./MyTitle-BnWlqeve.js";import{_ as M,a as y}from"./demoCode-Ct16FRVs.js";import{_ as E,n as F,f as k,o as L,c as q,w as r,a as i,b as a,d as l}from"./index-NwAmraC0.js";const D={class:"choices"},J={components:{"my-title":A,"my-footer":R,"my-container":S,"study-content":B,"code-item":m,"my-demo":M,"demo-code":y}},j=Object.assign(J,{__name:"study1new",setup(O){return F(()=>{const o=document.getElementById("robotCanvas"),t=o.getContext("2d");let n=o.width/2,e=o.height/2,s=2,p=20,I,v=!1,d=!0,u=!1,c=!1,h=!1;function x(){if(d||c){t.clearRect(0,0,o.width,o.height);let w=n;var g=e,f=20,b=0,T=Math.PI*2;t.arc(w,g,f,b,T,0),t.fillStyle="purple",t.fill(),t.beginPath(),t.moveTo(n-15,e-17),t.lineTo(n+15,e-17),t.lineTo(n+15,e-7),t.lineTo(n-15,e-7),t.closePath(),t.fillStyle="black",t.fill(),t.beginPath(),t.moveTo(n-15,e+7),t.lineTo(n+15,e+7),t.lineTo(n+15,e+17),t.lineTo(n-15,e+17),t.closePath(),t.fillStyle="black",t.fill(),t.beginPath(),t.moveTo(n-1,e-17),t.lineTo(n+1,e-17),t.lineTo(n+1,e+17),t.lineTo(n-1,e+17),t.closePath(),t.fillStyle="black",t.fill()}else{t.clearRect(0,0,o.width,o.height);let w=n;var g=e,f=20,b=0,T=Math.PI*2;t.arc(w,g,f,b,T,0),t.fillStyle="purple",t.fill(),t.beginPath(),t.moveTo(n-15,e-17),t.lineTo(n-4,e-17),t.lineTo(n-4,e+17),t.lineTo(n-15,e+17),t.closePath(),t.fillStyle="black",t.fill(),t.beginPath(),t.moveTo(n+15,e-17),t.lineTo(n+5,e-17),t.lineTo(n+5,e+17),t.lineTo(n+15,e+17),t.closePath(),t.fillStyle="black",t.fill(),t.beginPath(),t.moveTo(n-10,e-2),t.lineTo(n+15,e-2),t.lineTo(n+15,e+2),t.lineTo(n-15,e-2),t.closePath(),t.fillStyle="black",t.fill()}}function P(){d?n-=s:c?n+=s:u?e-=s:h&&(e+=s),(n+p>o.width||n-p<0)&&(s=-s),(e+p>o.height||e-p<0)&&(s=-s),x(),I=requestAnimationFrame(P)}function C(g){const f=document.getElementById("codeDisplay");f.textContent=`
  const canvas = document.getElementById('robotCanvas')
  const ctx = canvas.getContext('2d')
  let x = canvas.width / 2
  let y = canvas.height / 2
  let dx = 2 // Initial speed
  let radius = 20
  let color = 'green'
  let animationId
  let isRunning = false
  let runLeft = true
  let runTop = false
  let runRight = false
  let runBottom = false    

  function draw() {
    if (runLeft || runRight) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let x1 = x
      var y1 = y
      var radius = 20
      var startAngle = 0
      var endAngle = Math.PI * 2
      ctx.arc(x1, y1, radius, startAngle, endAngle, 0)
      ctx.fillStyle = 'purple'
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x - 15, y - 17)
      ctx.lineTo(x + 15, y - 17)
      ctx.lineTo(x + 15, y - 7)
      ctx.lineTo(x - 15, y - 7)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x - 15, y + 7)
      ctx.lineTo(x + 15, y + 7)
      ctx.lineTo(x + 15, y + 17)
      ctx.lineTo(x - 15, y + 17)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x - 1, y - 17)
      ctx.lineTo(x + 1, y - 17)
      ctx.lineTo(x + 1, y + 17)
      ctx.lineTo(x - 1, y + 17)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let x1 = x
      var y1 = y
      var radius = 20
      var startAngle = 0
      var endAngle = Math.PI * 2
      ctx.arc(x1, y1, radius, startAngle, endAngle, 0)
      ctx.fillStyle = 'purple'
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x - 15, y - 17)
      ctx.lineTo(x - 4, y - 17)
      ctx.lineTo(x - 4, y + 17)
      ctx.lineTo(x - 15, y + 17)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x + 15, y - 17)
      ctx.lineTo(x + 5, y - 17)
      ctx.lineTo(x + 5, y + 17)
      ctx.lineTo(x + 15, y + 17)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x - 10, y - 2)
      ctx.lineTo(x + 15, y - 2)
      ctx.lineTo(x + 15, y + 2)
      ctx.lineTo(x - 15, y - 2)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()
    }
  }

  function update() {
    if (runLeft) {
      x -= dx
    } else if (runRight) {
      x += dx
    } else if (runTop) {
      y -= dx
    } else if (runBottom) {
      y += dx
    }
    if (x + radius > canvas.width || x - radius < 0) {
      dx = -dx // Reverse direction
    }
    if (y + radius > canvas.height || y - radius < 0) {
      dx = -dx // Reverse direction
    }

    draw()
    animationId = requestAnimationFrame(update)
  }
    `}document.getElementById("LineButton").addEventListener("click",()=>{v?(cancelAnimationFrame(I),document.getElementById("LineButton").textContent="stop"):(P(),document.getElementById("LineButton").textContent="start"),v=!v}),document.getElementById("TurnButton").addEventListener("click",()=>{if(d){u=!0,h=!1,c=!1,d=!1,x();return}if(u){c=!0,h=!1,u=!1,d=!1,x();return}if(c){h=!0,c=!1,u=!1,d=!1,x();return}if(h){d=!0,c=!1,u=!1,h=!1,x();return}}),x(),C()}),(o,t)=>{const n=k("el-button"),e=k("my-demo");return L(),q(S,null,{default:r(()=>[i("header",null,[a(A,{title1:"The trolley travels in a straight line and turns"}),t[2]||(t[2]=i("p",null,"The Start/Stop button starts/stops the robot.",-1)),i("div",D,[a(n,{id:"LineButton",style:{"margin-left":"20px"}},{default:r(()=>t[0]||(t[0]=[l("start")])),_:1}),a(n,{id:"TurnButton",style:{"margin-left":"20px"}},{default:r(()=>t[1]||(t[1]=[l("turn")])),_:1})])]),t[24]||(t[24]=i("main",{style:{"margin-top":"20px"}},[i("canvas",{id:"robotCanvas",width:"1200",height:"600"}),i("div",{id:"codeDisplay"})],-1)),i("footer",null,[a(B,null,{default:r(()=>[t[11]||(t[11]=i("p",null," Here, we define four variables, runleft runright, runtop runbottom, which are used to indicate which direction the car is going to move ",-1)),t[12]||(t[12]=i("p",null," When the car moves to the right, we set the runright to true and the other directions to false, so that the second will conflict ",-1)),t[13]||(t[13]=i("p",null," When we use the canvas to paint, we use the judgment function to first judge the direction in which the car is currently moving, and then finally draw the car in different directions ",-1)),a(m,null,{code:r(()=>t[3]||(t[3]=[l("cancelAnimationFrame()")])),item:r(()=>t[4]||(t[4]=[l("This function is a JS function, and this function allows us to cancel a function that is looping")])),_:1}),a(m,null,{code:r(()=>t[5]||(t[5]=[l("requestAnimationFrame()")])),item:r(()=>t[6]||(t[6]=[l(" This function is a JS function, and with this function we can cycle through a function all the time")])),_:1}),a(e,null,{code:r(()=>[a(y,{type:"JavaScript",code:`\r
function update() {\r
  if (runLeft) {\r
    x -= dx;\r
  } else if (runRight) {\r
    x += dx;\r
  } else if (runTop) {\r
    y -= dx;\r
  } else if (runBottom) {\r
    y += dx;\r
  }\r
  if (x + radius > canvas.width || x - radius < 0) {\r
    dx = -dx; // Reverse direction\r
  }\r
  if (y + radius > canvas.height || y - radius < 0) {\r
    dx = -dx; // Reverse direction\r
  }\r
\r
  draw();\r
  animationId = requestAnimationFrame(update);\r
}\r
\r
                `})]),_:1}),t[14]||(t[14]=i("p",null,"In the code above, the core of the event loop and asynchronous programming is reflected in the use of requestAnimationFrame and nextTick. requestAnimationFrame is an asynchronous and important method associated with the event loop. update function uses the requestAnimationFrame to call itself recursively, thus enabling continuous animation.",-1)),t[15]||(t[15]=i("p",null,"In this function, every time requestAnimationFrame(update) is called, the browser adds the update function to the message queue to be called before the next redraw. This means that even if you keep changing the x and y values, the browser will only perform these operations at the right point in time (i.e., at the time of the redraw) , thus keeping the animation smooth.",-1)),a(m,null,{code:r(()=>t[7]||(t[7]=[l("Asynchronous operation of nextTick")])),item:r(()=>t[8]||(t[8]=[l(" extTick is used in Vue 3 to perform a delayed callback at the end of the next DOM update loop. In your code, it is used to ensure that the DOM has been updated before performing canvas related actions:")])),_:1}),a(e,null,{code:r(()=>[a(y,{type:"JavaScript",code:`\r
  <script setup>\r
import { nextTick } from 'vue'\r
\r
nextTick(() => {\r
  // Canvas manipulation code \r
})\r
<\/script>\r
\r
                  `})]),_:1}),t[16]||(t[16]=i("p",null,"The nextTick works similarly to setTimeout(fn, 0) in JavaScript in that it defers execution of the callback until the start of the next event loop. As a result, nextTick ensures that the DOM is already updated by the time you access the canvas element, which is especially important when dealing with complex DOM operations.",-1)),a(m,null,{code:r(()=>t[9]||(t[9]=[l("Advanced Usage of the Canvas API")])),item:r(()=>t[10]||(t[10]=[l(" When drawing a simple animated robot with the Canvas API, we can also transform, path manipulation and image drawing. For example, you can draw the robot with basic methods such as ctx.arc and ctx.fill, and you can use the Canvas API's transformations to rotate or scale the robot.")])),_:1}),a(e,null,{code:r(()=>[a(y,{type:"JavaScript",code:`\r
    function draw() {\r
  ctx.clearRect(0, 0, canvas.width, canvas.height);\r
\r
  ctx.save(); // Save the current drawing state\r
  ctx.translate(x, y); // Move to the current position of the robot\r
  ctx.rotate((Math.PI / 180) * angle); // Rotate at a certain angle\r
  ctx.translate(-x, -y); // reposition\r
\r
  // Drawing Robots\r
  ctx.beginPath();\r
  ctx.arc(x, y, radius, 0, Math.PI * 2);\r
  ctx.fillStyle = 'purple';\r
  ctx.fill();\r
\r
  ctx.restore(); // Restoring the drawing state\r
}\r
\r
                    `})]),_:1}),t[17]||(t[17]=i("p",null,"In this example, we use ctx.save and ctx.restore to save and restore the state of the Canvas. ctx.translate and ctx.rotate are used to implement the rotation of the robot around its centre.",-1)),t[18]||(t[18]=i("br",null,null,-1)),t[19]||(t[19]=i("br",null,null,-1)),t[20]||(t[20]=i("p",null,"We can encapsulate these functions into a class to make the code more object-oriented and easily extensible. First create a Robot class that encapsulates all the state and behaviour associated with the robot, and then use this class to create an instance of the robot and control its movement.",-1)),a(e,null,{code:r(()=>[a(y,{type:"JavaScript",code:`\r
  class Robot {\r
  constructor(canvasId, x, y, radius) {\r
    this.canvas = document.getElementById(canvasId);\r
    this.ctx = this.canvas.getContext('2d');\r
    this.x = x;\r
    this.y = y;\r
    this.radius = radius;\r
    this.dx = 2;\r
    this.dy = 2;\r
    this.isRunning = false;\r
    this.animationId = null;\r
  }\r
\r
  draw() {\r
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\r
    this.ctx.beginPath();\r
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\r
    this.ctx.fillStyle = 'purple';\r
    this.ctx.fill();\r
  }\r
\r
  update() {\r
    this.x += this.dx;\r
    this.y += this.dy;\r
\r
    if (this.x + this.radius > this.canvas.width || this.x - this.radius < 0) {\r
      this.dx = -this.dx;\r
    }\r
    if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) {\r
      this.dy = -this.dy;\r
    }\r
\r
    this.draw();\r
    this.animationId = requestAnimationFrame(() => this.update());\r
  }\r
\r
  start() {\r
    if (!this.isRunning) {\r
      this.update();\r
      this.isRunning = true;\r
    }\r
  }\r
\r
  stop() {\r
    if (this.isRunning) {\r
      cancelAnimationFrame(this.animationId);\r
      this.isRunning = false;\r
    }\r
  }\r
}\r
const robot = new Robot('robotCanvas', 100, 100, 20);\r
\r
document.getElementById('LineButton').addEventListener('click', () => {\r
  if (robot.isRunning) {\r
    robot.stop();\r
    document.getElementById('LineButton').textContent = 'Start';\r
  } else {\r
    robot.start();\r
    document.getElementById('LineButton').textContent = 'Stop';\r
  }\r
});\r
\r
document.getElementById('TurnButton').addEventListener('click', () => {\r
  robot.dx = -robot.dx; // Reverse X-axis direction\r
  robot.dy = -robot.dy; // Reverse Y-axis direction\r
});\r
\r
                `})]),_:1}),t[21]||(t[21]=i("p",null,"By encapsulating functionality into classes, your code becomes easier to understand and maintain. Object-oriented programming allows you to extend classes",-1)),t[22]||(t[22]=i("p",null,"For more details, please refer to this address",-1)),t[23]||(t[23]=i("p",{style:{color:"lightblue"}}," http://www.personal.reading.ac.uk/~shsmchlr/jsrobotstyle/index.html ",-1)),a(R,{week:"4",num:"1"})]),_:1})])]),_:1})}}}),U=E(j,[["__scopeId","data-v-9e3bd678"]]);export{U as default};
