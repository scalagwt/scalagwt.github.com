function $compareTo(this$static, other){
  return this$static.ordinal - other.ordinal;
}

_ = Enum.prototype;
_.compareTo$ = function compareTo(other){
  return $compareTo(this, dynamicCast(other, Q$Enum));
}
;
function $$init_76(){
}

function $addKeyHandlersTo(this$static, source){
  addHandlers(source, this$static);
}

function HandlesAllKeyEvents_0(){
  Object_1.call(this);
  $$init_76();
}

function addHandlers(eventSource, reciever){
  eventSource.addKeyDownHandler(reciever);
  eventSource.addKeyPressHandler(reciever);
  eventSource.addKeyUpHandler(reciever);
}

function HandlesAllKeyEvents(){
}

_ = HandlesAllKeyEvents.prototype = new Object_0;
_.getClass$ = function getClass_77(){
  return Lcom_google_gwt_event_dom_client_HandlesAllKeyEvents_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$KeyDownHandler, Q$KeyPressHandler, Q$KeyUpHandler, Q$EventHandler]);
function $clinit_KeyPressEvent(){
  $clinit_KeyPressEvent = nullMethod;
  TYPE_4 = new DomEvent$Type_0('keypress', new KeyPressEvent_0);
}

function $$init_80(){
}

function $dispatch_4(this$static, handler){
  handler.onKeyPress(this$static);
}

function KeyPressEvent_0(){
  KeyEvent_1.call(this);
  $$init_80();
}

function getType_13(){
  $clinit_KeyPressEvent();
  return TYPE_4;
}

function KeyPressEvent(){
}

