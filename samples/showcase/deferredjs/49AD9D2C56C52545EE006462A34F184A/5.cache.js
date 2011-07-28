function $getMilliseconds(this$static){
  return this$static.getMilliseconds();
}

function $setDate(this$static, dayOfMonth){
  return this$static.setDate(dayOfMonth);
}

function $setFullYear(this$static, year){
  return this$static.setFullYear(year);
}

function $setFullYear_0(this$static, year, month, day){
  return this$static.setFullYear(year, month, day);
}

function $setHours(this$static, hours){
  return this$static.setHours(hours);
}

function $setHours_0(this$static, hours, mins, secs, ms){
  return this$static.setHours(hours, mins, secs, ms);
}

function $setMinutes(this$static, minutes){
  return this$static.setMinutes(minutes);
}

function $setMonth(this$static, month){
  return this$static.setMonth(month);
}

function $setSeconds(this$static, seconds){
  return this$static.setSeconds(seconds);
}

function $setTime(this$static, milliseconds){
  return this$static.setTime(milliseconds);
}

function create_1(year, month, dayOfMonth, hours, minutes, seconds, millis){
  return new Date(year, month, dayOfMonth, hours, minutes, seconds, millis);
}

function $clinit_FocusEvent(){
  $clinit_FocusEvent = nullMethod;
  TYPE_2 = new DomEvent$Type_0('focus', new FocusEvent_0);
}

function $$init_74(){
}

function $dispatch_2(this$static, handler){
  handler.onFocus(this$static);
}

function FocusEvent_0(){
  DomEvent_0.call(this);
  $$init_74();
}

function getType_11(){
  $clinit_FocusEvent();
  return TYPE_2;
}

function FocusEvent(){
}

