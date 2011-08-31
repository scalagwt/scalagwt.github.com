defineSeed(311, 1, makeCastMap([Q$ShowcaseConstants]));
_.cwFlowPanelItem = function cwFlowPanelItem(){
  return 'Item';
}
;
function $onInitialize_17(this$static){
  var flowPanel$1;
  flowPanel$1 = new FlowPanel_0;
  $ensureDebugId(flowPanel$1, 'cwFlowPanel');
  $foreach$mVc$sp($until_0($intWrapper(($clinit_Predef$() , MODULE$_11 , 0)), 30), new CwFlowPanel$$anonfun$onInitialize$1_0(this$static, flowPanel$1));
  return flowPanel$1;
}

defineSeed(453, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_18(){
  this.callback$1.onSuccess_0($onInitialize_17(this.$outer$u0020));
}
;
function $$init_350(){
}

function $apply$mcVI$sp_0(this$static, v1){
  var checkbox;
  checkbox = new CheckBox_2(this$static.$outer$u0020.com$google$gwt$sample$showcase$client$content$panels$CwFlowPanel$$constants.cwFlowPanelItem() + ' ' + boxToInteger(v1));
  checkbox.addStyleName('cw-FlowPanel-checkBox');
  $add_10(this$static.flowPanel$1, checkbox);
}

function $apply_51(this$static, i){
  $apply$mcVI$sp_0(this$static, i);
}

function CwFlowPanel$$anonfun$onInitialize$1_0($outer, flowPanel$1){
  $$init_350();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.flowPanel$1 = flowPanel$1;
  AbstractFunction1$mcVI$sp_0.call(this);
}

defineSeed(454, 443, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwFlowPanel$$anonfun$onInitialize$1_0);
_.apply$mcVI$sp = function apply$mcVI$sp_1(v1){
  $apply$mcVI$sp_0(this, v1);
}
;
_.apply_2 = function apply_55(i){
  $apply_51(this, i);
}
;
_.apply_0 = function apply_56(v1){
  $apply_51(this, unboxToInt(v1));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.$outer$u0020 = null;
_.flowPanel$1 = null;
var Lcom_google_gwt_sample_showcase_client_content_panels_CwFlowPanel$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.panels.', 'CwFlowPanel$$anonfun$onInitialize$1', 454, Lscala_runtime_AbstractFunction1$mcVI$sp_2_classLit);
$entry(onLoad)(17);