_ = KeyPressEvent_0.prototype = KeyPressEvent.prototype = new KeyEvent_0;
_.dispatch_0 = function dispatch_5(handler){
  $dispatch_4(this, dynamicCast(handler, Q$KeyPressHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_6(){
  return TYPE_4;
}
;
_.getClass$ = function getClass_81(){
  return Lcom_google_gwt_event_dom_client_KeyPressEvent_2_classLit;
}
;
var TYPE_4;
function $retainAll(this$static, c){
  var changed, iter;
  iter = this$static.iterator_0();
  changed = false;
  while (iter.hasNext()) {
    if (!c.contains_0(iter.next_0())) {
      iter.remove_2();
      changed = true;
    }
  }
  return changed;
}

function $compareTo_0(this$static, other){
  return signum(sub_0($getTime_0(this$static), $getTime_0(other)));
}

_ = Date_0.prototype;
_.compareTo$ = function compareTo_0(other){
  return $compareTo_0(this, dynamicCast(other, Q$Date));
}
;
function $$init_171(this$static){
  this$static.sb = new StringBuilder_0;
}

function $appendEscaped(this$static, text){
  $append_6(this$static.sb, htmlEscape(text));
  return this$static;
}

function $appendHtmlConstant(this$static, html){
  maybeCheckCompleteHtml();
  $append_6(this$static.sb, html);
  return this$static;
}

function $toSafeHtml(this$static){
  return new SafeHtmlString_0($toString_4(this$static.sb));
}

function SafeHtmlBuilder_0(){
  Object_1.call(this);
  $$init_171(this);
}

function SafeHtmlBuilder(){
}

_ = SafeHtmlBuilder_0.prototype = SafeHtmlBuilder.prototype = new Object_0;
_.getClass$ = function getClass_172(){
  return Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2_classLit;
}
;
function maybeCheckCompleteHtml(){
}

function $delegateEvent(target, event_0){
  $fireEvent_1(target, event_0);
}

_ = FocusWidget.prototype;
_.addKeyDownHandler = function addKeyDownHandler(handler){
  return $addKeyDownHandler(this, handler);
}
;
_.addKeyPressHandler = function addKeyPressHandler(handler){
  return $addDomHandler(this, handler, getType_13());
}
;
_ = ShowcaseConstants_.prototype;
_.cwSuggestBoxLabel = function cwSuggestBoxLabel(){
  return '<b>Choose a word:<\/b>';
}
;
_.cwSuggestBoxWords = function cwSuggestBoxWords(){
  var args, writer;
  args = dynamicCast(this.cache.get('cwSuggestBoxWords'), Q$String_$1);
  if (jsEquals(args, null)) {
    writer = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['1337', 'apple', 'about', 'ant', 'bruce', 'banana', 'bobv', 'canada', 'coconut', 'compiler', 'donut', 'deferred binding', 'dessert topping', 'eclair', 'ecc', 'frog attack', 'floor wax', 'fitz', 'google', 'gosh', 'gwt', 'hollis', 'haskell', 'hammer', 'in the flinks', 'internets', 'ipso facto', 'jat', 'jgw', 'java', 'jens', 'knorton', 'kaitlyn', 'kangaroo', 'la grange', 'lars', 'love', 'morrildl', 'max', 'maddie', 'mloofle', 'mmendez', 'nail', 'narnia', 'null', 'optimizations', 'obfuscation', 'original', 'ping pong', 'polymorphic', 'pleather', 'quotidian', 'quality', "qu'est-ce que c'est", 'ready state', 'ruby', 'rdayal', 'subversion', 'superclass', 'scottb', 'tobyr', 'the dans', '~ tilde', 'undefined', 'unit tests', 'under 100ms', 'vtbl', 'vidalia', 'vector graphics', 'w3c', 'web experience', 'work around', 'w00t!', 'xml', 'xargs', 'xeno', 'yacc', 'yank (the vi command)', 'zealot', 'zoe', 'zebra']);
    this.cache.put('cwSuggestBoxWords', writer);
    return writer;
  }
   else {
    return args;
  }
}
;
function $onInitialize_9(this$static){
  var oracle$1, suggestBox, suggestPanel, words;
  oracle$1 = new MultiWordSuggestOracle_0;
  words = $constants_1(this$static).cwSuggestBoxWords();
  $refArrayOps(($clinit_Predef$() , MODULE$_12 , words)).foreach(new CwSuggestBox$$anonfun$onInitialize$1_0(oracle$1));
  suggestBox = new SuggestBox_0(oracle$1);
  $ensureDebugId(suggestBox, 'cwSuggestBox');
  suggestPanel = new VerticalPanel_0;
  $add_16(suggestPanel, new HTML_1($constants_1(this$static).cwSuggestBoxLabel()));
  $add_16(suggestPanel, suggestBox);
  return suggestPanel;
}

_ = CwSuggestBox$$anon$1.prototype;
_.onSuccess = function onSuccess_10(){
  this.callback$1.onSuccess_0($onInitialize_9(this.$outer$u0020));
}
;
function $$init_294(){
}

function $apply_33(this$static, x$1){
  $add_14(this$static.oracle$1, x$1);
}

function CwSuggestBox$$anonfun$onInitialize$1_0(oracle$1){
  $$init_294();
  this.oracle$1 = oracle$1;
  AbstractFunction1_0.call(this);
}

function CwSuggestBox$$anonfun$onInitialize$1(){
}

_ = CwSuggestBox$$anonfun$onInitialize$1_0.prototype = CwSuggestBox$$anonfun$onInitialize$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_34(v1){
  $apply_33(this, dynamicCast(v1, Q$String));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_295(){
  return Lcom_google_gwt_sample_showcase_client_content_lists_CwSuggestBox$$anonfun$onInitialize$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.oracle$1 = null;
function $removeAutoHidePartner(this$static, partner){
  isNotNull(partner) || throwAssertionError_Object('partner cannot be null');
  isNotNull(this$static.autoHidePartners) && this$static.autoHidePartners.remove_1(partner);
}

_ = AbstractList.prototype;
_.set = function set_1(index, o){
  throw new UnsupportedOperationException_1('Set not supported on this list');
}
;
_ = ArrayList.prototype;
_.set = function set_2(index, o){
  return $set_1(this, index, o);
}
;
function $clearItems(this$static){
  var container, item, item$iterator;
  $selectItem(this$static, null);
  container = $getItemContainerElement(this$static);
  while (getChildCount(container) > 0) {
    removeChild(container, getChild(container, 0));
  }
  for (item$iterator = this$static.allItems.iterator_0(); item$iterator.hasNext();) {
    item = dynamicCast(item$iterator.next_0(), Q$UIObject);
    $setItemColSpan(item, 1);
    instanceOf(item, Q$MenuItemSeparator)?$setParentMenu_0(dynamicCast(item, Q$MenuItemSeparator), null):$setParentMenu(dynamicCast(item, Q$MenuItem), null);
  }
  $clear_1(this$static.items);
  $clear_1(this$static.allItems);
}

function $setFocusOnHoverEnabled(this$static, enabled){
  this$static.focusOnHover = enabled;
}

function $$init_516(this$static){
  this$static.emptyResponse = new SuggestOracle$Response_0(new ArrayList_0);
}

function $requestDefaultSuggestions(this$static, request, callback){
  jsEquals(request.query, null) || throwAssertionError();
  callback.onSuggestionsReady(request, this$static.emptyResponse);
}

function SuggestOracle_0(){
  Object_1.call(this);
  $$init_516(this);
}

function SuggestOracle(){
}

_ = SuggestOracle.prototype = new Object_0;
_.getClass$ = function getClass_517(){
  return Lcom_google_gwt_user_client_ui_SuggestOracle_2_classLit;
}
;
_.isDisplayStringHTML = function isDisplayStringHTML_0(){
  return false;
}
;
_.requestDefaultSuggestions = function requestDefaultSuggestions(request, callback){
  $requestDefaultSuggestions(this, request, callback);
}
;
function $$init_517(this$static){
  this$static.tree = new PrefixTree_0;
  this$static.toCandidates = new HashMap_0;
  this$static.toRealSuggestions = new HashMap_0;
}

function $add_14(this$static, suggestion){
  var candidate, i, l_0, word, words;
  candidate = $normalizeSuggestion(this$static, suggestion);
  $put_1(this$static.toRealSuggestions, candidate, suggestion);
  words = $split_0(candidate, ' ');
  for (i = 0; i < words.length; ++i) {
    word = words[i];
    $add_15(this$static.tree, word);
    l_0 = dynamicCast($get_8(this$static.toCandidates, word), Q$Set);
    if (isNull(l_0)) {
      l_0 = new HashSet_0;
      $put_1(this$static.toCandidates, word, l_0);
    }
    l_0.add_0(candidate);
  }
}

function $convertToFormattedSuggestions(this$static, query, candidates){
  var accum, candidate, cursor, formattedSuggestion, i, index, part1, part2, searchWords, suggestion, suggestions, wordBounds;
  suggestions = new ArrayList_0;
  for (i = 0; i < candidates.size_1(); ++i) {
    candidate = dynamicCast(candidates.get_0(i), Q$String);
    cursor = 0;
    index = 0;
    formattedSuggestion = dynamicCast($get_8(this$static.toRealSuggestions, candidate), Q$String);
    accum = new SafeHtmlBuilder_0;
    searchWords = $split_0(query, ' ');
    while (true) {
      wordBounds = $findNextWord(candidate, searchWords, index);
      if (isNull(wordBounds)) {
        break;
      }
      if (wordBounds.startIndex == 0 || 32 == $charAt(candidate, wordBounds.startIndex - 1)) {
        part1 = $substring_0(formattedSuggestion, cursor, wordBounds.startIndex);
        part2 = $substring_0(formattedSuggestion, wordBounds.startIndex, wordBounds.endIndex);
        cursor = wordBounds.endIndex;
        $appendEscaped(accum, part1);
        $appendHtmlConstant(accum, '<strong>');
        $appendEscaped(accum, part2);
        $appendHtmlConstant(accum, '<\/strong>');
      }
      index = wordBounds.endIndex;
    }
    if (cursor == 0) {
      continue;
    }
    $appendEscaped(accum, $substring(formattedSuggestion, cursor));
    suggestion = $createSuggestion(formattedSuggestion, $toSafeHtml(accum).asString());
    suggestions.add_0(suggestion);
  }
  return suggestions;
}

function $createCandidatesFromSearch(this$static, query){
  var candidateSet, candidates, i, searchWords, thisWordChoices, word;
  candidates = new ArrayList_0;
  if ($length_1(query) == 0) {
    return candidates;
  }
  searchWords = $split_0(query, ' ');
  candidateSet = null;
  for (i = 0; i < searchWords.length; ++i) {
    word = searchWords[i];
    if ($length_1(word) == 0 || $matches(word, ' ')) {
      continue;
    }
    thisWordChoices = $createCandidatesFromWord(this$static, word);
    if (isNull(candidateSet)) {
      candidateSet = thisWordChoices;
    }
     else {
      $retainAll(candidateSet, thisWordChoices);
      if ($size_5(candidateSet) < 2) {
        break;
      }
    }
  }
  if (isNotNull(candidateSet)) {
    $addAll(candidates, candidateSet);
    sort_0(candidates);
  }
  return candidates;
}

function $createCandidatesFromWord(this$static, query){
  var belongsTo, candidateSet, i, words;
  candidateSet = new HashSet_0;
  words = $getSuggestions(this$static.tree, query, 2147483647);
  if (isNotNull(words)) {
    for (i = 0; i < words.size_1(); ++i) {
      belongsTo = dynamicCast($get_8(this$static.toCandidates, words.get_0(i)), Q$Collection);
      isNotNull(belongsTo) && candidateSet.addAll(belongsTo);
    }
  }
  return candidateSet;
}

function $createSuggestion(replacementString, displayString){
  return new MultiWordSuggestOracle$MultiWordSuggestion_0(replacementString, displayString);
}

function $findNextWord(candidate, searchWords, indexToStartAt){
  var firstWord, index, newWord, word, word$array, word$index, word$max;
  firstWord = null;
  for (word$array = searchWords , word$index = 0 , word$max = word$array.length; word$index < word$max; ++word$index) {
    word = word$array[word$index];
    index = $indexOf_4(candidate, word, indexToStartAt);
    if (index != -1) {
      newWord = new MultiWordSuggestOracle$WordBounds_0(index, $length_1(word));
      (isNull(firstWord) || $compareTo_1(newWord, firstWord) < 0) && (firstWord = newWord);
    }
  }
  return firstWord;
}

function $normalizeSearch(this$static, search){
  search = $normalizeSuggestion(this$static, search);
  search = $replaceAll(search, '\\s+', ' ');
  return $trim(search);
}

function $normalizeSuggestion(this$static, formattedSuggestion){
  var i, ignore;
  formattedSuggestion = $toLowerCase(formattedSuggestion);
  if (jsNotEquals(this$static.whitespaceChars, null)) {
    for (i = 0; i < this$static.whitespaceChars.length; ++i) {
      ignore = this$static.whitespaceChars[i];
      formattedSuggestion = $replace_0(formattedSuggestion, ignore, 32);
    }
  }
  return formattedSuggestion;
}

function MultiWordSuggestOracle_0(){
  MultiWordSuggestOracle_1.call(this, ' ');
}

function MultiWordSuggestOracle_1(whitespaceChars){
  var i;
  SuggestOracle_0.call(this);
  $$init_517(this);
  this.whitespaceChars = initDim(_3C_classLit, makeCastMap([Q$char_$1, Q$Serializable]), -1, $length_1(whitespaceChars), 1);
  for (i = 0; i < $length_1(whitespaceChars); ++i) {
    this.whitespaceChars[i] = $charAt(whitespaceChars, i);
  }
}

function MultiWordSuggestOracle(){
}

_ = MultiWordSuggestOracle_0.prototype = MultiWordSuggestOracle.prototype = new SuggestOracle;
_.getClass$ = function getClass_518(){
  return Lcom_google_gwt_user_client_ui_MultiWordSuggestOracle_2_classLit;
}
;
_.isDisplayStringHTML = function isDisplayStringHTML_1(){
  return true;
}
;
_.requestDefaultSuggestions = function requestDefaultSuggestions_0(request, callback){
  isNotNull(this.defaultResponse)?callback.onSuggestionsReady(request, this.defaultResponse):$requestDefaultSuggestions(this, request, callback);
}
;
_.requestSuggestions = function requestSuggestions(request, callback){
  var candidates, i, limit, numberTruncated, query, response, suggestions;
  query = $normalizeSearch(this, $getQuery(request));
  limit = $getLimit(request);
  candidates = $createCandidatesFromSearch(this, query);
  numberTruncated = max_0(0, candidates.size_1() - limit);
  for (i = candidates.size_1() - 1; i > limit; --i) {
    candidates.remove_4(i);
  }
  suggestions = $convertToFormattedSuggestions(this, query, candidates);
  response = new SuggestOracle$Response_0(suggestions);
  $setMoreSuggestionsCount(response, numberTruncated);
  callback.onSuggestionsReady(request, response);
}
;
_.defaultResponse = null;
_.whitespaceChars = null;
function $$init_518(){
}

function MultiWordSuggestOracle$MultiWordSuggestion_0(replacementString, displayString){
  Object_1.call(this);
  $$init_518();
  this.replacementString = replacementString;
  this.displayString = displayString;
}

function MultiWordSuggestOracle$MultiWordSuggestion(){
}

_ = MultiWordSuggestOracle$MultiWordSuggestion_0.prototype = MultiWordSuggestOracle$MultiWordSuggestion.prototype = new Object_0;
_.getClass$ = function getClass_519(){
  return Lcom_google_gwt_user_client_ui_MultiWordSuggestOracle$MultiWordSuggestion_2_classLit;
}
;
_.getDisplayString = function getDisplayString(){
  return this.displayString;
}
;
_.getReplacementString = function getReplacementString(){
  return this.replacementString;
}
;
_.castableTypeMap$ = makeCastMap([Q$SuggestOracle$Suggestion]);
_.displayString = null;
_.replacementString = null;
function $$init_519(){
}

function $compareTo_1(this$static, that){
  var comparison;
  comparison = this$static.startIndex - that.startIndex;
  comparison == 0 && (comparison = that.endIndex - this$static.endIndex);
  return comparison;
}

function MultiWordSuggestOracle$WordBounds_0(startIndex, length_0){
  Object_1.call(this);
  $$init_519();
  this.startIndex = startIndex;
  this.endIndex = startIndex + length_0;
}

function MultiWordSuggestOracle$WordBounds(){
}

_ = MultiWordSuggestOracle$WordBounds_0.prototype = MultiWordSuggestOracle$WordBounds.prototype = new Object_0;
_.compareTo$ = function compareTo_1(that){
  return $compareTo_1(this, dynamicCast(that, Q$MultiWordSuggestOracle$WordBounds));
}
;
_.getClass$ = function getClass_520(){
  return Lcom_google_gwt_user_client_ui_MultiWordSuggestOracle$WordBounds_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$MultiWordSuggestOracle$WordBounds, Q$Comparable]);
_.endIndex = 0;
_.startIndex = 0;
function $$init_531(this$static){
}

function $add_15(this$static, s){
  var suffixes = this$static.suffixes;
  var subtrees = this$static.subtrees_0;
  var prefixLength = this$static.prefixLength;
  if (s == null || s.length == 0) {
    return false;
  }
  if (s.length <= prefixLength) {
    var safeKey = safe_0(s);
    if (suffixes.hasOwnProperty(safeKey)) {
      return false;
    }
     else {
      this$static.size_0++;
      suffixes[safeKey] = true;
      return true;
    }
  }
   else {
    var prefix = safe_0(s.slice(0, prefixLength));
    var theTree;
    if (subtrees.hasOwnProperty(prefix)) {
      theTree = subtrees[prefix];
    }
     else {
      theTree = createPrefixTree(prefixLength << 1);
      subtrees[prefix] = theTree;
    }
    var slice = s.slice(prefixLength);
    if (theTree.add_3(slice)) {
      this$static.size_0++;
      return true;
    }
     else {
      return false;
    }
  }
}

function $clear_3(this$static){
  this$static.size_0 = 0;
  this$static.subtrees_0 = {};
  this$static.suffixes = {};
}

function $contains_0(this$static, s){
  return $getSuggestions(this$static, s, 1).contains_0(s);
}

function $getSuggestions(this$static, search, limit){
  var toReturn;
  toReturn = new ArrayList_0;
  jsNotEquals(search, null) && limit > 0 && $suggestImpl(this$static, search, '', toReturn, limit);
  return toReturn;
}

function $suggestImpl(this$static, search, prefix, output, limit){
  var suffixes = this$static.suffixes;
  var subtrees = this$static.subtrees_0;
  var prefixLength = this$static.prefixLength;
  if (search.length > prefix.length + prefixLength) {
    var key = safe_0(search.slice(prefix.length, prefix.length + prefixLength));
    if (subtrees.hasOwnProperty(key)) {
      var subtree = subtrees[key];
      var target = prefix + unsafe_0(key);
      subtree.suggestImpl(search, target, output, limit);
    }
  }
   else {
    for (var suffix in suffixes) {
      if (suffix.indexOf(':') != 0) {
        continue;
      }
      var target = prefix + unsafe_0(suffix);
      if (target.indexOf(search) == 0) {
        output.add_0(target);
      }
      if (output.size_1() >= limit) {
        return;
      }
    }
    for (var key in subtrees) {
      if (key.indexOf(':') != 0) {
        continue;
      }
      var target = prefix + unsafe_0(key);
      var subtree = subtrees[key];
      if (target.indexOf(search) == 0) {
        if (subtree.size_0 <= limit - output.size_1() || subtree.size_0 == 1) {
          subtree.dump_0(output, target);
        }
         else {
          for (var suffix in subtree.suffixes) {
            if (suffix.indexOf(':') == 0) {
              output.add_0(target + unsafe_0(suffix));
            }
          }
          for (var subkey in subtree.subtrees_0) {
            if (subkey.indexOf(':') == 0) {
              output.add_0(target + unsafe_0(subkey) + '...');
            }
          }
        }
      }
    }
  }
}

function PrefixTree_0(){
  PrefixTree_2.call(this, 2, null);
}

function PrefixTree_1(prefixLength){
  PrefixTree_2.call(this, prefixLength, null);
}

function PrefixTree_2(prefixLength, source){
  AbstractCollection_0.call(this);
  $$init_531(this);
  this.prefixLength = prefixLength;
  $clear_3(this);
  isNotNull(source) && this.addAll(source);
}

function createPrefixTree(prefixLength){
  return new PrefixTree_1(prefixLength);
}

function safe_0(s){
  return ':' + s;
}

function unsafe_0(s){
  return $substring(s, 1);
}

function PrefixTree(){
}

_ = PrefixTree_1.prototype = PrefixTree_0.prototype = PrefixTree.prototype = new AbstractCollection;
_.add_0 = function add_17(s){
  return $add_15(this, dynamicCast(s, Q$String));
}
;
_.add_3 = function add_18(s){
  return $add_15(this, s);
}
;
_.clear = function clear_3(){
  $clear_3(this);
}
;
_.contains_0 = function contains_3(o){
  return instanceOf(o, Q$String) && $contains_0(this, dynamicCast(o, Q$String));
}
;
_.dump_0 = function dump_0(output, prefix){
  var s, s$iterator;
  for (s$iterator = this.iterator_0(); s$iterator.hasNext();) {
    s = dynamicCast(s$iterator.next_0(), Q$String);
    output.add_0(prefix + s);
  }
}
;
_.getClass$ = function getClass_532(){
  return Lcom_google_gwt_user_client_ui_PrefixTree_2_classLit;
}
;
_.iterator_0 = function iterator_10(){
  return new PrefixTree$PrefixTreeIterator_0(this);
}
;
_.size_1 = function size_7(){
  return this.size_0;
}
;
_.suggestImpl = function suggestImpl(search, prefix, output, limit){
  $suggestImpl(this, search, prefix, output, limit);
}
;
_.castableTypeMap$ = makeCastMap([Q$Iterable, Q$Collection]);
_.prefixLength = 0;
_.size_0 = 0;
_.subtrees_0 = null;
_.suffixes = null;
function $$init_532(){
}

function $addTree(this$static, tree, prefix){
  var suffixes = [];
  for (var suffix in tree.suffixes) {
    if (suffix.indexOf(':') == 0) {
      suffixes.push(suffix);
    }
  }
  var frame = {suffixNames:suffixes, subtrees:tree.subtrees_0, prefix:prefix, index:0};
  var stack = this$static.stack_0;
  stack.push(frame);
}

function $hasNext_2(this$static){
  return jsNotEquals($nextImpl(this$static, true), null);
}

function $init_3(this$static){
  this$static.stack_0 = [];
}

function $next_2(this$static){
  var toReturn;
  toReturn = $nextImpl(this$static, false);
  if (jsEquals(toReturn, null)) {
    if ($hasNext_2(this$static)) {
      throw new RuntimeException_1('nextImpl() returned null, but hasNext says otherwise');
    }
     else {
      throw new NoSuchElementException_1('No more elements in the iterator');
    }
  }
  return toReturn;
}

function $nextImpl(this$static, peek){
  var stack = this$static.stack_0;
  var safe = safe_0;
  var unsafe = unsafe_0;
  while (stack.length > 0) {
    var frame = stack.pop();
    if (frame.index < frame.suffixNames.length) {
      var toReturn = frame.prefix + unsafe(frame.suffixNames[frame.index]);
      if (!peek) {
        frame.index++;
      }
      if (frame.index < frame.suffixNames.length) {
        stack.push(frame);
      }
       else {
        for (key in frame.subtrees) {
          if (key.indexOf(':') != 0) {
            continue;
          }
          var target = frame.prefix + unsafe(key);
          var subtree = frame.subtrees[key];
          this$static.addTree(subtree, target);
        }
      }
      return toReturn;
    }
     else {
      for (var key in frame.subtrees) {
        if (key.indexOf(':') != 0) {
          continue;
        }
        var target = frame.prefix + unsafe(key);
        var subtree = frame.subtrees[key];
        this$static.addTree(subtree, target);
      }
    }
  }
  return null;
}

function PrefixTree$PrefixTreeIterator_0(tree){
  Object_1.call(this);
  $$init_532();
  $init_3(this);
  $addTree(this, tree, '');
}

function PrefixTree$PrefixTreeIterator(){
}

_ = PrefixTree$PrefixTreeIterator_0.prototype = PrefixTree$PrefixTreeIterator.prototype = new Object_0;
_.addTree = function addTree(tree, prefix){
  $addTree(this, tree, prefix);
}
;
_.getClass$ = function getClass_533(){
  return Lcom_google_gwt_user_client_ui_PrefixTree$PrefixTreeIterator_2_classLit;
}
;
_.hasNext = function hasNext_3(){
  return $hasNext_2(this);
}
;
_.next_0 = function next_4(){
  return $next_2(this);
}
;
_.remove_2 = function remove_20(){
  throw new UnsupportedOperationException_1('PrefixTree does not support removal.  Use clear()');
}
;
_.stack_0 = null;
function $$init_545(this$static){
  this$static , true;
  this$static.callback = new SuggestBox$1_0(this$static);
  this$static.suggestionCallback = new SuggestBox$2_0(this$static);
}

function $addEventsToTextBox(this$static){
  var events;
  events = new SuggestBox$1TextBoxEvents_0(this$static);
  $addKeyHandlersTo(events, this$static.box);
  $addValueChangeHandler_0(this$static.box, events);
}

function $fireSuggestionEvent(this$static, selectedSuggestion){
  fire_7(this$static, selectedSuggestion);
}

function $getText_2(this$static){
  return $getText_1(this$static.box);
}

function $isAutoSelectEnabled(){
  return true;
}

function $refreshSuggestions(this$static){
  var text;
  text = $getText_2(this$static);
  if ($equals_3(text, this$static.currentText)) {
    return;
  }
   else {
    this$static.currentText = text;
  }
  $showSuggestions(this$static, text);
}

function $setNewSelection(this$static, curSuggestion){
  isNotNull(curSuggestion) || throwAssertionError_Object('suggestion cannot be null');
  this$static.currentText = curSuggestion.getReplacementString();
  $setText_8(this$static, this$static.currentText);
  this$static.display_0.hideSuggestions();
  $fireSuggestionEvent(this$static, curSuggestion);
}

function $setOracle(this$static, oracle){
  this$static.oracle = oracle;
}

function $setText_8(this$static, text){
  $setText_7(this$static.box, text);
}

function $showSuggestions(this$static, query){
  $length_1(query) == 0?this$static.oracle.requestDefaultSuggestions(new SuggestOracle$Request_0(null, this$static.limit), this$static.callback):this$static.oracle.requestSuggestions(new SuggestOracle$Request_0(query, this$static.limit), this$static.callback);
}

function SuggestBox_0(oracle){
  $clinit_Composite();
  SuggestBox_1.call(this, oracle, new TextBox_0);
}

function SuggestBox_1(oracle, box){
  SuggestBox_2.call(this, oracle, box, new SuggestBox$DefaultSuggestionDisplay_0);
}

function SuggestBox_2(oracle, box, suggestDisplay){
  Composite_0.call(this);
  $$init_545(this);
  this.box = box;
  this.display_0 = suggestDisplay;
  $initWidget(this, box);
  $addEventsToTextBox(this);
  $setOracle(this, oracle);
  this.setStyleName('gwt-SuggestBox');
}

_ = SuggestBox_0.prototype = SuggestBox.prototype;
_.addKeyDownHandler = function addKeyDownHandler_0(handler){
  return $addDomHandler(this, handler, getType_12());
}
;
_.addKeyPressHandler = function addKeyPressHandler_0(handler){
  return $addDomHandler(this, handler, getType_13());
}
;
_.addKeyUpHandler = function addKeyUpHandler_0(handler){
  return $addDomHandler(this, handler, getType_14());
}
;
_.addSelectionHandler = function addSelectionHandler_2(handler){
  return $addHandler_1(this, handler, getType_29());
}
;
_.addValueChangeHandler = function addValueChangeHandler_4(handler){
  return $addHandler_1(this, handler, getType_30());
}
;
_.getClass$ = function getClass_546(){
  return Lcom_google_gwt_user_client_ui_SuggestBox_2_classLit;
}
;
_.getText = function getText_11(){
  return $getText_2(this);
}
;
_.onEnsureDebugId = function onEnsureDebugId_15(baseID){
  $onEnsureDebugId(this, baseID);
  this.display_0.onEnsureDebugId(baseID);
}
;
_.setFocus = function setFocus_3(focused){
  this.box.setFocus(focused);
}
;
function $$init_546(){
}

function SuggestBox$1_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_546();
}

function SuggestBox$1(){
}

_ = SuggestBox$1_0.prototype = SuggestBox$1.prototype = new Object_0;
_.getClass$ = function getClass_547(){
  return Lcom_google_gwt_user_client_ui_SuggestBox$1_2_classLit;
}
;
_.onSuggestionsReady = function onSuggestionsReady(request, response){
  $setMoreSuggestions(($hasMoreSuggestions(response) , $getMoreSuggestionsCount(response)));
  this.this$0.display_0.showSuggestions(this.this$0, $getSuggestions_0(response), this.this$0.oracle.isDisplayStringHTML(), $isAutoSelectEnabled(), this.this$0.suggestionCallback);
}
;
_.this$0 = null;
function $$init_547(){
}

function SuggestBox$1TextBoxEvents_0(this$0){
  this.this$0 = this$0;
  HandlesAllKeyEvents_0.call(this);
  $$init_547();
}

function SuggestBox$1TextBoxEvents(){
}

_ = SuggestBox$1TextBoxEvents_0.prototype = SuggestBox$1TextBoxEvents.prototype = new HandlesAllKeyEvents;
_.getClass$ = function getClass_548(){
  return Lcom_google_gwt_user_client_ui_SuggestBox$1TextBoxEvents_2_classLit;
}
;
_.onKeyDown = function onKeyDown(event_0){
  var suggestion;
  switch ($getNativeKeyCode(event_0)) {
    case 40:
      this.this$0.display_0.moveSelectionDown();
      break;
    case 38:
      this.this$0.display_0.moveSelectionUp();
      break;
    case 13:
    case 9:
      suggestion = this.this$0.display_0.getCurrentSelection();
      isNull(suggestion)?this.this$0.display_0.hideSuggestions():$setNewSelection(this.this$0, suggestion);
  }
  $delegateEvent(this.this$0, event_0);
}
;
_.onKeyPress = function onKeyPress(event_0){
  $delegateEvent(this.this$0, event_0);
}
;
_.onKeyUp = function onKeyUp_10(event_0){
  $refreshSuggestions(this.this$0);
  $delegateEvent(this.this$0, event_0);
}
;
_.onValueChange = function onValueChange_1(event_0){
  $delegateEvent(this.this$0, event_0);
}
;
_.castableTypeMap$ = makeCastMap([Q$KeyDownHandler, Q$KeyPressHandler, Q$KeyUpHandler, Q$ValueChangeHandler, Q$EventHandler]);
_.this$0 = null;
function $$init_548(){
}

function SuggestBox$2_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_548();
}

function SuggestBox$2(){
}

_ = SuggestBox$2_0.prototype = SuggestBox$2.prototype = new Object_0;
_.getClass$ = function getClass_549(){
  return Lcom_google_gwt_user_client_ui_SuggestBox$2_2_classLit;
}
;
_.onSuggestionSelected = function onSuggestionSelected(suggestion){
  $setNewSelection(this.this$0, suggestion);
}
;
_.this$0 = null;
function $$init_549(){
}

function $setMoreSuggestions(){
}

function SuggestBox$SuggestionDisplay_0(){
  Object_1.call(this);
  $$init_549();
}

function SuggestBox$SuggestionDisplay(){
}

_ = SuggestBox$SuggestionDisplay.prototype = new Object_0;
_.getClass$ = function getClass_550(){
  return Lcom_google_gwt_user_client_ui_SuggestBox$SuggestionDisplay_2_classLit;
}
;
_.onEnsureDebugId = function onEnsureDebugId_16(suggestBoxBaseID){
}
;
function $$init_550(this$static){
  this$static , true;
}

function $createPopup(){
  var p;
  p = new DecoratedPopupPanel_2(true, false, 'suggestPopup');
  p.setStyleName('gwt-SuggestBoxPopup');
  $setPreviewingAllNativeEvents(p, true);
  $setAnimationType(p, ($clinit_PopupPanel$AnimationType() , ROLL_DOWN));
  return p;
}

function $decorateSuggestionList(suggestionList){
  return suggestionList;
}

function $hideSuggestions(this$static){
  this$static.suggestionPopup.hide();
}

function $isSuggestionListShowing(this$static){
  return $isShowing(this$static.suggestionPopup);
}

function SuggestBox$DefaultSuggestionDisplay_0(){
  SuggestBox$SuggestionDisplay_0.call(this);
  $$init_550(this);
  this.suggestionMenu = new SuggestBox$SuggestionMenu_0(true);
  this.suggestionPopup = $createPopup();
  this.suggestionPopup.setWidget($decorateSuggestionList(this.suggestionMenu));
}

function SuggestBox$DefaultSuggestionDisplay(){
}

_ = SuggestBox$DefaultSuggestionDisplay_0.prototype = SuggestBox$DefaultSuggestionDisplay.prototype = new SuggestBox$SuggestionDisplay;
_.getClass$ = function getClass_551(){
  return Lcom_google_gwt_user_client_ui_SuggestBox$DefaultSuggestionDisplay_2_classLit;
}
;
_.getCurrentSelection = function getCurrentSelection(){
  var item;
  if (!$isSuggestionListShowing(this)) {
    return null;
  }
  item = $getSelectedItem_0(this.suggestionMenu);
  return isNull(item)?null:$getSuggestion(dynamicCast(item, Q$SuggestBox$SuggestionMenuItem));
}
;
_.hideSuggestions = function hideSuggestions(){
  $hideSuggestions(this);
}
;
_.moveSelectionDown = function moveSelectionDown(){
  $isSuggestionListShowing(this) && $selectItem_0(this.suggestionMenu, $getSelectedItemIndex(this.suggestionMenu) + 1);
}
;
_.moveSelectionUp = function moveSelectionUp(){
  $isSuggestionListShowing(this) && ($getSelectedItemIndex(this.suggestionMenu) == -1?$selectItem_0(this.suggestionMenu, $getNumItems(this.suggestionMenu) - 1):$selectItem_0(this.suggestionMenu, $getSelectedItemIndex(this.suggestionMenu) - 1));
}
;
_.onEnsureDebugId = function onEnsureDebugId_17(baseID){
  $ensureDebugId(this.suggestionPopup, baseID + '-popup');
  $setMenuItemDebugIds(this.suggestionMenu, baseID);
}
;
_.showSuggestions = function showSuggestions(suggestBox, suggestions, isDisplayStringHTML, isAutoSelectEnabled, callback){
  var anySuggestions, curSuggestion, curSuggestion$iterator, menuItem;
  anySuggestions = isNotNull(suggestions) && suggestions.size_1() > 0;
  if (!anySuggestions) {
    $hideSuggestions(this);
    return;
  }
  this.suggestionPopup.isAttached() && this.suggestionPopup.hide();
  $clearItems(this.suggestionMenu);
  for (curSuggestion$iterator = suggestions.iterator_0(); curSuggestion$iterator.hasNext();) {
    curSuggestion = dynamicCast(curSuggestion$iterator.next_0(), Q$SuggestOracle$Suggestion);
    menuItem = new SuggestBox$SuggestionMenuItem_0(curSuggestion, isDisplayStringHTML);
    $setCommand(menuItem, new SuggestBox$DefaultSuggestionDisplay$1_0(this, callback, curSuggestion));
    $addItem_1(this.suggestionMenu, menuItem);
  }
  isAutoSelectEnabled && anySuggestions && $selectItem_0(this.suggestionMenu, 0);
  if (jsNotEquals(this.lastSuggestBox, suggestBox)) {
    isNotNull(this.lastSuggestBox) && $removeAutoHidePartner(this.suggestionPopup, $getElement(this.lastSuggestBox));
    this.lastSuggestBox = suggestBox;
    $addAutoHidePartner(this.suggestionPopup, $getElement(suggestBox));
  }
  $showRelativeTo(this.suggestionPopup, isNotNull(this.positionRelativeTo)?this.positionRelativeTo:suggestBox);
}
;
_.lastSuggestBox = null;
_.positionRelativeTo = null;
_.suggestionMenu = null;
_.suggestionPopup = null;
function $$init_551(){
}

function SuggestBox$DefaultSuggestionDisplay$1_0(this$1, val$callback, val$curSuggestion){
  this , this$1;
  this.val$callback = val$callback;
  this.val$curSuggestion = val$curSuggestion;
  Object_1.call(this);
  $$init_551();
}

function SuggestBox$DefaultSuggestionDisplay$1(){
}

_ = SuggestBox$DefaultSuggestionDisplay$1_0.prototype = SuggestBox$DefaultSuggestionDisplay$1.prototype = new Object_0;
_.execute_1 = function execute_15(){
  this.val$callback.onSuggestionSelected(this.val$curSuggestion);
}
;
_.getClass$ = function getClass_552(){
  return Lcom_google_gwt_user_client_ui_SuggestBox$DefaultSuggestionDisplay$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Command]);
