function $getPattern(this$static){
  return this$static.pattern;
}

function getFullDateFormat(){
  $clinit_DateTimeFormat_0();
  return getFormat(($clinit_DateTimeFormat$PredefinedFormat() , DATE_FULL));
}

function getFullDateTimeFormat(){
  $clinit_DateTimeFormat_0();
  return getFormat(($clinit_DateTimeFormat$PredefinedFormat() , DATE_TIME_FULL));
}

function getFullTimeFormat(){
  $clinit_DateTimeFormat_0();
  return getFormat(($clinit_DateTimeFormat$PredefinedFormat() , TIME_FULL));
}

function getLongDateTimeFormat(){
  $clinit_DateTimeFormat_0();
  return getFormat(($clinit_DateTimeFormat$PredefinedFormat() , DATE_TIME_LONG));
}

function getLongTimeFormat(){
  $clinit_DateTimeFormat_0();
  return getFormat(($clinit_DateTimeFormat$PredefinedFormat() , TIME_LONG));
}

function getMediumTimeFormat(){
  $clinit_DateTimeFormat_0();
  return getFormat(($clinit_DateTimeFormat$PredefinedFormat() , TIME_MEDIUM));
}

function getShortDateFormat(){
  $clinit_DateTimeFormat_0();
  return getFormat(($clinit_DateTimeFormat$PredefinedFormat() , DATE_SHORT));
}

function getShortDateTimeFormat(){
  $clinit_DateTimeFormat_0();
  return getFormat(($clinit_DateTimeFormat$PredefinedFormat() , DATE_TIME_SHORT));
}

function getShortTimeFormat(){
  $clinit_DateTimeFormat_0();
  return getFormat(($clinit_DateTimeFormat$PredefinedFormat() , TIME_SHORT));
}

_ = ShowcaseConstants_.prototype;
_.cwDateTimeFormatFailedToParseInput = function cwDateTimeFormatFailedToParseInput(){
  return 'Unable to parse input';
}
;
_.cwDateTimeFormatFormattedLabel = function cwDateTimeFormatFormattedLabel(){
  return '<b>Formatted value:<\/b>';
}
;
_.cwDateTimeFormatInvalidPattern = function cwDateTimeFormatInvalidPattern(){
  return 'Invalid pattern';
}
;
_.cwDateTimeFormatPatternLabel = function cwDateTimeFormatPatternLabel(){
  return '<b>Pattern:<\/b>';
}
;
_.cwDateTimeFormatPatterns = function cwDateTimeFormatPatterns(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwDateTimeFormatPatterns'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Full Date/Time', 'Long Date/Time', 'Medium Date/Time', 'Short Date/Time', 'Full Date', 'Long Date', 'Medium Date', 'Short Date', 'Full Time', 'Long Time', 'Medium Time', 'Short Time', 'Custom']);
    this.cache.put('cwDateTimeFormatPatterns', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwDateTimeFormatValueLabel = function cwDateTimeFormatValueLabel(){
  return '<b>Value to format:<\/b>';
}
;
function $activeFormat(this$static){
  return this$static.activeFormat$u0020;
}

function $activeFormat_$eq(this$static, x$1){
  this$static.activeFormat$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$i18n$CwDateTimeFormat$$patternList(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$i18n$CwDateTimeFormat$$patternList$u0020;
}

function $com$google$gwt$sample$showcase$client$content$i18n$CwDateTimeFormat$$patternList_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$i18n$CwDateTimeFormat$$patternList$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$i18n$CwDateTimeFormat$$updateFormattedValue(this$static){
  var $e0, date, formattedValue, sValue;
  sValue = $getText_1($valueBox(this$static));
  if ($equals_3(sValue, '')) {
    $setText_3($formattedBox(this$static), '<None>');
  }
   else {
    try {
      date = new Date_5(sValue);
      formattedValue = $format($activeFormat(this$static), date);
      $setText_3($formattedBox(this$static), formattedValue);
      $showErrorMessage(this$static, null);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, Q$IllegalArgumentException)) {
        $e0;
        $showErrorMessage(this$static, this$static.constants.cwDateTimeFormatFailedToParseInput());
      }
       else 
        throw $e0;
    }
  }
}

