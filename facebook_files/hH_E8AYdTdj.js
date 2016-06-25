if (self.CavalryLogger) { CavalryLogger.start_js(["z3Fja"]); }

__d("XBrowseLoggerController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/browse\/logger\/",{data:{type:"HackType",required:true}});},null);
__d('BrowseLogger',['AsyncRequest','Banzai','mapObject','Run','XBrowseLoggerController'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='browse',i='browse_aggr',j=null,k={},l={},m=function(v){if(v==null)return 'undefined';var w=v.tagName.toLowerCase(),x=v.id,y=v.className;if(x)w+='#'+x;if(y)w+='.'+y;return w;};function n(){j=null;k={};l={};}function o(v){return Object.assign(v,{clientSessionID:j});}function p(v){c('Banzai').post(h,o(v));}function q(v){var w=c('XBrowseLoggerController').getURIBuilder().setHackType('data',o(v)).getURI();new (c('AsyncRequest'))().setURI(w).send();}function r(){if(j===null)return;l.aggregated=k;c('Banzai').post(i,o(l));n();}function s(v){k[v]=(k[v]||0)+1;}function t(v){Object.assign(l,v);}c('Run').onUnload(r);var u={newSession:function(){r();j=Math.random().toString();if(!l.start_time)l.start_time=Math.round(Date.now()/1000);},logResultClick:function(v,w,x,y,z){var aa=arguments.length<=5||arguments[5]===undefined?null:arguments[5],ba={action:'result_click',click_type:v.ct||'result',section:v.section||'unknown',id:v.id||0,path:v.path||'unknown',rank:v.rank||0,referrer:v.referrer||'unknown',result_type:v.result_type||'unknown',session_id:v.session_id||0,query_time:v.query_time||null,abtest_version:v.abtest_version||'NONE',abtest_params:v.abtest_params||null,typeahead_sid:v.typeahead_sid||'',result_title:v.result_title||'unknown',result_href:v.result_href||'unknown',result_semantic:v.result_semantic||'unknown',type:v.experience_type||'unknown',click_action:x||null,sub_id:v.sub_id||null,owner_id:v.owner_id||null,browse_location:v.browse_location||'unknown',query_data:v.query_data||'unknown',is_headline:v.is_headline||false,qid:w.qid||0,mf_story_key:w.mf_story_key||0,module:v.module||'NONE',view:v.view||null,clicked_href:z||null,bt_key:aa};if(w.tn)ba.tn=w.tn;if(v.cst)ba.click_subtype=v.cst;s('result_click_'+ba.click_type);t({path:ba.path,referrer:ba.referrer,result_type:ba.result_type,session_id:ba.session_id,abtest_version:ba.abtest_version,abtest_params:ba.abtest_params,typeahead_sid:ba.typeahead_sid});if(aa){q(ba);}else p(ba);if(!v.id&&v.browse_location!=='browse_location:mf_trending'&&!aa)p({action:'logging_error',click_action:x,click_type:ba.click_type,attributes:JSON.stringify(v),element:c('mapObject')({srcElement:y.srcElement,target:y.target,toElement:y.toElement},m),event:{button:y.button,clientX:y.clientX,clientY:y.clientY,ctrlKey:y.ctrlKey,layerX:y.layerX,layerY:y.layerY,offsetX:y.offsetX,offsetY:y.offsetY,pageX:y.pageX,pageY:y.pageY,screenX:y.screenX,screenY:y.screenY,shiftKey:y.shiftKey,type:y.type,x:y.x,y:y.y}});},logControlsClick:function(v,w){var x={action:'controls_click',click_type:w,path:v.path||'unknown',referrer:v.referrer||'unknown',session_id:v.session_id||0,query_time:v.query_time,filter_name:v.name||'unknown',typeahead_sid:v.typeahead_sid||'',result_type:v.result_type||'unknown',type:v.experience_type||'unknown'};if(v.cst)x.click_subtype=v.cst;s('controls_click_'+w);t({path:x.path,referrer:x.referrer,session_id:x.session_id,typeahead_sid:x.typeahead_sid});p(x);},logResultHover:function(v,w){var x=arguments.length<=2||arguments[2]===undefined?null:arguments[2],y={action:'result_hover',id:v.id||0,path:v.path||'unknown',rank:v.rank||null,result_type:v.result_type||'unknown',session_id:v.session_id||0,query_time:v.query_time||null,time_elapsed:w||null,typeahead_sid:v.typeahead_sid||0,type:v.experience_type||'unknown',module:v.module||'NONE',view:v.view||null,bt_key:x};s('result_hover');t({path:y.path,session_id:y.session_id,typeahead_sid:y.typeahead_sid});if(x){q(y);}else p(y);},logScroll:function(v,w,x,y){var z={action:'scroll',encoded_query:v,fragments:w,position:x,session_id:y||0};p(z);},logNUXStep:function(v){var w={action:'nux_step',step:v};p(w);},logDisambiguationImpression:function(v,w,x,y,z){var aa={action:'disambiguation_imp',ids:y,name:v,path:x,type:w,typeahead_sid:z};p(aa);},logDisambiguationClick:function(v,w,x,y,z,aa){var ba={action:'disambiguation_clk',id:z,index:y,name:v,path:x,type:w,typeahead_sid:aa};p(ba);},logDYMLinkClick:function(v,w,x,y){var z={action:'dym_click',path:v.path||'unknown',referrer:v.referrer||'unknown',session_id:v.session_id||0,query_time:v.query_time,abtest_version:v.abtest_version||'NONE',abtest_params:v.abtest_params,typeahead_sid:v.typeahead_sid||'',type:v.experience_type||'unknown',click_action:x,sub_id:v.sub_id,owner_id:v.owner_id,browse_location:v.browse_location||'unknown',query_data:v.query_data||'unknown',module:v.module||'NONE',view:v.view,dym_confidence:v.dym_confidence||'NONE',dym_query:v.dym_query||'',dym_correction:v.dym_correction||'',dym_clicked:v.dym_clicked||''};p(z);}};f.exports=u;},null);
__d('BrowseClickLogger',['Event','BrowseLogger','BrowseClientEventLogger','collectDataAttributes','DOMQuery'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j,k){var l=j.target,m=c('collectDataAttributes')(l,['bt','ft','gt'],['data-bt-key']);if(m.bt&&m.bt.path)m.bt.path+=document.location.search;m.gt.click_type=m.ft.tn;c('BrowseClientEventLogger').logClick(m.gt);if(c('DOMQuery').scry(l,'^.recourse-link').length>0){if(k==='left_click')c('BrowseLogger').logDYMLinkClick(m.bt,m.ft,k,j);}else c('BrowseLogger').logResultClick(m.bt,m.ft,k,j,l.href,m.normal['data-bt-key']);}var i={init:function(j){c('Event').listen(j,'mousedown',function(k){var l=k.button===2||k.which===3?'right_click':'left_click';if(k.shiftKey)l+='_shift';if(k.altKey)l+='_alt';if(k.metaKey||k.ctrlKey)l+='_ctrl';h(k,l);}.bind(this));},logClick:h};f.exports=i;},null);
__d('BrowseMouseSpeedTracker',['Event','removeFromArray'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=50,i=null,j=null,k=[],l={x:0,y:0},m=0,n=[{x:0,y:0},{x:0,y:0}];function o(){n[m].x=l.x;n[m].y=l.y;m=(m+1)%2;}function p(){var v=n[0].x-n[1].x,w=n[0].y-n[1].y;return Math.sqrt(v*v+w*w)*(1000/h);}function q(){if(i)return;j=c('Event').listen(document.body,'mousemove',function(event){l.x=event.pageX||event.screenX;l.y=event.pageY||event.screenY;});i=window.setInterval(function(){o();s(p());},h);}function r(){if(i){window.clearInterval(i);j.remove();i=null;}}function s(v){k.forEach(function(w){if(v<w.velocity){w.callback(v);t(w);}});}function t(v){c('removeFromArray')(k,v);k.length||r();}var u={addTrigger:function(v,w){var x={velocity:v,callback:w};q();k.push(x);return {remove:t.bind(null,x)};}};f.exports=u;},null);
__d('BrowseRunOnLeave',['Run'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={register:function(i){c('Run').onLeave(i);this.handlers=(this.handlers||[]).concat(i);},cleanup:function(){this.handlers.forEach(function(i){return i.call(null,{});});this.handlers=[];}};f.exports=h;},null);
__d('BrowseMouse',['cx','Event','BrowseMouseSpeedTracker','CSS','DOM','DataStore','Parent','BrowseRunOnLeave','Toggler','removeFromArray'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=500,j="_3u0",k="_3u1",l=null,m=[];function n(v){return c('Parent').byClass(v,k);}function o(v){return 'browse-'+(v?'over':'out');}function p(v){return c('CSS').addClass(v,k);}function q(v,w,x,y){var z=n(w);if(!y)m.push({element:w,callback:x});if(z){var aa=o(v),ba=c('DataStore').get(z,aa,[]);c('DataStore').set(z,aa,ba.concat(x));return z;}}function r(v,w){if(v){c('CSS').conditionClass(v,j,w);var x=c('DataStore').get(v,o(w));x&&x.forEach(function(y){y();});}}function s(v){var w=v.element;['browse-over','browse-out'].forEach(function(x){var y=c('DataStore').get(w,x);if(y){c('removeFromArray')(y,v.callback);y.length||c('DataStore').remove(w,x);}});}function t(){var v=null;if(l)return;l=c('Event').listen(document.body,'mouseover',function(w){var x=n(w.getTarget());if(!x||x==v)return;var y=null,z=null,aa=false;v=x;var ba=c('BrowseMouseSpeedTracker').addTrigger(i,function(){r(x,true);aa=true;}),ca=function(){ba.remove();ea.remove();y&&y.remove();z&&z.unsubscribe();},da=function(){ca();aa&&r(x,false);v=null;},ea=c('Event').listen(x,'mouseleave',function(){var fa=c('Toggler').getActive();if(fa&&c('DOM').contains(x,fa)){z=c('Toggler').subscribe('hide',da);y=c('Event').listen(x,'mouseover',ca);}else da();});});c('BrowseRunOnLeave').register(function(){while(m.length)s(m.pop());});}var u={init:t,makeTarget:p,onMouseOver:q.bind(null,true),onMouseOut:q.bind(null,false),removeListeners:s};f.exports=u;},null);
__d('BrowsePerfLogger',['Arbiter','Banzai','collectDataAttributes','DOM','isEmpty','PageEvents'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='browse_perf',i='#browse:independent:modules:pagelet',j='#search_marker+empty:independent_module',k='pagelet_loader_browse:independent:modules:pagelet',l=false,m=false,n={init:function(o,p,q){if(!b.CavalryLogger||b.CavalryLogger.getInstance().lid!==q||!o)return;l=null;m=null;var r={is_quickling:p,pagelet_id:o};if(!p){Object.assign(r,{arbiter:c('Arbiter'),event:c('PageEvents').BIGPIPE_ONLOAD});this.setupOnloadHook(r);return;}c('Arbiter').subscribe('BigPipe/init',function(event,s){if(!s.arbiter)return;Object.assign(r,{arbiter:s.arbiter,event:c('PageEvents').AJAXPIPE_ONLOAD});setTimeout(function(){this.setupOnloadHook(r);}.bind(this),0);}.bind(this));},setTimeout:function(){m=true;},setupOnloadHook:function(o){return o.arbiter.subscribeOnce(o.event,function(p){if(l)return;l=true;var q=b.CavalryLogger.getInstance(),r=q.events[o.pagelet_id]||[],s=this.getNavStart(o.is_quickling),t=document.getElementById('initial_browse_result'),u=t===null?{}:c('collectDataAttributes')(t.children[0],['bt']).bt,v=q.values.t_tti-window._cstart,w=s?q.values.t_tti-s:0,x=!q.values.t_hooks||!q.values.t_onload||!q.values.t_tti||!s||!window._cstart,y=null;if(t===null){y='exception';}else if(m){y='timeout';}else if(c('isEmpty')(u))y='no_results';var z=c('DOM').scry(document,i).length&&c('DOM').scry(document,j).length,aa=null;if(!z&&c('DOM').scry(document,i).length&&q.events[k])aa=q.events[k].display;var ba=q.events.pagelet_loader_initial_browse_result?q.events.pagelet_loader_initial_browse_result.display:null,ca=aa?Math.min(aa,ba):ba,da={abnormal:x?1:null,arrive:r.arrive||0,browse_sid:u.session_id,css_done:r.css||0,display:r.display||0,experience_type:u.experience_type,failure:y,is_detailed:q.is_detailed_profiler?1:0,js_done:r.jsdone||0,js_start:r.jsstart||0,navigation_start:s,onload:q.values.t_onload||0,pagelet_id:o.pagelet_id,path:u.path,quickling:o.is_quickling?1:0,raw_tti:q.values.t_tti,result_type:u.result_type,tti:Math.floor(v),tti_full:Math.floor(w),typeahead_sid:u.typeahead_sid,window_cstart:window._cstart,empty_independent_module:z?1:0,independent_module_tti:Math.floor(aa),browse_result_tti:Math.floor(ba),top_module_tti:Math.floor(ca)},ea=window.performance||window.msPerformance;if(!o.is_quickling&&ea.timing){ea=ea.timing;Object.assign(da,{wt_connect_end:ea.connectEnd,wt_connect_start:ea.connectStart,wt_domain_lookup_end:ea.domainLookupEnd,wt_domain_lookup_start:ea.domainLookupStart,wt_load_event_start:ea.loadEventStart,wt_navigation_start:ea.navigationStart,wt_request_start:ea.requestStart,wt_response_end:ea.responseEnd,wt_response_start:ea.responseStart});}c('Banzai').post(h,da,{delay:0,retry:true});}.bind(this));},getNavStart:function(o){if(o)return window.ExitTime;var p=window.performance||window.msPerformance;if(!p||!p.timing)return;return p.timing.navigationStart;}};f.exports=n;},null);
__d('BrowseViewportTracking',['csx','DOM','$','Arbiter','BrowseClientEventLogger','StreamViewportTracking'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k,l;i=babelHelpers.inherits(m,c('StreamViewportTracking'));j=i&&i.prototype;m.prototype.initSubscriptions=function(){'use strict';this.subscriptions.addSubscriptions(c('Arbiter').subscribe('BrowseScrollingPageletLoaded',function(){return this.updateOnPageletLoad();}.bind(this)));};m.prototype.updateOnPageletLoad=function(){'use strict';this.invalidateAllStoriesCache();this.updateTimeTrackingData(false,'pagelet_load');};m.prototype.getAllStories=function(){'use strict';var n=c('DOM').scry(this.getStream(),"._401d");return n;};m.prototype.getStream=function(){'use strict';if(!l)l=c('$')('initial_browse_result');return l;};m.prototype.getStoryID=function(n){'use strict';var o=JSON.parse(n.getAttribute('data-gt'));if(o&&o.xt)return String(JSON.parse(o.xt.substring(3)).raw_id);return null;};m.prototype.getTimetrackingDataToLog=function(n){'use strict';var o=j.getTimetrackingDataToLog.call(this,n);if(!n.story)return o;o.log_type='vpvd';var p=JSON.parse(n.story.getAttribute('data-gt'));if(!p)return o;o.xt=p.xt;return o;};m.prototype.sendDataToLog=function(n,o,p,q){'use strict';if(!o.xt)return;if(o.log_type='vpvd'){o.event='vpvd';c('BrowseClientEventLogger').maybeLogVisiblityEvent(o);}};m.prototype.getDataFromConfig=function(n){'use strict';this.timeout=n.record_delay;this.isTimetrackingEnabled=n.is_timetracking_enabled;this.vpvdDebug=n.vpvd_debug;};m.prototype.getTimeout=function(){'use strict';return this.timeout;};m.prototype.cleanup=function(){'use strict';k=null;j.cleanup.call(this);};function m(){'use strict';i.apply(this,arguments);}f.exports={getInstance:function(){return k;},init:function(n){if(k)return;k=new m();k.init(n);}};},null);
__d('LinkshimWarning',['AsyncRequest','Event'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={initWarningContinue:function(i,j,k){c('Event').listen(i,'click',function(){var l={l:j,a:0,p:k};new (c('AsyncRequest'))().setURI('/si/ajax/l/linkshim_warning_click/').setData(l).setOption('asynchronous_DEPRECATED',false).send();window.location=j;return false;});},initWarningReturn:function(i,j,k){c('Event').listen(i,'click',function(){var l={l:j,a:1,p:k};new (c('AsyncRequest'))().setURI('/si/ajax/l/linkshim_warning_click/').setData(l).setOption('asynchronous_DEPRECATED',false).send();window.location='/';return false;});}};f.exports=h;},null);
__d('XUINotice',['invariant','Event'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k){this._root=j;this._closeButton=k;}Object.assign(i.prototype,{getRoot:function(){return this._root;},isDismissable:function(){return !!this._closeButton;},setDismissHandler:function(j){!this.isDismissable()?h(0):void 0;this.removeDismissHandler();this._listener=c('Event').listen(this._closeButton,'click',j);},removeDismissHandler:function(){this._listener&&this._listener.remove();this._listener=null;},destroy:function(){this.removeDismissHandler();this._root=null;this._closeButton=null;}});f.exports=i;},null);