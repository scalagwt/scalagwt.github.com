function $$init_97(){
}

function $dispatch_19(this$static, handler){
  null.nullMethod();
}

function InitializeEvent_0(){
  GwtEvent_0.call(this);
  $$init_97();
}

function fire_4(source){
  var event_0;
  if (isNotNull(TYPE_19)) {
    event_0 = new InitializeEvent_0;
    source.fireEvent_0(event_0);
  }
}

defineSeed(135, 102, {}, InitializeEvent_0);
_.dispatch_0 = function dispatch_20(handler){
  $dispatch_19(this, dynamicCast(handler, Q$InitializeHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_21(){
  return TYPE_19;
}
;
var TYPE_19 = null;
defineSeed(243, 1, makeCastMap([Q$HasVisibility, Q$UIObject]));
_.setTitle = function setTitle(title){
  jsEquals(title, null) || $length_1(title) == 0?removeElementAttribute($getElement(this), 'title'):setElementAttribute($getElement(this), 'title', title);
}
;
defineSeed(259, 242, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Iterable]));
_.add_1 = function add_2(child){
  throw new UnsupportedOperationException_1('This panel does not support no-arg add()');
}
;
defineSeed(258, 259, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$AcceptsOneWidget, Q$HasOneWidget, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$SimplePanel, Q$UIObject, Q$Widget, Q$Iterable]));
_.add_1 = function add_3(w){
  if (isNotNull(this.getWidget())) {
    throw new IllegalStateException_1('SimplePanel can only contain one child widget');
  }
  this.setWidget(w);
}
;
function FocusWidget_0(){
  Widget_0.call(this);
  $$init_224();
}

function $onInitialize_28(){
  var area, grid, toolbar_0;
  area = new RichTextArea_0;
  $ensureDebugId(area, 'cwRichText-area');
  area.setSize('100%', '14em');
  toolbar_0 = new RichTextToolbar_0(area);
  $ensureDebugId(toolbar_0, 'cwRichText-toolbar');
  toolbar_0.setWidth('100%');
  grid = new Grid_1(2, 1);
  grid.setStyleName('cw-RichText');
  $setWidget_2(grid, 0, 0, toolbar_0);
  $setWidget_2(grid, 1, 0, area);
  return grid;
}

