defineSeed(311, 1, makeCastMap([Q$ShowcaseConstants]));
_.cwStackPanelContacts = function cwStackPanelContacts(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwStackPanelContacts'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Benoit Mandelbrot', 'Albert Einstein', 'Rene Descartes', 'Bob Saget', 'Ludwig von Beethoven', 'Richard Feynman', 'Alan Turing', 'John von Neumann']);
    this.cache.put('cwStackPanelContacts', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwStackPanelContactsEmails = function cwStackPanelContactsEmails(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwStackPanelContactsEmails'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['benoit@example.com', 'albert@example.com', 'rene@example.com', 'bob@example.com', 'ludwig@example.com', 'richard@example.com', 'alan@example.com', 'john@example.com']);
    this.cache.put('cwStackPanelContactsEmails', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwStackPanelContactsHeader = function cwStackPanelContactsHeader(){
  return 'Contacts';
}
;
_.cwStackPanelFilters = function cwStackPanelFilters(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwStackPanelFilters'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['All', 'Starred', 'Read', 'Unread', 'Recent', 'Sent by me']);
    this.cache.put('cwStackPanelFilters', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwStackPanelFiltersHeader = function cwStackPanelFiltersHeader(){
  return 'Filters';
}
;
_.cwStackPanelMailFolders = function cwStackPanelMailFolders(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwStackPanelMailFolders'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['Inbox', 'Drafts', 'Templates', 'Sent', 'Trash']);
    this.cache.put('cwStackPanelMailFolders', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
_.cwStackPanelMailHeader = function cwStackPanelMailHeader(){
  return 'Mail';
}
;
function $com$google$gwt$sample$showcase$client$content$lists$CwStackPanel$$addItem(root, image, label){
  $addItem_6(root, $getHTML(create_9(image)) + ' ' + label);
}

function $createContactsItem(this$static, images){
  var contactEmails, contactInfo$1, contactNames, contactPopup$1, contactPopupContainer, contactsPanel$1;
  contactPopupContainer = new HorizontalPanel_0;
  $setSpacing(contactPopupContainer, 5);
  $add_11(contactPopupContainer, new Image_1(images.defaultContact()));
  contactInfo$1 = new HTML_0;
  $add_11(contactPopupContainer, contactInfo$1);
  contactPopup$1 = new PopupPanel_2(true, false);
  contactPopup$1.setWidget(contactPopupContainer);
  contactsPanel$1 = new VerticalPanel_0;
  $setSpacing(contactsPanel$1, 4);
  contactNames = $constants_0(this$static).cwStackPanelContacts();
  contactEmails = $constants_0(this$static).cwStackPanelContactsEmails();
  dynamicCast($refArrayOps(($clinit_Predef$() , MODULE$_11 , contactNames), $classType_0(($clinit_FactoryClassManifest$() , MODULE$_60 , Ljava_lang_String_2_classLit), new CwStackPanel$$anon$2_0)).toList().zip_0($wrapRefArray(($clinit_Predef$() , MODULE$_11 , contactEmails)), $canBuildFrom_0(($clinit_List$() , MODULE$_25))), Q$LinearSeqOptimized).foreach(new CwStackPanel$$anonfun$createContactsItem$1_0(contactInfo$1, contactPopup$1, contactsPanel$1));
  return contactsPanel$1;
}

function $createFiltersItem(this$static){
  var filtersPanel$1;
  filtersPanel$1 = new VerticalPanel_0;
  $setSpacing(filtersPanel$1, 4);
  $refArrayOps(($clinit_Predef$() , MODULE$_11 , $constants_0(this$static).cwStackPanelFilters()), $classType_0(($clinit_FactoryClassManifest$() , MODULE$_60 , Ljava_lang_String_2_classLit), new CwStackPanel$$anon$4_0)).foreach(new CwStackPanel$$anonfun$createFiltersItem$1_0(filtersPanel$1));
  return filtersPanel$1;
}

function $createMailItem(this$static, images){
  var mailFolders$1, mailPanel, mailPanelRoot$1;
  mailPanel = new Tree_1(images);
  mailPanelRoot$1 = new ObjectRef_0($addItem_4(mailPanel, 'foo@example.com'));
  mailFolders$1 = new ObjectRef_0($constants_0(this$static).cwStackPanelMailFolders());
  dynamicCast($apply_104(($clinit_List$() , MODULE$_25 , $wrapRefArray(($clinit_Predef$() , MODULE$_11 , initValues(_3Lcom_google_gwt_resources_client_ImageResource_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$ImageResource, [images.inbox(), images.drafts(), images.templates(), images.sent(), images.trash()]))))).zipWithIndex($canBuildFrom_0(($clinit_List$() , MODULE$_25))), Q$LinearSeqOptimized).foreach(new CwStackPanel$$anonfun$createMailItem$1_0(this$static, mailPanelRoot$1, mailFolders$1));
  $setState_0(dynamicCast(mailPanelRoot$1.elem, Q$TreeItem), true);
  return mailPanel;
}

function $getHeaderString(text, image){
  var hPanel, headerText;
  hPanel = new HorizontalPanel_0;
  $setSpacing(hPanel, 0);
  $setVerticalAlignment_0(hPanel, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  $add_11(hPanel, new Image_1(image));
  headerText = new HTML_1(text);
  headerText.setStyleName('cw-StackPanelHeader');
  $add_11(hPanel, headerText);
  return $getString($getElement(hPanel));
}

function $onInitialize_8(this$static){
  var contactsHeader, filtersHeader, images, mailHeader, stackPanel;
  images = new CwStackPanel_Images_default_StaticClientBundleGenerator_0;
  stackPanel = new DecoratedStackPanel_0;
  stackPanel.setWidth('200px');
  mailHeader = $getHeaderString($constants_0(this$static).cwStackPanelMailHeader(), images.mailgroup());
  $add_7(stackPanel, $createMailItem(this$static, images), mailHeader, true);
  filtersHeader = $getHeaderString($constants_0(this$static).cwStackPanelFiltersHeader(), images.filtersgroup());
  $add_7(stackPanel, $createFiltersItem(this$static), filtersHeader, true);
  contactsHeader = $getHeaderString($constants_0(this$static).cwStackPanelContactsHeader(), images.contactsgroup());
  $add_7(stackPanel, $createContactsItem(this$static, images), contactsHeader, true);
  $ensureDebugId(stackPanel, 'cwStackPanel');
  return stackPanel;
}

defineSeed(391, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_9(){
  this.callback$1.onSuccess_0($onInitialize_8(this.$outer$u0020));
}
;
function $$init_300(){
}

function $newInstance_10(len){
  return initDim(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, len, 0);
}

function CwStackPanel$$anon$2_0(){
  $$init_300();
  Object_1.call(this);
}

defineSeed(392, 1, {}, CwStackPanel$$anon$2_0);
_.newInstance = function newInstance_10(len){
  return $newInstance_10(len);
}
;
function $$init_301(){
}

function $newInstance_11(len){
  return initDim(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, len, 0);
}

function CwStackPanel$$anon$4_0(){
  $$init_301();
  Object_1.call(this);
}

defineSeed(393, 1, {}, CwStackPanel$$anon$4_0);
_.newInstance = function newInstance_11(len){
  return $newInstance_11(len);
}
;
function $$init_302(){
}

function $apply_32(this$static, pair){
  var $1$, contactEmail$1, contactLink$1, contactName$1, temp1, x$1;
  temp1 = pair;
  if (isNotNull(temp1)) {
    $1$ = new Tuple2_0($_1(temp1), $_2(temp1));
  }
   else {
    throw new MatchError_0(temp1);
  }
  x$1 = $1$;
  contactName$1 = dynamicCast($_1(x$1), Q$String);
  contactEmail$1 = dynamicCast($_2(x$1), Q$String);
  contactLink$1 = new HTML_1('<a href="javascript:undefined;">' + contactName$1 + '<\/a>');
  $add_16(this$static.contactsPanel$1, contactLink$1);
  return $onClick(($clinit_Handlers$() , MODULE$_3).enrichHasClickHandlers(contactLink$1), new CwStackPanel$$anonfun$createContactsItem$1$$anonfun$apply$1_0(this$static, contactName$1, contactEmail$1, contactLink$1));
}

function CwStackPanel$$anonfun$createContactsItem$1_0(contactInfo$1, contactPopup$1, contactsPanel$1){
  $$init_302();
  this.contactInfo$1 = contactInfo$1;
  this.contactPopup$1 = contactPopup$1;
  this.contactsPanel$1 = contactsPanel$1;
  AbstractFunction1_0.call(this);
}

defineSeed(394, 268, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwStackPanel$$anonfun$createContactsItem$1_0);
_.apply_0 = function apply_33(v1){
  return $apply_32(this, dynamicCast(v1, Q$Tuple2));
}
;
_.contactInfo$1 = null;
_.contactPopup$1 = null;
_.contactsPanel$1 = null;
function $$init_303(){
}

function $apply_33(this$static){
  var left, top_0;
  $setHTML_1(this$static.$outer$u0020.contactInfo$1, this$static.contactName$1 + '<br><i>' + this$static.contactEmail$1 + '<\/i>');
  left = $getAbsoluteLeft_0(this$static.contactLink$1) + 14;
  top_0 = $getAbsoluteTop_0(this$static.contactLink$1) + 14;
  $setPopupPosition(this$static.$outer$u0020.contactPopup$1, left, top_0);
  this$static.$outer$u0020.contactPopup$1.show();
}

function CwStackPanel$$anonfun$createContactsItem$1$$anonfun$apply$1_0($outer, contactName$1, contactEmail$1, contactLink$1){
  $$init_303();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.contactName$1 = contactName$1;
  this.contactEmail$1 = contactEmail$1;
  this.contactLink$1 = contactLink$1;
  AbstractFunction1_0.call(this);
}

defineSeed(395, 268, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwStackPanel$$anonfun$createContactsItem$1$$anonfun$apply$1_0);
_.apply_0 = function apply_34(v1){
  $apply_33(this, dynamicCast(v1, Q$ClickEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.$outer$u0020 = null;
_.contactEmail$1 = null;
_.contactLink$1 = null;
_.contactName$1 = null;
function $$init_304(){
}

function $apply_34(this$static, filter){
  $add_16(this$static.filtersPanel$1, new CheckBox_2(filter));
}

function CwStackPanel$$anonfun$createFiltersItem$1_0(filtersPanel$1){
  $$init_304();
  this.filtersPanel$1 = filtersPanel$1;
  AbstractFunction1_0.call(this);
}

defineSeed(396, 268, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwStackPanel$$anonfun$createFiltersItem$1_0);
_.apply_0 = function apply_35(v1){
  $apply_34(this, dynamicCast(v1, Q$String));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.filtersPanel$1 = null;
function $$init_305(){
}

function $apply_35(this$static, pair){
  var $2$, idx, img, temp4, x$3;
  temp4 = pair;
  if (isNotNull(temp4)) {
    $2$ = new Tuple2_0($_1(temp4), $_2(temp4));
  }
   else {
    throw new MatchError_0(temp4);
  }
  x$3 = $2$;
  img = dynamicCast($_1(x$3), Q$ImageResource);
  idx = $_2$mcI$sp(x$3);
  $com$google$gwt$sample$showcase$client$content$lists$CwStackPanel$$addItem(dynamicCast(this$static.mailPanelRoot$1.elem, Q$TreeItem), img, dynamicCast(this$static.mailFolders$1.elem, Q$String_$1)[idx]);
}

function CwStackPanel$$anonfun$createMailItem$1_0($outer, mailPanelRoot$1, mailFolders$1){
  $$init_305();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.mailPanelRoot$1 = mailPanelRoot$1;
  this.mailFolders$1 = mailFolders$1;
  AbstractFunction1_0.call(this);
}

defineSeed(397, 268, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwStackPanel$$anonfun$createMailItem$1_0);
_.apply_0 = function apply_36(v1){
  $apply_35(this, dynamicCast(v1, Q$Tuple2));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.$outer$u0020 = null;
_.mailFolders$1 = null;
_.mailPanelRoot$1 = null;
function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator = nullMethod;
  _instance0_1 = new CwStackPanel_Images_default_StaticClientBundleGenerator_0;
  bundledImage_None_1 = getModuleBaseURL() + '55414EBEFCEF03959C9B6A2E58903034.cache.png';
  externalImage_0 = getModuleBaseURL() + '662D45A7A4C7FF83F80FDD5504D9CCE3.cache.jpg';
}

function $$init_306(){
}

function $contactsgroupInitializer(){
  contactsgroup = new ImageResourcePrototype_0('contactsgroup', fromTrustedString_1(bundledImage_None_1), 64, 0, 32, 32, false, false);
}

function $defaultContactInitializer(){
  defaultContact = new ImageResourcePrototype_0('defaultContact', fromTrustedString_1(externalImage_0), 0, 0, 32, 32, false, true);
}

function $draftsInitializer(){
  drafts = new ImageResourcePrototype_0('drafts', fromTrustedString_1(bundledImage_None_1), 144, 0, 15, 16, false, false);
}

function $filtersgroupInitializer(){
  filtersgroup = new ImageResourcePrototype_0('filtersgroup', fromTrustedString_1(bundledImage_None_1), 32, 0, 32, 32, false, false);
}

function $inboxInitializer(){
  inbox = new ImageResourcePrototype_0('inbox', fromTrustedString_1(bundledImage_None_1), 128, 16, 16, 16, false, false);
}

function $mailgroupInitializer(){
  mailgroup = new ImageResourcePrototype_0('mailgroup', fromTrustedString_1(bundledImage_None_1), 0, 0, 32, 32, false, false);
}

function $sentInitializer(){
  sent = new ImageResourcePrototype_0('sent', fromTrustedString_1(bundledImage_None_1), 128, 0, 16, 16, false, false);
}

function $templatesInitializer(){
  templates = new ImageResourcePrototype_0('templates', fromTrustedString_1(bundledImage_None_1), 112, 16, 16, 16, false, false);
}

function $trashInitializer(){
  trash = new ImageResourcePrototype_0('trash', fromTrustedString_1(bundledImage_None_1), 112, 0, 16, 16, false, false);
}

function $treeClosedInitializer_0(){
  treeClosed_1 = new ImageResourcePrototype_0('treeClosed', fromTrustedString_1(bundledImage_None_1), 96, 16, 16, 16, false, false);
}

function $treeLeafInitializer_0(){
  treeLeaf_1 = new ImageResourcePrototype_0('treeLeaf', fromTrustedString_1(bundledImage_None_1), 144, 16, 1, 1, false, false);
}

function $treeOpenInitializer_0(){
  treeOpen_1 = new ImageResourcePrototype_0('treeOpen', fromTrustedString_1(bundledImage_None_1), 96, 0, 16, 16, false, false);
}

function CwStackPanel_Images_default_StaticClientBundleGenerator_0(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator();
  Object_1.call(this);
  $$init_306();
}

defineSeed(398, 1, {}, CwStackPanel_Images_default_StaticClientBundleGenerator_0);
_.contactsgroup = function contactsgroup_0(){
  return get_23();
}
;
_.defaultContact = function defaultContact_0(){
  return get_24();
}
;
_.drafts = function drafts_0(){
  return get_25();
}
;
_.filtersgroup = function filtersgroup_0(){
  return get_26();
}
;
_.inbox = function inbox_0(){
  return get_27();
}
;
_.mailgroup = function mailgroup_0(){
  return get_28();
}
;
_.sent = function sent_0(){
  return get_29();
}
;
_.templates = function templates_0(){
  return get_30();
}
;
_.trash = function trash_0(){
  return get_31();
}
;
_.treeClosed_0 = function treeClosed_2(){
  return get_32();
}
;
_.treeLeaf_0 = function treeLeaf_2(){
  return get_33();
}
;
_.treeOpen_0 = function treeOpen_2(){
  return get_34();
}
;
var _instance0_1, bundledImage_None_1, contactsgroup = null, defaultContact = null, drafts = null, externalImage_0, filtersgroup = null, inbox = null, mailgroup = null, sent = null, templates = null, trash = null, treeClosed_1 = null, treeLeaf_1 = null, treeOpen_1 = null;
function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$contactsgroupInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$contactsgroupInitializer = nullMethod;
  $contactsgroupInitializer(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_23(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$contactsgroupInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , contactsgroup;
}

function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$defaultContactInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$defaultContactInitializer = nullMethod;
  $defaultContactInitializer(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_24(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$defaultContactInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , defaultContact;
}

function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$draftsInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$draftsInitializer = nullMethod;
  $draftsInitializer(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_25(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$draftsInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , drafts;
}

function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$filtersgroupInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$filtersgroupInitializer = nullMethod;
  $filtersgroupInitializer(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_26(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$filtersgroupInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , filtersgroup;
}

function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$inboxInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$inboxInitializer = nullMethod;
  $inboxInitializer(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_27(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$inboxInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , inbox;
}

function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$mailgroupInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$mailgroupInitializer = nullMethod;
  $mailgroupInitializer(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_28(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$mailgroupInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , mailgroup;
}

function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$sentInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$sentInitializer = nullMethod;
  $sentInitializer(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_29(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$sentInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , sent;
}

function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$templatesInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$templatesInitializer = nullMethod;
  $templatesInitializer(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_30(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$templatesInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , templates;
}

function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$trashInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$trashInitializer = nullMethod;
  $trashInitializer(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_31(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$trashInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , trash;
}

function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$treeClosedInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$treeClosedInitializer = nullMethod;
  $treeClosedInitializer_0(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_32(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$treeClosedInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , treeClosed_1;
}

function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$treeLeafInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$treeLeafInitializer = nullMethod;
  $treeLeafInitializer_0(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_33(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$treeLeafInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , treeLeaf_1;
}

function $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$treeOpenInitializer(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$treeOpenInitializer = nullMethod;
  $treeOpenInitializer_0(($clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , _instance0_1));
}

function get_34(){
  $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator$treeOpenInitializer();
  return $clinit_CwStackPanel_Images_default_StaticClientBundleGenerator() , treeOpen_1;
}

function $$init_476(this$static){
}

function $add_6(this$static, w){
  $insert_2(this$static, w, $getWidgetCount(this$static));
}

function $add_7(this$static, w, stackText, asHTML){
  $add_6(this$static, w);
  $setStackText(this$static, $getWidgetCount(this$static) - 1, stackText, asHTML);
}

function $findDividerIndex(this$static, elem){
  var expando, ownerHash;
  while (isNotNull(elem) && jsNotEquals(elem, $getElement(this$static))) {
    expando = getElementProperty(elem, '__index');
    if (jsNotEquals(expando, null)) {
      ownerHash = getElementPropertyInt(elem, '__owner');
      return ownerHash == this$static.hashCode$()?parseInt_0(expando):-1;
    }
    elem = getParent(elem);
  }
  return -1;
}

function $insert_2(this$static, w, beforeIndex){
  var effectiveIndex, tdb, tdh, trb, trh;
  trh = createTR();
  tdh = createTD();
  appendChild(trh, tdh);
  appendChild(tdh, this$static.createHeaderElem());
  trb = createTR();
  tdb = createTD();
  appendChild(trb, tdb);
  beforeIndex = $adjustIndex(this$static, w, beforeIndex);
  effectiveIndex = beforeIndex * 2;
  insertChild(this$static.body_0, trb, effectiveIndex);
  insertChild(this$static.body_0, trh, effectiveIndex);
  setStyleName_0(tdh, 'gwt-StackPanelItem', true);
  setElementPropertyInt(tdh, '__owner', this$static.hashCode$());
  setElementProperty(tdh, 'height', '1px');
  setStyleName_0(tdb, 'gwt-StackPanelContent', true);
  setElementProperty(tdb, 'height', '100%');
  setElementProperty(tdb, 'vAlign', 'top');
  $insert(this$static, w, tdb, beforeIndex, false);
  $updateIndicesFrom(this$static, beforeIndex);
  if (this$static.visibleStack == -1) {
    $showStack(this$static, 0);
  }
   else {
    $setStackVisible(this$static, beforeIndex, false);
    this$static.visibleStack >= beforeIndex && ++this$static.visibleStack;
    $setStackVisible(this$static, this$static.visibleStack, true);
  }
}

function $remove_5(this$static, child, index){
  var removed, rowIndex, tr;
  removed = $remove_2(this$static, child);
  if (removed) {
    rowIndex = 2 * index;
    tr = getChild(this$static.body_0, rowIndex);
    removeChild_0(this$static.body_0, tr);
    tr = getChild(this$static.body_0, rowIndex);
    removeChild_0(this$static.body_0, tr);
    this$static.visibleStack == index?(this$static.visibleStack = -1):this$static.visibleStack > index && --this$static.visibleStack;
    $updateIndicesFrom(this$static, index);
  }
  return removed;
}

function $setStackContentVisible(this$static, index, visible){
  var tr;
  tr = getChild(this$static.body_0, index * 2 + 1);
  setVisible(tr, visible);
  $getWidget_0(this$static, index).setVisible(visible);
}

function $setStackText(this$static, index, text, asHTML){
  var headerElem, tdWrapper;
  if (index >= $getWidgetCount(this$static)) {
    return;
  }
  tdWrapper = getChild(getChild(this$static.body_0, index * 2), 0);
  headerElem = getFirstChild(tdWrapper);
  asHTML?setInnerHTML(this$static.getHeaderTextElem(headerElem), text):setInnerText_1(this$static.getHeaderTextElem(headerElem), text);
}

function $setStackVisible(this$static, index, visible){
  var td, tdNext, tr, trNext;
  tr = getChild(this$static.body_0, index * 2);
  if (isNull(tr)) {
    return;
  }
  td = getFirstChild(tr);
  setStyleName_0(td, 'gwt-StackPanelItem-selected', visible);
  $setStackContentVisible(this$static, index, visible);
  trNext = getChild(this$static.body_0, (index + 1) * 2);
  if (isNotNull(trNext)) {
    tdNext = getFirstChild(trNext);
    setStyleName_0(tdNext, 'gwt-StackPanelItem-below-selected', visible);
  }
}

function $showStack(this$static, index){
  if (index >= $getWidgetCount(this$static) || index < 0 || index == this$static.visibleStack) {
    return;
  }
  this$static.visibleStack >= 0 && $setStackVisible(this$static, this$static.visibleStack, false);
  this$static.visibleStack = index;
  $setStackVisible(this$static, this$static.visibleStack, true);
}

function $updateIndicesFrom(this$static, beforeIndex){
  var c, childTD, childTR, i;
  for (i = beforeIndex , c = $getWidgetCount(this$static); i < c; ++i) {
    childTR = getChild(this$static.body_0, i * 2);
    childTD = getFirstChild(childTR);
    setElementPropertyInt(childTD, '__index', i);
    beforeIndex == 0?setStyleName_0(childTD, 'gwt-StackPanelItem-first', true):setStyleName_0(childTD, 'gwt-StackPanelItem-first', false);
  }
}

function StackPanel_0(){
  $clinit_UIObject();
  var table;
  ComplexPanel_0.call(this);
  $$init_476(this);
  table = createTable();
  $setElement_0(this, table);
  this.body_0 = createTBody();
  appendChild(table, this.body_0);
  setElementPropertyInt(table, 'cellSpacing', 0);
  setElementPropertyInt(table, 'cellPadding', 0);
  sinkEvents_0(table, 1);
  this.setStyleName('gwt-StackPanel');
}

defineSeed(612, 595, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Iterable]));
_.createHeaderElem = function createHeaderElem(){
  return createDiv();
}
;
_.getHeaderTextElem = function getHeaderTextElem(headerElem){
  return headerElem;
}
;
_.onBrowserEvent = function onBrowserEvent_2(event_0){
  var index, target;
  if (eventGetType(event_0) == 1) {
    target = eventGetTarget_0(event_0);
    index = $findDividerIndex(this, target);
    index != -1 && $showStack(this, index);
  }
  $onBrowserEvent(this, event_0);
}
;
_.onEnsureDebugId = function onEnsureDebugId_1(baseID){
  var bodyElem, headerElem, i, numHeaders, tdWrapper;
  $onEnsureDebugId(this, baseID);
  numHeaders = getChildCount(this.body_0) >> 1;
  for (i = 0; i < numHeaders; ++i) {
    tdWrapper = getFirstChild(getChild(this.body_0, 2 * i));
    headerElem = getFirstChild(tdWrapper);
    bodyElem = getFirstChild(getChild(this.body_0, 2 * i + 1));
    ensureDebugId(tdWrapper, baseID, 'text-wrapper' + i);
    ensureDebugId(bodyElem, baseID, 'content' + i);
    ensureDebugId(this.getHeaderTextElem(headerElem), baseID, 'text' + i);
  }
}
;
_.remove_3 = function remove_9(child){
  return $remove_5(this, child, $getWidgetIndex(this, child));
}
;
function $clinit_DecoratedStackPanel(){
  $clinit_DecoratedStackPanel = nullMethod;
  $clinit_UIObject();
  'gwt-DecoratedStackPanel';
  DEFAULT_ROW_STYLENAMES = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['stackItemTop', 'stackItemMiddle']);
}

function $$init_477(){
}

function DecoratedStackPanel_0(){
  $clinit_DecoratedStackPanel();
  StackPanel_0.call(this);
  $$init_477();
  $setStylePrimaryName(this, 'gwt-DecoratedStackPanel');
}

defineSeed(611, 612, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Iterable]), DecoratedStackPanel_0);
_.createHeaderElem = function createHeaderElem_0(){
  var i, table, tbody;
  table = createTable();
  tbody = createTBody();
  appendChild(table, tbody);
  setStyleAttribute(table, 'width', '100%');
  setElementPropertyInt(table, 'cellSpacing', 0);
  setElementPropertyInt(table, 'cellPadding', 0);
  for (i = 0; i < DEFAULT_ROW_STYLENAMES.length; ++i) {
    appendChild(tbody, createTR_0(DEFAULT_ROW_STYLENAMES[i]));
  }
  return table;
}
;
_.getHeaderTextElem = function getHeaderTextElem_0(headerElem){
  var tbody, td, tr;
  tbody = getFirstChild(headerElem);
  tr = getChild(tbody, 1);
  td = getChild(tr, 1);
  return getFirstChild(td);
}
;
var DEFAULT_ROW_STYLENAMES;
function $ReusableCBF(this$static){
  if ((this$static.bitmap$0 & 1) == 0) {
    if ((this$static.bitmap$0 & 1) == 0) {
      this$static.ReusableCBF$u0020 = new GenTraversableFactory$ReusableCBF_0(this$static);
      this$static.bitmap$0 = this$static.bitmap$0 | 1;
    }
  }
  return this$static.ReusableCBF$u0020;
}

function $$init_743(){
}

function $apply_80(this$static, x){
  this$static.b$2.$plus$eq_0(new Tuple2_0(x, boxToInteger(this$static.i$1.elem)));
  this$static.i$1.elem = this$static.i$1.elem + 1;
}

function IterableLike$$anonfun$zipWithIndex$1_0(b$2, i$1){
  $$init_743();
  this.b$2 = b$2;
  this.i$1 = i$1;
  AbstractFunction1_0.call(this);
}

defineSeed(952, 268, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), IterableLike$$anonfun$zipWithIndex$1_0);
_.apply_0 = function apply_107(v1){
  $apply_80(this, v1);
  return $clinit_BoxedUnit() , UNIT;
}
;
_.b$2 = null;
_.i$1 = null;
function zipWithIndex_0($this, bf){
  var b$2, i$1;
  b$2 = bf.apply_9($this.repr());
  i$1 = new IntRef_0(0);
  $this.foreach(new IterableLike$$anonfun$zipWithIndex$1_0(b$2, i$1));
  return b$2.result();
}

function $$init_794(){
}

function GenTraversableFactory$ReusableCBF_0($outer){
  $$init_794();
  GenTraversableFactory$GenericCanBuildFrom_0.call(this, $outer);
}

defineSeed(1026, 1025, makeCastMap([Q$ScalaObject]), GenTraversableFactory$ReusableCBF_0);
defineSeed(1045, 1, makeCastMap([Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$LinearSeq, Q$LinearSeqLike, Q$LinearSeqOptimized, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Iterable_1, Q$List_0, Q$Traversable_0]));
_.zip_0 = function zip_26(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_11(bf){
  return zipWithIndex_0(this, bf);
}
;
defineSeed(1056, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSet, Q$GenSetLike, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Set_0, Q$SetLike, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericSetTemplate, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Subtractable, Q$HashSet, Q$Iterable_1, Q$Set_1, Q$Traversable_0]));
_.zip_0 = function zip_29(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_13(bf){
  return zipWithIndex_0(this, bf);
}
;
function $canBuildFrom_0(this$static){
  return $ReusableCBF(this$static);
}

defineSeed(1077, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSet, Q$GenSetLike, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Set_0, Q$SetLike, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericSetTemplate, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Subtractable, Q$Iterable_1, Q$ListSet, Q$Set_1, Q$Traversable_0]));
_.zip_0 = function zip_32(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_15(bf){
  return zipWithIndex_0(this, bf);
}
;
defineSeed(1096, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$IndexedSeq, Q$IndexedSeqLike, Q$Iterable_0, Q$IterableLike, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Iterable_1, Q$Range, Q$Traversable_0]));
_.zip_0 = function zip_39(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_21(bf){
  return zipWithIndex_0(this, bf);
}
;
defineSeed(1102, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSet, Q$GenSetLike, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Set_0, Q$SetLike, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericSetTemplate, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Subtractable, Q$Iterable_1, Q$Set_1, Q$Traversable_0]));
_.zip_0 = function zip_40(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_22(bf){
  return zipWithIndex_0(this, bf);
}
;
defineSeed(1103, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSet, Q$GenSetLike, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Set_0, Q$SetLike, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericSetTemplate, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Subtractable, Q$Iterable_1, Q$Set_1, Q$Traversable_0]));
_.zip_0 = function zip_41(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_23(bf){
  return zipWithIndex_0(this, bf);
}
;
defineSeed(1104, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSet, Q$GenSetLike, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Set_0, Q$SetLike, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericSetTemplate, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Subtractable, Q$Iterable_1, Q$Set_1, Q$Traversable_0]));
_.zip_0 = function zip_42(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_24(bf){
  return zipWithIndex_0(this, bf);
}
;
defineSeed(1105, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSet, Q$GenSetLike, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Set_0, Q$SetLike, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericSetTemplate, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Subtractable, Q$Iterable_1, Q$Set_1, Q$Traversable_0]));
_.zip_0 = function zip_43(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_25(bf){
  return zipWithIndex_0(this, bf);
}
;
defineSeed(1106, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSet, Q$GenSetLike, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Set_0, Q$SetLike, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericSetTemplate, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Subtractable, Q$Iterable_1, Q$Set_1, Q$Traversable_0]));
_.zip_0 = function zip_44(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_26(bf){
  return zipWithIndex_0(this, bf);
}
;
function $zip(this$static, that$2, bf){
  var $17$, $18$;
  if ($scala$collection$immutable$Stream$$isStreamBuilder(this$static, bf)) {
    this$static.isEmpty() || that$2.isEmpty()?($18$ = ($clinit_Stream$Empty$() , MODULE$_39)):($18$ = $apply_122(($clinit_Stream$cons$() , MODULE$_40 , new Tuple2_0(this$static.head(), that$2.head())), new Stream$$anonfun$zip$1_0(this$static, that$2)));
    $17$ = $scala$collection$immutable$Stream$$asThat($18$);
  }
   else {
    $17$ = zip_3(this$static, that$2, bf);
  }
  return $17$;
}

defineSeed(1108, 1, makeCastMap([Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$LinearSeq, Q$LinearSeqLike, Q$LinearSeqOptimized, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Iterable_1, Q$Stream, Q$Traversable_0]));
_.zip_0 = function zip_45(that$2, bf){
  return $zip(this, that$2, bf);
}
;
_.zipWithIndex = function zipWithIndex_27(bf){
  return $zip(this, $from_0(($clinit_Stream$() , MODULE$_38), 0), bf);
}
;
function $$init_869(){
}

function $apply_120(this$static){
  return $scala$collection$immutable$Stream$$asStream($zip(dynamicCast(this$static.$outer$u0020.tail(), Q$Stream), dynamicCast(this$static.that$2.tail(), Q$GenIterable), $canBuildFrom_1(($clinit_Stream$() , MODULE$_38))));
}

function Stream$$anonfun$zip$1_0($outer, that$2){
  $$init_869();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.that$2 = that$2;
  AbstractFunction0_0.call(this);
}

defineSeed(1118, 912, makeCastMap([Q$Serializable, Q$ScalaObject, Q$Serializable_0]), Stream$$anonfun$zip$1_0);
_.apply_3 = function apply_192(){
  return $apply_120(this);
}
;
_.$outer$u0020 = null;
_.that$2 = null;
defineSeed(1133, 1, makeCastMap([Q$Comparable, Q$Equals, Q$ScalaObject, Q$GenIterableLike, Q$GenTraversableLike, Q$GenTraversableOnce, Q$IndexedSeqLike, Q$IterableLike, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$HasNewBuilder]));
_.zip_0 = function zip_47(that, bf){
  return zip_2(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_28(bf){
  return zipWithIndex(this, bf);
}
;
defineSeed(1135, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$IndexedSeq, Q$IndexedSeqLike, Q$Iterable_0, Q$IterableLike, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Iterable_1, Q$Traversable_0]));
_.zip_0 = function zip_48(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_29(bf){
  return zipWithIndex_0(this, bf);
}
;
defineSeed(1141, 1, makeCastMap([Q$Comparable, Q$Equals, Q$Function1, Q$Immutable, Q$ScalaObject, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$IndexedSeq, Q$IndexedSeqLike, Q$Iterable_0, Q$IterableLike, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$Iterable_1, Q$Traversable_0, Q$WrappedString]));
_.zip_0 = function zip_51(that, bf){
  return zip_2(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_30(bf){
  return zipWithIndex(this, bf);
}
;
defineSeed(1144, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$IndexedSeq, Q$IndexedSeqLike, Q$Iterable_0, Q$IterableLike, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$Growable, Q$HasNewBuilder, Q$Subtractable, Q$ArrayBuffer, Q$Builder, Q$IndexedSeq_0, Q$IndexedSeqLike_0]));
_.zip_0 = function zip_52(that, bf){
  return zip_2(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_31(bf){
  return zipWithIndex(this, bf);
}
;
defineSeed(1150, 1, makeCastMap([Q$Equals, Q$ScalaObject, Q$GenIterableLike, Q$GenTraversableLike, Q$GenTraversableOnce, Q$IndexedSeqLike, Q$IterableLike, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$HasNewBuilder, Q$IndexedSeqLike_0]));
_.zip_0 = function zip_53(that, bf){
  return zip_2(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_32(bf){
  return zipWithIndex(this, bf);
}
;
defineSeed(1165, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSet, Q$GenSetLike, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Set_0, Q$SetLike, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericSetTemplate, Q$GenericTraversableTemplate, Q$Growable, Q$HasNewBuilder, Q$Subtractable, Q$Builder, Q$HashSet_0, Q$Set_2]));
_.zip_0 = function zip_55(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_33(bf){
  return zipWithIndex_0(this, bf);
}
;
defineSeed(1191, 1, makeCastMap([Q$Serializable, Q$Equals, Q$Function1, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$Iterable_0, Q$IterableLike, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$Growable, Q$HasNewBuilder, Q$Subtractable, Q$Builder, Q$ListBuffer]));
_.zip_0 = function zip_63(that, bf){
  return zip_3(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_39(bf){
  return zipWithIndex_0(this, bf);
}
;
defineSeed(1204, 1, makeCastMap([Q$Serializable, Q$CharSequence, Q$Comparable, Q$Equals, Q$Function1, Q$ScalaObject, Q$Serializable_0, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$IndexedSeq, Q$IndexedSeqLike, Q$Iterable_0, Q$IterableLike, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$Growable, Q$HasNewBuilder, Q$Builder, Q$IndexedSeq_0, Q$IndexedSeqLike_0, Q$StringBuilder]));
_.zip_0 = function zip_65(that, bf){
  return zip_2(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_40(bf){
  return zipWithIndex(this, bf);
}
;
defineSeed(1207, 1, makeCastMap([Q$Equals, Q$Function1, Q$ScalaObject, Q$GenIterable, Q$GenIterableLike, Q$GenSeq, Q$GenTraversable, Q$GenTraversableLike, Q$GenTraversableOnce, Q$IndexedSeq, Q$IndexedSeqLike, Q$Iterable_0, Q$IterableLike, Q$Seq, Q$Traversable, Q$TraversableLike, Q$TraversableOnce, Q$FilterMonadic, Q$GenericTraversableTemplate, Q$HasNewBuilder, Q$IndexedSeq_0, Q$IndexedSeqLike_0, Q$WrappedArray]));
_.zip_0 = function zip_66(that, bf){
  return zip_2(this, that, bf);
}
;
_.zipWithIndex = function zipWithIndex_41(bf){
  return zipWithIndex(this, bf);
}
;
var _3Lcom_google_gwt_resources_client_ImageResource_2_classLit = createForArray('[Lcom.google.gwt.resources.client.', 'ImageResource;', 1336, Lcom_google_gwt_resources_client_ImageResource_2_classLit), Lcom_google_gwt_user_client_ui_StackPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'StackPanel', 612, Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit), Lcom_google_gwt_user_client_ui_DecoratedStackPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DecoratedStackPanel', 611, Lcom_google_gwt_user_client_ui_StackPanel_2_classLit), Lcom_google_gwt_sample_showcase_client_content_lists_CwStackPanel_1Images_1default_1StaticClientBundleGenerator_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.lists.', 'CwStackPanel_Images_default_StaticClientBundleGenerator', 398, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_lists_CwStackPanel$$anonfun$createMailItem$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.lists.', 'CwStackPanel$$anonfun$createMailItem$1', 397, Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_lists_CwStackPanel$$anon$4_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.lists.', 'CwStackPanel$$anon$4', 393, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_lists_CwStackPanel$$anonfun$createFiltersItem$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.lists.', 'CwStackPanel$$anonfun$createFiltersItem$1', 396, Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_lists_CwStackPanel$$anon$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.lists.', 'CwStackPanel$$anon$2', 392, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_lists_CwStackPanel$$anonfun$createContactsItem$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.lists.', 'CwStackPanel$$anonfun$createContactsItem$1', 394, Lscala_runtime_AbstractFunction1_2_classLit), Lscala_collection_IterableLike$$anonfun$zipWithIndex$1_2_classLit = createForClass('scala.collection.', 'IterableLike$$anonfun$zipWithIndex$1', 952, Lscala_runtime_AbstractFunction1_2_classLit), Lscala_collection_generic_GenTraversableFactory$ReusableCBF_2_classLit = createForClass('scala.collection.generic.', 'GenTraversableFactory$ReusableCBF', 1026, Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom_2_classLit), Lcom_google_gwt_sample_showcase_client_content_lists_CwStackPanel$$anonfun$createContactsItem$1$$anonfun$apply$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.lists.', 'CwStackPanel$$anonfun$createContactsItem$1$$anonfun$apply$1', 395, Lscala_runtime_AbstractFunction1_2_classLit), Lscala_collection_immutable_Stream$$anonfun$zip$1_2_classLit = createForClass('scala.collection.immutable.', 'Stream$$anonfun$zip$1', 1118, Lscala_runtime_AbstractFunction0_2_classLit);
$entry(onLoad)(11);
