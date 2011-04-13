/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Ajax.org Code Editor (ACE).
 *
 * The Initial Developer of the Original Code is
 * Ajax.org B.V.
 * Portions created by the Initial Developer are Copyright (C) 2010
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *      Fabian Jakobs <fabian AT ajax DOT org>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

define(function(require, exports, module) {

    var dom = require("pilot/dom");

    var cssText = ".ace-knife .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-knife .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-knife .ace_gutter {\
  width: 50px;\
  background: #e8e8e8;\
  color: #333;\
  overflow : hidden;\
}\
\
.ace-knife .ace_gutter-layer {\
  width: 100%;\
  text-align: right;\
}\
\
.ace-knife .ace_gutter-layer .ace_gutter-cell {\
  padding-right: 6px;\
}\
\
.ace-knife .ace_print_margin {\
  width: 1px;\
  background: transparent;\
}\
\
.ace-knife .ace_scroller {\
  background-color: #2A2A2A;;\
}\
\
.ace-knife .ace_text-layer {\
  cursor: text;\
  color: #FFFFFF;\
}\
\
.ace-knife .ace_cursor {\
  border-left: 2px solid #FFFFFF;\
}\
\
.ace-knife .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #FFFFFF;\
}\
 \
.ace-knife .ace_marker-layer .ace_selection {\
  background: rgba(179, 101, 57, 0.75);\
}\
\
.ace-knife .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-knife .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid rgba(255, 255, 255, 0.15);\
}\
\
.ace-knife .ace_marker-layer .ace_active_line {\
  background: rgba(0, 0, 0, 0.35);\
}\
\
       \
.ace-knife .ace_invisible {\
  color: rgba(255, 255, 255, 0.15);\
}\
\
.ace-knife .ace_keyword {\
  color:#FF9D00;\
}\
\
.ace-knife .ace_keyword.ace_operator {\
  \
}\
\
.ace-knife .ace_constant {\
  color:#add8e6;\
}\
\
.ace-knife .ace_constant.ace_language {\
  \
}\
\
.ace-knife .ace_constant.ace_library {\
  \
}\
\
.ace-knife .ace_constant.ace_numeric {\
  \
}\
\
.ace-knife .ace_invalid {\
  color:#F8F8F8;\
background-color:#800F00;\
}\
\
.ace-knife .ace_invalid.ace_illegal {\
  \
}\
\
.ace-knife .ace_invalid.ace_deprecated {\
  \
}\
\
.ace-knife .ace_support {\
  color:#EAF2D9;\
}\
\
.ace-knife .ace_support.ace_function {\
  color:#FFB054;\
}\
.ace-knife .ace_entity.ace_other.ace_attribute-name.ace_class.ace_css {\
  color:#5FE461;\
}\
.ace-knife .ace_entity.ace_other.ace_attribute-name.ace_id {\
  color:#FFB454;\
}\
.ace-knife .ace_keyword.ace_control.ace_html.ace_elements {\
  color:#DFC4F0;\
}\
\
.ace-knife .ace_function.ace_buildin {\
  \
}\
\
.ace-knife .ace_string {\
  \
}\
\
.ace-knife .ace_string.ace_regexp {\
  color:#80FFC2;\
}\
\
.ace-knife .ace_comment {\
  font-style:italic;\
color:#0088FF;\
}\
\
.ace-knife .ace_comment.ace_doc {\
  \
}\
\
.ace-knife .ace_comment.ace_doc.ace_tag {\
  \
}\
\
.ace-knife .ace_variable {\
  color:#CCCCCC;\
}\
\
.ace-knife .ace_variable.ace_language {\
  color:#FF80E1;\
}\
\
.ace-knife .ace_xml_pe {\
  \
}";

    // import CSS once
    dom.importCssString(cssText);

    exports.cssClass = "ace-knife";
});