defineSeed(492, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_29(){
  this.callback$1.onSuccess_0($onInitialize_28());
}
;
function $$init_389(){
}

function $add_2(p, w){
  p.add_1(w);
  return w;
}

function $bottomPanel(this$static){
  return this$static.bottomPanel$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$backColors(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$backColors$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$backColors_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$backColors$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$bold(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$bold$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$bold_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$bold$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$createLink(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$createLink$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$createLink_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$createLink$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$extended(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$extended$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fontSizes(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fontSizes$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fontSizes_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fontSizes$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fonts(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fonts$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fonts_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fonts$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$foreColors(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$foreColors$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$foreColors_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$foreColors$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$hr(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$hr$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$hr_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$hr$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$indent(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$indent$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$indent_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$indent$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$insertImage(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$insertImage$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$insertImage_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$insertImage$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$italic(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$italic$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$italic_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$italic$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyCenter(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyCenter$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyCenter_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyCenter$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyLeft(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyLeft$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyLeft_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyLeft$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyRight(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyRight$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyRight_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyRight$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$ol(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$ol$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$ol_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$ol$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$outdent(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$outdent$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$outdent_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$outdent$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$removeFormat(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$removeFormat$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$removeFormat_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$removeFormat$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$removeLink(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$removeLink$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$removeLink_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$removeLink$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$strikethrough(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$strikethrough$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$strikethrough_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$strikethrough$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$subscript(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$subscript$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$subscript_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$subscript$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$superscript(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$superscript$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$superscript_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$superscript$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$ul(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$ul$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$ul_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$ul$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$underline(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$underline$u0020;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$underline_$eq(this$static, x$1){
  this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$underline$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$updateStatus(this$static){
  if (isNotNull($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic(this$static))) {
    $setDown_0($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$bold(this$static), $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic(this$static).isBold());
    $setDown_0($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$italic(this$static), $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic(this$static).isItalic());
    $setDown_0($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$underline(this$static), $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic(this$static).isUnderlined());
    $setDown_0($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$subscript(this$static), $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic(this$static).isSubscript());
    $setDown_0($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$superscript(this$static), $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic(this$static).isSuperscript());
  }
  isNotNull($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$extended(this$static)) && $setDown_0($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$strikethrough(this$static), $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$extended(this$static).isStrikethrough());
}

function $createColorList(this$static, caption){
  var lb;
  lb = new ListBox_0;
  $addChangeHandler(lb, $handler(this$static));
  $setVisibleItemCount(lb, 1);
  $addItem(lb, caption);
  $addItem_0(lb, $strings(this$static).white(), 'white');
  $addItem_0(lb, $strings(this$static).black(), 'black');
  $addItem_0(lb, $strings(this$static).red(), 'red');
  $addItem_0(lb, $strings(this$static).green(), 'green');
  $addItem_0(lb, $strings(this$static).yellow(), 'yellow');
  $addItem_0(lb, $strings(this$static).blue(), 'blue');
  return lb;
}

function $createFontList(this$static){
  var lb;
  lb = new ListBox_0;
  $addChangeHandler(lb, $handler(this$static));
  $setVisibleItemCount(lb, 1);
  $addItem_0(lb, $strings(this$static).font(), '');
  $addItem_0(lb, $strings(this$static).normal(), '');
  $addItem_0(lb, 'Times New Roman', 'Times New Roman');
  $addItem_0(lb, 'Arial', 'Arial');
  $addItem_0(lb, 'Courier New', 'Courier New');
  $addItem_0(lb, 'Georgia', 'Georgia');
  $addItem_0(lb, 'Trebuchet', 'Trebuchet');
  $addItem_0(lb, 'Verdana', 'Verdana');
  return lb;
}

function $createFontSizes(this$static){
  var lb;
  lb = new ListBox_0;
  $addChangeHandler(lb, $handler(this$static));
  $setVisibleItemCount(lb, 1);
  $addItem(lb, $strings(this$static).size_2());
  $addItem(lb, $strings(this$static).xxsmall());
  $addItem(lb, $strings(this$static).xsmall());
  $addItem(lb, $strings(this$static).small());
  $addItem(lb, $strings(this$static).medium());
  $addItem(lb, $strings(this$static).large());
  $addItem(lb, $strings(this$static).xlarge());
  $addItem(lb, $strings(this$static).xxlarge());
  return lb;
}

function $createPushButton(this$static, img, tip){
  var pb;
  pb = new PushButton_1(new Image_1(img));
  $addClickHandler(pb, $handler(this$static));
  pb.setTitle(tip);
  return pb;
}

function $createToggleButton(this$static, img, tip){
  var tb;
  tb = new ToggleButton_1(new Image_1(img));
  $addClickHandler(tb, $handler(this$static));
  tb.setTitle(tip);
  return tb;
}

function $handler(this$static){
  return this$static.handler$u0020;
}

function $images_0(this$static){
  return this$static.images$u0020;
}

function $outer_0(this$static){
  return this$static.outer$u0020;
}

function $strings(this$static){
  return this$static.strings$u0020;
}

function $topPanel(this$static){
  return this$static.topPanel$u0020;
}

function RichTextToolbar_0(richText){
  $$init_389();
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$richText = richText;
  Composite_0.call(this);
  this.images$u0020 = new RichTextToolbar_Images_default_StaticClientBundleGenerator_0;
  this.strings$u0020 = new RichTextToolbar_Strings__0;
  this.handler$u0020 = new RichTextToolbar$EventHandler_0(this);
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic$u0020 = $getBasicFormatter(richText);
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$extended$u0020 = $getExtendedFormatter(richText);
  this.outer$u0020 = new VerticalPanel_0;
  this.topPanel$u0020 = new HorizontalPanel_0;
  this.bottomPanel$u0020 = new HorizontalPanel_0;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$bold$u0020 = null;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$italic$u0020 = null;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$underline$u0020 = null;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$subscript$u0020 = null;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$superscript$u0020 = null;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$strikethrough$u0020 = null;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$indent$u0020 = null;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$outdent$u0020 = null;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyLeft$u0020 = null;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyCenter$u0020 = null;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyRight$u0020 = null;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$hr$u0020 = null;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$ol$u0020 = null;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$ul$u0020 = null;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$insertImage$u0020 = null;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$createLink$u0020 = null;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$removeLink$u0020 = null;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$removeFormat$u0020 = null;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$backColors$u0020 = null;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$foreColors$u0020 = null;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fonts$u0020 = null;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fontSizes$u0020 = null;
  $add_16($outer_0(this), $topPanel(this));
  $add_16($outer_0(this), $bottomPanel(this));
  $topPanel(this).setWidth('100%');
  $bottomPanel(this).setWidth('100%');
  $initWidget(this, $outer_0(this));
  this.setStyleName('gwt-RichTextToolbar');
  richText.addStyleName('hasRichTextToolbar');
  if (isNotNull($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic(this))) {
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$bold_$eq(this, dynamicCast($add_2($topPanel(this), $createToggleButton(this, $images_0(this).bold(), $strings(this).bold_0())), Q$ToggleButton));
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$italic_$eq(this, dynamicCast($add_2($topPanel(this), $createToggleButton(this, $images_0(this).italic(), $strings(this).italic_0())), Q$ToggleButton));
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$underline_$eq(this, dynamicCast($add_2($topPanel(this), $createToggleButton(this, $images_0(this).underline(), $strings(this).underline_0())), Q$ToggleButton));
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$subscript_$eq(this, dynamicCast($add_2($topPanel(this), $createToggleButton(this, $images_0(this).subscript(), $strings(this).subscript_0())), Q$ToggleButton));
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$superscript_$eq(this, dynamicCast($add_2($topPanel(this), $createToggleButton(this, $images_0(this).superscript(), $strings(this).superscript_0())), Q$ToggleButton));
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyLeft_$eq(this, dynamicCast($add_2($topPanel(this), $createPushButton(this, $images_0(this).justifyLeft(), $strings(this).justifyLeft_0())), Q$PushButton));
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyCenter_$eq(this, dynamicCast($add_2($topPanel(this), $createPushButton(this, $images_0(this).justifyCenter(), $strings(this).justifyCenter_0())), Q$PushButton));
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyRight_$eq(this, dynamicCast($add_2($topPanel(this), $createPushButton(this, $images_0(this).justifyRight(), $strings(this).justifyRight_0())), Q$PushButton));
  }
  if (isNotNull($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$extended(this))) {
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$strikethrough_$eq(this, dynamicCast($add_2($topPanel(this), $createToggleButton(this, $images_0(this).strikeThrough(), $strings(this).strikeThrough_0())), Q$ToggleButton));
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$indent_$eq(this, dynamicCast($add_2($topPanel(this), $createPushButton(this, $images_0(this).indent(), $strings(this).indent_0())), Q$PushButton));
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$outdent_$eq(this, dynamicCast($add_2($topPanel(this), $createPushButton(this, $images_0(this).outdent(), $strings(this).outdent_0())), Q$PushButton));
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$hr_$eq(this, dynamicCast($add_2($topPanel(this), $createPushButton(this, $images_0(this).hr(), $strings(this).hr_0())), Q$PushButton));
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$ol_$eq(this, dynamicCast($add_2($topPanel(this), $createPushButton(this, $images_0(this).ol(), $strings(this).ol_0())), Q$PushButton));
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$ul_$eq(this, dynamicCast($add_2($topPanel(this), $createPushButton(this, $images_0(this).ul(), $strings(this).ul_0())), Q$PushButton));
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$insertImage_$eq(this, dynamicCast($add_2($topPanel(this), $createPushButton(this, $images_0(this).insertImage(), $strings(this).insertImage_0())), Q$PushButton));
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$createLink_$eq(this, dynamicCast($add_2($topPanel(this), $createPushButton(this, $images_0(this).createLink(), $strings(this).createLink_0())), Q$PushButton));
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$removeLink_$eq(this, dynamicCast($add_2($topPanel(this), $createPushButton(this, $images_0(this).removeLink(), $strings(this).removeLink_0())), Q$PushButton));
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$removeFormat_$eq(this, dynamicCast($add_2($topPanel(this), $createPushButton(this, $images_0(this).removeFormat(), $strings(this).removeFormat_0())), Q$PushButton));
  }
  if (isNotNull($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic(this))) {
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$backColors_$eq(this, dynamicCast($add_2($bottomPanel(this), $createColorList(this, 'Background')), Q$ListBox));
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$foreColors_$eq(this, dynamicCast($add_2($bottomPanel(this), $createColorList(this, 'Foreground')), Q$ListBox));
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fonts_$eq(this, dynamicCast($add_2($bottomPanel(this), $createFontList(this)), Q$ListBox));
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fontSizes_$eq(this, dynamicCast($add_2($bottomPanel(this), $createFontSizes(this)), Q$ListBox));
    $addKeyUpHandler(richText, $handler(this));
    $addClickHandler(richText, $handler(this));
  }
}

defineSeed(493, 241, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget, Q$ScalaObject]), RichTextToolbar_0);
_.bottomPanel$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$backColors$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$bold$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$createLink$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$extended$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fontSizes$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fonts$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$foreColors$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$hr$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$indent$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$insertImage$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$italic$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyCenter$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyLeft$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyRight$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$ol$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$outdent$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$removeFormat$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$removeLink$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$richText = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$strikethrough$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$subscript$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$superscript$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$ul$u0020 = null;
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$underline$u0020 = null;
_.handler$u0020 = null;
_.images$u0020 = null;
_.outer$u0020 = null;
_.strings$u0020 = null;
_.topPanel$u0020 = null;
function $clinit_RichTextToolbar$(){
  $clinit_RichTextToolbar$ = nullMethod;
  MODULE$_8 = new RichTextToolbar$_0;
}

function $$init_390(){
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fontSizesConstants(this$static){
  return this$static.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fontSizesConstants$u0020;
}

function RichTextToolbar$_0(){
  $$init_390();
  Object_1.call(this);
  MODULE$_8 = this;
  this.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fontSizesConstants$u0020 = initValues(_3Lcom_google_gwt_user_client_ui_RichTextArea$FontSize_2_classLit, makeCastMap([Q$RichTextArea$FontSize_$1, Q$Serializable, Q$Object_$1]), Q$RichTextArea$FontSize, [($clinit_RichTextArea$FontSize() , XX_SMALL), ($clinit_RichTextArea$FontSize() , X_SMALL), ($clinit_RichTextArea$FontSize() , SMALL), ($clinit_RichTextArea$FontSize() , MEDIUM), ($clinit_RichTextArea$FontSize() , LARGE), ($clinit_RichTextArea$FontSize() , X_LARGE), ($clinit_RichTextArea$FontSize() , XX_LARGE)]);
}

defineSeed(494, 1, makeCastMap([Q$ScalaObject]), RichTextToolbar$_0);
_.com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fontSizesConstants$u0020 = null;
var MODULE$_8;
function $$init_391(){
}

function $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this$static){
  return this$static.$outer$u0020;
}

function RichTextToolbar$EventHandler_0($outer){
  $$init_391();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
}

defineSeed(495, 1, makeCastMap([Q$ChangeHandler, Q$ClickHandler, Q$KeyUpHandler, Q$EventHandler, Q$ScalaObject]), RichTextToolbar$EventHandler_0);
_.onChange = function onChange_3(event_0){
  var sender;
  sender = dynamicCast($getSource_0(event_0), Q$Widget);
  if (equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$backColors($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))) {
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)).setBackColor($getValue_4($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$backColors($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)), $getSelectedIndex_0($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$backColors($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))));
    $setSelectedIndex_0($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$backColors($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)), 0);
  }
   else {
    if (equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$foreColors($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))) {
      $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)).setForeColor($getValue_4($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$foreColors($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)), $getSelectedIndex_0($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$foreColors($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))));
      $setSelectedIndex_0($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$foreColors($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)), 0);
    }
     else {
      if (equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fonts($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))) {
        $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)).setFontName($getValue_4($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fonts($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)), $getSelectedIndex_0($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fonts($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))));
        $setSelectedIndex_0($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fonts($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)), 0);
      }
       else {
        if (equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fontSizes($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))) {
          $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)).setFontSize($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fontSizesConstants(($clinit_RichTextToolbar$() , MODULE$_8))[$getSelectedIndex_0($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fontSizes($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this))) - 1]);
          $setSelectedIndex_0($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$fontSizes($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)), 0);
        }
      }
    }
  }
}
;
_.onClick = function onClick_6(event_0){
  var sender, url;
  sender = dynamicCast($getSource_0(event_0), Q$Widget);
  if (equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$bold($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))) {
    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)).toggleBold();
  }
   else {
    if (equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$italic($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))) {
      $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)).toggleItalic();
    }
     else {
      if (equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$underline($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))) {
        $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)).toggleUnderline();
      }
       else {
        if (equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$subscript($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))) {
          $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)).toggleSubscript();
        }
         else {
          if (equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$superscript($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))) {
            $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)).toggleSuperscript();
          }
           else {
            if (equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$strikethrough($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))) {
              $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$extended($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)).toggleStrikethrough();
            }
             else {
              if (equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$indent($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))) {
                $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$extended($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)).rightIndent();
              }
               else {
                if (equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$outdent($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))) {
                  $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$extended($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)).leftIndent();
                }
                 else {
                  if (equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyLeft($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))) {
                    $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)).setJustification(($clinit_RichTextArea$Justification() , LEFT));
                  }
                   else {
                    if (equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyCenter($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))) {
                      $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)).setJustification(($clinit_RichTextArea$Justification() , CENTER_1));
                    }
                     else {
                      if (equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$justifyRight($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))) {
                        $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$basic($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)).setJustification(($clinit_RichTextArea$Justification() , RIGHT));
                      }
                       else {
                        if (equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$insertImage($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))) {
                          url = prompt_0('Enter an image URL:', 'http://');
                          jsNotEquals(url, null) && $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$extended($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)).insertImage_1(url);
                        }
                         else {
                          if (equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$createLink($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))) {
                            url = prompt_0('Enter a link URL:', 'http://');
                            jsNotEquals(url, null) && $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$extended($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)).createLink_1(url);
                          }
                           else {
                            equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$removeLink($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))?$com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$extended($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)).removeLink_1():equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$hr($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))?$com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$extended($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)).insertHorizontalRule():equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$ol($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))?$com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$extended($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)).insertOrderedList():equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$ul($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))?$com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$extended($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)).insertUnorderedList():equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$removeFormat($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)))?$com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$extended($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this)).removeFormat_1():equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this).com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$richText) && $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$updateStatus($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this));
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
;
_.onKeyUp = function onKeyUp_9(event_0){
  var sender;
  sender = dynamicCast($getSource_0(event_0), Q$Widget);
  equals_113(sender, $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this).com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$richText) && $com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$$updateStatus($com$google$gwt$sample$showcase$client$content$text$RichTextToolbar$EventHandler$$$outer(this));
}
;
_.$outer$u0020 = null;
function $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator = nullMethod;
  _instance0_2 = new RichTextToolbar_Images_default_StaticClientBundleGenerator_0;
  bundledImage_None_2 = getModuleBaseURL() + 'B2D9B163F19B47261E4B4C3C85BAC84A.cache.png';
}

