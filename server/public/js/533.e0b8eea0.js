"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[533],{7544:function(e,t,o){o.d(t,{Z:function(){return _}});var a=o(6252),r=o(9963),n=o(3577);const s=e=>((0,a.dD)("data-v-8135b144"),e=e(),(0,a.Cn)(),e),i=s((()=>(0,a._)("label",{for:"question"},"ask question(s) or leave a comment:",-1))),l=s((()=>(0,a._)("button",{type:"submit"},"submit",-1))),c={class:"response-div"},u={key:0,class:"done"},p=s((()=>(0,a._)("i",{class:"fa-solid fa-circle-check"},null,-1))),h={key:1,class:"error"},d=s((()=>(0,a._)("i",{class:"fa-solid fa-circle-exclamation"},null,-1)));function y(e,t,o,s,y,m){return(0,a.wg)(),(0,a.iD)("form",{class:"question",onSubmit:t[2]||(t[2]=(0,r.iM)((e=>s.userRequest()),["prevent"]))},[i,(0,a.wy)((0,a._)("input",{type:"email",name:"email",id:"","onUpdate:modelValue":t[0]||(t[0]=e=>s.user.email=e),placeholder:"Enter email address so we can reach you..."},null,512),[[r.nr,s.user.email]]),(0,a.wy)((0,a._)("textarea",{name:"question",id:"question",cols:"30",rows:"10","onUpdate:modelValue":t[1]||(t[1]=e=>s.user.message=e),placeholder:"Ask question(s) or leave a comment....",required:""},null,512),[[r.nr,s.user.message]]),l,(0,a._)("div",c,[s.response.success?((0,a.wg)(),(0,a.iD)("div",u,[p,(0,a._)("span",null,(0,n.zw)(s.response.msg),1)])):(0,a.kq)("",!0),s.response.failed?((0,a.wg)(),(0,a.iD)("div",h,[d,(0,a._)("span",null,(0,n.zw)(s.response.msg),1)])):(0,a.kq)("",!0)])],32)}var m=o(9669),w=o.n(m),f=o(2262),g={name:"Contact",setup(){let e=(0,f.qj)({email:"",message:""}),t=(0,f.qj)({failed:!1,success:!1,msg:""});function o(){w().post("api/course/contact",e,{headers:{"Content-Type":"application/json"}}).then((e=>{console.log(e),"OK"===e.statusText&&(t.msg=e.data.msg,t.success=!0,setTimeout(a,3e3))})).catch((e=>{t.msg=e.response.data.msg,t.failed=!0,setTimeout(r,3e3)}))}function a(){t.success=!1}function r(){t.failed=!1}return{user:e,response:t,userRequest:o}}},v=o(3744);const b=(0,v.Z)(g,[["render",y],["__scopeId","data-v-8135b144"]]);var _=b},1441:function(e,t,o){o.r(t),o.d(t,{default:function(){return ye}});var a=o(6252),r=o.p+"img/lap.67ba08f5.jpg",n=o.p+"img/trust-wallet.1d9e4ace.png",s=o.p+"img/Cryptocurrency_logos.d58db559.jpg",i=o.p+"img/crypto.22eb727a.jpeg",l=o.p+"img/phone-a.0358fa01.jpg",c=o.p+"img/phone-c.9f2f0475.jpg",u=o(929);const p={id:"main"},h={key:0,class:"courses-div"},d=(0,a._)("h2",null,"Learn cryptocurrency today!",-1),y={class:"courses"},m=(0,a._)("div",{class:"video"},[(0,a._)("img",{class:"fullwidth",src:r,alt:""})],-1),w=(0,a._)("div",{class:"video-title"},[(0,a._)("span",{class:"free-course"},[(0,a._)("i",null,"free")]),(0,a._)("h3",null,[(0,a._)("span",null,"binance"),(0,a.Uk)(" How to use Binance smart phone App")]),(0,a._)("p",null,"1 video"),(0,a._)("button",null,"start tutorial")],-1),f=[m,w],g=(0,a._)("div",{class:"video"},[(0,a._)("img",{src:n,alt:""})],-1),v=(0,a._)("div",{class:"video-title"},[(0,a._)("span",{class:"free-course"},[(0,a._)("i",null,"free")]),(0,a._)("h3",null,[(0,a._)("span",null,"trust wallet"),(0,a.Uk)(" How to use trust wallet smart phone App ")]),(0,a._)("p",null,"1 video"),(0,a._)("button",null,"start tutorial")],-1),b=[g,v],_=(0,a._)("div",{class:"video"},[(0,a._)("img",{class:"fullwidth",src:s,alt:""})],-1),k=(0,a._)("div",{class:"video-title"},[(0,a._)("span",{class:"free-course"},[(0,a._)("i",null,"free")]),(0,a._)("h3",null,[(0,a._)("span",null,"cryptocurrency crash course"),(0,a.Uk)(" Cryptocurrency for beginners "),(0,a._)("br"),(0,a.Uk)("what is crypto?? ")]),(0,a._)("p",null,"30 videos"),(0,a._)("button",null,"start tutorial")],-1),C=[_,k],T=(0,a._)("div",{class:"video"},[(0,a._)("img",{class:"fullwidth",src:i,alt:""})],-1),q=(0,a._)("div",{class:"video-title"},[(0,a._)("span",{class:"free-course"},[(0,a._)("i",null,"free")]),(0,a._)("h3",null,[(0,a._)("span",null,"investing in crypto"),(0,a.Uk)(" How to invest in cryptocurrency and why ")]),(0,a._)("p",null,"1 video"),(0,a._)("button",null,"start tutorial")],-1),j=[T,q],B=(0,a._)("div",{class:"video"},[(0,a._)("img",{class:"fullwidth",src:l,alt:""})],-1),A=(0,a._)("div",{class:"video-title"},[(0,a._)("span",{class:"free-course"},[(0,a._)("i",null,"free")]),(0,a._)("h3",null,[(0,a._)("span",null,"crypto apps"),(0,a.Uk)(" Five(5) free crypto apps to use")]),(0,a._)("p",null,"1 video"),(0,a._)("button",null,"start tutorial")],-1),U=[B,A],D=(0,a._)("div",{class:"video"},[(0,a._)("img",{class:"fullwidth",src:c,alt:""})],-1),H=(0,a._)("div",{class:"video-title"},[(0,a._)("span",{class:"free-course"},[(0,a._)("i",null,"free")]),(0,a._)("h3",null,[(0,a._)("span",null,"bitrue"),(0,a.Uk)(" How to buy and hold coins for long using bitrue ")]),(0,a._)("p",null,"1 video"),(0,a._)("button",null,"start tutorial")],-1),x=[D,H],E={key:1,class:"single-tutorial course-1"},W=(0,a.uE)('<div class="logo"><img src="'+u+'" alt=""></div><h1>How to use Binance smart phone App</h1><h4> master course <br> by: AdvancedTechAcademy </h4><ul><h3>tutorial objectives:</h3><li><a href="#a"><span>1</span> Account settings</a></li><li><a href="#a"><span>2</span> settings and security</a></li><li><a href="#a"><span>3</span> wallet overview</a></li><li><a href="#a"><span>4</span> Deposite, withdrawal and transfer</a></li><li><a href="#a"><span>5</span> buy and sell cryptocurrencies</a></li><li><a href="#a"><span>6</span>convert cryptocurrencies</a></li><li><a href="#a"><span>7</span>trade market(spot trading)</a></li><li><a href="#a"><span>8</span> Binane coin staking(Binance earn)</a></li></ul><h2 id="a1"><span>1.</span> How to have binance installed in your mobile phone </h2><p> Carrying out this tutorial you need to have an android or at least a smart phone that can accesss the playstore and also run some internet operations without any problem. </p><p> To install the binance app on your smart phone, get to your phone and head straight to the playstore in your smart phone and next your search &quot;Binance app&quot; you will find many different options or choices of the binance app to download you download the verified version of the Binance app and hit install and thats pretty all for the installation process. <br> After the app has been installed, you hit open and it&#39;ll take you directly to the binance app. </p><p> Now if you&#39;re already a binance user, then you don&#39;t need to go about reinstalling it again if you already have it installed. </p><h2 id="a2"><span>2.</span> Creating a Binance account</h2><p> Now after the installation process have been successfully completed, you need to have an account a Binance account so to create one you follow the steps outlined below to become a Binance user. </p>',10),I=(0,a._)("div",{class:"video"},[(0,a._)("iframe",{width:"560",height:"auto",id:"a",src:"https://www.youtube.com/embed/pEPLLQToLxU",title:"Binance for beginners on mobile(phone)",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1),Y=(0,a._)("p",null,[(0,a.Uk)("Binance on smart Phone App tutorial"),(0,a._)("sup",null,"*")],-1),L=(0,a._)("h4",null,[(0,a.Uk)(" There's more to the Binance app using the spot market understanding the futures market, staking coins and more but knowledge with direction without mentorship will easily lead you astray. Join our mentorship program so we can follow and direct you on how to go about. "),(0,a._)("a",{href:"/#contact"},"Join mentorship program")],-1),Z={key:2,class:"single-tutorial course-2"},J=(0,a.uE)('<div class="logo"><img src="'+u+'" alt=""></div><h1>how to use the Binance app on mobile(Phone)</h1><h4> master course <br> by: AdvancedTechAcademy </h4><ul><h3>tutorial objectives:</h3><li><a href="#b"><span>1</span> setup and security</a></li><li><a href="#b"><span>2</span>tokens tab</a></li><li><a href="#b"><span>3</span>send and receive tokens</a></li><li><a href="#b"><span>4</span>buy cryptocurrencies</a></li><li><a href="#b"><span>5</span>finance tab and staking</a></li><li><a href="#b"><span>6</span>How to swap and exchange coins</a></li></ul><h2 id="b1"><span>1.</span> How to have trust wallet installed in your mobile phone </h2><p> Carrying out this tutorial you need to have an android or at least a smart phone that can accesss the playstore and also run some internet operations without any problem. </p><p> To install the trust wallet app on your smart phone, get to your phone and head straight to the playstore in your smart phone and next your search &quot;trust wallet&quot; you will find many different options or choices of the binance app to download you download the verified version of the Binance app and hit install and thats pretty all for the installation process. <br> After the app has been installed, you hit open and it&#39;ll take you directly to the trust wallet app. </p>',7),K=(0,a._)("div",{class:"video"},[(0,a._)("iframe",{width:"560",id:"b",height:"315",src:"https://www.youtube.com/embed/BdWCVKINwKc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1),P=(0,a._)("p",null,"Trust wallet app on mobile(phone) App",-1),N={key:3,class:"single-tutorial"},V=(0,a.uE)('<div class="logo"><img src="'+u+'" alt=""></div><h1>Cryptocurrency full course from Beginner to firm investor</h1><h4> master course <br> by: AdvancedTechAcademy </h4><ul><h3>tutorial objectives:</h3><li><a href="#c"><span>1</span> what are cryptocurrencies</a></li><li><a href="#c"><span>2</span>funamentals of cryptocurrencies</a></li><li><a href="#c"><span>3</span>cryptocurrency intermediate</a></li><li><a href="#c"><span>4</span>advanced cryptocurrecy</a></li></ul><h2>cryptocurrency crash course</h2><p> This is a full course on cryptocurrecy that will take you from a total beginner to someone who has a good mastery about cryptocurrencies, how the work, how the function and even why you should have something doing with it. <br> This is a crash course with many videos do well to follow the videos in order and pay attention to fully grasp what has been bundled in the tutorial for you. </p><p> the world of Cryptocurrency is not a come quick and do quick type of kind of system. In the crypto system learning is very important, understanding how things work is indispensable. <br> There are mistakes you will prevent yourself from making if you take the time to learn and understand how things work. Don&#39;t just rush into investing, don&#39;t just rush into trading take out time and validate the courses. </p>',7),F=(0,a._)("div",{class:"video"},[(0,a._)("iframe",{width:"560",height:"315",id:"c",src:"https://www.youtube.com/embed/videoseries?list=PLU52pNodXIGdM6XDgHVG7DsPytlsrR_6b",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1),R=(0,a._)("p",null,"cryptocurrency crash course",-1),S=(0,a._)("h4",null,[(0,a.Uk)(" in case you will want to be part of our mentorship program so we can follow you up with your investments, where to invest and how not to invest. There are cryptocurrencies today that in five(5) years will be worth millions but how will you know them?? "),(0,a._)("br"),(0,a.Uk)(" there are strategies to follow in the market and patterns in trading that will make you a profitable crypto trader but how will you know?? "),(0,a._)("br"),(0,a.Uk)(" join our mentorship program by sending us an email here with with the field you will want to be mentored on "),(0,a._)("a",{href:"/#contact"},"join mentorship program")],-1),X={key:4,class:"single-tutorial"},z=(0,a.uE)('<div class="logo"><img src="'+u+'" alt=""></div><h1> How to invest in Cryptocurrencies and why invest in cryptocurrencies </h1><h4> master course <br> by: AdvancedTechAcademy </h4><ul><h3>tutorial objectives:</h3><li><a href="#d"><span>1</span> cryptocurrencies</a></li><li><a href="#d"><span>2</span>how to invest</a></li><li><a href="#d"><span>2</span>risk in crypto</a></li></ul><h2>investing in crypto</h2><p> This is very crucial and most important topic in the crypto system. There is no need learning if the learning won&#39;t benefit you or if the learning won&#39;t be adding value to you. <br> Investing in crypto is the return you get either from learning or from refusing to learn. There are two things that are certain its either you invest into profit by investing wisely or you invest into loses by investing wrongly. take the full time to learn invest in knowledge first. <br> after taking the course you can join our paid mentorship program for us to guide you into investing wisely, investing into profit </p>',6),G=(0,a._)("div",{class:"video"},[(0,a._)("iframe",{width:"560",id:"d",height:"315",src:"https://www.youtube.com/embed/iFIqffaaSH8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1),M=(0,a._)("p",null,"investing in crypto",-1),Q=(0,a._)("h4",null,[(0,a.Uk)(" You can join our paid mentorship program to be mentored and directed on fertile areas to invest in and ways to invest that will bring you back profit. "),(0,a._)("br"),(0,a.Uk)(" invest in knowledge, invest in learning, invest in mentorship. "),(0,a._)("a",{href:"/#contact"},"Join our mentorship program")],-1),O={key:5,class:"single-tutorial"},$=(0,a.uE)('<div class="logo"><img src="'+u+'" alt=""></div><h1>cryptocurrency apps to use</h1><h4> master course <br> by: AdvancedTechAcademy </h4><ul><h3>tutorial objectives:</h3><li><a href="#e1"><span>1</span> phemex</a></li><li><a href="#e2"><span>2</span>Binance</a></li><li><a href="#e3"><span>2</span>kucoin</a></li><li><a href="#e3"><span>2</span>bybit</a></li><li><a href="#e3"><span>2</span>FTX exchange</a></li></ul><h2>cryptocurrency apps to take note of</h2><p> know what to use and when to use it is key in learn. Know that there is an app and when to actually use it and when not to use it is very important or when to invest in it and when not to is very important. You can join our paid mentorship program to get more apps and also be mentored on the best choices and how to use them </p>',6),ee=(0,a._)("div",{class:"video"},[(0,a._)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/QZsZ__9CKlI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1),te=(0,a._)("p",null,"cryptocurrency apps to use",-1),oe=(0,a._)("h4",null,[(0,a.Uk)(" Having a need to understand which app(s) to invest in or which app(s) are secure and trust worthy?? join our paid mentorship program by emailing us with the field of mentorship of your choice "),(0,a._)("a",{href:"/#contact"},"Join mentorship program")],-1),ae={key:6,class:"single-tutorial"},re=(0,a.uE)('<div class="logo"><img src="'+u+'" alt=""></div><h1>How to buy and hold coins for long with bitrue</h1><h4> master course <br> by: AdvancedTechAcademy </h4><ul><h3>tutorial objectives:</h3><li><a href="#f"><span>1</span> bitrue app</a></li><li><a href="#f"><span>2</span>overview</a></li><li><a href="#f"><span>2</span>how to buy coins in bitrue</a></li></ul><h2>holding coins with bitrue</h2>',5),ne=(0,a._)("div",{class:"video"},[(0,a._)("iframe",{width:"560",height:"315",id:"f",src:"https://www.youtube.com/embed/mLyffo89BSs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1),se=(0,a._)("p",null,"holding long term crypto with the bitrue app",-1),ie=(0,a._)("h4",null,[(0,a.Uk)(" Want to learn how to hold coins both for long term and short term with other apps? and also which cryptocurrencies to hold that will profit you? join our paid mentorship program by emailing us here "),(0,a._)("a",{href:"/#contact"},"Join mentorship program")],-1);function le(e,t,o,r,n,s){const i=(0,a.up)("Contact");return(0,a.wg)(),(0,a.iD)("main",p,[r.crypto.courses?((0,a.wg)(),(0,a.iD)("div",h,[d,(0,a._)("div",y,[(0,a._)("div",{class:"tutorial",onClick:t[0]||(t[0]=e=>r.getCourse1())},f),(0,a._)("div",{class:"tutorial",onClick:t[1]||(t[1]=e=>r.getCourse2())},b),(0,a._)("div",{class:"tutorial",onClick:t[2]||(t[2]=e=>r.getCourse3())},C),(0,a._)("div",{class:"tutorial",onClick:t[3]||(t[3]=e=>r.getCourse4())},j),(0,a._)("div",{class:"tutorial",onClick:t[4]||(t[4]=e=>r.getCourse5())},U),(0,a._)("div",{class:"tutorial",onClick:t[5]||(t[5]=e=>r.getCourse6())},x)])])):(0,a.kq)("",!0),r.crypto.course1?((0,a.wg)(),(0,a.iD)("div",E,[(0,a._)("a",{onClick:t[6]||(t[6]=e=>r.backToCourses()),class:"return"},"Back to crypto courses"),W,I,Y,L,(0,a.Wm)(i)])):(0,a.kq)("",!0),r.crypto.course2?((0,a.wg)(),(0,a.iD)("div",Z,[(0,a._)("a",{onClick:t[7]||(t[7]=e=>r.backToCourses()),class:"return"},"Back to crypto courses"),J,K,P,(0,a.Wm)(i)])):(0,a.kq)("",!0),r.crypto.course3?((0,a.wg)(),(0,a.iD)("div",N,[(0,a._)("a",{onClick:t[8]||(t[8]=e=>r.backToCourses()),class:"return"},"Back to crypto courses"),V,F,R,S,(0,a.Wm)(i)])):(0,a.kq)("",!0),r.crypto.course4?((0,a.wg)(),(0,a.iD)("div",X,[(0,a._)("a",{onClick:t[9]||(t[9]=e=>r.backToCourses()),class:"return"},"Back to crypto courses"),z,G,M,Q,(0,a.Wm)(i)])):(0,a.kq)("",!0),r.crypto.course5?((0,a.wg)(),(0,a.iD)("div",O,[(0,a._)("a",{onClick:t[10]||(t[10]=e=>r.backToCourses()),class:"return"},"Back to crypto courses"),$,ee,te,oe,(0,a.Wm)(i)])):(0,a.kq)("",!0),r.crypto.course6?((0,a.wg)(),(0,a.iD)("div",ae,[(0,a._)("a",{onClick:t[11]||(t[11]=e=>r.backToCourses()),class:"return"},"Back to crypto courses"),re,ne,se,ie,(0,a.Wm)(i)])):(0,a.kq)("",!0)])}var ce=o(2262),ue=o(7544),pe={name:"Crypto_course",components:{Contact:ue.Z},setup(){let e=(0,ce.qj)({courses:!0,course1:!1,course2:!1,course3:!1,course4:!1,course5:!1,course6:!1});function t(){e.courses=!0,e.course1=!1,e.course2=!1,e.course3=!1,e.course4=!1,e.course5=!1,e.course6=!1}const o=()=>{e.courses=!1,e.course1=!0},a=()=>{e.courses=!1,e.course2=!0};function r(){e.courses=!1,e.course3=!0}function n(){e.courses=!1,e.course4=!0}function s(){e.courses=!1,e.course5=!0}function i(){e.courses=!1,e.course6=!0}return{crypto:e,backToCourses:t,getCourse1:o,getCourse2:a,getCourse3:r,getCourse4:n,getCourse5:s,getCourse6:i}}},he=o(3744);const de=(0,he.Z)(pe,[["render",le]]);var ye=de}}]);
//# sourceMappingURL=533.e0b8eea0.js.map