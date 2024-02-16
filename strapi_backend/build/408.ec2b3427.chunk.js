"use strict";(self.webpackChunkstrapi_backend=self.webpackChunkstrapi_backend||[]).push([[408],{80408:(I,D,_)=>{_.r(D),_.d(D,{LoginEE:()=>T});var E=_(92132),P=_(48653),a=_(94061),n=_(83997),o=_(30893),l=_(54894),i=_(79793),O=_(46850),M=_(77452),r=_(96961),A=_(15126),d=_(63299),h=_(67014),s=_(59080),L=_(79275),B=_(14718),t=_(21272),K=_(82437),m=_(61535),g=_(5790),x=_(12083),j=_(35223),f=_(5409),y=_(74930),c=_(2600),S=_(48940),$=_(41286),N=_(51187),F=_(56336),Z=_(39404),z=_(58692),G=_(54257),J=_(501),Y=_(57646),H=_(23120),Q=_(44414),V=_(25962),X=_(14664),u=_(42588),p=_(90325),e=_(62785),k=_(87443),w=_(41032),b=_(22957),q=_(93179),__=_(73055),E_=_(15747),s_=_(85306),t_=_(77965),a_=_(26509),n_=_(84624),O_=_(71210),D_=_(32058),P_=_(81185),M_=_(82261);const C=(0,i.Ay)(P.c)`
  flex: 1;
`,T=v=>{const{formatMessage:U}=(0,l.A)(),{isLoading:W,data:R=[]}=(0,O.g)(void 0,{skip:!window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!W&&R.length===0?(0,E.jsx)(O.L,{...v}):(0,E.jsx)(O.L,{...v,children:(0,E.jsx)(a.a,{paddingTop:7,children:(0,E.jsxs)(n.s,{direction:"column",alignItems:"stretch",gap:7,children:[(0,E.jsxs)(n.s,{children:[(0,E.jsx)(C,{}),(0,E.jsx)(a.a,{paddingLeft:3,paddingRight:3,children:(0,E.jsx)(o.o,{variant:"sigma",textColor:"neutral600",children:U({id:"Auth.login.sso.divider"})})}),(0,E.jsx)(C,{})]}),(0,E.jsx)(M.S,{providers:R,displayAllProviders:!1})]})})})}},77452:(I,D,_)=>{_.d(D,{S:()=>r});var E=_(92132),P=_(90151),a=_(68074),n=_(79739),o=_(83997),l=_(30893),i=_(54894),O=_(71389),M=_(79793);const r=({providers:s,displayAllProviders:L})=>{const{formatMessage:B}=(0,i.A)();return L?(0,E.jsx)(P.x,{gap:4,children:s.map(t=>(0,E.jsx)(a.E,{col:4,children:(0,E.jsx)(d,{provider:t})},t.uid))}):s.length>2&&!L?(0,E.jsxs)(P.x,{gap:4,children:[s.slice(0,2).map(t=>(0,E.jsx)(a.E,{col:4,children:(0,E.jsx)(d,{provider:t})},t.uid)),(0,E.jsx)(a.E,{col:4,children:(0,E.jsx)(n.m,{label:B({id:"global.see-more"}),children:(0,E.jsx)(h,{as:O.N_,to:"/auth/providers",children:(0,E.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,E.jsx)(A,{justifyContent:"center",children:s.map(t=>(0,E.jsx)(d,{provider:t},t.uid))})},A=(0,M.Ay)(o.s)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:s})=>s.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:s})=>s.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:s})=>s.spaces[2]};
  }
`,d=({provider:s})=>(0,E.jsx)(n.m,{label:s.displayName,children:(0,E.jsx)(h,{href:`${window.strapi.backendURL}/admin/connect/${s.uid}`,children:s.icon?(0,E.jsx)("img",{src:s.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,E.jsx)(l.o,{children:s.displayName})})}),h=M.Ay.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:s})=>s.colors.neutral150};
  border-radius: ${({theme:s})=>s.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:s})=>s.colors.neutral600};
`}}]);