function $$init_392(){
}

function $boldInitializer(){
  bold = new ImageResourcePrototype_0('bold', fromTrustedString_1(bundledImage_None_2), 340, 0, 20, 20, false, false);
}

function $createLinkInitializer(){
  createLink = new ImageResourcePrototype_0('createLink', fromTrustedString_1(bundledImage_None_2), 320, 0, 20, 20, false, false);
}

function $hrInitializer(){
  hr = new ImageResourcePrototype_0('hr', fromTrustedString_1(bundledImage_None_2), 300, 0, 20, 20, false, false);
}

function $indentInitializer(){
  indent = new ImageResourcePrototype_0('indent', fromTrustedString_1(bundledImage_None_2), 280, 0, 20, 20, false, false);
}

function $insertImageInitializer(){
  insertImage = new ImageResourcePrototype_0('insertImage', fromTrustedString_1(bundledImage_None_2), 260, 0, 20, 20, false, false);
}

function $italicInitializer(){
  italic = new ImageResourcePrototype_0('italic', fromTrustedString_1(bundledImage_None_2), 240, 0, 20, 20, false, false);
}

function $justifyCenterInitializer(){
  justifyCenter = new ImageResourcePrototype_0('justifyCenter', fromTrustedString_1(bundledImage_None_2), 220, 0, 20, 20, false, false);
}

