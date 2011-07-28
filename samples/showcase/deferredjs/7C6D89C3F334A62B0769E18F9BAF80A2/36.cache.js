_ = DOMImpl.prototype;
_.selectRemoveOption = function selectRemoveOption(select, index){
  select.remove(index);
}
;
_ = DOMImplIE9.prototype;
_.selectRemoveOption = function selectRemoveOption_0(select, index){
  try {
    select.remove(index);
  }
   catch (e) {
    select.removeChild(select.childNodes[index]);
  }
}
;
function $remove_0(this$static, index){
  ($clinit_DOMImpl() , impl_0).selectRemoveOption(this$static, index);
}

_ = ShowcaseConstants_.prototype;
_.cwCookiesDeleteCookie = function cwCookiesDeleteCookie(){
  return 'Delete';
}
;
_.cwCookiesExistingLabel = function cwCookiesExistingLabel(){
  return '<b>Existing Cookies:<\/b>';
}
;
_.cwCookiesInvalidCookie = function cwCookiesInvalidCookie(){
  return 'You must specify a cookie name';
}
;
_.cwCookiesNameLabel = function cwCookiesNameLabel(){
  return '<b>Name:<\/b>';
}
;
_.cwCookiesSetCookie = function cwCookiesSetCookie(){
  return 'Set Cookie';
}
;
_.cwCookiesValueLabel = function cwCookiesValueLabel(){
  return '<b>Value:<\/b>';
}
;
function $com$google$gwt$sample$showcase$client$content$other$CwCookies$$COOKIE_TIMEOUT(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$other$CwCookies$$COOKIE_TIMEOUT$u0020;
}

function $com$google$gwt$sample$showcase$client$content$other$CwCookies$$cookieNameBox(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$other$CwCookies$$cookieNameBox$u0020;
}

function $com$google$gwt$sample$showcase$client$content$other$CwCookies$$cookieNameBox_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$other$CwCookies$$cookieNameBox$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$other$CwCookies$$cookieValueBox(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$other$CwCookies$$cookieValueBox$u0020;
}

function $com$google$gwt$sample$showcase$client$content$other$CwCookies$$cookieValueBox_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$other$CwCookies$$cookieValueBox$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox$u0020;
}

function $com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$other$CwCookies$$refreshExistingCookies(this$static, selectedCookie$1){
  var cookies, selectedIndex$1, selectedIndexFinal$1;
  $clear_2($com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox(this$static));
  selectedIndex$1 = new IntRef_0(0);
  cookies = getCookieNames();
  $javaToScala(($clinit_JavaConversions$() , MODULE$_3 , cookies)).foreach(new CwCookies$$anonfun$com$google$gwt$sample$showcase$client$content$other$CwCookies$$refreshExistingCookies$1_0(this$static, selectedCookie$1, selectedIndex$1));
  selectedIndexFinal$1 = selectedIndex$1.elem;
  addCommand(new CwCookies$$anon$1_0(this$static, selectedIndexFinal$1));
}

function $com$google$gwt$sample$showcase$client$content$other$CwCookies$$updateExstingCookie(this$static){
  var cookieName, cookieValue, selectedIndex;
  if ($getItemCount($com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox(this$static)) < 1) {
    $setText_8($com$google$gwt$sample$showcase$client$content$other$CwCookies$$cookieNameBox(this$static), '');
    $setText_8($com$google$gwt$sample$showcase$client$content$other$CwCookies$$cookieValueBox(this$static), '');
  }
   else {
    selectedIndex = $getSelectedIndex_0($com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox(this$static));
    cookieName = $getValue_4($com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox(this$static), selectedIndex);
    cookieValue = getCookie(cookieName);
    $setText_8($com$google$gwt$sample$showcase$client$content$other$CwCookies$$cookieNameBox(this$static), cookieName);
    $setText_8($com$google$gwt$sample$showcase$client$content$other$CwCookies$$cookieValueBox(this$static), cookieValue);
  }
}

