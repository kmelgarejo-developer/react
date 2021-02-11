"use strict";var __extends=this&&this.__extends||function(){var e=function(a,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var t in a)a.hasOwnProperty(t)&&(e[t]=a[t])})(a,t)};return function(a,t){function __(){this.constructor=a}e(a,t),a.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),react_redux_1=require("react-redux"),I18nService_1=require("sabre-ngv-app/app/services/impl/I18nService"),Context_1=require("../../Context"),OpcionTarificar_1=require("./tabbar/OpcionTarificar"),ResultadoTarificar_1=require("./tabbar/ResultadoTarificar"),Pasajero_1=require("./tabbar/Pasajero"),i18n=Context_1.getService(I18nService_1.I18nService),t=i18n.getScopedTranslator("com-cocha-sabre-redapp-posapp-web-module/translations"),Component=function(e){function Component(){return null!==e&&e.apply(this,arguments)||this}return __extends(Component,e),Component.prototype.componentDidMount=function(){$(".navigation.tab-custom-pad > ul.nav > li").click(function(e){var a=-1;if($(this).children().length>1)for(var t=$(this).children()[1].children,c=0;c<t.length;c++){var i=t[c];$(i).hasClass("active")&&(a=c)}a>=0?$("#tarificacion.nav-pills").children().removeClass("active"):$(".nav-pills").children().removeClass("active")})},Component.prototype.render=function(){return React.createElement("div",{className:"com-cocha-sabre-redapp-posapp-web-module"},React.createElement("div",{className:"sample-form-container"},React.createElement("div",{className:"popover-wrapper"},React.createElement("div",{className:"navigation tab-custom-pad",style:{maxHeight:"427px"}},React.createElement("ul",{className:"nav nav-pills tabs-left tabs-air"},React.createElement("li",{className:"active"},React.createElement("a",{href:"#perfiles","data-toggle":"tab",className:"tab","aria-expanded":"true"},"Perfiles")),React.createElement("li",{className:""},React.createElement("a",{href:"#tarificacion","data-toggle":"collapse",className:"tab","aria-expanded":"false"},"Tarificación ",React.createElement("i",{className:"fas fa-caret-down"})),React.createElement("ul",{id:"tarificacion",className:"custom-sidebar-ul collapse nav nav-pills tabs-left tabs-air"},React.createElement("li",{className:"custom-sidebar-li custom-sidebar-li-min"},React.createElement("a",{href:"#OpcionTarificacion","data-toggle":"tab","aria-expanded":"true",className:"tab"},"Opciones de Tarificación")),React.createElement("li",{className:"custom-sidebar-li custom-sidebar-li-min"},React.createElement("a",{href:"#ResultadoTarificacion","data-toggle":"tab","aria-expanded":"true",className:"tab"},"Resultados de Tarificación")),React.createElement("li",{className:"custom-sidebar-li custom-sidebar-li-min"},React.createElement("a",{href:"#Pasajeros","data-toggle":"tab","aria-expanded":"true",className:"tab"},"Pasajeros")))),React.createElement("li",{className:""},React.createElement("a",{href:"#ingresoFD","data-toggle":"tab",className:"tab","aria-expanded":"false"},"FOID-DOCS")),React.createElement("li",{className:""},React.createElement("a",{href:"#OtrosDatosPax","data-toggle":"tab",className:"tab","aria-expanded":"false"},"Otros Datos Pax")),React.createElement("li",{className:""},React.createElement("a",{href:"#cotizacionSimple","data-toggle":"tab",className:"tab","aria-expanded":"false"},"Cotización Simple")),React.createElement("li",{className:""},React.createElement("a",{href:"#cotizacionMultiple","data-toggle":"tab",className:"tab","aria-expanded":"false"},"Cotización Multiple")),React.createElement("li",{className:""},React.createElement("a",{href:"#mapaAsiento","data-toggle":"tab",className:"tab","aria-expanded":"false"},"Mapa Asiento")),React.createElement("li",{className:""},React.createElement("a",{href:"#remision","data-toggle":"tab",className:"tab","aria-expanded":"false"},"Remision")),React.createElement("li",{className:""},React.createElement("a",{href:"#cambiosInvoluntarios","data-toggle":"tab",className:"tab","aria-expanded":"false"},"Cambios Involuntarios")),React.createElement("li",{className:""},React.createElement("a",{href:"#validacionItinerarios","data-toggle":"tab",className:"tab","aria-expanded":"false"},"Validacion Itinerarios")))),React.createElement("div",{className:"content content-scroll",style:{maxHeight:"427px"}},React.createElement("div",{className:"tab-content",style:{overflowX:"hidden",height:"100%",fontSize:"12.5px"}},React.createElement("div",{className:"active tab-pane perfiles",id:"perfiles"},"Perfiles"),React.createElement("div",{className:" tab-pane tarificacion",id:"OpcionTarificacion"},React.createElement(OpcionTarificar_1.OpcionTarificar,null)),React.createElement("div",{className:" tab-pane tarificacion",id:"ResultadoTarificacion"},React.createElement(ResultadoTarificar_1.ResultadoTarificar,null)),React.createElement("div",{className:" tab-pane tarificacion",id:"Pasajeros"},React.createElement(Pasajero_1.Pasajero,null)),React.createElement("div",{className:" tab-pane ingresoFD",id:"ingresoFD"},"FOID-DOCS"),React.createElement("div",{className:" tab-pane tabOtrosDatosPax",id:"tabOtrosDatosPax"},"Otros Datos Pax"),React.createElement("div",{className:" tab-pane cotizacionSimple",id:"cotizacionSimple"},"Cotización Simple"),React.createElement("div",{className:" tab-pane cotizacionMultiple",id:"cotizacionMultiple"},"Cotización Multiple"),React.createElement("div",{className:" tab-pane mapaAsiento",id:"mapaAsiento"},"Mapa Asiento"),React.createElement("div",{className:" tab-pane remision",id:"remision"},"Remision"),React.createElement("div",{className:" tab-pane cambiosInvoluntarios",id:"cambiosInvoluntarios"},"Cambios Involuntarios"),React.createElement("div",{className:" tab-pane validacionItinerarios",id:"validacionItinerarios"},"Validacion Itinerarios")))),React.createElement("div",{className:"buttons-container"},React.createElement("div",{className:"row"},React.createElement("div",{className:"right-buttons"},React.createElement("button",{className:"cancel-button js_form-cancel btn btn-outline btn-success",onClick:this.props.handleCancel},"Cancel"),React.createElement("button",{type:"submit",className:"search-button js_form-submit btn btn-success"},"Submit"))))))},Component}(React.Component);exports.Component=Component;var mapStateToProps=function(e){return e},mapDispatchToProps=function(e,a){return{handleChange:function(a){return e({type:"update",id:a.target.id,value:a.target.value})},handleSubmit:function(a){return a.preventDefault(),e({type:"submit",id:""})},handleCancel:function(a){return a.preventDefault(),e({type:"cancel",id:""})}}};exports.App=react_redux_1.connect(mapStateToProps,mapDispatchToProps)(Component);