"use strict";(self["webpackChunkfansoj_frontend"]=self["webpackChunkfansoj_frontend"]||[]).push([[3703],{73703:function(e,t,n){n.r(t),n.d(t,{conf:function(){return p},language:function(){return h}});var a=n(11064),r=Object.defineProperty,m=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,o=Object.prototype.hasOwnProperty,i=(e,t,n,a)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let i of l(t))o.call(e,i)||i===n||r(e,i,{get:()=>t[i],enumerable:!(a=m(t,i))||a.enumerable});return e},s=(e,t,n)=>(i(e,t,"default"),n&&i(n,t,"default")),d={};
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.41.0(38e1e3d097f84e336c311d071a9ffb5191d4ffd1)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/s(d,a);var c=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"],p={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,comments:{blockComment:["{{!--","--}}"]},brackets:[["\x3c!--","--\x3e"],["<",">"],["{{","}}"],["{","}"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"<",close:">"},{open:'"',close:'"'},{open:"'",close:"'"}],onEnterRules:[{beforeText:new RegExp(`<(?!(?:${c.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,"i"),afterText:/^<\/(\w[\w\d]*)\s*>$/i,action:{indentAction:d.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp(`<(?!(?:${c.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,"i"),action:{indentAction:d.languages.IndentAction.Indent}}]},h={defaultToken:"",tokenPostfix:"",tokenizer:{root:[[/\{\{!--/,"comment.block.start.handlebars","@commentBlock"],[/\{\{!/,"comment.start.handlebars","@comment"],[/\{\{/,{token:"@rematch",switchTo:"@handlebarsInSimpleState.root"}],[/<!DOCTYPE/,"metatag.html","@doctype"],[/<!--/,"comment.html","@commentHtml"],[/(<)(\w+)(\/>)/,["delimiter.html","tag.html","delimiter.html"]],[/(<)(script)/,["delimiter.html",{token:"tag.html",next:"@script"}]],[/(<)(style)/,["delimiter.html",{token:"tag.html",next:"@style"}]],[/(<)([:\w]+)/,["delimiter.html",{token:"tag.html",next:"@otherTag"}]],[/(<\/)(\w+)/,["delimiter.html",{token:"tag.html",next:"@otherTag"}]],[/</,"delimiter.html"],[/\{/,"delimiter.html"],[/[^<{]+/]],doctype:[[/\{\{/,{token:"@rematch",switchTo:"@handlebarsInSimpleState.comment"}],[/[^>]+/,"metatag.content.html"],[/>/,"metatag.html","@pop"]],comment:[[/\}\}/,"comment.end.handlebars","@pop"],[/./,"comment.content.handlebars"]],commentBlock:[[/--\}\}/,"comment.block.end.handlebars","@pop"],[/./,"comment.content.handlebars"]],commentHtml:[[/\{\{/,{token:"@rematch",switchTo:"@handlebarsInSimpleState.comment"}],[/-->/,"comment.html","@pop"],[/[^-]+/,"comment.content.html"],[/./,"comment.content.html"]],otherTag:[[/\{\{/,{token:"@rematch",switchTo:"@handlebarsInSimpleState.otherTag"}],[/\/?>/,"delimiter.html","@pop"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/]],script:[[/\{\{/,{token:"@rematch",switchTo:"@handlebarsInSimpleState.script"}],[/type/,"attribute.name","@scriptAfterType"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/>/,{token:"delimiter.html",next:"@scriptEmbedded.text/javascript",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/(<\/)(script\s*)(>)/,["delimiter.html","tag.html",{token:"delimiter.html",next:"@pop"}]]],scriptAfterType:[[/\{\{/,{token:"@rematch",switchTo:"@handlebarsInSimpleState.scriptAfterType"}],[/=/,"delimiter","@scriptAfterTypeEquals"],[/>/,{token:"delimiter.html",next:"@scriptEmbedded.text/javascript",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptAfterTypeEquals:[[/\{\{/,{token:"@rematch",switchTo:"@handlebarsInSimpleState.scriptAfterTypeEquals"}],[/"([^"]*)"/,{token:"attribute.value",switchTo:"@scriptWithCustomType.$1"}],[/'([^']*)'/,{token:"attribute.value",switchTo:"@scriptWithCustomType.$1"}],[/>/,{token:"delimiter.html",next:"@scriptEmbedded.text/javascript",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptWithCustomType:[[/\{\{/,{token:"@rematch",switchTo:"@handlebarsInSimpleState.scriptWithCustomType.$S2"}],[/>/,{token:"delimiter.html",next:"@scriptEmbedded.$S2",nextEmbedded:"$S2"}],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptEmbedded:[[/\{\{/,{token:"@rematch",switchTo:"@handlebarsInEmbeddedState.scriptEmbedded.$S2",nextEmbedded:"@pop"}],[/<\/script/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}]],style:[[/\{\{/,{token:"@rematch",switchTo:"@handlebarsInSimpleState.style"}],[/type/,"attribute.name","@styleAfterType"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/>/,{token:"delimiter.html",next:"@styleEmbedded.text/css",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/(<\/)(style\s*)(>)/,["delimiter.html","tag.html",{token:"delimiter.html",next:"@pop"}]]],styleAfterType:[[/\{\{/,{token:"@rematch",switchTo:"@handlebarsInSimpleState.styleAfterType"}],[/=/,"delimiter","@styleAfterTypeEquals"],[/>/,{token:"delimiter.html",next:"@styleEmbedded.text/css",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleAfterTypeEquals:[[/\{\{/,{token:"@rematch",switchTo:"@handlebarsInSimpleState.styleAfterTypeEquals"}],[/"([^"]*)"/,{token:"attribute.value",switchTo:"@styleWithCustomType.$1"}],[/'([^']*)'/,{token:"attribute.value",switchTo:"@styleWithCustomType.$1"}],[/>/,{token:"delimiter.html",next:"@styleEmbedded.text/css",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleWithCustomType:[[/\{\{/,{token:"@rematch",switchTo:"@handlebarsInSimpleState.styleWithCustomType.$S2"}],[/>/,{token:"delimiter.html",next:"@styleEmbedded.$S2",nextEmbedded:"$S2"}],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleEmbedded:[[/\{\{/,{token:"@rematch",switchTo:"@handlebarsInEmbeddedState.styleEmbedded.$S2",nextEmbedded:"@pop"}],[/<\/style/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}]],handlebarsInSimpleState:[[/\{\{\{?/,"delimiter.handlebars"],[/\}\}\}?/,{token:"delimiter.handlebars",switchTo:"@$S2.$S3"}],{include:"handlebarsRoot"}],handlebarsInEmbeddedState:[[/\{\{\{?/,"delimiter.handlebars"],[/\}\}\}?/,{token:"delimiter.handlebars",switchTo:"@$S2.$S3",nextEmbedded:"$S3"}],{include:"handlebarsRoot"}],handlebarsRoot:[[/"[^"]*"/,"string.handlebars"],[/[#/][^\s}]+/,"keyword.helper.handlebars"],[/else\b/,"keyword.helper.handlebars"],[/[\s]+/],[/[^}]/,"variable.parameter.handlebars"]]}}}}]);
//# sourceMappingURL=3703.c3b1adae.js.map