import{M as v,a as m,S as w}from"./StudyContent-BPr2YxYz.js";import{c as u}from"./codeItem-Cy0TIWKK.js";import{M as f}from"./MyTitle-Ch0XEo59.js";import{_ as b,a as x}from"./demoCode-mrgE22yQ.js";import{_ as k,n as T,f as p,o as I,c as M,w as a,a as e,b as r,d as o}from"./index-DMEq0VNs.js";const C={components:{"my-title":f,"my-footer":m,"my-container":v,"study-content":w,"code-item":u,"my-demo":b,"demo-code":x}},D=Object.assign(C,{__name:"study2new",setup(B){return T(()=>{const c=document.getElementById("robotCanvas"),t=c.getContext("2d");c.width/2,c.height/2;function h(){const n=document.getElementById("codeDisplay");n.textContent=`
    function draw1() {
    ctx.beginPath()
    var x = 500
    var y = 250
    var radius = 20 
    var startAngle = 0 
    var endAngle = Math.PI * 2 

    ctx.arc(x, y, radius, startAngle, endAngle)

    ctx.stroke()
  }
  function draw2() {
    ctx.beginPath()
    var x = 600
    var y = 250
    var radius = 20 
    var startAngle = 0 
    var endAngle = Math.PI * 2

    ctx.arc(x, y, radius, startAngle, endAngle)

    ctx.stroke()
  }
  function draw3() {
    ctx.beginPath()
    var x = 550
    var y = 250
    var radius = 100 
    var startAngle = 0 
    var endAngle = Math.PI * 2 

    ctx.arc(x, y, radius, startAngle, endAngle)

    ctx.stroke()
  }
  function draw4() {
    ctx.beginPath()
    var x = 550
    var y = 300
    var radius = 20 
    var startAngle = 0 
    var endAngle = Math.PI 

    ctx.arc(x, y, radius, startAngle, endAngle)

    ctx.stroke()
  }
  draw1()
  draw2()
  draw3()
  draw4()
    `}function g(){t.beginPath();var n=500,s=250,i=20,l=0,d=Math.PI*2;t.arc(n,s,i,l,d),t.stroke()}function y(){t.beginPath();var n=600,s=250,i=20,l=0,d=Math.PI*2;t.arc(n,s,i,l,d),t.stroke()}function A(){t.beginPath();var n=550,s=250,i=100,l=0,d=Math.PI*2;t.arc(n,s,i,l,d),t.stroke()}function P(){t.beginPath();var n=550,s=300,i=20,l=0,d=Math.PI;t.arc(n,s,i,l,d),t.stroke()}g(),y(),A(),P(),h()}),(c,t)=>{const h=p("my-demo"),g=p("P");return I(),M(v,null,{default:a(()=>[e("header",null,[r(f,{title1:"Arcs",title2:"To draw arcs or circles, we use the arc() or arcTo() methods."})]),t[18]||(t[18]=e("main",{style:{"margin-top":"20px"}},[e("canvas",{id:"robotCanvas",width:"1200",height:"600"}),e("div",{id:"codeDisplay"})],-1)),e("footer",null,[r(w,null,{default:a(()=>[r(u,null,{code:a(()=>t[0]||(t[0]=[o("arc(x, y, radius, startAngle, endAngle, counterclockwise)")])),item:a(()=>t[1]||(t[1]=[o("Draws an arc which is centered at (x, y) position with radius r starting at startAngle and ending at endAngle going in the given direction indicated by counterclockwise (defaulting to clockwise).")])),_:1}),r(u,null,{code:a(()=>t[2]||(t[2]=[o("arcTo(x1, y1, x2, y2, radius)")])),item:a(()=>t[3]||(t[3]=[o(" Draws an arc with the given control points and radius, connected to the previous point by a straight line.")])),_:1}),t[7]||(t[7]=e("p",null,[o(" Let's have a more detailed look at the arc method, which takes six parameters: x and y are the coordinates of the center of the circle on which the arc should be drawn. radius is self-explanatory. The startAngle and endAngle parameters define the start and end points of the arc in radians, along the curve of the circle. "),e("br"),e("br"),o("These are measured from the x axis. The counterclockwise parameter is a Boolean value which, when true, draws the arc counterclockwise; otherwise, the arc is drawn clockwise. ")],-1)),t[8]||(t[8]=e("p",null," Note: Angles in the arc function are measured in radians, not degrees. To convert degrees to radians you can use the following JavaScript expression: radians = (Math.PI/180)*degrees. ",-1)),r(u,null,{code:a(()=>t[4]||(t[4]=[o("Path Drawing in the Canvas API")])),item:a(()=>t[5]||(t[5]=[o("One of the core concepts of the Canvas API is the Path. A path is a shape made by connecting a series of points, which can include straight lines, arcs, Bezier curves, and so on. The concept of a path allows developers to create complex shapes and then draw them all at once.")])),_:1}),r(h,null,{code:a(()=>[r(x,{type:"JavaScript",code:`\r
ctx.beginPath();\r
ctx.moveTo(100, 100);\r
ctx.lineTo(200, 100);\r
ctx.arcTo(300, 100, 300, 200, 50);\r
ctx.lineTo(300, 300);\r
ctx.closePath();\r
ctx.stroke();\r
                `})]),_:1}),t[9]||(t[9]=e("p",null,"beginPath(): start a new path. After calling beginPath(), all drawing commands will form this new path.",-1)),t[10]||(t[10]=e("p",null,"moveTo(x, y): moves the brush to the specified coordinates without drawing anything. Usually used to set the start point.",-1)),t[11]||(t[11]=e("p",null,"lineTo(x, y): draws a line from the current brush position to the specified coordinates.",-1)),r(g,null,{default:a(()=>t[6]||(t[6]=[o("closePath(): draw a straight line, connect the last point of the current path with the first point, close the path.")])),_:1}),t[12]||(t[12]=e("p",null,"stroke(): stroke the path, according to the current strokeStyle to draw the outline of the path.",-1)),t[13]||(t[13]=e("p",null,"fill(): fill the path, fill the inside of the path according to the current fillStyle.",-1)),t[14]||(t[14]=e("br",null,null,-1)),t[15]||(t[15]=e("br",null,null,-1)),t[16]||(t[16]=e("p",null,"more look this",-1)),t[17]||(t[17]=e("p",null," https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes ",-1)),r(m,{week:"3",num:"2"})]),_:1})])]),_:1})}}}),J=k(D,[["__scopeId","data-v-fce2b316"]]);export{J as default};
