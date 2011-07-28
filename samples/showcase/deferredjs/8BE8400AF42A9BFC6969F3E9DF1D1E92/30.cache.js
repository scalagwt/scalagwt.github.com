_ = ShowcaseConstants_.prototype;
_.cwMessagesExampleArg0Label = function cwMessagesExampleArg0Label(){
  return '<b>Argument {0}:<\/b>';
}
;
_.cwMessagesExampleArg1Label = function cwMessagesExampleArg1Label(){
  return '<b>Argument {1}:<\/b>';
}
;
_.cwMessagesExampleArg2Label = function cwMessagesExampleArg2Label(){
  return '<b>Argument {2}:<\/b>';
}
;
_.cwMessagesExampleFormattedLabel = function cwMessagesExampleFormattedLabel(){
  return '<b>Formatted message:<\/b>';
}
;
_.cwMessagesExampleLinkText = function cwMessagesExampleLinkText(){
  return 'This example interacts with the sample interface: ';
}
;
_.cwMessagesExampleTemplateLabel = function cwMessagesExampleTemplateLabel(){
  return '<b>Message template:<\/b>';
}
;
function $arg0Box(this$static){
  return this$static.arg0Box$u0020;
}

function $arg0Box_$eq(this$static, x$1){
  this$static.arg0Box$u0020 = x$1;
}

function $arg1Box(this$static){
  return this$static.arg1Box$u0020;
}

function $arg1Box_$eq(this$static, x$1){
  this$static.arg1Box$u0020 = x$1;
}

function $arg2Box(this$static){
  return this$static.arg2Box$u0020;
}

