(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e,t,a){},,,,,,,function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),s=a.n(c),o=(a(15),a(16),a(1));a(3),a(17);function i(e){var t=[],a="forecast ";return e.status&&(e.activeTab||(a+=" forecast--active"),e.status.daily.map((function(a,n){return e.loader?null:n>0&&n<7?void t.push(r.a.createElement(u,{loader:e.loader,day:j(a.dt).day.slice(0,3),temp:Math.round(a.temp.day-273.15),icon:a.weather[0].icon,key:n})):null}))),r.a.createElement("div",{className:a+" "+e.theme.backgroundColor},e.current&&r.a.createElement(l,{icon:e.current.weather[0].icon,temp:Math.round(e.current.temp-273.15)}),t)}function l(e){return r.a.createElement("div",{className:"forecast__today"},r.a.createElement("div",{className:"forecast__icon forecast__icon-b--today"},r.a.createElement("img",{src:"https://openweathermap.org/img/wn/"+e.icon+"@2x.png",className:"forecast__icon",alt:"weather"})),r.a.createElement("div",{className:"forecast__today-group"},r.a.createElement("div",{className:"forecast__day forecast__day--today"},"Today"),r.a.createElement("div",{className:"forecast__temp forecast__temp--today"},e.temp,"\xb0")))}function u(e){return r.a.createElement(r.a.Fragment,null,!e.loader&&r.a.createElement("div",{className:"forecast__week-item animate__animated  animate__backInDown"},r.a.createElement("div",{className:"forecast__day"},e.day),r.a.createElement("div",{className:"forecast__icon-b"},r.a.createElement("img",{src:"http://openweathermap.org/img/wn/"+e.icon+"@2x.png",className:"forecast__icon",alt:"weather"})),r.a.createElement("div",{className:"forecast__temp"},e.temp,"\xb0")))}a(18);var m=a(6),d=a(7),_=a(9),f=a(8),p=a(2),g=a.n(p),h=(a(27),function(e){Object(_.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({address:e})},n.handleSelect=function(e){Object(p.geocodeByAddress)(e).then((function(e){return Object(p.getLatLng)(e[0])})).then((function(t){n.props.setLoader(),n.setState({address:e}),fetch(k+"lat="+t.lat+"&lon="+t.lng+w).then((function(e){return e.json()})).then((function(t){n.props.action(t,e)}))})).catch((function(e){return console.error("Error",e)}))},n.state={address:""},n}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(g.a,{value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect},(function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps,c=e.loading;return r.a.createElement("div",null,r.a.createElement("input",t({placeholder:"Search Places ...",className:"location-search-input current__input"})),r.a.createElement("div",{className:"autocomplete-dropdown-container current__dropdown"},c&&r.a.createElement("div",{className:"current__loading"},"Loading...",r.a.createElement("div",{className:"current__icon-b "},r.a.createElement("img",{src:"./loader.png",className:"current__icon animate__animated  animate__rotateOut",alt:"weather option"}))),a.map((function(e){var t=e.active?"suggestion-item--active":"suggestion-item",a=e.active?{backgroundColor:"#fafafa",cursor:"pointer",padding:"5px 10px",borderRadius:"10px"}:{backgroundColor:"#ffffff",cursor:"pointer",padding:"5px 10px",borderRadius:"10px"};return r.a.createElement("div",n(e,{className:t,style:a}),r.a.createElement("span",null,e.description))}))))}))}}]),a}(r.a.Component));function b(e){var t=Object(n.useState)(Date.now()/1e3),a=Object(o.a)(t,2),c=a[0],s=a[1];return setInterval((function(){s(Date.now()/1e3)}),1e3),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"current animate__animated animate__fadeIn "+e.theme.backgroundImage},e.status&&r.a.createElement(E,{theme:e.theme,activeTab:e.activeTab,action:function(){e.actionChangeTab()}}),r.a.createElement("div",{className:"current__info-container"},r.a.createElement("div",{className:"current__time"},r.a.createElement("p",{className:"current__timestamp"},j(c).hours,":",j(c).minutes,r.a.createElement("span",{className:"current__seconds"},":",j(c).seconds," ")),r.a.createElement("p",{className:"current__day"},j(Date.now()/1e3).fullDate)),r.a.createElement("div",{className:"current__info "},e.loader&&r.a.createElement("div",{className:"current__loading"},"Loading...",r.a.createElement("div",{className:"current__icon-b "},r.a.createElement("img",{src:"./loader.png",className:"current__icon animate__animated  animate__rotateOut",alt:"weather option"}))),!e.loader&&e.status&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{src:"./humidity.png",condition:e.humidity+"%",text:"humidity is"}),r.a.createElement(v,{src:"./cloud.png",condition:e.clouds+"%",text:"clouds is "}),r.a.createElement(v,{src:"./feeling.png",condition:e.feel+" C",text:"feels like "}),r.a.createElement(v,{src:"./sunset.png",condition:e.sunset,text:"sunset is"})))),r.a.createElement("div",{className:"current__search"},r.a.createElement(h,{action:function(t,a){e.action(t,a)},setLoader:e.setLoader}),r.a.createElement("div",{className:"current__address"},e.address))))}function v(e){return r.a.createElement("div",{className:"current__item animate__animated  animate__bounceInLeft"},r.a.createElement("div",{className:"current__icon-b "},r.a.createElement("img",{src:e.src,className:"current__icon",alt:"weather option"})),r.a.createElement("div",{className:"current__text"}," ",e.text," ",e.condition," "))}function E(e){function t(){e.action()}var a="tabs__item",n="tabs__item";return e.activeTab?n+=" tabs__item--active":a+=" tabs__item--active",r.a.createElement("div",{className:"tabs "+e.theme.backgroundColor+" animate__animated  animate__bounceInRight"},r.a.createElement("div",{className:a,onClick:t},"Week"),r.a.createElement("div",{className:n,onClick:t},"12 Hours"))}a(28);function y(e){var t="forecast-daily";e.activeTab&&(t+=" forecast-daily--active");for(var a=[],n=1;n<=12;n++)a.push(r.a.createElement(N,{time:j(e.hours[n].dt).hours+":00",key:n,temp:Math.round(e.hours[n].temp-273.15),icon:e.hours[n].weather[0].icon}));return r.a.createElement("div",{className:t+" "+e.theme.backgroundColor},a)}function N(e){return r.a.createElement("div",{className:"forecast-daily__hour"},r.a.createElement("div",{className:"forecast-daily__time"},e.time),r.a.createElement("div",{className:"forecast-daily__icon-b"},r.a.createElement("img",{src:"https://openweathermap.org/img/wn/"+e.icon+".png",alt:"weather",className:"forecast-daily__icon"})),r.a.createElement("div",{className:"forecast-daily__temp"},e.temp,"\xb0"))}function O(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)(!1),u=Object(o.a)(l,2),m=u[0],d=u[1],_=Object(n.useState)(null),f=Object(o.a)(_,2),p=f[0],g=f[1],h=Object(n.useState)(null),v=Object(o.a)(h,2),E=v[0],N=v[1],O=Object(n.useState)(null),w=Object(o.a)(O,2),k=w[0],S=w[1],C=Object(n.useState)(null),x=Object(o.a)(C,2),T=x[0],I=x[1],D=Object(n.useState)(null),M=Object(o.a)(D,2),L=M[0],F=M[1],J=Object(n.useState)(null),R=Object(o.a)(J,2),A=R[0],P=R[1],B=Object(n.useState)(""),H=Object(o.a)(B,2),W=H[0],Y=H[1],q=Object(n.useState)(!1),z=Object(o.a)(q,2),G=z[0],K=z[1],Q=Object(n.useState)(null),U=Object(o.a)(Q,2),V=U[0],X=U[1];function Z(){return"Fog"===V?{backgroundImage:"fog-bg",backgroundColor:"fog"}:"Rain"===V?{backgroundImage:"rain-bg",backgroundColor:"rain"}:{backgroundImage:"sunny-bg",backgroundColor:"sunny"}}return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"weather"},r.a.createElement(b,{theme:Z(),actionChangeTab:function(){K(!G)},activeTab:G,address:W,setLoader:function(){d(!0)},loader:m,status:c,action:function(e,t){d(!1),s(e),g(e.current.clouds),N(e.current.humidity),I(e.current.sunset),S(e.current.feels_like),F(e.hourly),P(e.current),Y(t),X(e.current.weather[0].main)},clouds:p,humidity:E,sunset:j(T).hours+":"+j(T).minutes,feel:Math.round(k-273.15)}),r.a.createElement(i,{theme:Z(),activeTab:G,loader:m,status:c,current:A}),L&&r.a.createElement(y,{theme:Z(),activeTab:G,hours:L})))}function j(e){var t=new Date(1e3*e),a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()],n=["January","February","March","April","May","June","Jule","August","September","October","November","December"][t.getMonth()],r=t.getDate(),c=t.getFullYear(),s=a+", "+r+" "+n+" "+c,o=t.getHours(),i=t.getMinutes(),l=t.getSeconds();return o<10&&(o="0"+o),i<10&&(i="0"+i),l<10&&(l="0"+l),{seconds:l,minutes:i,hours:o,day:a,month:n,year:c,dayNumber:r,fullDate:s}}var w="&appid=ae64f4f04a5e48e2fc0edabf290d80d0",k="https://api.openweathermap.org/data/2.5/onecall?";function S(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null))}s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.d6160c47.chunk.js.map