_.val$callback = null;
_.val$curSuggestion = null;
function $$init_552(){
}

function $getNumItems(this$static){
  return $getItems(this$static).size_1();
}

function $getSelectedItemIndex(this$static){
  var selectedItem;
  selectedItem = $getSelectedItem_0(this$static);
  if (isNotNull(selectedItem)) {
    return $getItems(this$static).indexOf_0(selectedItem);
  }
  return -1;
}

function $selectItem_0(this$static, index){
  var items;
  items = $getItems(this$static);
  index > -1 && index < items.size_1() && $itemOver(this$static, dynamicCast(items.get_0(index), Q$MenuItem), false);
}

function SuggestBox$SuggestionMenu_0(vertical){
  $clinit_UIObject();
  MenuBar_1.call(this, vertical);
  $$init_552();
  this.setStyleName('');
  $setFocusOnHoverEnabled(this, false);
}

function SuggestBox$SuggestionMenu(){
}

_ = SuggestBox$SuggestionMenu_0.prototype = SuggestBox$SuggestionMenu.prototype = new MenuBar;
_.getClass$ = function getClass_553(){
  return Lcom_google_gwt_user_client_ui_SuggestBox$SuggestionMenu_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$PopupListener, Q$UIObject, Q$Widget]);
function $$init_553(){
}

