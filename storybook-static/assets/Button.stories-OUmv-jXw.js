import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const $={primary:"bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-400 disabled:text-gray-600",secondary:"border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:text-gray-400",ghost:"text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:text-gray-400",danger:"bg-red-600 hover:bg-red-700 text-white disabled:bg-gray-400 disabled:text-gray-600",success:"bg-green-600 hover:bg-green-700 text-white disabled:bg-gray-400 disabled:text-gray-600"},A={xs:"px-2 py-1 text-xs",sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-base",xl:"px-8 py-4 text-lg"};function j({children:k,variant:z="primary",size:V="md",type:C="button",onClick:D,disabled:G=!1,loading:a=!1,icon:r,iconPosition:d="left",fullWidth:L=!1,className:P=""}){const _=G||a;return e.jsxs("button",{type:C,onClick:D,disabled:_,className:`
        inline-flex items-center justify-center
        font-medium rounded-lg
        transition-colors
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        disabled:cursor-not-allowed
        ${$[z]}
        ${A[V]}
        ${L?"w-full":""}
        ${P}
      `.trim(),children:[a&&e.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),!a&&r&&d==="left"&&e.jsx("span",{className:"mr-2 w-4 h-4",children:r}),k,!a&&r&&d==="right"&&e.jsx("span",{className:"ml-2 w-4 h-4",children:r})]})}j.__docgenInfo={description:`Unified Button component\r
Replaces ActionButton and inline button patterns`,methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "ghost" | "danger" | "success"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"success"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},type:{required:!1,tsType:{name:"union",raw:'"button" | "submit" | "reset"',elements:[{name:"literal",value:'"button"'},{name:"literal",value:'"submit"'},{name:"literal",value:'"reset"'}]},description:"",defaultValue:{value:'"button"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const H={title:"Components/Button",component:j,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","ghost"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"}}},t={args:{variant:"primary",children:"Primary Button"}},s={args:{variant:"secondary",children:"Secondary Button"}},n={args:{variant:"ghost",children:"Ghost Button"}},l={args:{size:"sm",children:"Small Button"}},o={args:{size:"lg",children:"Large Button"}},i={args:{disabled:!0,children:"Disabled Button"}};var c,u,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,g,y;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,b,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost Button'
  }
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,x,B;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small Button'
  }
}`,...(B=(x=l.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var w,S,N;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: 'Large Button'
  }
}`,...(N=(S=o.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var T,q,R;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled Button'
  }
}`,...(R=(q=i.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};const I=["Primary","Secondary","Ghost","Small","Large","Disabled"];export{i as Disabled,n as Ghost,o as Large,t as Primary,s as Secondary,l as Small,I as __namedExportsOrder,H as default};