_ = FocusEvent_0.prototype = FocusEvent.prototype = new DomEvent;
_.dispatch_0 = function dispatch_3(handler){
  $dispatch_2(this, dynamicCast(handler, Q$FocusHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_4(){
  return TYPE_2;
}
;
_.getClass$ = function getClass_75(){
  return Lcom_google_gwt_event_dom_client_FocusEvent_2_classLit;
}
;
var TYPE_2;
function $$init_96(){
}

function $dispatch_18(this$static, handler){
  null.nullMethod();
}

function HighlightEvent_0(highlighted){
  GwtEvent_0.call(this);
  $$init_96();
  this , highlighted;
}

function HighlightEvent(){
}

_ = HighlightEvent.prototype = new GwtEvent;
_.dispatch_0 = function dispatch_19(handler){
  $dispatch_18(this, dynamicCast(handler, Q$HighlightHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_20(){
  return TYPE_18;
}
;
_.getClass$ = function getClass_97(){
  return Lcom_google_gwt_event_logical_shared_HighlightEvent_2_classLit;
}
;
var TYPE_18 = null;
function $$init_101(){
}

function $dispatch_23(this$static, handler){
  null.nullMethod();
}

function ShowRangeEvent_0(start, end){
  GwtEvent_0.call(this);
  $$init_101();
  this , start;
  this , end;
}

function fire_8(source, start, end){
  var event_0;
  if (isNotNull(TYPE_23)) {
    event_0 = new ShowRangeEvent_0(start, end);
    source.fireEvent_0(event_0);
  }
}

function ShowRangeEvent(){
}

_ = ShowRangeEvent_0.prototype = ShowRangeEvent.prototype = new GwtEvent;
_.dispatch_0 = function dispatch_24(handler){
  $dispatch_23(this, dynamicCast(handler, Q$ShowRangeHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_25(){
  return TYPE_23;
}
;
_.getClass$ = function getClass_102(){
  return Lcom_google_gwt_event_logical_shared_ShowRangeEvent_2_classLit;
}
;
var TYPE_23 = null;
function $matchString(text, start, data, pos){
  var bestMatch, bestMatchLength, count, i, length_0, textInLowerCase;
  count = data.length;
  bestMatchLength = 0;
  bestMatch = -1;
  textInLowerCase = $toLowerCase($substring(text, start));
  for (i = 0; i < count; ++i) {
    length_0 = $length_1(data[i]);
    if (length_0 > bestMatchLength && $startsWith(textInLowerCase, $toLowerCase(data[i]))) {
      bestMatch = i;
      bestMatchLength = length_0;
    }
  }
  bestMatch >= 0 && (pos[0] = start + bestMatchLength);
  return bestMatch;
}

function $parse(this$static, text){
  return $parse_1(this$static, text, false);
}

function $parse_0(this$static, text, start, date, strict){
  var abutPass, abutPat, abutStart, cal, count, i, parsePos, part, s;
  cal = new DateRecord_0;
  parsePos = initValues(_3I_classLit, makeCastMap([Q$int_$1, Q$Serializable]), -1, [start]);
  abutPat = -1;
  abutStart = 0;
  abutPass = 0;
  for (i = 0; i < $size_1(this$static.patternParts); ++i) {
    part = dynamicCast($get_6(this$static.patternParts, i), Q$DateTimeFormat$PatternPart);
    if (part.count > 0) {
      if (abutPat < 0 && part.abutStart) {
        abutPat = i;
        abutStart = start;
        abutPass = 0;
      }
      if (abutPat >= 0) {
        count = part.count;
        if (i == abutPat) {
          count -= abutPass++;
          if (count == 0) {
            return 0;
          }
        }
        if (!$subParse(this$static, text, parsePos, part, count, cal)) {
          i = abutPat - 1;
          parsePos[0] = abutStart;
          continue;
        }
      }
       else {
        abutPat = -1;
        if (!$subParse(this$static, text, parsePos, part, 0, cal)) {
          return 0;
        }
      }
    }
     else {
      abutPat = -1;
      if ($charAt(part.text_0, 0) == 32) {
        s = parsePos[0];
        $skipSpace(text, parsePos);
        if (parsePos[0] > s) {
          continue;
        }
      }
       else if ($startsWith_0(text, part.text_0, parsePos[0])) {
        parsePos[0] += $length_1(part.text_0);
        continue;
      }
      return 0;
    }
  }
  if (!$calcDate(cal, date, strict)) {
    return 0;
  }
  return parsePos[0] - start;
}

function $parse_1(this$static, text, strict){
  var charsConsumed, curDate, date;
  curDate = new Date_1;
  date = new Date_2($getYear(curDate), $getMonth_0(curDate), $getDate_0(curDate));
  charsConsumed = $parse_0(this$static, text, 0, date, strict);
  if (charsConsumed == 0 || charsConsumed < $length_1(text)) {
    throw new IllegalArgumentException_1(text);
  }
  return date;
}

function $parseInt(text, pos){
  var ch, ind, ret;
  ret = 0;
  ind = pos[0];
  if (ind >= $length_1(text)) {
    return -1;
  }
  ch = $charAt(text, ind);
  while (ch >= 48 && ch <= 57) {
    ret = ret * 10 + (ch - 48);
    ++ind;
    if (ind >= $length_1(text)) {
      break;
    }
    ch = $charAt(text, ind);
  }
  ind > pos[0]?(pos[0] = ind):(ret = -1);
  return ret;
}

function $parseTimeZoneOffset(this$static, text, pos, cal){
  var offset, sign, st, value;
  if (pos[0] >= $length_1(text)) {
    $setTzOffset(cal, 0);
    return true;
  }
  switch ($charAt(text, pos[0])) {
    case 43:
      sign = 1;
      break;
    case 45:
      sign = -1;
      break;
    default:$setTzOffset(cal, 0);
      return true;
  }
  ++pos[0];
  st = pos[0];
  value = $parseInt(text, pos);
  if (value == 0 && pos[0] == st) {
    return false;
  }
  if (pos[0] < $length_1(text) && $charAt(text, pos[0]) == 58) {
    offset = value * 60;
    ++pos[0];
    st = pos[0];
    value = $parseInt(text, pos);
    if (value == 0 && pos[0] == st) {
      return false;
    }
    offset += value;
  }
   else {
    offset = value;
    offset < 24 && pos[0] - st <= 2?(offset *= 60):(offset = offset % 100 + narrow_int(offset / 100) * 60);
  }
  offset *= sign;
  $setTzOffset(cal, -offset);
  return true;
}

function $skipSpace(text, pos){
  while (pos[0] < $length_1(text) && $indexOf_2(' \t\r\n', $charAt(text, pos[0])) >= 0) {
    ++pos[0];
  }
}

function $subParse(this$static, text, pos, part, digitCount, cal){
  var ch, start, value;
  $skipSpace(text, pos);
  start = pos[0];
  ch = $charAt(part.text_0, 0);
  value = -1;
  if ($isNumeric(part)) {
    if (digitCount > 0) {
      if (start + digitCount > $length_1(text)) {
        return false;
      }
      value = $parseInt($substring_0(text, 0, start + digitCount), pos);
    }
     else {
      value = $parseInt(text, pos);
    }
  }
  switch (ch) {
    case 71:
      value = $matchString(text, start, this$static.dateTimeFormatInfo.erasFull(), pos);
      $setEra(cal, value);
      return true;
    case 77:
      return $subParseMonth(this$static, text, pos, cal, value, start);
    case 76:
      return $subParseStandaloneMonth(this$static, text, pos, cal, value, start);
    case 69:
      return $subParseDayOfWeek(this$static, text, pos, start, cal);
    case 99:
      return $subParseStandaloneDay(this$static, text, pos, start, cal);
    case 97:
      value = $matchString(text, start, this$static.dateTimeFormatInfo.ampms(), pos);
      $setAmpm(cal, value);
      return true;
    case 121:
      return $subParseYear(this$static, text, pos, start, value, part, cal);
    case 100:
      if (value <= 0) {
        return false;
      }

      $setDayOfMonth(cal, value);
      return true;
    case 83:
      if (value < 0) {
        return false;
      }

      return $subParseFractionalSeconds(value, start, pos[0], cal);
    case 104:
      value == 12 && (value = 0);
    case 75:
    case 72:
      if (value < 0) {
        return false;
      }

      $setHours_1(cal, value);
      return true;
    case 107:
      if (value < 0) {
        return false;
      }

      $setHours_1(cal, value);
      return true;
    case 109:
      if (value < 0) {
        return false;
      }

      $setMinutes_0(cal, value);
      return true;
    case 115:
      if (value < 0) {
        return false;
      }

      $setSeconds_0(cal, value);
      return true;
    case 122:
    case 90:
    case 118:
      return $subParseTimeZoneInGMT(this$static, text, start, pos, cal);
    default:return false;
  }
}

function $subParseDayOfWeek(this$static, text, pos, start, cal){
  var value;
  value = $matchString(text, start, this$static.dateTimeFormatInfo.weekdaysFull(), pos);
  value < 0 && (value = $matchString(text, start, this$static.dateTimeFormatInfo.weekdaysShort(), pos));
  if (value < 0) {
    return false;
  }
  $setDayOfWeek(cal, value);
  return true;
}

function $subParseFractionalSeconds(value, start, end, cal){
  var a, i;
  i = end - start;
  if (i < 3) {
    while (i < 3) {
      value *= 10;
      ++i;
    }
  }
   else {
    a = 1;
    while (i > 3) {
      a *= 10;
      --i;
    }
    value = narrow_int((value + (a >> 1)) / a);
  }
  $setMilliseconds(cal, value);
  return true;
}

function $subParseMonth(this$static, text, pos, cal, value, start){
  if (value < 0) {
    value = $matchString(text, start, this$static.dateTimeFormatInfo.monthsFull(), pos);
    value < 0 && (value = $matchString(text, start, this$static.dateTimeFormatInfo.monthsShort(), pos));
    if (value < 0) {
      return false;
    }
    $setMonth_0(cal, value);
    return true;
  }
   else if (value > 0) {
    $setMonth_0(cal, value - 1);
    return true;
  }
  return false;
}

function $subParseStandaloneDay(this$static, text, pos, start, cal){
  var value;
  value = $matchString(text, start, this$static.dateTimeFormatInfo.weekdaysFullStandalone(), pos);
  value < 0 && (value = $matchString(text, start, this$static.dateTimeFormatInfo.weekdaysShortStandalone(), pos));
  if (value < 0) {
    return false;
  }
  $setDayOfWeek(cal, value);
  return true;
}

function $subParseStandaloneMonth(this$static, text, pos, cal, value, start){
  if (value < 0) {
    value = $matchString(text, start, this$static.dateTimeFormatInfo.monthsFullStandalone(), pos);
    value < 0 && (value = $matchString(text, start, this$static.dateTimeFormatInfo.monthsShortStandalone(), pos));
    if (value < 0) {
      return false;
    }
    $setMonth_0(cal, value);
    return true;
  }
   else if (value > 0) {
    $setMonth_0(cal, value - 1);
    return true;
  }
  return false;
}

function $subParseTimeZoneInGMT(this$static, text, start, pos, cal){
  if ($startsWith_0(text, 'GMT', start)) {
    pos[0] = start + 3;
    return $parseTimeZoneOffset(this$static, text, pos, cal);
  }
  if ($startsWith_0(text, 'UTC', start)) {
    pos[0] = start + 3;
    return $parseTimeZoneOffset(this$static, text, pos, cal);
  }
  return $parseTimeZoneOffset(this$static, text, pos, cal);
}

function $subParseYear(this$static, text, pos, start, value, part, cal){
  var ambiguousTwoDigitYear, ch, date, defaultCenturyStartYear;
  ch = 32;
  if (value < 0) {
    if (pos[0] >= $length_1(text)) {
      return false;
    }
    ch = $charAt(text, pos[0]);
    if (ch != 43 && ch != 45) {
      return false;
    }
    ++pos[0];
    value = $parseInt(text, pos);
    if (value < 0) {
      return false;
    }
    ch == 45 && (value = -value);
  }
  if (ch == 32 && pos[0] - start == 2 && part.count == 2) {
    date = new Date_1;
    defaultCenturyStartYear = $getYear(date) + 1900 - 80;
    ambiguousTwoDigitYear = defaultCenturyStartYear % 100;
    $setAmbiguousYear(cal, value == ambiguousTwoDigitYear);
    value += narrow_int(defaultCenturyStartYear / 100) * 100 + (value < ambiguousTwoDigitYear?100:0);
  }
  $setYear(cal, value);
  return true;
}

_ = DefaultDateTimeFormatInfo_0.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek(){
  return 1;
}
;
_.weekendEnd = function weekendEnd(){
  return 0;
}
;
_.weekendStart = function weekendStart(){
  return 6;
}
;
_ = DateTimeFormatInfoImpl_en.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_0(){
  return 0;
}
;
_ = DateTimeFormatInfoImpl_en_AS_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_1(){
  $ensureInstance_0(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_0(){
  $ensureInstance_0(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_0(){
  $ensureInstance_0(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_AU.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_2(){
  return 1;
}
;
_ = DateTimeFormatInfoImpl_en_AU_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_3(){
  $ensureInstance_1(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_1(){
  $ensureInstance_1(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_1(){
  $ensureInstance_1(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_BE.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_4(){
  return 1;
}
;
_ = DateTimeFormatInfoImpl_en_BE_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_5(){
  $ensureInstance_2(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_2(){
  $ensureInstance_2(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_2(){
  $ensureInstance_2(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_BW_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_6(){
  $ensureInstance_3(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_3(){
  $ensureInstance_3(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_3(){
  $ensureInstance_3(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_BZ.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_7(){
  return 1;
}
;
_ = DateTimeFormatInfoImpl_en_BZ_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_8(){
  $ensureInstance_4(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_4(){
  $ensureInstance_4(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_4(){
  $ensureInstance_4(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_CA_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_9(){
  $ensureInstance_5(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_5(){
  $ensureInstance_5(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_5(){
  $ensureInstance_5(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_GB.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_10(){
  return 1;
}
;
_ = DateTimeFormatInfoImpl_en_GB_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_11(){
  $ensureInstance_6(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_6(){
  $ensureInstance_6(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_6(){
  $ensureInstance_6(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_GU_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_12(){
  $ensureInstance_7(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_7(){
  $ensureInstance_7(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_7(){
  $ensureInstance_7(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_HK_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_13(){
  $ensureInstance_8(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_8(){
  $ensureInstance_8(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_8(){
  $ensureInstance_8(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_IE_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_14(){
  $ensureInstance_9(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_9(){
  $ensureInstance_9(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_9(){
  $ensureInstance_9(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_IN.prototype;
_.weekendStart = function weekendStart_10(){
  return 0;
}
;
_ = DateTimeFormatInfoImpl_en_IN_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_15(){
  $ensureInstance_10(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_10(){
  $ensureInstance_10(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_11(){
  $ensureInstance_10(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_JM_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_16(){
  $ensureInstance_11(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_11(){
  $ensureInstance_11(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_12(){
  $ensureInstance_11(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_MH_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_17(){
  $ensureInstance_12(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_12(){
  $ensureInstance_12(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_13(){
  $ensureInstance_12(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_MP_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_18(){
  $ensureInstance_13(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_13(){
  $ensureInstance_13(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_14(){
  $ensureInstance_13(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_MT_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_19(){
  $ensureInstance_14(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_14(){
  $ensureInstance_14(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_15(){
  $ensureInstance_14(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_NA.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_20(){
  return 1;
}
;
_ = DateTimeFormatInfoImpl_en_NA_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_21(){
  $ensureInstance_15(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_15(){
  $ensureInstance_15(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_16(){
  $ensureInstance_15(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_NZ_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_22(){
  $ensureInstance_16(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_16(){
  $ensureInstance_16(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_17(){
  $ensureInstance_16(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_PH_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_23(){
  $ensureInstance_17(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_17(){
  $ensureInstance_17(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_18(){
  $ensureInstance_17(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_PK_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_24(){
  $ensureInstance_18(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_18(){
  $ensureInstance_18(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_19(){
  $ensureInstance_18(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_SG_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_25(){
  $ensureInstance_19(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_19(){
  $ensureInstance_19(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_20(){
  $ensureInstance_19(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_TT_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_26(){
  $ensureInstance_20(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_20(){
  $ensureInstance_20(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_21(){
  $ensureInstance_20(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_UM_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_27(){
  $ensureInstance_21(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_21(){
  $ensureInstance_21(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_22(){
  $ensureInstance_21(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_US_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_28(){
  $ensureInstance_22(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_22(){
  $ensureInstance_22(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_23(){
  $ensureInstance_22(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_VI_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_29(){
  $ensureInstance_23(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_23(){
  $ensureInstance_23(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_24(){
  $ensureInstance_23(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_ZA.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_30(){
  return 1;
}
;
_ = DateTimeFormatInfoImpl_en_ZA_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_31(){
  $ensureInstance_24(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_24(){
  $ensureInstance_24(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_25(){
  $ensureInstance_24(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_ZW_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_32(){
  $ensureInstance_25(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_25(){
  $ensureInstance_25(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_26(){
  $ensureInstance_25(this);
  return this.instance.weekendStart();
}
;
_ = DateTimeFormatInfoImpl_en_runtimeSelection.prototype;
_.firstDayOfTheWeek = function firstDayOfTheWeek_33(){
  $ensureInstance_26(this);
  return this.instance.firstDayOfTheWeek();
}
;
_.weekendEnd = function weekendEnd_26(){
  $ensureInstance_26(this);
  return this.instance.weekendEnd();
}
;
_.weekendStart = function weekendStart_27(){
  $ensureInstance_26(this);
  return this.instance.weekendStart();
}
;
function $after(this$static, when){
  return gt($getTime_0(this$static), $getTime_0(when));
}

function $before(this$static, when){
  return lt($getTime_0(this$static), $getTime_0(when));
}

function $fixDaylightSavings(this$static, hours){
  var badHours, copy, day, newTime, timeDiff, timeDiffHours, timeDiffMinutes;
  if ($getHours(this$static.jsdate) % 24 != hours % 24) {
    copy = create_0($getTime(this$static.jsdate));
    $setDate(copy, $getDate(copy) + 1);
    timeDiff = $getTimezoneOffset(this$static.jsdate) - $getTimezoneOffset(copy);
    if (timeDiff > 0) {
      timeDiffHours = narrow_int(timeDiff / 60);
      timeDiffMinutes = timeDiff % 60;
      day = $getDate(this$static.jsdate);
      badHours = $getHours(this$static.jsdate);
      badHours + timeDiffHours >= 24 && ++day;
      newTime = create_1($getFullYear(this$static.jsdate), $getMonth(this$static.jsdate), day, hours + timeDiffHours, $getMinutes(this$static.jsdate) + timeDiffMinutes, $getSeconds(this$static.jsdate), $getMilliseconds(this$static.jsdate));
      $setTime(this$static.jsdate, $getTime(newTime));
    }
  }
}

function $setDate_0(this$static, date){
  var hours;
  hours = $getHours(this$static.jsdate);
  $setDate(this$static.jsdate, date);
  $fixDaylightSavings(this$static, hours);
}

function $setTime_0(this$static, time){
  $setTime(this$static.jsdate, toDouble(time));
}

function Date_2(year, month, date){
  Date_3.call(this, year, month, date, 0, 0, 0);
}

function Date_3(year, month, date, hrs, min, sec){
  Object_1.call(this);
  $$init_246();
  this.jsdate = create();
  $setFullYear_0(this.jsdate, year + 1900, month, date);
  $setHours_0(this.jsdate, hrs, min, sec, 0);
  $fixDaylightSavings(this, hrs);
}

_ = Date_2.prototype = Date_0.prototype;
_.setHours_0 = function setHours(hours){
  $setHours(this.jsdate, hours);
  $fixDaylightSavings(this, hours);
}
;
_.setMinutes_0 = function setMinutes(minutes){
  var hours;
  hours = $getHours_0(this) + narrow_int(minutes / 60);
  $setMinutes(this.jsdate, minutes);
  $fixDaylightSavings(this, hours);
}
;
_.setMonth_0 = function setMonth(month){
  var hours;
  hours = $getHours(this.jsdate);
  $setMonth(this.jsdate, month);
  $fixDaylightSavings(this, hours);
}
;
_.setSeconds_0 = function setSeconds(seconds){
  var hours;
  hours = $getHours_0(this) + narrow_int(seconds / 3600);
  $setSeconds(this.jsdate, seconds);
  $fixDaylightSavings(this, hours);
}
;
_.setYear = function setYear(year){
  var hours;
  hours = $getHours(this.jsdate);
  $setFullYear(this.jsdate, year + 1900);
  $fixDaylightSavings(this, hours);
}
;
function $$init_247(){
}

function $calcDate(this$static, date, strict){
  var adjustment, daysInCurrentMonth, defaultCenturyStart, offset, orgDayOfMonth, orgMonth, tmp;
  this$static.era == 0 && this$static.year > 0 && (this$static.year = -(this$static.year - 1));
  this$static.year > -2147483648 && date.setYear(this$static.year - 1900);
  orgDayOfMonth = $getDate_0(date);
  $setDate_0(date, 1);
  this$static.month >= 0 && date.setMonth_0(this$static.month);
  if (this$static.dayOfMonth >= 0) {
    $setDate_0(date, this$static.dayOfMonth);
  }
   else if (this$static.month >= 0) {
    tmp = new Date_2($getYear(date), $getMonth_0(date), 35);
    daysInCurrentMonth = 35 - $getDate_0(tmp);
    $setDate_0(date, min_1(daysInCurrentMonth, orgDayOfMonth));
  }
   else {
    $setDate_0(date, orgDayOfMonth);
  }
  this$static.hours < 0 && (this$static.hours = $getHours_0(date));
  this$static.ampm > 0 && (this$static.hours < 12 && (this$static.hours += 12));
  date.setHours_0(this$static.hours);
  this$static.minutes >= 0 && date.setMinutes_0(this$static.minutes);
  this$static.seconds >= 0 && date.setSeconds_0(this$static.seconds);
  this$static.milliseconds >= 0 && $setTime_0(date, add_1(mul(div_0($getTime_0(date), P3e8_longLit), P3e8_longLit), fromInt(this$static.milliseconds)));
  if (strict) {
    if (this$static.year > -2147483648 && this$static.year - 1900 != $getYear(date)) {
      return false;
    }
    if (this$static.month >= 0 && this$static.month != $getMonth_0(date)) {
      return false;
    }
    if (this$static.dayOfMonth >= 0 && this$static.dayOfMonth != $getDate_0(date)) {
      return false;
    }
    if (this$static.hours >= 24) {
      return false;
    }
    if (this$static.minutes >= 60) {
      return false;
    }
    if (this$static.seconds >= 60) {
      return false;
    }
    if (this$static.milliseconds >= 1000) {
      return false;
    }
  }
  if (this$static.ambiguousYear) {
    defaultCenturyStart = new Date_1;
    defaultCenturyStart.setYear($getYear(defaultCenturyStart) - 80);
    $before(date, defaultCenturyStart) && date.setYear($getYear(defaultCenturyStart) + 100);
  }
  if (this$static.dayOfWeek >= 0) {
    if (this$static.dayOfMonth == -1) {
      adjustment = (7 + this$static.dayOfWeek - $getDay_0(date)) % 7;
      adjustment > 3 && (adjustment -= 7);
      orgMonth = $getMonth_0(date);
      $setDate_0(date, $getDate_0(date) + adjustment);
      $getMonth_0(date) != orgMonth && $setDate_0(date, $getDate_0(date) + (adjustment > 0?-7:7));
    }
     else {
      if ($getDay_0(date) != this$static.dayOfWeek) {
        return false;
      }
    }
  }
  if (this$static.tzOffset > -2147483648) {
    offset = $getTimezoneOffset_0(date);
    $setTime_0(date, add_1($getTime_0(date), fromInt((this$static.tzOffset - offset) * 60 * 1000)));
  }
  return true;
}

function $setAmbiguousYear(this$static, ambiguousYear){
  this$static.ambiguousYear = ambiguousYear;
}

function $setAmpm(this$static, ampm){
  this$static.ampm = ampm;
}

function $setDayOfMonth(this$static, day){
  this$static.dayOfMonth = day;
}

function $setDayOfWeek(this$static, dayOfWeek){
  this$static.dayOfWeek = dayOfWeek;
}

function $setEra(this$static, era){
  this$static.era = era;
}

function $setHours_1(this$static, hours){
  this$static.hours = hours;
}

function $setMilliseconds(this$static, milliseconds){
  this$static.milliseconds = milliseconds;
}

function $setMinutes_0(this$static, minutes){
  this$static.minutes = minutes;
}

function $setMonth_0(this$static, month){
  this$static.month = month;
}

function $setSeconds_0(this$static, seconds){
  this$static.seconds = seconds;
}

function $setTzOffset(this$static, tzOffset){
  this$static.tzOffset = tzOffset;
}

function $setYear(this$static, value){
  this$static.year = value;
}

function DateRecord_0(){
  Date_1.call(this);
  $$init_247();
  this.era = -1;
  this.ambiguousYear = false;
  this.year = -2147483648;
  this.month = -1;
  this.dayOfMonth = -1;
  this.ampm = -1;
  this.hours = -1;
  this.minutes = -1;
  this.seconds = -1;
  this.milliseconds = -1;
  this.dayOfWeek = -1;
  this.tzOffset = -2147483648;
}

function DateRecord(){
}

_ = DateRecord_0.prototype = DateRecord.prototype = new Date_0;
_.getClass$ = function getClass_248(){
  return Lcom_google_gwt_i18n_shared_impl_DateRecord_2_classLit;
}
;
_.setHours_0 = function setHours_0(hours){
  $setHours_1(this, hours);
}
;
_.setMinutes_0 = function setMinutes_0(minutes){
  $setMinutes_0(this, minutes);
}
;
_.setMonth_0 = function setMonth_0(month){
  $setMonth_0(this, month);
}
;
_.setSeconds_0 = function setSeconds_0(seconds){
  $setSeconds_0(this, seconds);
}
;
_.setYear = function setYear_0(value){
  $setYear(this, value);
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Comparable, Q$Date]);
_.ambiguousYear = false;
_.ampm = 0;
_.dayOfMonth = 0;
_.dayOfWeek = 0;
_.era = 0;
_.hours = 0;
_.milliseconds = 0;
_.minutes = 0;
_.month = 0;
_.seconds = 0;
_.tzOffset = 0;
_.year = 0;
_ = Handlers$.prototype;
_.enrichHasValueChangeHandlers = function enrichHasValueChangeHandlers(o){
  return enrichHasValueChangeHandlers_0(this, o);
}
;
function $addBlurHandler(this$static, handler){
  return $addDomHandler(this$static, handler, getType_8());
}

function $addFocusHandler(this$static, handler){
  return $addDomHandler(this$static, handler, getType_11());
}

_ = ToggleButton.prototype;
_.addValueChangeHandler = function addValueChangeHandler(handler){
  return $addHandler_1(this, handler, getType_30());
}
;
_ = ShowcaseConstants_.prototype;
_.cwDatePickerBoxLabel = function cwDatePickerBoxLabel(){
  return '<br><br><br><b>DateBox with popup DatePicker:<\/b>';
}
;
_.cwDatePickerLabel = function cwDatePickerLabel(){
  return '<b>Permanent DatePicker:<\/b>';
}
;
function $$init_319(){
}

function $com$google$gwt$sample$showcase$client$ValueChangeHandlers$RichHasValueChangeHandlers$$$outer(this$static){
  return this$static.$outer$u0020;
}

function $onValueChange(this$static, fn){
  return this$static.o.addValueChangeHandler($com$google$gwt$sample$showcase$client$ValueChangeHandlers$RichHasValueChangeHandlers$$$outer(this$static).fn2valueChangeHandler(fn));
}

function ValueChangeHandlers$RichHasValueChangeHandlers_0($outer, o){
  $$init_319();
  this.o = o;
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
}

function ValueChangeHandlers$RichHasValueChangeHandlers(){
}

_ = ValueChangeHandlers$RichHasValueChangeHandlers_0.prototype = ValueChangeHandlers$RichHasValueChangeHandlers.prototype = new Object_0;
_.getClass$ = function getClass_320(){
  return Lcom_google_gwt_sample_showcase_client_ValueChangeHandlers$RichHasValueChangeHandlers_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$ScalaObject]);
_.$outer$u0020 = null;
_.o = null;
function enrichHasValueChangeHandlers_0($this, o){
  return new ValueChangeHandlers$RichHasValueChangeHandlers_0($this, o);
}

function $onInitialize_32(this$static){
  var dateBox, dateFormat, datePicker, text$1, vPanel;
  datePicker = new DatePicker_0;
  text$1 = new Label_0;
  $onValueChange(($clinit_Handlers$() , MODULE$_2).enrichHasValueChangeHandlers(datePicker), new CwDatePicker$$anonfun$onInitialize$1_0(text$1));
  $setValue_6(datePicker, new Date_1, true);
  dateFormat = getLongDateFormat();
  dateBox = new DateBox_0;
  $setFormat(dateBox, new DateBox$DefaultFormat_1(dateFormat));
  vPanel = new VerticalPanel_0;
  $add_16(vPanel, new HTML_1(this$static.constants.cwDatePickerLabel()));
  $add_16(vPanel, text$1);
  $add_16(vPanel, datePicker);
  $add_16(vPanel, new HTML_1(this$static.constants.cwDatePickerBoxLabel()));
  $add_16(vPanel, dateBox);
  return vPanel;
}

_ = CwDatePicker$$anon$1.prototype;
_.onSuccess = function onSuccess_32(){
  this.callback$1.onSuccess_0($onInitialize_32(this.$outer$u0020));
}
;
function $$init_467(){
}

function $apply_67(this$static, event_0){
  var date, dateString;
  date = dynamicCast(event_0.getValue(), Q$Date);
  dateString = $format(getMediumDateFormat(), date);
  $setText_4(this$static.text$1, dateString);
}

function CwDatePicker$$anonfun$onInitialize$1_0(text$1){
  $$init_467();
  this.text$1 = text$1;
  AbstractFunction1_0.call(this);
}

function CwDatePicker$$anonfun$onInitialize$1(){
}

_ = CwDatePicker$$anonfun$onInitialize$1_0.prototype = CwDatePicker$$anonfun$onInitialize$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_68(v1){
  $apply_67(this, dynamicCast(v1, Q$ValueChangeEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_468(){
  return Lcom_google_gwt_sample_showcase_client_content_widgets_CwDatePicker$$anonfun$onInitialize$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.text$1 = null;
function eventGetFromElement(evt){
  $clinit_DOM();
  return impl_4.eventGetFromElement(evt);
}

_ = DOMImplTrident_1.prototype;
_.eventGetFromElement = function eventGetFromElement_0(evt){
  return evt.relatedTarget || evt.fromElement;
}
;
_ = HistoryImpl.prototype;
_.addValueChangeHandler = function addValueChangeHandler_1(handler){
  return $addValueChangeHandler(this, handler);
}
;
_ = CheckBox.prototype;
_.addValueChangeHandler = function addValueChangeHandler_2(handler){
  if (!this.valueChangeHandlerInitialized) {
    this.ensureDomEventHandlers();
    this.valueChangeHandlerInitialized = true;
  }
  return $addHandler_1(this, handler, getType_30());
}
;
_.ensureDomEventHandlers = function ensureDomEventHandlers(){
  $addClickHandler(this, new CheckBox$1_0(this));
}
;
function $$init_532(){
}

function CheckBox$1_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_532();
}

function CheckBox$1(){
}

_ = CheckBox$1_0.prototype = CheckBox$1.prototype = new Object_0;
_.getClass$ = function getClass_533(){
  return Lcom_google_gwt_user_client_ui_CheckBox$1_2_classLit;
}
;
_.onClick = function onClick_7(event_0){
  fire_9(this.this$0, $getValue_3(this.this$0));
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function $getEventTargetCell(this$static, event_0){
  var body, td, tr;
  td = eventGetTarget_0(event_0);
  for (; isNotNull(td); td = getParent(td)) {
    if ($equalsIgnoreCase(getElementProperty(td, 'tagName'), 'td')) {
      tr = getParent(td);
      body = getParent(tr);
      if (jsEquals(body, this$static.bodyElem)) {
        return td;
      }
    }
    if (jsEquals(td, this$static.bodyElem)) {
      return null;
    }
  }
  return null;
}

function $setText_6(this$static, row, column, text){
  var td;
  this$static.prepareCell(row, column);
  td = $cleanCell(this$static, row, column, jsEquals(text, null));
  jsNotEquals(text, null) && setInnerText_1(td, text);
}

function $getElement_0(this$static, row, column){
  $checkCellBounds(this$static.this$0, row, column);
  return $getCellElement_1(this$static.this$0.bodyElem, row, column);
}

_ = ValueBoxBase.prototype;
_.addValueChangeHandler = function addValueChangeHandler_3(handler){
  return $addValueChangeHandler_0(this, handler);
}
;
function PushButton_0(){
  $clinit_FocusWidget();
  CustomButton_0.call(this);
  $$init_623(this);
}

_ = PushButton_0.prototype = PushButton.prototype;
_ = RadioButton.prototype;
_.ensureDomEventHandlers = function ensureDomEventHandlers_0(){
}
;
function $clinit_CalendarModel(){
  $clinit_CalendarModel = nullMethod;
  6;
  7;
  dayOfWeekNames = initDim(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, 7, 0);
  dayOfMonthNames = initDim(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, 32, 0);
}

function $$init_690(){
}

function $formatCurrentMonth(this$static){
  return $format($getMonthAndYearFormatter(), this$static.currentMonth);
}

function $formatDayOfMonth(date){
  return dayOfMonthNames[$getDate_0(date)];
}

function $formatDayOfWeek_0(dayInWeek){
  return dayOfWeekNames[dayInWeek];
}

function $getCurrentFirstDayOfFirstWeek(this$static){
  var d, offset, start, wkDayOfMonth1st;
  wkDayOfMonth1st = $getDay_0(this$static.currentMonth);
  start = getStartingDayOfWeek();
  if (wkDayOfMonth1st == start) {
    return new Date_4($getTime_0(this$static.currentMonth));
  }
   else {
    d = new Date_4($getTime_0(this$static.currentMonth));
    offset = wkDayOfMonth1st - start > 0?wkDayOfMonth1st - start:7 - (start - wkDayOfMonth1st);
    addDaysToDate(d, -offset);
    return d;
  }
}

function $getDayOfMonthFormatter(){
  return getFormat(($clinit_DateTimeFormat$PredefinedFormat() , DAY));
}

function $getDayOfWeekFormatter(){
  return getFormat_0('ccccc');
}

function $getMonthAndYearFormatter(){
  return getFormat(($clinit_DateTimeFormat$PredefinedFormat() , YEAR_MONTH_ABBR));
}

function $isInCurrentMonth(this$static, date){
  return $getMonth_0(this$static.currentMonth) == $getMonth_0(date);
}

function $refresh(){
}

function $setCurrentMonth(this$static, currentDate){
  this$static.currentMonth.setYear($getYear(currentDate));
  this$static.currentMonth.setMonth_0($getMonth_0(currentDate));
}

function $shiftCurrentMonth(this$static, deltaMonths){
  addMonthsToDate(this$static.currentMonth, deltaMonths);
  $refresh();
}

function CalendarModel_0(){
  $clinit_CalendarModel();
  var date, dayOfWeek, i;
  Object_1.call(this);
  $$init_690();
  this.currentMonth = new Date_1;
  setToFirstDayOfMonth(this.currentMonth);
  date = new Date_1;
  for (i = 1; i <= 7; ++i) {
    $setDate_0(date, i);
    dayOfWeek = $getDay_0(date);
    dayOfWeekNames[dayOfWeek] = $format($getDayOfWeekFormatter(), date);
  }
  date.setMonth_0(0);
  for (i = 1; i < 32; ++i) {
    $setDate_0(date, i);
    dayOfMonthNames[i] = $format($getDayOfMonthFormatter(), date);
  }
}

function CalendarModel(){
}

_ = CalendarModel_0.prototype = CalendarModel.prototype = new Object_0;
_.getClass$ = function getClass_691(){
  return Lcom_google_gwt_user_datepicker_client_CalendarModel_2_classLit;
}
;
_.currentMonth = null;
var dayOfMonthNames, dayOfWeekNames;
function $clinit_CalendarUtil(){
  $clinit_CalendarUtil = nullMethod;
  var dateTimeFormatInfo;
  if (isClient()) {
    dateTimeFormatInfo = $getDateTimeFormatInfo(getCurrentLocale());
    firstDayOfWeekend = dateTimeFormatInfo.weekendStart();
    lastDayOfWeekend = dateTimeFormatInfo.weekendEnd();
    startingDay = dateTimeFormatInfo.firstDayOfTheWeek();
  }
}

function addDaysToDate(date, days){
  $clinit_CalendarUtil();
  $setDate_0(date, $getDate_0(date) + days);
}

function addMonthsToDate(date, months){
  $clinit_CalendarUtil();
  var month, resultMonth, resultMonthCount, resultYear, year;
  if (months != 0) {
    month = $getMonth_0(date);
    year = $getYear(date);
    resultMonthCount = year * 12 + month + months;
    resultYear = narrow_int(resultMonthCount / 12);
    resultMonth = resultMonthCount - resultYear * 12;
    date.setMonth_0(resultMonth);
    date.setYear(resultYear);
  }
}

function copyDate(date){
  $clinit_CalendarUtil();
  var newDate;
  if (isNull(date)) {
    return null;
  }
  newDate = new Date_1;
  $setTime_0(newDate, $getTime_0(date));
  return newDate;
}

function getDaysBetween(start, finish){
  $clinit_CalendarUtil();
  var aTime, adjust, bTime;
  start = copyDate(start);
  resetTime(start);
  finish = copyDate(finish);
  resetTime(finish);
  aTime = $getTime_0(start);
  bTime = $getTime_0(finish);
  adjust = P36ee80_longLit;
  adjust = gt(bTime, aTime)?adjust:neg(adjust);
  return toInt(div_0(add_1(sub_0(bTime, aTime), adjust), P5265c00_longLit));
}

function getStartingDayOfWeek(){
  $clinit_CalendarUtil();
  return startingDay;
}

function isSameDate(date0, date1){
  $clinit_CalendarUtil();
  isNotNull(date0) || throwAssertionError_Object('date0 cannot be null');
  isNotNull(date1) || throwAssertionError_Object('date1 cannot be null');
  return $getYear(date0) == $getYear(date1) && $getMonth_0(date0) == $getMonth_0(date1) && $getDate_0(date0) == $getDate_0(date1);
}

function isWeekend_0(dayOfWeek){
  $clinit_CalendarUtil();
  return dayOfWeek == firstDayOfWeekend || dayOfWeek == lastDayOfWeekend;
}

function resetTime(date){
  var msec;
  msec = $getTime_0(date);
  msec = mul(div_0(msec, P3e8_longLit), P3e8_longLit);
  $setTime_0(date, msec);
  date.setHours_0(12);
  date.setMinutes_0(0);
  date.setSeconds_0(0);
}

function setToFirstDayOfMonth(date){
  $clinit_CalendarUtil();
  resetTime(date);
  $setDate_0(date, 1);
}

var firstDayOfWeekend = 0, lastDayOfWeekend = 0, startingDay = 0;
function $$init_691(){
}

function $addMonths(this$static, numMonths){
  $shiftCurrentMonth($getModel(this$static), numMonths);
  $refreshAll($getDatePicker(this$static));
}

function $css(this$static){
  return $css_0(this$static.datePicker);
}

function $getDatePicker(this$static){
  return this$static.datePicker;
}

function $getModel(this$static){
  return $getModel_0(this$static.datePicker);
}

function $setDatePicker(this$static, me){
  this$static.datePicker = me;
}

function DatePickerComponent_0(){
  Composite_0.call(this);
  $$init_691();
}

function DatePickerComponent(){
}

_ = DatePickerComponent.prototype = new Composite;
_.getClass$ = function getClass_692(){
  return Lcom_google_gwt_user_datepicker_client_DatePickerComponent_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]);
_.datePicker = null;
function $$init_692(){
}

function $setHighlightedDate(this$static, date){
  $setHighlightedDate_0($getDatePicker(this$static), date);
}

function CalendarView_0(){
  DatePickerComponent_0.call(this);
  $$init_692();
}

function CalendarView(){
}

_ = CalendarView.prototype = new DatePickerComponent;
_.getClass$ = function getClass_693(){
  return Lcom_google_gwt_user_datepicker_client_CalendarView_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]);
function $$init_693(this$static){
  this$static.elementToCell = new ElementMapperImpl_0;
  this$static.cellList = new ArrayList_0;
}

function $getCell(this$static, i){
  return dynamicCast($get_6(this$static.cellList, i), Q$CellGridImpl$Cell);
}

function $getCell_0(this$static, e){
  var td;
  td = $getEventTargetCell(this$static, e);
  return isNotNull(td)?dynamicCast($get_5(this$static.elementToCell, td), Q$CellGridImpl$Cell):null;
}

function $getNumCells(this$static){
  return $size_1(this$static.cellList);
}

function $getSelectedCell(this$static){
  return this$static.selectedCell;
}

function $isActive(cell){
  return isNotNull(cell) && $isEnabled_1(cell);
}

function $setHighlighted(this$static, nextHighlighted){
  var oldHighlighted;
  if (jsEquals(nextHighlighted, this$static.highlightedCell)) {
    return;
  }
  oldHighlighted = this$static.highlightedCell;
  this$static.highlightedCell = nextHighlighted;
  isNotNull(oldHighlighted) && oldHighlighted.onHighlighted(false);
  isNotNull(this$static.highlightedCell) && this$static.highlightedCell.onHighlighted(true);
}

function $setSelected_0(this$static, cell){
  var last;
  last = $getSelectedCell(this$static);
  this$static.selectedCell = cell;
  isNotNull(last) && last.onSelected_0(false);
  isNotNull(this$static.selectedCell) && this$static.selectedCell.onSelected_0(true);
  this$static.onSelected(last, this$static.selectedCell);
}

function CellGridImpl_0(){
  Grid_0.call(this);
  $$init_693(this);
  $setCellPadding(this, 0);
  $setCellSpacing(this, 0);
  $setBorderWidth(this, 0);
  this.sinkEvents(49);
}

function CellGridImpl(){
}

_ = CellGridImpl.prototype = new Grid;
_.getClass$ = function getClass_694(){
  return Lcom_google_gwt_user_datepicker_client_CellGridImpl_2_classLit;
}
;
_.onBrowserEvent = function onBrowserEvent_15(event_0){
  var cell, e;
  switch (eventGetType(event_0)) {
    case 1:
      {
        cell = $getCell_0(this, event_0);
        $isActive(cell) && $setSelected_0(this, cell);
        break;
      }

    case 32:
      {
        e = eventGetFromElement(event_0);
        if (isNotNull(e)) {
          cell = dynamicCast($get_5(this.elementToCell, e), Q$CellGridImpl$Cell);
          jsEquals(cell, this.highlightedCell) && $setHighlighted(this, null);
        }
        break;
      }

    case 16:
      {
        e = eventGetToElement(event_0);
        if (isNotNull(e)) {
          cell = dynamicCast($get_5(this.elementToCell, e), Q$CellGridImpl$Cell);
          $isActive(cell) && $setHighlighted(this, cell);
        }
        break;
      }

  }
}
;
_.onUnload = function onUnload_5(){
  $setHighlighted(this, null);
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HTMLTable, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Iterable]);
_.highlightedCell = null;
_.selectedCell = null;
function $$init_694(this$static){
}

function $getValue_7(this$static){
  return this$static.value_0;
}

function $isEnabled_1(this$static){
  return this$static.enabled;
}

function $isHighlighted(this$static){
  return jsEquals(this$static, this$static.this$0.highlightedCell);
}

function $isSelected(this$static){
  return jsEquals(this$static.this$0.selectedCell, this$static);
}

function $onEnabled(this$static){
  this$static.updateStyle();
}

function $setEnabled_3(this$static, enabled){
  this$static.enabled = enabled;
  $onEnabled(this$static);
}

function CellGridImpl$Cell_0(this$0, elem, value){
  var current;
  this.this$0 = this$0;
  UIObject_0.call(this);
  $$init_694(this);
  this.value_0 = value;
  current = this;
  this , $size_1(this$0.cellList);
  $add_13(this$0.cellList, current);
  $setElement(this, elem);
  $put_0(this$0.elementToCell, current);
}

function CellGridImpl$Cell(){
}

_ = CellGridImpl$Cell.prototype = new UIObject;
_.getClass$ = function getClass_695(){
  return Lcom_google_gwt_user_datepicker_client_CellGridImpl$Cell_2_classLit;
}
;
_.onHighlighted = function onHighlighted(highlighted){
  this.updateStyle();
}
;
_.onSelected_0 = function onSelected(selected){
  this.updateStyle();
}
;
_.castableTypeMap$ = makeCastMap([Q$HasVisibility, Q$UIObject, Q$CellGridImpl$Cell]);
_.enabled = true;
_.this$0 = null;
_.value_0 = null;
function $clinit_DateBox(){
  $clinit_DateBox = nullMethod;
  $clinit_Composite();
  'dateBoxFormatError';
  'gwt-DateBox';
  DEFAULT_FORMAT = new DateBox$DefaultFormat_0;
}

function $$init_695(this$static){
  this$static.box = new TextBox_0;
}

function $getFormat(this$static){
  return this$static.format;
}

function $getValue_8(this$static){
  return $parseDate(this$static, true);
}

function $hideDatePicker(this$static){
  this$static.popup.hide();
}

function $isDatePickerShowing(this$static){
  return $isShowing(this$static.popup);
}

function $parseDate(this$static, reportError){
  var text;
  reportError && $getFormat(this$static).reset(this$static, false);
  text = $trim($getText_1(this$static.box));
  return $getFormat(this$static).parse_1(this$static, text, reportError);
}

function $preventDatePickerPopup(this$static){
  this$static.allowDPShow = false;
  addCommand(new DateBox$1_0(this$static));
}

function $setFormat(this$static, format){
  var date;
  isNotNull(format) || throwAssertionError_Object('A Date box may not have a null format');
  if (jsNotEquals(this$static.format, format)) {
    date = $getValue_8(this$static);
    this$static.format.reset(this$static, true);
    this$static.format = format;
    $setValue_3(this$static, date);
  }
}

function $setValue_3(this$static, date){
  $setValue_5(this$static, date, false);
}

function $setValue_4(this$static, oldDate, date, fireEvents){
  isNotNull(date) && $setCurrentMonth_0(this$static.picker, date);
  $setValue_6(this$static.picker, date, false);
  this$static.format.reset(this$static, false);
  $setText_8(this$static.box, $getFormat(this$static).format_0(this$static, date));
  fireEvents && fireIfNotEqualDates(this$static, oldDate, date);
}

function $setValue_5(this$static, date, fireEvents){
  $setValue_4(this$static, $getValue_10(this$static.picker), date, fireEvents);
}

function $showDatePicker(this$static){
  var current;
  current = $parseDate(this$static, false);
  isNull(current) && (current = new Date_1);
  $setCurrentMonth_0(this$static.picker, current);
  $showRelativeTo(this$static.popup, this$static);
}

function $updateDateFromTextBox(this$static){
  var parsedDate;
  parsedDate = $parseDate(this$static, true);
  isNotNull(parsedDate) && $setValue_4(this$static, $getValue_10(this$static.picker), parsedDate, true);
}

function DateBox_0(){
  $clinit_DateBox();
  DateBox_1.call(this, new DatePicker_0, null, DEFAULT_FORMAT);
}

function DateBox_1(picker, date, format){
  var handler;
  Composite_0.call(this);
  $$init_695(this);
  this.picker = picker;
  this.popup = new PopupPanel_1(true);
  isNotNull(format) || throwAssertionError_Object('You may not construct a date box with a null format');
  this.format = format;
  $addAutoHidePartner(this.popup, $getElement(this.box));
  this.popup.setWidget(picker);
  this.popup.setStyleName('dateBoxPopup');
  $initWidget(this, this.box);
  this.setStyleName('gwt-DateBox');
  handler = new DateBox$DateBoxHandler_0(this);
  $addValueChangeHandler_1(picker, handler);
  $addFocusHandler(this.box, handler);
  $addBlurHandler(this.box, handler);
  $addClickHandler(this.box, handler);
  $addKeyDownHandler(this.box, handler);
  $addCloseHandler(this.popup, handler);
  $setValue_3(this, date);
}

function DateBox(){
}

_ = DateBox_0.prototype = DateBox.prototype = new Composite;
_.addValueChangeHandler = function addValueChangeHandler_5(handler){
  return $addHandler_1(this, handler, getType_30());
}
;
_.getClass$ = function getClass_696(){
  return Lcom_google_gwt_user_datepicker_client_DateBox_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]);
_.allowDPShow = true;
_.format = null;
_.picker = null;
_.popup = null;
var DEFAULT_FORMAT;
function $$init_696(){
}

function DateBox$1_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_696();
}

function DateBox$1(){
}

_ = DateBox$1_0.prototype = DateBox$1.prototype = new Object_0;
_.execute_1 = function execute_20(){
  this.this$0.allowDPShow = true;
}
;
_.getClass$ = function getClass_697(){
  return Lcom_google_gwt_user_datepicker_client_DateBox$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Command]);
_.this$0 = null;
function $$init_697(){
}

function DateBox$DateBoxHandler_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_697();
}

function DateBox$DateBoxHandler(){
}

_ = DateBox$DateBoxHandler_0.prototype = DateBox$DateBoxHandler.prototype = new Object_0;
_.getClass$ = function getClass_698(){
  return Lcom_google_gwt_user_datepicker_client_DateBox$DateBoxHandler_2_classLit;
}
;
_.onBlur = function onBlur_0(event_0){
  $isDatePickerShowing(this.this$0) || $updateDateFromTextBox(this.this$0);
}
;
_.onClick = function onClick_9(event_0){
  $showDatePicker(this.this$0);
}
;
_.onClose = function onClose_3(event_0){
  this.this$0.allowDPShow && $updateDateFromTextBox(this.this$0);
}
;
_.onFocus = function onFocus(event_0){
  this.this$0.allowDPShow && !$isDatePickerShowing(this.this$0) && $showDatePicker(this.this$0);
}
;
_.onKeyDown = function onKeyDown_0(event_0){
  switch ($getNativeKeyCode(event_0)) {
    case 13:
    case 9:
      $updateDateFromTextBox(this.this$0);
    case 27:
    case 38:
      $hideDatePicker(this.this$0);
      break;
    case 40:
      $showDatePicker(this.this$0);
  }
}
;
_.onValueChange = function onValueChange_2(event_0){
  $setValue_4(this.this$0, $parseDate(this.this$0, false), dynamicCast(event_0.getValue(), Q$Date), true);
  $hideDatePicker(this.this$0);
  $preventDatePickerPopup(this.this$0);
  this.this$0.box.setFocus(true);
}
;
_.castableTypeMap$ = makeCastMap([Q$BlurHandler, Q$ClickHandler, Q$FocusHandler, Q$KeyDownHandler, Q$CloseHandler, Q$ValueChangeHandler, Q$EventHandler]);
_.this$0 = null;
function $$init_698(){
}

function DateBox$DefaultFormat_0(){
  Object_1.call(this);
  $$init_698();
  this.dateTimeFormat = getMediumDateTimeFormat();
}

function DateBox$DefaultFormat_1(dateTimeFormat){
  Object_1.call(this);
  $$init_698();
  this.dateTimeFormat = dateTimeFormat;
}

function DateBox$DefaultFormat(){
}

_ = DateBox$DefaultFormat_1.prototype = DateBox$DefaultFormat_0.prototype = DateBox$DefaultFormat.prototype = new Object_0;
_.format_0 = function format_0(box, date){
  return isNull(date)?'':$format(this.dateTimeFormat, date);
}
;
_.getClass$ = function getClass_699(){
  return Lcom_google_gwt_user_datepicker_client_DateBox$DefaultFormat_2_classLit;
}
;
_.parse_1 = function parse_2(dateBox, dateText, reportError){
  var $e0, $e1, date;
  date = null;
  try {
    $length_1(dateText) > 0 && (date = $parse(this.dateTimeFormat, dateText));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$IllegalArgumentException)) {
      $e0;
      try {
        date = new Date_5(dateText);
      }
       catch ($e1) {
        $e1 = caught_0($e1);
        if (instanceOf($e1, Q$IllegalArgumentException)) {
          $e1;
          reportError && dateBox.addStyleName('dateBoxFormatError');
          return null;
        }
         else 
          throw $e1;
      }
    }
     else 
      throw $e0;
  }
  return date;
}
;
_.reset = function reset(dateBox, abandon){
  dateBox.removeStyleName('dateBoxFormatError');
}
;
_.dateTimeFormat = null;
function $$init_699(){
}

function $getValue_9(this$static){
  return copyDate(dynamicCast($getValue_1(this$static), Q$Date));
}

function DateChangeEvent_0(value){
  ValueChangeEvent_0.call(this, copyDate(value));
  $$init_699();
}

function fireIfNotEqualDates(source, oldValue, newValue){
  shouldFire(oldValue, newValue) && source.fireEvent_0(new DateChangeEvent_0(newValue));
}

function DateChangeEvent(){
}

_ = DateChangeEvent_0.prototype = DateChangeEvent.prototype = new ValueChangeEvent;
_.getClass$ = function getClass_700(){
  return Lcom_google_gwt_user_datepicker_client_DateChangeEvent_2_classLit;
}
;
_.getValue = function getValue_3(){
  return $getValue_9(this);
}
;
_.castableTypeMap$ = makeCastMap([Q$ValueChangeEvent]);
function $$init_700(this$static){
  this$static.styler = new DatePicker$DateStyler_0;
  this$static.css = ($clinit_DatePicker$StandardCss() , DEFAULT_0);
}

function $addStyleToDates(this$static, styleName, date){
  $setStyleName_4(this$static.styler, date, styleName, true);
  $isDateVisible(this$static, date) && $getView(this$static).addStyleToDate(styleName, date);
}

function $addValueChangeHandler_1(this$static, handler){
  return $addHandler_1(this$static, handler, getType_30());
}

function $css_0(this$static){
  return this$static.css;
}

function $getFirstDate(this$static){
  return this$static.view.getFirstDate();
}

function $getLastDate(this$static){
  return this$static.view.getLastDate();
}

function $getModel_0(this$static){
  return this$static.model;
}

function $getMonthSelector(this$static){
  return this$static.monthSelector;
}

function $getStyleOfDate(this$static, date){
  return $getStyleName(this$static.styler, date);
}

function $getValue_10(this$static){
  return copyDate(this$static.value_0);
}

function $getView(this$static){
  return this$static.view;
}

function $isDateVisible(this$static, date){
  var first, last, r;
  r = $getView(this$static);
  first = r.getFirstDate();
  last = r.getLastDate();
  return isNotNull(date) && (isSameDate(first, date) || isSameDate(last, date) || $before(first, date) && $after(last, date));
}

function $refreshAll(this$static){
  this$static , null;
  $refresh($getModel_0(this$static));
  $getView(this$static).refresh();
  $getMonthSelector(this$static).refresh();
  $isAttached_0(this$static) && fire_8(this$static, $getFirstDate(this$static), $getLastDate(this$static));
}

function $removeStyleFromDates(this$static, styleName, date){
  $setStyleName_4(this$static.styler, date, styleName, false);
  $isDateVisible(this$static, date) && $getView(this$static).removeStyleFromDate(styleName, date);
}

function $setCurrentMonth_0(this$static, month){
  $setCurrentMonth($getModel_0(this$static), month);
  $refreshAll(this$static);
}

function $setHighlightedDate_0(this$static, highlighted){
  this$static , highlighted;
  $fireEvent_1(this$static, new DatePicker$DateHighlightEvent_0(highlighted));
}

function $setStyleName_3(this$static, styleName){
  this$static.css = new DatePicker$StandardCss_0(styleName, 'datePicker');
  $setStyleName(this$static, styleName);
}

function $setValue_6(this$static, newValue, fireEvents){
  var oldValue;
  oldValue = this$static.value_0;
  isNotNull(oldValue) && $removeStyleFromDates(this$static, $dayIsValue($css_0(this$static)), oldValue);
  this$static.value_0 = copyDate(newValue);
  isNotNull(this$static.value_0) && $addStyleToDates(this$static, $dayIsValue($css_0(this$static)), this$static.value_0);
  fireEvents && fireIfNotEqualDates(this$static, oldValue, newValue);
}

function $setup(this$static){
  var panel;
  panel = new VerticalPanel_0;
  $initWidget(this$static, panel);
  setStyleName($getElement(panel), $datePicker(this$static.css));
  $setStyleName_3(this$static, $datePicker($css_0(this$static)));
  $add_16(panel, $getMonthSelector(this$static));
  $add_16(panel, $getView(this$static));
}

function DatePicker_0(){
  $clinit_Composite();
  DatePicker_1.call(this, new DefaultMonthSelector_0, new DefaultCalendarView_0, new CalendarModel_0);
}

function DatePicker_1(monthSelector, view, model){
  Composite_0.call(this);
  $$init_700(this);
  this.model = model;
  this.monthSelector = monthSelector;
  $setDatePicker(monthSelector, this);
  this.view = view;
  $setDatePicker(view, this);
  view.setup();
  monthSelector.setup();
  $setup(this);
  $setCurrentMonth_0(this, new Date_1);
  $addStyleToDates(this, $dayIsToday($css_0(this)), new Date_1);
}

function DatePicker(){
}

_ = DatePicker_0.prototype = DatePicker.prototype = new Composite;
_.addValueChangeHandler = function addValueChangeHandler_6(handler){
  return $addValueChangeHandler_1(this, handler);
}
;
_.getClass$ = function getClass_701(){
  return Lcom_google_gwt_user_datepicker_client_DatePicker_2_classLit;
}
;
_.onLoad = function onLoad_9(){
  fire_8(this, $getFirstDate(this), $getLastDate(this));
}
;
_.setStyleName = function setStyleName_2(styleName){
  $setStyleName_3(this, styleName);
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]);
_.model = null;
_.monthSelector = null;
_.value_0 = null;
_.view = null;
function $$init_701(){
}

function DatePicker$DateHighlightEvent_0(highlighted){
  HighlightEvent_0.call(this, highlighted);
  $$init_701();
}

function DatePicker$DateHighlightEvent(){
}

_ = DatePicker$DateHighlightEvent_0.prototype = DatePicker$DateHighlightEvent.prototype = new HighlightEvent;
_.getClass$ = function getClass_702(){
  return Lcom_google_gwt_user_datepicker_client_DatePicker$DateHighlightEvent_2_classLit;
}
;
function $$init_702(this$static){
  this$static.info = new HashMap_0;
}

function $genKey(d){
  return $getYear(d) + '/' + $getMonth_0(d) + '/' + $getDate_0(d);
}

function $getStyleName(this$static, d){
  return dynamicCast(this$static.info.get($genKey(d)), Q$String);
}

function $setStyleName_4(this$static, d, styleName, add){
  var current, key, newValue;
  styleName = ' ' + styleName + ' ';
  key = $genKey(d);
  current = dynamicCast(this$static.info.get(key), Q$String);
  if (add) {
    jsEquals(current, null)?this$static.info.put(key, styleName):$indexOf_3(current, styleName) == -1 && this$static.info.put(key, current + styleName);
  }
   else {
    if (jsNotEquals(current, null)) {
      newValue = $replaceAll(current, styleName, '');
      $length_1($trim(newValue)) == 0?this$static.info.remove_0(key):this$static.info.put(key, newValue);
    }
  }
}

function DatePicker$DateStyler_0(){
  Object_1.call(this);
  $$init_702(this);
}

function DatePicker$DateStyler(){
}

_ = DatePicker$DateStyler_0.prototype = DatePicker$DateStyler.prototype = new Object_0;
_.getClass$ = function getClass_703(){
  return Lcom_google_gwt_user_datepicker_client_DatePicker$DateStyler_2_classLit;
}
;
function $clinit_DatePicker$StandardCss(){
  $clinit_DatePicker$StandardCss = nullMethod;
  DEFAULT_0 = new DatePicker$StandardCss_0('gwt-DatePicker', 'datePicker');
}

function $$init_703(){
}

function $datePicker(this$static){
  return $getWidgetStyleName(this$static);
}

function $day(this$static){
  return $wrap(this$static, 'Day');
}

function $day_0(this$static, dayModifier){
  return $day(this$static) + 'Is' + dayModifier;
}

function $dayIsDisabled(this$static){
  return $day_0(this$static, 'Disabled');
}

function $dayIsFiller(this$static){
  return $day_0(this$static, 'Filler');
}

function $dayIsHighlighted(this$static){
  return $day_0(this$static, 'Highlighted');
}

function $dayIsToday(this$static){
  return $day_0(this$static, 'Today');
}

function $dayIsValue(this$static){
  return $day_0(this$static, 'Value');
}

function $dayIsValueAndHighlighted(this$static){
  return $dayIsValue(this$static) + 'AndHighlighted';
}

function $dayIsWeekend(this$static){
  return $day_0(this$static, 'Weekend');
}

function $days(this$static){
  return $wrap(this$static, 'Days');
}

function $getWidgetStyleName(this$static){
  return this$static.widgetName;
}

function $month(this$static){
  return $wrap(this$static, 'Month');
}

function $monthSelector(this$static){
  return $wrap(this$static, 'MonthSelector');
}

function $nextButton(this$static){
  return $wrap(this$static, 'NextButton');
}

function $previousButton(this$static){
  return $wrap(this$static, 'PreviousButton');
}

function $weekdayLabel(this$static){
  return $wrap(this$static, 'WeekdayLabel');
}

function $weekendLabel(this$static){
  return $wrap(this$static, 'WeekendLabel');
}

function $wrap(this$static, style){
  return this$static.baseName + style;
}

function DatePicker$StandardCss_0(widgetName, baseName){
  $clinit_DatePicker$StandardCss();
  Object_1.call(this);
  $$init_703();
  this.widgetName = widgetName;
  this.baseName = baseName;
}

function DatePicker$StandardCss(){
}

_ = DatePicker$StandardCss_0.prototype = DatePicker$StandardCss.prototype = new Object_0;
_.getClass$ = function getClass_704(){
  return Lcom_google_gwt_user_datepicker_client_DatePicker$StandardCss_2_classLit;
}
;
_.baseName = null;
_.widgetName = null;
var DEFAULT_0;
function $$init_704(this$static){
  this$static.grid = new DefaultCalendarView$CellGrid_0(this$static);
  this$static.lastDisplayed = new Date_1;
}

function $getCell_1(this$static, d){
  var cell, index;
  index = getDaysBetween(this$static.firstDisplayed, d);
  index >= 0 || throwAssertionError();
  cell = dynamicCast($getCell(this$static.grid, index), Q$DefaultCalendarView$CellGrid$DateCell);
  if ($getDate_0(dynamicCast($getValue_7(cell), Q$Date)) != $getDate_0(d)) {
    throw new IllegalStateException_1(d + ' cannot be associated with cell ' + cell + ' as it has date ' + $getValue_7(cell));
  }
  return cell;
}

function $getFirstDate_0(this$static){
  return this$static.firstDisplayed;
}

function $getLastDate_0(this$static){
  return this$static.lastDisplayed;
}

function DefaultCalendarView_0(){
  CalendarView_0.call(this);
  $$init_704(this);
}

function DefaultCalendarView(){
}

_ = DefaultCalendarView_0.prototype = DefaultCalendarView.prototype = new CalendarView;
_.addStyleToDate = function addStyleToDate(styleName, date){
  $isDateVisible($getDatePicker(this), date) || throwAssertionError_Object('You tried to add style ' + styleName + ' to ' + date + '. The calendar is currently showing ' + $getFirstDate_0(this) + ' to ' + $getLastDate_0(this));
  $addStyleName($getCell_1(this, date), styleName);
}
;
_.getClass$ = function getClass_705(){
  return Lcom_google_gwt_user_datepicker_client_DefaultCalendarView_2_classLit;
}
;
_.getFirstDate = function getFirstDate(){
  return $getFirstDate_0(this);
}
;
_.getLastDate = function getLastDate(){
  return $getLastDate_0(this);
}
;
_.refresh = function refresh(){
  var cell, i;
  this.firstDisplayed = $getCurrentFirstDayOfFirstWeek($getModel(this));
  $getDate_0(this.firstDisplayed) == 1 && addDaysToDate(this.firstDisplayed, -7);
  $setTime_0(this.lastDisplayed, $getTime_0(this.firstDisplayed));
  for (i = 0; i < $getNumCells(this.grid); ++i) {
    i != 0 && addDaysToDate(this.lastDisplayed, 1);
    cell = dynamicCast($getCell(this.grid, i), Q$DefaultCalendarView$CellGrid$DateCell);
    $update_0(cell, this.lastDisplayed);
  }
}
;
_.removeStyleFromDate = function removeStyleFromDate(styleName, date){
  $removeStyleName($getCell_1(this, date), styleName);
}
;
_.setup = function setup(){
  var column, dayIdx, e, formatter, i, row, shift, weekendEndColumn, weekendStartColumn;
  formatter = $getCellFormatter(this.grid);
  weekendStartColumn = -1;
  weekendEndColumn = -1;
  for (i = 0; i < 7; ++i) {
    shift = getStartingDayOfWeek();
    dayIdx = i + shift < 7?i + shift:i + shift - 7;
    $setText_6(this.grid, 0, i, $formatDayOfWeek_0(($getModel(this) , dayIdx)));
    if (isWeekend_0(dayIdx)) {
      $setStyleName_1(formatter, 0, i, $weekendLabel($css(this)));
      weekendStartColumn == -1?(weekendStartColumn = i):(weekendEndColumn = i);
    }
     else {
      $setStyleName_1(formatter, 0, i, $weekdayLabel($css(this)));
    }
  }
  for (row = 1; row <= 6; ++row) {
    for (column = 0; column < 7; ++column) {
      e = $getElement_0(formatter, row, column);
      new DefaultCalendarView$CellGrid$DateCell_0(this.grid, e, column == weekendStartColumn || column == weekendEndColumn);
    }
  }
  $initWidget(this, this.grid);
  this.grid.setStyleName($days($css(this)));
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]);
_.firstDisplayed = null;
function $$init_705(){
}

function DefaultCalendarView$CellGrid_0(this$0){
  $clinit_UIObject();
  this.this$0 = this$0;
  CellGridImpl_0.call(this);
  $$init_705();
  $resize(this, 7, 7);
}

function DefaultCalendarView$CellGrid(){
}

_ = DefaultCalendarView$CellGrid_0.prototype = DefaultCalendarView$CellGrid.prototype = new CellGridImpl;
_.getClass$ = function getClass_706(){
  return Lcom_google_gwt_user_datepicker_client_DefaultCalendarView$CellGrid_2_classLit;
}
;
_.onSelected = function onSelected_0(lastSelected, cell){
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HTMLTable, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Iterable]);
_.this$0 = null;
function $$init_706(){
}

function $addStyleName(this$static, styleName){
  $indexOf_3(this$static.dateStyle, ' ' + styleName + ' ') == -1 && (this$static.dateStyle += styleName + ' ');
  $updateStyle(this$static);
}

function $isFiller(this$static){
  return !$isInCurrentMonth($getModel(this$static.this$1.this$0), dynamicCast($getValue_7(this$static), Q$Date));
}

function $removeStyleName(this$static, styleName){
  this$static.dateStyle = $replace_1(this$static.dateStyle, ' ' + styleName + ' ', ' ');
  $updateStyle(this$static);
}

function $setText_10(this$static, value){
  setInnerText_1($getElement(this$static), value);
}

function $update_0(this$static, current){
  var extraStyle, value;
  $setEnabled_3(this$static, true);
  $setTime_0(dynamicCast($getValue_7(this$static), Q$Date), $getTime_0(current));
  value = $formatDayOfMonth(($getModel(this$static.this$1.this$0) , dynamicCast($getValue_7(this$static), Q$Date)));
  $setText_10(this$static, value);
  this$static.dateStyle = this$static.cellStyle;
  if ($isFiller(this$static)) {
    this$static.dateStyle += ' ' + $dayIsFiller($css(this$static.this$1.this$0));
  }
   else {
    extraStyle = $getStyleOfDate($getDatePicker(this$static.this$1.this$0), current);
    jsNotEquals(extraStyle, null) && (this$static.dateStyle += ' ' + extraStyle);
  }
  this$static.dateStyle += ' ';
  $updateStyle(this$static);
}

function $updateStyle(this$static){
  var accum;
  accum = this$static.dateStyle;
  if ($isHighlighted(this$static)) {
    accum += ' ' + $dayIsHighlighted($css(this$static.this$1.this$0));
    $isHighlighted(this$static) && $isSelected(this$static) && (accum += ' ' + $dayIsValueAndHighlighted($css(this$static.this$1.this$0)));
  }
  $isEnabled_1(this$static) || (accum += ' ' + $dayIsDisabled($css(this$static.this$1.this$0)));
  this$static.setStyleName(accum);
}

function DefaultCalendarView$CellGrid$DateCell_0(this$1, td, isWeekend){
  $clinit_UIObject();
  this.this$1 = this$1;
  CellGridImpl$Cell_0.call(this, this$1, td, new Date_1);
  $$init_706();
  this.cellStyle = $day($css(this$1.this$0));
  isWeekend && (this.cellStyle += ' ' + $dayIsWeekend($css(this$1.this$0)));
}

function DefaultCalendarView$CellGrid$DateCell(){
}

_ = DefaultCalendarView$CellGrid$DateCell_0.prototype = DefaultCalendarView$CellGrid$DateCell.prototype = new CellGridImpl$Cell;
_.addStyleName = function addStyleName_0(styleName){
  $addStyleName(this, styleName);
}
;
_.getClass$ = function getClass_707(){
  return Lcom_google_gwt_user_datepicker_client_DefaultCalendarView$CellGrid$DateCell_2_classLit;
}
;
_.onHighlighted = function onHighlighted_0(highlighted){
  $setHighlightedDate(this.this$1.this$0, dynamicCast($getValue_7(this), Q$Date));
  $updateStyle(this);
}
;
_.onSelected_0 = function onSelected_1(selected){
  if (selected) {
    $setValue_6($getDatePicker(this.this$1.this$0), dynamicCast($getValue_7(this), Q$Date), true);
    $isFiller(this) && $setCurrentMonth_0($getDatePicker(this.this$1.this$0), dynamicCast($getValue_7(this), Q$Date));
  }
  $updateStyle(this);
}
;
_.removeStyleName = function removeStyleName_0(styleName){
  $removeStyleName(this, styleName);
}
;
_.updateStyle = function updateStyle(){
  $updateStyle(this);
}
;
_.castableTypeMap$ = makeCastMap([Q$HasVisibility, Q$UIObject, Q$CellGridImpl$Cell, Q$DefaultCalendarView$CellGrid$DateCell]);
_.cellStyle = null;
_.dateStyle = null;
_.this$1 = null;
function $$init_707(){
}

function MonthSelector_0(){
  DatePickerComponent_0.call(this);
  $$init_707();
}

function MonthSelector(){
}

_ = MonthSelector.prototype = new DatePickerComponent;
_.getClass$ = function getClass_708(){
  return Lcom_google_gwt_user_datepicker_client_MonthSelector_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]);
function $$init_708(){
}

function DefaultMonthSelector_0(){
  MonthSelector_0.call(this);
  $$init_708();
}

function DefaultMonthSelector(){
}

_ = DefaultMonthSelector_0.prototype = DefaultMonthSelector.prototype = new MonthSelector;
_.getClass$ = function getClass_709(){
  return Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector_2_classLit;
}
;
_.refresh = function refresh_0(){
  var formattedMonth;
  formattedMonth = $formatCurrentMonth($getModel(this));
  $setText_6(this.grid, 0, 1, formattedMonth);
}
;
_.setup = function setup_0(){
  var formatter;
  this.backwards = new PushButton_0;
  $addClickHandler(this.backwards, new DefaultMonthSelector$1_0(this));
  $setHTML_0($getUpFace(this.backwards), '&laquo;');
  this.backwards.setStyleName($previousButton($css(this)));
  this.forwards = new PushButton_0;
  $setHTML_0($getUpFace(this.forwards), '&raquo;');
  this.forwards.setStyleName($nextButton($css(this)));
  $addClickHandler(this.forwards, new DefaultMonthSelector$2_0(this));
  this.grid = new Grid_1(1, 3);
  $setWidget_2(this.grid, 0, 0, this.backwards);
  $setWidget_2(this.grid, 0, 2, this.forwards);
  formatter = $getCellFormatter(this.grid);
  $setStyleName_1(formatter, 0, 1, $month($css(this)));
  $setWidth_2(formatter, 0, 0, '1');
  $setWidth_2(formatter, 0, 1, '100%');
  $setWidth_2(formatter, 0, 2, '1');
  this.grid.setStyleName($monthSelector($css(this)));
  $initWidget(this, this.grid);
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]);
_.backwards = null;
_.forwards = null;
_.grid = null;
function $$init_709(){
}

function DefaultMonthSelector$1_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_709();
}

function DefaultMonthSelector$1(){
}

_ = DefaultMonthSelector$1_0.prototype = DefaultMonthSelector$1.prototype = new Object_0;
_.getClass$ = function getClass_710(){
  return Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector$1_2_classLit;
}
;
_.onClick = function onClick_10(event_0){
  $addMonths(this.this$0, -1);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function $$init_710(){
}

function DefaultMonthSelector$2_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_710();
}

function DefaultMonthSelector$2(){
}

_ = DefaultMonthSelector$2_0.prototype = DefaultMonthSelector$2.prototype = new Object_0;
_.getClass$ = function getClass_711(){
  return Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector$2_2_classLit;
}
;
_.onClick = function onClick_11(event_0){
  $addMonths(this.this$0, 1);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function $startsWith_0(this$static, prefix, toffset){
  return !(toffset < 0 || toffset >= $length_1(this$static)) && $indexOf_4(this$static, prefix, toffset) == toffset;
}

var Lcom_google_gwt_user_datepicker_client_DatePicker_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DatePicker', 'DatePicker', Lcom_google_gwt_user_client_ui_Composite_2_classLit), Lcom_google_gwt_user_datepicker_client_DatePicker$StandardCss_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DatePicker$StandardCss', 'DatePicker$StandardCss', Ljava_lang_Object_2_classLit), Lcom_google_gwt_event_logical_shared_HighlightEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'HighlightEvent', 'HighlightEvent', Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_google_gwt_user_datepicker_client_DatePicker$DateHighlightEvent_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DatePicker$DateHighlightEvent', 'DatePicker$DateHighlightEvent', Lcom_google_gwt_event_logical_shared_HighlightEvent_2_classLit), Lcom_google_gwt_user_datepicker_client_DatePicker$DateStyler_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DatePicker$DateStyler', 'DatePicker$DateStyler', Ljava_lang_Object_2_classLit), Lcom_google_gwt_event_logical_shared_ShowRangeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'ShowRangeEvent', 'ShowRangeEvent', Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_google_gwt_user_datepicker_client_DateBox_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DateBox', 'DateBox', Lcom_google_gwt_user_client_ui_Composite_2_classLit), Lcom_google_gwt_user_datepicker_client_DateBox$DefaultFormat_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DateBox$DefaultFormat', 'DateBox$DefaultFormat', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_datepicker_client_DateBox$DateBoxHandler_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DateBox$DateBoxHandler', 'DateBox$DateBoxHandler', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_datepicker_client_DateBox$1_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DateBox$1', 'DateBox$1', Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_ValueChangeHandlers$RichHasValueChangeHandlers_2_classLit = createForClass('com.google.gwt.sample.showcase.client.', 'ValueChangeHandlers$RichHasValueChangeHandlers', 'ValueChangeHandlers$RichHasValueChangeHandlers', Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_widgets_CwDatePicker$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.widgets.', 'CwDatePicker$$anonfun$onInitialize$1', 'CwDatePicker$$anonfun$onInitialize$1', Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_user_datepicker_client_DatePickerComponent_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DatePickerComponent', 'DatePickerComponent', Lcom_google_gwt_user_client_ui_Composite_2_classLit), Lcom_google_gwt_user_datepicker_client_MonthSelector_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'MonthSelector', 'MonthSelector', Lcom_google_gwt_user_datepicker_client_DatePickerComponent_2_classLit), Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DefaultMonthSelector', 'DefaultMonthSelector', Lcom_google_gwt_user_datepicker_client_MonthSelector_2_classLit), Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector$1_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DefaultMonthSelector$1', 'DefaultMonthSelector$1', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector$2_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DefaultMonthSelector$2', 'DefaultMonthSelector$2', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_datepicker_client_CalendarView_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'CalendarView', 'CalendarView', Lcom_google_gwt_user_datepicker_client_DatePickerComponent_2_classLit), Lcom_google_gwt_user_datepicker_client_DefaultCalendarView_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DefaultCalendarView', 'DefaultCalendarView', Lcom_google_gwt_user_datepicker_client_CalendarView_2_classLit), Lcom_google_gwt_user_datepicker_client_CellGridImpl_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'CellGridImpl', 'CellGridImpl', Lcom_google_gwt_user_client_ui_Grid_2_classLit), Lcom_google_gwt_user_datepicker_client_DefaultCalendarView$CellGrid_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DefaultCalendarView$CellGrid', 'DefaultCalendarView$CellGrid', Lcom_google_gwt_user_datepicker_client_CellGridImpl_2_classLit), Lcom_google_gwt_user_datepicker_client_CellGridImpl$Cell_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'CellGridImpl$Cell', 'CellGridImpl$Cell', Lcom_google_gwt_user_client_ui_UIObject_2_classLit), Lcom_google_gwt_user_datepicker_client_DefaultCalendarView$CellGrid$DateCell_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DefaultCalendarView$CellGrid$DateCell', 'DefaultCalendarView$CellGrid$DateCell', Lcom_google_gwt_user_datepicker_client_CellGridImpl$Cell_2_classLit), Lcom_google_gwt_user_datepicker_client_CalendarModel_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'CalendarModel', 'CalendarModel', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_datepicker_client_DateChangeEvent_2_classLit = createForClass('com.google.gwt.user.datepicker.client.', 'DateChangeEvent', 'DateChangeEvent', Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit), Lcom_google_gwt_user_client_ui_CheckBox$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CheckBox$1', 'CheckBox$1', Ljava_lang_Object_2_classLit), Lcom_google_gwt_event_dom_client_FocusEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'FocusEvent', 'FocusEvent', Lcom_google_gwt_event_dom_client_DomEvent_2_classLit), Lcom_google_gwt_i18n_shared_impl_DateRecord_2_classLit = createForClass('com.google.gwt.i18n.shared.impl.', 'DateRecord', 'DateRecord', Ljava_util_Date_2_classLit);
$entry(onLoad)(5);