function $getSuggestion(this$static){
  return this$static.suggestion;
}

function $setSuggestion(this$static, suggestion){
  this$static.suggestion = suggestion;
}

function SuggestBox$SuggestionMenuItem_0(suggestion, asHTML){
  $clinit_UIObject();
  MenuItem_2.call(this, suggestion.getDisplayString(), asHTML);
  $$init_553();
  setStyleAttribute($getElement(this), 'whiteSpace', 'nowrap');
  this.setStyleName('item');
  $setSuggestion(this, suggestion);
}

function SuggestBox$SuggestionMenuItem(){
}

_ = SuggestBox$SuggestionMenuItem_0.prototype = SuggestBox$SuggestionMenuItem.prototype = new MenuItem;
_.getClass$ = function getClass_554(){
  return Lcom_google_gwt_user_client_ui_SuggestBox$SuggestionMenuItem_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasVisibility, Q$MenuItem, Q$SuggestBox$SuggestionMenuItem, Q$UIObject]);
_.suggestion = null;
function $$init_554(this$static){
}

function $getLimit(this$static){
  return this$static.limit;
}

function $getQuery(this$static){
  return this$static.query;
}

function $setLimit(this$static, limit){
  this$static.limit = limit;
}

function $setQuery(this$static, query){
  this$static.query = query;
}

