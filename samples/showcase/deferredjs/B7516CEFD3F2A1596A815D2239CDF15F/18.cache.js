_ = ShowcaseConstants_.prototype;
_.cwHorizontalPanelButton = function cwHorizontalPanelButton(){
  return 'Button';
}
;
function $onInitialize_18(this$static){
  var hPanel$1;
  hPanel$1 = new HorizontalPanel_0;
  $setSpacing(hPanel$1, 5);
  $foreach($until_0($intWrapper(($clinit_Predef$() , MODULE$_12 , 1)), 5), new CwHorizontalPanel$$anonfun$onInitialize$1_0(this$static, hPanel$1));
  $ensureDebugId(hPanel$1, 'cwHorizontalPanel');
  return hPanel$1;
}

_ = CwHorizontalPanel$$anon$1.prototype;
_.onSuccess = function onSuccess_19(){
  this.callback$1.onSuccess_0($onInitialize_18(this.$outer$u0020));
}
;
function $$init_421(){
}

function $apply_49(this$static, i){
  $add_11(this$static.hPanel$1, new Button_1(this$static.$outer$u0020.com$google$gwt$sample$showcase$client$content$panels$CwHorizontalPanel$$constants.cwHorizontalPanelButton() + ' ' + boxToInteger(i)));
}

function CwHorizontalPanel$$anonfun$onInitialize$1_0($outer, hPanel$1){
  $$init_421();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.hPanel$1 = hPanel$1;
  AbstractFunction1_0.call(this);
}

function CwHorizontalPanel$$anonfun$onInitialize$1(){
}

_ = CwHorizontalPanel$$anonfun$onInitialize$1_0.prototype = CwHorizontalPanel$$anonfun$onInitialize$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_50(v1){
  $apply_49(this, unboxToInt(v1));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_422(){
  return Lcom_google_gwt_sample_showcase_client_content_panels_CwHorizontalPanel$$anonfun$onInitialize$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.$outer$u0020 = null;
_.hPanel$1 = null;
var Lcom_google_gwt_sample_showcase_client_content_panels_CwHorizontalPanel$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.panels.', 'CwHorizontalPanel$$anonfun$onInitialize$1', 'CwHorizontalPanel$$anonfun$onInitialize$1', Lscala_runtime_AbstractFunction1_2_classLit);
$entry(onLoad)(18);
