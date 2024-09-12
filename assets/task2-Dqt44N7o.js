import{_ as r,r as i,o as d,c as f,w as u,b as p,a as t,e as v,v as b,u as m,i as x}from"./index-NwAmraC0.js";import{M as n}from"./MyTitle-BnWlqeve.js";import{M as a}from"./MyContainer2-D3PYsOJP.js";const _={class:"code_area"},y={components:{"my-title":n,"my-container2":a}},g=Object.assign(y,{__name:"task2",setup(w){console.log(`
let ball = document.querySelector(".ball");
console.log(ball);
document.onkeydown = function(event){
    console.log("出发了事件");
    event = event || window.event;
    console.log(event);
    let code = event.keyCode;
    console.log(code);
    if(code=='37'){
        console.log('左');
        ball.style.left = ball.offsetLeft-10+'px';
    }else if(code=='38'){
        console.log('上');
        ball.style.top= ball.offsetTop-10+"px";
    }else if(code=='39'){
        console.log('右');
        ball.style.left=ball.offsetLeft+10+'px';
    } else if(code=='40'){
        console.log('下');
        ball.style.top=ball.offsetTop+10+'px';
    }
}

`);let o=i("");const c=()=>{const l=o.value;try{new Function(l)()}catch(e){console.error("代码执行出错:",e)}};return(l,e)=>(d(),f(a,null,{default:u(()=>[p(n,{title1:"move ball",title2:"Bounce when moving to the edge"}),e[2]||(e[2]=t("div",{class:"title"},[t("div",{class:"title-content"},"Code input area"),t("div",{class:"title-content"},"Effect display area")],-1)),t("main",null,[t("div",_,[v(t("textarea",{type:"text","onUpdate:modelValue":e[0]||(e[0]=s=>x(o)?o.value=s:o=s),placeholder:"Enter the javascript code here",style:{width:"763px",height:"495px",border:"none",outline:"none",resize:"none","font-size":"20px"}},null,512),[[b,m(o)]])]),t("button",{onClick:c,class:"executeButton"},"run"),e[1]||(e[1]=t("div",{class:"effect_area"},[t("div",{class:"ball"})],-1))])]),_:1}))}}),M=r(g,[["__scopeId","data-v-d1f64a43"]]);export{M as default};