function $arg2Box_$eq(this$static, x$1){
  this$static.arg2Box$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$i18n$CwMessagesExample$$updateMessage(this$static){
  var arg0, arg1, arg2;
  arg0 = $trim($getText_1($arg0Box(this$static)));
  arg1 = $trim($getText_1($arg1Box(this$static)));
  arg2 = $trim($getText_1($arg2Box(this$static)));
  $setText_3($formattedMessage(this$static), $errorMessages(this$static).permissionDenied(arg0, arg1, arg2));
}

function $errorMessages(this$static){
  return this$static.errorMessages$u0020;
}

function $errorMessages_$eq(this$static, x$1){
  this$static.errorMessages$u0020 = x$1;
}

function $formattedMessage(this$static){
  return this$static.formattedMessage$u0020;
}

function $formattedMessage_$eq(this$static, x$1){
  this$static.formattedMessage$u0020 = x$1;
}

function $onInitialize_3(this$static){
  var formatter, keyUpHandler, layout, link, linkPanel, template;
  $errorMessages_$eq(this$static, new ErrorMessages__0);
  layout = new FlexTable_0;
  formatter = $getFlexCellFormatter(layout);
  $setCellSpacing(layout, 5);
  link = new HTML_1(' <a href="javascript:void(0);">ErrorMessages<\/a>');
  $addClickHandler_0(link, new CwMessagesExample$$anon$1_0(this$static));
  linkPanel = new HorizontalPanel_0;
  $setSpacing(linkPanel, 3);
  $add_11(linkPanel, new HTML_1(this$static.constants.cwMessagesExampleLinkText()));
  $add_11(linkPanel, link);
  $setWidget_2(layout, 0, 0, linkPanel);
  $setColSpan(formatter, 0, 0, 2);
  template = $errorMessages(this$static).permissionDenied('{0}', '{1}', '{2}');
  $setHTML_2(layout, 1, 0, this$static.constants.cwMessagesExampleTemplateLabel());
  $setHTML_2(layout, 1, 1, template);
  $arg0Box_$eq(this$static, new TextBox_0);
  $setText_7($arg0Box(this$static), 'amelie');
  $setHTML_2(layout, 2, 0, this$static.constants.cwMessagesExampleArg0Label());
  $setWidget_2(layout, 2, 1, $arg0Box(this$static));
  $arg1Box_$eq(this$static, new TextBox_0);
  $setText_7($arg1Box(this$static), 'guest');
  $setHTML_2(layout, 3, 0, this$static.constants.cwMessagesExampleArg1Label());
  $setWidget_2(layout, 3, 1, $arg1Box(this$static));
  $arg2Box_$eq(this$static, new TextBox_0);
  $setText_7($arg2Box(this$static), '/secure/blueprints.xml');
  $setHTML_2(layout, 4, 0, this$static.constants.cwMessagesExampleArg2Label());
  $setWidget_2(layout, 4, 1, $arg2Box(this$static));
  $formattedMessage_$eq(this$static, new HTML_0);
  $setHTML_2(layout, 5, 0, this$static.constants.cwMessagesExampleFormattedLabel());
  $setWidget_2(layout, 5, 1, $formattedMessage(this$static));
  $setVerticalAlignment(formatter, 5, 0, ($clinit_HasVerticalAlignment() , ALIGN_TOP));
  keyUpHandler = new CwMessagesExample$$anon$2_0(this$static);
  $addKeyUpHandler($arg0Box(this$static), keyUpHandler);
  $addKeyUpHandler($arg1Box(this$static), keyUpHandler);
  $addKeyUpHandler($arg2Box(this$static), keyUpHandler);
  $com$google$gwt$sample$showcase$client$content$i18n$CwMessagesExample$$updateMessage(this$static);
  return layout;
}

function $$init_340(){
}

function CwMessagesExample$$anon$1_0($outer){
  $$init_340();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
}

function CwMessagesExample$$anon$1(){
}

_ = CwMessagesExample$$anon$1_0.prototype = CwMessagesExample$$anon$1.prototype = new Object_0;
_.getClass$ = function getClass_341(){
  return Lcom_google_gwt_sample_showcase_client_content_i18n_CwMessagesExample$$anon$1_2_classLit;
}
;
_.onClick = function onClick_4(event_0){
  $selectTab(this.$outer$u0020, 2);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.$outer$u0020 = null;
function $$init_341(){
}

function CwMessagesExample$$anon$2_0($outer){
  $$init_341();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
}

function CwMessagesExample$$anon$2(){
}

_ = CwMessagesExample$$anon$2_0.prototype = CwMessagesExample$$anon$2.prototype = new Object_0;
_.getClass$ = function getClass_342(){
  return Lcom_google_gwt_sample_showcase_client_content_i18n_CwMessagesExample$$anon$2_2_classLit;
}
;
_.onKeyUp = function onKeyUp_4(event_0){
  $com$google$gwt$sample$showcase$client$content$i18n$CwMessagesExample$$updateMessage(this.$outer$u0020);
}
;
_.castableTypeMap$ = makeCastMap([Q$KeyUpHandler, Q$EventHandler]);
_.$outer$u0020 = null;
_ = CwMessagesExample$$anon$3.prototype;
_.onSuccess = function onSuccess_4(){
  this.callback$1.onSuccess_0($onInitialize_3(this.$outer$u0020));
}
;
function $$init_353(){
}

function ErrorMessages__0(){
  Object_1.call(this);
  $$init_353();
}

function ErrorMessages_(){
}

_ = ErrorMessages__0.prototype = ErrorMessages_.prototype = new Object_0;
_.getClass$ = function getClass_354(){
  return Lcom_google_gwt_sample_showcase_client_content_i18n_ErrorMessages_1_2_classLit;
}
;
_.permissionDenied = function permissionDenied(arg0, arg1, arg2){
  return "User '" + arg0 + "' has security clearance '" + arg1 + "' and cannot access '" + arg2 + "'";
}
;
var Lcom_google_gwt_sample_showcase_client_content_i18n_ErrorMessages_1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'ErrorMessages_', 'ErrorMessages_', Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_i18n_CwMessagesExample$$anon$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'CwMessagesExample$$anon$1', 'CwMessagesExample$$anon$1', Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_i18n_CwMessagesExample$$anon$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'CwMessagesExample$$anon$2', 'CwMessagesExample$$anon$2', Ljava_lang_Object_2_classLit);
$entry(onLoad)(30);
