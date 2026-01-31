import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{R as J}from"./index--qcDGAq6.js";import"./index-yBjzXJbu.js";const L={xs:"w-6 h-6 text-xs",sm:"w-8 h-8 text-sm",md:"w-10 h-10 text-base",lg:"w-12 h-12 text-lg",xl:"w-16 h-16 text-xl"},N={circle:"rounded-full",square:"rounded-lg"};function q({src:i,alt:n="",initials:z,size:b="md",variant:j="circle",className:I=""}){const[T,k]=J.useState(!1),E=z||n.split(" ").map(D=>D[0]).join("").toUpperCase().slice(0,2),C=!i||T;return l.jsx("div",{className:`
      inline-flex items-center justify-center
      bg-gray-200 dark:bg-gray-700
      text-gray-700 dark:text-gray-300
      font-medium
      overflow-hidden
      ${L[b]}
      ${N[j]}
      ${I}
    `.trim(),children:C?l.jsx("span",{children:E}):l.jsx("img",{src:i,alt:n,className:"w-full h-full object-cover",onError:()=>k(!0)})})}q.__docgenInfo={description:`Avatar component for user profile pictures with fallbacks\r
Handles missing images gracefully with initials`,methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},initials:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"circle" | "square"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"square"'}]},description:"",defaultValue:{value:'"circle"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const F={title:"Components/Avatar",component:q,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},e={args:{src:"https://i.pravatar.cc/150?img=1",alt:"User Avatar"}},a={args:{initials:"AS",alt:"Alex Smith"}},r={args:{src:"https://i.pravatar.cc/150?img=2",size:"sm",alt:"Small Avatar"}},s={args:{src:"https://i.pravatar.cc/150?img=3",size:"lg",alt:"Large Avatar"}},t={args:{initials:"JD",size:"md",alt:"John Doe"}};var c,o,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User Avatar'
  }
}`,...(m=(o=e.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var p,u,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    initials: 'AS',
    alt: 'Alex Smith'
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,v,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=2',
    size: 'sm',
    alt: 'Small Avatar'
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var h,x,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    size: 'lg',
    alt: 'Large Avatar'
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var A,S,w;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    initials: 'JD',
    size: 'md',
    alt: 'John Doe'
  }
}`,...(w=(S=t.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const R=["WithImage","WithInitials","Small","Large","Fallback"];export{t as Fallback,s as Large,r as Small,e as WithImage,a as WithInitials,R as __namedExportsOrder,F as default};
