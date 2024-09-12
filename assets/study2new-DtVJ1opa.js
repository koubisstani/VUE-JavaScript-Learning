import{M as b,a as w,S as v}from"./StudyContent-DmgqnPrB.js";import{M as T}from"./MyTitle-BnWlqeve.js";import{c as f}from"./codeItem-BKQqYzK7.js";import{_ as S,a as u}from"./demoCode-Ct16FRVs.js";import{_ as M,n as C,f as y,o as B,c as R,w as r,a as n,b as o,d as c}from"./index-NwAmraC0.js";const L={class:"choices"},_={components:{"my-title":T,"my-footer":w,"my-container":b,"study-content":v,"code-item":f,"my-demo":S,"demo-code":u}},D=Object.assign(_,{__name:"study2new",setup(E){return C(()=>{const d=document.getElementById("robotCanvas"),t=d.getContext("2d");let s=100,l=100,i=2,a=0,h=!1,x;const P=[{x:1100,y:100,direction:"down"},{x:1100,y:500,direction:"left"},{x:100,y:500,direction:"up"},{x:100,y:100,direction:"right"}];function p(){t.strokeStyle="black",t.lineWidth=5,t.beginPath(),t.moveTo(100,100),t.lineTo(1100,100),t.lineTo(1100,500),t.lineTo(100,500),t.closePath(),t.stroke()}function m(){t.clearRect(0,0,d.width,d.height),p(),t.save(),t.translate(s,l);let e=0;i===2&&a===0?e=0:i===-2&&a===0?e=Math.PI:i===0&&a===2?e=Math.PI/2:i===0&&a===-2&&(e=-Math.PI/2),t.rotate(e),t.beginPath(),t.arc(0,0,20,0,Math.PI*2),t.fillStyle="purple",t.fill(),t.beginPath(),t.moveTo(-15,-17),t.lineTo(15,-17),t.lineTo(15,-7),t.lineTo(-15,-7),t.closePath(),t.fillStyle="black",t.fill(),t.beginPath(),t.moveTo(-15,7),t.lineTo(15,7),t.lineTo(15,17),t.lineTo(-15,17),t.closePath(),t.fillStyle="black",t.fill(),t.beginPath(),t.moveTo(-1,-17),t.lineTo(1,-17),t.lineTo(1,17),t.lineTo(-1,17),t.closePath(),t.fillStyle="black",t.fill(),t.restore()}function k(e){const I=document.getElementById("codeDisplay");I.textContent=`


  nextTick(() =&gt; {
    const canvas = document.getElementById('robotCanvas')
    const ctx = canvas.getContext('2d')
    let x = 100
    let y = 100
    let dx = 2
    let dy = 0
    let isRunning = false
    let animationId

    // Define the turn points on the path
    const turnPoints = [
      { x: 1100, y: 100, direction: 'down' }, // Turn down at the top-right corner
      { x: 1100, y: 500, direction: 'left' }, // Turn left at the bottom-right corner
      { x: 100, y: 500, direction: 'up' }, // Turn up at the bottom-left corner
      { x: 100, y: 100, direction: 'right' } // Turn right at the top-left corner
    ]

    function drawPath() {
      ctx.strokeStyle = 'black'
      ctx.lineWidth = 5
      ctx.beginPath()
      ctx.moveTo(100, 100)
      ctx.lineTo(1100, 100)
      ctx.lineTo(1100, 500)
      ctx.lineTo(100, 500)
      ctx.closePath()
      ctx.stroke()
    }

    function drawRobot() {
      ctx.clearRect(0, 0, canvas.width, canvas.height) // Clearing the canvas
      drawPath() // Redrawing the path

      // Save Canvas State
      ctx.save()

      // Move the origin of the canvas to the centre of the cart
      ctx.translate(x, y)

      // Calculate the angle of rotation based on the current direction of the trolley
      let angle = 0
      if (dx === 2 && dy === 0) {
        angle = 0 // rightwards
      } else if (dx === -2 && dy === 0) {
        angle = Math.PI // leftwards
      } else if (dx === 0 && dy === 2) {
        angle = Math.PI / 2 // downwards
      } else if (dx === 0 && dy === -2) {
        angle = -Math.PI / 2 // upwards
      }

      // rotate the canvas (computing)
      ctx.rotate(angle)

      // Drawing the body of the trolley
      ctx.beginPath()
      ctx.arc(0, 0, 20, 0, Math.PI * 2) // Draw the body of the cart as a circle
      ctx.fillStyle = 'purple'
      ctx.fill()

      // Draw the front wheels of the cart
      ctx.beginPath()
      ctx.moveTo(-15, -17)
      ctx.lineTo(15, -17)
      ctx.lineTo(15, -7)
      ctx.lineTo(-15, -7)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()

      // Drawing the rear wheels of the cart
      ctx.beginPath()
      ctx.moveTo(-15, 7)
      ctx.lineTo(15, 7)
      ctx.lineTo(15, 17)
      ctx.lineTo(-15, 17)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()

      // Drawing axles
      ctx.beginPath()
      ctx.moveTo(-1, -17)
      ctx.lineTo(1, -17)
      ctx.lineTo(1, 17)
      ctx.lineTo(-1, 17)
      ctx.closePath()
      ctx.fillStyle = 'black'
      ctx.fill()

      // Restore canvas state
      ctx.restore()
    }

    function followLine() {
      // Check if the robot has reached any of the turn points
      for (const point of turnPoints) {
        if (Math.abs(x - point.x) &lt; 5 && Math.abs(y - point.y) &lt; 5) {
          // Set direction based on the turn point
          if (point.direction === 'down') {
            dx = 0
            dy = 2
          } else if (point.direction === 'left') {
            dx = -2
            dy = 0
          } else if (point.direction === 'up') {
            dx = 0
            dy = -2
          } else if (point.direction === 'right') {
            dx = 2
            dy = 0
          }
          break
        }
      }

      // Move the robot forward
      x += dx
      y += dy

      drawRobot()
      animationId = requestAnimationFrame(followLine)
    }

    document.getElementById('LineButton').addEventListener('click', () =&gt; {
      if (isRunning) {
        cancelAnimationFrame(animationId)
        document.getElementById('LineButton').textContent = 'Start'
      } else {
        followLine()
        document.getElementById('LineButton').textContent = 'Stop'
      }
      isRunning = !isRunning
    })

    drawPath()
    drawRobot()

  })
  &lt;/script&gt;
  `}function g(){for(const e of P)if(Math.abs(s-e.x)<5&&Math.abs(l-e.y)<5){e.direction==="down"?(i=0,a=2):e.direction==="left"?(i=-2,a=0):e.direction==="up"?(i=0,a=-2):e.direction==="right"&&(i=2,a=0);break}s+=i,l+=a,m(),x=requestAnimationFrame(g)}document.getElementById("LineButton").addEventListener("click",()=>{h?(cancelAnimationFrame(x),document.getElementById("LineButton").textContent="Start"):(g(),document.getElementById("LineButton").textContent="Stop"),h=!h}),k(),p(),m()}),(d,t)=>{const s=y("el-button"),l=y("my-demo");return B(),R(b,null,{default:r(()=>[n("header",null,[o(T,{title1:"Line-Following Robot"}),t[1]||(t[1]=n("p",null,"The robot moves along a predefined path based on color detection.",-1)),t[2]||(t[2]=n("p",null,"Click the Start button to begin the robot's journey.",-1)),n("div",L,[o(s,{id:"LineButton",style:{"margin-left":"20px"}},{default:r(()=>t[0]||(t[0]=[c("Start")])),_:1})])]),t[11]||(t[11]=n("main",{style:{"margin-top":"20px"}},[n("canvas",{id:"robotCanvas",width:"1200",height:"600"}),n("div",{id:"codeDisplay"})],-1)),n("footer",null,[o(v,null,{default:r(()=>[o(f,null,{code:r(()=>t[3]||(t[3]=[c("ctx.save() and ctx.restore()")])),item:r(()=>t[4]||(t[4]=[c(" The save() method is used to push the current drawing state onto the stack. The drawing state includes the transformation matrix (e.g., the state of rotation, scaling, and panning), the crop region, the fill style, the stroke style, and so on. This means that you can save the current state and then perform a series of operations (such as rotating, panning, and so on), and then restore() at the end of the drawing to restore the previous state, so that these operations don't affect the drawing of other shapes.")])),_:1}),o(l,null,{code:r(()=>[o(u,{type:"JavaScript",code:`\r
  ctx.save(); // Save current state\r
ctx.translate(100, 100); // panning canvas (computing)\r
ctx.rotate(Math.PI / 4); // rotate the canvas (computing)\r
// Plotting the rotated position\r
ctx.fillRect(0, 0, 50, 50);\r
ctx.restore(); // Restore to the state before panning and rotation\r
// It is now possible to draw shapes that are not affected by rotation and translation\r
ctx.fillRect(200, 200, 50, 50);\r
                `})]),_:1}),o(f,null,{code:r(()=>t[5]||(t[5]=[c("if-else statements and for loops with break statements")])),item:r(()=>t[6]||(t[6]=[c("Conditional judgements and control structures in JavaScript are the foundation of programming, they are used to control the execution flow of a program so that the code can perform different actions based on different conditions. In this project, conditional judgements and control structures are widely used in logic such as steering and path detection of a cart.")])),_:1}),o(l,null,{code:r(()=>[o(u,{type:"JavaScript",code:`\r
  if (dx === 2 && dy === 0) {\r
  // The current direction is to the right.\r
  angle = 0;\r
} else if (dx === -2 && dy === 0) {\r
  // The current direction is to the left.\r
  angle = Math.PI;\r
}\r
\r
for (const point of turnPoints) {\r
  if (Math.abs(x - point.x) < 5 && Math.abs(y - point.y) < 5) {\r
    // Detects that the trolley has reached the turning point and sets the direction\r
    if (point.direction === 'down') {\r
      dx = 0;\r
      dy = 2;\r
    } else if (point.direction === 'left') {\r
      dx = -2;\r
      dy = 0;\r
    }\r
    break; // early exit loop\r
  }\r
}\r
                `})]),_:1}),t[7]||(t[7]=n("p",null," This project demonstrates a basic implementation of a line-following robot using the Canvas API. The robot's movement is controlled by detecting the color of the pixels in its proximity, allowing it to follow a path drawn on the canvas. ",-1)),t[8]||(t[8]=n("br",null,null,-1)),t[9]||(t[9]=n("p",null,"For more details, please refer to this address",-1)),t[10]||(t[10]=n("p",{style:{color:"lightblue"}}," http://www.personal.reading.ac.uk/~shsmchlr/jsrobotstyle/index.html ",-1)),o(w,{week:"4",num:"2"})]),_:1})])]),_:1})}}}),V=M(D,[["__scopeId","data-v-259de4b4"]]);export{V as default};
