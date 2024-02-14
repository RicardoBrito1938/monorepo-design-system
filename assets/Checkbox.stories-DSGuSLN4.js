import{j as e}from"./jsx-runtime--26OcTxz.js";import{C as o}from"./index-Da4GGGQG.js";/* empty css               */import"./index-BLgStI3F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-BAqIUODc.js";const f={title:"Form/Checkbox",component:o.Root,args:{size:"md",checked:!0},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"},checked:{control:{type:"boolean"}}},action:"click"},parameters:{docs:{description:{component:`This story displays the \`Checkbox\` component, which is a React Element built using Pattern Composition.

## Usage:
\`Checkbox.Root\` - The controller of the checkbox.

\`Checkbox.Indicator\` - The element that will handle the ui feedback showing the state of the component.

\`Checkbox.Check\` - The check mark that will appear when the state is .

## API Reference:
### Root

\`size: 'sm' | 'md' | 'lg'\` - The size of the checkbox.

\`checked: boolean\` - Whether the checkbox is checked.`}}}},n={args:{children:e.jsx(e.Fragment,{children:e.jsx(o.Indicator,{children:e.jsx(o.Check,{})})})}},r={args:{children:e.jsx(e.Fragment,{children:e.jsx(o.Indicator,{children:e.jsx(o.Check,{})})})},decorators:[t=>{var c;return e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[e.jsx("div",{children:t()}),e.jsx("p",{className:` text-primary-green-500 text-sf-${((c=t().props)==null?void 0:c.size)??"sm"} font-auto`,children:"Checkbox Label"})]})}]};var s,a,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: <>
        <Checkbox.Indicator>
          <Checkbox.Check />
        </Checkbox.Indicator>
      </>
  }
}`,...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var h,d,l;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <>
        <Checkbox.Indicator>
          <Checkbox.Check />
        </Checkbox.Indicator>
      </>
  },
  decorators: [Story => {
    return <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '10px'
    }}>
          <div>{Story()}</div>
          <p className={\` text-primary-green-500 text-sf-\${Story().props?.size ?? 'sm'} font-auto\`}>
            Checkbox Label
          </p>
        </div>;
  }]
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const u=["Primary","WithLabel"];export{n as Primary,r as WithLabel,u as __namedExportsOrder,f as default};
