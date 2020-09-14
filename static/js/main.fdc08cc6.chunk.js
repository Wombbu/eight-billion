(this["webpackJsonpeight-billion"]=this["webpackJsonpeight-billion"]||[]).push([[0],{13:function(e,t,a){e.exports=a(21)},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(9),r=a.n(l),u=a(4),o=a(1),s=a(2);function m(){var e=Object(o.a)(["\n  & svg {\n    width: 30px;\n    height: 36px;\n    margin-left: -15px;\n  }\n\n  & path {\n    animation: "," 1s ease infinite;\n\n    stroke: #cbd5e0;\n    fill: transparent;\n    stroke-width: 2px;\n  }\n"]);return m=function(){return e},e}function c(){var e=Object(o.a)(["\n  50% {\n    transform: translateY(-15%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n"]);return c=function(){return e},e}var k=Object(s.b)(c()),v=s.a.div.attrs((function(e){return{className:"text-gray-400"}}))(m(),k),h=function(){return n.createElement(v,null,n.createElement("svg",null,n.createElement("path",{d:"M0 10 L15 26 L30 10"})))};function f(){var e=Object(o.a)(["\n  flex-shrink: 0;\n"]);return f=function(){return e},e}var d=s.a.div.attrs((function(e){return Object(u.a)({},e,{className:"h-screen flex flex-col items-center justify-center"})}))(f()),p=function(e){return n.createElement(d,null,n.createElement("div",{className:"m-auto max-w-xl flex flex-col items-center justify-center"},e.title&&n.createElement("div",null,e.showTitleDesc&&n.createElement("p",{className:"text-gray-500 font-serif leading-tight"},"Nettomaksua"),n.createElement("h1",{className:"font-serif pb-8 ".concat("string"===typeof e.title&&e.title.length>11?"text-3xl":"text-4xl"," lg:text-6xl text-teal-500 text-center leading-tight")},e.title)),e.description&&n.createElement("p",{className:"text-gray-700 pb-8 text-center font-serif"},e.description),e.children,e.hideScrollHint?null:n.createElement(h,null)))},E=a(6);var j=function(e){var t=n.useState(!1),a=Object(E.a)(t,2),i=a[0],l=a[1],r=n.useState(e.from),u=Object(E.a)(r,2),o=u[0],s=u[1],m=n.useRef(null);return n.useEffect((function(){if(null!=m.current)var t=setInterval((function(){(function(e){var t=e.getBoundingClientRect(),a=Math.max(document.documentElement.clientHeight,window.innerHeight);return!(t.bottom<0||t.top-a>=0)})(m.current)&&(setTimeout((function(){return l(!0)}),e.shortDelay?500:1e3),clearInterval(t))}),300)}),[l,e.shortDelay]),n.useEffect((function(){if(i){var t=(e.from-e.to)/Math.floor(e.inMs/20),a=setInterval((function(){s((function(n){return n<=e.to?(clearInterval(a),e.to):n-t}))}),20);return function(){clearInterval(a)}}}),[e.from,e.to,e.inMs,i]),n.createElement("span",{ref:m,className:o<0?"text-red-500":""},o.toFixed(1))};a(20);function g(){var e=Object(o.a)(["\n  flex: ",';\n  transition: all 0.2s;\n  min-height: 40px;\n  min-width: 40px;\n  &:hover {\n  }\n  &:not(:last-child) {\n    border-right: 2px solid #667eea;\n  }\n  &:focus {\n    flex: 10;\n    background-color: #ebf4ff;\n  }\n  &:before {\n    content: "";\n  }\n  &:focus:before {\n    content: "','";\n    padding-right: 4px;\n  }\n']);return g=function(){return e},e}var b=s.a.div.attrs((function(e){return{tabIndex:0,className:"flex cursor-pointer text-center items-center \n  justify-center\n  text-indigo-500 overflow-hidden\n  whitespace-no-wrap text-sm md:text-base"}}))(g(),(function(e){return e.flex}),(function(e){return e.title})),x=function(e){var t=e.items,a=t.map((function(e){return e.value})).reduce((function(e,t){return e+t}),0);return n.createElement("div",{className:"w-full flex rounded-full overflow-hidden min-w-0 mb-8 border-2 border-solid border-indigo-500"},t.map((function(e){return n.createElement(b,{flex:e.value/a,title:e.title},(e.value/a*100).toFixed(0)," %")})))};function y(){var e=Object(o.a)(["\n  height: 100vh;\n  overflow-y: scroll;\n  scroll-snap-type: y mandatory;\n\n  & > "," {\n    scroll-snap-align: start;\n  }\n\n  & a {\n    ","\n    white-space: nowrap;\n    font-weight: bold;\n  }\n\n  & a:hover {\n    text-decoration: underline;\n  }\n"]);return y=function(){return e},e}var w=s.a.div.attrs((function(e){return Object(u.a)({},e,{className:"flex flex-col items-stretch px-4"})}))(y(),d,{color:"#667eea"});var M=function(){return i.a.createElement(w,null,i.a.createElement(p,{title:"8 Miljardia",description:i.a.createElement(i.a.Fragment,null,"Autoilijat maksavat Suomeen vuosittain ",i.a.createElement("b",null,"kahdeksan miljardia")," ","euroa veroina.")}),i.a.createElement(p,{title:"Tienpitoon miljardi",description:i.a.createElement(i.a.Fragment,null,"Autoliiton mukaan t\xe4st\xe4 summasta tienpitoon palaa kuitenkin"," ",i.a.createElement("a",{href:"https://www.autoliitto.fi/tietoa-tienkayttajalle/vaalit",target:"blank"},"vain miljardi"),". Tarkemmin 1.4 miljardia.")}),i.a.createElement(p,{showTitleDesc:!0,title:i.a.createElement(i.a.Fragment,null,i.a.createElement(j,{from:8,to:6.6,inMs:800})," Miljardia"),description:i.a.createElement(i.a.Fragment,null,i.a.createElement("b",null,"L\xe4hes 7 miljardia nettomaksua"),". Autoilija n\xe4ytt\xe4\xe4 olevan todellinen nettomaksaja. Nyt perataan asia juurta jaksain.")}),i.a.createElement(p,{title:"Verotuotto",description:i.a.createElement(i.a.Fragment,null,"Autoalan tiedotuskeskuksen"," ",i.a.createElement("a",{href:"http://www.aut.fi/etusivu_vanha/tilastot/verotus_ja_hintakehitys/valtion_verotulot_tieliikenteesta",target:"blank"},"laskelmien mukaan")," ","kahdeksan miljardia jakautuu seuraavalla tavalla. ",i.a.createElement("br",null)," ",i.a.createElement("br",null),"Paina kentti\xe4 n\xe4hd\xe4ksesi lis\xe4tietoa")},i.a.createElement(x,{items:[{value:3269,title:"Alv, vakuutusverot",description:"Arvonlis\xe4vero ker\xe4t\xe4\xe4n jokaisesta Suomessa ostetusta tavarasta, muun muassa ruoasta."},{value:2635,title:"Polttoainevero",description:"Polttoainevero on kiinte\xe4 vero polttoaineiden hinnassa."},{value:1150,title:"Ajoneuvovero",description:"Ajoneuvovero ker\xe4t\xe4\xe4n vuosittain ajoneuvoista."},{value:892,title:"Autovero",description:"Autovero ker\xe4t\xe4\xe4n uusista autoista ostohetkell\xe4."}]})),i.a.createElement(p,{title:"Alv?",description:"Laskelmissa on laskettu mukaan arvonlis\xe4vero sek\xe4 vakuutusverot. Arvonlis\xe4veroa maksetaan muun muassa ruoista, vaatteista sek\xe4 asumisesta. Vakuutusveroa maksetaan kaikista vakuutuksista, esimerkiksi kotivakuutuksesta"}),i.a.createElement(p,{description:i.a.createElement(i.a.Fragment,null,"Vaatteista maksettua arvonlis\xe4veroa ei palauteta vaatteidenk\xe4yt\xf6n tukemiseen.",i.a.createElement("br",null)," Tietotekniikasta maksettua arvonlis\xe4veroa ei palauteta tietotekniikan k\xe4yt\xf6n tukemiseen.",i.a.createElement("br",null),i.a.createElement("br",null),"T\xe4ten on kohtuutonta vaatia, ett\xe4 kaikista liiketoimintasektoreista juuri autoilusta maksettu alv korvamerkitt\xe4isiin autoiluun. Poistetaan arvonlis\xe4vero nettomaksusta.")}),i.a.createElement(p,{showTitleDesc:!0,title:i.a.createElement(i.a.Fragment,null,i.a.createElement(j,{from:6.6,to:3.3,inMs:1500,shortDelay:!0})," Miljardia")}),i.a.createElement(p,{title:"Kuolemat",description:i.a.createElement(i.a.Fragment,null,"Autoliikenteen aiheuttamien kuolemien sek\xe4 loukkaantumisien hinta yhteiskunnalle on vuodessa"," ",i.a.createElement("a",{target:"blank",href:"http://liikennejarjestelma.fi/talous-ja-tehokkuus/kustannukset/liikenteen-ulkoiset-kustannukset/"},i.a.createElement("b",null,"2 miljardia euroa")),".")}),i.a.createElement(p,{showTitleDesc:!0,title:i.a.createElement(i.a.Fragment,null,i.a.createElement(j,{from:3.3,to:1.3,inMs:800,shortDelay:!0})," Miljardia")}),i.a.createElement(p,{title:"Sairaudet",description:i.a.createElement(i.a.Fragment,null,"Vaikka moottoriteknologia on kehittynyt vuosien varrella, kaupungeissa autoilu sairastuttaa ihmisi\xe4. Autoliikenne jauhaa asfalttia kivip\xf6lyksi. Ihmiset sairastuvat katup\xf6lyn ohella hiukkasiin.",i.a.createElement("br",null),i.a.createElement("br",null),"Hinta yhteiskunnalle"," ",i.a.createElement("a",{href:"http://liikennejarjestelma.fi/talous-ja-tehokkuus/kustannukset/liikenteen-ulkoiset-kustannukset/",target:"blank"},"puoli miljardia vuodessa"))}),i.a.createElement(p,{showTitleDesc:!0,title:i.a.createElement(i.a.Fragment,null,i.a.createElement(j,{from:1.3,to:.8,inMs:800,shortDelay:!0})," Miljardia")}),i.a.createElement(p,{title:"Kunnat",description:i.a.createElement(i.a.Fragment,null,"Valtio hoitaa vain p\xe4\xe4teit\xe4. Kunnat rakentavat omalla rahallaan tiest\xf6ns\xe4. Kunnat rahoittavat tiest\xf6ns\xe4 kunnallisverolla. Vuonna 2017 kunnat k\xe4yttiv\xe4t tienpitoon n. 700 miljoonaa euroa. T\xe4st\xe4 arviolta 70%, eli ",i.a.createElement("b",null,"puoli miljardia")," menee autoiluun")}),i.a.createElement(p,{showTitleDesc:!0,title:i.a.createElement(i.a.Fragment,null,i.a.createElement(j,{from:.8,to:.2,inMs:800,shortDelay:!0})," Miljardia")}),i.a.createElement(p,{title:"Matkakuluv\xe4hennys",description:i.a.createElement(i.a.Fragment,null,"Matkakuluista v\xe4hennet\xe4\xe4n verotuksessa ",i.a.createElement("b",null,"puoli miljardia")," ","vuosittain.")}),i.a.createElement(p,{showTitleDesc:!0,title:i.a.createElement(i.a.Fragment,null,i.a.createElement(j,{from:.2,to:-.3,inMs:800,shortDelay:!0})," Miljardia"),description:"Autoilun verot eiv\xe4t kata siit\xe4 aiheutuvia kuluja. Jatketaan kuitenkin viel\xe4."}),i.a.createElement(p,{title:"Asumisen hinta",description:i.a.createElement(i.a.Fragment,null,"Parkkinormien vuoksi esimerkiksi Helsingin kantakaupungissa autopaikan rakennuskustannukset voivat olla 70 000 euroa paikkaa kohti. Paikat eiv\xe4t mene tuolla hinnalla kaupaksi, joten paikoista tullut tappio leivotaan asuntojen hintoihin. Asumisen hintaa nostaa my\xf6s melumittaukset sek\xe4 meluerist\xe4minen. Melu rajoittaa huoneistosijoittelua kaupunkiasunnoissa. Kaupunkiasunnot ovat autoliikenteen melun takia rajoittuneemmin suunniteltuja.",i.a.createElement("br",null),i.a.createElement("br",null),"Rakennusteollisuus vastustaa parkkinormia. Paikkoja ei rakenneta markkinavetoisesti, vaan valtiovetoisesti.")}),i.a.createElement(p,{description:i.a.createElement(i.a.Fragment,null,"Autoilun haitat keskittyv\xe4t kaupunkeihin. Etenkin kaupungeissa autoilun vaatima tila, sen aiheuttama melu sek\xe4 turvattomuus korostuvat. T\xe4lle on vaikea asettaa hintaa, mutta:",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"Jokainen tiet\xe4\xe4 miten viihtyis\xe4\xe4 50-luvulla ja sit\xe4 ennen rakennettu kaupunkiymp\xe4rist\xf6 on. Ja miten ep\xe4viihtyis\xe4\xe4 70 luvulla ja my\xf6hemmin autoilun ehdoilla rakennettu kaupunkiymp\xe4rist\xf6 on."))}),i.a.createElement(p,{hideScrollHint:!0,title:"Kaupunkilainen!",description:"Vaadi viihtyis\xe4mp\xe4\xe4 kaupunkia. Et ole mit\xe4\xe4n velkaa autoilijoille."}))};r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(M,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.fdc08cc6.chunk.js.map