"use strict";(self.webpackChunkstrapi_backend=self.webpackChunkstrapi_backend||[]).push([[3316],{23316:(B,O,_)=>{_.r(O),_.d(O,{AdminSeatInfoEE:()=>m});var s=_(92132),o=_(68074),E=_(30893),D=_(83997),t=_(79739),P=_(58805),d=_(21610),a=_(96961),i=_(68994),n=_(14595),l=_(54894),R=_(82437),U=_(46168),T=_(42551),y=_(21272),N=_(72810),F=_(18022),G=_(46850),H=_(15126),Y=_(63299),Z=_(67014),J=_(59080),z=_(79275),V=_(14718),Q=_(61535),X=_(5790),$=_(12083),u=_(35223),p=_(5409),k=_(74930),w=_(2600),b=_(48940),q=_(41286),__=_(51187),s_=_(56336),E_=_(39404),t_=_(58692),a_=_(54257),n_=_(501),O_=_(57646),D_=_(23120),M_=_(44414),o_=_(25962),P_=_(14664),d_=_(42588),i_=_(90325),l_=_(62785),L_=_(87443),A_=_(41032),C_=_(22957),v_=_(93179),I_=_(73055),B_=_(15747),R_=_(85306),U_=_(77965),T_=_(26509),K_=_(84624),W_=_(71210),m_=_(32058),r_=_(81185),h_=_(82261);const K="https://cloud.strapi.io/profile/billing",W="https://strapi.io/billing/request-seats",m=()=>{const{formatMessage:M}=(0,l.A)(),{settings:r}=(0,R.d4)(U.s),{isLoading:A,allowedActions:{canRead:h,canCreate:g,canUpdate:f,canDelete:x}}=(0,a.ec)(r?.users??{}),{license:C,isError:e,isLoading:j}=(0,T.u)({enabled:!A&&h&&g&&f&&x});if(e||(A||j)||!C)return null;const{licenseLimitStatus:c,enforcementUserCount:v,permittedSeats:L,isHostedOnStrapiCloud:I}=C;return L?(0,s.jsxs)(o.E,{col:6,s:12,children:[(0,s.jsx)(E.o,{variant:"sigma",textColor:"neutral600",children:M({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})}),(0,s.jsxs)(D.s,{gap:2,children:[(0,s.jsx)(D.s,{children:(0,s.jsx)(E.o,{as:"p",children:M({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:L,enforcementUserCount:v,text:S=>(0,s.jsx)(E.o,{fontWeight:"semiBold",textColor:v>L?"danger500":void 0,children:S})})})}),c==="OVER_LIMIT"&&(0,s.jsx)(t.m,{description:M({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),children:(0,s.jsx)(P.I,{width:(0,a.a8)(14),height:(0,a.a8)(14),color:"danger500",as:i.A})})]}),(0,s.jsx)(d.N,{href:I?K:W,isExternal:!0,endIcon:(0,s.jsx)(n.A,{}),children:M({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:I})})]}):null}},42551:(B,O,_)=>{_.d(O,{u:()=>E});var s=_(21272),o=_(46850);function E({enabled:D}={enabled:!0}){const{data:t,isError:P,isLoading:d}=(0,o.n)(void 0,{skip:!D}),a=s.useCallback(i=>{const n=t?.data?.features.find(l=>l.name===i);return n&&"options"in n?n.options:{}},[t]);return{license:t?.data,getFeature:a,isError:P,isLoading:d}}}}]);
