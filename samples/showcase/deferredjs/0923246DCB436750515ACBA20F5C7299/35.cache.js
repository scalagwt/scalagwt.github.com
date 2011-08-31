defineSeed(395, 1, makeCastMap([Q$ShowcaseConstants]));
_.cwAnimationCancel = function cwAnimationCancel(){
  return 'Cancel';
}
;
_.cwAnimationOptions = function cwAnimationOptions(){
  return 'Animation Options';
}
;
_.cwAnimationStart = function cwAnimationStart(){
  return 'Start';
}
;
function $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$absolutePanel(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$other$CwAnimation$$absolutePanel$u0020;
}

function $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$absolutePanel_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$other$CwAnimation$$absolutePanel$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeBottom(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeBottom$u0020;
}

function $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeBottom_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeBottom$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeLeft(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeLeft$u0020;
}

function $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeLeft_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeLeft$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeRight(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeRight$u0020;
}

function $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeRight_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeRight$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeTop(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeTop$u0020;
}

function $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeTop_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeTop$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animation(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animation$u0020;
}

function $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animation_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animation$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$cancelButton(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$other$CwAnimation$$cancelButton$u0020;
}

function $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$cancelButton_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$other$CwAnimation$$cancelButton$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$startButton(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$other$CwAnimation$$startButton$u0020;
}

function $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$startButton_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$other$CwAnimation$$startButton$u0020 = x$1;
}

