(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"yj+W":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){},o=u("pMnS"),i=u("ZYCi"),r=u("Ip0R"),s=function(){function l(){}return l.prototype.ngOnInit=function(){},l.prototype.getProfileImage=function(){return"https://randomuser.me/api/portraits/women/"+this.user.id+".jpg"},l}(),c=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function d(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,16,"div",[["class","card"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,0,"img",[["alt","Card image cap"],["class","card-img-top"]],[[8,"src",4]],null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](4,null,["",""])),(l()(),t["\u0275eld"](5,0,null,null,6,"ul",[["class","list-group list-group-flush"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,1,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),t["\u0275ted"](7,null,["ID : ",""])),(l()(),t["\u0275eld"](8,0,null,null,1,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),t["\u0275ted"](9,null,["USERNAME : ",""])),(l()(),t["\u0275eld"](10,0,null,null,1,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),t["\u0275ted"](11,null,["COMPANY : ",""])),(l()(),t["\u0275eld"](12,0,null,null,4,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t["\u0275eld"](13,0,null,null,3,"a",[["class","card-link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t["\u0275nov"](l,14).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t["\u0275did"](14,671744,null,0,i.m,[i.k,i.a,r.h],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](15,2),(l()(),t["\u0275ted"](-1,null,["Personal Todos"]))],function(l,n){l(n,14,0,l(n,15,0,"/people/",n.component.user.id))},function(l,n){var u=n.component;l(n,1,0,u.getProfileImage()),l(n,4,0,u.user.name),l(n,7,0,u.user.id),l(n,9,0,u.user.username),l(n,11,0,u.user.company.name),l(n,13,0,t["\u0275nov"](n,14).target,t["\u0275nov"](n,14).href)})}var a=u("67Y/"),p=function(){function l(l){this.http=l,console.log("User Serivce")}return l.prototype.getUsers=function(){return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(Object(a.a)(function(l){return l}))},l}(),f=function(){function l(l){this.userService=l,this.title="PEOPLE",console.log("users Component")}return l.prototype.ngOnInit=function(){this.initUsers()},l.prototype.initUsers=function(){var l=this;this.userService.getUsers().subscribe(function(n){l.users=n})},l}(),m=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function v(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"user",[["class","m-2"]],null,null,null,d,c)),t["\u0275did"](2,114688,null,0,s,[],{user:[0,"user"]},null)],function(l,n){l(n,2,0,n.context.$implicit)},null)}function g(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,7,"div",[["class","container users"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,5,"div",[["class","col-md-10 offset-md-1 text-center"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,1,"h1",[["class","display-1 text-info"]],null,null,null,null,null)),(l()(),t["\u0275ted"](4,null,["",""])),(l()(),t["\u0275eld"](5,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,v)),t["\u0275did"](7,802816,null,0,r.i,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,7,0,n.component.users)},function(l,n){l(n,4,0,n.component.title)})}var h=t["\u0275ccf"]("users",f,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"users",[],null,null,null,g,m)),t["\u0275did"](1,114688,null,0,f,[p],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),y=u("DBhw"),C=function(){function l(l,n){var u=this;this.route=l,this.todoService=n,this.title="Personal Todos",this.route.paramMap.subscribe(function(l){var n=+l.get("userId");u.todoService.getTodosFromRemote(n).subscribe(function(l){return u.todos=l})})}return l.prototype.ngOnInit=function(){},l}(),b=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function w(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ul",[["class","list-group list-group-flush"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.title)})}function I(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,6,"div",[["class","container users"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,4,"div",[["class","col-md-10 offset-md-1 text-center"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,1,"h1",[["class","display-1 text-info"]],null,null,null,null,null)),(l()(),t["\u0275ted"](4,null,["",""])),(l()(),t["\u0275and"](16777216,null,null,1,null,w)),t["\u0275did"](6,802816,null,0,r.i,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,6,0,n.component.todos)},function(l,n){l(n,4,0,n.component.title)})}var R=t["\u0275ccf"]("personal-todo",C,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"personal-todo",[],null,null,null,I,b)),t["\u0275did"](1,114688,null,0,C,[i.a,y.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),k=u("t/Na"),O=u("JCXW"),F=function(){},P=u("PCNd");u.d(n,"PeopleModuleNgFactory",function(){return x});var x=t["\u0275cmf"](e,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,h,R]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,r.l,r.k,[t.LOCALE_ID,[2,r.q]]),t["\u0275mpd"](4608,y.a,y.a,[k.c,O.NgRedux]),t["\u0275mpd"](4608,p,p,[k.c]),t["\u0275mpd"](1073742336,r.c,r.c,[]),t["\u0275mpd"](1073742336,i.n,i.n,[[2,i.t],[2,i.k]]),t["\u0275mpd"](1073742336,F,F,[]),t["\u0275mpd"](1073742336,P.a,P.a,[]),t["\u0275mpd"](1073742336,e,e,[]),t["\u0275mpd"](1024,i.i,function(){return[[{path:"",children:[{path:"",component:f},{path:":userId",component:C}]}]]},[])])})}}]);