function $justifyLeftInitializer(){
  justifyLeft = new ImageResourcePrototype_0('justifyLeft', fromTrustedString_1(bundledImage_None_2), 200, 0, 20, 20, false, false);
}

function $justifyRightInitializer(){
  justifyRight = new ImageResourcePrototype_0('justifyRight', fromTrustedString_1(bundledImage_None_2), 180, 0, 20, 20, false, false);
}

function $olInitializer(){
  ol = new ImageResourcePrototype_0('ol', fromTrustedString_1(bundledImage_None_2), 160, 0, 20, 20, false, false);
}

function $outdentInitializer(){
  outdent = new ImageResourcePrototype_0('outdent', fromTrustedString_1(bundledImage_None_2), 140, 0, 20, 20, false, false);
}

function $removeFormatInitializer(){
  removeFormat = new ImageResourcePrototype_0('removeFormat', fromTrustedString_1(bundledImage_None_2), 120, 0, 20, 20, false, false);
}

function $removeLinkInitializer(){
  removeLink = new ImageResourcePrototype_0('removeLink', fromTrustedString_1(bundledImage_None_2), 100, 0, 20, 20, false, false);
}

function $strikeThroughInitializer(){
  strikeThrough = new ImageResourcePrototype_0('strikeThrough', fromTrustedString_1(bundledImage_None_2), 80, 0, 20, 20, false, false);
}

function $subscriptInitializer(){
  subscript = new ImageResourcePrototype_0('subscript', fromTrustedString_1(bundledImage_None_2), 60, 0, 20, 20, false, false);
}

function $superscriptInitializer(){
  superscript = new ImageResourcePrototype_0('superscript', fromTrustedString_1(bundledImage_None_2), 40, 0, 20, 20, false, false);
}

function $ulInitializer(){
  ul = new ImageResourcePrototype_0('ul', fromTrustedString_1(bundledImage_None_2), 20, 0, 20, 20, false, false);
}

function $underlineInitializer(){
  underline = new ImageResourcePrototype_0('underline', fromTrustedString_1(bundledImage_None_2), 0, 0, 20, 20, false, false);
}

function RichTextToolbar_Images_default_StaticClientBundleGenerator_0(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator();
  Object_1.call(this);
  $$init_392();
}

defineSeed(496, 1, {}, RichTextToolbar_Images_default_StaticClientBundleGenerator_0);
_.bold = function bold_0(){
  return get_35();
}
;
_.createLink = function createLink_0(){
  return get_36();
}
;
_.hr = function hr_0(){
  return get_37();
}
;
_.indent = function indent_0(){
  return get_38();
}
;
_.insertImage = function insertImage_0(){
  return get_39();
}
;
_.italic = function italic_0(){
  return get_40();
}
;
_.justifyCenter = function justifyCenter_0(){
  return get_41();
}
;
_.justifyLeft = function justifyLeft_0(){
  return get_42();
}
;
_.justifyRight = function justifyRight_0(){
  return get_43();
}
;
_.ol = function ol_0(){
  return get_44();
}
;
_.outdent = function outdent_0(){
  return get_45();
}
;
_.removeFormat = function removeFormat_0(){
  return get_46();
}
;
_.removeLink = function removeLink_0(){
  return get_47();
}
;
_.strikeThrough = function strikeThrough_0(){
  return get_48();
}
;
_.subscript = function subscript_0(){
  return get_49();
}
;
_.superscript = function superscript_0(){
  return get_50();
}
;
_.ul = function ul_0(){
  return get_51();
}
;
_.underline = function underline_0(){
  return get_52();
}
;
var _instance0_2, bold = null, bundledImage_None_2, createLink = null, hr = null, indent = null, insertImage = null, italic = null, justifyCenter = null, justifyLeft = null, justifyRight = null, ol = null, outdent = null, removeFormat = null, removeLink = null, strikeThrough = null, subscript = null, superscript = null, ul = null, underline = null;
function $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$boldInitializer(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$boldInitializer = nullMethod;
  $boldInitializer(($clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , _instance0_2));
}

function get_35(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$boldInitializer();
  return $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , bold;
}

function $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$createLinkInitializer(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$createLinkInitializer = nullMethod;
  $createLinkInitializer(($clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , _instance0_2));
}

function get_36(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$createLinkInitializer();
  return $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , createLink;
}

function $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$hrInitializer(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$hrInitializer = nullMethod;
  $hrInitializer(($clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , _instance0_2));
}

function get_37(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$hrInitializer();
  return $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , hr;
}

function $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$indentInitializer(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$indentInitializer = nullMethod;
  $indentInitializer(($clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , _instance0_2));
}

function get_38(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$indentInitializer();
  return $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , indent;
}

function $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$insertImageInitializer(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$insertImageInitializer = nullMethod;
  $insertImageInitializer(($clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , _instance0_2));
}

function get_39(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$insertImageInitializer();
  return $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , insertImage;
}

function $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$italicInitializer(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$italicInitializer = nullMethod;
  $italicInitializer(($clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , _instance0_2));
}

function get_40(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$italicInitializer();
  return $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , italic;
}

function $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$justifyCenterInitializer(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$justifyCenterInitializer = nullMethod;
  $justifyCenterInitializer(($clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , _instance0_2));
}

function get_41(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$justifyCenterInitializer();
  return $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , justifyCenter;
}

function $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$justifyLeftInitializer(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$justifyLeftInitializer = nullMethod;
  $justifyLeftInitializer(($clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , _instance0_2));
}

function get_42(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$justifyLeftInitializer();
  return $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , justifyLeft;
}

function $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$justifyRightInitializer(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$justifyRightInitializer = nullMethod;
  $justifyRightInitializer(($clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , _instance0_2));
}

function get_43(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$justifyRightInitializer();
  return $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , justifyRight;
}

