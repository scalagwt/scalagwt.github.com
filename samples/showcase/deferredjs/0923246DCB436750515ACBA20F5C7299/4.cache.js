function $createFileInputElement(this$static){
  return $createInputElement(($clinit_DOMImpl() , impl_0 , this$static), 'file');
}

function $getValue(this$static){
  return this$static.value;
}

function $clinit_ClickHandlers$(){
  $clinit_ClickHandlers$ = nullMethod;
  MODULE$_0 = new ClickHandlers$_0;
}

function $$init_266(){
}

function ClickHandlers$_0(){
  $$init_266();
  Object_1.call(this);
  MODULE$_0 = this;
  $init$_0();
}

defineSeed(336, 1, makeCastMap([Q$ScalaObject]), ClickHandlers$_0);
_.enrichHasClickHandlers = function enrichHasClickHandlers(o){
  return enrichHasClickHandlers_0(this, o);
}
;
_.fn2clickHandler = function fn2clickHandler(fn){
  return fn2clickHandler_0(fn);
}
;
var MODULE$_0;
defineSeed(395, 1, makeCastMap([Q$ShowcaseConstants]));
_.cwFileUploadButton = function cwFileUploadButton(){
  return 'Upload File';
}
;
_.cwFileUploadNoFileError = function cwFileUploadNoFileError(){
  return 'You must select a file to upload';
}
;
_.cwFileUploadSelectFile = function cwFileUploadSelectFile(){
  return '<b>Select a file:<\/b>';
}
;
_.cwFileUploadSuccessful = function cwFileUploadSuccessful(){
  return 'File uploaded!';
}
;
function $onInitialize_33(this$static){
  var fileUpload$1, uploadButton, vPanel;
  vPanel = new VerticalPanel_0;
  $add_16(vPanel, new HTML_1(this$static.com$google$gwt$sample$showcase$client$content$widgets$CwFileUpload$$constants.cwFileUploadSelectFile()));
  fileUpload$1 = new FileUpload_0;
  $ensureDebugId(fileUpload$1, 'cwFileUpload');
  $add_16(vPanel, fileUpload$1);
  uploadButton = new Button_1(this$static.com$google$gwt$sample$showcase$client$content$widgets$CwFileUpload$$constants.cwFileUploadButton());
  $onClick(($clinit_ClickHandlers$() , MODULE$_0).enrichHasClickHandlers(uploadButton), new CwFileUpload$$anonfun$onInitialize$1_0(this$static, fileUpload$1));
  $add_16(vPanel, new HTML_1('<br>'));
  $add_16(vPanel, uploadButton);
  return vPanel;
}

defineSeed(611, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_33(){
  this.callback$1.onSuccess_0($onInitialize_33(this.$outer$u0020));
}
;
function $$init_490(){
}

function $apply_71(this$static){
  var filename;
  filename = $getFilename(this$static.fileUpload$1);
  $length_1(filename) == 0?alert_0(this$static.$outer$u0020.com$google$gwt$sample$showcase$client$content$widgets$CwFileUpload$$constants.cwFileUploadNoFileError()):alert_0(this$static.$outer$u0020.com$google$gwt$sample$showcase$client$content$widgets$CwFileUpload$$constants.cwFileUploadSuccessful());
}

function CwFileUpload$$anonfun$onInitialize$1_0($outer, fileUpload$1){
  $$init_490();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.fileUpload$1 = fileUpload$1;
  AbstractFunction1_0.call(this);
}

defineSeed(612, 352, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwFileUpload$$anonfun$onInitialize$1_0);
_.apply_0 = function apply_84(v1){
  $apply_71(this, dynamicCast(v1, Q$ClickEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.$outer$u0020 = null;
_.fileUpload$1 = null;
function $$init_584(){
}

function $getFilename(this$static){
  return $getValue($getInputElement(this$static));
}

function $getInputElement(this$static){
  return $cast($getElement(this$static));
}

function FileUpload_0(){
  Widget_0.call(this);
  $$init_584();
  $setElement(this, $createFileInputElement(get_1()));
  this.setStyleName('gwt-FileUpload');
  this.impl = new FileUpload$FileUploadImpl_0;
  this.impl.init_0(this);
}

defineSeed(722, 326, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), FileUpload_0);
_.addChangeHandler = function addChangeHandler(handler){
  return $addDomHandler(this, handler, getType_9());
}
;
_.onBrowserEvent = function onBrowserEvent_5(event_0){
  this.impl.onBrowserEvent_0(event_0) && $onBrowserEvent(this, event_0);
}
;
_.impl = null;
function $$init_585(){
}

function FileUpload$FileUploadImpl_0(){
  Object_1.call(this);
  $$init_585();
}

defineSeed(723, 1, {}, FileUpload$FileUploadImpl_0);
_.init_0 = function init_3(fileUpload){
}
;
_.onBrowserEvent_0 = function onBrowserEvent_6(event_0){
  return true;
}
;
var Lcom_google_gwt_user_client_ui_FileUpload_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FileUpload', 722, Lcom_google_gwt_user_client_ui_Widget_2_classLit), Lcom_google_gwt_user_client_ui_FileUpload$FileUploadImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FileUpload$FileUploadImpl', 723, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_ClickHandlers$_2_classLit = createForClass('com.google.gwt.sample.showcase.client.', 'ClickHandlers$', 336, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_widgets_CwFileUpload$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.widgets.', 'CwFileUpload$$anonfun$onInitialize$1', 612, Lscala_runtime_AbstractFunction1_2_classLit);
$entry(onLoad)(4);