function $onInitialize_12(this$static){
  var deleteCookieButton, mainLayout, setCookieButton;
  mainLayout = new Grid_1(3, 3);
  $com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox_$eq(this$static, new ListBox_0);
  deleteCookieButton = new Button_1(this$static.com$google$gwt$sample$showcase$client$content$other$CwCookies$$constants.cwCookiesDeleteCookie());
  deleteCookieButton.addStyleName('sc-FixedWidthButton');
  $setHTML_2(mainLayout, 0, 0, '<b>' + this$static.com$google$gwt$sample$showcase$client$content$other$CwCookies$$constants.cwCookiesExistingLabel() + '<\/b>');
  $setWidget_2(mainLayout, 0, 1, $com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox(this$static));
  $setWidget_2(mainLayout, 0, 2, deleteCookieButton);
  $com$google$gwt$sample$showcase$client$content$other$CwCookies$$cookieNameBox_$eq(this$static, new TextBox_0);
  $setHTML_2(mainLayout, 1, 0, '<b>' + this$static.com$google$gwt$sample$showcase$client$content$other$CwCookies$$constants.cwCookiesNameLabel() + '<\/b>');
  $setWidget_2(mainLayout, 1, 1, $com$google$gwt$sample$showcase$client$content$other$CwCookies$$cookieNameBox(this$static));
  $com$google$gwt$sample$showcase$client$content$other$CwCookies$$cookieValueBox_$eq(this$static, new TextBox_0);
  setCookieButton = new Button_1(this$static.com$google$gwt$sample$showcase$client$content$other$CwCookies$$constants.cwCookiesSetCookie());
  setCookieButton.addStyleName('sc-FixedWidthButton');
  $setHTML_2(mainLayout, 2, 0, '<b>' + this$static.com$google$gwt$sample$showcase$client$content$other$CwCookies$$constants.cwCookiesValueLabel() + '<\/b>');
  $setWidget_2(mainLayout, 2, 1, $com$google$gwt$sample$showcase$client$content$other$CwCookies$$cookieValueBox(this$static));
  $setWidget_2(mainLayout, 2, 2, setCookieButton);
  $onClick(($clinit_Handlers$() , MODULE$_2).enrichHasClickHandlers(setCookieButton), new CwCookies$$anonfun$onInitialize$1_0(this$static));
  $onChange(($clinit_Handlers$() , MODULE$_2).enrichHasChangeHandlers($com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox(this$static)), new CwCookies$$anonfun$onInitialize$2_0(this$static));
  $onClick(($clinit_Handlers$() , MODULE$_2).enrichHasClickHandlers(deleteCookieButton), new CwCookies$$anonfun$onInitialize$3_0(this$static));
  $com$google$gwt$sample$showcase$client$content$other$CwCookies$$refreshExistingCookies(this$static, null);
  return mainLayout;
}

function $$init_393(){
}

function CwCookies$$anon$1_0($outer, selectedIndexFinal$1){
  $$init_393();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.selectedIndexFinal$1 = selectedIndexFinal$1;
  Object_1.call(this);
}

function CwCookies$$anon$1(){
}

_ = CwCookies$$anon$1_0.prototype = CwCookies$$anon$1.prototype = new Object_0;
_.execute_1 = function execute_5(){
  this.selectedIndexFinal$1 < $getItemCount($com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox(this.$outer$u0020)) && $setSelectedIndex_0($com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox(this.$outer$u0020), this.selectedIndexFinal$1);
  $com$google$gwt$sample$showcase$client$content$other$CwCookies$$updateExstingCookie(this.$outer$u0020);
}
;
_.getClass$ = function getClass_394(){
  return Lcom_google_gwt_sample_showcase_client_content_other_CwCookies$$anon$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Command]);
_.$outer$u0020 = null;
_.selectedIndexFinal$1 = 0;
_ = CwCookies$$anon$2.prototype;
_.onSuccess = function onSuccess_13(){
  this.callback$1.onSuccess_0($onInitialize_12(this.$outer$u0020));
}
;
function $$init_395(){
}

function $apply_41(this$static, cookie){
  $addItem($com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox(this$static.$outer$u0020), cookie);
  $equals_3(cookie, this$static.selectedCookie$1) && (this$static.selectedIndex$1.elem = $getItemCount($com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox(this$static.$outer$u0020)) - 1);
}

function CwCookies$$anonfun$com$google$gwt$sample$showcase$client$content$other$CwCookies$$refreshExistingCookies$1_0($outer, selectedCookie$1, selectedIndex$1){
  $$init_395();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.selectedCookie$1 = selectedCookie$1;
  this.selectedIndex$1 = selectedIndex$1;
  AbstractFunction1_0.call(this);
}

