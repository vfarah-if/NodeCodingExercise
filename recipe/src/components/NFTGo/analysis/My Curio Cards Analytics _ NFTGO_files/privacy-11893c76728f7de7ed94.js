_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{"/0+H":function(e,t,o){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(r.default.useContext(i.AmpStateContext))};var n,r=(n=o("q1tI"))&&n.__esModule?n:{default:n},i=o("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,o=void 0!==t&&t,n=e.hybrid,r=void 0!==n&&n,i=e.hasQuery,a=void 0!==i&&i;return o||r&&a}},"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"2g/D":function(e,t,o){"use strict";o.d(t,"c",(function(){return r})),o.d(t,"e",(function(){return i})),o.d(t,"d",(function(){return a})),o.d(t,"a",(function(){return v})),o.d(t,"b",(function(){return g}));var n,r,i,a,s=o("nKUr"),c=o("xvhg"),u=o("cpVT"),l=o("q1tI"),d=o.n(l),h=o("WpcN"),f=o.n(h),p=o("TSYQ"),y=o.n(p),m=o("xm5f"),b=o("qEp+");!function(e){e.Day="24h",e.Week="7d",e.Month="30d"}(r||(r={})),function(e){e.SEASON="3m",e.YEAR="1y"}(i||(i={})),function(e){e.All="all"}(a||(a={}));var v=(n={},Object(u.a)(n,r.Day,"COMMON_DURATION_DAY"),Object(u.a)(n,r.Week,"COMMON_DURATION_WEEK"),Object(u.a)(n,r.Month,"COMMON_DURATION_MONTH"),Object(u.a)(n,a.All,"COMMON_DURATION_ALL"),Object(u.a)(n,i.SEASON,"COMMON_DURATION_SEASON"),Object(u.a)(n,i.YEAR,"COMMON_DURATION_YEAR"),n),g=function(e){var t=e.time,o=e.onChange,n=e.showAll,l=e.withDatePicker,h=e.className,p=Object(m.b)().t,g=d.a.useState(0),O=Object(c.a)(g,2),j=O[0],w=O[1];return d.a.useEffect((function(){Array.isArray(t)||w((function(e){return e+1}))}),[t]),Object(s.jsxs)("div",{className:y()(f.a.container,Object(u.a)({},h,!!h)),children:[Object.values(r).map((function(e){return Object(s.jsx)("div",{className:y()(f.a.timeSpan,Object(u.a)({},f.a.selected,t===e)),onClick:function(){o(e)},children:p(v[e])})})),l&&Object.values(i).map((function(e){return Object(s.jsx)("div",{className:y()(f.a.timeSpan,Object(u.a)({},f.a.selected,t===e)),onClick:function(){o(e)},children:p(v[e])})})),n&&Object(s.jsx)("div",{className:y()(f.a.timeSpan,Object(u.a)({},f.a.selected,t===a.All)),onClick:function(){o(a.All)},children:p(v[a.All])}),l&&Object(s.jsx)(b.a,{dropdownClassName:f.a.dropdown,className:y()(f.a.timeSpan,Object(u.a)({},f.a.selected,Array.isArray(t))),onConfirm:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];o(t)},disabledDate:function(e){return e>(new Date).getTime()}},j)]})}},"48fX":function(e,t,o){var n=o("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"5fIB":function(e,t,o){var n=o("7eYB");e.exports=function(e){if(Array.isArray(e))return n(e)}},"7eYB":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}},"8Kt/":function(e,t,o){"use strict";o("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var n,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=n?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(o,r,i):o[r]=e[r]}o.default=e,t&&t.set(e,o);return o}(o("q1tI")),i=(n=o("Xuae"))&&n.__esModule?n:{default:n},a=o("lwAK"),s=o("FYa8"),c=o("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var o=r.default.Children.toArray(t.props.children);return e.concat(o)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,o=new Set,n={};return function(r){var i=!0,a=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){a=!0;var s=r.key.slice(r.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(r.type){case"title":case"base":t.has(r.type)?i=!1:t.add(r.type);break;case"meta":for(var c=0,u=h.length;c<u;c++){var l=h[c];if(r.props.hasOwnProperty(l))if("charSet"===l)o.has(l)?i=!1:o.add(l);else{var d=r.props[l],f=n[l]||new Set;"name"===l&&a||!f.has(d)?(f.add(d),n[l]=f):i=!1}}}return i}}()).reverse().map((function(e,t){var o=e.key||t;return r.default.cloneElement(e,{key:o})}))}function p(e){var t=e.children,o=(0,r.useContext)(a.AmpStateContext),n=(0,r.useContext)(s.HeadManagerContext);return r.default.createElement(i.default,{reduceComponentsToState:f,headManager:n,inAmpMode:(0,c.isInAmpMode)(o)},t)}p.rewind=function(){};var y=p;t.default=y},"C+bE":function(e,t){function o(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=o=function(e){return typeof e}:e.exports=o=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(t)}e.exports=o},FYa8:function(e,t,o){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((n=o("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=r},KckH:function(e,t,o){var n=o("7eYB");e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}},T0f4:function(e,t){function o(t){return e.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},o(t)}e.exports=o},WpcN:function(e,t,o){e.exports={container:"timerange-picker_container__1Tqd4",timeSpan:"timerange-picker_timeSpan__aXHA_",selected:"timerange-picker_selected__2TJdn",dropdown:"timerange-picker_dropdown__1V54s"}},Xuae:function(e,t,o){"use strict";var n=o("mPvQ"),r=o("/GRZ"),i=o("i2R6"),a=(o("qXWd"),o("48fX")),s=o("tCBg"),c=o("T0f4");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=c(e);if(t){var r=c(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return s(this,o)}}t.__esModule=!0,t.default=void 0;var l=o("q1tI"),d=function(e){a(o,e);var t=u(o);function o(e){var i;return r(this,o),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(o,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),o}(l.Component);t.default=d},bzNm:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy",function(){return o("qv8U")}])},g4pe:function(e,t,o){e.exports=o("8Kt/")},h0tR:function(e,t,o){"use strict";o.d(t,"e",(function(){return a})),o.d(t,"c",(function(){return s})),o.d(t,"g",(function(){return c})),o.d(t,"d",(function(){return l})),o.d(t,"k",(function(){return d})),o.d(t,"n",(function(){return h})),o.d(t,"o",(function(){return y})),o.d(t,"p",(function(){return p})),o.d(t,"q",(function(){return j})),o.d(t,"l",(function(){return w})),o.d(t,"f",(function(){return m})),o.d(t,"b",(function(){return b})),o.d(t,"s",(function(){return v})),o.d(t,"j",(function(){return g})),o.d(t,"r",(function(){return O})),o.d(t,"t",(function(){return _})),o.d(t,"h",(function(){return x})),o.d(t,"i",(function(){return A})),o.d(t,"a",(function(){return S})),o.d(t,"m",(function(){return T}));var n,r,i,a,s,c,u,l,d,h,f=o("cpVT");o("2g/D");!function(e){e.Market="Market",e.Volume="Volume",e.Holders="Holder",e.Users="User"}(a||(a={})),function(e){e.User="User",e.User24H="User24H",e.Tx="Tx",e.Market="Market",e.Volume24H="Volume24H",e.Volume="Volume",e.ToTalTx="ToTalTx",e.Holder="Holder",e.NFTs="NFTs",e.Collections="Collections",e.Whales="Whales",e.Buyer="Buyer",e.Seller="Seller",e.Sales="Sales"}(s||(s={})),function(e){e.Day="24h",e.Week="7d",e.Month="30d"}(c||(c={})),function(e){e.Week="7d",e.Month="30d",e.Season="90d"}(u||(u={})),function(e){e.Day="24h",e.Week="7d",e.Month="30d",e.Season="90d",e.Year="1y",e.All="all"}(l||(l={})),function(e){e.All="all",e.Game="game",e.Collection="collectibles",e.Art="art",e.Metaverse="metaverse",e.DeFi="defi",e.IP="ip",e.Social="social",e.Music="music",e.Utility="utility"}(d||(d={})),function(e){e.Game="game",e.Collection="collectibles",e.Art="art",e.Metaverse="metaverse",e.DeFi="defi",e.IP="ip",e.Social="social",e.Music="music",e.Utility="utility"}(h||(h={}));var p,y=(n={},Object(f.a)(n,h.DeFi,"HEADER_DEFI"),Object(f.a)(n,h.Metaverse,"HEADER_METAVERSE"),Object(f.a)(n,h.Game,"HEADER_GAME"),Object(f.a)(n,h.Collection,"HEADER_COLLECTIBLES"),Object(f.a)(n,h.IP,"HEADER_IP"),Object(f.a)(n,h.Utility,"HEADER_Utility"),Object(f.a)(n,h.Social,"HEADER_SOCIAL"),Object(f.a)(n,h.Music,"HEADER_MUSIC"),Object(f.a)(n,h.Art,"HEADER_ART"),n);!function(e){e.USD="usd",e.COIN="coin"}(p||(p={}));var m,b,v,g,O,j=(r={},Object(f.a)(r,p.COIN,"Coin"),Object(f.a)(r,p.USD,"USD"),r),w=(i={},Object(f.a)(i,d.All,"COMMON_DURATION_ALL"),Object(f.a)(i,d.DeFi,"HEADER_DEFI"),Object(f.a)(i,d.Metaverse,"HEADER_METAVERSE"),Object(f.a)(i,d.Game,"HEADER_GAME"),Object(f.a)(i,d.Collection,"HEADER_COLLECTIBLES"),Object(f.a)(i,d.IP,"HEADER_IP"),Object(f.a)(i,d.Utility,"HEADER_Utility"),Object(f.a)(i,d.Social,"HEADER_SOCIAL"),Object(f.a)(i,d.Music,"HEADER_MUSIC"),Object(f.a)(i,d.Art,"HEADER_ART"),i);!function(e){e.English="en",e.Korea="ko"}(m||(m={})),function(e){e.DeFi="DeFi",e.Metaverse="Metaverse",e.Game="Game",e.Collectables="Collectables",e.Art="Art",e.IP="IP",e.Utility="Utility",e.Social="Social"}(b||(b={})),function(e){e.SevenDays="SevenDays",e.ThirtyDays="ThirtyDays",e.NinetyDays="NinetyDays"}(v||(v={})),function(e){e.LowestPrice="LowestPrice",e.HighestPrice="HighestPrice",e.RecentlyCreated="RecentCreated",e.OldestCreated="OldestCreated",e.RecentlySold="RecentlySold",e.OldestSold="OldestSold"}(g||(g={})),function(e){e.MyNFTs="MyNFTs",e.FavouriteNFTs="FavouriteNFTs",e.FavouriteCollections="FavouriteCollections"}(O||(O={}));var x,A,S,T,_={ETH:"https://etherscan.io/address/",BSC:"https://bscscan.com/address/",HECO:"https://hecoinfo.com/address/",Flow:"https://flowscan.org/account/",DOT:"https://polkascan.io/polkadot/account/"};!function(e){e[e.Overview=0]="Overview",e[e.Rank=1]="Rank",e[e.Explore=2]="Explore",e[e.Activate=3]="Activate",e[e.Asset=4]="Asset",e[e.Collection=5]="Collection",e[e.ResetPassword=6]="ResetPassword",e[e.Search=7]="Search",e[e.User=8]="User",e[e.Visit=9]="Visit",e[e.News=10]="News",e[e.Home=11]="Home",e[e.NotFound=12]="NotFound",e[e.Login=13]="Login",e[e.Demo=14]="Demo",e[e.Setting=15]="Setting",e[e.BadGateway=16]="BadGateway",e[e.InternalError=17]="InternalError",e[e.Privacy=18]="Privacy",e[e.TermsOfService=19]="TermsOfService"}(x||(x={})),function(e){e.MarketCap="marketCap",e.Volume="volume",e.Volume7D="volume7d",e.Volume24H="volume24h",e.Volume30D="volume30d"}(A||(A={})),function(e){e.MarketCap="Market",e.Trader="Trader",e.Volume="Volume",e.Holder="Holder",e.Seller="Seller",e.Buyer="Buyer"}(S||(S={})),function(e){e.Trader="Trader",e.Seller="Seller",e.Buyer="Buyer"}(T||(T={}))},i2R6:function(e,t){function o(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,o){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var r=((n=o("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=r},mPvQ:function(e,t,o){var n=o("5fIB"),r=o("rlHP"),i=o("KckH"),a=o("kG2m");e.exports=function(e){return n(e)||r(e)||i(e)||a()}},oI91:function(e,t){e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},qhzo:function(e,t){function o(t,n){return e.exports=o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(t,n)}e.exports=o},qv8U:function(e,t,o){"use strict";o.r(t),o.d(t,"__N_SSP",(function(){return c})),o.d(t,"default",(function(){return u}));var n=o("nKUr"),r=(o("q1tI"),o("qVgU")),i=o("h0tR"),a=o("g4pe"),s=o.n(a),c=!0;function u(){return Object(n.jsxs)(r.a,{page:i.h.Privacy,children:[Object(n.jsxs)(s.a,{children:[Object(n.jsx)("title",{children:"Privacy Policy | NFTGO"}),Object(n.jsx)("meta",{property:"og:title",content:"Privacy Policy | NFTGO"}),Object(n.jsx)("meta",{property:"twitter:title",content:"Privacy Policy | NFTGO"}),Object(n.jsx)("meta",{id:"defaultHeadImage",property:"og:image",content:"https://static.nftgo.io/poster-1.png"})]}),Object(n.jsxs)("div",{style:{width:1208},children:[Object(n.jsx)("h1",{children:"Privacy Policy"}),Object(n.jsxs)("p",{children:["At NFTGO, we\u2019re committed to protecting and respecting your privacy. This Privacy and Cookie Policy (\u201cPrivacy Policy\u201d) govern your access to and use of this Website, nftgo.io (the \u201cWebsite\u201d), and associated content, software, and mobile applications (collectively, the \u201cService\u201d). This Privacy Policy also includes our Terms of Use which is located at ",Object(n.jsx)("a",{href:"https://NFTGO.io/terms-of-service",style:{color:"#5A66F9"},target:"_blank",children:"https://NFTGO.io/terms-of-service"}),"."]}),Object(n.jsx)("p",{children:"This Privacy Policy explains when and why we collect personal information about people who visit our Website or use our Services and how we use the personal information, the conditions under which we may disclose your personal information to others, and how we keep personal information secure. This Privacy Policy also explains how we use cookies and similar technology on our Website and in connection with our Services."}),Object(n.jsx)("p",{children:"We may change this Privacy Policy from time to time so please check this page occasionally to ensure that you are happy with any changes. By using our Website or our Services, you are agreeing to be bound by this Privacy Policy."}),Object(n.jsx)("h3",{children:"What Information Do We Collect?"}),Object(n.jsx)("p",{children:"NFTGO (\u201cNFTGO\u201d, \u201cwe\u201d or \u201cus\u201d) collects (a) the e-mail addresses of those who communicate with us via e-mail; (b) aggregate information concerning what pages users access or visit; (c) information volunteered by the user (such as survey information and/or site registrations); (d) financial information provided by the user for user syncing and information purposes only; and (e) information related to your use of the Website and/or the mobile application, including IP address, geographic location, and date and time of your request."}),Object(n.jsx)("h3",{children:"How Do We Use the Information?"}),Object(n.jsx)("p",{children:"NFTGO uses collected information for the following purposes:"}),Object(n.jsxs)("ol",{children:[Object(n.jsx)("li",{children:"To fulfill a contract or take steps linked to a contract such as processing your registration on our Website or sending you information about changes to our terms or policies;"}),Object(n.jsx)("li",{children:"Where it is necessary for purposes which are in NFTGO\u2019s or third parties\u2019 legitimate interests such as (a) to provide the information or content you have requested; (b) to contact you about our programs, products, features or services; (c) for internal business purposes such as identification and authentication or customer service, portfolio tracking and user preference syncing between devices; (d) to ensure the security of our Website, by trying to prevent unauthorized or malicious activities; (e) to enforce compliance with our Terms of Use and other policies; (f) to help other organizations (such as copyright owners) to enforce their rights; and (g) to tailor content, advertisements, and offers for you or for other purposes disclosed at the time of collection."})]}),Object(n.jsx)("u",{children:"If you do not wish to receive marketing information about our programs, products, features or services, you may send an email to us at team@nftgo.io."}),Object(n.jsxs)("ol",{start:3,children:[Object(n.jsx)("li",{children:"Where you give us consent, such as (a) where you ask us to send marketing information to you via a medium where we need your consent, including alerts via mobile push notifications; (b) where you give us consent to place cookies and to use similar technologies; and (c) on other occasions where we ask you for consent, for a purpose which we explain at that time."}),Object(n.jsx)("li",{children:"Where we are legally required to do so. We may also provide access to your personally identifiable information when legally required to do so, to cooperate with police investigations or other legal proceedings, to protect against misuse or unauthorized use of our Website, to limit our legal liability and protect our rights, or to protect the rights, property or safety of visitors of the Website or the public. In those instances, the information is provided only for that purpose."})]}),Object(n.jsx)("h3",{children:"How Do We Share Your Information?"}),Object(n.jsx)("p",{children:"We do not share or sell your personal data to other organizations for commercial purposes, except to provide products or services you\u2019ve requested, when we have your permission, or under the following circumstances:"}),Object(n.jsxs)("ol",{children:[Object(n.jsx)("li",{children:"It is necessary to share information in order to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, violations of Terms of Service, or as otherwise required by law."}),Object(n.jsx)("li",{children:"We transfer information about you if NFTGO is acquired by or merged with another company. In this event, NFTGO will notify you before information about you is transferred and becomes subject to a different privacy policy."}),Object(n.jsx)("li",{children:"We provide such information to trusted businesses or persons for the sole purpose of processing personally identifying information on our behalf. When this is done, it is subject to agreements that oblige those parties to process such information only on our instructions and in compliance with this Privacy Policy and appropriate confidentiality and security measures."}),Object(n.jsx)("li",{children:"We provide such information to third parties who have entered into non-disclosure agreements with us."}),Object(n.jsx)("li",{children:"We provide such information to a company controlled by, or under common control with, NFTGO for any purpose permitted by this Privacy Policy."}),Object(n.jsx)("li",{children:"We may aggregate, anonymize, and publish data for statistical and research purposes only. For example, we may compile and share information related to the popularity of certain products tracked by users. In any such instance, the information will not be able to be traced back to any individual."})]}),Object(n.jsx)("h3",{children:"Cookies and Web Beacons"}),Object(n.jsx)("p",{children:"A cookie is a small amount of data, which often includes an anonymous unique identifier, which is sent to your browser from a Website\u2019s computers and stored on your computer\u2019s hard drive. Cookies are required to use some NFTGO services. NFTGO and its ad management partners (\u201cAd Partners\u201d) use cookies to record current session information."}),Object(n.jsx)("p",{children:"Our Ad Partners may also from time to time use web beacons (also known as Internet tags, pixel tags, and clear GIFs). These web beacons are provided by our Ad Partners and allow Ad Partners to obtain information such as the IP address of the computer that downloaded the page on which the beacon appears, the URL of the page on which the beacon appears, the time the page containing the beacon was viewed, the type of browser used to view the page, and the information in cookies set by the Ad Partners. Web beacons enable our Ad Partners to recognize a unique cookie on your web browser, which in turn enables us to learn which advertisements bring users to our Website."}),Object(n.jsx)("h3",{children:"Data Storage"}),Object(n.jsx)("p",{children:"NFTGO uses third-party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run NFTGO and the related Website and mobile application. NFTGO owns the code, databases, and all rights to the NFTGO Website and mobile application and Services."}),Object(n.jsx)("h3",{children:"Security"}),Object(n.jsx)("p",{children:"We take precautions to ensure the security of your personal information. However, we cannot guarantee that hackers or unauthorized personnel may gain access to your personal information despite our efforts. You should note that in using the NFTGO service, your information will travel over the Internet and through third-party infrastructures and mobile networks, which are not under our control."}),Object(n.jsx)("p",{children:"We cannot protect, nor does this Privacy Policy apply to, any information that you transmit to other users. You should never transmit personal or identifying information to other users."}),Object(n.jsx)("h3",{children:"Retention of Your Personal Information"}),Object(n.jsx)("p",{children:"We retain information as long as it is necessary to provide the Services requested by you and others, subject to any legal obligations to further retain such information. Information associated with your account will generally be kept until it is no longer necessary to provide the Services or until you ask us to delete it or your account is deleted, whichever comes first. Additionally, we may retain information from deleted accounts to comply with the law, prevent fraud, resolve disputes, troubleshoot problems, assist with investigations, enforce the Terms of Use, and take other actions permitted by law. The information we retain will be handled in accordance with this Privacy Policy. Information about you that is no longer necessary and relevant to provide our Services may be de-identified and aggregated with other non-personal data to provide insights which are commercially valuable to NFTGO, such as statistics related to the use of NFTGO\u2019s Website and application."}),Object(n.jsx)("h3",{children:"Children"}),Object(n.jsx)("p",{children:"The NFTGO service is not intended for children under the age of 18, and we do not knowingly collect information from children under the age of 18."}),Object(n.jsx)("p",{children:"Children aged 18 or younger should not submit any personal information without the permission of their parents or guardians. By using the NFTGO service, you are representing that you are at least 18 years old, or that you are at least 18 years old and have your parents\u2019 or guardians\u2019 permission to use the Service."}),Object(n.jsx)("h3",{children:"Consent to Worldwide Transfer and Processing of Personal Information"}),Object(n.jsx)("p",{children:"NFTGO is located in People\u2019s Republic of China. and the terms of this Privacy Policy and the related Terms of Use shall be governed by and construed in accordance with China law and the laws of Zhejiang, China, without regard to any principles of conflicts of law. If you are not located in China, by accessing the Website and Services and providing personal information through it, you agree and acknowledge and consent to the collection, maintenance, processing, and transfer of such information in and to P.R.C and other countries and territories. These other jurisdictions may have different privacy laws from your home jurisdiction and provide different levels of protection of personal information. You agree that the terms of this Privacy Policy and the Terms of Use will apply and you consent to the transmission and processing of your personal information in any jurisdiction."}),Object(n.jsx)("h3",{children:"Complaints"}),Object(n.jsx)("p",{children:"Should you wish to raise a concern about our use of your information (and without prejudice to any other rights you may have), you have the right to do so with your local supervisory authority, although we hope that we can assist with any queries or concerns you may have about our use of your personal data."}),Object(n.jsx)("h3",{children:"Changes"}),Object(n.jsx)("p",{children:"NFTGO may periodically update this policy. We may notify you about significant changes in the way we treat personal information by placing a prominent notice on our Website so please check back occasionally to ensure that you agree with the changes. If you do not, do not use the Website, the application or our Services."}),Object(n.jsx)("h3",{children:"Questions"}),Object(n.jsxs)("p",{children:["Any questions about this Privacy Policy should be addressed to this e-mail address:",Object(n.jsx)("br",{}),Object(n.jsx)("b",{children:"team@nftgo.io."})]}),Object(n.jsx)("p",{children:"Effective Date: May 15, 2021"})]})]})}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,o){var n=o("C+bE"),r=o("qXWd");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?r(e):t}}},[["bzNm",0,1,3]]]);