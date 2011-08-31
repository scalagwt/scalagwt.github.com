defineSeed(310, 1, makeCastMap([Q$ShowcaseConstants]));
_.cwHorizontalPanelButton = function cwHorizontalPanelButton(){
  return 'Button';
}
;
function $onInitialize_18(this$static){
  var hPanel$1;
  hPanel$1 = new HorizontalPanel_0;
  $setSpacing(hPanel$1, 5);
  $foreach$mVc$sp($until_0($intWrapper(($clinit_Predef$() , MODULE$_11 , 1)), 5), new CwHorizontalPanel$$anonfun$onInitialize$1_0(this$static, hPanel$1));
  $ensureDebugId(hPanel$1, 'cwHorizontalPanel');
  return hPanel$1;
}

defineSeed(455, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_19(){
  this.callback$1.onSuccess_0($onInitialize_18(this.$outer$u0020));
}
;
function $$init_355(){
}

function $apply$mcVI$sp_1(this$static, v1){
  $add_11(this$static.hPanel$1, new Button_1(this$static.$outer$u0020.com$google$gwt$sample$showcase$client$content$panels$CwHorizontalPanel$$constants.cwHorizontalPanelButton() + ' ' + boxToInteger(v1)));
}

function $apply_52(this$static, i){
  $apply$mcVI$sp_1(this$static, i);
}

function CwHorizontalPanel$$anonfun$onInitialize$1_0($outer, hPanel$1){
  $$init_355();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.hPanel$1 = hPanel$1;
  AbstractFunction1$mcVI$sp_0.call(this);
}

defineSeed(456, 442, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwHorizontalPanel$$anonfun$onInitialize$1_0);
_.apply$mcVI$sp = function apply$mcVI$sp_2(v1){
  $apply$mcVI$sp_1(this, v1);
}
;
_.apply_2 = function apply_57(i){
  $apply_52(this, i);
}
;
_.apply_0 = function apply_58(v1){
  $apply_52(this, unboxToInt(v1));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.$outer$u0020 = null;
_.hPanel$1 = null;
var Lcom_google_gwt_sample_showcase_client_content_panels_CwHorizontalPanel$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.panels.', 'CwHorizontalPanel$$anonfun$onInitialize$1', 456, Lscala_runtime_AbstractFunction1$mcVI$sp_2_classLit);
$entry(onLoad)(18);
