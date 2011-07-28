_ = ShowcaseConstants_.prototype;
_.cwBasicButtonClickMessage = function cwBasicButtonClickMessage(){
  return 'Stop poking me!';
}
;
_.cwBasicButtonDisabled = function cwBasicButtonDisabled(){
  return 'Disabled Button';
}
;
_.cwBasicButtonNormal = function cwBasicButtonNormal(){
  return 'Normal Button';
}
;
function $onInitialize_29(this$static){
  var disabledButton, hPanel, normalButton;
  hPanel = new HorizontalPanel_0;
  $setSpacing(hPanel, 10);
  normalButton = new Button_2(this$static.com$google$gwt$sample$showcase$client$content$widgets$CwBasicButton$$constants.cwBasicButtonNormal(), ($clinit_Handlers$() , MODULE$_2).fn2clickHandler(new CwBasicButton$$anonfun$1_0(this$static)));
  $ensureDebugId(normalButton, 'cwBasicButton-normal');
  $add_11(hPanel, normalButton);
  disabledButton = new Button_1(this$static.com$google$gwt$sample$showcase$client$content$widgets$CwBasicButton$$constants.cwBasicButtonDisabled());
  $ensureDebugId(disabledButton, 'cwBasicButton-disabled');
  disabledButton.setEnabled(false);
  $add_11(hPanel, disabledButton);
  return hPanel;
}

_ = CwBasicButton$$anon$1.prototype;
_.onSuccess = function onSuccess_30(){
  this.callback$1.onSuccess_0($onInitialize_29(this.$outer$u0020));
}
;
function $$init_461(){
}

function $apply_65(this$static){
  alert_0(this$static.$outer$u0020.com$google$gwt$sample$showcase$client$content$widgets$CwBasicButton$$constants.cwBasicButtonClickMessage());
}

function CwBasicButton$$anonfun$1_0($outer){
  $$init_461();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  AbstractFunction1_0.call(this);
}

function CwBasicButton$$anonfun$1(){
}

_ = CwBasicButton$$anonfun$1_0.prototype = CwBasicButton$$anonfun$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_66(v1){
  $apply_65(this, dynamicCast(v1, Q$ClickEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_462(){
  return Lcom_google_gwt_sample_showcase_client_content_widgets_CwBasicButton$$anonfun$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.$outer$u0020 = null;
var Lcom_google_gwt_sample_showcase_client_content_widgets_CwBasicButton$$anonfun$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.widgets.', 'CwBasicButton$$anonfun$1', 'CwBasicButton$$anonfun$1', Lscala_runtime_AbstractFunction1_2_classLit);
$entry(onLoad)(2);
