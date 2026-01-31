import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const x={sm:"w-4 h-4",md:"w-6 h-6",lg:"w-8 h-8",xl:"w-12 h-12"},h={primary:"text-blue-600",secondary:"text-gray-600",white:"text-white"};function u({size:g="md",variant:f="primary",className:y=""}){return s.jsxs("svg",{className:`
        animate-spin
        ${x[g]}
        ${h[f]}
        ${y}
      `.trim(),fill:"none",viewBox:"0 0 24 24",children:[s.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),s.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}u.__docgenInfo={description:`Spinner component for loading states\r
Consistent loading indicators across the app`,methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "white"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"white"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const z={title:"Components/Spinner",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},e={args:{}},a={args:{size:"sm"}},r={args:{size:"lg"}};var t,n,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {}
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var o,i,m;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const S=["Default","Small","Large"];export{e as Default,r as Large,a as Small,S as __namedExportsOrder,z as default};