function $createOptionsBar(this$static){
  var optionsBar;
  optionsBar = new VerticalPanel_0;
  $setSpacing(optionsBar, 5);
  $setHorizontalAlignment_1(optionsBar, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $add_16(optionsBar, new HTML_1('<b>' + this$static.constants.cwAnimationOptions() + '<\/b>'));
  $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$startButton_$eq(this$static, new Button_1(this$static.constants.cwAnimationStart()));
  $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$startButton(this$static).addStyleName('sc-FixedWidthButton');
  $onClick(($clinit_Handlers$() , MODULE$_3).enrichHasClickHandlers($com$google$gwt$sample$showcase$client$content$other$CwAnimation$$startButton(this$static)), new CwAnimation$$anonfun$createOptionsBar$1_0(this$static));
  $add_16(optionsBar, $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$startButton(this$static));
  $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$cancelButton_$eq(this$static, new Button_1(this$static.constants.cwAnimationCancel()));
  $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$cancelButton(this$static).addStyleName('sc-FixedWidthButton');
  $onClick(($clinit_Handlers$() , MODULE$_3).enrichHasClickHandlers($com$google$gwt$sample$showcase$client$content$other$CwAnimation$$cancelButton(this$static)), new CwAnimation$$anonfun$createOptionsBar$2_0(this$static));
  $add_16(optionsBar, $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$cancelButton(this$static));
  return optionsBar;
}

function $onInitialize_11(this$static){
  var absolutePanelWrapper, mainLayout, optionsWrapper;
  $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$absolutePanel_$eq(this$static, new AbsolutePanel_0);
  $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$absolutePanel(this$static).setSize('250px', '250px');
  $ensureDebugId($com$google$gwt$sample$showcase$client$content$other$CwAnimation$$absolutePanel(this$static), 'cwAbsolutePanel');
  $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeTop_$eq(this$static, new Image_1($images(($clinit_Showcase$() , MODULE$_4)).gwtLogoThumb()));
  $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeBottom_$eq(this$static, new Image_1($images(($clinit_Showcase$() , MODULE$_4)).gwtLogoThumb()));
  $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeLeft_$eq(this$static, new Image_1($images(($clinit_Showcase$() , MODULE$_4)).gwtLogoThumb()));
  $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeRight_$eq(this$static, new Image_1($images(($clinit_Showcase$() , MODULE$_4)).gwtLogoThumb()));
  $add_4($com$google$gwt$sample$showcase$client$content$other$CwAnimation$$absolutePanel(this$static), $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeTop(this$static));
  $add_4($com$google$gwt$sample$showcase$client$content$other$CwAnimation$$absolutePanel(this$static), $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeBottom(this$static));
  $add_4($com$google$gwt$sample$showcase$client$content$other$CwAnimation$$absolutePanel(this$static), $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeLeft(this$static));
  $add_4($com$google$gwt$sample$showcase$client$content$other$CwAnimation$$absolutePanel(this$static), $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeRight(this$static));
  absolutePanelWrapper = new DecoratorPanel_0;
  absolutePanelWrapper.setWidget($com$google$gwt$sample$showcase$client$content$other$CwAnimation$$absolutePanel(this$static));
  optionsWrapper = new DecoratorPanel_0;
  optionsWrapper.setWidget($createOptionsBar(this$static));
  mainLayout = new HorizontalPanel_0;
  $setSpacing(mainLayout, 10);
  $add_11(mainLayout, optionsWrapper);
  $add_11(mainLayout, absolutePanelWrapper);
  $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animation_$eq(this$static, new CwAnimation$CustomAnimation_0(this$static));
  return mainLayout;
}

defineSeed(509, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_12(){
  this.callback$1.onSuccess_0($onInitialize_11(this.$outer$u0020));
}
;
function $$init_406(){
}

function $apply_42(this$static){
  $run($com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animation(this$static.$outer$u0020), 2000);
}

function CwAnimation$$anonfun$createOptionsBar$1_0($outer){
  $$init_406();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  AbstractFunction1_0.call(this);
}

defineSeed(510, 352, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwAnimation$$anonfun$createOptionsBar$1_0);
_.apply_0 = function apply_43(v1){
  $apply_42(this, dynamicCast(v1, Q$ClickEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.$outer$u0020 = null;
function $$init_407(){
}

function $apply_43(this$static){
  $cancel($com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animation(this$static.$outer$u0020));
}

function CwAnimation$$anonfun$createOptionsBar$2_0($outer){
  $$init_407();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  AbstractFunction1_0.call(this);
}

defineSeed(511, 352, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwAnimation$$anonfun$createOptionsBar$2_0);
_.apply_0 = function apply_44(v1){
  $apply_43(this, dynamicCast(v1, Q$ClickEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.$outer$u0020 = null;
function $$init_408(){
}

function $centerX(this$static){
  return this$static.centerX$u0020;
}

function $centerY(this$static){
  return this$static.centerY$u0020;
}

function $com$google$gwt$sample$showcase$client$content$other$CwAnimation$CustomAnimation$$$outer(this$static){
  return this$static.$outer$u0020;
}

function $onComplete_0(this$static){
  $onComplete(this$static);
  $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$startButton($com$google$gwt$sample$showcase$client$content$other$CwAnimation$CustomAnimation$$$outer(this$static)).setEnabled(true);
  $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$cancelButton($com$google$gwt$sample$showcase$client$content$other$CwAnimation$CustomAnimation$$$outer(this$static)).setEnabled(false);
}

function $radius(this$static){
  return this$static.radius$u0020;
}

function $updatePosition(this$static, w, _radian, offset){
  var radian, x, y;
  radian = _radian + offset;
  x = round_int($radius(this$static) * cos(radian) + $centerX(this$static));
  y = round_int($radius(this$static) * sin(radian) + $centerY(this$static));
  $setWidgetPosition($com$google$gwt$sample$showcase$client$content$other$CwAnimation$$absolutePanel($com$google$gwt$sample$showcase$client$content$other$CwAnimation$CustomAnimation$$$outer(this$static)), w, x, y);
}

function CwAnimation$CustomAnimation_0($outer){
  $$init_408();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Animation_0.call(this);
  this.centerX$u0020 = 120;
  this.centerY$u0020 = 120;
  this.radius$u0020 = 100;
  $onComplete_0(this);
}

defineSeed(512, 3, makeCastMap([Q$ScalaObject]), CwAnimation$CustomAnimation_0);
_.onComplete = function onComplete_0(){
  $onComplete_0(this);
}
;
_.onStart = function onStart_0(){
  $onStart(this);
  $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$startButton($com$google$gwt$sample$showcase$client$content$other$CwAnimation$CustomAnimation$$$outer(this)).setEnabled(false);
  $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$cancelButton($com$google$gwt$sample$showcase$client$content$other$CwAnimation$CustomAnimation$$$outer(this)).setEnabled(true);
}
;
_.onUpdate = function onUpdate(progress){
  var radian;
  radian = 6.283185307179586 * progress;
  $updatePosition(this, $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeLeft($com$google$gwt$sample$showcase$client$content$other$CwAnimation$CustomAnimation$$$outer(this)), radian, 0);
  $updatePosition(this, $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeBottom($com$google$gwt$sample$showcase$client$content$other$CwAnimation$CustomAnimation$$$outer(this)), radian, 1.5707963267948966);
  $updatePosition(this, $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeRight($com$google$gwt$sample$showcase$client$content$other$CwAnimation$CustomAnimation$$$outer(this)), radian, 3.141592653589793);
  $updatePosition(this, $com$google$gwt$sample$showcase$client$content$other$CwAnimation$$animateeTop($com$google$gwt$sample$showcase$client$content$other$CwAnimation$CustomAnimation$$$outer(this)), radian, 4.71238898038469);
}
;
_.$outer$u0020 = null;
_.centerX$u0020 = 0;
_.centerY$u0020 = 0;
_.radius$u0020 = 0;
function sin(x){
  return Math.sin(x);
}

var Lcom_google_gwt_sample_showcase_client_content_other_CwAnimation$CustomAnimation_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.other.', 'CwAnimation$CustomAnimation', 512, Lcom_google_gwt_animation_client_Animation_2_classLit), Lcom_google_gwt_sample_showcase_client_content_other_CwAnimation$$anonfun$createOptionsBar$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.other.', 'CwAnimation$$anonfun$createOptionsBar$1', 510, Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_other_CwAnimation$$anonfun$createOptionsBar$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.other.', 'CwAnimation$$anonfun$createOptionsBar$2', 511, Lscala_runtime_AbstractFunction1_2_classLit);
$entry(onLoad)(35);
