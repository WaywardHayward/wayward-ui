import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as j}from"./index--qcDGAq6.js";import"./index-yBjzXJbu.js";const w={sm:"px-3 py-1.5 text-sm",md:"px-3 py-2 text-sm",lg:"px-4 py-3 text-base"},C={default:"border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",error:"border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500"},t=j.forwardRef(({size:v="md",variant:f="default",options:x,placeholder:n,className:y="",disabled:h,...S},k)=>{const O=`
    block w-full rounded-md border
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-gray-100
    focus:outline-none focus:ring-1
    disabled:cursor-not-allowed disabled:bg-gray-50 dark:disabled:bg-gray-900
    disabled:text-gray-500 dark:disabled:text-gray-400
    appearance-none
    bg-no-repeat bg-right
    pr-10
  `.replace(/\s+/g," ").trim();return e.jsxs("div",{className:"relative",children:[e.jsxs("select",{ref:k,className:`
          ${O}
          ${w[v]}
          ${C[f]}
          ${y}
        `.replace(/\s+/g," ").trim(),disabled:h,...S,children:[n&&e.jsx("option",{value:"",children:n}),x.map(a=>e.jsx("option",{value:a.value,disabled:a.disabled,children:a.label},a.value))]}),e.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:e.jsx("svg",{className:"w-5 h-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]})});t.displayName="Select";t.__docgenInfo={description:"Select component with consistent styling and variants",methods:[],displayName:"Select",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "error"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const T={title:"Forms/Select",component:t,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],placeholder:"Choose an option..."}},l={args:{options:[{value:"uk",label:"United Kingdom"},{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"}],placeholder:"Select a country..."}},s={args:{options:[{value:"1",label:"Option 1"}],placeholder:"Disabled select",disabled:!0}};var o,d,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    options: [{
      value: '1',
      label: 'Option 1'
    }, {
      value: '2',
      label: 'Option 2'
    }, {
      value: '3',
      label: 'Option 3'
    }],
    placeholder: 'Choose an option...'
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var u,c,p;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'uk',
      label: 'United Kingdom'
    }, {
      value: 'us',
      label: 'United States'
    }, {
      value: 'ca',
      label: 'Canada'
    }, {
      value: 'au',
      label: 'Australia'
    }],
    placeholder: 'Select a country...'
  }
}`,...(p=(c=l.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,b,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    options: [{
      value: '1',
      label: 'Option 1'
    }],
    placeholder: 'Disabled select',
    disabled: true
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const U=["Default","WithCountries","Disabled"];export{r as Default,s as Disabled,l as WithCountries,U as __namedExportsOrder,T as default};
