"use strict";(self.webpackChunkstrapi_backend=self.webpackChunkstrapi_backend||[]).push([[6558],{61382:(h,D,s)=>{s.d(D,{B:()=>y,D:()=>R,H:()=>K,R:()=>I});var t=s(92132),l=s(83997),d=s(30893),P=s(42455),O=s(38413),g=s(4198),m=s(55356),a=s(96961),e=s(9005),o=s(46270),E=s(54894),c=s(46850),T=s(25524),r=s(79793);const M=(0,r.Ay)(l.s)`
  svg path {
    fill: ${({theme:i})=>i.colors.neutral600};
  }
`,B=({name:i})=>(0,t.jsxs)(l.s,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,a.a8)(300),children:[(0,t.jsx)(M,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,t.jsx)(e.A,{width:`${8/16}rem`})}),(0,t.jsx)(d.o,{fontWeight:"bold",children:i})]}),R=()=>(0,t.jsx)(c.P,{renderItem:i=>{if(i.type===T.D.STAGE)return(0,t.jsx)(B,{name:typeof i.item=="string"?i.item:null})}}),I=({children:i})=>(0,t.jsx)(P.P,{children:(0,t.jsx)(O.g,{tabIndex:-1,children:(0,t.jsx)(g.s,{children:i})})}),y=({href:i})=>{const{formatMessage:C}=(0,E.A)();return(0,t.jsx)(a.N_,{startIcon:(0,t.jsx)(o.A,{}),to:i,children:C({id:"global.back",defaultMessage:"Back"})})},K=({title:i,subtitle:C,navigationAction:U,primaryAction:L})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.x7,{name:i}),(0,t.jsx)(m.Q,{navigationAction:U,primaryAction:L,title:i,subtitle:C})]})},86558:(h,D,s)=>{s.d(D,{ProtectedReviewWorkflowsPage:()=>Z});var t=s(92132),l=s(21272),d=s(83997),P=s(43064),O=s(35513),g=s(40216),m=s(26127),a=s(90361),e=s(33363),o=s(30893),E=s(98765),c=s(25641),T=s(88353),r=s(96961),M=s(5194),B=s(41909),R=s(50612),I=s(54894),y=s(17703),K=s(79793),i=s(46850),C=s(79988),U=s(42551),L=s(61382),j=s(45084),Y=s(25524),H=s(97498),Es=s(15126),ds=s(63299),Ms=s(67014),Ds=s(59080),Ps=s(79275),Os=s(14718),gs=s(82437),ms=s(61535),cs=s(5790),vs=s(12083),fs=s(35223),Ts=s(5409),Cs=s(74930),hs=s(2600),Ls=s(48940),As=s(41286),Ws=s(51187),Bs=s(56336),Rs=s(39404),Is=s(58692),ys=s(54257),Ks=s(501),Us=s(57646),js=s(23120),xs=s(44414),us=s(25962),ws=s(14664),ps=s(42588),Ss=s(90325),$s=s(62785),Ns=s(87443),Fs=s(41032),zs=s(22957),Gs=s(93179),Qs=s(73055),Ys=s(15747),Hs=s(85306),Js=s(77965),Xs=s(26509),Zs=s(84624),ks=s(71210),Vs=s(32058),bs=s(81185),qs=s(82261),st=s(56002);const J=(0,K.Ay)(r.N_)`
  align-items: center;
  height: ${(0,r.a8)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:n})=>`${n.spaces[2]}}`};
  width: ${(0,r.a8)(32)};

  svg {
    height: ${(0,r.a8)(12)};
    width: ${(0,r.a8)(12)};

    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:n})=>n.colors.neutral800};
      }
    }
  }
`,X=()=>{const{formatMessage:n}=(0,I.A)(),{push:A}=(0,y.W6)(),{trackUsage:S}=(0,r.z1)(),[x,u]=l.useState(null),[k,W]=l.useState(!1),{collectionTypes:V,singleTypes:b,isLoading:q}=(0,C.u)(),{meta:v,workflows:$,isLoading:w,deleteWorkflow:ss}=(0,H.u)(),[ts,N]=l.useState(!1),{_unstableFormatAPIError:os}=(0,r.wq)(),p=(0,r.hN)(),{getFeature:es,isLoading:F}=(0,U.u)(),ns=(0,i.j)(_=>_.admin_app.permissions.settings?.["review-workflows"]),{allowedActions:{canCreate:z,canDelete:_s}}=(0,r.ec)(ns),f=es("review-workflows")?.[Y.C],as=_=>[...V,...b].find(Q=>Q.uid===_)?.info.displayName,rs=_=>{u(_)},is=()=>{u(null)},ls=async()=>{if(x)try{N(!0);const _=await ss({id:x});if("error"in _){p({type:"warning",message:os(_.error)});return}u(null),p({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}catch{p({type:"warning",message:{id:"notification.error.unexpected",defaultMessage:"An error occurred"}})}finally{N(!1)}};return l.useEffect(()=>{!w&&!F&&f&&v&&v?.workflowCount>parseInt(f,10)&&W(!0)},[F,w,v,v?.workflowCount,f]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(L.H,{primaryAction:z&&(0,t.jsx)(r.z9,{startIcon:(0,t.jsx)(M.A,{}),size:"S",to:"/settings/review-workflows/create",onClick:_=>{f&&v&&v?.workflowCount>=parseInt(f,10)?(_.preventDefault(),W(!0)):S("willCreateWorkflow")},children:n({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),subtitle:n({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:n({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),(0,t.jsxs)(L.R,{children:[w||q?(0,t.jsx)(d.s,{justifyContent:"center",children:(0,t.jsx)(P.a,{children:n({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"})})}):(0,t.jsxs)(O.X,{colCount:3,footer:z&&(0,t.jsx)(g.S,{icon:(0,t.jsx)(M.A,{}),onClick:()=>{f&&v&&v?.workflowCount>=parseInt(f,10)?W(!0):(A("/settings/review-workflows/create"),S("willCreateWorkflow"))},children:n({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),rowCount:1,children:[(0,t.jsx)(m.d,{children:(0,t.jsxs)(a.Tr,{children:[(0,t.jsx)(e.Th,{children:(0,t.jsx)(o.o,{variant:"sigma",children:n({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"})})}),(0,t.jsx)(e.Th,{children:(0,t.jsx)(o.o,{variant:"sigma",children:n({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"})})}),(0,t.jsx)(e.Th,{children:(0,t.jsx)(o.o,{variant:"sigma",children:n({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"})})}),(0,t.jsx)(e.Th,{children:(0,t.jsx)(E.s,{children:n({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"})})})]})}),(0,t.jsx)(c.N,{children:$?.map(_=>(0,l.createElement)(a.Tr,{...(0,r.qM)({fn(G){G.target.nodeName!=="BUTTON"&&A(`/settings/review-workflows/${_.id}`)}}),key:`workflow-${_.id}`},(0,t.jsx)(e.Td,{width:(0,r.a8)(250),children:(0,t.jsx)(o.o,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:_.name})}),(0,t.jsx)(e.Td,{children:(0,t.jsx)(o.o,{textColor:"neutral800",children:_.stages.length})}),(0,t.jsx)(e.Td,{children:(0,t.jsx)(o.o,{textColor:"neutral800",children:(_?.contentTypes??[]).map(as).join(", ")})}),(0,t.jsx)(e.Td,{children:(0,t.jsxs)(d.s,{alignItems:"center",justifyContent:"end",children:[(0,t.jsx)(J,{to:`/settings/review-workflows/${_.id}`,"aria-label":n({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:_.name}),children:(0,t.jsx)(B.A,{})}),$.length>1&&_s&&(0,t.jsx)(T.K,{"aria-label":n({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:(0,t.jsx)(R.A,{}),noBorder:!0,onClick:()=>{rs(String(_.id))}})]})})))})]}),(0,t.jsx)(r.TM,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:ts,isOpen:!!x,onToggleDialog:is,onConfirm:ls}),(0,t.jsxs)(j.L.Root,{isOpen:k,onClose:()=>W(!1),children:[(0,t.jsx)(j.L.Title,{children:n({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(j.L.Body,{children:n({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]})]})]})},Z=()=>{const n=(0,i.j)(A=>A.admin_app.permissions.settings?.["review-workflows"]?.main);return(0,t.jsx)(r.kz,{permissions:n,children:(0,t.jsx)(X,{})})}},79988:(h,D,s)=>{s.d(D,{u:()=>m});var t=s(21272),l=s(96961),d=s(46850);const P=d.m.injectEndpoints({endpoints:a=>({getComponents:a.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:e=>e.data}),getContentTypes:a.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:e=>e.data})}),overrideExisting:!1}),{useGetComponentsQuery:O,useGetContentTypesQuery:g}=P;function m(){const{_unstableFormatAPIError:a}=(0,l.wq)(),e=(0,l.hN)(),o=O(),E=g();t.useEffect(()=>{E.error&&e({type:"warning",message:a(E.error)})},[E.error,a,e]),t.useEffect(()=>{o.error&&e({type:"warning",message:a(o.error)})},[o.error,a,e]);const c=o.isLoading||E.isLoading,T=t.useMemo(()=>(E?.data??[]).filter(M=>M.kind==="collectionType"&&M.isDisplayed),[E?.data]),r=t.useMemo(()=>(E?.data??[]).filter(M=>M.kind!=="collectionType"&&M.isDisplayed),[E?.data]);return{isLoading:c,components:t.useMemo(()=>o?.data??[],[o?.data]),collectionTypes:T,singleTypes:r}}},97498:(h,D,s)=>{s.d(D,{u:()=>l});var t=s(56002);function l(d={}){const{id:P="",...O}=d,{data:g,isLoading:m}=(0,t.c)({id:P,populate:"stages",...O}),[a]=(0,t.d)(),[e]=(0,t.e)(),[o]=(0,t.f)(),{workflows:E,meta:c}=g??{};return{meta:c,workflows:E,isLoading:m,createWorkflow:a,updateWorkflow:e,deleteWorkflow:o}}},40216:(h,D,s)=>{s.d(D,{S:()=>e});var t=s(92132),l=s(79793),d=s(94061),P=s(48653),O=s(83997),g=s(30893);const m=(0,l.Ay)(d.a)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:o})=>o.colors.primary600};
  }
`,a=(0,l.Ay)(d.a)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,e=({children:o,icon:E,...c})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(P.c,{}),(0,t.jsx)(a,{as:"button",background:"primary100",padding:5,...c,children:(0,t.jsxs)(O.s,{children:[(0,t.jsx)(m,{"aria-hidden":!0,background:"primary200",children:E}),(0,t.jsx)(d.a,{paddingLeft:3,children:(0,t.jsx)(g.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);
