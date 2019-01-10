define(["moment","jquery","app/core/app_events","lodash","app/plugins/sdk","app/core/utils/kbn"],function(t,e,i,n,o,s){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=4)}([function(e,i){e.exports=t},function(t,i){t.exports=e},function(t,e){t.exports=i},function(t,e){t.exports=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PanelCtrl=void 0;var n=i(5),o=i(7),s=u(i(3)),a=u(i(1)),r=u(i(0)),l=u(i(8)),h=u(i(2));function u(t){return t&&t.__esModule?t:{default:t}}var d=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),p=["#7EB26D","#EAB839","#6ED0E0","#EF843C","#E24D42","#1F78C1","#BA43A9","#705DA0","#508642","#CCA300","#447EBC","#C15C17","#890F02","#0A437C","#6D1F62","#584477","#B7DBAB","#F4D598","#70DBED","#F9BA8F","#F29191","#82B5D8","#E5A8E2","#AEA2E0","#629E51","#E5AC0E","#64B0C8","#E0752D","#BF1B00","#0A50A1","#962D82","#614D93","#9AC48A","#F2C96D","#65C5DB","#F9934E","#EA6460","#5195CE","#D683CE","#806EB7","#3F6833","#967302","#2F575E","#99440A","#58140C","#052B51","#511749","#3F2B5B","#E0F9D7","#FCEACA","#CFFAFF","#F9E2D2","#FCE2DE","#BADFF4","#F9D9F9","#DEDAF7"],c=function(t){function e(e,i,n){var o=t.call(this,e,i)||this;return o.annotationsSrv=n,o.defaults={display:"timeline",rowHeight:50,valueMaps:[{value:"null",op:"=",text:"N/A"}],rangeMaps:[{from:"null",to:"null",text:"N/A"}],colorMaps:[{text:"N/A",color:"#CCC"}],metricNameColor:"#000000",valueTextColor:"#000000",timeTextColor:"#d8d9da",crosshairColor:"#8F070C",backgroundColor:"rgba(128,128,128,0.1)",lineColor:"rgba(0,0,0,0.1)",textSize:24,textSizeTime:12,extendLastValue:!0,writeLastValue:!0,writeAllValues:!1,writeMetricNames:!1,showTimeAxis:!0,showLegend:!0,showLegendNames:!0,showLegendValues:!0,showLegendPercent:!0,highlightOnMouseover:!0,expandFromQueryS:0,legendSortBy:"-ms",units:"short"},o.annotations=[],o.data=null,o.legend=null,o.externalPT=!1,o.isTimeline=!0,o.isStacked=!1,o.hoverPoint=null,o.colorMap={},o.unitFormats=null,o.formatter=null,o._colorsPaleteCash=null,o._renderDimensions={},o._selectionMatrix=[],s.default.defaultsDeep(o.panel,o.defaults),o.panel.display="timeline",o.events.on("init-edit-mode",o.onInitEditMode.bind(o)),o.events.on("render",o.onRender.bind(o)),o.events.on("panel-initialized",o.onPanelInitialized.bind(o)),o.events.on("refresh",o.onRefresh.bind(o)),o.events.on("data-received",o.onDataReceived.bind(o)),o.events.on("data-snapshot-load",o.onDataSnapshotLoad.bind(o)),o.events.on("data-error",o.onDataError.bind(o)),o}return d(e,t),e.$inject=["$scope","$injector","annotationsSrv"],e.prototype.onPanelInitialized=function(){this.updateColorInfo(),this.onConfigChanged()},e.prototype.onDataSnapshotLoad=function(t){this.onDataReceived(t)},e.prototype.onDataError=function(t){this.annotations=[],console.log("onDataError",t)},e.prototype.onInitEditMode=function(){this.unitFormats=l.default.getUnitFormats(),this.addEditorTab("Options","public/plugins/natel-discrete-panel/partials/editor.options.html",1),this.addEditorTab("Legend","public/plugins/natel-discrete-panel/partials/editor.legend.html",3),this.addEditorTab("Colors","public/plugins/natel-discrete-panel/partials/editor.colors.html",4),this.addEditorTab("Mappings","public/plugins/natel-discrete-panel/partials/editor.mappings.html",5),this.editorTabIndex=1,this.refresh()},e.prototype.onRender=function(){null!=this.data&&this.context&&(this._updateRenderDimensions(),this._updateSelectionMatrix(),this._updateCanvasSize(),this._renderRects(),this._renderTimeAxis(),this._renderLabels(),this._renderAnnotations(),this._renderSelection(),this._renderCrosshair(),this.renderingCompleted())},e.prototype.showLegandTooltip=function(t,e){var i='<div class="graph-tooltip-time">'+e.val+"</div>";i+="<center>",e.count>1&&(i+=e.count+" times<br/>for<br/>"),i+=r.default.duration(e.ms).humanize(),e.count>1&&(i+="<br/>total"),i+="</center>",this.$tooltip.html(i).place_tt(t.pageX+20,t.pageY)},e.prototype.clearTT=function(){this.$tooltip.detach()},e.prototype.formatValue=function(t){if(s.default.isNumber(t)){if(this.panel.rangeMaps)for(var e=0;e<this.panel.rangeMaps.length;e++){var i=this.panel.rangeMaps[e],n=parseFloat(i.from);if(parseFloat(i.to)>=t&&n<=t)return i.text}this.formatter&&(t=this.formatter(t,this.panel.decimals))}var o=s.default.isNil(t);for(o||s.default.isString(t)||(t=t.toString()),e=0;e<this.panel.valueMaps.length;e++)if("null"!==(i=this.panel.valueMaps[e]).value){if(t===i.value)return i.text}else if(o)return i.text;return o?"null":t},e.prototype.getColor=function(t){if(s.default.has(this.colorMap,t))return this.colorMap[t];if(void 0===this._colorsPaleteCash[t]){var e=p[this._colorsPaleteCash.length%p.length];this._colorsPaleteCash[t]=e,this._colorsPaleteCash.length++}return this._colorsPaleteCash[t]},e.prototype.randomColor=function(){for(var t="ABCDE".split(""),e="#",i=0;i<3;i++)e+=t[Math.floor(Math.random()*t.length)];return e},e.prototype.applyPanelTimeOverrides=function(){if(t.prototype.applyPanelTimeOverrides.call(this),this.panel.expandFromQueryS&&this.panel.expandFromQueryS>0){var e=this.range.from.subtract(this.panel.expandFromQueryS,"s");this.range.from=e,this.range.raw.from=e}},e.prototype.onDataReceived=function(t){var e=this;(0,a.default)(this.canvas).css("cursor","pointer");var i=[];s.default.forEach(t,function(t){if("table"===t.type){if("time"!==t.columns[0].type)throw new Error("Expected a time column from the table format");for(var n=1;n<t.columns.length;n++){for(var a=new o.DistinctPoints(t.columns[n].text),r=0;r<t.rows.length;r++){var l=t.rows[r];a.add(l[0],e.formatValue(l[n]))}a.finish(e),i.push(a)}}else{var h=new o.DistinctPoints(t.target);s.default.forEach(t.datapoints,function(t){h.add(t[1],e.formatValue(t[0]))}),h.finish(e),i.push(h)}}),this.data=i,this.updateLegendMetrics(),this.annotationsSrv.getAnnotations({dashboard:this.dashboard,panel:this.panel,range:this.range}).then(function(t){e.loading=!1,t.annotations&&t.annotations.length>0?e.annotations=t.annotations:e.annotations=null,e.onRender()},function(){e.loading=!1,e.annotations=null,e.onRender(),console.log("ERRR",e)})},e.prototype.updateLegendMetrics=function(t){!this.data||!this.panel.showLegend||this.panel.showLegendNames||this.data.length<=1?this.legend=this.data:this.legend=[o.DistinctPoints.combineLegend(this.data,this)],t&&this.onConfigChanged()},e.prototype.removeColorMap=function(t){var e=s.default.indexOf(this.panel.colorMaps,t);this.panel.colorMaps.splice(e,1),this.updateColorInfo()},e.prototype.updateColorInfo=function(){for(var t={},e=0;e<this.panel.colorMaps.length;e++){var i=this.panel.colorMaps[e];i.text&&(t[i.text]=i.color)}this._colorsPaleteCash={},this._colorsPaleteCash.length=0,this.colorMap=t,this.render()},e.prototype.addColorMap=function(t){var e=this;"curent"===t?s.default.forEach(this.data,function(t){t.legendInfo&&s.default.forEach(t.legendInfo,function(t){if(!s.default.has(e.colorMap,t.val)){var i={text:t.val,color:e.getColor(t.val)};e.panel.colorMaps.push(i),e.colorMap[t.val]=i}})}):this.panel.colorMaps.push({text:"???",color:this.randomColor()}),this.updateColorInfo()},e.prototype.removeValueMap=function(t){var e=s.default.indexOf(this.panel.valueMaps,t);this.panel.valueMaps.splice(e,1),this.render()},e.prototype.addValueMap=function(){this.panel.valueMaps.push({value:"",op:"=",text:""})},e.prototype.removeRangeMap=function(t){var e=s.default.indexOf(this.panel.rangeMaps,t);this.panel.rangeMaps.splice(e,1),this.render()},e.prototype.addRangeMap=function(){this.panel.rangeMaps.push({from:"",to:"",text:""})},e.prototype.onConfigChanged=function(t){void 0===t&&(t=!1),this.isTimeline="timeline"===this.panel.display,this.isStacked="stacked"===this.panel.display,this.formatter=null,this.panel.units&&"none"!==this.panel.units&&(this.formatter=l.default.valueFormats[this.panel.units]),t?this.refresh():this.render()},e.prototype.getLegendDisplay=function(t,e){var i=t.val;if(this.panel.showLegendPercent||this.panel.showLegendCounts||this.panel.showLegendTime){i+=" (";var n=!1;if(this.panel.showLegendTime&&(i+=r.default.duration(t.ms).humanize(),n=!0),this.panel.showLegendPercent){n&&(i+=", ");var o=this.panel.legendPercentDecimals;s.default.isNil(o)&&(o=t.per>.98&&e.changes.length>1?2:t.per<.02?2:0),i+=l.default.valueFormats.percentunit(t.per,o),n=!0}this.panel.showLegendCounts&&(n&&(i+=", "),i+=t.count+"x"),i+=")"}return i},e.prototype.showTooltip=function(t,e,i){var n=e.start,o=e.start+e.ms,s=e.ms,l=e.val;null!=this.mouse.down&&(n=Math.min(this.mouse.down.ts,this.mouse.position.ts),s=(o=Math.max(this.mouse.down.ts,this.mouse.position.ts))-n,l="Zoom To:");var h='<div class="graph-tooltip-time">'+l+"</div>";h+="<center>",h+=this.dashboard.formatDate((0,r.default)(n))+"<br/>",h+="to<br/>",h+=this.dashboard.formatDate((0,r.default)(o))+"<br/><br/>",h+=r.default.duration(s).humanize()+"<br/>",h+="</center>";var u=0,d=0;if(i){var p=this.canvas.getBoundingClientRect();if((d=p.top+t.pos.panelRelY*p.height)<0||d>(0,a.default)(window).innerHeight())return void this.$tooltip.detach();d+=(0,a.default)(window).scrollTop();var c=this.range.to-this.range.from,f=(t.pos.x-this.range.from)/c;u=p.left+f*p.width}else u=t.evt.pageX,d=t.evt.pageY;this.$tooltip.html(h).place_tt(u+20,d+5)},e.prototype.onGraphHover=function(t,e,i){if(this.externalPT=!1,this.data&&this.data.length){var n=null,o=Math.floor(this.mouse.position.y/this.panel.rowHeight);if(o<0&&(o=0),o>=this.data.length&&(o=this.data.length-1),this.isTimeline){n=this.data[o].changes[0];for(var a=0;a<this.data[o].changes.length&&!(this.data[o].changes[a].start>this.mouse.position.ts);a++)n=this.data[o].changes[a];if(this.hoverPoint=n,this.annotations&&!i&&this._renderDimensions&&t.pos.y>this._renderDimensions.rowsHeight-5){var r=s.default.isUndefined(this.range.from)?null:this.range.from.valueOf(),l=s.default.isUndefined(this.range.to)?null:this.range.to.valueOf(),h=this._renderDimensions.width,u=s.default.find(this.annotations,function(e){if(e.isRegion)return t.pos.x>e.time&&t.pos.x<e.timeEnd;var i=(e.time-r)/(l-r)*h,n=t.evt.offsetX;return i>n-5&&i<n+5});if(u)return console.log("TODO, hover <annotation-tooltip>",u),void this.$tooltip.html(u.text).place_tt(t.evt.pageX+20,t.evt.pageY+5)}e&&(this.externalPT=i,this.showTooltip(t,n,i)),this.onRender()}else i||this.isStacked&&(n=this.data[o].legendInfo[0],this.hoverPoint=n,this.onRender(),e&&(this.externalPT=i,this.showLegandTooltip(t.evt,n)))}else this.$tooltip.detach()},e.prototype.onMouseClicked=function(t,e){if(1!=e.metaKey&&1!=e.ctrlKey){var i=this.hoverPoint;if(i&&i.start){var n={from:r.default.utc(i.start),to:r.default.utc(i.start+i.ms)};this.timeSrv.setTime(n),this.clear()}}else console.log("TODO? Create Annotation?",t,e)},e.prototype.onMouseSelectedRange=function(t,e){1!=e.metaKey&&1!=e.ctrlKey?(this.timeSrv.setTime(t),this.clear()):console.log("TODO? Create range annotation?",t,e)},e.prototype.clear=function(){this.mouse.position=null,this.mouse.down=null,this.hoverPoint=null,(0,a.default)(this.canvas).css("cursor","wait"),h.default.emit("graph-hover-clear"),this.render()},e.prototype._updateRenderDimensions=function(){var t=this;this._renderDimensions={};var e=this._renderDimensions.rect=this.wrap.getBoundingClientRect(),i=this._renderDimensions.rows=this.data.length,n=this._renderDimensions.rowHeight=this.panel.rowHeight,o=this._renderDimensions.rowsHeight=n*i,a=this.panel.showTimeAxis?14+this.panel.textSizeTime:0,r=this._renderDimensions.height=o+a,l=this._renderDimensions.width=e.width;this._renderDimensions.height=r;var h=0,u=this.range.to-this.range.from;this._renderDimensions.matrix=[],s.default.forEach(this.data,function(e){var i=[];if(t.isTimeline)for(var o=e.changes[0],s=0;s<e.changes.length;s++)if((o=e.changes[s]).start<=t.range.to){var a=Math.max(o.start-t.range.from,0)/u*l;i.push(a)}if(t.isStacked){o=null;var r=t.range.from;for(s=0;s<e.legendInfo.length;s++)o=e.legendInfo[s],a=Math.max(r-t.range.from,0)/u*l,i.push(a),r+=o.ms}t._renderDimensions.matrix.push({y:h,positions:i}),h+=n})},e.prototype._updateSelectionMatrix=function(){var t={all:function(){return!0},crosshairHover:function(t,e){return e+1===this.data[t].changes.length?this.data[t].changes[e].start<=this.mouse.position.ts:this.data[t].changes[e].start<=this.mouse.position.ts&&this.mouse.position.ts<this.data[t].changes[e+1].start},mouseX:function(t,e){var i=this._renderDimensions.matrix[t];return e+1===i.positions.length?i.positions[e]<=this.mouse.position.x:i.positions[e]<=this.mouse.position.x&&this.mouse.position.x<i.positions[e+1]},metric:function(t){return this.data[t]===this._selectedMetric},legendItem:function(t,e){return this.data[t]===this._selectedMetric&&this._selectedLegendItem.val===this._getVal(t,e)}}[function(){if(void 0!==this._selectedLegendItem)return"legendItem";if(void 0!==this._selectedMetric)return"metric";if(null!==this.mouse.down)return"all";if(this.panel.highlightOnMouseover&&null!=this.mouse.position){if(this.isTimeline)return"crosshairHover";if(this.isStacked)return"mouseX"}return"all"}.bind(this)()].bind(this);this._selectionMatrix=[];for(var e=0;e<this._renderDimensions.matrix.length;e++){for(var i=[],n=this._renderDimensions.matrix[e],o=0;o<n.positions.length;o++)i.push(t(e,o));this._selectionMatrix.push(i)}},e.prototype._updateCanvasSize=function(){this.canvas.width=this._renderDimensions.width*this._devicePixelRatio,this.canvas.height=this._renderDimensions.height*this._devicePixelRatio,(0,a.default)(this.canvas).css("width",this._renderDimensions.width+"px"),(0,a.default)(this.canvas).css("height",this._renderDimensions.height+"px"),this.context.scale(this._devicePixelRatio,this._devicePixelRatio)},e.prototype._getVal=function(t,e){var i=void 0;return this.isTimeline&&(i=this.data[t].changes[e]),this.isStacked&&(i=this.data[t].legendInfo[e]),i.val},e.prototype._renderRects=function(){var t=this,e=this._renderDimensions.matrix,i=this.context;s.default.forEach(this.data,function(n,o){for(var s=e[o],a=0;a<s.positions.length;a++){var r=s.positions[a],l=t._renderDimensions.width;a+1!==s.positions.length&&(l=s.positions[a+1]),i.fillStyle=t.getColor(t._getVal(o,a));var h=i.globalAlpha;t._selectionMatrix[o][a]||(i.globalAlpha=.3),i.fillRect(r,e[o].y,l-r,t._renderDimensions.rowHeight),i.globalAlpha=h}if(o>0){var u=e[o].y;i.strokeStyle=t.panel.lineColor,i.beginPath(),i.moveTo(0,u),i.lineTo(t._renderDimensions.width,u),i.stroke()}})},e.prototype._renderLabels=function(){var t=this,e=this.context;e.lineWidth=1,e.textBaseline="middle",e.font=this.panel.textSize+'px "Open Sans", Helvetica, Arial, sans-serif';var i=this._renderDimensions.rowHeight;s.default.forEach(this.data,function(n,o){var s=t._renderDimensions.matrix[o],a=s.y,r=s.positions,l=a+i/2,h=l,u=l,d=l,p=-1,c=-1;if(t.mouse.position)for(var f=0;f<r.length;f++)if(r[f]<=t.mouse.position.x&&(f>=r.length-1||r[f+1]>=t.mouse.position.x)){var m=t._getVal(o,f);e.fillStyle=t.panel.valueTextColor,e.textAlign="left",p=r[f]+2,e.fillText(m,p,d),c=p+(x=e.measureText(m)).width+4;break}var g=0,v=t._renderDimensions.width;if(t.panel.writeMetricNames){e.fillStyle=t.panel.metricNameColor,e.textAlign="left";var x=e.measureText(n.name);(p<0||p>x.width)&&(e.fillText(n.name,2,h),g=2+e.measureText(n.name).width+2)}if(t.panel.writeLastValue&&(m=t._getVal(o,r.length-1),e.fillStyle=t.panel.valueTextColor,e.textAlign="right",x=e.measureText(m),t._renderDimensions.width-2-x.width>c&&(e.fillText(m,t._renderDimensions.width-2,u),v=t._renderDimensions.width-e.measureText(m).width-10)),t.panel.writeAllValues)for(e.fillStyle=t.panel.valueTextColor,e.textAlign="left",f=0;f<r.length;f++){m=t._getVal(o,f);var y=t._renderDimensions.width;f+1!==r.length&&(y=r[f+1]);var _=r[f];if(_>g){var w=y-_;v>_+w&&(e.save(),e.rect(_,a,w,i),e.clip(),e.fillText(m,_+2,d),e.restore())}}})},e.prototype._renderSelection=function(){if(null!==this.mouse.down&&null!==this.mouse.position&&this.isTimeline){var t=this.context,e=this._renderDimensions.height,i=Math.min(this.mouse.position.x,this.mouse.down.x),n=Math.max(this.mouse.position.x,this.mouse.down.x);t.fillStyle="rgba(110, 110, 110, 0.5)",t.strokeStyle="rgba(110, 110, 110, 0.5)",t.beginPath(),t.fillRect(i,0,n-i,e),t.strokeRect(i,0,n-i,e)}},e.prototype._renderTimeAxis=function(){if(this.panel.showTimeAxis){var t=this.context,e=this._renderDimensions.width,i=this._renderDimensions.rowsHeight;t.font=this.panel.textSizeTime+'px "Open Sans", Helvetica, Arial, sans-serif',t.fillStyle=this.panel.timeTextColor,t.textAlign="left",t.strokeStyle=this.panel.timeTextColor,t.textBaseline="top",t.setLineDash([7,5]),t.lineDashOffset=0;var n=s.default.isUndefined(this.range.from)?null:this.range.from.valueOf(),o=s.default.isUndefined(this.range.to)?null:this.range.to.valueOf(),a=(o-n)/(e/(2*t.measureText("12/33 24:59").width)),r=this.getTimeResolution(a),l=r/(o-n)*e,h=this.roundDate(n,r)+r,u=0+(h-n)/(o-n)*e,d=this.time_format(o-n,r/1e3),p=0;for("utc"==this.dashboard.timezone&&(p=6e4*(new Date).getTimezoneOffset());h<o;){t.beginPath(),t.moveTo(u,i+5),t.lineTo(u,0),t.lineWidth=1,t.stroke();var c=new Date(h+p),f=this.formatDate(c,d),m=t.measureText(f).width/2;t.fillText(f,u-m,i+10),h+=r,u+=l}}},e.prototype._renderCrosshair=function(){if(null==this.mouse.down&&null!==this.mouse.position&&this.isTimeline){var t=this.context,e=this.data.length,i=this._renderDimensions.height;t.beginPath(),t.moveTo(this.mouse.position.x,0),t.lineTo(this.mouse.position.x,i),t.strokeStyle=this.panel.crosshairColor,t.setLineDash([]),t.lineWidth=1,t.stroke(),this.externalPT&&e>1&&(t.beginPath(),t.arc(this.mouse.position.x,this.mouse.position.y,3,0,2*Math.PI,!1),t.fillStyle=this.panel.crosshairColor,t.fill(),t.lineWidth=1)}},e.prototype._renderAnnotations=function(){var t=this;if(this.panel.showTimeAxis&&this.annotations){var e=this.context,i=this.panel.rowHeight,n=this._renderDimensions.width,o=this._renderDimensions.rowsHeight;e.font=this.panel.textSizeTime+'px "Open Sans", Helvetica, Arial, sans-serif',e.fillStyle="#7FE9FF",e.textAlign="left",e.strokeStyle="#7FE9FF",e.textBaseline="top",e.setLineDash([3,3]),e.lineDashOffset=0,e.lineWidth=2;var a=s.default.isUndefined(this.range.from)?null:this.range.from.valueOf(),r=s.default.isUndefined(this.range.to)?null:this.range.to.valueOf();s.default.forEach(this.annotations,function(s){e.setLineDash([3,3]);var l=!1;if(s.source.iconColor?(e.fillStyle=s.source.iconColor,e.strokeStyle=s.source.iconColor):void 0===s.annotation?(e.fillStyle="#7FE9FF",e.strokeStyle="#7FE9FF"):(l=!0,e.fillStyle="#EA0F3B",e.strokeStyle="#EA0F3B"),t._drawVertical(e,s.time,a,r,0,o,n,l),s.isRegion){t._drawVertical(e,s.timeEnd,a,r,0,o,n,l);var h=0+(s.time-a)/(r-a)*n,u=0+(s.timeEnd-a)/(r-a)*n;e.beginPath(),e.moveTo(h,o+5),e.lineTo(u,o+5),e.lineWidth=4,e.setLineDash([]),e.stroke(),0==l&&(e.save(),e.fillStyle="#7FE9FF",e.globalAlpha=.2,e.fillRect(h,0,u-h,i),e.stroke(),e.restore())}})}},e.prototype._drawVertical=function(t,e,i,n,o,s,a,r){var l=o+(e-i)/(n-i)*a;if(t.lineWidth=1,t.beginPath(),t.moveTo(l,s+5),t.lineTo(l,0),t.stroke(),t.moveTo(l+0,s),t.lineTo(l-5,s+7),t.lineTo(l+5,s+7),t.fill(),1==r){var h=t.measureText("▲").width/2;t.fillText("▲",l-h,s+10)}},e.templateUrl="partials/module.html",e.scrollable=!0,e}(n.CanvasPanelCtrl);e.PanelCtrl=c},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CanvasPanelCtrl=void 0;var n=i(6),o=r(i(0)),s=r(i(1)),a=r(i(2));function r(t){return t&&t.__esModule?t:{default:t}}var l=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),h=function(t){function e(e,i){var n=t.call(this,e,i)||this;return n.data=null,n.mouse={position:null,down:null},n.$tooltip=(0,s.default)('<div class="graph-tooltip">'),n.events.on("panel-initialized",n.onPanelInitalized.bind(n)),n.events.on("refresh",n.onRefresh.bind(n)),n.events.on("render",n.onRender.bind(n)),n._devicePixelRatio=1,void 0!==window.devicePixelRatio&&(n._devicePixelRatio=window.devicePixelRatio),n}return l(e,t),e.$inject=["$scope","$injector"],e.prototype.onPanelInitalized=function(){this.render()},e.prototype.onRefresh=function(){this.render()},e.prototype.onRender=function(){if(this.context){console.log("canvas render",this.mouse);var t=this.wrap.getBoundingClientRect(),e=Math.max(this.height,100),i=t.width;this.canvas.width=i,this.canvas.height=e;var n=e/2,s=this.context;s.lineWidth=1,s.textBaseline="middle";var a="";if(null!=this.mouse.position&&(a=this.dashboard.formatDate((0,o.default)(this.mouse.position.ts))),s.fillStyle="#999999",s.fillRect(0,0,i,e),s.fillStyle="#111111",s.font='24px "Open Sans", Helvetica, Arial, sans-serif',s.textAlign="left",s.fillText("Mouse @ "+a,10,n),null!=this.mouse.position)if(null!=this.mouse.down){var r=Math.min(this.mouse.position.x,this.mouse.down.x),l=Math.max(this.mouse.position.x,this.mouse.down.x);s.globalCompositeOperation="destination-out",s.fillStyle="rgba(255, 255, 255, 0.6)",s.beginPath(),s.fillRect(0,0,r,e),s.fill(),s.beginPath(),s.fillRect(l,0,i,e),s.fill(),s.globalCompositeOperation="source-over"}else s.strokeStyle="#111",s.beginPath(),s.moveTo(this.mouse.position.x,0),s.lineTo(this.mouse.position.x,e),s.lineWidth=3,s.stroke(),s.beginPath(),s.moveTo(this.mouse.position.x,0),s.lineTo(this.mouse.position.x,e),s.strokeStyle="#e22c14",s.lineWidth=2,s.stroke()}else console.log("No context!")},e.prototype.clearTT=function(){this.$tooltip.detach()},e.prototype.getMousePosition=function(t){var e=this.range.to-this.range.from,i=this.canvas.getBoundingClientRect(),n=t.offsetX,o=this.range.from+e*(n/parseFloat(i.width)),s=t.clientY-i.top;return{x:n,y:s,yRel:s/parseFloat(i.height),ts:o,evt:t}},e.prototype.onGraphHover=function(t,e,i){console.log("HOVER",t,e,i)},e.prototype.onMouseClicked=function(t,e){console.log("CANVAS CLICKED",t,e),this.render()},e.prototype.onMouseSelectedRange=function(t,e){console.log("CANVAS Range",t,e)},e.prototype.link=function(t,e,i,n){var o=this;this.wrap=e.find(".canvas-spot")[0],this.canvas=document.createElement("canvas"),this.wrap.appendChild(this.canvas),(0,s.default)(this.canvas).css("cursor","pointer"),(0,s.default)(this.wrap).css("width","100%"),this.context=this.canvas.getContext("2d"),this.canvas.addEventListener("mousemove",function(t){if(o.range){o.mouse.position=o.getMousePosition(t);var e={pos:{pageX:t.pageX,pageY:t.pageY,x:o.mouse.position.ts,y:o.mouse.position.y,panelRelY:o.mouse.position.yRel,panelRelX:o.mouse.position.xRel},evt:t,panel:o.panel};a.default.emit("graph-hover",e),null!=o.mouse.down&&(0,s.default)(o.canvas).css("cursor","col-resize")}},!1),this.canvas.addEventListener("mouseout",function(t){null==o.mouse.down&&(o.mouse.position=null,o.onRender(),o.$tooltip.detach(),a.default.emit("graph-hover-clear"))},!1),this.canvas.addEventListener("mousedown",function(t){},!1),this.canvas.addEventListener("mouseenter",function(t){o.mouse.down&&!t.buttons&&(o.mouse.position=null,o.mouse.down=null,o.onRender(),o.$tooltip.detach(),a.default.emit("graph-hover-clear")),(0,s.default)(o.canvas).css("cursor","pointer")},!1),this.canvas.addEventListener("mouseup",function(t){},!1),this.canvas.addEventListener("dblclick",function(t){o.mouse.position=null,o.mouse.down=null,o.onRender(),o.$tooltip.detach(),a.default.emit("graph-hover-clear"),console.log("TODO, ZOOM OUT")},!0),a.default.on("graph-hover",function(t){var e=t.panel.id===o.panel.id;if((o.dashboard.sharedTooltipModeEnabled()||e)&&!o.otherPanelInFullscreenMode()){if(!e){if(!t.pos.x||!o.range)return;var i=t.pos.x,n=o.canvas.getBoundingClientRect(),s=o.range.to-o.range.from,a=(i-o.range.from)/s*n.width;o.mouse.position={x:a,y:t.pos.panelRelY*n.height,yRel:t.pos.panelRelY,ts:i,gevt:t}}o.onGraphHover(t,e||!o.dashboard.sharedCrosshairModeOnly(),!e)}},t),a.default.on("graph-hover-clear",function(t,e){o.mouse.position=null,o.mouse.down=null,o.render(),o.$tooltip.detach()},t)},e.prototype.time_format=function(t,e){return e<=45?"%H:%M:%S":e<=7200||t<=864e5?"%H:%M":e<=8e4?"%m/%d %H:%M":e<=2419200||t<=31536e6?"%m/%d":"%Y-%m"},e.prototype.getTimeResolution=function(t){var e=t/1e3;return e<=30?3e4:e<=60?6e4:e<=300?3e5:e<=600?6e5:e<=1800?18e5:e<=3600?36e5:e<=3600?36e5:e<=7200?72e5:e<=21600?216e5:e<=43200?432e5:e<=86400?864e5:e<=172800?1728e5:e<=604800?6048e5:e<=2592e3?2592e6:15552e6},e.prototype.roundDate=function(t,e){return t-t%e},e.prototype.formatDate=function(t,e){var i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];if("function"==typeof t.strftime)return t.strftime(e);var o,s=[],a=!1,r=t.getHours(),l=r<12;o=r>12?r-12:0==r?12:r;for(var h=0;h<e.length;++h){var u=e.charAt(h);if(a){switch(u){case"a":u=""+n[t.getDay()];break;case"b":u=""+i[t.getMonth()];break;case"d":u=this.leftPad(t.getDate(),"");break;case"e":u=this.leftPad(t.getDate()," ");break;case"h":case"H":u=this.leftPad(r,null);break;case"I":u=this.leftPad(o,null);break;case"l":u=this.leftPad(o," ");break;case"m":u=this.leftPad(t.getMonth()+1,"");break;case"M":u=this.leftPad(t.getMinutes(),null);break;case"q":u=""+(Math.floor(t.getMonth()/3)+1);break;case"S":u=this.leftPad(t.getSeconds(),null);break;case"y":u=this.leftPad(t.getFullYear()%100,null);break;case"Y":u=""+t.getFullYear();break;case"p":u=l?"am":"pm";break;case"P":u=l?"AM":"PM";break;case"w":u=""+t.getDay()}s.push(u),a=!1}else"%"==u?a=!0:s.push(u)}return s.join("")},e.prototype.leftPad=function(t,e){return t=""+t,e=""+(null==e?"0":e),1==t.length?e+t:t},e}(n.MetricsPanelCtrl);e.CanvasPanelCtrl=h},function(t,e){t.exports=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DistinctPoints=e.LegendValue=e.PointInfo=void 0;var n=function(t){return t&&t.__esModule?t:{default:t}}(i(3)),o=function(t,e){this.ms=0,this.val=t,this.start=e};e.PointInfo=o;var s=function(t){this.ms=0,this.count=0,this.per=0,this.val=t};e.LegendValue=s;var a=function(){function t(t){this.name=t,this.changes=[],this.legendInfo=[],this.last=null,this.asc=!1,this.transitionCount=0,this.distinctValuesCount=0,this.elapsed=0}return t.prototype.add=function(t,e){if(null==this.last)this.last={val:e,start:t,ms:0},this.changes.push(this.last);else{if(t===this.last.start)return void console.log("skip point with duplicate timestamp",t,e);if(1===this.changes.length&&(this.asc=t>this.last.start),t>this.last.start!==this.asc)return void console.log("skip out of order point",t,e);e===this.last.val?this.asc||(this.last.start=t):(this.last={val:e,start:t,ms:0},this.changes.push(this.last))}},t.prototype.finish=function(t){var e=this;if(this.changes.length<1)console.log("no points found!");else{if(this.asc||(this.last=this.changes[0],n.default.reverse(this.changes)),this.last.start<t.range.to){var i=this.last.start+1;this.changes.push({val:"",start:i,ms:0})}this.transitionCount=0;for(var o=new Map,s=this.changes[0],a=1;a<this.changes.length;a++){var r=this.changes[a],l=s.start,h=r.start;if(l<t.range.from?l=t.range.from:l<t.range.to&&this.transitionCount++,h>t.range.to&&(h=t.range.to),s.ms=h-l,s.ms>0)if(o.has(s.val)){var u=o.get(s.val);u.ms+=s.ms,u.count++}else o.set(s.val,{val:s.val,ms:s.ms,count:1,per:0});s=r}var d=t.range.to-t.range.from;this.elapsed=d,o.forEach(function(t,i){t.per=t.ms/d,e.legendInfo.push(t)}),this.distinctValuesCount=n.default.size(this.legendInfo),t.isTimeline||(this.legendInfo=n.default.orderBy(this.legendInfo,["ms"],["desc"]))}},t.combineLegend=function(e,i){if(1==e.length)return e[0];var o=new t("merged"),s=0,a=new Map;return n.default.forEach(e,function(t){o.transitionCount+=t.transitionCount,s+=t.elapsed,n.default.forEach(t.legendInfo,function(t){if(a.has(t.val)){var e=a.get(t.val);e.ms+=t.ms,e.count+=t.count}else a.set(t.val,{val:t.val,ms:t.ms,count:t.count,per:0})})}),o.elapsed=s,a.forEach(function(t,e){t.per=t.ms/s,o.legendInfo.push(t)}),o.distinctValuesCount=n.default.size(o.legendInfo),o},t}();e.DistinctPoints=a},function(t,e){t.exports=s}])});
//# sourceMappingURL=module.js.map