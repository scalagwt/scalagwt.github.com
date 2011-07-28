function $createPasswordInputElement(this$static){
  return $createInputElement(($clinit_DOMImpl() , impl_0 , this$static), 'password');
}

function $setRows(this$static, rows){
  this$static.rows = rows;
}

_ = Handlers$.prototype;
_.enrichHasKeyUpHandlers = function enrichHasKeyUpHandlers(o){
  return enrichHasKeyUpHandlers_0(this, o);
}
;
_.fn2keyUpHandler = function fn2keyUpHandler(fn){
  return fn2keyUpHandler_0(fn);
}
;
function $$init_280(){
}

function KeyUpHandlers$$anon$3_0(fn$3){
  $$init_280();
  this.fn$3 = fn$3;
  Object_1.call(this);
}

function KeyUpHandlers$$anon$3(){
}

_ = KeyUpHandlers$$anon$3_0.prototype = KeyUpHandlers$$anon$3.prototype = new Object_0;
_.getClass$ = function getClass_281(){
  return Lcom_google_gwt_sample_showcase_client_KeyUpHandlers$$anon$3_2_classLit;
}
;
_.onKeyUp = function onKeyUp_0(event_0){
  this.fn$3.apply_0(event_0);
}
;
_.castableTypeMap$ = makeCastMap([Q$KeyUpHandler, Q$EventHandler]);
_.fn$3 = null;
function $$init_281(){
}

function $com$google$gwt$sample$showcase$client$KeyUpHandlers$RichHasKeyUpHandlers$$$outer(this$static){
  return this$static.$outer$u0020;
}

function $onKeyUp(this$static, fn){
  return this$static.o.addKeyUpHandler($com$google$gwt$sample$showcase$client$KeyUpHandlers$RichHasKeyUpHandlers$$$outer(this$static).fn2keyUpHandler(fn));
}

function KeyUpHandlers$RichHasKeyUpHandlers_0($outer, o){
  $$init_281();
  this.o = o;
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
}

function KeyUpHandlers$RichHasKeyUpHandlers(){
}

_ = KeyUpHandlers$RichHasKeyUpHandlers_0.prototype = KeyUpHandlers$RichHasKeyUpHandlers.prototype = new Object_0;
_.getClass$ = function getClass_282(){
  return Lcom_google_gwt_sample_showcase_client_KeyUpHandlers$RichHasKeyUpHandlers_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$ScalaObject]);
_.$outer$u0020 = null;
_.o = null;
function enrichHasKeyUpHandlers_0($this, o){
  return new KeyUpHandlers$RichHasKeyUpHandlers_0($this, o);
}

function fn2keyUpHandler_0(fn$3){
  return new KeyUpHandlers$$anon$3_0(fn$3);
}

_ = ShowcaseConstants_.prototype;
_.cwBasicTextAreaLabel = function cwBasicTextAreaLabel(){
  return '<b>Text area:<\/b>';
}
;
_.cwBasicTextNormalLabel = function cwBasicTextNormalLabel(){
  return '<b>Normal text box:<\/b>';
}
;
_.cwBasicTextPasswordLabel = function cwBasicTextPasswordLabel(){
  return '<b>Password text box:<\/b>';
}
;
_.cwBasicTextReadOnly = function cwBasicTextReadOnly(){
  return 'read only';
}
;
_.cwBasicTextSelected = function cwBasicTextSelected(){
  return 'Selected';
}
;
function $com$google$gwt$sample$showcase$client$content$text$CwBasicText$$updateSelectionLabel(this$static, textBox, label){
  $setText_4(label, this$static.constants.cwBasicTextSelected() + ': ' + boxToInteger(textBox.getCursorPos()) + ', ' + boxToInteger(textBox.getSelectionLength()));
}

