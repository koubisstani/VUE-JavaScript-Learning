import{M as a,a as r,S as d}from"./StudyContent-DmgqnPrB.js";import{c as l}from"./codeItem-BKQqYzK7.js";import{M as p}from"./MyTitle-BnWlqeve.js";import{_ as f,n as w,o as y,c as g,w as n,a as e,b as s,d as o}from"./index-NwAmraC0.js";const b={components:{"my-title":p,"my-footer":r,"my-container":a,"study-content":d,"code-item":l}},T=Object.assign(b,{__name:"study3new",setup(x){return w(()=>{const i=document.getElementById("robotCanvas"),t=i.getContext("2d");i.width/2,i.height/2;function u(){const m=document.getElementById("codeDisplay");m.textContent=`
  function draw() {
    ctx.beginPath()
    ctx.moveTo(500, 300)
    ctx.lineTo(550, 350)
    ctx.lineTo(500, 400)
    ctx.closePath()
    ctx.fillStyle = 'yellow'
    ctx.fill()
  }
  draw()
    `}function h(){t.beginPath(),t.moveTo(500,300),t.lineTo(550,350),t.lineTo(500,400),t.closePath(),t.fillStyle="yellow",t.fill()}h(),u()}),(i,t)=>(y(),g(a,null,{default:n(()=>[e("header",null,[s(p,{title1:"canvas line"})]),t[22]||(t[22]=e("main",{style:{"margin-top":"20px"}},[e("canvas",{id:"robotCanvas",width:"1200",height:"600"}),e("div",{id:"codeDisplay"})],-1)),e("footer",null,[s(d,null,{default:n(()=>[t[10]||(t[10]=e("p",null,"For drawing straight lines, use the lineTo() method.",-1)),s(l,null,{code:n(()=>t[0]||(t[0]=[o("lineTo(x, y)")])),item:n(()=>t[1]||(t[1]=[o("Draws a line from the current drawing position to the position specified by x and y")])),_:1}),t[11]||(t[11]=e("p",null," This method takes two arguments, x and y, which are the coordinates of the line's end point. The starting point is dependent on previously drawn paths, where the end point of the previous path is the starting point for the following, etc. The starting point can also be changed by using the moveTo() method. ",-1)),s(l,null,{code:n(()=>t[2]||(t[2]=[o("beginPath()")])),item:n(()=>t[3]||(t[3]=[o(" Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.")])),_:1}),s(l,null,{code:n(()=>t[4]||(t[4]=[o("closePath()")])),item:n(()=>t[5]||(t[5]=[o("Adds a straight line to the path, going to the start of the current sub-path.")])),_:1}),s(l,null,{code:n(()=>t[6]||(t[6]=[o("stroke()")])),item:n(()=>t[7]||(t[7]=[o("Draws the shape by stroking its outline.")])),_:1}),s(l,null,{code:n(()=>t[8]||(t[8]=[o("fill()")])),item:n(()=>t[9]||(t[9]=[o("Draws a solid shape by filling the path's content area.")])),_:1}),t[12]||(t[12]=e("p",null," The first step to create a path is to call the beginPath(). Internally, paths are stored as a list of sub-paths (lines, arcs, etc.) which together form a shape. Every time this method is called, the list is reset and we can start drawing new shapes. ",-1)),t[13]||(t[13]=e("br",null,null,-1)),t[14]||(t[14]=e("p",null," The second step is calling the methods that actually specify the paths to be drawn ",-1)),t[15]||(t[15]=e("br",null,null,-1)),t[16]||(t[16]=e("p",null," The statement for the clockwise parameter results in the first and third row being drawn as clockwise arcs and the second and fourth row as counterclockwise arcs. Finally, the if statement makes the top half stroked arcs and the bottom half filled arcs. ",-1)),t[17]||(t[17]=e("br",null,null,-1)),t[18]||(t[18]=e("p",null," The third, and an optional step, is to call closePath(). This method tries to close the shape by drawing a straight line from the current point to the start. If the shape has already been closed or there's only one point in the list, this function does nothing. ",-1)),t[19]||(t[19]=e("br",null,null,-1)),t[20]||(t[20]=e("p",null,"more look this",-1)),t[21]||(t[21]=e("p",null," https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes ",-1)),s(r,{week:"3",num:"3"})]),_:1})])]),_:1}))}}),D=f(T,[["__scopeId","data-v-e0f55da7"]]);export{D as default};
