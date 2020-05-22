// type：html,js,modifier,hook,library
// mode：样式
// depict：描述
// code：代码
var page1_1 =[
  {
    title: "表达式",
    icon:"",
    group: [
      {
        type: "html",
        depict: "",
        code: `<div id="app">
    <p>I have a {{ product }}</p>
    <p>{{ product + 's' }}</p>
    <p>{{ isWorking ? 'YES' : 'NO' }}</p>
    <p>{{ product.getSalePrice() }}</p>
</div>`,
      },
    ],
  },
  {
    title: "指令",
    icon:"",
    group: [
      {
        type: "html",
        depict: "根据布尔值插入/删除元素：",
        code: `<p v-if="inStock">{{ product }}</p>`,
      },
      {
        type: "html",
        depict: "",
        code: `<p v-else-if="onSale">...</p>
<p v-else>...</p>`,
      },
      {
        type: "html",
        depict: "切换元素的display:none属性：",
        code: `<p v-show="showProductDetails">...</p>`,
      },
      {
        type: "html",
        depict: "双向数据绑定：",
        code: `<input v-model="firstName">`,
      },
      {
        type: "html",
        style: 1,
        depict: "使用change事件同步值：",
        code: `v-model.lazy="..."`,
      },
      {
        type: "html",
        style: 1,
        depict: "输入值转为数值型：",
        code: `v-model.number="..."`,
      },
      {
        type: "html",
        style: 1,
        depict: "去除首尾空格：",
        code: `v-model.trim="..."`,
      },       
    ],
  },
  {
    title: "列表渲染",
    icon:"",
    group: [
      {
        type: "html",
        depict: "",
        help:["h-key"],
        code: `<li v-for="item in items" :key="item.id">
    {{ item }}
</li>
`,
      },
      {
        type: "html",
        depict: "访问数组索引：",
        code: `<li v-for="(item, index) in items">...`,
      },
      {
        type: "html",
        depict: "遍历对象：",
        code: `<li v-for="(value, key) in object">...`,
      },
      {
        type: "html",
        depict: "组件使用v-for：",
        code: `<cart-product v-for="item in products"
              :product="item" :key="item.id">`,
      },
    ],
  },
  {
    title: "",
    group: [
      {
        type:"block",
        html:`<div class="block ps">
          <div class="word">
            <p class="from">😛花0.65秒记住网址：<span class="mylink">haokui.net</span>（好亏）╥﹏╥</p>
          </div>
        </div>
        `
      }
    ],
  },
];
var page1_2 =[
  {
    title: "绑定",
    icon:"i-binding",
    group: [
      {
        type: "html",
        depict: "",
        help:["h-bind"],
        code: `<a v-bind:href="url">...</a>`,
      },
      {
        type: "html",
        depict: "",
        style: 2,
        code: `<a :href="url">...</a>`,
      },
      {
        type: "html",
        depict: "通过true/false添加或删除html属性：",
        code: `<button :disabled="isButtonDisabled">...`,
      },
      {
        type: "html",
        depict: "isActive为true时，添加active类名：",
        code: `<div :class="{ active: isActive }">...`,
      },
      {
        type: "html",
        depict: "字体颜色设置为activeColor的值：",
        code: `<div :style="{ color: activeColor }">`,
      },      
    ],
  }, 
  {
    title: "动作 / 事件",
    icon:"i-actions",
    group: [
      {
        type: "html",
        depict: "在组件上调用addToCart方法：",
        help:["h-action"],
        code: `<button v-on:click="addToCart">...`,
      },
      {
        type: "html",
        depict: "",
        style: 3,
        code: `<button @click="addToCart">...`,
      },
      {
        type: "html",
        depict: "可以传递参数：",
        code: `<button @click="addToCart(product)">...`,
      },
      {
        type: "html",
        depict: "阻止事件默认行为（例如页面重新加载）：",
        code: `<form @submit.prevent="addProduct">...`,
      },
      {
        type: "html",
        depict: "只触发一次：",
        code: `<img @mouseover.once="showImage">...`,
      },
      {
        type: "html",
        style: 1,
        depict: "阻止事件冒泡",
        code: `.stop`,
      }, 
      {
        type: "html",
        style: 1,
        depict: "只有元素本身才能触发事件",
        code: `.self`,
      }, 
      {
        type: "html",
        depict: "键盘输入示例：",
        code: `<input @keyup.enter="submit">`,
      },
      {
        type: "html",
        depict: "按下Ctrl+C时调用onCopy：",
        code: `<input @keyup.ctrl.c="onCopy">`,
      },
      {
        type: "modifier",
        depict: "键位修饰符：",
        code: `.tab       .up       .ctrl
.delete    .down     .alt
.esc       .left     .shift
.space     .right    .meta`,
      }, 
      {
        type: "modifier",
        depict: "鼠标修饰符：",
        code: `.left    .right     .middle`,
      },       
    ],
  }, 
];
var page2_1 =[
  {
    title: "组件解析",
    icon:"i-component",
    group: [
      {
        type: "js",
        depict: "",
        images:["i-component1","i-component2","i-component3"],
        help:[
          "h-component-1",
          "h-component-2",
          "h-component-3",
          "h-component-4",
          "h-component-5",
          "h-component-6",
          "h-component-7"
        ],
        code: `Vue.component('my-component', {
  components: {
      ProductComponent, ReviewComponent
  },
  props: {
    message: String,
    product: Object,
    email: {
      type: String,
      required: true,
      default: "none",
      validator: function (value) {

      }
    }
  },
  data: function() {
    return {
      firstName: 'Vue',
      lastName: 'Mastery'
    }
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  },
  watch: {
    firstName: function (value, oldValue) {
      ...
    }
  },
  methods: { ... },
  template: '<span>{{ message }}</span>',
})

`,
      }      
    ],
  },
  {
    title: "自定义事件",
    group: [
      {
        type: "html",
        depict: "props(如上)是将数据传递给子组件，自定义事件是将数据传给父组件。<br/><br/>在组件的父级上写监听方法",
        code: `<button-counter v-on:incrementBy="incWithVal">`,
      },
      {
        type: "js",
        depict: "父组件写法:",
        code: `methods: {
  incWithVal: function (toAdd) { ... }
}`,
      },
      {
        type: "js",
        help:["h-custom"],
        depict: "在子组件button-counter内部写：",
        code: `this.$emit('incrementBy', 5)`,
      },
    ],
  },
  {
    title: "",
    group: [
      {
        type:"block",
        html:`<div class="block ps">
          <div class="logo-m"></div>
          <div class="word">
            <p class="from">原文来自VueMastery出品的PDF</p>
            <a class="link" href="https://www.VueMastery.com">VueMastery.com</a>
          </div>
        </div>
        `
      }
    ],
  },  
];
var page2_2 =[
  {
    title: "生命周期钩子",
    icon:"i-hook",
    group: [
      {
        type: "hook",
        depict: "",
        code: `beforeCreate   beforeUpdate
created        updated
beforeMount    beforeDestroy
mounted        destroyed`,
      },      
    ],
  },
  {
    title: "使用单插槽",
    icon:"i-slot",
    group: [
      {
        type: "html",
        depict: "组件模板",
        code: `<div>
  <h2>I'm a title</h2>
    <slot>
      Only displayed if no slot content
    </slot>
</div>`,
     },
     {
        type: "html",
        depict: "组件和插槽一起用",
        code: `<my-component>
  <p>This will go in the slot</p>
</my-component>`,
      },      
    ],
  },
  {
    title: "多个插槽",
    icon:"",
    group: [
      {
        type: "html",
        depict: "组件写法",
        code: `<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot>Default content</slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>`,
     },
     {
        type: "html",
        depict: "带插槽的组件用法:",
        code: `<app-layout>
  <h1 slot="header">Page title</h1>
  <p>the main content.</p>
  <p slot="footer">Contact info</p>
</app-layout>`,
      },      
    ],
  },
  {
    title: "你应该知道的知识",
    icon:"",
    group: [
      {
        type: "library",
        depict: "",
        code: `Vue CLI
命令行工具，用于快速的Vue开发。        
Vue Router
单页应用的路由管理器。
Vue DevTools
用于调试Vue应用程序的浏览器扩展。
Nuxt.js
用于服务器端渲染、代码拆分、热加载、静态生成等的库。`,
     }     
    ],
  }
];