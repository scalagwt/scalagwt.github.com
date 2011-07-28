_ = ShowcaseConstants_.prototype;
_.cwConstantsWithLookupExampleLinkText = function cwConstantsWithLookupExampleLinkText(){
  return 'This example interacts with the sample interface: ';
}
;
_.cwConstantsWithLookupExampleMethodName = function cwConstantsWithLookupExampleMethodName(){
  return '<b>Name of method:<\/b>';
}
;
_.cwConstantsWithLookupExampleNoInput = function cwConstantsWithLookupExampleNoInput(){
  return '<Please enter a method name above>';
}
;
_.cwConstantsWithLookupExampleNoMatches = function cwConstantsWithLookupExampleNoMatches(){
  return '<Not found>';
}
;
_.cwConstantsWithLookupExampleResults = function cwConstantsWithLookupExampleResults(){
  return '<b>Lookup results:<\/b>';
}
;
function $$init_240(this$static){
  this$static.cache = new HashMap_0;
}

function $black(){
  return 'Black';
}

function $blue(){
  return 'Blue';
}

function $green(){
  return 'Green';
}

function $grey(){
  return 'Grey';
}

function $lightGrey(){
  return 'Light Grey';
}

function $red(){
  return 'Red';
}

function $white(){
  return 'White';
}

function $yellow(){
  return 'Yellow';
}

function ColorConstants__0(){
  Object_1.call(this);
  $$init_240(this);
}

function ColorConstants_(){
}

_ = ColorConstants__0.prototype = ColorConstants_.prototype = new Object_0;
_.getClass$ = function getClass_241(){
  return Lcom_google_gwt_sample_showcase_client_content_i18n_ColorConstants_1_2_classLit;
}
;
_.getString = function getString(arg0){
  var answer, target;
  target = dynamicCast(this.cache.get(arg0), Q$String);
  if (jsNotEquals(target, null)) {
    return target;
  }
  if ($equals_3(arg0, 'blue')) {
    answer = $blue();
    this.cache.put('blue', answer);
    return answer;
  }
  if ($equals_3(arg0, 'grey')) {
    answer = $grey();
    this.cache.put('grey', answer);
    return answer;
  }
  if ($equals_3(arg0, 'white')) {
    answer = $white();
    this.cache.put('white', answer);
    return answer;
  }
  if ($equals_3(arg0, 'yellow')) {
    answer = $yellow();
    this.cache.put('yellow', answer);
    return answer;
  }
  if ($equals_3(arg0, 'lightGrey')) {
    answer = $lightGrey();
    this.cache.put('lightGrey', answer);
    return answer;
  }
  if ($equals_3(arg0, 'green')) {
    answer = $green();
    this.cache.put('green', answer);
    return answer;
  }
  if ($equals_3(arg0, 'red')) {
    answer = $red();
    this.cache.put('red', answer);
    return answer;
  }
  if ($equals_3(arg0, 'black')) {
    answer = $black();
    this.cache.put('black', answer);
    return answer;
  }
  throw new MissingResourceException_0("Cannot find constant '" + arg0 + "'; expecting a method name", 'com.google.gwt.sample.showcase.client.content.i18n.ColorConstants', arg0);
}
;
function $colorBox(this$static){
  return this$static.colorBox$u0020;
}

function $colorBox_$eq(this$static, x$1){
  this$static.colorBox$u0020 = x$1;
}

function $colorConstants(this$static){
  return this$static.colorConstants$u0020;
}

function $colorConstants_$eq(this$static, x$1){
  this$static.colorConstants$u0020 = x$1;
}

function $colorResultsBox(this$static){
  return this$static.colorResultsBox$u0020;
}

function $colorResultsBox_$eq(this$static, x$1){
  this$static.colorResultsBox$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$i18n$CwConstantsWithLookupExample$$updateColor(this$static){
  var $e0, color, key;
  key = $trim($getText_1($colorBox(this$static)));
  if ($equals_3(key, '')) {
    $setText_7($colorResultsBox(this$static), this$static.constants.cwConstantsWithLookupExampleNoInput());
  }
   else {
    try {
      color = $colorConstants(this$static).getString(key);
      $setText_7($colorResultsBox(this$static), color);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, Q$MissingResourceException)) {
        $e0;
        $setText_7($colorResultsBox(this$static), this$static.constants.cwConstantsWithLookupExampleNoMatches());
      }
       else 
        throw $e0;
    }
  }
}

