import{M as f,a as x,S as m}from"./StudyContent-BPr2YxYz.js";import{c as u}from"./codeItem-Cy0TIWKK.js";import{M as p}from"./MyTitle-Ch0XEo59.js";import{_ as w,a as c}from"./demoCode-mrgE22yQ.js";import{_ as k,n as C,f as b,o as I,c as M,w as o,a as e,b as a,d as s}from"./index-DMEq0VNs.js";const S={components:{"my-title":p,"my-footer":x,"my-container":f,"study-content":m,"code-item":u,"my-demo":w,"demo-code":c}},P=Object.assign(S,{__name:"study3",setup(q){return C(()=>{const d=document.getElementById("robotCanvas"),t=d.getContext("2d"),r=[{x:100,y:100,radius:20,color:"red",dx:2,dy:2},{x:200,y:150,radius:30,color:"green",dx:3,dy:3},{x:300,y:200,radius:40,color:"blue",dx:1,dy:1}];let i=!1,y;function v(l){t.beginPath(),t.arc(l.x,l.y,l.radius,0,Math.PI*2),t.fillStyle=l.color,t.fill(),t.closePath()}function g(l){l.x+=l.dx,l.y+=l.dy,(l.x+l.radius>d.width||l.x-l.radius<0)&&(l.dx=-l.dx),(l.y+l.radius>d.height||l.y-l.radius<0)&&(l.dy=-l.dy);for(let n of r)n!==l&&Math.hypot(l.x-n.x,l.y-n.y)<l.radius+n.radius&&(l.dx=-l.dx,l.dy=-l.dy,n.dx=-n.dx,n.dy=-n.dy)}function h(){if(i){t.clearRect(0,0,d.width,d.height);for(let l of r)g(l),v(l);y=requestAnimationFrame(h)}}document.querySelector("#startButton").addEventListener("click",()=>{console.log("click"),i=!i,i?h():cancelAnimationFrame(y)});function B(){const l=document.getElementById("codeDisplay");l.textContent=`
  const balls = [
    { x: 100, y: 100, radius: 20, color: 'red', dx: 2, dy: 2 },
    { x: 200, y: 150, radius: 30, color: 'green', dx: 3, dy: 3 },
    { x: 300, y: 200, radius: 40, color: 'blue', dx: 1, dy: 1 }
  ]

  let running = false
  let animationId

  function drawBall(ball) {
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
    ctx.fillStyle = ball.color
    ctx.fill()
    ctx.closePath()
  }

  function moveBall(ball) {
    ball.x += ball.dx
    ball.y += ball.dy

    // Check for collisions with the canvas edges
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
      ball.dx = -ball.dx
    }
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
      ball.dy = -ball.dy
    }

    // Check for collisions with other balls
    for (let otherBall of balls) {
      if (otherBall !== ball) {
        const dist = Math.hypot(ball.x - otherBall.x, ball.y - otherBall.y)
        if (dist < ball.radius + otherBall.radius) {
          ball.dx = -ball.dx
          ball.dy = -ball.dy
          otherBall.dx = -otherBall.dx
          otherBall.dy = -otherBall.dy
        }
      }
    }
  }

  function animate() {
    if (!running) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let ball of balls) {
      moveBall(ball)
      drawBall(ball)
    }

    animationId = requestAnimationFrame(animate)
  }

  document.querySelector('#startButton').addEventListener('click', () => {
    console.log('click')
    running = !running
    if (running) {
      animate()
    } else {
      cancelAnimationFrame(animationId)
    }
  })
    `}B()}),(d,t)=>{const r=b("el-button"),i=b("my-demo");return I(),M(f,null,{default:o(()=>[e("header",null,[a(p,{title1:"bounce ball"}),t[1]||(t[1]=e("p",null," Clicking this button will cause 3 balls to collide and bounce off each other ",-1)),a(r,{id:"startButton"},{default:o(()=>t[0]||(t[0]=[s("Start/Stop")])),_:1})]),t[15]||(t[15]=e("main",{style:{"margin-top":"20px"}},[e("canvas",{id:"robotCanvas",width:"1200",height:"600"}),e("div",{id:"codeDisplay"})],-1)),e("footer",null,[a(m,null,{default:o(()=>[a(u,null,{code:o(()=>t[2]||(t[2]=[s("Boundary detection of small balls")])),item:o(()=>t[3]||(t[3]=[s(" The purpose of boundary detection is to make sure that the ball does not go beyond the boundaries of the canvas. When the ball moves to the edge of the canvas, it needs to be allowed to bounce back. This is usually done by detecting the centre of the ball and whether its radius exceeds the width and height of the canvas. ")])),_:1}),a(i,null,{code:o(()=>[a(c,{type:"JavaScript",code:`\r
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {\r
  ball.dx = -ball.dx\r
}\r
if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {\r
  ball.dy = -ball.dy\r
}\r
                `})]),_:1}),t[6]||(t[6]=e("p",null,"ball.x + ball.radius > canvas.width: detect if the right edge of the ball exceeds the right boundary of the canvas. If it exceeds the boundary, reverse the dx (horizontal velocity) direction.",-1)),t[7]||(t[7]=e("br",null,null,-1)),t[8]||(t[8]=e("p",null,"ball.x - ball.radius < 0: detect if the left edge of the ball is beyond the left boundary of the canvas. If it does, invert the dx as well.",-1)),t[9]||(t[9]=e("br",null,null,-1)),t[10]||(t[10]=e("p",null,"ball.y + ball.radius > canvas.height and ball.y - ball.radius < 0: similar logic is used to detect boundary collisions of the ball in the vertical direction and reverse the dy (vertical velocity) accordingly.",-1)),t[11]||(t[11]=e("br",null,null,-1)),a(u,null,{code:o(()=>t[4]||(t[4]=[s("Collision detection between balls")])),item:o(()=>t[5]||(t[5]=[s(" Collision detection between small balls is slightly more complex and involves the calculation of the distance between two points. If the distance between two balls is less than the sum of their radii, then a collision is considered to have occurred. ")])),_:1}),a(i,null,{code:o(()=>[a(c,{type:"JavaScript",code:`\r
  for (let otherBall of balls) {\r
  if (otherBall !== ball) {\r
    const dist = Math.hypot(ball.x - otherBall.x, ball.y - otherBall.y)\r
    if (dist < ball.radius + otherBall.radius) {\r
      ball.dx = -ball.dx\r
      ball.dy = -ball.dy\r
      otherBall.dx = -otherBall.dx\r
      otherBall.dy = -otherBall.dy\r
    }\r
  }\r
}\r
                `})]),_:1}),t[12]||(t[12]=e("p",null,"Math.hypot(ball.x - otherBall.x, ball.y - otherBall.y): calculates the distance between the centroids of the two balls. the Math.hypot function returns the Euclidean distance between the given coordinates, simplifying the calculation of Math.sqrt(dx*dx + dy*dy).",-1)),t[13]||(t[13]=e("br",null,null,-1)),t[14]||(t[14]=e("p",null,"dist < ball.radius + otherBall.radius: check if the distance between two balls is less than the sum of their radii. If it is less, it means that there is a collision. After a collision is detected, a bounce is simulated simply by reversing the direction of the velocities of the two balls (dx and dy).",-1)),a(x,{week:"2",num:"3"})]),_:1})])]),_:1})}}}),V=k(P,[["__scopeId","data-v-308622bd"]]);export{V as default};
