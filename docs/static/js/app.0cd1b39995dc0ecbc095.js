webpackJsonp([1],{"4+hh":function(t,e){},"5iOT":function(t,e){},"6fJY":function(t,e){},ABZ3:function(t,e){},AuyI:function(t,e){},EUk3:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("HSQo"),a=s.n(n),i=(s("4+hh"),s("Lgyv")),r=s.n(i),o=s("hR3v"),d=s.n(o),l=s("3It0"),c=s("mtWM"),m=s.n(c),u=s("Rf8U"),h=s.n(u),g=s("7+uW"),v=s("TXmL"),f=s("NYxO"),p=s("v/L+"),_=s.n(p),b=s("//Fk"),w=s.n(b),E="https://switchlist-api.herokuapp.com",k={REGISTER:function(t,e){var s=t.commit;return new w.a(function(t,n){m.a.post(E+"/auth/register",e).then(function(e){var n=e.data;s("SET_SESSION",n),t(n)}).catch(n)})},LOGIN:function(t,e){var s=t.commit;return new w.a(function(t,n){m.a.post(E+"/auth/login",e).then(function(e){var n=e.data;s("SET_SESSION",n),s("SET_UPDATED_TIMESTAMP"),t(n)}).catch(n)})},UPDATE_SETTINGS:function(t,e){var s=t.commit,n=t.state.token;return new w.a(function(t,a){var i={headers:{token:n}};m.a.put(E+"/settings",e,i).then(function(e){var n=e.data.settings;s("SET_SETTINGS",n),t()}).catch(a)})},UPDATE_LISTS:function(t){var e=t.commit,s=t.state,n=s.user,a=s.token;return new w.a(function(t,s){var i={headers:{token:a}},r={lists:n.lists};m.a.put(E+"/lists",r,i).then(function(){e("SET_UPDATED_TIMESTAMP"),t()}).catch(s)})},LOAD_LISTS:function(t){var e=t.commit,s=t.state.token;return new w.a(function(t,n){var a={headers:{token:s}};m.a.get(E+"/lists",a).then(function(s){var n=s.data.lists;e("UPDATE_LIST",n),e("SET_UPDATED_TIMESTAMP"),t()}).catch(n)})},LOAD_GAMES:function(t,e){var s=t.commit,n=t.state.token;return new w.a(function(t,a){var i={headers:{token:n}};m.a.get(E+"/games?games="+e.join(","),i).then(function(e){var n=e.data;s("CACHE_GAME_DATA",n),t()}).catch(a)})},SEARCH:function(t,e){var s=t.commit,n=t.state.token;return new w.a(function(t,a){var i={headers:{token:n}};m.a.get(E+"/search?searchText="+e+"&order=popularity:desc",i).then(function(e){var n=e.data;s("SET_SEARCH_RESULTS",n),s("CACHE_GAME_DATA",n),t()}).catch(a)})},DELETE_USER:function(t){var e=t.state.token;return new w.a(function(t,s){m.a.delete(E+"/user?token="+e).then(function(){t()}).catch(s)})}},j=s("bOdI"),S=s.n(j),L=s("Dd8w"),A=s.n(L),C=s("PJh5"),x=s.n(C),I={SET_SESSION:function(t,e){var s=e.user,n=e.token;t.token=n,t.user=s},SET_SEARCH_RESULTS:function(t,e){t.results=e},UPDATE_USER:function(t,e){t.user=e},UPDATE_LIST:function(t,e){t.user.lists=e},SORT_LIST:function(t,e){t.user.lists[e].games.sort(function(e,s){var n=t.games[e].name.toUpperCase(),a=t.games[s].name.toUpperCase();return n<a?-1:n>a?1:0})},UPDATE_LIST_NAME:function(t,e){var s=e.listIndex,n=e.listName;t.user.lists[s].name=n},SET_UPDATED_TIMESTAMP:function(t){t.dataUpdatedTimestamp=x()().format()},SET_SETTINGS:function(t,e){t.user.settings=e},REMOVE_LIST:function(t,e){t.user.lists.splice(e,1)},ADD_GAME:function(t,e){var s=e.gameId,n=e.listId;t.user.lists[n].games.push(s)},ADD_LIST:function(t,e){var s={games:[],name:e};t.user.lists.push(s)},REMOVE_GAME:function(t,e){var s=e.gameId,n=e.listId;t.user.lists[n].games.splice(t.user.lists[n].games.indexOf(s),1)},CACHE_GAME_DATA:function(t,e){e.forEach(function(e){t.games[e.id]||(t.games=A()({},t.games,S()({},e.id,e)))})},CLEAR_SESSION:function(t){t.token=null,t.user=null}},y={auth:function(t){return Boolean(t.token&&t.user)}};g.default.use(f.a);var D=new _.a({key:"vuex",storage:window.localStorage}),T=new f.a.Store({state:{token:null,user:null,dataUpdatedTimestamp:null,results:null,games:{}},actions:k,mutations:I,getters:y,plugins:[D.plugin]}),$={props:{gameId:[Number,String]},data:function(){return{modalStyles:{top:"20px",width:"720px",maxWidth:"100%"}}},computed:{gameData:function(){return this.$store.state.games},game:function(){return this.gameId?this.gameData[this.gameId]:null},style:function(){return(this.game&&this.game.screenshots?"background-image: url("+this.getImageUrl(this.game.screenshots[0].cloudinary_id)+")":null)||""},coverUrl:function(){return this.gameData&&this.gameData[this.gameId].cover?"https://images.igdb.com/igdb/image/upload/t_cover_small/"+this.gameData[this.gameId].cover.cloudinary_id+".jpg":"/static/no-image.jpg"}},methods:{getVideoUrl:function(t){return"https://www.youtube.com/embed/"+t+"?rel=0&autohide=1"},getImageUrl:function(t){return t?"https://images.igdb.com/igdb/image/upload/t_720p/"+t+".jpg":null}}},M={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.game?s("div",{staticClass:"game-modal"},[s("md-card",[s("div",{staticClass:"game-header"},[s("div",{staticClass:"game-background",style:t.style},[s("img",{staticClass:"game-cover",attrs:{src:t.coverUrl,alt:t.game.name,width:"80"}})]),t._v(" "),s("h2",{staticClass:"game-title",class:{small:t.game.name.length>28}},[t._v(t._s(t.game.name))]),t._v(" "),s("md-divider")],1),t._v(" "),s("p",{staticClass:"game-description"},[t._v(t._s(t.game.summary))]),t._v(" "),t.game.screenshots?s("div",[s("h3",[t._v("Screenshots ("+t._s(t.game.screenshots.length)+")")]),t._v(" "),s("div",{staticClass:"game-screenshots no-wrap"},t._l(t.game.screenshots,function(e,n){return t.game.screenshots?s("img",{key:n,staticClass:"image",attrs:{src:t.getImageUrl(e.cloudinary_id)}}):t._e()}))]):t._e(),t._v(" "),s("h3",[t._v("Videos ("+t._s(t.game.videos.length)+")")]),t._v(" "),s("div",{staticClass:"game-videos no-wrap"},t._l(t.game.videos,function(t){var e=t.video_id;return s("div",{key:e,staticClass:"game-video"},[s("iframe",{attrs:{src:"https://www.youtube.com/embed/"+e+"?rel=0&autohide=1",frameborder:"0",width:"426",height:"240",allow:"autoplay; encrypted-media",allowfullscreen:""}})])}))])],1):t._e()},staticRenderFns:[]};var R=s("VU/8")($,M,!1,function(t){s("Q7Ak")},"data-v-3aa646e7",null).exports,N={props:{gameId:Number,listId:Number,searchResult:Boolean},computed:{list:function(){return this.$store.state.user.lists[this.listId]},settings:function(){return this.$store.state.user.settings},game:function(){return this.gameData[this.gameId]},gameData:function(){return this.$store.state.games},coverUrl:function(){return this.gameData&&this.gameData[this.gameId].cover?"https://images.igdb.com/igdb/image/upload/t_cover_small/"+this.gameData[this.gameId].cover.cloudinary_id+".jpg":"/static/no-image.jpg"},nightMode:function(){return this.$store.state.user.settings.nightMode},showGameRating:function(){return this.settings.showGameRatings&&Boolean(Number(this.game.aggregated_rating))}},methods:{addGame:function(){var t={listId:this.listId,gameId:this.gameId};this.$store.commit("ADD_GAME",t),this.$store.dispatch("UPDATE_LISTS")},removeGame:function(){var t={listId:this.listId,gameId:this.gameId};this.$store.commit("REMOVE_GAME",t),this.$store.dispatch("UPDATE_LISTS")},openGame:function(){this.searchResult||(this.$bus.$emit("TOGGLE_DRAWER",{panelName:"game-modal",gameId:this.game.id}),this.$router.push({name:"game",params:{id:this.game.id,slug:this.game.slug}}))}}},G={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.gameId&&t.gameData?s("md-card",{class:{nightMode:t.nightMode}},[s("md-card-header",[s("md-card-media",{nativeOn:{click:function(e){return t.openGame(e)}}},[s("img",{attrs:{width:"80",src:t.coverUrl}})]),t._v(" "),s("md-card-header-text",{on:{click:t.openGame}},[s("h4",{staticClass:"game-title"},[t._v(t._s(t.game.name))]),t._v(" "),t.showGameRating?s("div",{staticClass:"game-rating"},[t._v("\n                "+t._s(parseInt(t.game.aggregated_rating))+"\n            ")]):t._e()]),t._v(" "),t.searchResult?t._e():s("md-button",{staticClass:"md-dense md-icon-button game-drag-handle"},[s("md-icon",[t._v("drag_handle")])],1),t._v(" "),t.list.games.includes(t.gameId)?s("md-button",{staticClass:"md-dense md-icon-button trash",on:{click:t.removeGame}},[s("md-icon",[t._v("delete")])],1):s("md-button",{staticClass:"md-dense md-icon-button md-default trash",on:{click:t.addGame}},[s("md-icon",[t._v("add")])],1)],1)],1):t._e()},staticRenderFns:[]};var U=s("VU/8")(N,G,!1,function(t){s("y1So")},"data-v-15c0fb59",null).exports,O=s("M4fF"),P={components:{GameCard:U},props:{listId:[Number,String,Boolean]},data:function(){return{searchText:"",loading:!1,styles:{width:"95%","max-width":"800px"}}},computed:{results:function(){return this.$store.state.results},auth:function(){return this.$store.getters.auth},listName:function(){var t=this.listId||0;return this.$store.state.user.lists[t].name}},methods:{search:Object(O.debounce)(function(){var t=this;this.loading=!0,this.$store.dispatch("SEARCH",this.searchText).then(function(){t.error=null,t.loading=!1}).catch(function(e){var s=e.data;t.loading=!1,t.error=s})},300)}},z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return null!==t.listId?s("div",{staticClass:"search-modal"},[s("h4",[t._v("Add game to "+t._s(t.listName))]),t._v(" "),s("md-field",[s("label",[t._v("Type here")]),t._v(" "),s("md-input",{ref:"searchBox",on:{input:t.search},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}}),t._v(" "),t.results.length&&t.searchText&&!t.loading?s("span",{staticClass:"md-helper-text"},[t._v("\n            "+t._s(t.results.length)+" Results found\n            "),t.searchText?s("span",[t._v("\n                 for "+t._s(t.searchText)+"\n            ")]):t._e()]):t._e()],1),t._v(" "),t._l(10,function(e){return t.loading?s("content-placeholders",{key:e},[s("content-placeholders-heading",{attrs:{img:!0}})],1):t._e()}),t._v(" "),t._l(t.results,function(e){var n=e.id;return t.results.length&&!t.loading?s("game-card",{key:n,attrs:{"game-id":n,listId:t.listId,"search-result":""}}):t._e()})],2):t._e()},staticRenderFns:[]};var F=s("VU/8")(P,z,!1,function(t){s("AuyI")},"data-v-bb6fc952",null).exports,V={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"md-toolbar-row"},[s("div",{staticClass:"md-toolbar-section-start"},[s("md-button",{staticClass:"md-icon-button md-accent md-raised",on:{click:t.goHome}},[s("md-icon",[t._v("home")])],1)],1),t._v(" "),s("div",{staticClass:"md-toolbar-section-end"},[t.auth?s("md-button",{staticClass:"md-icon-button md-accent md-raised",on:{click:t.showDrawer}},[s("md-icon",[t._v("settings")])],1):[t.showRegister?s("md-button",{staticClass:"md-accent md-raised",on:{click:t.goRegister}},[t._v("\n                Register\n            ")]):t._e(),t._v(" "),t.showLogin?s("md-button",{staticClass:"md-accent md-raised",on:{click:t.goLogin}},[t._v("\n                Login\n            ")]):t._e()]],2)])},staticRenderFns:[]};var H=s("VU/8")({computed:{auth:function(){return this.$store.getters.auth},dark:function(){return!!this.user&&this.$store.state.user.settings.nightMode},showRegister:function(){return"register"!==this.$route.name},showLogin:function(){return"login"!==this.$route.name}},methods:{showDrawer:function(){this.$bus.$emit("TOGGLE_DRAWER",{panelName:"settings"})},goHome:function(){this.$router.push({name:"home"})},goRegister:function(){this.$router.push({name:"register"})},goLogin:function(){this.$router.push({name:"login"})}}},V,!1,function(t){s("lkE4")},"data-v-20fb624c",null).exports,q=s("fZjL"),B=s.n(q),W=s("IBsQ"),X=s.n(W),Z=s("Zzkc"),J={components:{Sketch:Z.Sketch,Gravatar:X.a},data:function(){return{lockColumns:!1,nightMode:!1,cardView:null,showGameRatings:!1,showGameGenre:!1,showPlayerModes:!1,showReleaseDate:!1,backgroundColor:"#a5a2a2",showDialog:!1,showSuccess:!1,showDeleteDialog:!1}},computed:{user:function(){return this.$store.state.user},settings:function(){return this.$store.state.user?this.$store.state.user.settings:null}},mounted:function(){this.setLocalSettings()},methods:{promptDelete:function(){this.showDeleteDialog=!0},toggleDrawer:function(){this.$bus.$emit("TOGGLE_DRAWER",{panelName:null})},logout:function(){this.toggleDrawer(),this.$store.commit("CLEAR_SESSION"),this.$router.push({name:"home"})},deleteAccount:function(){var t=this;this.$store.dispatch("DELETE_USER").then(function(){t.logout()})},save:Object(O.debounce)(function(){var t=this,e={lockColumns:this.lockColumns,showGameRatings:this.showGameRatings,nightMode:this.nightMode,backgroundColor:this.backgroundColor.hex||this.backgroundColor};this.$store.dispatch("UPDATE_SETTINGS",e).then(function(){t.showSuccess=!0})},300),setLocalSettings:function(){var t=this;this.settings&&B()(this.settings).forEach(function(e){void 0!==t[e]&&(t[e]=t.settings[e])})}}},Q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.user&&t.settings?s("md-card",[s("md-list",{staticClass:"settings-panel"},[s("md-list-item",[s("md-avatar",[s("gravatar",{attrs:{email:t.user.email}})],1),t._v(" "),s("span",{staticClass:"user-info"},[s("strong",[t._v(t._s(t.user.email))]),t._v(" "),s("br"),t._v(" "),s("strong",[t._v("App ID")]),t._v(" "+t._s(t.user._id)+"\n            ")])],1),t._v(" "),s("md-list-item",[s("md-icon",{class:{"md-primary":t.nightMode}},[t._v("brightness_4")]),t._v(" "),s("span",{staticClass:"md-list-item-text"},[t._v("Night mode")]),t._v(" "),s("md-switch",{staticClass:"md-primary",on:{change:t.save},model:{value:t.nightMode,callback:function(e){t.nightMode=e},expression:"nightMode"}})],1),t._v(" "),s("md-list-item",[s("md-icon",{class:{"md-primary":t.showGameRatings}},[t._v("grade")]),t._v(" "),s("span",{staticClass:"md-list-item-text"},[t._v("Show game score")]),t._v(" "),s("md-switch",{staticClass:"md-primary",on:{change:t.save},model:{value:t.showGameRatings,callback:function(e){t.showGameRatings=e},expression:"showGameRatings"}})],1),t._v(" "),s("md-list-item",{attrs:{"md-expand":""}},[s("md-icon",[t._v("format_color_fill")]),t._v(" "),s("span",{staticClass:"md-list-item-text"},[t._v("Background color")]),t._v(" "),s("md-list",{attrs:{slot:"md-expand"},slot:"md-expand"},[s("md-list-item",[s("sketch",{on:{input:t.save},model:{value:t.backgroundColor,callback:function(e){t.backgroundColor=e},expression:"backgroundColor"}})],1)],1)],1),t._v(" "),s("md-divider"),t._v(" "),s("md-list-item",{attrs:{"md-expand":""}},[s("md-icon",[t._v("settings")]),t._v(" "),s("span",{staticClass:"md-list-item-text"},[t._v("Advanced Settings")]),t._v(" "),s("md-list",{attrs:{slot:"md-expand"},slot:"md-expand"},[s("div",{staticClass:"button-row"},[s("md-button",{staticClass:"md-accent md-raised",on:{click:t.promptDelete}},[t._v("\n                        Delete Account\n                    ")])],1)]),t._v(" "),s("md-dialog-confirm",{attrs:{"md-active":t.showDeleteDialog,"md-title":"Are you sure?","md-content":"All your data will be deleted FOREVER","md-confirm-text":"Delete account"},on:{"update:mdActive":function(e){t.showDeleteDialog=e},"md-confirm":t.deleteAccount}})],1),t._v(" "),s("md-divider"),t._v(" "),s("md-list-item",[s("md-button",{staticClass:"md-primary md-dense",attrs:{href:"https://goo.gl/forms/r0juBCsZaUtJ03qb2"}},[s("md-icon",[t._v("feedback")]),t._v("\n                Submit feedback\n            ")],1),t._v(" "),s("md-button",{staticClass:"md-accent md-dense",attrs:{href:"https://github.com/romancmx/switchlist/issues"}},[s("md-icon",[t._v("bug_report")]),t._v("\n                Report issue\n            ")],1)],1),t._v(" "),s("md-divider"),t._v(" "),s("div",{staticClass:"button-row"},[s("md-button",{staticClass:"md-primary md-raised",on:{click:t.logout}},[t._v("\n                Log out\n            ")])],1)],1),t._v(" "),s("md-snackbar",{attrs:{"md-position":"left","md-active":t.showSuccess,"md-persistent":""},on:{"update:mdActive":function(e){t.showSuccess=e}}},[s("span",[t._v("Settings saved")])])],1):t._e()},staticRenderFns:[]};var K={name:"App",components:{NavHeader:H,GameModal:R,SearchModal:F,SettingsPanel:s("VU/8")(J,Q,!1,function(t){s("EUk3")},"data-v-4322041c",null).exports},data:function(){return{drawerActive:!1,panelActive:null,gameId:null,listIndex:null}},computed:{showSettings:function(){return"settings"===this.panelActive},showGameModal:function(){return"game-modal"===this.panelActive},showSearchModal:function(){return"search-modal"===this.panelActive}},mounted:function(){var t=this;this.$bus.$on("TOGGLE_DRAWER",function(e){var s=e.panelName,n=e.gameId,a=e.listIndex;t.panelActive=s,t.gameId=n,t.listIndex=a,t.drawerActive=!t.drawerActive})},methods:{close:function(){this.listIndex=null,this.gameId=null,"home"!==this.$route.name&&this.$router.push({name:"home"})}}},Y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("md-app",{attrs:{"md-waterfall":"","md-mode":"fixed"}},[s("md-app-toolbar",[s("nav-header")],1),t._v(" "),s("md-app-drawer",{staticClass:"md-right",attrs:{"md-active":t.drawerActive},on:{"update:mdActive":function(e){t.drawerActive=e},"md-closed":t.close}},[t.showSettings?s("settings-panel"):t._e(),t._v(" "),t.showGameModal?s("game-modal",{attrs:{"game-id":t.gameId}}):t._e(),t._v(" "),t.showSearchModal?s("search-modal",{attrs:{"list-id":t.listIndex}}):t._e()],1),t._v(" "),s("md-app-content",[s("router-view")],1)],1)},staticRenderFns:[]};var tt=s("VU/8")(K,Y,!1,function(t){s("6fJY")},null,null).exports,et=s("/ocq"),st={render:function(){var t=this.$createElement,e=this._self._c||t;return e("md-empty-state",{attrs:{"md-icon":"devices_other","md-label":"SwitchList","md-description":"Quickly and effortlessly manage your Nintendo Switch Collection"}},[e("router-link",{attrs:{to:{name:"register"}}},[e("md-button",{staticClass:"md-accent md-raised"},[this._v("Create an account")])],1)],1)},staticRenderFns:[]},nt=s("VU/8")(null,st,!1,null,null,null).exports,at={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"add-list"},[s("md-dialog-prompt",{attrs:{"md-active":t.showAddListModal,"md-title":"Add new list","md-input-maxlength":"30","md-input-placeholder":"Type list name","md-confirm-text":"Add list"},on:{"update:mdActive":function(e){t.showAddListModal=e},"md-confirm":t.addList,"md-cancel":t.clearList},model:{value:t.newListName,callback:function(e){t.newListName=e},expression:"newListName"}}),t._v(" "),s("md-dialog-alert",{attrs:{"md-active":t.showDuplicateError,"md-content":t.errorMessage,"md-title":"Uh oh","md-confirm-text":"Dismiss"},on:{"update:mdActive":function(e){t.showDuplicateError=e}}}),t._v(" "),s("md-button",{class:["md-icon-button md-raised md-default",{nightMode:t.nightMode}],on:{click:function(e){t.showAddListModal=!0}}},[s("md-icon",[t._v("add")])],1)],1)},staticRenderFns:[]};var it=s("VU/8")({data:function(){return{showAddListModal:!1,showDuplicateError:!1,newListName:""}},computed:{errorMessage:function(){return"You already have a list named <strong>"+this.newListName+"</strong>. Please use a different name."},lists:function(){return this.$store.state.user.lists},nightMode:function(){return this.$store.state.user.settings.nightMode}},methods:{addList:function(){this.isDuplicateListName()?this.showDuplicateError=!0:(this.$store.commit("ADD_LIST",this.newListName),this.$emit("update"),this.$emit("scroll"),this.newListName="")},isDuplicateListName:function(){var t=this.newListName.toLowerCase();return this.lists.filter(function(e){return e.name.toLowerCase()===t}).length},clearList:function(){this.newListName=""}}},at,!1,function(t){s("k3Em")},"data-v-6b41224b",null).exports,rt=s("DAYN"),ot=s.n(rt),dt={props:{listName:String,listIndex:[String,Number],gameCount:Number},data:function(){return{editing:!1,localListName:""}},methods:{handleClick:function(t){var e=Number(t.target.id)!==Number(this.listIndex),s=this.listName!==this.localListName;e&&this.exit(),e&&s&&this.save()},save:function(){this.$store.commit("UPDATE_LIST_NAME",{listIndex:this.listIndex,listName:this.localListName}),this.$emit("update")},edit:function(){var t=this;this.editing=!0,this.localListName=this.listName,this.$nextTick(function(){document.addEventListener("click",t.handleClick),t.$refs.input.focus()})},exit:function(){var t=this;this.editing=!1,this.$nextTick(function(){document.removeEventListener("click",t.handleClick)})}}},lt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-name"},[t.editing?s("input",{directives:[{name:"model",rawName:"v-model",value:t.localListName,expression:"localListName"}],ref:"input",attrs:{id:t.listIndex},domProps:{value:t.localListName},on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.save(e):null},function(e){return"button"in e||!t._k(e.keyCode,"esc",27,e.key,"Escape")?t.save(e):null}],input:function(e){e.target.composing||(t.localListName=e.target.value)}}}):s("span",{on:{click:t.edit}},[t._v("\n        "+t._s(t.listName)+" ("+t._s(t.gameCount)+")\n    ")])])},staticRenderFns:[]};var ct=s("VU/8")(dt,lt,!1,function(t){s("5iOT")},"data-v-6f4bcb4c",null).exports,mt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("md-bottom-bar",[e("md-bottom-bar-item",{attrs:{"md-label":"Add Game","md-icon":"playlist_add"},on:{click:this.addGame}}),this._v(" "),e("md-bottom-bar-item",{attrs:{"md-label":"Delete list","md-icon":"delete_sweep"},on:{click:this.remove}})],1)},staticRenderFns:[]};var ut={components:{ListFooter:s("VU/8")({methods:{addGame:function(){this.$emit("add")},remove:function(){this.$emit("remove")}}},mt,!1,function(t){s("g5EL")},"data-v-9af07a3c",null).exports,GameCard:U,ListNameEdit:ct,draggable:ot.a},props:{name:String,games:[Object,Array],listIndex:[String,Number]},data:function(){return{gameDraggableOptions:{handle:".game-drag-handle",ghostClass:"card-placeholder",animation:500,group:{name:"games"}}}},computed:{lists:function(){return this.$store.state.user.lists}},methods:{updateLists:function(){this.$store.dispatch("UPDATE_LISTS")},sortList:function(t){this.$store.commit("SORT_LIST",t),this.updateLists()},validateMove:function(t){var e=t.from,s=t.to,n=e.id!==s.id,a=this.lists[s.id].games.includes(Number(this.draggingId));return!(n&&a)},start:function(t){var e=t.item;this.dragging=!0,this.draggingId=e.id},end:function(){this.$emit("end")},remove:function(){this.$emit("remove")},addGame:function(){this.$bus.$emit("TOGGLE_DRAWER",{panelName:"search-modal",listIndex:this.listIndex})}}},ht={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list"},[s("div",{staticClass:"list-header"},[s("list-name-edit",{attrs:{"list-name":t.name,"list-index":t.listIndex,"game-count":t.games.length},on:{update:t.updateLists}}),t._v(" "),s("div",{staticClass:"list-actions"},[s("md-button",{staticClass:"md-icon-button md-dense md-default",on:{click:function(e){t.sortList(t.listIndex)}}},[s("md-icon",[t._v("sort_by_alpha")])],1)],1)],1),t._v(" "),s("draggable",{staticClass:"games",attrs:{list:t.games,id:t.listIndex,move:t.validateMove,options:t.gameDraggableOptions},on:{end:t.end,start:t.start}},[t._l(t.games,function(e){return s("game-card",{key:e,attrs:{id:e,"game-id":e,listId:t.listIndex}})}),t._v(" "),t.games.length?t._e():s("md-empty-state",{attrs:{"md-icon":"face","md-label":"List empty","md-description":"Click the button below to add a game to this list"}},[s("md-button",{staticClass:"md-raised",on:{click:t.addGame}},[t._v("\n                Add game\n            ")])],1)],2),t._v(" "),s("list-footer",{on:{add:t.addGame,remove:t.remove}})],1)},staticRenderFns:[]};var gt=s("VU/8")(ut,ht,!1,function(t){s("Xrqd")},"data-v-23df08ae",null).exports,vt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"empty-board"},[e("h2",[this._v("Hello!")]),this._v(" "),e("p",[this._v("We've created a few lists for you, feel free to rename them by clicking on the title")]),this._v(" "),e("md-button",{staticClass:"md-dense md-raised md-primary",on:{click:this.addGame}},[this._v("\n        Add your first game!\n    ")])],1)},staticRenderFns:[]};var ft=s("VU/8")({methods:{addGame:function(){this.$bus.$emit("TOGGLE_DRAWER",{panelName:"search-modal"})}}},vt,!1,function(t){s("tLsD")},"data-v-1fc9fac9",null).exports,pt={components:{draggable:ot.a,List:gt,EmptyBoard:ft,AddList:it},directives:{dragscroll:o.dragscroll},data:function(){return{dragging:!1,draggingId:null,gameData:null,loading:!1,activeList:null,showDeleteConfirm:!1,errorLoading:!1,dragScrollActive:!1,listDraggableOptions:{animation:500,handle:".list-drag-handle",group:{name:"lists"},draggable:".list",ghostClass:"list-placeholder"}}},computed:{lists:function(){return this.$store.state.user.lists},user:function(){return this.$store.state.user},settings:function(){return this.$store.state.user.settings},isEmpty:function(){return!this.lists.filter(function(t){return t&&t.games&&t.games.length}).length},nightMode:function(){return this.$store.state.user.settings.nightMode}},mounted:function(){this.isEmpty||this.loadGameData(),this.$route.params&&this.openGame(this.$route.params),this.checkDataAge()},methods:{openGame:function(t){var e=this,s=t.id;s?this.$nextTick(function(){e.$bus.$emit("TOGGLE_DRAWER",{panelName:"game-modal",gameId:s})}):this.$router.push({name:"home"})},checkDataAge:function(){var t=this.$store.state.dataUpdatedTimestamp;x.a.duration(x()().diff(t)).asMinutes()>15&&this.$store.dispatch("LOAD_LISTS")},scroll:function(){var t=this;this.$nextTick(function(){var e=t.$refs.lists;e.scrollLeft=e.scrollWidth})},tryDelete:function(t){this.lists[t].games.length>0?(this.showDeleteConfirm=!0,this.activeList=t):this.deleteList(t)},deleteList:function(t){this.$store.commit("REMOVE_LIST",t),this.updateLists()},dragEnd:function(){this.dragging=!1,this.draggingId=null,this.$store.commit("UPDATE_LIST",this.lists),this.updateLists()},updateLists:function(t){var e=this;this.$store.dispatch("UPDATE_LISTS").then(function(){1===e.lists.length&&t&&location.reload()})},loadGameData:function(){var t=this,e=[];this.user.lists.forEach(function(t){t&&t.games.length&&t.games.forEach(function(t){e.includes(t)||e.push(t)})}),this.$store.dispatch("LOAD_GAMES",e).catch(function(){t.errorLoading=!0})}}},_t={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll:nochilddrag",arg:"nochilddrag"}],ref:"lists",staticClass:"lists",class:{nightMode:t.nightMode,"drag-scroll-active":t.dragScrollActive},style:{background:t.settings.backgroundColor},on:{dragscrollstart:function(e){t.dragScrollActive=!0},dragscrollend:function(e){t.dragScrollActive=!1}}},[s("md-snackbar",{attrs:{"md-active":t.errorLoading},on:{"update:mdActive":function(e){t.errorLoading=e}}},[s("span",[t._v("There was an error loading your game data")]),t._v(" "),s("md-button",{staticClass:"md-primary",on:{click:t.loadGameData}},[t._v("Retry")])],1),t._v(" "),t.isEmpty?s("empty-board"):t._e(),t._v(" "),t._l(t.lists,function(e,n){return e?s("list",{key:e.name,attrs:{name:e.name,games:e.games,listIndex:n},on:{end:t.dragEnd,remove:function(e){t.tryDelete(n)}}}):t._e()}),t._v(" "),s("md-dialog-confirm",{attrs:{"md-active":t.showDeleteConfirm,"md-title":"Are you sure?","md-content":"This lists contains games, all games will be deleted as well.","md-confirm-text":"Delete"},on:{"update:mdActive":function(e){t.showDeleteConfirm=e},"md-confirm":function(e){t.deleteList(t.activeList)}}}),t._v(" "),s("add-list",{on:{update:function(e){t.updateLists(!0)},scroll:t.scroll}})],2)},staticRenderFns:[]};var bt={components:{Marketing:nt,GameBoard:s("VU/8")(pt,_t,!1,function(t){s("nwpf")},"data-v-da653b70",null).exports},computed:{auth:function(){return this.$store.getters.auth}}},wt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.auth?e("game-board"):e("marketing")],1)},staticRenderFns:[]},Et=s("VU/8")(bt,wt,!1,null,null,null).exports,kt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Session has expired")])])}]},jt=s("VU/8")({mounted:function(){this.$store.commit("CLEAR_SESSION")}},kt,!1,null,null,null).exports,St={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"auth-form",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[s("md-snackbar",{attrs:{"md-active":t.error},on:{"update:mdActive":function(e){t.error=e}}},[s("span",[t._v("Invalid credentials")])]),t._v(" "),s("md-card",[s("md-card-header",[s("div",{staticClass:"md-title"},[t._v("Login")])]),t._v(" "),s("md-card-content",[s("md-field",[s("label",[t._v("Email")]),t._v(" "),s("md-input",{attrs:{type:"email"},model:{value:t.formModel.email,callback:function(e){t.$set(t.formModel,"email",e)},expression:"formModel.email"}})],1),t._v(" "),s("md-field",[s("label",[t._v("Password")]),t._v(" "),s("md-input",{attrs:{type:"password"},model:{value:t.formModel.password,callback:function(e){t.$set(t.formModel,"password",e)},expression:"formModel.password"}})],1),t._v(" "),s("md-checkbox",{staticClass:"md-primary",model:{value:t.formModel.persist,callback:function(e){t.$set(t.formModel,"persist",e)},expression:"formModel.persist"}},[t._v("\n                Keep me logged in\n            ")]),t._v(" "),s("md-button",{staticStyle:{display:"none"},attrs:{type:"submit"}})],1),t._v(" "),s("div",{staticClass:"button-row"},[s("md-button",{staticClass:"md-button md-primary",attrs:{disabled:""}},[s("md-progress-spinner",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"md-primary",attrs:{"md-diameter":30,"md-stroke":3,"md-mode":"indeterminate"}})],1),t._v(" "),s("md-button",{staticClass:"md-primary md-raised",attrs:{disabled:t.loading},on:{click:t.login}},[t._v("\n                Login\n            ")])],1)],1)],1)},staticRenderFns:[]},Lt=s("VU/8")({data:function(){return{formModel:{email:"",password:"",persist:!0},loading:!1,error:null}},computed:{disabled:function(){return this.loading||!this.formModel.email||!this.formModel.password}},mounted:function(){this.$store.state.user&&this.$router.push({name:"home"})},methods:{login:function(){var t=this;this.disabled||(this.loading=!0,this.$store.dispatch("LOGIN",this.formModel).then(function(){t.$router.push({name:"home"})}).catch(function(){t.loading=!1,t.error=!0}))}}},St,!1,null,null,null).exports,At={props:{value:String},computed:{meetsLength:function(){return this.value&&this.value.length>7},hasNumber:function(){return/\d/.test(this.value)},hasUppercase:function(){return/[A-Z]/.test(this.value)},hasLowercase:function(){return/[a-z]/.test(this.value)},isValid:function(){var t=this.meetsLength,e=this.hasNumber,s=this.hasUppercase,n=this.hasLowercase;return t&&e&&s&&n}}},Ct={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.value?s("div",{staticClass:"password-strength-indicator"},[s("h4",[t._v("Password requirements:")]),t._v(" "),s("span",{class:{valid:t.meetsLength}},[t.meetsLength?s("md-icon",[t._v("verified_user")]):s("md-icon",[t._v("highlight_off")]),t._v("\n        8 Character minimum\n    ")],1),t._v(" "),s("span",{class:{valid:t.hasNumber}},[t.hasNumber?s("md-icon",[t._v("verified_user")]):s("md-icon",[t._v("highlight_off")]),t._v("\n        At least one number\n    ")],1),t._v(" "),s("span",{class:{valid:t.hasUppercase}},[t.hasUppercase?s("md-icon",[t._v("verified_user")]):s("md-icon",[t._v("highlight_off")]),t._v("\n        At least one uppercase letter\n    ")],1),t._v(" "),s("span",{class:{valid:t.hasLowercase}},[t.hasLowercase?s("md-icon",[t._v("verified_user")]):s("md-icon",[t._v("highlight_off")]),t._v("\n        At least one lowercase letter\n    ")],1)]):t._e()},staticRenderFns:[]};var xt={components:{PasswordStrengthIndicator:s("VU/8")(At,Ct,!1,function(t){s("ABZ3")},"data-v-3fafd93e",null).exports},data:function(){return{formModel:{email:"",password:""},error:!1,validationError:!1,loading:!1}},mounted:function(){this.$store.state.user&&this.$router.push({name:"home"})},methods:{register:function(){var t=this;!this.loading&&this.$refs.passwordStrengthIndicator.isValid?(this.loading=!0,this.$store.dispatch("REGISTER",this.formModel).then(function(){t.error=!1,t.loading=!1,t.$router.push({name:"home"})}).catch(function(){t.error=!0,t.loading=!1})):this.validationError=!0}}},It={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"auth-form",on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[s("md-snackbar",{attrs:{"md-active":t.error},on:{"update:mdActive":function(e){t.error=e}}},[s("span",[t._v("There was an error creating the account")])]),t._v(" "),s("md-snackbar",{attrs:{"md-active":t.validationError},on:{"update:mdActive":function(e){t.validationError=e}}},[s("span",[t._v("Please enter a valid password")])]),t._v(" "),s("md-card",[s("md-card-header",[s("div",{staticClass:"md-title"},[t._v("Register")])]),t._v(" "),s("md-card-content",[s("md-field",[s("label",[t._v("Email")]),t._v(" "),s("md-input",{attrs:{type:"email"},model:{value:t.formModel.email,callback:function(e){t.$set(t.formModel,"email",e)},expression:"formModel.email"}})],1),t._v(" "),s("md-field",[s("label",[t._v("Password")]),t._v(" "),s("md-input",{attrs:{type:"password"},model:{value:t.formModel.password,callback:function(e){t.$set(t.formModel,"password",e)},expression:"formModel.password"}})],1),t._v(" "),s("password-strength-indicator",{ref:"passwordStrengthIndicator",model:{value:t.formModel.password,callback:function(e){t.$set(t.formModel,"password",e)},expression:"formModel.password"}}),t._v(" "),s("md-button",{staticStyle:{display:"none"},attrs:{type:"submit"}})],1),t._v(" "),s("div",{staticClass:"button-row"},[s("md-button",{staticClass:"md-button md-primary",attrs:{disabled:""}},[s("md-progress-spinner",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"md-primary",attrs:{"md-diameter":30,"md-stroke":3,"md-mode":"indeterminate"}})],1),t._v(" "),s("md-button",{staticClass:"md-primary md-raised",attrs:{disabled:t.loading},on:{click:t.register}},[t._v("\n                Register\n            ")])],1)],1)],1)},staticRenderFns:[]},yt=s("VU/8")(xt,It,!1,null,null,null).exports;g.default.use(et.a);var Dt=new et.a({routes:[{path:"/",name:"home",component:Et,children:[{name:"game",path:":id/:slug",component:Et}]},{path:"/session-expired",name:"sessionExpired",component:jt},{path:"/login",name:"login",component:Lt},{path:"/register",name:"register",component:yt}]}),Tt={en:{message:{hello:"hello world"}},ja:{message:{hello:"こんにちは、世界"}}},$t=new g.default;m.a.interceptors.response.use(function(t){return t},function(t){t&&t.response&&401===t.response.status&&(window.location.href="/#/session-expired")}),a()(g.default.prototype,{$bus:{get:function(){return $t}}}),g.default.use(v.a),g.default.use(r.a),g.default.use(l.default),g.default.use(d.a),g.default.use(h.a,m.a),g.default.config.productionTip=!1,Dt.beforeEach(function(t,e,s){t.meta.requiresAuth&&!T.getters.auth?s("/"):s()});var Mt=new v.a({locale:"en",messages:Tt});new g.default({el:"#app",router:Dt,i18n:Mt,store:T,components:{App:tt},template:"<App/>"})},Q7Ak:function(t,e){},Xrqd:function(t,e){},g5EL:function(t,e){},k3Em:function(t,e){},lkE4:function(t,e){},mUoS:function(t,e){},nwpf:function(t,e){},tLsD:function(t,e){},uslO:function(t,e,s){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(t){return s(i(t))}function i(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id="uslO"},y1So:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0cd1b39995dc0ecbc095.js.map