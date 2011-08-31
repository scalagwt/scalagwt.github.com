defineSeed(395, 1, makeCastMap([Q$ShowcaseConstants]));
_.cwCustomButtonPush = function cwCustomButtonPush(){
  return '<b>Push Buttons:<\/b>';
}
;
_.cwCustomButtonToggle = function cwCustomButtonToggle(){
  return '<b>Toggle Buttons:<\/b>';
}
;
function $onInitialize_31(this$static){
  var disabledPushButton, disabledToggleButton, normalPushButton, normalToggleButton, pushPanel, togglePanel, vpanel;
  vpanel = new VerticalPanel_0;
  pushPanel = new HorizontalPanel_0;
  $setSpacing(pushPanel, 10);
  togglePanel = new HorizontalPanel_0;
  $setSpacing(togglePanel, 10);
  $add_16(vpanel, new HTML_1(this$static.constants.cwCustomButtonPush()));
  $add_16(vpanel, pushPanel);
  $add_16(vpanel, new HTML_1('<br><br>' + this$static.constants.cwCustomButtonToggle()));
  $add_16(vpanel, togglePanel);
  normalPushButton = new PushButton_1(new Image_1($images(($clinit_Showcase$() , MODULE$_4)).gwtLogo()));
  $ensureDebugId(normalPushButton, 'cwCustomButton-push-normal');
  $add_11(pushPanel, normalPushButton);
  disabledPushButton = new PushButton_1(new Image_1($images(($clinit_Showcase$() , MODULE$_4)).gwtLogo()));
  $ensureDebugId(disabledPushButton, 'cwCustomButton-push-disabled');
  $setEnabled_0(disabledPushButton, false);
  $add_11(pushPanel, disabledPushButton);
  normalToggleButton = new ToggleButton_1(new Image_1($images(($clinit_Showcase$() , MODULE$_4)).gwtLogo()));
  $ensureDebugId(normalToggleButton, 'cwCustomButton-toggle-normal');
  $add_11(togglePanel, normalToggleButton);
  disabledToggleButton = new ToggleButton_1(new Image_1($images(($clinit_Showcase$() , MODULE$_4)).gwtLogo()));
  $ensureDebugId(disabledToggleButton, 'cwCustomButton-toggle-disabled');
  $setEnabled_0(disabledToggleButton, false);
  $add_11(togglePanel, disabledToggleButton);
  return vpanel;
}

defineSeed(606, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_31(){
  this.callback$1.onSuccess_0($onInitialize_31(this.$outer$u0020));
}
;
$entry(onLoad)(3);
