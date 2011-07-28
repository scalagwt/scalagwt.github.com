_ = ShowcaseConstants_.prototype;
_.cwFlowPanelItem = function cwFlowPanelItem(){
  return 'Item';
}
;
function $onInitialize_17(this$static){
  var flowPanel$1;
  flowPanel$1 = new FlowPanel_0;
  $ensureDebugId(flowPanel$1, 'cwFlowPanel');
  $foreach($until_0($intWrapper(($clinit_Predef$() , MODULE$_12 , 0)), 30), new CwFlowPanel$$anonfun$onInitialize$1_0(this$static, flowPanel$1));
  return flowPanel$1;
}

_ = CwFlowPanel$$anon$1.prototype;
_.onSuccess = function onSuccess_18(){
  this.callback$1.onSuccess_0($onInitialize_17(this.$outer$u0020));
}
;
function $$init_418(){
}

function $apply_48(this$static, i){
  var checkbox;
  checkbox = new CheckBox_2(this$static.$outer$u0020.com$google$gwt$sample$showcase$client$content$panels$CwFlowPanel$$constants.cwFlowPanelItem() + ' ' + boxToInteger(i));
  checkbox.addStyleName('cw-FlowPanel-checkBox');
  $add_10(this$static.flowPanel$1, checkbox);
}

function CwFlowPanel$$anonfun$onInitialize$1_0($outer, flowPanel$1){
  $$init_418();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.flowPanel$1 = flowPanel$1;
  AbstractFunction1_0.call(this);
}

function CwFlowPanel$$anonfun$onInitialize$1(){
}

_ = CwFlowPanel$$anonfun$onInitialize$1_0.prototype = CwFlowPanel$$anonfun$onInitialize$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_49(v1){
  $apply_48(this, unboxToInt(v1));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_419(){
  return Lcom_google_gwt_sample_showcase_client_content_panels_CwFlowPanel$$anonfun$onInitialize$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.$outer$u0020 = null;
_.flowPanel$1 = null;
var Lcom_google_gwt_sample_showcase_client_content_panels_CwFlowPanel$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.panels.', 'CwFlowPanel$$anonfun$onInitialize$1', 'CwFlowPanel$$anonfun$onInitialize$1', Lscala_runtime_AbstractFunction1_2_classLit);
$entry(onLoad)(17);