function $createTextExample(this$static, textBox$1, addSelection){
  var hPanel, label$1;
  hPanel = new HorizontalPanel_0;
  $setSpacing(hPanel, 4);
  $add_11(hPanel, textBox$1);
  if (addSelection) {
    label$1 = new Label_2(this$static.constants.cwBasicTextSelected() + ': 0, 0');
    $onKeyUp(($clinit_Handlers$() , MODULE$_2).enrichHasKeyUpHandlers(textBox$1), new CwBasicText$$anonfun$createTextExample$1_0(this$static, textBox$1, label$1));
    $onClick(($clinit_Handlers$() , MODULE$_2).enrichHasClickHandlers(textBox$1), new CwBasicText$$anonfun$createTextExample$2_0(this$static, textBox$1, label$1));
    $add_11(hPanel, label$1);
  }
  return hPanel;
}

function $onInitialize_27(this$static){
  var disabledPassword, disabledText, normalPassword, normalText, textArea, vpanel;
  vpanel = new VerticalPanel_0;
  $setSpacing(vpanel, 5);
  normalText = new TextBox_0;
  $ensureDebugId(normalText, 'cwBasicText-textbox');
  disabledText = new TextBox_0;
  $ensureDebugId(disabledText, 'cwBasicText-textbox-disabled');
  $setText_8(disabledText, this$static.constants.cwBasicTextReadOnly());
  disabledText.setEnabled(false);
  $add_16(vpanel, new HTML_1(this$static.constants.cwBasicTextNormalLabel()));
  $add_16(vpanel, $createTextExample(this$static, normalText, true));
  $add_16(vpanel, $createTextExample(this$static, disabledText, false));
  normalPassword = new PasswordTextBox_0;
  $ensureDebugId(normalPassword, 'cwBasicText-password');
  disabledPassword = new PasswordTextBox_0;
  $ensureDebugId(disabledPassword, 'cwBasicText-password-disabled');
  $setText_8(disabledPassword, this$static.constants.cwBasicTextReadOnly());
  disabledPassword.setEnabled(false);
  $add_16(vpanel, new HTML_1('<br><br>' + this$static.constants.cwBasicTextPasswordLabel()));
  $add_16(vpanel, $createTextExample(this$static, normalPassword, true));
  $add_16(vpanel, $createTextExample(this$static, disabledPassword, false));
  textArea = new TextArea_1;
  $ensureDebugId(textArea, 'cwBasicText-textarea');
  $setVisibleLines(textArea, 5);
  $add_16(vpanel, new HTML_1('<br><br>' + this$static.constants.cwBasicTextAreaLabel()));
  $add_16(vpanel, $createTextExample(this$static, textArea, true));
  return vpanel;
}

_ = CwBasicText$$anon$1.prototype;
_.onSuccess = function onSuccess_28(){
  this.callback$1.onSuccess_0($onInitialize_27(this.$outer$u0020));
}
;
function $$init_450(){
}

function $apply_63(this$static){
  $com$google$gwt$sample$showcase$client$content$text$CwBasicText$$updateSelectionLabel(this$static.$outer$u0020, this$static.textBox$1, this$static.label$1);
}

function CwBasicText$$anonfun$createTextExample$1_0($outer, textBox$1, label$1){
  $$init_450();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.textBox$1 = textBox$1;
  this.label$1 = label$1;
  AbstractFunction1_0.call(this);
}

function CwBasicText$$anonfun$createTextExample$1(){
}