function $com$google$gwt$sample$showcase$client$content$i18n$CwDateTimeFormat$$updatePattern(this$static){
  var $1$, $e0, pattern, temp1;
  {
    temp1 = $getSelectedIndex_0($com$google$gwt$sample$showcase$client$content$i18n$CwDateTimeFormat$$patternList(this$static));
    $1$ = temp1;
    switch ($1$) {
      case 0:
        $activeFormat_$eq(this$static, getFullDateTimeFormat());
        $setText_7($patternBox(this$static), $getPattern($activeFormat(this$static)));
        $patternBox(this$static).setEnabled(false);
        break;
      case 5:
        $activeFormat_$eq(this$static, getLongDateFormat());
        $setText_7($patternBox(this$static), $getPattern($activeFormat(this$static)));
        $patternBox(this$static).setEnabled(false);
        break;
      case 10:
        $activeFormat_$eq(this$static, getMediumTimeFormat());
        $setText_7($patternBox(this$static), $getPattern($activeFormat(this$static)));
        $patternBox(this$static).setEnabled(false);
        break;
      case 1:
        $activeFormat_$eq(this$static, getLongDateTimeFormat());
        $setText_7($patternBox(this$static), $getPattern($activeFormat(this$static)));
        $patternBox(this$static).setEnabled(false);
        break;
      case 6:
        $activeFormat_$eq(this$static, getMediumDateFormat());
        $setText_7($patternBox(this$static), $getPattern($activeFormat(this$static)));
        $patternBox(this$static).setEnabled(false);
        break;
      case 9:
        $activeFormat_$eq(this$static, getLongTimeFormat());
        $setText_7($patternBox(this$static), $getPattern($activeFormat(this$static)));
        $patternBox(this$static).setEnabled(false);
        break;
      case 2:
        $activeFormat_$eq(this$static, getMediumDateTimeFormat());
        $setText_7($patternBox(this$static), $getPattern($activeFormat(this$static)));
        $patternBox(this$static).setEnabled(false);
        break;
      case 12:
        $patternBox(this$static).setEnabled(true);
        pattern = $getText_1($patternBox(this$static));
        try {
          $activeFormat_$eq(this$static, getFormat_0(pattern));
        }
         catch ($e0) {
          $e0 = caught_0($e0);
          if (instanceOf($e0, Q$IllegalArgumentException)) {
            $e0;
            $showErrorMessage(this$static, this$static.constants.cwDateTimeFormatInvalidPattern());
          }
           else 
            throw $e0;
        }

        break;
      case 7:
        $activeFormat_$eq(this$static, getShortDateFormat());
        $setText_7($patternBox(this$static), $getPattern($activeFormat(this$static)));
        $patternBox(this$static).setEnabled(false);
        break;
      case 3:
        $activeFormat_$eq(this$static, getShortDateTimeFormat());
        $setText_7($patternBox(this$static), $getPattern($activeFormat(this$static)));
        $patternBox(this$static).setEnabled(false);
        break;
      case 11:
        $activeFormat_$eq(this$static, getShortTimeFormat());
        $setText_7($patternBox(this$static), $getPattern($activeFormat(this$static)));
        $patternBox(this$static).setEnabled(false);
        break;
      case 8:
        $activeFormat_$eq(this$static, getFullTimeFormat());
        $setText_7($patternBox(this$static), $getPattern($activeFormat(this$static)));
        $patternBox(this$static).setEnabled(false);
        break;
      case 4:
        $activeFormat_$eq(this$static, getFullDateFormat());
        $setText_7($patternBox(this$static), $getPattern($activeFormat(this$static)));
        $patternBox(this$static).setEnabled(false);
        break;
      default:throw new MatchError_0(boxToInteger(temp1));
    }
  }
  $com$google$gwt$sample$showcase$client$content$i18n$CwDateTimeFormat$$updateFormattedValue(this$static);
}

