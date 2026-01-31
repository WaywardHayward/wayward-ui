import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function u({children:p,className:b="",padding:h="md",variant:g="default",header:r,footer:s,onClick:d}){const v={none:"",sm:"p-4",md:"p-6",lg:"p-8"},x={default:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm",outlined:"bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600",elevated:"bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700",interactive:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow cursor-pointer"},f=d?"button":"div";return e.jsxs(f,{className:`rounded-xl ${x[g]} ${b}`,onClick:d,children:[r&&e.jsx("div",{className:"px-6 py-4 border-b border-slate-200 dark:border-slate-700",children:r}),e.jsx("div",{className:v[h],children:p}),s&&e.jsx("div",{className:"px-6 py-4 border-t border-slate-200 dark:border-slate-700",children:s})]})}u.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},padding:{required:!1,tsType:{name:"union",raw:'"none" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "outlined" | "elevated" | "interactive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"elevated"'},{name:"literal",value:'"interactive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},header:{required:!1,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const w={title:"Components/Card",component:u,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold mb-2",children:"Card Title"}),e.jsx("p",{className:"text-gray-600",children:"This is some card content."})]})}},t={args:{children:e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold mb-3",children:"Featured Card"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"Cards are flexible containers that can hold any content."}),e.jsx("button",{className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"Action"})]})}};var n,l,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: <div>
        <h3 className="text-lg font-bold mb-2">Card Title</h3>
        <p className="text-gray-600">This is some card content.</p>
      </div>
  }
}`,...(o=(l=a.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var i,c,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: <div>
        <h2 className="text-xl font-bold mb-3">Featured Card</h2>
        <p className="text-gray-600 mb-4">
          Cards are flexible containers that can hold any content.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Action
        </button>
      </div>
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const j=["Default","WithMultipleElements"];export{a as Default,t as WithMultipleElements,j as __namedExportsOrder,w as default};