_ = CwBasicText$$anonfun$createTextExample$1_0.prototype = CwBasicText$$anonfun$createTextExample$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_64(v1){
  $apply_63(this, dynamicCast(v1, Q$KeyUpEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_451(){
  return Lcom_google_gwt_sample_showcase_client_content_text_CwBasicText$$anonfun$createTextExample$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.$outer$u0020 = null;
_.label$1 = null;
_.textBox$1 = null;
function $$init_451(){
}

function $apply_64(this$static){
  $com$google$gwt$sample$showcase$client$content$text$CwBasicText$$updateSelectionLabel(this$static.$outer$u0020, this$static.textBox$1, this$static.label$1);
}

function CwBasicText$$anonfun$createTextExample$2_0($outer, textBox$1, label$1){
  $$init_451();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.textBox$1 = textBox$1;
  this.label$1 = label$1;
  AbstractFunction1_0.call(this);
}

function CwBasicText$$anonfun$createTextExample$2(){
}

_ = CwBasicText$$anonfun$createTextExample$2_0.prototype = CwBasicText$$anonfun$createTextExample$2.prototype = new AbstractFunction1;
_.apply_0 = function apply_65(v1){
  $apply_64(this, dynamicCast(v1, Q$ClickEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_452(){
  return Lcom_google_gwt_sample_showcase_client_content_text_CwBasicText$$anonfun$createTextExample$2_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.$outer$u0020 = null;
_.label$1 = null;
_.textBox$1 = null;
function $getImpl(){
  return impl_11;
}

_ = ValueBoxBase.prototype;
_.getCursorPos = function getCursorPos(){
  return impl_11.getCursorPos_0($getElement(this));
}
;
_.getSelectionLength = function getSelectionLength(){
  return impl_11.getSelectionLength_0($getElement(this));
}
;
function $$init_612(){
}

function PasswordTextBox_0(){
  $clinit_TextBoxBase();
  TextBox_1.call(this, $createPasswordInputElement(get_1()), 'gwt-PasswordTextBox');
  $$init_612();
}

function PasswordTextBox(){
}

_ = PasswordTextBox_0.prototype = PasswordTextBox.prototype = new TextBox;
_.getClass$ = function getClass_613(){
  return Lcom_google_gwt_user_client_ui_PasswordTextBox_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
function $$init_649(){
}

function $getTextAreaElement(this$static){
  return $cast($getElement(this$static));
}

function $setVisibleLines(this$static, lines){
  $setRows($getTextAreaElement(this$static), lines);
}

function TextArea_1(){
  $clinit_TextBoxBase();
  TextBoxBase_0.call(this, $createTextAreaElement(get_1()));
  $$init_649();
  this.setStyleName('gwt-TextArea');
}

function TextArea_0(){
}

_ = TextArea_1.prototype = TextArea_0.prototype = new TextBoxBase;
_.getClass$ = function getClass_650(){
  return Lcom_google_gwt_user_client_ui_TextArea_2_classLit;
}
;
_.getCursorPos = function getCursorPos_0(){
  return $getImpl().getTextAreaCursorPos($getElement(this));
}
;
_.getSelectionLength = function getSelectionLength_0(){
  return $getImpl().getTextAreaSelectionLength($getElement(this));
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
_ = TextBoxImpl.prototype;
_.getCursorPos_0 = function getCursorPos_1(elem){
  try {
    return elem.selectionStart;
  }
   catch (e) {
    return 0;
  }
}
;
_.getSelectionLength_0 = function getSelectionLength_1(elem){
  try {
    return elem.selectionEnd - elem.selectionStart;
  }
   catch (e) {
    return 0;
  }
}
;
_.getTextAreaCursorPos = function getTextAreaCursorPos(elem){
  return this.getCursorPos_0(elem);
}
;
_.getTextAreaSelectionLength = function getTextAreaSelectionLength(elem){
  return this.getSelectionLength_0(elem);
}
;
var Lcom_google_gwt_user_client_ui_PasswordTextBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PasswordTextBox', 'PasswordTextBox', Lcom_google_gwt_user_client_ui_TextBox_2_classLit), Lcom_google_gwt_user_client_ui_TextArea_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextArea', 'TextArea_0', Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit), Lcom_google_gwt_sample_showcase_client_KeyUpHandlers$RichHasKeyUpHandlers_2_classLit = createForClass('com.google.gwt.sample.showcase.client.', 'KeyUpHandlers$RichHasKeyUpHandlers', 'KeyUpHandlers$RichHasKeyUpHandlers', Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_text_CwBasicText$$anonfun$createTextExample$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.text.', 'CwBasicText$$anonfun$createTextExample$1', 'CwBasicText$$anonfun$createTextExample$1', Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_text_CwBasicText$$anonfun$createTextExample$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.text.', 'CwBasicText$$anonfun$createTextExample$2', 'CwBasicText$$anonfun$createTextExample$2', Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_KeyUpHandlers$$anon$3_2_classLit = createForClass('com.google.gwt.sample.showcase.client.', 'KeyUpHandlers$$anon$3', 'KeyUpHandlers$$anon$3', Ljava_lang_Object_2_classLit);
$entry(onLoad)(12);
