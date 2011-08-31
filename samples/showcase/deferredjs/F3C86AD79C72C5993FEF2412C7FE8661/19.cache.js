defineSeed(310, 1, makeCastMap([Q$ShowcaseConstants]));
_.cwVerticalPanelButton = function cwVerticalPanelButton(){
  return 'Button';
}
;
function $onInitialize_21(this$static){
  var vPanel$1;
  vPanel$1 = new VerticalPanel_0;
  $setSpacing(vPanel$1, 5);
  $foreach$mVc$sp($until_0($intWrapper(($clinit_Predef$() , MODULE$_11 , 1)), 10), new CwVerticalPanel$$anonfun$onInitialize$1_0(this$static, vPanel$1));
  $ensureDebugId(vPanel$1, 'cwVerticalPanel');
  return vPanel$1;
}

defineSeed(463, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_22(){
  this.callback$1.onSuccess_0($onInitialize_21(this.$outer$u0020));
}
;
function $$init_363(){
}

function $apply$mcVI$sp_3(this$static, v1){
  $add_16(this$static.vPanel$1, new Button_1(this$static.$outer$u0020.com$google$gwt$sample$showcase$client$content$panels$CwVerticalPanel$$constants.cwVerticalPanelButton() + ' ' + boxToInteger(v1)));
}

function $apply_54(this$static, i){
  $apply$mcVI$sp_3(this$static, i);
}

function CwVerticalPanel$$anonfun$onInitialize$1_0($outer, vPanel$1){
  $$init_363();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.vPanel$1 = vPanel$1;
  AbstractFunction1$mcVI$sp_0.call(this);
}

defineSeed(464, 442, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwVerticalPanel$$anonfun$onInitialize$1_0);
_.apply$mcVI$sp = function apply$mcVI$sp_4(v1){
  $apply$mcVI$sp_3(this, v1);
}
;
_.apply_2 = function apply_61(i){
  $apply_54(this, i);
}
;
_.apply_0 = function apply_62(v1){
  $apply_54(this, unboxToInt(v1));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.$outer$u0020 = null;
_.vPanel$1 = null;
var Lcom_google_gwt_sample_showcase_client_content_panels_CwVerticalPanel$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.panels.', 'CwVerticalPanel$$anonfun$onInitialize$1', 464, Lscala_runtime_AbstractFunction1$mcVI$sp_2_classLit);
$entry(onLoad)(19);
