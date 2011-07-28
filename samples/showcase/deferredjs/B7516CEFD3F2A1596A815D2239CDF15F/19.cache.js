_ = ShowcaseConstants_.prototype;
_.cwVerticalPanelButton = function cwVerticalPanelButton(){
  return 'Button';
}
;
function $onInitialize_21(this$static){
  var vPanel$1;
  vPanel$1 = new VerticalPanel_0;
  $setSpacing(vPanel$1, 5);
  $foreach($until_0($intWrapper(($clinit_Predef$() , MODULE$_12 , 1)), 10), new CwVerticalPanel$$anonfun$onInitialize$1_0(this$static, vPanel$1));
  $ensureDebugId(vPanel$1, 'cwVerticalPanel');
  return vPanel$1;
}

_ = CwVerticalPanel$$anon$1.prototype;
_.onSuccess = function onSuccess_22(){
  this.callback$1.onSuccess_0($onInitialize_21(this.$outer$u0020));
}
;
function $$init_429(){
}

function $apply_51(this$static, i){
  $add_16(this$static.vPanel$1, new Button_1(this$static.$outer$u0020.com$google$gwt$sample$showcase$client$content$panels$CwVerticalPanel$$constants.cwVerticalPanelButton() + ' ' + boxToInteger(i)));
}

function CwVerticalPanel$$anonfun$onInitialize$1_0($outer, vPanel$1){
  $$init_429();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.vPanel$1 = vPanel$1;
  AbstractFunction1_0.call(this);
}

function CwVerticalPanel$$anonfun$onInitialize$1(){
}

_ = CwVerticalPanel$$anonfun$onInitialize$1_0.prototype = CwVerticalPanel$$anonfun$onInitialize$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_52(v1){
  $apply_51(this, unboxToInt(v1));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_430(){
  return Lcom_google_gwt_sample_showcase_client_content_panels_CwVerticalPanel$$anonfun$onInitialize$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.$outer$u0020 = null;
_.vPanel$1 = null;
var Lcom_google_gwt_sample_showcase_client_content_panels_CwVerticalPanel$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.panels.', 'CwVerticalPanel$$anonfun$onInitialize$1', 'CwVerticalPanel$$anonfun$onInitialize$1', Lscala_runtime_AbstractFunction1_2_classLit);
$entry(onLoad)(19);
