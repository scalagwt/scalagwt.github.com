_ = ShowcaseConstants_.prototype;
_.cwRadioButtonColors = function cwRadioButtonColors(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwRadioButtonColors'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['blue', 'red', 'yellow', 'green']);
    this.cache.put('cwRadioButtonColors', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwRadioButtonSelectColor = function cwRadioButtonSelectColor(){
  return '<b>Select your favorite color:<\/b>';
}
;
_.cwRadioButtonSelectSport = function cwRadioButtonSelectSport(){
  return '<b>Select your favorite sport:<\/b>';
}
;
_.cwRadioButtonSports = function cwRadioButtonSports(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwRadioButtonSports'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Baseball', 'Basketball', 'Football', 'Hockey', 'Soccer', 'Water Polo']);
    this.cache.put('cwRadioButtonSports', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
function $onInitialize_35(this$static){
  var colors$1, sports$1, vPanel$1;
  vPanel$1 = new VerticalPanel_0;
  $add_16(vPanel$1, new HTML_1(this$static.constants.cwRadioButtonSelectColor()));
  colors$1 = this$static.constants.cwRadioButtonColors();
  $foreach($until_0($intWrapper(($clinit_Predef$() , MODULE$_12 , 0)), colors$1.length), new CwRadioButton$$anonfun$onInitialize$1_0(vPanel$1, colors$1));
  $add_16(vPanel$1, new HTML_1('<br>' + this$static.constants.cwRadioButtonSelectSport()));
  sports$1 = this$static.constants.cwRadioButtonSports();
  $foreach($until_0($intWrapper(($clinit_Predef$() , MODULE$_12 , 0)), sports$1.length), new CwRadioButton$$anonfun$onInitialize$2_0(vPanel$1, sports$1));
  return vPanel$1;
}

_ = CwRadioButton$$anon$1.prototype;
_.onSuccess = function onSuccess_35(){
  this.callback$1.onSuccess_0($onInitialize_35(this.$outer$u0020));
}
;
function $$init_393(){
}

function $apply_69(this$static, i){
  var color, radioButton;
  color = this$static.colors$1[i];
  radioButton = new RadioButton_1('color', color);
  $ensureDebugId(radioButton, 'cwRadioButton-color-' + color);
  i == 2 && $setEnabled_1(radioButton, false);
  $add_16(this$static.vPanel$1, radioButton);
}

function CwRadioButton$$anonfun$onInitialize$1_0(vPanel$1, colors$1){
  $$init_393();
  this.vPanel$1 = vPanel$1;
  this.colors$1 = colors$1;
  AbstractFunction1_0.call(this);
}

function CwRadioButton$$anonfun$onInitialize$1(){
}

_ = CwRadioButton$$anonfun$onInitialize$1_0.prototype = CwRadioButton$$anonfun$onInitialize$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_70(v1){
  $apply_69(this, unboxToInt(v1));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_394(){
  return Lcom_google_gwt_sample_showcase_client_content_widgets_CwRadioButton$$anonfun$onInitialize$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.colors$1 = null;
_.vPanel$1 = null;
function $$init_394(){
}

function $apply_70(this$static, i){
  var radioButton, sport;
  sport = this$static.sports$1[i];
  radioButton = new RadioButton_1('sport', sport);
  $ensureDebugId(radioButton, 'cwRadioButton-sport-' + $replaceAll(sport, ' ', ''));
  i == 2 && $setValue_1(radioButton, $boolean2Boolean(($clinit_Predef$() , MODULE$_12 , true)));
  $add_16(this$static.vPanel$1, radioButton);
}

function CwRadioButton$$anonfun$onInitialize$2_0(vPanel$1, sports$1){
  $$init_394();
  this.vPanel$1 = vPanel$1;
  this.sports$1 = sports$1;
  AbstractFunction1_0.call(this);
}

function CwRadioButton$$anonfun$onInitialize$2(){
}

_ = CwRadioButton$$anonfun$onInitialize$2_0.prototype = CwRadioButton$$anonfun$onInitialize$2.prototype = new AbstractFunction1;
_.apply_0 = function apply_71(v1){
  $apply_70(this, unboxToInt(v1));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_395(){
  return Lcom_google_gwt_sample_showcase_client_content_widgets_CwRadioButton$$anonfun$onInitialize$2_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.sports$1 = null;
_.vPanel$1 = null;
function $boolean2Boolean(x){
  return valueOf_9(x);
}

var Lcom_google_gwt_sample_showcase_client_content_widgets_CwRadioButton$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.widgets.', 'CwRadioButton$$anonfun$onInitialize$1', 'CwRadioButton$$anonfun$onInitialize$1', Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_widgets_CwRadioButton$$anonfun$onInitialize$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.widgets.', 'CwRadioButton$$anonfun$onInitialize$2', 'CwRadioButton$$anonfun$onInitialize$2', Lscala_runtime_AbstractFunction1_2_classLit);
$entry(onLoad)(1);