function CwCookies$$anonfun$com$google$gwt$sample$showcase$client$content$other$CwCookies$$refreshExistingCookies$1(){
}

_ = CwCookies$$anonfun$com$google$gwt$sample$showcase$client$content$other$CwCookies$$refreshExistingCookies$1_0.prototype = CwCookies$$anonfun$com$google$gwt$sample$showcase$client$content$other$CwCookies$$refreshExistingCookies$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_42(v1){
  $apply_41(this, dynamicCast(v1, Q$String));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_396(){
  return Lcom_google_gwt_sample_showcase_client_content_other_CwCookies$$anonfun$com$google$gwt$sample$showcase$client$content$other$CwCookies$$refreshExistingCookies$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.$outer$u0020 = null;
_.selectedCookie$1 = null;
_.selectedIndex$1 = null;
function $$init_396(){
}

function $apply_42(this$static){
  var expires, name_0, value;
  name_0 = $getText_1($com$google$gwt$sample$showcase$client$content$other$CwCookies$$cookieNameBox(this$static.$outer$u0020));
  value = $getText_1($com$google$gwt$sample$showcase$client$content$other$CwCookies$$cookieValueBox(this$static.$outer$u0020));
  expires = new Date_4(fromInt(add_1($getTime_0(new Date_1), fromInt($com$google$gwt$sample$showcase$client$content$other$CwCookies$$COOKIE_TIMEOUT(this$static.$outer$u0020)))));
  if ($length_1(name_0) < 1) {
    alert_0(this$static.$outer$u0020.com$google$gwt$sample$showcase$client$content$other$CwCookies$$constants.cwCookiesInvalidCookie());
  }
   else {
    setCookie(name_0, value, expires);
    $com$google$gwt$sample$showcase$client$content$other$CwCookies$$refreshExistingCookies(this$static.$outer$u0020, name_0);
  }
}

function CwCookies$$anonfun$onInitialize$1_0($outer){
  $$init_396();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  AbstractFunction1_0.call(this);
}

function CwCookies$$anonfun$onInitialize$1(){
}

_ = CwCookies$$anonfun$onInitialize$1_0.prototype = CwCookies$$anonfun$onInitialize$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_43(v1){
  $apply_42(this, dynamicCast(v1, Q$ClickEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_397(){
  return Lcom_google_gwt_sample_showcase_client_content_other_CwCookies$$anonfun$onInitialize$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.$outer$u0020 = null;
function $$init_397(){
}

function $apply_43(this$static){
  $com$google$gwt$sample$showcase$client$content$other$CwCookies$$updateExstingCookie(this$static.$outer$u0020);
}

function CwCookies$$anonfun$onInitialize$2_0($outer){
  $$init_397();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  AbstractFunction1_0.call(this);
}

function CwCookies$$anonfun$onInitialize$2(){
}

_ = CwCookies$$anonfun$onInitialize$2_0.prototype = CwCookies$$anonfun$onInitialize$2.prototype = new AbstractFunction1;
_.apply_0 = function apply_44(v1){
  $apply_43(this, dynamicCast(v1, Q$ChangeEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_398(){
  return Lcom_google_gwt_sample_showcase_client_content_other_CwCookies$$anonfun$onInitialize$2_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.$outer$u0020 = null;
function $$init_398(){
}

function $apply_44(this$static){
  var cookieName, selectedIndex;
  selectedIndex = $getSelectedIndex_0($com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox(this$static.$outer$u0020));
  if (selectedIndex > -1 && selectedIndex < $getItemCount($com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox(this$static.$outer$u0020))) {
    cookieName = $getValue_4($com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox(this$static.$outer$u0020), selectedIndex);
    removeCookie(cookieName);
    $removeItem($com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox(this$static.$outer$u0020), selectedIndex);
    $com$google$gwt$sample$showcase$client$content$other$CwCookies$$updateExstingCookie(this$static.$outer$u0020);
  }
}

function CwCookies$$anonfun$onInitialize$3_0($outer){
  $$init_398();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  AbstractFunction1_0.call(this);
}

function CwCookies$$anonfun$onInitialize$3(){
}

_ = CwCookies$$anonfun$onInitialize$3_0.prototype = CwCookies$$anonfun$onInitialize$3.prototype = new AbstractFunction1;
_.apply_0 = function apply_45(v1){
  $apply_44(this, dynamicCast(v1, Q$ClickEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_399(){
  return Lcom_google_gwt_sample_showcase_client_content_other_CwCookies$$anonfun$onInitialize$3_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.$outer$u0020 = null;
function ensureCookies(){
  var newCachedCookies;
  if (isNull(cachedCookies) || needsRefresh()) {
    newCachedCookies = new HashMap_0;
    loadCookies(newCachedCookies);
    cachedCookies = newCachedCookies;
  }
  return cachedCookies;
}

function getCookie(name_0){
  var cookiesMap;
  cookiesMap = ensureCookies();
  return dynamicCast(cookiesMap.get(name_0), Q$String);
}

function getCookieNames(){
  return ensureCookies().keySet_0();
}

function loadCookies(m_0){
  var docCookie = $doc.cookie;
  if (docCookie && docCookie != '') {
    var crumbs = docCookie.split('; ');
    for (var i = 0; i < crumbs.length; ++i) {
      var name_0, value;
      var eqIdx = crumbs[i].indexOf('=');
      if (eqIdx == -1) {
        name_0 = crumbs[i];
        value = '';
      }
       else {
        name_0 = crumbs[i].substring(0, eqIdx);
        value = crumbs[i].substring(eqIdx + 1);
      }
      if (uriEncoding) {
        try {
          name_0 = decodeURIComponent(name_0);
        }
         catch (e) {
        }
        try {
          value = decodeURIComponent(value);
        }
         catch (e) {
        }
      }
      m_0.put(name_0, value);
    }
  }
}

function needsRefresh(){
  var docCookie = $doc.cookie;
  if (docCookie != rawCookies) {
    rawCookies = docCookie;
    return true;
  }
   else {
    return false;
  }
}

function removeCookie(name_0){
  name_0 = uriEncode(name_0);
  removeCookieNative(name_0);
}

function removeCookieNative(name_0){
  $doc.cookie = name_0 + '=;expires=Fri, 02-Jan-1970 00:00:00 GMT';
}

function setCookie(name_0, value, expires){
  setCookie_0(name_0, value, expires, null, null, false);
}

function setCookie_0(name_0, value, expires, domain, path, secure){
  name_0 = uriEncode(name_0);
  value = uriEncode(value);
  setCookieImpl(name_0, value, toDouble(isNull(expires)?P0_longLit:$getTime_0(expires)), domain, path, secure);
}

function setCookieImpl(name_0, value, expires, domain, path, secure){
  var c = name_0 + '=' + value;
  if (expires)
    c += ';expires=' + (new Date(expires)).toGMTString();
  if (domain)
    c += ';domain=' + domain;
  if (path)
    c += ';path=' + path;
  if (secure)
    c += ';secure';
  $doc.cookie = c;
}

function uriEncode(s){
  return encodeURIComponent(s);
}

var cachedCookies = null, rawCookies = null, uriEncoding = true;
function $removeItem(this$static, index){
  $checkIndex(this$static, index);
  $remove_0($getSelectElement(this$static), index);
}

var Lcom_google_gwt_sample_showcase_client_content_other_CwCookies$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.other.', 'CwCookies$$anonfun$onInitialize$1', 'CwCookies$$anonfun$onInitialize$1', Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_other_CwCookies$$anonfun$onInitialize$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.other.', 'CwCookies$$anonfun$onInitialize$2', 'CwCookies$$anonfun$onInitialize$2', Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_other_CwCookies$$anonfun$onInitialize$3_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.other.', 'CwCookies$$anonfun$onInitialize$3', 'CwCookies$$anonfun$onInitialize$3', Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_other_CwCookies$$anonfun$com$google$gwt$sample$showcase$client$content$other$CwCookies$$refreshExistingCookies$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.other.', 'CwCookies$$anonfun$com$google$gwt$sample$showcase$client$content$other$CwCookies$$refreshExistingCookies$1', 'CwCookies$$anonfun$com$google$gwt$sample$showcase$client$content$other$CwCookies$$refreshExistingCookies$1', Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_other_CwCookies$$anon$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.other.', 'CwCookies$$anon$1', 'CwCookies$$anon$1', Ljava_lang_Object_2_classLit);
$entry(onLoad)(36);
