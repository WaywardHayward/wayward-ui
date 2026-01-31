import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as _}from"./index--qcDGAq6.js";import"./index-yBjzXJbu.js";const f={sm:"px-3 py-1.5 text-sm",md:"px-3 py-2 text-sm",lg:"px-4 py-3 text-base"},x={default:"border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",error:"border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500"},n=_.forwardRef(({size:c="md",variant:i="default",startIcon:a,endIcon:r,className:m="",disabled:p,...u},g)=>{const b=`
    block w-full rounded-md border
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-gray-100
    placeholder-gray-500 dark:placeholder-gray-400
    focus:outline-none focus:ring-1
    disabled:cursor-not-allowed disabled:bg-gray-50 dark:disabled:bg-gray-900
    disabled:text-gray-500 dark:disabled:text-gray-400
  `.replace(/\s+/g," ").trim();return a||r?e.jsxs("div",{className:"relative",children:[a&&e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx("div",{className:"h-5 w-5 text-gray-400",children:a})}),e.jsx("input",{ref:g,className:`
            ${b}
            ${f[c]}
            ${x[i]}
            ${a?"pl-10":""}
            ${r?"pr-10":""}
            ${m}
          `.replace(/\s+/g," ").trim(),disabled:p,...u}),r&&e.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",children:e.jsx("div",{className:"h-5 w-5 text-gray-400",children:r})})]}):e.jsx("input",{ref:g,className:`
        ${b}
        ${f[c]}
        ${x[i]}
        ${m}
      `.replace(/\s+/g," ").trim(),disabled:p,...u})});n.displayName="Input";n.__docgenInfo={description:"Input component with consistent styling and variants",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "error"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const O={title:"Forms/Input",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number"]}}},s={args:{placeholder:"Enter text..."}},t={render:()=>e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Username"}),e.jsx(n,{placeholder:"Enter your username"})]})},l={args:{type:"email",placeholder:"email@example.com"}},o={args:{type:"password",placeholder:"Enter password"}},d={args:{disabled:!0,placeholder:"Disabled input",value:"Cannot edit"}};var y,h,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var w,N,j;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div>
      <label className="block text-sm font-medium mb-2">Username</label>
      <Input placeholder="Enter your username" />
    </div>
}`,...(j=(N=t.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var E,k,R;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'email@example.com'
  }
}`,...(R=(k=l.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var $,D,q;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter password'
  }
}`,...(q=(D=o.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var C,S,T;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled input',
    value: 'Cannot edit'
  }
}`,...(T=(S=d.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const P=["Default","WithLabel","Email","Password","Disabled"];export{s as Default,d as Disabled,l as Email,o as Password,t as WithLabel,P as __namedExportsOrder,O as default};
