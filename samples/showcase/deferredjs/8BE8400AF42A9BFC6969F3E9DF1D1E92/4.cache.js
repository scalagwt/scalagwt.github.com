function $createChangeEvent(this$static){
  return $createHtmlEvent(this$static, 'change', false, true);
}

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
  $init$_0();
}

function ClickHandlers$(){
}

_ = ClickHandlers$_0.prototype = ClickHandlers$.prototype = new Object_0;
_.enrichHasClickHandlers = function enrichHasClickHandlers(o){
  return enrichHasClickHandlers_0(this, o);
}
;
_.fn2clickHandler = function fn2clickHandler(fn){
  return fn2clickHandler_0(fn);
}
;
_.getClass$ = function getClass_267(){
  return Lcom_google_gwt_sample_showcase_client_ClickHandlers$_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$ScalaObject]);
var MODULE$_0;
_ = ShowcaseConstants_.prototype;
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

_ = CwFileUpload$$anon$1.prototype;
_.onSuccess = function onSuccess_33(){
  this.callback$1.onSuccess_0($onInitialize_33(this.$outer$u0020));
}
;
function $$init_471(){
}

function $apply_68(this$static){
  var filename;
  filename = $getFilename(this$static.fileUpload$1);
  $length_1(filename) == 0?alert_0(this$static.$outer$u0020.com$google$gwt$sample$showcase$client$content$widgets$CwFileUpload$$constants.cwFileUploadNoFileError()):alert_0(this$static.$outer$u0020.com$google$gwt$sample$showcase$client$content$widgets$CwFileUpload$$constants.cwFileUploadSuccessful());
}

function CwFileUpload$$anonfun$onInitialize$1_0($outer, fileUpload$1){
  $$init_471();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.fileUpload$1 = fileUpload$1;
  AbstractFunction1_0.call(this);
}

function CwFileUpload$$anonfun$onInitialize$1(){
}

_ = CwFileUpload$$anonfun$onInitialize$1_0.prototype = CwFileUpload$$anonfun$onInitialize$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_69(v1){
  $apply_68(this, dynamicCast(v1, Q$ClickEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_472(){
  return Lcom_google_gwt_sample_showcase_client_content_widgets_CwFileUpload$$anonfun$onInitialize$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.$outer$u0020 = null;
_.fileUpload$1 = null;
function $$init_560(){
}

function $getFilename(this$static){
  return $getValue($getInputElement(this$static));
}

function $getInputElement(this$static){
  return $cast($getElement(this$static));
}

function FileUpload_0(){
  Widget_0.call(this);
  $$init_560();
  $setElement(this, $createFileInputElement(get_1()));
  this.setStyleName('gwt-FileUpload');
  this.impl = new FileUpload$FileUploadImplOpera_0;
  this.impl.init_0(this);
}

function FileUpload(){
}

_ = FileUpload_0.prototype = FileUpload.prototype = new Widget;
_.addChangeHandler = function addChangeHandler(handler){
  return $addDomHandler(this, handler, getType_9());
}
;
_.getClass$ = function getClass_561(){
  return Lcom_google_gwt_user_client_ui_FileUpload_2_classLit;
}
;
_.onBrowserEvent = function onBrowserEvent_5(event_0){
  this.impl.onBrowserEvent_0(event_0) && $onBrowserEvent(this, event_0);
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
_.impl = null;
function $$init_561(){
}

function FileUpload$FileUploadImpl_0(){
  Object_1.call(this);
  $$init_561();
}

function FileUpload$FileUploadImpl(){
}

_ = FileUpload$FileUploadImpl.prototype = new Object_0;
_.getClass$ = function getClass_562(){
  return Lcom_google_gwt_user_client_ui_FileUpload$FileUploadImpl_2_classLit;
}
;
_.init_0 = function init_3(fileUpload){
}
;
_.onBrowserEvent_0 = function onBrowserEvent_6(event_0){
  return true;
}
;
function $$init_562(){
}

function FileUpload$FileUploadImplOpera_0(){
  FileUpload$FileUploadImpl_0.call(this);
  $$init_562();
}

function FileUpload$FileUploadImplOpera(){
}

_ = FileUpload$FileUploadImplOpera_0.prototype = FileUpload$FileUploadImplOpera.prototype = new FileUpload$FileUploadImpl;
_.getClass$ = function getClass_563(){
  return Lcom_google_gwt_user_client_ui_FileUpload$FileUploadImplOpera_2_classLit;
}
;
_.init_0 = function init_4(fileUpload){
  this.fileUpload = fileUpload;
  fileUpload.sinkEvents(4096);
}
;
_.onBrowserEvent_0 = function onBrowserEvent_7(event_0){
  switch ($getTypeInt(event_0)) {
    case 1024:
      if (!this.allowEvent) {
        this.eventPending = true;
        return false;
      }

      break;
    case 4096:
      if (this.eventPending) {
        this.allowEvent = true;
        $dispatchEvent($getElement(this.fileUpload), $createChangeEvent(get_1()));
        this.allowEvent = false;
        this.eventPending = false;
      }

  }
  return true;
}
;
_.allowEvent = false;
_.eventPending = false;
_.fileUpload = null;
var Lcom_google_gwt_user_client_ui_FileUpload_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FileUpload', 'FileUpload', Lcom_google_gwt_user_client_ui_Widget_2_classLit), Lcom_google_gwt_user_client_ui_FileUpload$FileUploadImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FileUpload$FileUploadImpl', 'FileUpload$FileUploadImpl', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_FileUpload$FileUploadImplOpera_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FileUpload$FileUploadImplOpera', 'FileUpload$FileUploadImplOpera', Lcom_google_gwt_user_client_ui_FileUpload$FileUploadImpl_2_classLit), Lcom_google_gwt_sample_showcase_client_ClickHandlers$_2_classLit = createForClass('com.google.gwt.sample.showcase.client.', 'ClickHandlers$', 'ClickHandlers$', Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_widgets_CwFileUpload$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.widgets.', 'CwFileUpload$$anonfun$onInitialize$1', 'CwFileUpload$$anonfun$onInitialize$1', Lscala_runtime_AbstractFunction1_2_classLit);
$entry(onLoad)(4);
