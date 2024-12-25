import{_ as a,o as n,c,a as e,j as h,i as f,t as P,k as b,F as x,h as w,b as l,l as I,w as i,d as u,r as m,m as j,T as S,p as _}from"./index-W4I-bz_-.js";import{A as T}from"./AppPanel-DnlkFmUw.js";const A={class:"iphone-placeholder"},C=["src"],B={__name:"IphonePlaceholder",props:{imgSrc:String,imgStyle:Object},setup(r){return(s,o)=>(n(),c("figure",A,[e("img",{class:"iphone-placeholder__img",src:r.imgSrc,style:h(r.imgStyle)},null,12,C)]))}},$=a(B,[["__scopeId","data-v-7bb5ec28"]]),M={class:"desktop-placeholder"},N=["src"],K={__name:"DesktopPlaceholder",props:{imgSrc:String,imgStyle:Object},setup(r){return(s,o)=>(n(),c("figure",M,[e("img",{class:"desktop-placeholder__img",src:r.imgSrc,style:h(r.imgStyle)},null,12,N)]))}},L=a(K,[["__scopeId","data-v-ad6c1c1f"]]),F={class:"portfolio-item"},V={class:"portfolio-item__title"},W={class:"portfolio-item__project-name"},z={class:"portfolio__images"},R={__name:"PortfolioTemplate",props:{projectName:String,images:Array},setup(r){return(s,o)=>(n(),c("div",F,[e("h4",V,[o[0]||(o[0]=f(" Project name: ")),e("span",W,P(r.projectName),1)]),b(s.$slots,"description",{},void 0),e("div",z,[(n(!0),c(x,null,w(r.images,(t,p)=>(n(),c("div",{key:p,class:"portfolio_item"},[t.isMobile?(n(),l($,{key:0,imgSrc:t.src,imgStyle:t.style},null,8,["imgSrc","imgStyle"])):t.isDesktop?(n(),l(L,{key:1,imgSrc:t.src,imgStyle:t.style},null,8,["imgSrc","imgStyle"])):I("",!0)]))),128))])]))}},d=a(R,[["__scopeId","data-v-951b74ac"]]),U="/assets/tinh-lai-mobile-CKgbA5R_.png",G="/assets/tinh-lai-desktop-BzbqcTzc.png",H="/assets/tinh-lai-result-mobile-LLROUTea.png",q="/assets/tinh-lai-result-desktop-lUrfHzgW.png",J={__name:"TinhLai",setup(r){const s=[{src:U,isMobile:!0},{src:G,isDesktop:!0},{src:H,isMobile:!0},{src:q,isDesktop:!0,style:{objectPosition:"0 -30px"}}];return(o,t)=>(n(),l(d,{images:s,"project-name":"tinhlai.com"},{description:i(()=>t[0]||(t[0]=[e("ul",{class:"disc"},[e("li",null,[e("strong",null,"Project type:"),e("span",{class:"tinh-lai__text"},"Personal project.")]),e("li",null,[e("strong",null,"Website:"),e("a",{href:"https://www.tinhlai.com/en",rel:"noopener noreferrer",target:"_blank"}," https://www.tinhlai.com/en ")]),e("li",null,[e("strong",null,"Github repository:"),e("a",{href:"https://github.com/TDAK1509/tinhlai",rel:"noopener noreferrer",target:"_blank"}," https://github.com/TDAK1509/tinhlai ")]),e("li",null,[e("strong",null,"Description:"),e("span",{class:"tinh-lai__text"},"Developed a multilingual compound interest calculator to learn Tailwind CSS.")]),e("li",null,[e("strong",null,"Technologies used:"),e("span",{class:"tinh-lai__text"},"NuxtJS, VueJS, Tailwind, Netlify.")])],-1)])),_:1}))}},O=a(J,[["__scopeId","data-v-c2b98df6"]]),E="/assets/usergram-1-B5Mwj29h.png",X="/assets/usergram-2-sIFp3-pP.png",Y="/assets/usergram-3-BAHePmWH.png",Q="/assets/usergram-4-TokpuzDI.png",Z="/assets/usergram-5-BL2y3eag.png",ee={__name:"BebitUsergram",setup(r){const s=[{src:E,isDesktop:!0},{src:X,isDesktop:!0},{src:Y,isDesktop:!0},{src:Q,isDesktop:!0},{src:Z,isDesktop:!0}];return(o,t)=>(n(),l(d,{images:s,"project-name":"Usergram"},{description:i(()=>t[0]||(t[0]=[e("ul",{class:"disc"},[e("li",null,[e("strong",null,"Project type:"),e("span",{class:"usergram__text"},"work for company"),e("a",{href:"https://www.bebit.co.jp/english/",rel:"noopener noreferrer",target:"_blank"}," beBit Inc. ")]),e("li",null,[e("strong",null,"Website:"),e("a",{href:"https://app.usergram.info",rel:"noopener noreferrer",target:"_blank"}," https://app.usergram.info ")]),e("li",null,[e("strong",null,"Description:"),e("span",{class:"usergram__text"}," A tool to improve UX by analyzing users' behaviors. ")]),e("li",null,[e("strong",null,"Technologies I worked with:"),e("span",{class:"usergram__text"}," Vue2, Vuex, Vue3, Django, Cypress, Jest, Docker, AWS, Terraform, Sentry, Github Actions, Micro Frontends, Micro Services. ")]),e("li",null,[e("strong",null,"My role:"),e("ul",{class:"sub"},[e("li",null," Led the migration of a Vue2 monolithic codebase to a Vue3 microfrontend architecture, enhancing scalability and maintainability. "),e("li",null," Implemented automated tests and CI systems for the front end, reducing release time from 30-60 minutes to 10-15 minutes. "),e("li",null," Developed a semi-automated release process, improving release quality and efficiency, enabling multiple small releases per sprint instead of a single large release. "),e("li",null," Documented the front-end onboarding process, streamlining developer onboarding and reducing reliance on direct support. "),e("li",null," Mentored team members by resolving challenges, fostering collaboration, and enhancing overall project efficiency. "),e("li",null," Reviewed 100-200 PRs per quarter, maintaining code quality through thorough code reviews. "),e("li",null," Contributed 50-100 PRs per quarter, driving feature development and improving the codebase. "),e("li",null,[f(" Creating tools to make developers' lives easier: "),e("ul",{class:"sub"},[e("li",{class:"usergram__text"},[e("span",null,"Github action marketplace:"),e("a",{href:"https://github.com/marketplace/actions/set-pr-labels-based-on-pr-title",rel:"noopener noreferrer",target:"_blank"}," Set PR labels based on PR title ")]),e("li",{class:"usergram__text"},[e("span",null,"VSCode extension:"),e("a",{href:"https://marketplace.visualstudio.com/items?itemName=TDAK1509.with-functions-generator",rel:"noopener noreferrer",target:"_blank"}," with-functions-generator ")])])])])])],-1)])),_:1}))}},te=a(ee,[["__scopeId","data-v-043f5024"]]),se="/assets/pvicard-desktop-1-DcowAl2U.png",re="/assets/pvicard-desktop-2a-BKhT3Nxf.png",ne="/assets/pvicard-desktop-2b-C67CC_It.png",oe="/assets/pvicard-mobile-1a-SFj4verI.png",ae="/assets/pvicard-mobile-1b-lFHNIyOC.png",le="/assets/pvicard-mobile-2-BoPfW2Ug.png",ie={__name:"PviCard",setup(r){const s=[{src:se,isDesktop:!0},{src:oe,isMobile:!0,style:{objectPosition:"0 0"}},{src:ae,isMobile:!0,style:{objectPosition:"0 0"}},{src:re,isDesktop:!0},{src:ne,isDesktop:!0},{src:le,isMobile:!0}];return(o,t)=>(n(),l(d,{images:s,"project-name":"pvicard.com"},{description:i(()=>t[0]||(t[0]=[e("ul",{class:"disc"},[e("li",null,[e("strong",null,"Project type:"),e("span",{class:"pvicard__text"},"Freelancer service.")]),e("li",null,[e("strong",null,"Website:"),e("span",{class:"pvicard__text"},"Project stopped. ")]),e("li",null,[e("strong",null,"Github repositories:"),e("ul",{class:"sub"},[e("li",null,[e("a",{href:"https://github.com/TDAK1509/pvicard-web",rel:"noopener noreferrer",target:"_blank"}," https://github.com/TDAK1509/pvicard-web ")]),e("li",null,[e("a",{href:"https://github.com/TDAK1509/pvicard-cronjob",rel:"noopener noreferrer",target:"_blank"}," https://github.com/TDAK1509/pvicard-cronjob ")]),e("li",null,[e("a",{href:"https://github.com/TDAK1509/pvicard-deploy",rel:"noopener noreferrer",target:"_blank"}," https://github.com/TDAK1509/pvicard-deploy ")])])]),e("li",null,[e("strong",null,"Description:"),e("ul",{class:"sub"},[e("li",{class:"pvicard__text"}," Developed a tool for customers to activate purchased insurance policies. "),e("li",{class:"pvicard__text"}," Built a user interface with Django for seamless customer interaction. "),e("li",{class:"pvicard__text"}," Designed an admin dashboard in Django for efficient database management. "),e("li",{class:"pvicard__text"}," Created a Python cron job to integrate with the Lazada API, fetch purchased items, and update their status in the database using API keys provided by the Django backend. "),e("li",{class:"pvicard__text"}," Deployed the website using Docker and Nginx on DigitalOcean for reliable hosting. ")])])],-1)])),_:1}))}},ce=a(ie,[["__scopeId","data-v-d2149519"]]),pe="/assets/wordle-finder-1-PVCwAFSo.png",ue="/assets/wordle-finder-2-BNhu68bS.png",de="/assets/wordle-finder-3-B92XjLYT.png",ge={__name:"WordleFinder",setup(r){const s=[{src:pe,isMobile:!0},{src:ue,isMobile:!0},{src:de,isDesktop:!0}];return(o,t)=>(n(),l(d,{images:s,"project-name":"Wordle finder"},{description:i(()=>t[0]||(t[0]=[e("ul",{class:"disc"},[e("li",null,[e("strong",null,"Project type:"),e("span",{class:"wordle-finder__text"},"Personal project.")]),e("li",null,[e("strong",null,"Website:"),e("a",{href:"https://wordle-finder.com",rel:"noopener noreferrer",target:"_blank"}," https://wordle-finder.com ")]),e("li",null,[e("strong",null,"Github repository:"),e("a",{href:"https://github.com/TDAK1509/wordle-finder",rel:"noopener noreferrer",target:"_blank"}," https://github.com/TDAK1509/wordle-finder ")]),e("li",null,[e("strong",null,"Description:"),e("span",{class:"wordle-finder__text"}," Designed a tool to assist with playing the Wordle game. ")]),e("li",null,[e("strong",null,"Technologies used:"),e("span",{class:"wordle-finder__text"},"Native HTML, CSS, Javascript.")])],-1)])),_:1}))}},me=a(ge,[["__scopeId","data-v-04b48704"]]),_e="/assets/planning-poker-B4foswGY.gif",he={__name:"PlanningPoker",setup(r){const s=[{src:_e,isDesktop:!0,style:{objectPosition:"12px -46px"}}];return(o,t)=>(n(),l(d,{images:s,"project-name":"Planning poker"},{description:i(()=>t[0]||(t[0]=[e("ul",{class:"disc"},[e("li",null,[e("strong",null,"Project type:"),e("span",{class:"planning-poker__text"},"Personal project.")]),e("li",null,[e("strong",null,"Github repository:"),e("a",{href:"https://github.com/TDAK1509/planning-poker",rel:"noopener noreferrer",target:"_blank"}," https://github.com/TDAK1509/planning-poker ")]),e("li",null,[e("strong",null,"Description:"),e("span",{class:"planning-poker__text"}," Because planning poker sites require subscription to use unlimitedly, so I create this to use between my team. ")]),e("li",null,[e("strong",null,"Technologies used:"),e("span",{class:"planning-poker__text"},"Native HTML, CSS, Javascript, ExpressJ, Socket.io, Heroku.")])],-1)])),_:1}))}},fe=a(he,[["__scopeId","data-v-1e4d23c7"]]),be={},ve={class:"page-button"};function ke(r,s){return n(),c("button",ve,[b(r.$slots,"default",{},void 0)])}const v=a(be,[["render",ke],["__scopeId","data-v-bb98a487"]]),ye={},De={width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function Pe(r,s){return n(),c("svg",De,s[0]||(s[0]=[e("path",{d:"M7 12L16 12",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),e("path",{d:"M13 16L17 12L13 8",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))}const k=a(ye,[["render",Pe]]),xe={__name:"PreviousPageButton",setup(r){return(s,o)=>(n(),l(v,null,{default:i(()=>[u(k,{class:"previous-page-button-icon"})]),_:1}))}},we=a(xe,[["__scopeId","data-v-b4447e42"]]),Ie={__name:"NextPageButton",setup(r){return(s,o)=>(n(),l(v,null,{default:i(()=>[u(k,{class:"next-page-button-icon"})]),_:1}))}},je=a(Ie,[["__scopeId","data-v-322a56f0"]]),Se={class:"portfolio-page"},Te={class:"portfolio-page__footer"},Ae={__name:"PortfolioPage",setup(r){const s=[te,ce,fe,O,me],o=s.length-1,t=m(0),p=m(""),g=m(0);function y(){p.value="slide-right",g.value++,t.value>0&&t.value--}function D(){p.value="slide-left",g.value++,t.value<o&&t.value++}return(Ce,Be)=>(n(),l(T,{class:"portfolio-container"},{default:i(()=>[e("section",Se,[u(S,{name:p.value,mode:"out-in"},{default:i(()=>[(n(),l(j(s[t.value]),{key:g.value}))]),_:1},8,["name"])]),e("div",Te,[u(we,{class:_({"page-button--hide":t.value===0}),onClick:y},null,8,["class"]),u(je,{class:_({"page-button--hide":t.value===o}),onClick:D},null,8,["class"])])]),_:1}))}},Ne=a(Ae,[["__scopeId","data-v-5a4bcf30"]]);export{Ne as default};