function SuggestOracle$Request_0(query, limit){
  Object_1.call(this);
  $$init_554(this);
  $setQuery(this, query);
  $setLimit(this, limit);
}

function SuggestOracle$Request(){
}

_ = SuggestOracle$Request_0.prototype = SuggestOracle$Request.prototype = new Object_0;
_.getClass$ = function getClass_555(){
  return Lcom_google_gwt_user_client_ui_SuggestOracle$Request_2_classLit;
}
;
_.limit = 20;
_.query = null;
function $$init_555(this$static){
}

function $getMoreSuggestionsCount(this$static){
  return this$static.numMoreSuggestions;
}

function $getSuggestions_0(this$static){
  return this$static.suggestions;
}

function $hasMoreSuggestions(this$static){
  return this$static.moreSuggestions;
}

function $setMoreSuggestionsCount(this$static, count){
  this$static.numMoreSuggestions = count;
  this$static.moreSuggestions = count > 0;
}

function $setSuggestions(this$static, suggestions){
  this$static.suggestions = suggestions;
}

function SuggestOracle$Response_0(suggestions){
  Object_1.call(this);
  $$init_555(this);
  $setSuggestions(this, suggestions);
}

function SuggestOracle$Response(){
}

_ = SuggestOracle$Response_0.prototype = SuggestOracle$Response.prototype = new Object_0;
_.getClass$ = function getClass_556(){
  return Lcom_google_gwt_user_client_ui_SuggestOracle$Response_2_classLit;
}
;
_.moreSuggestions = false;
_.numMoreSuggestions = 0;
_.suggestions = null;
_ = TabBar$ClickDelegatePanel.prototype;
_.addKeyDownHandler = function addKeyDownHandler_1(handler){
  return $addHandler_1(this, handler, getType_12());
}
;
_.addKeyPressHandler = function addKeyPressHandler_1(handler){
  return $addDomHandler(this, handler, getType_13());
}
;
_ = Tree.prototype;
_.addKeyDownHandler = function addKeyDownHandler_2(handler){
  return $addDomHandler(this, handler, getType_12());
}
;
_.addKeyPressHandler = function addKeyPressHandler_2(handler){
  return $addDomHandler(this, handler, getType_13());
}
;
function $compareTo_2(this$static, other){
  return this$static.value_0 == other.value_0?0:this$static.value_0?1:-1;
}

