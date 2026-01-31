import{j as c}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const T={default:"bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",success:"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",warning:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",danger:"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",info:"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",achievement:"bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-sm"},W={sm:"px-2 py-0.5 text-xs",md:"px-2.5 py-1 text-sm",lg:"px-3 py-1.5 text-base"};function k({children:N,variant:R="default",size:S="md",icon:n,className:E=""}){return c.jsxs("span",{className:`
      inline-flex items-center
      font-medium rounded-full
      ${T[R]}
      ${W[S]}
      ${E}
    `.trim(),children:[n&&c.jsx("span",{className:"mr-1 w-3 h-3",children:n}),N]})}k.__docgenInfo={description:`Badge component for status indicators and achievements\r
Used for flight badges, achievement indicators, status labels`,methods:[],displayName:"Badge",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:`| "default"\r
| "success"\r
| "warning"\r
| "danger"\r
| "info"\r
| "achievement"`,elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"info"'},{name:"literal",value:'"achievement"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const B={title:"Components/Badge",component:k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","success","warning","error"]}}},e={args:{children:"Default"}},a={args:{variant:"success",children:"Success"}},r={args:{variant:"warning",children:"Warning"}},s={args:{variant:"danger",children:"Error"}},t={args:{variant:"success",children:"42"}};var l,o,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Default'
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Success'
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,p,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Warning'
  }
}`,...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var v,h,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Error'
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,y,w;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: '42'
  }
}`,...(w=(y=t.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const D=["Default","Success","Warning","Error","WithNumbers"];export{e as Default,s as Error,a as Success,r as Warning,t as WithNumbers,D as __namedExportsOrder,B as default};
