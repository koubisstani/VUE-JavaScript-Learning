import{_ as _export_sfc,r as ref,o as openBlock,g as createElementBlock,a as createBaseVNode,e as withDirectives,v as vModelText,u as unref,i as isRef}from"./index-DMEq0VNs.js";const _hoisted_1={class:"code_area"},_sfc_main={__name:"CanvasInputCode",setup(__props){let codeLeft=ref("");const executeCodeLeft=()=>{const code=codeLeft.value;try{eval(code)}catch(t){console.error("Code execution error:",t)}};return(t,e)=>(openBlock(),createElementBlock("div",null,[e[2]||(e[2]=createBaseVNode("div",{class:"title"},[createBaseVNode("div",{class:"title-content"},"Code input area"),createBaseVNode("div",{class:"title-content"},"Effect display area")],-1)),createBaseVNode("main",null,[createBaseVNode("div",_hoisted_1,[withDirectives(createBaseVNode("textarea",{"onUpdate:modelValue":e[0]||(e[0]=a=>isRef(codeLeft)?codeLeft.value=a:codeLeft=a),placeholder:"Enter the javascript code here",style:{width:"763px",height:"495px",border:"none",outline:"none",resize:"none","font-size":"20px"}},null,512),[[vModelText,unref(codeLeft)]])]),createBaseVNode("button",{onClick:executeCodeLeft,class:"executeButton"},"run"),e[1]||(e[1]=createBaseVNode("div",{class:"effect_area"},[createBaseVNode("canvas",{width:"768",height:"500",id:"canvas-id",style:{border:"1px solid black"}})],-1))])]))}},CanvasInputCode=_export_sfc(_sfc_main,[["__scopeId","data-v-41ac9504"]]);export{CanvasInputCode as C};