function $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$olInitializer(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$olInitializer = nullMethod;
  $olInitializer(($clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , _instance0_2));
}

function get_44(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$olInitializer();
  return $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , ol;
}

function $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$outdentInitializer(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$outdentInitializer = nullMethod;
  $outdentInitializer(($clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , _instance0_2));
}

function get_45(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$outdentInitializer();
  return $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , outdent;
}

function $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$removeFormatInitializer(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$removeFormatInitializer = nullMethod;
  $removeFormatInitializer(($clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , _instance0_2));
}

function get_46(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$removeFormatInitializer();
  return $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , removeFormat;
}

function $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$removeLinkInitializer(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$removeLinkInitializer = nullMethod;
  $removeLinkInitializer(($clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , _instance0_2));
}

function get_47(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$removeLinkInitializer();
  return $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , removeLink;
}

function $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$strikeThroughInitializer(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$strikeThroughInitializer = nullMethod;
  $strikeThroughInitializer(($clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , _instance0_2));
}

function get_48(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$strikeThroughInitializer();
  return $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , strikeThrough;
}

function $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$subscriptInitializer(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$subscriptInitializer = nullMethod;
  $subscriptInitializer(($clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , _instance0_2));
}

function get_49(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$subscriptInitializer();
  return $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , subscript;
}

function $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$superscriptInitializer(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$superscriptInitializer = nullMethod;
  $superscriptInitializer(($clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , _instance0_2));
}

function get_50(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$superscriptInitializer();
  return $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , superscript;
}

function $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$ulInitializer(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$ulInitializer = nullMethod;
  $ulInitializer(($clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , _instance0_2));
}

function get_51(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$ulInitializer();
  return $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , ul;
}

function $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$underlineInitializer(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$underlineInitializer = nullMethod;
  $underlineInitializer(($clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , _instance0_2));
}

function get_52(){
  $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator$underlineInitializer();
  return $clinit_RichTextToolbar_Images_default_StaticClientBundleGenerator() , underline;
}

function $$init_393(){
}

function RichTextToolbar_Strings__0(){
  Object_1.call(this);
  $$init_393();
}

defineSeed(515, 1, {}, RichTextToolbar_Strings__0);
_.black = function black(){
  return 'Black';
}
;
_.blue = function blue(){
  return 'Blue';
}
;
_.bold_0 = function bold_1(){
  return 'Toggle Bold';
}
;
_.createLink_0 = function createLink_1(){
  return 'Create Link';
}
;
_.font = function font(){
  return 'Font';
}
;
_.green = function green(){
  return 'Green';
}
;
_.hr_0 = function hr_1(){
  return 'Insert Horizontal Rule';
}
;
_.indent_0 = function indent_1(){
  return 'Indent Right';
}
;
_.insertImage_0 = function insertImage_1(){
  return 'Insert Image';
}
;
_.italic_0 = function italic_1(){
  return 'Toggle Italic';
}
;
_.justifyCenter_0 = function justifyCenter_1(){
  return 'Center';
}
;
_.justifyLeft_0 = function justifyLeft_1(){
  return 'Left Justify';
}
;
_.justifyRight_0 = function justifyRight_1(){
  return 'Right Justify';
}
;
_.large = function large(){
  return 'Large';
}
;
_.medium = function medium(){
  return 'Medium';
}
;
_.normal = function normal(){
  return 'Normal';
}
;
_.ol_0 = function ol_1(){
  return 'Insert Ordered List';
}
;
_.outdent_0 = function outdent_1(){
  return 'Indent Left';
}
;
_.red = function red(){
  return 'Red';
}
;
_.removeFormat_0 = function removeFormat_1(){
  return 'Remove Formatting';
}
;
_.removeLink_0 = function removeLink_1(){
  return 'Remove Link';
}
;
_.size_2 = function size_4(){
  return 'Size';
}
;
_.small = function small(){
  return 'Small';
}
;
_.strikeThrough_0 = function strikeThrough_1(){
  return 'Toggle Strikethrough';
}
;
_.subscript_0 = function subscript_1(){
  return 'Toggle Subscript';
}
;
_.superscript_0 = function superscript_1(){
  return 'Toggle Superscript';
}
;
_.ul_0 = function ul_1(){
  return 'Insert Unordered List';
}
;
_.underline_0 = function underline_1(){
  return 'Toggle Underline';
}
;
_.white = function white(){
  return 'White';
}
;
_.xlarge = function xlarge(){
  return 'X-Large';
}
;
_.xsmall = function xsmall(){
  return 'X-Small';
}
;
_.xxlarge = function xxlarge(){
  return 'XX-Large';
}
;
_.xxsmall = function xxsmall(){
  return 'XX-Small';
}
;
_.yellow = function yellow(){
  return 'Yellow';
}
;
function createTextArea(){
  $clinit_DOM();
  return $cast($createTextAreaElement(get_1()));
}

function removeElementAttribute(elem, attr){
  $clinit_DOM();
  $removeAttribute(elem, attr);
}

function prompt_0(msg, initialValue){
  $clinit_Window();
  return $wnd.prompt(msg, initialValue);
}

defineSeed(594, 595, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Iterable]));
_.add_1 = function add_4(w){
  $add_4(this, w);
}
;
defineSeed(610, 258, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$AcceptsOneWidget, Q$HasOneWidget, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$PopupPanel, Q$SimplePanel, Q$UIObject, Q$Widget, Q$Iterable]));
_.setTitle = function setTitle_0(title){
  var containerElement;
  containerElement = $getContainerElement_0(this);
  jsEquals(title, null) || $length_1(title) == 0?$removeAttribute(containerElement, 'title'):$setAttribute(containerElement, 'title', title);
}
;
defineSeed(612, 595, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Iterable]));
_.add_1 = function add_6(w){
  $add_6(this, w);
}
;
defineSeed(644, 595, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Iterable]));
_.add_1 = function add_7(w){
  $add_10(this, w);
}
;
defineSeed(653, 602, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Iterable]));
_.add_1 = function add_8(w){
  $add_11(this, w);
}
;
function $getWidget_2(this$static, index){
  return this$static.widgets[index];
}

defineSeed(655, 259, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Iterable]));
_.add_1 = function add_9(w){
  if (isNull($getWidget_2(this, 0))) {
    $setWidget_3(this, 0, w);
  }
   else if (isNull($getWidget_2(this, 1))) {
    $setWidget_3(this, 1, w);
  }
   else {
    throw new IllegalStateException_1('A Splitter can only contain two Widgets.');
  }
}
;
function $$init_561(this$static){
  this$static.impl = new RichTextAreaImplIE6_0;
}

function $getBasicFormatter(this$static){
  return $getFormatter(this$static);
}

