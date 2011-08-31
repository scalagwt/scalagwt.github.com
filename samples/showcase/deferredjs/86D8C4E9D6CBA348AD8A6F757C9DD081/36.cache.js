defineSeed(51, 1, {});
_.selectRemoveOption = function selectRemoveOption(select, index){
  select.remove(index);
}
;
function $remove_0(this$static, index){
  ($clinit_DOMImpl() , impl_0).selectRemoveOption(this$static, index);
}

defineSeed(393, 1, makeCastMap([Q$ShowcaseConstants]));
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
  $collectionAsScalaIterable(($clinit_JavaConversions$() , MODULE$_14 , cookies)).foreach(new CwCookies$$anonfun$com$google$gwt$sample$showcase$client$content$other$CwCookies$$refreshExistingCookies$1_0(this$static, selectedCookie$1, selectedIndex$1));
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
  $onClick(($clinit_Handlers$() , MODULE$_3).enrichHasClickHandlers(setCookieButton), new CwCookies$$anonfun$onInitialize$1_0(this$static));
  $onChange(($clinit_Handlers$() , MODULE$_3).enrichHasChangeHandlers($com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox(this$static)), new CwCookies$$anonfun$onInitialize$2_0(this$static));
  $onClick(($clinit_Handlers$() , MODULE$_3).enrichHasClickHandlers(deleteCookieButton), new CwCookies$$anonfun$onInitialize$3_0(this$static));
  $com$google$gwt$sample$showcase$client$content$other$CwCookies$$refreshExistingCookies(this$static, null);
  return mainLayout;
}

function $$init_410(){
}

function CwCookies$$anon$1_0($outer, selectedIndexFinal$1){
  $$init_410();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.selectedIndexFinal$1 = selectedIndexFinal$1;
  Object_1.call(this);
}