_ = Boolean_0.prototype;
_.compareTo$ = function compareTo_2(other){
  return $compareTo_2(this, dynamicCast(other, Q$Boolean));
}
;
function $compareTo_3(this$static, b){
  return this$static.value_0 < b.value_0?-1:this$static.value_0 > b.value_0?1:0;
}

_ = Byte.prototype;
_.compareTo$ = function compareTo_3(b){
  return $compareTo_3(this, dynamicCast(b, Q$Byte));
}
;
function $compareTo_4(this$static, c){
  return this$static.value_0 - c.value_0;
}

_ = Character.prototype;
_.compareTo$ = function compareTo_4(c){
  return $compareTo_4(this, dynamicCast(c, Q$Character));
}
;
function $compareTo_5(this$static, b){
  return compare(this$static.value_0, b.value_0);
}

function compare(x, y){
  if (isNaN_0(x)) {
    return isNaN_0(y)?0:1;
  }
   else if (isNaN_0(y)) {
    return -1;
  }
  return x < y?-1:x > y?1:0;
}

_ = Double.prototype;
_.compareTo$ = function compareTo_5(b){
  return $compareTo_5(this, dynamicCast(b, Q$Double));
}
;
function $compareTo_6(this$static, b){
  return this$static.value_0 < b.value_0?-1:this$static.value_0 > b.value_0?1:0;
}