function $getExtendedFormatter(this$static){
  return $getFormatter(this$static);
}

function $getFormatter(this$static){
  if (instanceOf(this$static.impl, Q$RichTextArea$Formatter)) {
    return dynamicCast(this$static.impl, Q$RichTextArea$Formatter);
  }
  return null;
}

function RichTextArea_0(){
  $clinit_FocusWidget();
  FocusWidget_0.call(this);
  $$init_561(this);
  $setElement_0(this, $getElement_2(this.impl));
  this.setStyleName('gwt-RichTextArea');
  $setOwner(this.impl, this);
}

defineSeed(705, 306, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), RichTextArea_0);
_.getText = function getText_12(){
  return this.impl.getText();
}
;
_.isEnabled = function isEnabled_1(){
  return this.impl.isEnabled();
}
;
_.onAttach = function onAttach_5(){
  $onAttach_0(this);
  this.impl.initElement();
}
;
_.onDetach = function onDetach_5(){
  $onDetach(this);
  this.impl.uninitElement();
}
;
_.setEnabled = function setEnabled_2(enabled){
  this.impl.setEnabled(enabled);
}
;
_.setFocus = function setFocus_2(focused){
  this.isAttached() && this.impl.setFocus(focused);
}
;
function $clinit_RichTextArea$FontSize(){
  $clinit_RichTextArea$FontSize = nullMethod;
  LARGE = new RichTextArea$FontSize_0(5);
  MEDIUM = new RichTextArea$FontSize_0(4);
  SMALL = new RichTextArea$FontSize_0(3);
  X_LARGE = new RichTextArea$FontSize_0(6);
  X_SMALL = new RichTextArea$FontSize_0(2);
  XX_LARGE = new RichTextArea$FontSize_0(7);
  XX_SMALL = new RichTextArea$FontSize_0(1);
}

function $$init_562(){
}

function $getNumber(this$static){
  return this$static.number;
}

function RichTextArea$FontSize_0(number){
  Object_1.call(this);
  $$init_562();
  this.number = number;
}

defineSeed(706, 1, makeCastMap([Q$RichTextArea$FontSize]), RichTextArea$FontSize_0);
_.toString$ = function toString_20(){
  return toString_33(this.number);
}
;
_.number = 0;
var LARGE, MEDIUM, SMALL, XX_LARGE, XX_SMALL, X_LARGE, X_SMALL;
function $clinit_RichTextArea$Justification(){
  $clinit_RichTextArea$Justification = nullMethod;
  CENTER_1 = new RichTextArea$Justification_0('Center');
  FULL = new RichTextArea$Justification_0('Full');
  LEFT = new RichTextArea$Justification_0('Left');
  RIGHT = new RichTextArea$Justification_0('Right');
}

function $$init_563(){
}

function RichTextArea$Justification_0(tag){
  Object_1.call(this);
  $$init_563();
  this.tag = tag;
}

defineSeed(707, 1, {}, RichTextArea$Justification_0);
_.toString$ = function toString_21(){
  return 'Justify ' + this.tag;
}
;
_.tag = null;
var CENTER_1, FULL, LEFT, RIGHT;
defineSeed(751, 602, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Iterable]));
_.add_1 = function add_20(w){
  $add_16(this, w);
}
;
function $$init_623(){
}

function $getElement_2(this$static){
  return this$static.elem;
}

function $onElementInitialized(this$static){
  this$static.hookEvents();
  isNotNull(this$static.owner) && fire_4(this$static.owner);
}

function $setOwner(this$static, owner){
  this$static.owner = owner;
}

function RichTextAreaImpl_0(){
  Object_1.call(this);
  $$init_623();
  this.elem = this.createElement_3();
}

defineSeed(773, 1, {});
_.createElement_3 = function createElement_5(){
  return createTextArea();
}
;
_.getText = function getText_15(){
  return getElementProperty(this.elem, 'value');
}
;
_.hookEvents = function hookEvents(){
  sinkEvents_0(this.elem, 8189);
}
;
_.initElement = function initElement(){
  this.onElementInitialized();
}
;
_.isEnabled = function isEnabled_2(){
  return !$getPropertyBoolean(this.elem, 'disabled');
}
;
_.onElementInitialized = function onElementInitialized(){
  $onElementInitialized(this);
}
;
_.setEnabled = function setEnabled_3(enabled){
  $setPropertyBoolean(this.elem, 'disabled', !enabled);
}
;
_.setFocus = function setFocus_5(focused){
  if (focused) {
    this.elem.focus();
  }
   else {
    this.elem.blur();
  }
}
;
_.uninitElement = function uninitElement(){
}
;
function $$init_624(this$static){
  this$static.beforeInitPlaceholder = createDiv();
}

function $createElement_0(){
  return $doc.createElement('iframe');
}

function $execCommand(this$static, cmd, param){
  var $e0;
  this$static.isReady || throwAssertionError_Object('RichTextArea formatters cannot be used until the RichTextArea is attached and focused.');
  if (this$static.isReady) {
    $setFocus_1(this$static, true);
    try {
      $execCommandAssumingFocus(this$static, cmd, param);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, Q$JavaScriptException)) {
        $e0;
      }
       else 
        throw $e0;
    }
  }
}

function $execCommandAssumingFocus(this$static, cmd, param){
  this$static.elem.contentWindow.document.execCommand(cmd, false, param);
}

function $getHTML_1(this$static){
  return isNull(this$static.beforeInitPlaceholder)?$getHTMLImpl(this$static):getInnerHTML(this$static.beforeInitPlaceholder);
}

function $getHTMLImpl(this$static){
  return this$static.elem.contentWindow.document.body.innerHTML;
}

function $isEnabled_0(this$static){
  return isNull(this$static.beforeInitPlaceholder)?this$static.isEnabledImpl():!$getPropertyBoolean(this$static.beforeInitPlaceholder, 'disabled');
}

function $queryCommandState(this$static, cmd){
  var $e0;
  if (this$static.isReady) {
    $setFocus_1(this$static, true);
    try {
      return $queryCommandStateAssumingFocus(this$static, cmd);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, Q$JavaScriptException)) {
        $e0;
        return false;
      }
       else 
        throw $e0;
    }
  }
  return false;
}

function $queryCommandStateAssumingFocus(this$static, cmd){
  return !!this$static.elem.contentWindow.document.queryCommandState(cmd);
}

function $setEnabled_2(this$static, enabled){
  isNull(this$static.beforeInitPlaceholder)?this$static.setEnabledImpl(enabled):$setPropertyBoolean(this$static.beforeInitPlaceholder, 'disabled', !enabled);
}

function $setFocus_1(this$static, focused){
  this$static.initializing?(this$static.isPendingFocus = focused):this$static.setFocusImpl(focused);
}