defineSeed(512, 1, makeCastMap([Q$Command]), CwCookies$$anon$1_0);
_.execute_1 = function execute_5(){
  this.selectedIndexFinal$1 < $getItemCount($com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox(this.$outer$u0020)) && $setSelectedIndex_0($com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox(this.$outer$u0020), this.selectedIndexFinal$1);
  $com$google$gwt$sample$showcase$client$content$other$CwCookies$$updateExstingCookie(this.$outer$u0020);
}
;
_.$outer$u0020 = null;
_.selectedIndexFinal$1 = 0;
defineSeed(513, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_13(){
  this.callback$1.onSuccess_0($onInitialize_12(this.$outer$u0020));
}
;
function $$init_412(){
}

function $apply_44(this$static, cookie){
  $addItem($com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox(this$static.$outer$u0020), cookie);
  $equals_3(cookie, this$static.selectedCookie$1) && (this$static.selectedIndex$1.elem = $getItemCount($com$google$gwt$sample$showcase$client$content$other$CwCookies$$existingCookiesBox(this$static.$outer$u0020)) - 1);
}

function CwCookies$$anonfun$com$google$gwt$sample$showcase$client$content$other$CwCookies$$refreshExistingCookies$1_0($outer, selectedCookie$1, selectedIndex$1){
  $$init_412();
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

defineSeed(514, 350, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwCookies$$anonfun$com$google$gwt$sample$showcase$client$content$other$CwCookies$$refreshExistingCookies$1_0);
_.apply_0 = function apply_45(v1){
  $apply_44(this, dynamicCast(v1, Q$String));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.$outer$u0020 = null;
_.selectedCookie$1 = null;
_.selectedIndex$1 = null;
function $$init_413(){
}

function $apply_45(this$static){
  var expires, name_0, value;
  name_0 = $getText_1($com$google$gwt$sample$showcase$client$content$other$CwCookies$$cookieNameBox(this$static.$outer$u0020));
  value = $getText_1($com$google$gwt$sample$showcase$client$content$other$CwCookies$$cookieValueBox(this$static.$outer$u0020));
  expires = new Date_4(add_1($getTime_0(new Date_1), fromInt($com$google$gwt$sample$showcase$client$content$other$CwCookies$$COOKIE_TIMEOUT(this$static.$outer$u0020))));
  if ($length_1(name_0) < 1) {
    alert_0(this$static.$outer$u0020.com$google$gwt$sample$showcase$client$content$other$CwCookies$$constants.cwCookiesInvalidCookie());
  }
   else {
    setCookie(name_0, value, expires);
    $com$google$gwt$sample$showcase$client$content$other$CwCookies$$refreshExistingCookies(this$static.$outer$u0020, name_0);
  }
}

function CwCookies$$anonfun$onInitialize$1_0($outer){
  $$init_413();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  AbstractFunction1_0.call(this);
}

defineSeed(515, 350, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwCookies$$anonfun$onInitialize$1_0);
_.apply_0 = function apply_46(v1){
  $apply_45(this, dynamicCast(v1, Q$ClickEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.$outer$u0020 = null;
function $$init_414(){
}

function $apply_46(this$static){
  $com$google$gwt$sample$showcase$client$content$other$CwCookies$$updateExstingCookie(this$static.$outer$u0020);
}

function CwCookies$$anonfun$onInitialize$2_0($outer){
  $$init_414();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  AbstractFunction1_0.call(this);
}

defineSeed(516, 350, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwCookies$$anonfun$onInitialize$2_0);
_.apply_0 = function apply_47(v1){
  $apply_46(this, dynamicCast(v1, Q$ChangeEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.$outer$u0020 = null;
function $$init_415(){
}

function $apply_47(this$static){
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
  $$init_415();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  AbstractFunction1_0.call(this);
}

defineSeed(517, 350, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwCookies$$anonfun$onInitialize$3_0);
_.apply_0 = function apply_48(v1){
  $apply_47(this, dynamicCast(v1, Q$ClickEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
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

defineSeed(941, 1, makeCastMap([Q$Iterable, Q$Collection]));
_.isEmpty = function isEmpty_2(){
  return this.coll.isEmpty();
}
;
function $clinit_Iterable$(){
  $clinit_Iterable$ = nullMethod;
  MODULE$_12 = new Iterable$_0;
}

function $$init_823(){
}

function Iterable$_0(){
  $$init_823();
  GenTraversableFactory_0.call(this);
  MODULE$_12 = this;
  $init$_71();
  $init$_79();
}

defineSeed(1027, 1028, makeCastMap([Q$ScalaObject]), Iterable$_0);
_.newBuilder = function newBuilder(){
  return $newBuilder(($clinit_Iterable$_0() , MODULE$_24));
}
;
var MODULE$_12;
function companion(){
  return $clinit_Iterable$() , MODULE$_12;
}

function seq_5($this){
  return $this;
}

function $collectionAsScalaIterable(i){
  var $15$, temp43;
  temp43 = i;
  instanceOf(temp43, Q$JavaConversions$IterableWrapper)?($15$ = dynamicCast(temp43, Q$JavaConversions$IterableWrapper).nullMethod()):($15$ = new JavaConversions$JCollectionWrapper_0(i));
  return $15$;
}

function $$init_835(){
}

function $gd6$1(this$static, x$1){
  return equals_113(x$1, $underlying(this$static));
}

function $underlying(this$static){
  return this$static.underlying$u0020;
}

function JavaConversions$JCollectionWrapper_0(underlying){
  $$init_835();
  this.underlying$u0020 = underlying;
  Object_1.call(this);
  $init$_38();
  $init$_66();
  $init$_37();
  $init$_65();
  $init$_73();
  $init$_36();
  $init$_64();
  $init$_17();
  $init$_16();
  $init$_48();
  $init$_47();
  $init$_12();
}

defineSeed(1046, 1, makeCastMap([Q$Serializable, Q$Equals, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$JavaConversions$JCollectionWrapper, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder]), JavaConversions$JCollectionWrapper_0);
_.$div$colon = function $div$colon_9(z, op){
  return $div$colon_22(this, z, op);
}
;
_.$plus$plus_0 = function $plus$plus_10(that, bf){
  return $plus$plus_27(this, that, bf);
}
;
_.addString = function addString_9(b, start, sep, end){
  return addString_23(this, b, start, sep, end);
}
;
_.canEqual = function canEqual_3(that){
  return canEqual_2();
}
;
_.companion = function companion_0(){
  return companion();
}
;
_.copyToArray = function copyToArray_22(xs, start){
  copyToArray_48(this, xs, start);
}
;
_.copyToArray_0 = function copyToArray_23(xs, start, len){
  copyToArray_6(this, xs, start, len);
}
;
_.copyToBuffer = function copyToBuffer_9(dest){
  copyToBuffer_22(this, dest);
}
;
_.drop_0 = function drop_13(n){
  return drop_3(this, n);
}
;
_.equals$ = function equals_32(x$1){
  var $49$, $50$, $52$, temp75, temp76, temp77, underlying$6;
  temp75 = x$1;
  if (instanceOf(temp75, Q$JavaConversions$JCollectionWrapper)) {
    temp76 = dynamicCast(temp75, Q$JavaConversions$JCollectionWrapper);
    temp77 = $underlying(temp76);
    underlying$6 = temp77;
    if ($gd6$1(this, underlying$6)) {
      undefined;
      body$percent029: while (true) {
        $52$ = dynamicCast(x$1, Q$JavaConversions$JCollectionWrapper).canEqual(this);
        break;
      }
      $50$ = $52$;
    }
     else {
      $50$ = false;
    }
    $49$ = $50$;
  }
   else {
    $49$ = false;
  }
  return this === x$1 || $49$;
}
;
_.filter_0 = function filter_11(p){
  return filter_29(this, p);
}
;
_.filterNot = function filterNot(p){
  return filterNot_10(this, p);
}
;
_.foldLeft = function foldLeft_10(z, op){
  return foldLeft_24(this, z, op);
}
;
_.forall = function forall_12(p){
  return forall_3(this, p);
}
;
_.foreach = function foreach_14(f){
  foreach_4(this, f);
}
;
_.genericBuilder = function genericBuilder(){
  return genericBuilder_8(this);
}
;
_.hashCode$ = function hashCode_41(){
  return $_hashCode(($clinit_ScalaRunTime$() , MODULE$_64 , this));
}
;
_.head = function head_1(){
  return head_0(this);
}
;
_.isEmpty = function isEmpty_21(){
  return $underlying(this).isEmpty();
}
;
_.isTraversableAgain = function isTraversableAgain_11(){
  return isTraversableAgain_0();
}
;
_.iterator_1 = function iterator_26(){
  return $asScalaIterator(($clinit_JavaConversions$() , MODULE$_14 , $underlying(this).iterator_0()));
}
;
_.mkString = function mkString_19(sep){
  return mkString_45(this, sep);
}
;
_.mkString_0 = function mkString_20(start, sep, end){
  return mkString_46(this, start, sep, end);
}
;
_.newBuilder = function newBuilder_0(){
  return newBuilder_15(this);
}
;
_.nonEmpty = function nonEmpty_9(){
  return nonEmpty_22(this);
}
;
_.productArity = function productArity_3(){
  return 1;
}
;
_.productElement = function productElement_3(x$1){
  var $53$, temp78;
  temp78 = x$1;
  if (temp78 == 0) {
    $53$ = $underlying(this);
  }
   else {
    throw new IndexOutOfBoundsException_1(boxToInteger(x$1).toString$());
  }
  return $53$;
}
;
_.productIterator = function productIterator_2(){
  return productIterator_0(this);
}
;
_.productPrefix = function productPrefix_4(){
  return 'JCollectionWrapper';
}
;
_.repr = function repr_0(){
  return repr_9(this);
}
;
_.sameElements = function sameElements_1(that){
  return sameElements_0(this, that);
}
;
_.seq_1 = function seq_21(){
  return seq_5(this);
}
;
_.seq_0 = function seq_22(){
  return this.seq_1();
}
;
_.size_1 = function size_28(){
  return $underlying(this).size_1();
}
;
_.stringPrefix = function stringPrefix(){
  return stringPrefix_11(this);
}
;
_.tail = function tail_0(){
  return tail_9(this);
}
;
_.take_0 = function take_13(n){
  return take_3(this, n);
}
;
_.thisCollection_0 = function thisCollection_1(){
  return thisCollection_0(this);
}
;
_.thisCollection_1 = function thisCollection_2(){
  return this.thisCollection_0();
}
;
_.toArray_1 = function toArray_19(evidence$1){
  return toArray_32(this, evidence$1);
}
;
_.toBuffer = function toBuffer_10(){
  return toBuffer_25(this);
}
;
_.toIterator = function toIterator_11(){
  return toIterator_2(this);
}
;
_.toList = function toList_9(){
  return toList_22(this);
}
;
_.toSeq = function toSeq_19(){
  return this.toSeq_0();
}
;
_.toSeq_0 = function toSeq_20(){
  return toSeq_48(this);
}
;
_.toStream = function toStream_11(){
  return toStream_2(this);
}
;
_.toString$ = function toString_68(){
  return toString_85(this);
}
;
_.toTraversable = function toTraversable_10(){
  return toTraversable_23(this);
}
;
_.zip_0 = function zip_13(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_2(bf){
  return zipWithIndex_0(this, bf);
}
;
_.underlying$u0020 = null;
var Lcom_google_gwt_sample_showcase_client_content_other_CwCookies$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.other.', 'CwCookies$$anonfun$onInitialize$1', 515, Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_other_CwCookies$$anonfun$onInitialize$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.other.', 'CwCookies$$anonfun$onInitialize$2', 516, Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_other_CwCookies$$anonfun$onInitialize$3_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.other.', 'CwCookies$$anonfun$onInitialize$3', 517, Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_other_CwCookies$$anonfun$com$google$gwt$sample$showcase$client$content$other$CwCookies$$refreshExistingCookies$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.other.', 'CwCookies$$anonfun$com$google$gwt$sample$showcase$client$content$other$CwCookies$$refreshExistingCookies$1', 514, Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_other_CwCookies$$anon$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.other.', 'CwCookies$$anon$1', 512, Ljava_lang_Object_2_classLit), Lscala_collection_JavaConversions$JCollectionWrapper_2_classLit = createForClass('scala.collection.', 'JavaConversions$JCollectionWrapper', 1046, Ljava_lang_Object_2_classLit), Lscala_collection_Iterable$_2_classLit = createForClass('scala.collection.', 'Iterable$', 1027, Lscala_collection_generic_GenTraversableFactory_2_classLit);
$entry(onLoad)(36);