function $onInitialize_0(this$static){
  var formatter, layout, link, linkPanel;
  $colorConstants_$eq(this$static, new ColorConstants__0);
  layout = new FlexTable_0;
  formatter = $getFlexCellFormatter(layout);
  $setCellSpacing(layout, 5);
  link = new HTML_1(' <a href="javascript:void(0);">ColorConstants<\/a>');
  $addClickHandler_0(link, new CwConstantsWithLookupExample$$anon$1_0(this$static));
  linkPanel = new HorizontalPanel_0;
  $setSpacing(linkPanel, 3);
  $add_11(linkPanel, new HTML_1(this$static.constants.cwConstantsWithLookupExampleLinkText()));
  $add_11(linkPanel, link);
  $setWidget_2(layout, 0, 0, linkPanel);
  $setColSpan(formatter, 0, 0, 2);
  $colorBox_$eq(this$static, new TextBox_0);
  $setText_7($colorBox(this$static), 'red');
  $colorBox(this$static).setWidth('17em');
  $setHTML_2(layout, 1, 0, this$static.constants.cwConstantsWithLookupExampleMethodName());
  $setWidget_2(layout, 1, 1, $colorBox(this$static));
  $colorResultsBox_$eq(this$static, new TextBox_0);
  $colorResultsBox(this$static).setEnabled(false);
  $colorResultsBox(this$static).setWidth('17em');
  $setHTML_2(layout, 2, 0, this$static.constants.cwConstantsWithLookupExampleResults());
  $setWidget_2(layout, 2, 1, $colorResultsBox(this$static));
  $addKeyUpHandler($colorBox(this$static), new CwConstantsWithLookupExample$$anon$2_0(this$static));
  $com$google$gwt$sample$showcase$client$content$i18n$CwConstantsWithLookupExample$$updateColor(this$static);
  return layout;
}

function $$init_246(){
}

function CwConstantsWithLookupExample$$anon$1_0($outer){
  $$init_246();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
}

function CwConstantsWithLookupExample$$anon$1(){
}

_ = CwConstantsWithLookupExample$$anon$1_0.prototype = CwConstantsWithLookupExample$$anon$1.prototype = new Object_0;
_.getClass$ = function getClass_247(){
  return Lcom_google_gwt_sample_showcase_client_content_i18n_CwConstantsWithLookupExample$$anon$1_2_classLit;
}
;
_.onClick = function onClick_3(event_0){
  $selectTab(this.$outer$u0020, 2);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.$outer$u0020 = null;
function $$init_247(){
}

function CwConstantsWithLookupExample$$anon$2_0($outer){
  $$init_247();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
}

function CwConstantsWithLookupExample$$anon$2(){
}

_ = CwConstantsWithLookupExample$$anon$2_0.prototype = CwConstantsWithLookupExample$$anon$2.prototype = new Object_0;
_.getClass$ = function getClass_248(){
  return Lcom_google_gwt_sample_showcase_client_content_i18n_CwConstantsWithLookupExample$$anon$2_2_classLit;
}
;
_.onKeyUp = function onKeyUp_1(event_0){
  $com$google$gwt$sample$showcase$client$content$i18n$CwConstantsWithLookupExample$$updateColor(this.$outer$u0020);
}
;
_.castableTypeMap$ = makeCastMap([Q$KeyUpHandler, Q$EventHandler]);
_.$outer$u0020 = null;
_ = CwConstantsWithLookupExample$$anon$3.prototype;
_.onSuccess = function onSuccess_1(){
  this.callback$1.onSuccess_0($onInitialize_0(this.$outer$u0020));
}
;
var Lcom_google_gwt_sample_showcase_client_content_i18n_ColorConstants_1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'ColorConstants_', 'ColorConstants_', Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_i18n_CwConstantsWithLookupExample$$anon$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'CwConstantsWithLookupExample$$anon$1', 'CwConstantsWithLookupExample$$anon$1', Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_i18n_CwConstantsWithLookupExample$$anon$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'CwConstantsWithLookupExample$$anon$2', 'CwConstantsWithLookupExample$$anon$2', Ljava_lang_Object_2_classLit);
$entry(onLoad)(33);