function $formattedBox(this$static){
  return this$static.formattedBox$u0020;
}

function $formattedBox_$eq(this$static, x$1){
  this$static.formattedBox$u0020 = x$1;
}

function $onInitialize_1(this$static){
  var formatter, layout, patterns;
  layout = new Grid_1(4, 2);
  formatter = $getCellFormatter(layout);
  $setCellSpacing(layout, 5);
  $com$google$gwt$sample$showcase$client$content$i18n$CwDateTimeFormat$$patternList_$eq(this$static, new ListBox_0);
  $com$google$gwt$sample$showcase$client$content$i18n$CwDateTimeFormat$$patternList(this$static).setWidth('17em');
  patterns = this$static.constants.cwDateTimeFormatPatterns();
  $refArrayOps(($clinit_Predef$() , MODULE$_12 , patterns)).foreach(new CwDateTimeFormat$$anonfun$onInitialize$1_0(this$static));
  $addChangeHandler($com$google$gwt$sample$showcase$client$content$i18n$CwDateTimeFormat$$patternList(this$static), new CwDateTimeFormat$$anon$1_0(this$static));
  $setHTML_2(layout, 0, 0, this$static.constants.cwDateTimeFormatPatternLabel());
  $setWidget_2(layout, 0, 1, $com$google$gwt$sample$showcase$client$content$i18n$CwDateTimeFormat$$patternList(this$static));
  $patternBox_$eq(this$static, new TextBox_0);
  $patternBox(this$static).setWidth('17em');
  $addKeyUpHandler($patternBox(this$static), new CwDateTimeFormat$$anon$2_0(this$static));
  $setWidget_2(layout, 1, 1, $patternBox(this$static));
  $valueBox_$eq(this$static, new TextBox_0);
  $valueBox(this$static).setWidth('17em');
  $setText_7($valueBox(this$static), '13 September 1999 12:34:56');
  $addKeyUpHandler($valueBox(this$static), new CwDateTimeFormat$$anon$3_0(this$static));
  $setHTML_2(layout, 2, 0, this$static.constants.cwDateTimeFormatValueLabel());
  $setWidget_2(layout, 2, 1, $valueBox(this$static));
  $formattedBox_$eq(this$static, new Label_0);
  $formattedBox(this$static).setWidth('17em');
  $setHTML_2(layout, 3, 0, this$static.constants.cwDateTimeFormatFormattedLabel());
  $setWidget_2(layout, 3, 1, $formattedBox(this$static));
  $setVerticalAlignment(formatter, 3, 0, ($clinit_HasVerticalAlignment() , ALIGN_TOP));
  $com$google$gwt$sample$showcase$client$content$i18n$CwDateTimeFormat$$updatePattern(this$static);
  return layout;
}

function $patternBox(this$static){
  return this$static.patternBox$u0020;
}

function $patternBox_$eq(this$static, x$1){
  this$static.patternBox$u0020 = x$1;
}

function $showErrorMessage(this$static, errorMsg){
  if (equals_85(errorMsg, null)) {
    $formattedBox(this$static).removeStyleName('cw-RedText');
  }
   else {
    $setText_3($formattedBox(this$static), errorMsg);
    $formattedBox(this$static).addStyleName('cw-RedText');
  }
}

function $valueBox(this$static){
  return this$static.valueBox$u0020;
}

function $valueBox_$eq(this$static, x$1){
  this$static.valueBox$u0020 = x$1;
}

function $$init_331(){
}

function CwDateTimeFormat$$anon$1_0($outer){
  $$init_331();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
}

function CwDateTimeFormat$$anon$1(){
}