function $setFocusImpl(this$static, focused){
  if (focused) {
    this$static.elem.contentWindow.focus();
  }
   else {
    this$static.elem.contentWindow.blur();
  }
}

function $setHTMLImpl(this$static, html){
  this$static.elem.contentWindow.document.body.innerHTML = html;
}

function RichTextAreaImplStandard_0(){
  RichTextAreaImpl_0.call(this);
  $$init_624(this);
}

defineSeed(775, 773, makeCastMap([Q$RichTextArea$Formatter]));
_.createElement_3 = function createElement_6(){
  return $createElement_0();
}
;
_.createLink_1 = function createLink_2(url){
  $execCommand(this, 'CreateLink', url);
}
;
_.getText = function getText_16(){
  return isNull(this.beforeInitPlaceholder)?this.getTextImpl():getInnerText_1(this.beforeInitPlaceholder);
}
;
_.getTextImpl = function getTextImpl(){
  return this.elem.contentWindow.document.body.textContent;
}
;
_.hookEvents = function hookEvents_0(){
  var elem = this.elem;
  var wnd = elem.contentWindow;
  elem.__gwt_handler = $entry(function(evt){
    if (elem.__listener) {
      if (isMyListener(elem.__listener)) {
        dispatchEvent_3(evt, elem, elem.__listener);
      }
    }
  }
  );
  elem.__gwt_focusHandler = function(evt){
    if (elem.__gwt_isFocused) {
      return;
    }
    elem.__gwt_isFocused = true;
    elem.__gwt_handler(evt);
  }
  ;
  elem.__gwt_blurHandler = function(evt){
    if (!elem.__gwt_isFocused) {
      return;
    }
    elem.__gwt_isFocused = false;
    elem.__gwt_handler(evt);
  }
  ;
  wnd.addEventListener('keydown', elem.__gwt_handler, true);
  wnd.addEventListener('keyup', elem.__gwt_handler, true);
  wnd.addEventListener('keypress', elem.__gwt_handler, true);
  wnd.addEventListener('mousedown', elem.__gwt_handler, true);
  wnd.addEventListener('mouseup', elem.__gwt_handler, true);
  wnd.addEventListener('mousemove', elem.__gwt_handler, true);
  wnd.addEventListener('mouseover', elem.__gwt_handler, true);
  wnd.addEventListener('mouseout', elem.__gwt_handler, true);
  wnd.addEventListener('click', elem.__gwt_handler, true);
  wnd.addEventListener('focus', elem.__gwt_focusHandler, true);
  wnd.addEventListener('blur', elem.__gwt_blurHandler, true);
}
;
_.initElement = function initElement_0(){
  var _this = this;
  _this.onElementInitializing();
  setTimeout($entry(function(){
    _this.elem.contentWindow.document.designMode = 'On';
    _this.onElementInitialized();
  }
  ), 1);
}
;
_.insertHorizontalRule = function insertHorizontalRule(){
  $execCommand(this, 'InsertHorizontalRule', null);
}
;
_.insertImage_1 = function insertImage_2(url){
  $execCommand(this, 'InsertImage', url);
}
;
_.insertOrderedList = function insertOrderedList(){
  $execCommand(this, 'InsertOrderedList', null);
}
;
_.insertUnorderedList = function insertUnorderedList(){
  $execCommand(this, 'InsertUnorderedList', null);
}
;
_.isBold = function isBold(){
  return $queryCommandState(this, 'Bold');
}
;
_.isEnabled = function isEnabled_3(){
  return $isEnabled_0(this);
}
;
_.isEnabledImpl = function isEnabledImpl(){
  var elem = this.elem;
  return elem.contentWindow.document.designMode.toUpperCase() == 'ON';
}
;
_.isItalic = function isItalic(){
  return $queryCommandState(this, 'Italic');
}
;
_.isStrikethrough = function isStrikethrough(){
  return $queryCommandState(this, 'Strikethrough');
}
;
_.isSubscript = function isSubscript(){
  return $queryCommandState(this, 'Subscript');
}
;
_.isSuperscript = function isSuperscript(){
  return $queryCommandState(this, 'Superscript');
}
;
_.isUnderlined = function isUnderlined(){
  return $queryCommandState(this, 'Underline');
}
;
_.leftIndent = function leftIndent(){
  $execCommand(this, 'Outdent', null);
}
;
_.onElementInitialized = function onElementInitialized_0(){
  if (!this.initializing) {
    return;
  }
  this.initializing = false;
  this.isReady = true;
  if (isNotNull(this.beforeInitPlaceholder)) {
    $setHTMLImpl(this, getInnerHTML(this.beforeInitPlaceholder));
    this.setEnabledImpl($isEnabled_0(this));
    this.beforeInitPlaceholder = null;
  }
  $onElementInitialized(this);
  if (this.isPendingFocus) {
    this.isPendingFocus = false;
    $setFocus_1(this, true);
  }
}
;
_.onElementInitializing = function onElementInitializing(){
  this.initializing = true;
  this.isPendingFocus = false;
}
;
_.removeFormat_1 = function removeFormat_2(){
  $execCommand(this, 'RemoveFormat', null);
}
;
_.removeLink_1 = function removeLink_2(){
  $execCommand(this, 'Unlink', 'false');
}
;
_.rightIndent = function rightIndent(){
  $execCommand(this, 'Indent', null);
}
;
_.setBackColor = function setBackColor(color){
  $execCommand(this, 'BackColor', color);
}
;
_.setEnabled = function setEnabled_4(enabled){
  $setEnabled_2(this, enabled);
}
;
_.setEnabledImpl = function setEnabledImpl(enabled){
  var elem = this.elem;
  elem.contentWindow.document.designMode = enabled?'On':'Off';
}
;
_.setFocus = function setFocus_6(focused){
  $setFocus_1(this, focused);
}
;
_.setFocusImpl = function setFocusImpl(focused){
  $setFocusImpl(this, focused);
}
;
_.setFontName = function setFontName(name_0){
  $execCommand(this, 'FontName', name_0);
}
;
_.setFontSize = function setFontSize(fontSize){
  $execCommand(this, 'FontSize', toString_33($getNumber(fontSize)));
}
;
_.setForeColor = function setForeColor(color){
  $execCommand(this, 'ForeColor', color);
}
;
_.setJustification = function setJustification(justification){
  jsEquals(justification, ($clinit_RichTextArea$Justification() , CENTER_1))?$execCommand(this, 'JustifyCenter', null):jsEquals(justification, ($clinit_RichTextArea$Justification() , FULL))?$execCommand(this, 'JustifyFull', null):jsEquals(justification, ($clinit_RichTextArea$Justification() , LEFT))?$execCommand(this, 'JustifyLeft', null):jsEquals(justification, ($clinit_RichTextArea$Justification() , RIGHT)) && $execCommand(this, 'JustifyRight', null);
}
;
_.toggleBold = function toggleBold(){
  $execCommand(this, 'Bold', 'false');
}
;
_.toggleItalic = function toggleItalic(){
  $execCommand(this, 'Italic', 'false');
}
;
_.toggleStrikethrough = function toggleStrikethrough(){
  $execCommand(this, 'Strikethrough', 'false');
}
;
_.toggleSubscript = function toggleSubscript(){
  $execCommand(this, 'Subscript', 'false');
}
;
_.toggleSuperscript = function toggleSuperscript(){
  $execCommand(this, 'Superscript', 'false');
}
;
_.toggleUnderline = function toggleUnderline(){
  $execCommand(this, 'Underline', 'False');
}
;
_.unhookEvents = function unhookEvents(){
  var elem = this.elem;
  var wnd = elem.contentWindow;
  wnd.removeEventListener('keydown', elem.__gwt_handler, true);
  wnd.removeEventListener('keyup', elem.__gwt_handler, true);
  wnd.removeEventListener('keypress', elem.__gwt_handler, true);
  wnd.removeEventListener('mousedown', elem.__gwt_handler, true);
  wnd.removeEventListener('mouseup', elem.__gwt_handler, true);
  wnd.removeEventListener('mousemove', elem.__gwt_handler, true);
  wnd.removeEventListener('mouseover', elem.__gwt_handler, true);
  wnd.removeEventListener('mouseout', elem.__gwt_handler, true);
  wnd.removeEventListener('click', elem.__gwt_handler, true);
  wnd.removeEventListener('focus', elem.__gwt_focusHandler, true);
  wnd.removeEventListener('blur', elem.__gwt_blurHandler, true);
  elem.__gwt_handler = null;
  elem.__gwt_focusHandler = null;
  elem.__gwt_blurHandler = null;
}
;
_.uninitElement = function uninitElement_0(){
  var enabled, html;
  this.isReady = false;
  if (this.initializing) {
    this.initializing = false;
    return;
  }
  this.unhookEvents();
  html = $getHTML_1(this);
  enabled = $isEnabled_0(this);
  this.beforeInitPlaceholder = createDiv();
  setInnerHTML(this.beforeInitPlaceholder, html);
  $setEnabled_2(this, enabled);
}
;
function $$init_625(){
}

