(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),o=n(6),r=(n(0),n(84)),i={id:"use-navigation",title:"useNavigation",sidebar_label:"useNavigation",hide_title:!0,hide_table_of_contents:!0},c={unversionedId:"use-navigation",id:"use-navigation",isDocsHomePage:!1,title:"useNavigation",description:"useNavigation",source:"@site/docs/use-navigation.mdx",permalink:"/react-native-navigation-hooks/docs/use-navigation",editUrl:"https://github.com/underscopeio/react-native-navigation-hooks/edit/master/website/docs/use-navigation.mdx",sidebar_label:"useNavigation",sidebar:"docs",previous:{title:"Suggestions",permalink:"/react-native-navigation-hooks/docs/suggestions"},next:{title:"useNavigationBottomTabSelect",permalink:"/react-native-navigation-hooks/docs/use-navigation-bottom-tab-select"}},s=[{value:"<code>useNavigation</code>",id:"usenavigation",children:[{value:"Example",id:"example",children:[]},{value:"Reference",id:"reference",children:[]}]}],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"usenavigation"},Object(r.b)("inlineCode",{parentName:"h2"},"useNavigation")),Object(r.b)("p",null,"Gives you all the ",Object(r.b)("inlineCode",{parentName:"p"},"Navigation")," commands exposed by ",Object(r.b)("strong",{parentName:"p"},"React Native Navigation")," enhanced with a set of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"helpers#createNavigationCommands"}),"handy overloaded methods")," which reduces significantly the boilerplate code making it it much more clean and readable."),Object(r.b)("p",null,"On the other hand you will have to provide the ",Object(r.b)("inlineCode",{parentName:"p"},"componentId")," only once when you declare the hook. Or even better you can forget about it when it is used in conjunction with the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"contexts#NavigationContext"}),"NavigationContext")," as the hook will do it for you by obtaining the ",Object(r.b)("inlineCode",{parentName:"p"},"componentId")," from the context. Also this is very useful in certain situations where you wanna access the commands from deeply nested childs."),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Use Navigation Context")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The example below assumes that the screen was registered and wrapped it with the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"contexts#navigationprovider"}),"NavigationProvider")," to pass the ",Object(r.b)("strong",{parentName:"p"},"componentId")," down to the three below so the ",Object(r.b)("strong",{parentName:"p"},"useNavigation")," hook can read it."),Object(r.b)("p",{parentName:"div"},"You can either wrap the screen with the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"contexts#navigationprovider"}),"NavigationProvider")," or take advantage of the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"hocs#withnavigationproviders"}),"withNavigationProvider")," helper."))),Object(r.b)("samp",{id:"use-navigation-example"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react'\nimport { Button, View } from 'react-native'\nimport { useNavigation } from 'react-native-navigation-hooks'\n\nconst ExampleScreen = () => {\n  const { setStackRoot, pop, push, showOverlay } = useNavigation()\n\n  return (\n    <View>\n      <Button\n        title=\"Home\"\n        onPress={() => {\n          setStackRoot('HomeScreen')\n        }}\n      />\n\n      <Button title=\"Back\" onPress={() => pop()} />\n\n      <Button\n        title=\"Next Screen\"\n        onPress={() => {\n          push('NextScreen', { myProp: 'value' })\n        }}\n      />\n\n      <Button\n        title=\"showOverlay\"\n        onPress={() => {\n          showOverlay('ScreenOveraly')\n        }}\n      />\n    </View>\n  )\n}\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"reference"},"Reference"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"useNavigation(componentId?: string): NavigationCommands")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Check ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"helpers#createnavigationcommands"}),"createNavigationCommands")," for more info about the overloaded methods provided.")))}l.isMDXComponent=!0},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return n?o.a.createElement(m,c(c({ref:t},p),{},{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);