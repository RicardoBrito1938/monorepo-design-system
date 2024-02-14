import{j as i}from"./jsx-runtime--26OcTxz.js";import{c as x}from"./index-Da4GGGQG.js";/* empty css               */import{r as d,R as e}from"./index-BLgStI3F.js";import"./extends-CCbyfPlC.js";import"./index-BAqIUODc.js";import"./_commonjsHelpers-BosuxZz1.js";var ce=d.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Q=function(t,o,a){var n=a.get(t);return n?n(o):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function j(r,t){if(r==null)return{};var o={},a=Object.keys(r),n,s;for(s=0;s<a.length;s++)n=a[s],!(t.indexOf(n)>=0)&&(o[n]=r[n]);return o}var X=d.forwardRef(function(r,t){var o=r.alt,a=r.color,n=r.size,s=r.weight,te=r.mirrored,ne=r.children,oe=r.renderPath,ae=j(r,["alt","color","size","weight","mirrored","children","renderPath"]),u=d.useContext(ce),E=u.color,v=E===void 0?"currentColor":E,C=u.size,b=u.weight,ie=b===void 0?"regular":b,L=u.mirrored,se=L===void 0?!1:L,le=j(u,["color","size","weight","mirrored"]);return e.createElement("svg",Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:n??C,height:n??C,fill:a??v,viewBox:"0 0 256 256",transform:te||se?"scale(-1, 1)":void 0},le,ae),!!o&&e.createElement("title",null,o),ne,e.createElement("rect",{width:"256",height:"256",fill:"none"}),oe(s??ie,a??v))});X.displayName="IconBase";const Y=X;var l=new Map;l.set("bold",function(r){return e.createElement(e.Fragment,null,e.createElement("polyline",{points:"160 208 80 128 160 48",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});l.set("duotone",function(r){return e.createElement(e.Fragment,null,e.createElement("polygon",{points:"160 208 80 128 160 48 160 208",opacity:"0.2"}),e.createElement("polygon",{points:"160 208 80 128 160 48 160 208",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});l.set("fill",function(){return e.createElement(e.Fragment,null,e.createElement("path",{d:"M163.1,40.6a8.4,8.4,0,0,0-8.8,1.7l-80,80a8.1,8.1,0,0,0,0,11.4l80,80A8.3,8.3,0,0,0,160,216a8.5,8.5,0,0,0,3.1-.6A8,8,0,0,0,168,208V48A8,8,0,0,0,163.1,40.6Z"}))});l.set("light",function(r){return e.createElement(e.Fragment,null,e.createElement("polyline",{points:"160 208 80 128 160 48",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});l.set("thin",function(r){return e.createElement(e.Fragment,null,e.createElement("polyline",{points:"160 208 80 128 160 48",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});l.set("regular",function(r){return e.createElement(e.Fragment,null,e.createElement("polyline",{points:"160 208 80 128 160 48",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var ue=function(t,o){return Q(t,o,l)},ee=d.forwardRef(function(r,t){return e.createElement(Y,Object.assign({ref:t},r,{renderPath:ue}))});ee.displayName="CaretLeft";const de=ee;var c=new Map;c.set("bold",function(r){return e.createElement(e.Fragment,null,e.createElement("polyline",{points:"96 48 176 128 96 208",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});c.set("duotone",function(r){return e.createElement(e.Fragment,null,e.createElement("polygon",{points:"96 48 176 128 96 208 96 48",opacity:"0.2"}),e.createElement("polygon",{points:"96 48 176 128 96 208 96 48",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});c.set("fill",function(){return e.createElement(e.Fragment,null,e.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))});c.set("light",function(r){return e.createElement(e.Fragment,null,e.createElement("polyline",{points:"96 48 176 128 96 208",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});c.set("thin",function(r){return e.createElement(e.Fragment,null,e.createElement("polyline",{points:"96 48 176 128 96 208",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});c.set("regular",function(r){return e.createElement(e.Fragment,null,e.createElement("polyline",{points:"96 48 176 128 96 208",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var me=function(t,o){return Q(t,o,c)},re=d.forwardRef(function(r,t){return e.createElement(Y,Object.assign({ref:t},r,{renderPath:me}))});re.displayName="CaretRight";const he=re,Ee={title:"Components/Button",component:x.Root,args:{children:"Button",variant:"primary",size:"md",disabled:!1},argTypes:{variant:{options:["primary","secondary","success","error","warning"],control:{type:"inline-radio"}},size:{options:["sm","md","lg"],control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}},action:"click"},parameters:{docs:{description:{component:`This story displays the \`Button\` component, which is a React Element built using Pattern Composition.

## Usage:
\`Button.Root\` - The root element of the button.

\`Button.Prefix\` - The element that will appear on the left side.

\`Button.Suffix\` - The element that will appear on the right side.

## API Reference:
### Root

\`size: 'sm' | 'md' | 'lg'\` - The size of the button.

\`variant: 'primary' | 'secondary' | 'success' | 'error' | 'warning'\` - The variant.

\`disabled: boolean\` - Whether the button is disabled.`}}}},m={},h={args:{variant:"secondary",children:"Create new"}},p={args:{variant:"success",children:"Create new"}},g={args:{variant:"warning",children:"Create new"}},f={args:{variant:"error",children:"Create new"}},k={args:{children:i.jsxs(i.Fragment,{children:[i.jsx(x.Prefix,{children:i.jsx(de,{weight:"bold"})}),"Button"]})}},w={args:{children:i.jsxs(i.Fragment,{children:["Button",i.jsx(x.Suffix,{children:i.jsx(he,{weight:"bold"})})]})}},y={args:{disabled:!0}};var P,W,B;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:"{}",...(B=(W=m.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var S,F,R;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Create new'
  }
}`,...(R=(F=h.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var z,_,$;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Create new'
  }
}`,...($=(_=p.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var T,A,O;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Create new'
  }
}`,...(O=(A=g.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var I,M,N;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    children: 'Create new'
  }
}`,...(N=(M=f.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var D,U,V;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: <>
        <Button.Prefix>
          <CaretLeft weight="bold" />
        </Button.Prefix>
        Button
      </>
  }
}`,...(V=(U=k.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var Z,K,q;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    children: <>
        Button
        <Button.Suffix>
          <CaretRight weight="bold" />
        </Button.Suffix>
      </>
  }
}`,...(q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var G,H,J;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(J=(H=y.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const ve=["Primary","Secondary","Success","Warning","Error","WithPrefix","WithSuffix","Disabled"];export{y as Disabled,f as Error,m as Primary,h as Secondary,p as Success,g as Warning,k as WithPrefix,w as WithSuffix,ve as __namedExportsOrder,Ee as default};