_ = CwDateTimeFormat$$anon$1_0.prototype = CwDateTimeFormat$$anon$1.prototype = new Object_0;
_.getClass$ = function getClass_332(){
  return Lcom_google_gwt_sample_showcase_client_content_i18n_CwDateTimeFormat$$anon$1_2_classLit;
}
;
_.onChange = function onChange_0(event_0){
  $com$google$gwt$sample$showcase$client$content$i18n$CwDateTimeFormat$$updatePattern(this.$outer$u0020);
}
;
_.castableTypeMap$ = makeCastMap([Q$ChangeHandler, Q$EventHandler]);
_.$outer$u0020 = null;
function $$init_332(){
}

function CwDateTimeFormat$$anon$2_0($outer){
  $$init_332();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
}

function CwDateTimeFormat$$anon$2(){
}

_ = CwDateTimeFormat$$anon$2_0.prototype = CwDateTimeFormat$$anon$2.prototype = new Object_0;
_.getClass$ = function getClass_333(){
  return Lcom_google_gwt_sample_showcase_client_content_i18n_CwDateTimeFormat$$anon$2_2_classLit;
}
;
_.onKeyUp = function onKeyUp_2(event_0){
  $com$google$gwt$sample$showcase$client$content$i18n$CwDateTimeFormat$$updatePattern(this.$outer$u0020);
}
;
_.castableTypeMap$ = makeCastMap([Q$KeyUpHandler, Q$EventHandler]);
_.$outer$u0020 = null;
function $$init_333(){
}

function CwDateTimeFormat$$anon$3_0($outer){
  $$init_333();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
}

function CwDateTimeFormat$$anon$3(){
}

_ = CwDateTimeFormat$$anon$3_0.prototype = CwDateTimeFormat$$anon$3.prototype = new Object_0;
_.getClass$ = function getClass_334(){
  return Lcom_google_gwt_sample_showcase_client_content_i18n_CwDateTimeFormat$$anon$3_2_classLit;
}
;
_.onKeyUp = function onKeyUp_3(event_0){
  $com$google$gwt$sample$showcase$client$content$i18n$CwDateTimeFormat$$updateFormattedValue(this.$outer$u0020);
}
;
_.castableTypeMap$ = makeCastMap([Q$KeyUpHandler, Q$EventHandler]);
_.$outer$u0020 = null;
_ = CwDateTimeFormat$$anon$4.prototype;
_.onSuccess = function onSuccess_2(){
  this.callback$1.onSuccess_0($onInitialize_1(this.$outer$u0020));
}
;
function $$init_335(){
}

function $apply_18(this$static, pattern){
  $addItem($com$google$gwt$sample$showcase$client$content$i18n$CwDateTimeFormat$$patternList(this$static.$outer$u0020), pattern);
}

function CwDateTimeFormat$$anonfun$onInitialize$1_0($outer){
  $$init_335();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  AbstractFunction1_0.call(this);
}

function CwDateTimeFormat$$anonfun$onInitialize$1(){
}

_ = CwDateTimeFormat$$anonfun$onInitialize$1_0.prototype = CwDateTimeFormat$$anonfun$onInitialize$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_19(v1){
  $apply_18(this, dynamicCast(v1, Q$String));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_336(){
  return Lcom_google_gwt_sample_showcase_client_content_i18n_CwDateTimeFormat$$anonfun$onInitialize$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.$outer$u0020 = null;
var Lcom_google_gwt_sample_showcase_client_content_i18n_CwDateTimeFormat$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'CwDateTimeFormat$$anonfun$onInitialize$1', 'CwDateTimeFormat$$anonfun$onInitialize$1', Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_i18n_CwDateTimeFormat$$anon$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'CwDateTimeFormat$$anon$1', 'CwDateTimeFormat$$anon$1', Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_i18n_CwDateTimeFormat$$anon$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'CwDateTimeFormat$$anon$2', 'CwDateTimeFormat$$anon$2', Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_i18n_CwDateTimeFormat$$anon$3_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'CwDateTimeFormat$$anon$3', 'CwDateTimeFormat$$anon$3', Ljava_lang_Object_2_classLit);
$entry(onLoad)(29);
