(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"9uVP":function(t,e,n){"use strict";function i(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=new t;return e.reduce(function(t,e){var n;try{n=Object.assign(t,e)}catch(i){console.warn(i),n=t}finally{return n}},i)}function o(t){return Array.from(Array(t).keys())}function l(t){return o(t).map(function(t){return t+1})}function r(t){return t+"px"}n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return l}),n.d(e,"d",function(){return r})},"CMg+":function(t,e,n){"use strict";n.d(e,"a",function(){return c});var i=n("mrSG"),o=n("xp1a"),l=n("gG+F"),r=n("o9pq"),u=n("9uVP"),c=function(t){function e(e){var n=t.call(this,e)||this;return n.store=e,n.hasWallpaper=!0,n.backgroundImageUrl=null,n.isMobile=!1,n.images=[Object(u.a)(l.c,{src:"assets/v/1.jpg",height:1641,width:2048,cols:2,color:"#000",name:"billy-o"}),Object(u.a)(l.c,{src:"assets/v/7.jpg",height:569,width:500,cols:3,name:"hamilton-restaurant"}),Object(u.a)(l.c,{src:"assets/h/2.jpg",height:305,width:452,cols:2,name:"carlisle-borough-sign"}),Object(u.a)(l.c,{src:"assets/h/12.jpg",height:366,width:650,cols:2,name:"carlisle-police"}),Object(u.a)(l.c,{src:"assets/h/1.jpg",height:655,width:1600,cols:3,name:"proudly-serving"}),Object(u.a)(l.c,{src:"assets/v/5.jpg",height:503,width:450,cols:2}),Object(u.a)(l.c,{src:"assets/v/10.jpg",height:1536,width:2048,cols:3,name:"bison"}),Object(u.a)(l.c,{src:"assets/h/3.jpg",height:640,width:1280,cols:2,color:"darkgreen",name:"andrew-marshall-squad"}),Object(u.a)(l.c,{src:"assets/h/6.jpg",height:215,width:350,cols:2,color:"#000",name:"street-hoops"}),Object(u.a)(l.c,{src:"assets/v/2.jpg",height:1344,width:1200,cols:2,name:"powder"}),Object(u.a)(l.c,{src:"assets/h/4.jpg",height:317,width:432,cols:2}),Object(u.a)(l.c,{src:"assets/h/5.jpg",height:801,width:1200,cols:2}),Object(u.a)(l.c,{src:"assets/h/7.jpg",height:453,width:604,cols:2}),Object(u.a)(l.c,{src:"assets/h/8.jpg",height:448,width:599,cols:2}),Object(u.a)(l.c,{src:"assets/h/9.jpg",height:888,width:1200,cols:2}),Object(u.a)(l.c,{src:"assets/h/10.jpg",height:373,width:620,cols:2}),Object(u.a)(l.c,{src:"assets/h/11.jpg",height:411,width:620,cols:2}),Object(u.a)(l.c,{src:"assets/h/13.jpg",height:533,width:800,cols:2}),Object(u.a)(l.c,{src:"assets/h/14.jpg",height:720,width:960,cols:2}),Object(u.a)(l.c,{src:"assets/h/15.jpg",height:407,width:604,cols:2}),Object(u.a)(l.c,{src:"assets/h/16.jpg",height:701,width:1024,cols:2,name:"dickinson"}),Object(u.a)(l.c,{src:"assets/h/17.png",height:262,width:350,cols:2}),Object(u.a)(l.c,{src:"assets/h/18.jpg",height:262,width:350,cols:2}),Object(u.a)(l.c,{src:"assets/h/19.jpg",height:260,width:448,cols:2}),Object(u.a)(l.c,{src:"assets/v/3.jpg",height:328,width:300,cols:1}),Object(u.a)(l.c,{src:"assets/v/4.jpg",height:350,width:337,cols:1}),Object(u.a)(l.c,{src:"assets/v/6.jpg",height:960,width:960,cols:1}),Object(u.a)(l.c,{src:"assets/v/8.jpg",height:960,width:960,cols:1}),Object(u.a)(l.c,{src:"assets/v/9.jpg",height:450,width:300,cols:1}),Object(u.a)(l.c,{src:"assets/v/11.jpg",height:960,width:644,cols:1})],n.isMobile$=Object(r.a)(e),n}return i.__extends(e,t),Object.defineProperty(e.prototype,"offsetLeft",{get:function(){return this.isMobile?0:120},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sidenavHeight",{get:function(){return this.windowHeight+50},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"windowHeight",{get:function(){return parseInt(localStorage.getItem("WINDOW_HEIGHT"),10)},set:function(t){localStorage.setItem("WINDOW_HEIGHT",t.toString())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"windowWidth",{get:function(){return parseInt(localStorage.getItem("WINDOW_WIDTH"),10)},set:function(t){localStorage.setItem("WINDOW_WIDTH",t.toString())},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){this.sync(["isMobile"])},e.prototype.onLoad=function(t){this.windowHeight=t&&t.currentTarget&&t.currentTarget.innerHeight?t.currentTarget.innerHeight:0,this.windowWidth=t&&t.currentTarget&&t.currentTarget.innerWidth?t.currentTarget.innerWidth:0,console.log("\n\nwindow:load",this.windowWidth,this.windowHeight)},e.prototype.onResize=function(t){this.windowHeight=t&&t.currentTarget&&t.currentTarget.innerHeight?t.currentTarget.innerHeight:0,this.windowWidth=t&&t.currentTarget&&t.currentTarget.innerWidth?t.currentTarget.innerWidth:0},e}(o.gb)},"gG+F":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return l});var i=function(){return function(){this.row=0,this.column=0}}(),o=function(){function t(){this.height=0,this.width=0,this.rows=0,this.columns=0}return Object.defineProperty(t.prototype,"approxRatio",{get:function(){return this.rows/this.columns},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ratio",{get:function(){return this.height/this.width},enumerable:!0,configurable:!0}),t}(),l=function(){function t(){this.src="",this.height=0,this.width=0}return Object.defineProperty(t.prototype,"horizontal",{get:function(){return"h"===this.orientation},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"vertical",{get:function(){return"v"===this.orientation},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"colspan",{get:function(){return 1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rowspan",{get:function(){return this.vertical?2:1},enumerable:!0,configurable:!0}),t}()},hrC7:function(t,e,n){"use strict";var i=n("CcnG"),o=n("21Lb"),l=n("OzfB"),r=n("gG+F"),u=function(){function t(){this.id=0,this.cellHeight=0,this.cellWidth=0,this.color="#fff",this.name="",this.src="",this.text="",this._coordinates=new r.a,this._dimensions=new r.b,this._image=new r.c}return Object.defineProperty(t.prototype,"coordinates",{get:function(){return this._coordinates||new r.a},set:function(t){this._coordinates=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dimensions",{get:function(){return this._dimensions||new r.b},set:function(t){this._dimensions=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"image",{get:function(){return this._image||new r.c},set:function(t){this._image=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this.rows*this.cellHeight},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this.columns*this.cellWidth},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"imageSrc",{get:function(){return this.image.src},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"imageHeight",{get:function(){return this.image.height*this.scale},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"imageWidth",{get:function(){return this.image.width*this.scale},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rows",{get:function(){return this.dimensions.rows},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"columns",{get:function(){return this.dimensions.columns},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"positionTop",{get:function(){return this.startRow*this.cellHeight},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"positionLeft",{get:function(){return this.startColumn*this.cellWidth},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"approxRatio",{get:function(){return this.rows*this.cellHeight/this.columns*this.cellWidth},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ratio",{get:function(){return this.dimensions.ratio},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scale",{get:function(){return this.heightScale>=this.widthScale?this.heightScale:this.widthScale},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"heightScale",{get:function(){return this.rows*this.cellHeight/this.image.height},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"widthScale",{get:function(){return this.columns*this.cellWidth/this.image.width},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"startRow",{get:function(){return this.coordinates.row},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"startColumn",{get:function(){return this.coordinates.column},enumerable:!0,configurable:!0}),t}(),c=function(){function t(){this.tile=new u}return Object.defineProperty(t.prototype,"backgroundColor",{get:function(){return""},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this.tile.height},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"imageHeight",{get:function(){return this.tile.imageHeight},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"imageSrc",{get:function(){return this.tile.image.src},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"imageWidth",{get:function(){return this.tile.imageWidth},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"position",{get:function(){return"absolute"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"positionLeft",{get:function(){return this.tile.positionLeft},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"positionTop",{get:function(){return this.tile.positionTop},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this.tile.width},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){},t}(),a=i.rb({encapsulation:0,styles:[[".tile[_ngcontent-%COMP%]{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);overflow:hidden}.tile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{opacity:.4}"]],data:{}});function s(t){return i.Mb(2,[(t()(),i.tb(0,0,null,null,3,"div",[["class","tile"],["fxLayout",""],["fxLayoutAlign","center center"]],[[4,"position",null],[4,"top","px"],[4,"left","px"],[4,"background-color",null],[4,"height","px"],[4,"width","px"]],null,null,null,null)),i.sb(1,671744,null,0,o.b,[i.k,l.i,[2,o.e],l.f],{fxLayout:[0,"fxLayout"]},null),i.sb(2,671744,null,0,o.a,[i.k,l.i,[2,o.d],l.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(t()(),i.tb(3,0,null,null,0,"img",[],[[8,"src",4],[4,"height","px"],[4,"width","px"]],null,null,null,null))],function(t,e){t(e,1,0,""),t(e,2,0,"center center")},function(t,e){var n=e.component;t(e,0,0,n.position,n.positionTop,n.positionLeft,n.backgroundColor,n.height,n.width),t(e,3,0,n.imageSrc,n.imageHeight,n.imageWidth)})}var h=n("Ip0R"),g=n("9uVP"),d=function(){function t(){this.canvasHeight=0,this.canvasWidth=0,this.maxColumns=4,this.maxRows=4,this.totalColumns=0,this.totalRows=0,this._images=[],this._tiles=[]}return t.AvailableColumns=function(t,e,n,i){var o=i[0].length;return Math.max.apply(Math,Object(g.c)(n).map(function(l){return l<=n&&e+l<=o&&i[t]&&i[t][e+l]?l:1}))},t.AvailableRows=function(t,e,n,i){var o=i[0].length;return Math.max.apply(Math,Object(g.c)(n).map(function(l){return l<=n&&t+l<=o&&i[t+l]&&i[t+l][e]?l:1}))},t.AvailableDimensions=function(e,n,i,o,l,r){var u=t.AvailableRows(n,i,o,r),c=t.AvailableColumns(n,i,l,r);return e.filter(function(t){return t.rows<=u&&t.columns<=c})},t.Build=function(e,n,i,o,l,r,u){void 0===o&&(o=0),void 0===l&&(l=0),void 0===r&&(r=0),void 0===u&&(u=0);var c=Object.assign(new t,{canvasHeight:n,canvasWidth:i,totalRows:o,totalColumns:l,maxRows:r,maxColumns:u});return c.images=e,c},t.BuildEmptyCells=function(t,e){return Object(g.b)(t).map(function(t){return Object(g.b)(e).map(function(t){return!0})})},t.BuildTiles=function(e){return e.images.map(function(n,i){var o=t.FindDimensions(n.height,n.width,e.tileDimensions,e.cellHeight,e.cellWidth);return Object.assign(new u,{image:n,dimensions:o,id:i+1,cellHeight:e.cellHeight,cellWidth:e.cellWidth})})},t.ChooseTileId=function(t,e){return e.filter(function(e){return e!==t}).concat([t])},t.FindCoordinates=function(t,e,n){var i=(t+n)%n;return{row:(t-i)/n,column:i}},t.FindCoordinatesNested=function(e,n,i,o,l){var r=t.FindCoordinates(e,n,i);return r.column+=l,r.row+=o,r},t.FindDimensions=function(t,e,n,i,o){var l=n.filter(function(n){return n.rows*i<=t&&n.columns*o<=e}).sort(function(n,i){return Math.abs(t/e-n.ratio)-Math.abs(t/e-i.ratio)})[0],u=l&&l.rows?l.rows:[],c=l&&l.columns?l.columns:[];return Object.assign(new r.b,{rows:u,columns:c,height:t,width:e})},t.FindNextTileId=function(e,n,i){return t.FindNextMatchId(e,n,i)||t.FindBestMatchId(e,n,i)},t.FindBestMatchId=function(t,e,n){var i=999;return e.reduce(function(e,o){var l=t.find(function(t){return t.id===o});return i=Math.abs(l.ratio-n.ratio),0===e||i<e?o:e},0)},t.FindNextMatchId=function(t,e,n){return e.reduce(function(e,i){if(0!==e)return e;var o=t.find(function(t){return t.id===i});return o&&o.rows===n.rows&&o.columns===n.columns?o.id:0},0)},t.FindBestMatch=function(e,n,i){var o=t.FindBestMatchId(e,n,i);return e.find(function(t){return t.id===o})},t.FindNextTile=function(e,n,i){return n.reduce(function(t,n){if(null===t||0===t.id){var o=e.find(function(t){return t.id===n}),l=i.find(function(t){return o.rows===t.rows&&o.columns===t.columns});return l?Object.assign(new u,o,{dimensions:Object.assign(new r.b,o.dimensions,{rows:l.rows,columns:l.columns})}):null}return t},new u)||t.FindBestMatch(e,n,i[0])},t.GetTileDimensions=function(t,e,n,i){return Object(g.c)(n).reduce(function(n,o){var l=Object(g.c)(i).map(function(n){return Object.assign(new r.b,{rows:o,columns:n,height:o*t,width:n*e})});return n.concat(l)},[])},t.MarkCellsAsFilled=function(e,n,i,o,l){var r=t.FindCoordinates(n,o,l);return Object(g.b)(i.rows*i.columns).reduce(function(n,o){var l=t.FindCoordinatesNested(o,i.rows,i.columns,r.row,r.column);return e[l.row][l.column]=!1,e},e)},t.PositionTiles=function(e,n){var i=t.BuildEmptyCells(n.totalRows,n.totalColumns),o=e.map(function(t){return t.id});return Object(g.b)(n.totalCells).reduce(function(l,r){var u=t.FindCoordinates(r,n.totalRows,n.totalColumns);if(!i[u.row][u.column])return l;var c=t.AvailableDimensions(n.tileDimensions,u.row,u.column,n.maxRows,n.maxColumns,i),a=t.FindNextTile(e,o,c);return a.coordinates=u,i=t.MarkCellsAsFilled(i,r,a.dimensions,n.totalRows,n.totalColumns),o=t.ChooseTileId(a.id,o),l.concat([a])},[])},Object.defineProperty(t.prototype,"cellHeight",{get:function(){return this.canvasHeight/this.totalRows},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"cellWidth",{get:function(){return this.canvasWidth/this.totalColumns},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"emptyCells",{get:function(){return t.BuildEmptyCells(this.totalRows,this.totalColumns)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"images",{get:function(){return this._images},set:function(e){console.dir(e),this._images=e,this.tiles=t.BuildTiles(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tileDimensions",{get:function(){return t.GetTileDimensions(this.cellHeight,this.cellWidth,this.maxRows,this.maxColumns)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tiles",{get:function(){return console.log(this._tiles.reduce(function(t,e){var n,i;return t[e.id]?Object.assign(t,((n={})[e.id]=t[e.id]+1,n)):Object.assign(t,((i={})[e.id]=1,i))},{})),this._tiles},set:function(e){console.dir(e),this._tiles=t.PositionTiles(e,this)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"totalCells",{get:function(){return this.totalRows*this.totalColumns},enumerable:!0,configurable:!0}),t}(),p=function(){function t(){this.images=[],this.canvasHeight=0,this.canvasWidth=0,this.totalRows=0,this.totalColumns=0,this.maxRows=0,this.maxColumns=0}return t.prototype.ngOnInit=function(){},Object.defineProperty(t.prototype,"collage",{get:function(){return this.canvasHeight>0&&this.canvasWidth>0?d.Build(this.images,this.canvasHeight,this.canvasWidth,this.totalRows,this.totalColumns,this.maxRows,this.maxColumns):new d},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tiles",{get:function(){return this.collage.tiles},enumerable:!0,configurable:!0}),t}(),b=i.rb({encapsulation:0,styles:[[""]],data:{}});function f(t){return i.Mb(0,[(t()(),i.tb(0,0,null,null,1,"ccc-tile",[],null,null,null,s,a)),i.sb(1,114688,null,0,c,[],{tile:[0,"tile"]},null)],function(t,e){t(e,1,0,e.context.$implicit)},null)}function m(t){return i.Mb(2,[(t()(),i.ib(16777216,null,null,1,null,f)),i.sb(1,278528,null,0,h.k,[i.R,i.O,i.u],{ngForOf:[0,"ngForOf"]},null)],function(t,e){t(e,1,0,e.component.tiles)},null)}var w=function(){function t(t){this.elementRef=t,this.images=[],this.windowHeight=0,this.windowWidth=0}return Object.defineProperty(t.prototype,"canvasHeight",{get:function(){return 2*this.windowWidth},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"canvasWidth",{get:function(){return this.windowWidth-100},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"elementHeight",{get:function(){return this.elementRef&&this.elementRef.nativeElement&&this.elementRef.nativeElement.style?this.elementRef.nativeElement.style.height:0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"elementHeightPx",{get:function(){return Object(g.d)(this.elementHeight)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"elementWidth",{get:function(){return this.elementRef&&this.elementRef.nativeElement&&this.elementRef.nativeElement.style?this.elementRef.nativeElement.style.width:0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"elementWidthPx",{get:function(){return Object(g.d)(this.elementWidth)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maxColumns",{get:function(){return 3},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maxRows",{get:function(){return 3},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"totalColumns",{get:function(){return 12},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"totalRows",{get:function(){return 24},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){},t}(),y=i.rb({encapsulation:0,styles:[[".wallpaper[_ngcontent-%COMP%]{height:100%;width:100%}"]],data:{}});function O(t){return i.Mb(2,[(t()(),i.tb(0,0,null,null,2,"div",[["class","wallpaper"]],[[4,"height","px"],[4,"width","px"]],null,null,null,null)),(t()(),i.tb(1,0,null,null,1,"ccc-collage",[],null,null,null,m,b)),i.sb(2,114688,null,0,p,[],{images:[0,"images"],canvasHeight:[1,"canvasHeight"],canvasWidth:[2,"canvasWidth"],totalRows:[3,"totalRows"],totalColumns:[4,"totalColumns"],maxRows:[5,"maxRows"],maxColumns:[6,"maxColumns"]},null)],function(t,e){var n=e.component;t(e,2,0,n.images,n.canvasHeight,n.canvasWidth,n.totalRows,n.totalColumns,n.maxRows,n.maxColumns)},function(t,e){var n=e.component;t(e,0,0,n.windowHeight,n.windowWidth)})}var j=n("FbN9"),v=n("8mMr"),x=n("dWZg"),C=n("ZYCi"),P=function(){function t(){}return t.prototype.ngOnInit=function(){},t}(),k=i.rb({encapsulation:0,styles:[['#header[_ngcontent-%COMP%]{background:#8e8e8e;background:linear-gradient(to bottom,#8e8e8e 0,silver 48%,#dadada 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr="#8e8e8e", endColorstr="#dadada", GradientType=0);min-height:64px;min-width:680px;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);position:fixed;top:0;left:0;right:0;z-index:3}#header[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%]{height:48px;cursor:pointer}#header[_ngcontent-%COMP%]   #summer-league[_ngcontent-%COMP%]{height:100%;position:absolute;right:0;cursor:pointer}']],data:{}});function M(t){return i.Mb(0,[(t()(),i.tb(0,0,null,null,6,"mat-toolbar",[["class","mat-elevation-z6 mat-toolbar"],["color","primary"],["id","header"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,j.b,j.a)),i.sb(1,4243456,null,1,v.a,[i.k,x.a,h.d],{color:[0,"color"]},null),i.Ib(603979776,1,{_toolbarRows:1}),(t()(),i.tb(3,0,null,0,1,"img",[["id","logo"],["routerLink","/"],["src","assets/CCC-letterhead.png"]],null,[[null,"click"]],function(t,e,n){var o=!0;return"click"===e&&(o=!1!==i.Db(t,4).onClick()&&o),o},null,null)),i.sb(4,16384,null,0,C.p,[C.o,C.a,[8,null],i.G,i.k],{routerLink:[0,"routerLink"]},null),(t()(),i.tb(5,0,null,0,1,"img",[["id","summer-league"],["routerLink","/summer-league"],["src","assets/summer-league-logo.png"]],null,[[null,"click"]],function(t,e,n){var o=!0;return"click"===e&&(o=!1!==i.Db(t,6).onClick()&&o),o},null,null)),i.sb(6,16384,null,0,C.p,[C.o,C.a,[8,null],i.G,i.k],{routerLink:[0,"routerLink"]},null)],function(t,e){t(e,1,0,"primary"),t(e,4,0,"/"),t(e,6,0,"/summer-league")},function(t,e){t(e,0,0,i.Db(e,1)._toolbarRows.length>0,0===i.Db(e,1)._toolbarRows.length)})}var _=function(){function t(){}return t.prototype.ngOnInit=function(){},t}(),W=i.rb({encapsulation:0,styles:[["#navbar[_ngcontent-%COMP%]{display:flex;align-items:center;background:#dadada;padding:0 0 0 160px;position:relative;margin-top:60px;height:70px;min-width:1000px}#navbar[_ngcontent-%COMP%]   .summer-league-logo[_ngcontent-%COMP%]{position:absolute;height:100%;top:0;left:120px;cursor:pointer}#navbar[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]{width:auto;margin:0;cursor:pointer;padding:14px 28px;position:relative;text-decoration:none;text-shadow:0 1px 1px #4d4d4d;color:#222;font:20px LeagueGothicRegular}#navbar[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]:hover{color:#8e8e8e;font-weight:700}"]],data:{}});function H(t){return i.Mb(0,[(t()(),i.tb(0,0,null,null,6,"div",[["id","navbar"]],null,null,null,null,null)),(t()(),i.tb(1,0,null,null,2,"a",[["class","link"],["routerLink","/contact"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(t,e,n){var o=!0;return"click"===e&&(o=!1!==i.Db(t,2).onClick(n.button,n.ctrlKey,n.metaKey,n.shiftKey)&&o),o},null,null)),i.sb(2,671744,null,0,C.r,[C.o,C.a,h.i],{routerLink:[0,"routerLink"]},null),(t()(),i.Kb(-1,null,["Contact Us"])),(t()(),i.tb(4,0,null,null,2,"a",[["class","link"],["routerLink","/summer-league"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(t,e,n){var o=!0;return"click"===e&&(o=!1!==i.Db(t,5).onClick(n.button,n.ctrlKey,n.metaKey,n.shiftKey)&&o),o},null,null)),i.sb(5,671744,null,0,C.r,[C.o,C.a,h.i],{routerLink:[0,"routerLink"]},null),(t()(),i.Kb(-1,null,["Summer League"]))],function(t,e){t(e,2,0,"/contact"),t(e,5,0,"/summer-league")},function(t,e){t(e,1,0,i.Db(e,2).target,i.Db(e,2).href),t(e,4,0,i.Db(e,5).target,i.Db(e,5).href)})}var R=n("Mr+X"),D=n("SMsm"),I=function(){function t(){}return t.prototype.ngOnInit=function(){},t}(),T=i.rb({encapsulation:0,styles:[['.sidenav[_ngcontent-%COMP%]{background:#000;background:linear-gradient(to right,#000 0,#191919 45%,#323232 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr="#000000", endColorstr="#323232", GradientType=1);box-shadow:5px 0 5px -2px #888;-webkit-box-shadow:5px 0 5px -2px #888;flex:0 0 100px;-ms-grid-column:1;-ms-grid-column-span:1;text-align:center;position:relative;z-index:9999;padding:1rem 10px 0;-webkit-backface-visibility:hidden;backface-visibility:hidden;width:100px;height:100%}.sidenav[_ngcontent-%COMP%]   .summer-league-logo[_ngcontent-%COMP%]{position:absolute;width:100%;top:160px;left:0;cursor:pointer}.sidenav[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);position:absolute;left:0;text-decoration:none;width:100px;padding:12px 10px}.sidenav[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#8e8e8e;font-size:48px;height:48px;width:48px}.sidenav[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{clear:both;color:#fff;width:100px;font-size:14px;padding:12px 0;display:block}.sidenav[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]:hover{background:#8e8e8e;background:linear-gradient(to right,#8e8e8e 0,silver 44%,#dadada 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr="#8e8e8e", endColorstr="#dadada", GradientType=1)}.sidenav[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{color:#000}.sidenav[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]:hover   .label[_ngcontent-%COMP%]{color:#111}.sidenav[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]:nth-child(1){top:160px}.sidenav[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]:nth-child(2){top:300px}.sidenav[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%]:nth-child(3){top:440px}.sidenav[_ngcontent-%COMP%]   img.logo[_ngcontent-%COMP%]{position:absolute;bottom:12px;left:0;width:120px}']],data:{}});function L(t){return i.Mb(0,[(t()(),i.tb(0,0,null,null,20,"nav",[["class","sidenav"]],null,null,null,null,null)),(t()(),i.tb(1,0,null,null,6,"a",[["class","link"],["routerLink","/contact"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(t,e,n){var o=!0;return"click"===e&&(o=!1!==i.Db(t,2).onClick(n.button,n.ctrlKey,n.metaKey,n.shiftKey)&&o),o},null,null)),i.sb(2,671744,null,0,C.r,[C.o,C.a,h.i],{routerLink:[0,"routerLink"]},null),(t()(),i.tb(3,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,R.b,R.a)),i.sb(4,9158656,null,0,D.b,[i.k,D.d,[8,null],[2,D.a]],null,null),(t()(),i.Kb(-1,0,["info"])),(t()(),i.tb(6,0,null,null,1,"span",[["class","label"]],null,null,null,null,null)),(t()(),i.Kb(-1,null,["Contact Us"])),(t()(),i.tb(8,0,null,null,5,"a",[["class","link"],["href","/assets/pdf/summer-league-rules.pdf"],["target","_blank"]],null,null,null,null,null)),(t()(),i.tb(9,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,R.b,R.a)),i.sb(10,9158656,null,0,D.b,[i.k,D.d,[8,null],[2,D.a]],null,null),(t()(),i.Kb(-1,0,["picture_as_pdf"])),(t()(),i.tb(12,0,null,null,1,"span",[["class","label"]],null,null,null,null,null)),(t()(),i.Kb(-1,null,["Summer League Rules"])),(t()(),i.tb(14,0,null,null,5,"a",[["class","link"],["href","/assets/pdf/summer-league-sponsorship-form.pdf"],["target","_blank"]],null,null,null,null,null)),(t()(),i.tb(15,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,R.b,R.a)),i.sb(16,9158656,null,0,D.b,[i.k,D.d,[8,null],[2,D.a]],null,null),(t()(),i.Kb(-1,0,["picture_as_pdf"])),(t()(),i.tb(18,0,null,null,1,"span",[["class","label"]],null,null,null,null,null)),(t()(),i.Kb(-1,null,["Summer League Sponsorship Form"])),(t()(),i.tb(20,0,null,null,0,"img",[["class","logo"],["src","assets/CCC.png"]],null,null,null,null,null))],function(t,e){t(e,2,0,"/contact"),t(e,4,0),t(e,10,0),t(e,16,0)},function(t,e){t(e,1,0,i.Db(e,2).target,i.Db(e,2).href),t(e,3,0,i.Db(e,4).inline,"primary"!==i.Db(e,4).color&&"accent"!==i.Db(e,4).color&&"warn"!==i.Db(e,4).color),t(e,9,0,i.Db(e,10).inline,"primary"!==i.Db(e,10).color&&"accent"!==i.Db(e,10).color&&"warn"!==i.Db(e,10).color),t(e,15,0,i.Db(e,16).inline,"primary"!==i.Db(e,16).color&&"accent"!==i.Db(e,16).color&&"warn"!==i.Db(e,16).color)})}n("CMg+"),n("yGQT"),n.d(e,"a",function(){return F}),n.d(e,"b",function(){return K});var F=i.rb({encapsulation:0,styles:[["#content[_ngcontent-%COMP%]{position:absolute;top:124px;left:120px;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;background-position:center center;min-width:500px}ccc-sidenav[_ngcontent-%COMP%]{position:fixed;left:0;top:-60px;z-index:2}@media screen and (max-width:700px){ccc-sidenav[_ngcontent-%COMP%]{display:none}}"]],data:{}});function S(t){return i.Mb(0,[(t()(),i.tb(0,0,null,null,1,"ccc-wallpaper",[],null,null,null,O,y)),i.sb(1,114688,null,0,w,[i.k],{images:[0,"images"],windowHeight:[1,"windowHeight"],windowWidth:[2,"windowWidth"]},null)],function(t,e){var n=e.component;t(e,1,0,n.images,n.windowHeight,n.windowWidth)},null)}function K(t){return i.Mb(0,[(t()(),i.tb(0,0,null,null,1,"ccc-header",[],null,null,null,M,k)),i.sb(1,114688,null,0,P,[],null,null),(t()(),i.tb(2,0,null,null,1,"ccc-navbar",[],null,null,null,H,W)),i.sb(3,114688,null,0,_,[],null,null),(t()(),i.tb(4,0,null,null,1,"ccc-sidenav",[],[[4,"height","px"]],null,null,L,T)),i.sb(5,114688,null,0,I,[],null,null),(t()(),i.tb(6,0,null,null,3,"div",[["id","content"]],[[4,"min-height","px"],[4,"width","px"],[4,"left","px"],[4,"background-image",null]],null,null,null,null)),i.Cb(null,0),(t()(),i.ib(16777216,null,null,1,null,S)),i.sb(9,16384,null,0,h.l,[i.R,i.O],{ngIf:[0,"ngIf"]},null)],function(t,e){var n=e.component;t(e,1,0),t(e,3,0),t(e,5,0),t(e,9,0,n.hasWallpaper)},function(t,e){var n=e.component;t(e,4,0,n.sidenavHeight),t(e,6,0,n.windowHeight,n.windowWidth,n.offsetLeft,n.backgroundImageUrl?"url(/assets/"+n.backgroundImageUrl+")":"none")})}},o9pq:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var i=n("xp1a"),o=n("dzgT");function l(t){return Object(o.b)(Object(i.Tb)(t),Object(i.Vb)(t),function(t,e){return console.log(t,e,Object(i.Ib)()),e<t||Object(i.Ib)()})}}}]);