_ = Float.prototype;
_.compareTo$ = function compareTo_6(b){
  return $compareTo_6(this, dynamicCast(b, Q$Float));
}
;
function $compareTo_7(this$static, b){
  return this$static.value_0 < b.value_0?-1:this$static.value_0 > b.value_0?1:0;
}

_ = Integer.prototype;
_.compareTo$ = function compareTo_7(b){
  return $compareTo_7(this, dynamicCast(b, Q$Integer));
}
;
function $compareTo_8(this$static, b){
  return lt(this$static.value_0, b.value_0)?-1:gt(this$static.value_0, b.value_0)?1:0;
}

function signum(i){
  return eq(i, P0_longLit)?0:lt(i, P0_longLit)?-1:1;
}

_ = Long.prototype;
_.compareTo$ = function compareTo_8(b){
  return $compareTo_8(this, dynamicCast(b, Q$Long));
}
;
function $compareTo_9(this$static, b){
  return this$static.value_0 < b.value_0?-1:this$static.value_0 > b.value_0?1:0;
}

_ = Short.prototype;
_.compareTo$ = function compareTo_9(b){
  return $compareTo_9(this, dynamicCast(b, Q$Short));
}
;
function $compareTo_10(this$static, other){
  return compareTo_11(this$static, other);
}

function $compareToIgnoreCase(this$static, other){
  return compareTo_11($toLowerCase(this$static), $toLowerCase(other));
}

function $matches(this$static, regex){
  var matchObj = (new RegExp(regex)).exec(this$static);
  return matchObj == null?false:this$static == matchObj[0];
}

function $replace_0(this$static, from, to){
  var regex;
  if (from < 256) {
    regex = toHexString(from);
    regex = '\\x' + '00'.substring(regex.length) + regex;
  }
   else {
    regex = String.fromCharCode(from);
  }
  return this$static.replace(RegExp(regex, 'g'), String.fromCharCode(to));
}

function compareTo_11(thisStr, otherStr){
  thisStr = String(thisStr);
  if (thisStr == otherStr) {
    return 0;
  }
  return thisStr < otherStr?-1:1;
}

_ = String.prototype;
_.compareTo$ = function compareTo_10(other){
  return $compareTo_10(this, dynamicCast(other, Q$String));
}
;
function $compare(a, b){
  return $compareToIgnoreCase(a, b);
}

_ = String$1.prototype;
_.compare = function compare_0(a, b){
  return $compare(dynamicCast(a, Q$String), dynamicCast(b, Q$String));
}
;
function insertionSort(array, low, high, comp){
  var i, j, t;
  for (i = low + 1; i < high; ++i) {
    for (j = i; j > low && comp.compare(array[j - 1], array[j]) > 0; --j) {
      t = array[j];
      setCheck(array, j, array[j - 1]);
      setCheck(array, j - 1, t);
    }
  }
}

function merge(src, srcLow, srcMid, srcHigh, dest, destLow, destHigh, comp){
  var topIdx;
  topIdx = srcMid;
  while (destLow < destHigh) {
    topIdx >= srcHigh || srcLow < srcMid && comp.compare(src[srcLow], src[topIdx]) <= 0?setCheck(dest, destLow++, src[srcLow++]):setCheck(dest, destLow++, src[topIdx++]);
  }
}

function mergeSort(x, fromIndex, toIndex, comp){
  var temp;
  temp = cloneSubrange(x, fromIndex, toIndex);
  mergeSort_0(temp, x, fromIndex, toIndex, -fromIndex, comp);
}

