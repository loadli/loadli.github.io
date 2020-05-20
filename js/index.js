var rule = {
  html: [
    { regex: /(?<=&lt;\w*-?\w*)\s[^v@:\.]\w*/g,  css: "c-keyword", }, // id,class
    { regex: /(?<="{\s)\w+/g,                    css: "c-keyword", }, // { * :
    { regex: /\w+\s(?=}")/g,                     css: "c-keyword", }, // : }
    { regex: /(?<=")\w+(?=\()/g,                 css: "c-keyword", }, // "a(a)
    { regex: /(?<={{.*):/g,                      css: "c-sign",    }, // {{ :
    { regex: /(?<=[:@.]\w*=")\w+/g,              css: "c-var",     }, // :a="a"
    { regex: /(?<=v-\w*-?\w*=")\w+/g,            css: "c-var",     }, // v-if="a"
    { regex: /(?<=\=")\w*/g,                     css: "c-id",      }, // id="a"
    { regex: /(?<=&lt;\/?)\w*-?\w*/g,            css: "c-keyword", }, // div
    { regex: /(?<=\s)v-\w*-?\w*/g,               css: "c-attr-v",  }, // v-if,v-else,v-show,v-model
    { regex: /v-\w*.?\w*/g,                      css: "c-attr-v",  }, // v-a.a
    { regex: /(?<=\()\w+/g,                      css: "c-var",     }, // "(*"
    { regex: /\w+(?=\))/g,                       css: "c-var",     }, // "*) "
    { regex: /,\s/g,                             css: "c-sign",    }, // "*) "
    { regex: /(?<=\sin\s)\w*/g,                  css: "c-var",     }, // in *
    { regex: /\sin\s/g,                          css: "c-sign",    }, // in
    { regex: /\w*(?=\(\))/g,                     css: "c-attr",    }, // {{ .a() }}
    { regex: /(?<={{\s)\w*/g,                    css: "c-var",     }, // {{ a }}
    { regex: /'\w*'/g,                           css: "c-id",      }, // {{ 'a' }}
    { regex: /[\+\?\']/g,                        css: "c-sign",    }, // {{ +?.:'' }}
    { regex: /:\w*/g,                            css: "c-attr-v",  }, // :
    { regex: /@\w*/g,                            css: "c-attr-v",  }, // @
    { regex: /\.\w+/g,                           css: "c-attr-v",  }, // .
    { regex: /\.\.\./g,                          css: "c-default", }, // ...
    { regex: /\./g,                              css: "c-sign",    }, // {{ . }}
    { regex: /{{\s?/g,                           css: "c-sign",    }, // {{
    { regex: /\s?}}/g,                           css: "c-sign",    }, // }}
    { regex: /{\s?/g,                            css: "c-tag",     }, // {
    { regex: /\s?}/g,                            css: "c-tag",     }, // }
    { regex: /\(\)/g,                            css: "c-default", }, // ()
    { regex: /\(/g,                              css: "c-keyword", }, // (
    { regex: /\)/g,                              css: "c-keyword", }, // )
    { regex: /\s?}/g,                            css: "c-tag",     }, // {
    { regex: /(?<=\w*?)\=?\"/g,                  css: "c-sign",    }, // =""
    { regex: /&lt;/g,                            css: "c-tag",     }, // <
    { regex: /&gt;/g,                            css: "c-tag",     }, // >
    { regex: /\//g,                              css: "c-tag",     }, // /
    
  ],
  js:[
    { regex: /(?<=components:\s{)\s*\w+,?\s?\w+/g,
                                                 css: "c-var",     }, // {a,b}
    { regex: /data(?=:\s?function)/g,            css: "c-default", }, // data
    { regex: /\w+(?=:\s?function)/g,             css: "c-attr",    }, // function
    { regex: /(?<=\.)component/g,                css: "c-component",}, // component
    { regex: /Vue/g,                             css: "c-var",     }, // component
    { regex: /Number,|String,|Object,|Array,|Function,|Boolean,/g,
                                                 css: "c-type",    }, // type
    { regex: /true|false/g,                      css: "c-attr",    }, // true|false
    { regex: /\.\w+/g,                           css: "c-var",     }, // .a
    { regex: /this/g,                            css: "c-this",    }, // this
    { regex: /function/g,                        css: "c-var",     }, // function
    { regex: /computed|watch/g,                  css: "c-var",     }, // computed|watch
    { regex: /(?<=\()\w+,?\s?\w+/g,              css: "c-var",     }, // (a,b)
    { regex: /(?<={.+)\w+(?=.+function)/g,       css: "c-attr",    }, // /
    { regex: /(?<=").+(?=")/g,                   css: "c-id",      }, // ""
    { regex: /(?<=').+(?=')/g,                   css: "c-id",      }, // ''
    { regex: /return/g,                          css: "c-keyword", }, // return
    { regex: /{\s?/g,                            css: "c-sign",    }, // {
    { regex: /\s?}/g,                            css: "c-sign",    }, // }
    { regex: /\(/g,                              css: "c-sign",    }, // (
    { regex: /\)/g,                              css: "c-sign",    }, // )
    { regex: /'/g,                              css: "c-sign",     }, // )
    { regex: /,/g,                              css: "c-sign",     }, // )
  ],
  modifier:[
    { regex: /\.\w+/g,                           css: "c-attr-v",  }, // .*
  ],
  hook:[
    { regex: /\w+/g,                             css: "c-attr-v",  }, // *
  ],
  library:[
    { regex: /Vue\s\w+/g,                        css: "c-library", }, // Vue *
    { regex: /Nuxt\.js/g,                        css: "c-library", }, // Vue *
    { regex: /.+。/g,                            css: "c-chinese", }, // Vue *
  ],
}


var main = {
  // 字符转义
  formatCode: function (code) {
    return code.replace(/&/g, "&amp;")
               .replace(/</g, "&lt;")
               .replace(/>/g, "&gt;");
  },

  // 高亮代码
  hightCode: function (code,regex) {
    var beforeCode = code;  // 转换前的代码
    var regexList  = regex; // 转换规则
    var afterCode  = [];     // 转换完成

    afterCode.push(beforeCode); // 初始化完成列表

    /*
    * 全局匹配正则，分割匹配到的文本，替换html后，重新组合数组
    * 以规则为第一循环，避免出现规则重叠的部分二次替换，结果错乱
    * #off#是转换完成标志
    */
    regexList.forEach(function (ruleObj) {
      var changeList = [];   // 正在转换

      afterCode.forEach(function(row){

        // 完成转换的不进行后面的规则匹配，添加到完成列表
        if(row.indexOf("#off#") > -1){
          changeList.push(row)
          return false;
        }

        var match = row.match(ruleObj.regex); // 当前规则匹配结果
        if(!match){
           // 不符合，添加到完成列表
          changeList.push(row);
        }else{
          // 符合，进行分割替换成html
          var splitRow = row.split(ruleObj.regex); // 分割当前行

          splitRow.forEach(function(v,i) {
            if(match[i]){
              // 替换成html
              match[i] = `#off#<span class="${ruleObj.css}">${match[i]}</span>`;
            }
            // 添加到完成列表
            changeList.push(v);
            changeList.push(match[i] || ""); //分割结果比匹配结果多1，增加undefined处理
          });
        }
      })

      // 这一条规则完成转换，完成数据存到完成列表，再进行下一条规则
      afterCode = changeList;

    });

    // 每行
    // text = text.replace(/(.+)\n?/g, `<p class="row">${"$1"}</p>`);

    return afterCode.join('')
                    .replace(/#off#/g,'') //去掉完成标志
                    .replace(/<span class="c-\w*">\s?<\/span>/g, ""); // 去掉产生的空标签
  },

  // 组装代码框的HTML
  packCode: function (obj) {
    var style  = obj.style || "";   // 样式
    var depict = obj.depict || "";  // 描述
    var code   = obj.code;          // 代码
    var images = obj.images || "";  // 左侧图片（数组）
    var help   = obj.help || "";    // 帮助图片（数组）

    var style1 = "";
    var style2 = "";

    switch (style) {
      case 1:
        style1 = "s-1" // 描述转行内
          break;
      case 2:
        style2 = "left-12" // margin左侧12em
          break;
      case 3:
        style2 = "left-10" // margin左侧10em
          break;          
      default:
        style1 = "";
        style2 = "";
        break;
    }

    var depictHtml = depict == "" ? "" : `<h3 class="depict ${style1}">${depict}</h3>`;
    var helpHtml = "";
    if(help){
      var imgList = "";
      help.forEach(function(imgClass){
        imgList += `<div class="help ${imgClass}"></div>`
      })
      helpHtml = `<div class="help-box">${imgList}</div>`
    };

    var codeHtml   = code;
    var imagesHtml = "";
    if(images){
      var imgList = "";
      images.forEach(function(imgClass){
        imgList += `<div class="images ${imgClass}"></div>`
      })
      imagesHtml = `<div class="images-box">${imgList}</div>`
    };


    return `<div class="group">
              ${depictHtml}
              ${imagesHtml}
              <pre class="code ${style2}"><code>${codeHtml}</code></pre>
              ${helpHtml}
            </div>`;
  },

  // 组装模块的HTML
  packModule: function (obj,html) {
    var title = obj.title;       // 标题
    var html  = html || "";      // 详细
    var icon  = obj.icon || "";  // 图标

    if(icon){
      icon =`<div class="icon ${icon}"></div>`;
    }
    return template = `<div class="module">
                          <h2 class="title">${title}</h2>
                          ${icon}
                          ${html}
                    </div>`;
  },

  // 页面插入html
  show: function(dom,html){
    dom.innerHTML += html;
  },

  load: function (data) {
    var _this = this;
    var moduleHTml = "";
    data.forEach(function (item, index) {
      var codeHtml = "";
      item.group.forEach(function (v, i) {
        v.code = _this.formatCode(v.code);
        v.code = _this.hightCode(v.code,rule[v.type]);
        codeHtml += _this.packCode(v);
      });
      moduleHTml += _this.packModule(item,codeHtml);
    });
    // 
    var halfHtml = `<div class="half">
                      ${moduleHTml}
                    </div>`;
    _this.show(_this.elemement,halfHtml);
  },

  elemement: ""
};

main.elemement = document.getElementById("content");
main.load(page1_1);
main.load(page1_2);
main.load(page2_1);
main.load(page2_2);