function RichTextAreaImplIE6_0(){
  RichTextAreaImplStandard_0.call(this);
  $$init_625();
}

defineSeed(774, 775, makeCastMap([Q$RichTextArea$Formatter]), RichTextAreaImplIE6_0);
_.createElement_3 = function createElement_7(){
  var elem;
  elem = $createElement_0();
  setElementProperty(elem, 'src', "javascript:''");
  return elem;
}
;
_.getTextImpl = function getTextImpl_0(){
  var elem = this.elem;
  return elem.contentWindow.document.body.innerText;
}
;
_.hookEvents = function hookEvents_1(){
  var elem = this.elem;
  var body = elem.contentWindow.document.body;
  var handler = $entry(function(evt){
    if (elem.__listener) {
      if (isMyListener(elem.__listener)) {
        evt = evt || elem.contentWindow.event;
        dispatchEvent_3(evt, elem, elem.__listener);
      }
    }
  }
  );
  body.onkeydown = body.onkeyup = body.onkeypress = body.onmousedown = body.onmouseup = body.onmousemove = body.onmouseover = body.onmouseout = body.onclick = handler;
  elem.contentWindow.onfocus = elem.contentWindow.onblur = handler;
}
;
_.initElement = function initElement_1(){
  var _this = this;
  _this.onElementInitializing();
  setTimeout($entry(function(){
    if (_this.initializing == false) {
      return;
    }
    var elem = _this.elem;
    var doc = elem.contentWindow.document;
    if (!doc.body) {
      setTimeout(arguments.callee, 50);
      return;
    }
    doc.body.contentEditable = true;
    _this.onElementInitialized();
  }
  , 1));
}
;
_.isEnabledImpl = function isEnabledImpl_0(){
  var elem = this.elem;
  return elem.contentWindow.document.body.contentEditable.toLowerCase() == 'true';
}
;
_.setEnabledImpl = function setEnabledImpl_0(enabled){
  var elem = this.elem;
  elem.contentWindow.document.body.contentEditable = enabled;
}
;
_.unhookEvents = function unhookEvents_0(){
  var elem = this.elem;
  var body = elem.contentWindow.document.body;
  if (body) {
    body.onkeydown = body.onkeyup = body.onkeypress = body.onmousedown = body.onmouseup = body.onmousemove = body.onmouseover = body.onmouseout = body.onclick = null;
    elem.contentWindow.onfocus = elem.contentWindow.onblur = null;
  }
}
;
var Lcom_google_gwt_user_client_ui_RichTextArea_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RichTextArea', 705, Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit), Lcom_google_gwt_user_client_ui_RichTextArea$FontSize_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RichTextArea$FontSize', 706, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_RichTextArea$Justification_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RichTextArea$Justification', 707, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_text_RichTextToolbar_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.text.', 'RichTextToolbar', 493, Lcom_google_gwt_user_client_ui_Composite_2_classLit), Lcom_google_gwt_user_client_ui_impl_RichTextAreaImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'RichTextAreaImpl', 773, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_text_RichTextToolbar_1Images_1default_1StaticClientBundleGenerator_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.text.', 'RichTextToolbar_Images_default_StaticClientBundleGenerator', 496, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_text_RichTextToolbar_1Strings_1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.text.', 'RichTextToolbar_Strings_', 515, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_text_RichTextToolbar$EventHandler_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.text.', 'RichTextToolbar$EventHandler', 495, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_impl_RichTextAreaImplStandard_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'RichTextAreaImplStandard', 775, Lcom_google_gwt_user_client_ui_impl_RichTextAreaImpl_2_classLit), Lcom_google_gwt_user_client_ui_impl_RichTextAreaImplIE6_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'RichTextAreaImplIE6', 774, Lcom_google_gwt_user_client_ui_impl_RichTextAreaImplStandard_2_classLit), Lcom_google_gwt_sample_showcase_client_content_text_RichTextToolbar$_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.text.', 'RichTextToolbar$', 494, Ljava_lang_Object_2_classLit), _3Lcom_google_gwt_user_client_ui_RichTextArea$FontSize_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'RichTextArea$FontSize;', 1355, Lcom_google_gwt_user_client_ui_RichTextArea$FontSize_2_classLit), Lcom_google_gwt_event_logical_shared_InitializeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'InitializeEvent', 135, Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
$entry(onLoad)(13);
