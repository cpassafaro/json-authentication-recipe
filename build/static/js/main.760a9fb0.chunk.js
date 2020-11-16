(this["webpackJsonpfront-end-of-json-api-project"]=this["webpackJsonpfront-end-of-json-api-project"]||[]).push([[0],{100:function(e,i,s){},101:function(e,i,s){},102:function(e,i,s){},104:function(e,i,s){"use strict";s.r(i);var n=s(2),t=s(0),a=s(9),c=s.n(a),u=s(45),r=s(14),o=s(15),l=s(17),d=s(16),h=s(21),j=s.n(h),p=s(135),m=s(139),b=s(154),g=s(140),x=window.location.host.includes("localhost")?"":"/front_end_of_json_api_project",f=function(e){Object(l.a)(s,e);var i=Object(d.a)(s);function s(){var e;return Object(r.a)(this,s),(e=i.call(this)).postInput=function(i){i.preventDefault();var s={title:e.state.title,summary:e.state.summary,servings:e.state.servings,cuisines:e.state.cuisines,ingredients:{aisle:"Produce",amount:1,consistency:"solid",id:9037,image:"avocado.jpg",measures:{},meta:[],metaInformation:[],name:"avocado",original:e.state.ingredients,originalName:"large avocado",originalString:"1 medium/large avocado",unit:"medium"},instructions:{name:"",steps:[{number:1,step:[e.state.instructions]}]}};j.a.post("https://bombrecipeapi.herokuapp.com/new",s).then((function(i){null!=i.data?(console.log(e.props.history),e.props.history.push(x+"/success"),console.log(i.data)):(i.data,e.props.history.push(x+"/fail"))}))},e.checkInputFields=function(i){var s=e.state.cuisines,n=e.state.title;""!=n&&s.includes("Nordic")||s.includes("nordic")||s.includes("Nordic Cuisine")||s.includes("nordic cuisine")||s.includes("french")||s.includes("French")||s.includes("French Cuisine")||s.includes("french cuisine")||s.includes("italian")||s.includes("Italian")||s.includes("Italian Cuisine")||s.includes("italian cuisine")||s.includes("spanish")||s.includes("Spanish")||s.includes("Spanish Cuisine")||s.includes("spanish cuisine")||s.includes("thai")||s.includes("Thai")||s.includes("Thai Cuisine")||s.includes("thai cuisine")||s.includes("korean")||s.includes("Korean")||s.includes("Korean Cuisine")||s.includes("korean cuisine")||s.includes("indian")||s.includes("Indian")||s.includes("indian cuisine")||s.includes("Indian Cuisine")||s.includes("jewish")||s.includes("Jewish")||s.includes("Jewish Cuisine")||s.includes("jewish cuisine")||s.includes("southern")||s.includes("Southern")||s.includes("Southern Cuisine")||s.includes("African")||s.includes("african")||s.includes("African Cuisine")||s.includes("african cuisine")||s.includes("cajun")||s.includes("Cajun")||s.includes("cajun cuisine")||s.includes("Cajun Cuisine")||s.includes("chinese")||s.includes("Chinese")||s.includes("chinese cuisine")||s.includes("Chinese Cuisine")||s.includes("caribbean")||s.includes("Caribbean")||s.includes("caribbean cuisine")||s.includes("Caribbean Cuisine")||s.includes("german")||s.includes("German")||s.includes("german cuisine")||s.includes("German Cuisine")||s.includes("irish")||s.includes("Irish")||s.includes("irish cuisine")||s.includes("Irish Cuisine")||s.includes("japanese")||s.includes("Japanese")||s.includes("japanese cuisine")||s.includes("Japanese Cuisine")||s.includes("mexican")||s.includes("Mexican")||s.includes("mexican cuisine")||s.includes("Mexican Cuisine")||s.includes("Middle Eastern")||s.includes("middle eastern")||s.includes("Middle Eastern Cuisine")||s.includes("middle eastern cuisine")||s.includes("mid-eastern cuisine")||s.includes("Mid-Eastern cuisine")||s.includes("Mid-Eastern")||s.includes("mid-eastern")?e.postInput(i):""==n?alert("Please Enter a Title"):alert("Please enter valid cuisine style. Ex. 'Nordic'")},e.pushTitleToState=function(i){var s=i.target.value;e.setState({title:s})},e.pushSummaryToState=function(i){var s=i.target.value;e.setState({summary:s})},e.pushCuisinesToState=function(i){var s=i.target.value,n=[];n.push(s),e.setState({cuisines:n})},e.pushServingsToState=function(i){var s=i.target.value;e.setState({servings:s})},e.pushIngredientsToState=function(i){var s=i.target.value,n=[];n.push(s),e.setState({ingredients:n})},e.pushInstructionsToState=function(i){var s=i.target.value,n=[];n.push(s),e.setState({instructions:n})},e.state={title:"",summary:"",cuisines:[],ingredients:[],instructions:[],servings:Number},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(n.jsxs)(p.a,{children:[Object(n.jsxs)(m.a,{style:{color:"secondary",display:"flex",flexDirection:"column"},children:[Object(n.jsx)("div",{children:"Create your new recipe below"}),Object(n.jsx)(b.a,{type:"text",variant:"outlined",placeholder:"Recipe Name",onChange:this.pushTitleToState}),Object(n.jsx)(b.a,{variant:"outlined",type:"text",placeholder:"Summary",onChange:this.pushSummaryToState}),Object(n.jsx)(b.a,{variant:"outlined",type:"text",placeholder:"Style of Cuisine must be one of the title names from homepage ex. Mexican or Thai",onChange:this.pushCuisinesToState}),Object(n.jsx)(b.a,{variant:"outlined",type:"text",placeholder:"Servings",onChange:this.pushServingsToState}),Object(n.jsx)(b.a,{variant:"outlined",type:"text",placeholder:"Ingredients",onChange:this.pushIngredientsToState}),Object(n.jsx)(b.a,{variant:"outlined",type:"text",placeholder:"Instructions",onChange:this.pushInstructionsToState})]}),Object(n.jsx)(g.a,{color:"primary",variant:"outlined",type:"submit",onClick:this.checkInputFields,children:"Submit"})]})}}]),s}(t.Component),v=(s(100),s(142)),O=s(143),C=s(144),y=s(145),S=s(141),w=Object(S.a)({buttonStyle:{color:"white",display:"flex",justifyContent:"space-around",textDecoration:"underline"},recipesStyle:{display:"flex",justifyContent:"flex-start",width:"300px",color:"white",textDecoration:"underline"},container:{maxWidth:"300px",textDecoration:"none"}});function I(){var e=w();return Object(n.jsx)(v.a,{position:"static",children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)(C.a,{edge:"start",color:"primary","aria-label":"menu"}),Object(n.jsx)("div",{className:e.container,children:Object(n.jsx)(y.a,{to:"/",children:Object(n.jsx)(m.a,{variant:"h6",className:e.recipesStyle,children:"\ud83d\udca3 Recipes"})})}),Object(n.jsx)(y.a,{to:"/new",children:Object(n.jsx)(g.a,{className:e.buttonStyle,children:"Create Recipe"})})]})})}var T=s(6),k=s(146),E=window.location.host.includes("localhost")?"":"/front_end_of_json_api_project",N=function(e){Object(l.a)(s,e);var i=Object(d.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=i.call(this,e)).updateRecipe=function(e){e.preventDefault();var i={title:n.state.title,servings:n.state.servings,ingredients:{aisle:"Produce",amount:1,consistency:"solid",id:9037,image:"avocado.jpg",measures:{},meta:[],metaInformation:[],name:"avocado",original:n.state.ingredients,originalName:"large avocado",originalString:"1 medium/large avocado",unit:"medium"},instructions:{name:"",steps:[{number:1,step:[n.state.instructions]}]}};j.a.put("https://bombrecipeapi.herokuapp.com/recipe/".concat(n.state.title),i).then((function(e){null!=e.data?(console.log(n.props.history),n.props.history.push(E+"/success"),window.location.reload(!1),console.log(e.data)):(e.data,n.props.history.push(E+"/fail"))}))},n.pushTitleToState=function(e){var i=e.target.value;n.setState({title:i})},n.pushServingsToState=function(e){var i=e.target.value;n.setState({servings:i})},n.pushIngredientsToState=function(e){var i=e.target.value,s=[];s.push(i),n.setState({ingredients:s})},n.pushInstructionsToState=function(e){var i=e.target.value,s=[];s.push(i),n.setState({instructions:s})},console.log(e.location.params.data),n.state={title:"",servings:"",ingredients:[],instructions:[],isLoading:!0},n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.location.params.data.servings.toString(),i=[];this.props.location.params.data.ingredients.forEach((function(e){return i.push(e.original)}));var s=i.toString(),n=[];this.props.location.params.data.instructions[0].steps.forEach((function(e){return n.push(e.step)}));var t=n.toString();this.setState({title:this.props.location.params.data.title,servings:e,ingredients:s,instructions:t,isLoading:!1})}},{key:"render",value:function(){var e=this.props.classes;return 1==this.state.isLoading?Object(n.jsx)(k.a,{color:"secondary",display:"flex",justify:"center",alignItems:"center"}):Object(n.jsxs)(p.a,{children:[Object(n.jsxs)(m.a,{style:{color:"secondary",display:"flex",flexDirection:"column"},children:[Object(n.jsxs)("div",{children:["You are making changes to : ",this.state.title]}),Object(n.jsx)(b.a,{multiline:!0,value:this.state.servings,type:"text",placeholder:"Summary",variant:"outlined",onChange:this.pushServingsToState}),Object(n.jsx)(b.a,{className:e.tall,value:this.state.ingredients,type:"text",variant:"outlined",placeholder:"Ingredients",onChange:this.pushIngredientsToState}),Object(n.jsx)(b.a,{value:this.state.instructions,type:"text",placeholder:"Instructions",variant:"outlined",onChange:this.pushInstructionsToState})]}),Object(n.jsx)(g.a,{variant:"outlined",color:"primary",type:"submit",onClick:this.updateRecipe,children:"Submit"})]})}}]),s}(t.Component),_=Object(T.a)((function(e){return{root:{maxWidth:345},tall:{}}}))(N),M=s(152),D=s(147),J=s(148),L=s(149),F=s(150),A=s(151),R=function(e){Object(l.a)(s,e);var i=Object(d.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=i.call(this,e)).state={data:e.data,image:e.image,title:e.title},n}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.classes;return Object(n.jsxs)(D.a,{className:e.root,style:{maxWidth:"228px"},children:[Object(n.jsxs)(J.a,{children:[Object(n.jsx)(L.a,{className:e.media,image:this.props.image}),Object(n.jsx)(F.a,{children:Object(n.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"h2",children:this.state.title})})]}),Object(n.jsx)(A.a,{children:Object(n.jsx)(y.a,{to:{pathname:"/recipe/".concat(this.state.title),state:{data:this.props.data}},children:Object(n.jsx)(g.a,{size:"small",color:"primary",children:"Click here for more recipes"})})})]})}}]),s}(t.Component),P=Object(T.a)((function(e){return{root:{maxWidth:345},media:{height:140}}}))(R),G=function(e){Object(l.a)(s,e);var i=Object(d.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=i.call(this,e)).findAmerican=function(){var e=n.state.data,i=[],s=[],t=[],a=[],c=[],u=[],r=[],o=[],l=[],d=[],h=[],j=[],p=[],m=[],b=[],g=[],x=[],f=[];e.map((function(e){return e.cuisines.includes("Nordic")||e.cuisines.includes("nordic")||e.cuisines.includes("Nordic Cuisine")||e.cuisines.includes("nordic cuisine")?i.push(e):e.cuisines.includes("French")||e.cuisines.includes("french")||e.cuisines.includes("french cuisine")||e.cuisines.includes("French Cuisine")?s.push(e):e.cuisines.includes("Italian")||e.cuisines.includes("Italian Cuisine")||e.cuisines.includes("italian")||e.cuisines.includes("italian cuisine")?t.push(e):e.cuisines.includes("Spanish")||e.cuisines.includes("spanish")||e.cuisines.includes("spanish cuisine")||e.cuisines.includes("Spanish Cuisine")?a.push(e):e.cuisines.includes("Thai")||e.cuisines.includes("thai")||e.cuisines.includes("thai cuisine")||e.cuisines.includes("Thai Cuisine")?c.push(e):e.cuisines.includes("Korean")||e.cuisines.includes("korean")||e.cuisines.includes("korean cuisine")||e.cuisines.includes("Korean Cuisine")?u.push(e):e.cuisines.includes("Indian")||e.cuisines.includes("indian")||e.cuisines.includes("indian cuisine")||e.cuisines.includes("Indian Cuisine")?r.push(e):e.cuisines.includes("Jewish")||e.cuisines.includes("jewish")||e.cuisines.includes("jewish cuisine")||e.cuisines.includes("Jewish Cuisine")?o.push(e):e.cuisines.includes("Southern")||e.cuisines.includes("southern")||e.cuisines.includes("southern cuisine")||e.cuisines.includes("Southern Cuisine")?l.push(e):e.cuisines.includes("African")||e.cuisines.includes("african")||e.cuisines.includes("african cuisine")||e.cuisines.includes("Afican Cuisine")?d.push(e):e.cuisines.includes("Cajun")||e.cuisines.includes("cajun")||e.cuisines.includes("cajun cuisine")||e.cuisines.includes("Cajun Cuisine")?h.push(e):e.cuisines.includes("Chinese")||e.cuisines.includes("chinese")||e.cuisines.includes("chinese cuisine")||e.cuisines.includes("Chinese Cuisine")?j.push(e):e.cuisines.includes("Caribbean")||e.cuisines.includes("caribbean")||e.cuisines.includes("caribbean cuisine")||e.cuisines.includes("Caribbean Cuisine")?p.push(e):e.cuisines.includes("German")||e.cuisines.includes("german")||e.cuisines.includes("german cuisine")||e.cuisines.includes("German Cuisine")?m.push(e):e.cuisines.includes("Irish")||e.cuisines.includes("irish")||e.cuisines.includes("irish cuisine")||e.cuisines.includes("Irish Cuisine")?b.push(e):e.cuisines.includes("Japanese")||e.cuisines.includes("japanese")||e.cuisines.includes("japanese cuisine")||e.cuisines.includes("Japanese Cuisine")?g.push(e):e.cuisines.includes("Mexican")||e.cuisines.includes("mexican")||e.cuisines.includes("mexican cuisine")||e.cuisines.includes("Mexican Cuisine")?x.push(e):(e.cuisines.includes("Middle Eastern")||e.cuisines.includes("middle eastern")||e.cuisines.includes("Middle Eastern Cuisine")||e.cuisines.includes("middle eastern cuisine")||e.cuisines.includes("mid-eastern cuisine")||e.cuisines.includes("Mid-Eastern")||e.cuisines.includes("Mid-Eastern Cuisine")||e.cuisines.includes("mid-eastern cuisine"))&&f.push(e),f})),console.log(i,s,t,a,c,u,r,o,l,d,h,j,p,m,g,x,f),n.setState({nordic:i,french:s,italian:t,spanish:a,thai:c,korean:u,indian:r,jewish:o,southern:l,african:d,cajun:h,chinese:j,caribbean:p,german:m,irish:b,japanese:g,mexican:x,middleEastern:f})},n.state={data:e.data.data,nordic:"",french:"",italian:"",spanish:"",thai:"",korean:"",indian:"",jewish:"",southern:"",african:"",cajun:"",chinese:"",caribbean:"",german:"",irish:"",japanese:"",mexican:"",middleEastern:"",isLoading:!0},n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.setState({isLoading:!1}),this.findAmerican()}},{key:"render",value:function(){return 1==this.state.isLoading?Object(n.jsx)("div",{className:"App",children:"Loading..."}):Object(n.jsxs)(m.a,{children:[Object(n.jsxs)(M.a,{container:!0,direction:"row",justify:"space-around",children:[Object(n.jsx)(P,{title:"Nordic Cuisine",image:this.state.nordic[0].image,data:this.state.nordic}),Object(n.jsx)(P,{title:"French Cuisine",image:this.state.french[0].image,data:this.state.french}),Object(n.jsx)(P,{title:"Italian Cuisine",image:this.state.italian[0].image,data:this.state.italian})]}),Object(n.jsxs)(M.a,{container:!0,direction:"row",justify:"space-around",children:[Object(n.jsx)(P,{title:"Spanish Cuisine",image:this.state.spanish[0].image,data:this.state.spanish}),Object(n.jsx)(P,{title:"Thai Cuisine",image:this.state.thai[1].image,data:this.state.thai}),Object(n.jsx)(P,{title:"Korean Cuisine",image:this.state.korean[0].image,data:this.state.korean})]}),Object(n.jsxs)(M.a,{container:!0,direction:"row",justify:"space-around",children:[Object(n.jsx)(P,{title:"Indian Cuisine",image:this.state.indian[0].image,data:this.state.indian}),Object(n.jsx)(P,{title:"Jewish Cuisine",image:this.state.jewish[0].image,data:this.state.jewish}),Object(n.jsx)(P,{title:"Southern Cuisine",image:this.state.southern[0].image,data:this.state.southern})]}),Object(n.jsxs)(M.a,{container:!0,direction:"row",justify:"space-around",children:[Object(n.jsx)(P,{title:"African Cuisine",image:this.state.african[0].image,data:this.state.african}),Object(n.jsx)(P,{title:"Cajun Cuisine",image:this.state.cajun[0].image,data:this.state.cajun}),Object(n.jsx)(P,{title:"Chinese Cuisine",image:this.state.chinese[0].image,data:this.state.chinese})]}),Object(n.jsxs)(M.a,{container:!0,direction:"row",justify:"space-around",children:[Object(n.jsx)(P,{title:"Caribbean Cuisine",image:this.state.caribbean[0].image,data:this.state.caribbean}),Object(n.jsx)(P,{title:"German Cuisine",image:this.state.german[1].image,data:this.state.german}),Object(n.jsx)(P,{title:"Irish Cuisine",image:this.state.irish[0].image,data:this.state.irish})]}),Object(n.jsxs)(M.a,{container:!0,direction:"row",justify:"space-around",children:[Object(n.jsx)(P,{title:"Japanese Cuisine",image:this.state.japanese[0].image,data:this.state.japanese}),Object(n.jsx)(P,{title:"Mexican Cuisine",image:this.state.mexican[0].image,data:this.state.mexican}),Object(n.jsx)(P,{title:"Mid-Eastern Cuisine",image:this.state.middleEastern[0].image,data:this.state.middleEastern})]})]})}}]),s}(t.Component),K=(s(101),window.location.host.includes("localhost")?"":"/front_end_of_json_api_project"),W=function(e){Object(l.a)(s,e);var i=Object(d.a)(s);function s(e){var t;return Object(r.a)(this,s),(t=i.call(this,e)).createElements=function(){var e=t.state.data;console.log(e);var i=[];e.forEach((function(e){var s=[];e.ingredients.length>0?e.ingredients.forEach((function(e){var i=Object(n.jsx)("div",{children:e.original});return s.push(i),s})):console.log(e);var a=e.instructions[0].steps,c=[];a.length>0?a.forEach((function(e){if(null!=e){var i=Object(n.jsx)("div",{children:e.step});return c.push(i),c}})):console.log(e);var u=Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"title",children:e.title}),Object(n.jsxs)("div",{className:"img-area",children:[Object(n.jsx)("img",{src:e.image,className:"image",maxWidth:"200px"}),Object(n.jsxs)("div",{className:"ingredients-area",children:[Object(n.jsxs)("div",{children:["Number of Servings: ",e.servings]}),Object(n.jsxs)("div",{children:["Ingredients: ",s]})]})]}),Object(n.jsxs)("div",{className:"information",children:[Object(n.jsx)("div",{className:"steps-title",children:"---Steps---"}),Object(n.jsx)("div",{children:c})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{className:"button",onClick:t.deleteElement,children:"Delete Recipe"}),Object(n.jsx)(y.a,{to:{pathname:"/update",params:{data:e}},children:Object(n.jsx)("button",{className:"button",children:"Edit Recipe"})})]})]});i.push(u)})),t.setState({elements:i})},t.deleteElement=function(e){var i=e.target.parentElement.parentElement.firstElementChild.textContent;j.a.delete("https://bombrecipeapi.herokuapp.com/remove/".concat(i)).then((function(e){null!=e.data?(console.log(t.props.history),t.props.history.push(K+"/success"),window.location.reload(!1),console.log(e.data)):(e.data,t.props.history.push(K+"/fail"))}))},console.log(e.location.state),t.state={data:e.location.state.data,elements:[],newElements:[]},t}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.createElements()}},{key:"render",value:function(){return console.log(this.state.data),console.log(this.state.elements),Object(n.jsx)("div",{children:this.state.elements})}}]),s}(t.Component),B=s(155),z=Object(S.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function Y(){var e=z();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(B.a,{variant:"filled",severity:"success",children:"Success! Click Recipes to continue"})})}var q=Object(S.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function H(){var e=q();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(B.a,{variant:"filled",severity:"error",children:"Error! The title you entered was not found, please type in the title exactly as you see it!"})})}s(102);var Q=s(156),U=window.location.host.includes("localhost")?"":"/front_end_of_json_api_project",V=function(e){Object(l.a)(s,e);var i=Object(d.a)(s);function s(){var e;return Object(r.a)(this,s),(e=i.call(this)).state={data:"",isLoading:!0},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;console.log("mounted");j.a.get("https://bombrecipeapi.herokuapp.com/").then((function(e){return e})).then((function(i){e.setState({data:i,isLoading:!1})}))}},{key:"render",value:function(){var e=this;return 1==this.state.isLoading?Object(n.jsx)(k.a,{color:"secondary",display:"flex",justify:"center",alignItems:"center"}):Object(n.jsxs)("div",{children:[Object(n.jsxs)("nav",{children:[Object(n.jsx)(y.a,{exact:!0,to:U+"/"}),Object(n.jsx)(y.a,{to:U+"/new"}),Object(n.jsx)(y.a,{to:U+"/delete"}),Object(n.jsx)(y.a,{to:U+"/update"})]}),Object(n.jsxs)("main",{children:[Object(n.jsx)(I,{}),Object(n.jsx)(Q.a,{exact:!0,path:U+"/",render:function(i){return Object(n.jsx)(G,Object(u.a)(Object(u.a)({},i),{},{data:e.state.data}))}}),Object(n.jsx)(Q.a,{path:U+"/new",component:f}),Object(n.jsx)(Q.a,{path:U+"/update",render:function(e){return Object(n.jsx)(_,Object(u.a)({},e))}}),Object(n.jsx)(Q.a,{path:U+"/recipe/:title",component:W}),Object(n.jsx)(Q.a,{path:U+"/success",component:Y}),Object(n.jsx)(Q.a,{path:U+"/fail",component:H})]})]})}}]),s}(t.Component),X=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,158)).then((function(i){var s=i.getCLS,n=i.getFID,t=i.getFCP,a=i.getLCP,c=i.getTTFB;s(e),n(e),t(e),a(e),c(e)}))},Z=s(157),$=s(153),ee=s(68),ie=s(66),se=s.n(ie),ne=s(67),te=s.n(ne),ae=Object(ee.a)({palette:{primary:se.a,secondary:te.a}});c.a.render(Object(n.jsx)(Z.a,{children:Object(n.jsx)($.a,{theme:ae,children:Object(n.jsx)(V,{})})}),document.getElementById("root")),X()}},[[104,1,2]]]);
//# sourceMappingURL=main.760a9fb0.chunk.js.map