function mergeSort_0(temp, array, low, high, ofs, comp){
  var length_0, tempHigh, tempLow, tempMid;
  length_0 = high - low;
  if (length_0 < 7) {
    insertionSort(array, low, high, comp);
    return;
  }
  tempLow = low + ofs;
  tempHigh = high + ofs;
  tempMid = tempLow + (tempHigh - tempLow >> 1);
  mergeSort_0(array, temp, tempLow, tempMid, -ofs, comp);
  mergeSort_0(array, temp, tempMid, tempHigh, -ofs, comp);
  if (comp.compare(temp[tempMid - 1], temp[tempMid]) <= 0) {
    while (low < high) {
      setCheck(array, low++, temp[tempLow++]);
    }
    return;
  }
  merge(temp, tempLow, tempMid, tempHigh, array, low, high, comp);
}

function sort(array){
  mergeSort(array, 0, array.length, natural());
}

function replaceContents(target, x){
  var i, size;
  size = target.size_1();
  x.length == size || throwAssertionError();
  for (i = 0; i < size; ++i) {
    target.set(i, x[i]);
  }
}

function sort_0(target){
  $clinit_Collections();
  var x;
  x = target.toArray();
  sort(x);
  replaceContents(target, x);
}

function $compare_0(o1, o2){
  return o2.compareTo$(o1);
}

_ = Collections$1.prototype;
_.compare = function compare_1(o1, o2){
  return $compare_0(dynamicCast(o1, Q$Comparable), dynamicCast(o2, Q$Comparable));
}
;
_ = Collections$UnmodifiableList.prototype;
_.indexOf_0 = function indexOf_1(o){
  return this.list.indexOf_0(o);
}
;
_.set = function set_4(index, element){
  throw new UnsupportedOperationException_0;
}
;
function $clinit_Comparators(){
  $clinit_Comparators = nullMethod;
  NATURAL = new Comparators$1_0;
}

function natural(){
  $clinit_Comparators();
  return NATURAL;
}

var NATURAL;
function $$init_674(){
}

function Comparators$1_0(){
  Object_1.call(this);
  $$init_674();
}

function Comparators$1(){
}

_ = Comparators$1_0.prototype = Comparators$1.prototype = new Object_0;
_.compare = function compare_2(o1, o2){
  return dynamicCast(o1, Q$Comparable).compareTo$(o2);
}
;
_.getClass$ = function getClass_676(){
  return Ljava_util_Comparators$1_2_classLit;
}
;
function compare_3($this, other){
  return $compareTo_10($this.toString$(), other);
}

_ = StringOps.prototype;
_.compare_1 = function compare_4(that){
  return this.compare_0(dynamicCast(that, Q$String));
}
;
_.compare_0 = function compare_5(other){
  return compare_3(this, other);
}
;
_.compareTo$ = function compareTo_12(that){
  return compareTo_15(this, that);
}
;
_ = StringBuilder_2.prototype;
_.compare_1 = function compare_8(that){
  return this.compare_0(dynamicCast(that, Q$String));
}
;
_.compare_0 = function compare_9(other){
  return compare_3(this, other);
}
;
_.compareTo$ = function compareTo_14(that){
  return compareTo_15(this, that);
}
;
function compareTo_15($this, that){
  return $this.compare_1(that);
}

function compare_16($this, y){
  return $this.ord().compare($this.self_1(), y);
}

_ = ScalaNumberProxy.prototype;
_.compare_1 = function compare_17(y){
  return compare_16(this, y);
}
;
_.compareTo$ = function compareTo_16(that){
  return compareTo_15(this, that);
}
;
_.ord = function ord(){
  return this.ord$u0020;
}
;
var Lcom_google_gwt_user_client_ui_SuggestOracle_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestOracle', 'SuggestOracle', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_MultiWordSuggestOracle_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MultiWordSuggestOracle', 'MultiWordSuggestOracle', Lcom_google_gwt_user_client_ui_SuggestOracle_2_classLit), Lcom_google_gwt_user_client_ui_MultiWordSuggestOracle$MultiWordSuggestion_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MultiWordSuggestOracle$MultiWordSuggestion', 'MultiWordSuggestOracle$MultiWordSuggestion', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_MultiWordSuggestOracle$WordBounds_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MultiWordSuggestOracle$WordBounds', 'MultiWordSuggestOracle$WordBounds', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_SuggestOracle$Request_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestOracle$Request', 'SuggestOracle$Request', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_SuggestOracle$Response_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestOracle$Response', 'SuggestOracle$Response', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_SuggestBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestBox', 'SuggestBox', Lcom_google_gwt_user_client_ui_Composite_2_classLit), Lcom_google_gwt_user_client_ui_SuggestBox$SuggestionDisplay_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestBox$SuggestionDisplay', 'SuggestBox$SuggestionDisplay', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_SuggestBox$DefaultSuggestionDisplay_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestBox$DefaultSuggestionDisplay', 'SuggestBox$DefaultSuggestionDisplay', Lcom_google_gwt_user_client_ui_SuggestBox$SuggestionDisplay_2_classLit), Lcom_google_gwt_user_client_ui_SuggestBox$SuggestionMenu_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestBox$SuggestionMenu', 'SuggestBox$SuggestionMenu', Lcom_google_gwt_user_client_ui_MenuBar_2_classLit), Lcom_google_gwt_user_client_ui_SuggestBox$SuggestionMenuItem_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestBox$SuggestionMenuItem', 'SuggestBox$SuggestionMenuItem', Lcom_google_gwt_user_client_ui_MenuItem_2_classLit), Lcom_google_gwt_user_client_ui_SuggestBox$DefaultSuggestionDisplay$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestBox$DefaultSuggestionDisplay$1', 'SuggestBox$DefaultSuggestionDisplay$1', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_SuggestBox$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestBox$1', 'SuggestBox$1', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_SuggestBox$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestBox$2', 'SuggestBox$2', Ljava_lang_Object_2_classLit), Lcom_google_gwt_event_dom_client_HandlesAllKeyEvents_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'HandlesAllKeyEvents', 'HandlesAllKeyEvents', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_SuggestBox$1TextBoxEvents_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestBox$1TextBoxEvents', 'SuggestBox$1TextBoxEvents', Lcom_google_gwt_event_dom_client_HandlesAllKeyEvents_2_classLit), Lcom_google_gwt_sample_showcase_client_content_lists_CwSuggestBox$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.lists.', 'CwSuggestBox$$anonfun$onInitialize$1', 'CwSuggestBox$$anonfun$onInitialize$1', Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_user_client_ui_PrefixTree_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PrefixTree', 'PrefixTree', Ljava_util_AbstractCollection_2_classLit), Lcom_google_gwt_user_client_ui_PrefixTree$PrefixTreeIterator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PrefixTree$PrefixTreeIterator', 'PrefixTree$PrefixTreeIterator', Ljava_lang_Object_2_classLit), Lcom_google_gwt_event_dom_client_KeyPressEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyPressEvent', 'KeyPressEvent', Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit), Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2_classLit = createForClass('com.google.gwt.safehtml.shared.', 'SafeHtmlBuilder', 'SafeHtmlBuilder', Ljava_lang_Object_2_classLit), Ljava_util_Comparators$1_2_classLit = createForClass('java.util.', 'Comparators$1', 'Comparators$1', Ljava_lang_Object_2_classLit);
$entry(onLoad)(8);
