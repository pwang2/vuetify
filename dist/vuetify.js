(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Vuetify"] = factory();
	else
		root["Vuetify"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    dark: Boolean,
    light: Boolean
  }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = createSimpleFunctional;
/* harmony export (immutable) */ __webpack_exports__["d"] = createSimpleTransition;
/* harmony export (immutable) */ __webpack_exports__["b"] = createJavaScriptTransition;
/* harmony export (immutable) */ __webpack_exports__["e"] = directiveConfig;
/* harmony export (immutable) */ __webpack_exports__["a"] = addOnceEventListener;
/* harmony export (immutable) */ __webpack_exports__["f"] = getObjectValueByPath;
/* unused harmony export createRange */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function createSimpleFunctional(c) {
  var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'div';

  return {
    functional: true,

    render: function render(h, _ref) {
      var data = _ref.data,
          children = _ref.children;

      data.staticClass = (c + ' ' + (data.staticClass || '')).trim();

      return h(el, data, children);
    }
  };
}

function createSimpleTransition(name) {
  var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top center 0';
  var mode = arguments[2];

  return {
    functional: true,

    props: {
      origin: {
        type: String,
        default: origin
      }
    },

    render: function render(h, context) {
      context.data = context.data || {};
      context.data.props = { name: name };
      context.data.on = context.data.on || {};

      if (mode) context.data.props.mode = mode;

      context.data.on.beforeEnter = function (el) {
        el.style.transformOrigin = origin;
        el.style.webkitTransformOrigin = origin;
      };

      return h('transition', context.data, context.children);
    }
  };
}

function createJavaScriptTransition(name, functions) {
  var css = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'in-out';

  return {
    functional: true,

    props: {
      css: {
        type: Boolean,
        default: css
      },
      mode: {
        type: String,
        default: mode
      }
    },

    render: function render(h, context) {
      var data = {
        props: _extends({}, context.props, {
          name: name
        }),
        on: functions
      };

      return h('transition', data, context.children);
    }
  };
}

function directiveConfig(binding) {
  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return Object.assign({}, defaults, binding.modifiers, { value: binding.arg }, binding.value || {});
}

function addOnceEventListener(el, event, cb) {
  var once = function once() {
    cb();
    el.removeEventListener(event, once, false);
  };

  el.addEventListener(event, once, false);
}

function getObjectValueByPath(obj, path) {
  // credit: http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
  if (!path || path.constructor !== String) return;
  path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  path = path.replace(/^\./, ''); // strip a leading dot
  var a = path.split('.');
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (obj.constructor === Object && k in obj) {
      obj = obj[k];
    } else {
      return;
    }
  }
  return obj;
}

function createRange(length) {
  return [].concat(_toConsumableArray(Array.from({ length: length }, function (v, k) {
    return k;
  })));
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      isActive: !!this.value
    };
  },


  props: {
    value: {
      required: false
    }
  },

  watch: {
    value: function value(val) {
      this.isActive = !!val;
    },
    isActive: function isActive(val) {
      !!val !== this.value && this.$emit('input', val);
    }
  }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_contextualable__ = __webpack_require__(5);



/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_contextualable__["a" /* default */]],

  props: {
    disabled: Boolean,
    fa: Boolean,
    mdi: Boolean,
    large: Boolean,
    left: Boolean,
    medium: Boolean,
    right: Boolean,
    xLarge: Boolean
  },

  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        _ref$children = _ref.children,
        children = _ref$children === undefined ? [] : _ref$children;

    if (props.fa || props.mdi) console.warn('The v-icon prop \'fa\' and \'mdi\' will be deprecated in the next release. Use \'fa\' or \'mdi\' prefix in icon name instead.');
    var iconName = '';
    var iconType = 'material-icons';

    if (children.length) {
      iconName = children.pop().text;
    } else if (data.domProps && data.domProps.textContent) {
      iconName = data.domProps.textContent;
      delete data.domProps.textContent;
    } else if (data.domProps && data.domProps.innerHTML) {
      iconName = data.domProps.innerHTML;
      delete data.domProps.innerHTML;
    }

    var thirdPartyIcon = iconName.indexOf('-') > -1;
    if (thirdPartyIcon) iconType = iconName.slice(0, iconName.indexOf('-'));

    // To keep things backwards compatible for now
    iconType = props.fa ? 'fa' : props.mdi ? 'mdi' : iconType;

    data.staticClass = (iconType + ' icon ' + (data.staticClass || '')).trim();
    data.attrs = data.attrs || {};

    var classes = {
      'icon--large': props.large,
      'icon--left': props.left,
      'icon--medium': props.medium,
      'icon--right': props.right,
      'icon--x-large': props.xLarge,
      'primary--text': props.primary,
      'secondary--text': props.secondary,
      'success--text': props.success,
      'info--text': props.info,
      'warning--text': props.warning,
      'error--text': props.error,
      'theme--dark': props.dark,
      'theme--light': props.light
    };

    var iconClasses = Object.keys(classes).filter(function (k) {
      return classes[k];
    }).join(' ');
    iconClasses && (data.staticClass += ' ' + iconClasses);

    // To keep things backwards compatible for now
    if (props.fa || props.mdi) {
      var comparison = props.fa ? 'fa' : 'mdi';

      if (iconName.indexOf(' ') > -1) data.staticClass += ' ' + comparison + '-' + iconName;else data.staticClass += ' ' + comparison + '-' + iconName.split(' ').join('-');
    }

    if (thirdPartyIcon) data.staticClass += ' ' + iconName;
    if (props.disabled) data.attrs.disabled = props.disabled;
    !(thirdPartyIcon || props.fa || props.mdi) && children.push(iconName);

    return h('i', data, children);
  }
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__themeable__ = __webpack_require__(0);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__themeable__["a" /* default */]],

  data: function data() {
    return {
      errorBucket: [],
      focused: false,
      tabFocused: false,
      lazyValue: this.value
    };
  },


  props: {
    appendIcon: String,
    appendIconCb: Function,
    disabled: Boolean,
    error: Boolean,
    errorMessages: {
      type: [String, Array],
      default: function _default() {
        return [];
      }
    },
    hint: String,
    hideDetails: Boolean,
    label: String,
    persistentHint: Boolean,
    placeholder: String,
    prependIcon: String,
    prependIconCb: Function,
    required: Boolean,
    rules: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    tabindex: {
      default: 0
    },
    value: {
      required: false
    }
  },

  computed: {
    hasError: function hasError() {
      return this.validations.length || this.error;
    },
    inputGroupClasses: function inputGroupClasses() {
      return Object.assign({
        'input-group': true,
        'input-group--focused': this.focused,
        'input-group--dirty': this.isDirty,
        'input-group--tab-focused': this.tabFocused,
        'input-group--disabled': this.disabled,
        'input-group--error': this.hasError,
        'input-group--append-icon': this.appendIcon,
        'input-group--prepend-icon': this.prependIcon,
        'input-group--required': this.required,
        'input-group--hide-details': this.hideDetails,
        'input-group--placeholder': !!this.placeholder,
        'theme--dark': this.dark,
        'theme--light': this.light
      }, this.classes);
    },
    isDirty: function isDirty() {
      return this.inputValue;
    },
    modifiers: function modifiers() {
      var modifiers = {
        lazy: false,
        number: false,
        trim: false
      };

      if (!this.$vnode.data.directives) {
        return modifiers;
      }

      var model = this.$vnode.data.directives.find(function (i) {
        return i.name === 'model';
      });

      if (!model) {
        return modifiers;
      }

      return Object.assign(modifiers, model.modifiers);
    },
    validations: function validations() {
      return (!Array.isArray(this.errorMessages) ? [this.errorMessages] : this.errorMessages).concat(this.errorBucket);
    }
  },

  watch: {
    rules: function rules() {
      this.validate();
    }
  },

  mounted: function mounted() {
    this.validate();
  },


  methods: {
    genLabel: function genLabel() {
      var data = {};

      if (this.id) data.attrs = { for: this.id };

      return this.$createElement('label', data, this.label);
    },
    genMessages: function genMessages() {
      var _this = this;

      var messages = [];

      if ((this.hint && this.focused || this.hint && this.persistentHint) && this.validations.length === 0) {
        messages = [this.genHint()];
      } else if (this.validations.length) {
        messages = this.validations.map(function (i) {
          return _this.genError(i);
        });
      }

      return this.$createElement('transition-group', {
        'class': 'input-group__messages',
        props: {
          tag: 'div',
          name: 'slide-y-transition'
        }
      }, messages);
    },
    genHint: function genHint() {
      return this.$createElement('div', {
        'class': 'input-group__hint',
        key: this.hint,
        domProps: { innerHTML: this.hint }
      });
    },
    genError: function genError(error) {
      return this.$createElement('div', {
        'class': 'input-group__error',
        key: error
      }, error);
    },
    genIcon: function genIcon(type) {
      var _class;

      var icon = this[type + 'Icon'];
      var cb = this[type + 'IconCb'];
      var hasCallback = typeof cb === 'function';

      return this.$createElement('v-icon', {
        'class': (_class = {}, _defineProperty(_class, 'input-group__' + type + '-icon', true), _defineProperty(_class, 'input-group__icon-cb', hasCallback), _class),
        on: {
          click: function click(e) {
            hasCallback && cb(e);
          }
        }
      }, icon);
    },
    genInputGroup: function genInputGroup(input) {
      var _this2 = this;

      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var children = [];
      var wrapperChildren = [];
      var detailsChildren = [];

      data = Object.assign({}, {
        'class': this.inputGroupClasses,
        attrs: {
          tabindex: this.tabindex
        },
        on: {
          blur: function blur() {
            return _this2.tabFocused = false;
          },
          click: function click() {
            return _this2.tabFocused = false;
          },
          keyup: function keyup(e) {
            if ([9, 16].includes(e.keyCode)) {
              _this2.tabFocused = true;
            }
          },
          keydown: function keydown(e) {
            if (!_this2.toggle) return;

            if ([13, 32].includes(e.keyCode)) {
              e.preventDefault();
              _this2.toggle();
            }
          }
        }
      }, data);

      if (this.label) {
        children.push(this.genLabel());
      }

      wrapperChildren.push(input);

      if (this.prependIcon) {
        wrapperChildren.unshift(this.genIcon('prepend'));
      }

      if (this.appendIcon) {
        wrapperChildren.push(this.genIcon('append'));
      }

      children.push(this.$createElement('div', {
        'class': 'input-group__input'
      }, wrapperChildren));

      detailsChildren.push(this.genMessages());
      this.counter && detailsChildren.push(this.genCounter());

      children.push(this.$createElement('div', {
        'class': 'input-group__details'
      }, detailsChildren));

      return this.$createElement('div', data, children);
    },
    validate: function validate() {
      var _this3 = this;

      this.errorBucket = [];

      this.rules.forEach(function (rule) {
        var valid = typeof rule === 'function' ? rule(_this3.value) : rule;

        if (valid !== true) {
          _this3.errorBucket.push(valid);
        }
      });
    }
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    primary: Boolean,
    secondary: Boolean,
    success: Boolean,
    info: Boolean,
    warning: Boolean,
    error: Boolean
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    append: Boolean,
    disabled: Boolean,
    exact: Boolean,
    href: [String, Object],
    to: [String, Object],
    nuxt: Boolean,
    replace: Boolean,
    router: Boolean,
    ripple: {
      type: Boolean,
      default: true
    },
    tag: String
  },

  methods: {
    click: function click() {},
    generateRouteLink: function generateRouteLink() {
      var exact = this.exact;
      var tag = void 0;

      var data = {
        attrs: { disabled: this.disabled },
        class: this.classes,
        props: {},
        directives: [{
          name: 'ripple',
          value: this.ripple || false
        }],
        on: Object.assign({
          click: this.click
        }, this.$listeners || {})
      };

      if (!this.exact) {
        exact = this.href === '/' || this.to === '/' || this.href === Object(this.href) && this.href.path === '/' || this.to === Object(this.to) && this.to.path === '/';
      }

      if (this.to) {
        tag = this.nuxt ? 'nuxt-link' : 'router-link';
        data.props.to = this.to;
        data.props.exact = exact;
        data.props.activeClass = this.activeClass;
        data.props.append = this.append;
        data.props.replace = this.replace;
      } else {
        tag = this.href && 'a' || this.tag || 'a';

        if (tag === 'a') {
          data.attrs.href = this.href || 'javascript:;';
        }
      }

      return { tag: tag, data: data };
    }
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_contextualable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_positionable__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_route_link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_toggleable__ = __webpack_require__(2);






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-btn',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_contextualable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_route_link__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_positionable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_themeable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_toggleable__["a" /* default */]],

  props: {
    activeClass: {
      type: String,
      default: 'btn--active'
    },
    block: Boolean,
    fab: Boolean,
    flat: Boolean,
    icon: Boolean,
    large: Boolean,
    loading: Boolean,
    outline: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: true
    },
    round: Boolean,
    small: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'button'
    }
  },

  computed: {
    classes: function classes() {
      return {
        'btn': true,
        'btn--absolute': this.absolute,
        'btn--active': this.isActive,
        'btn--block': this.block,
        'btn--bottom': this.bottom,
        'btn--disabled': this.disabled,
        'btn--flat': this.flat,
        'btn--floating': this.fab,
        'btn--fixed': this.fixed,
        'btn--hover': this.hover,
        'btn--icon': this.icon,
        'btn--large': this.large,
        'btn--left': this.left,
        'btn--loader': this.loading,
        'btn--outline': this.outline,
        'btn--raised': !this.flat,
        'btn--right': this.right,
        'btn--round': this.round,
        'btn--small': this.small,
        'btn--top': this.top,
        'theme--dark': this.dark,
        'theme--light': this.light,
        'primary': this.primary && !this.outline,
        'secondary': this.secondary && !this.outline,
        'success': this.success && !this.outline,
        'info': this.info && !this.outline,
        'warning': this.warning && !this.outline,
        'error': this.error && !this.outline,
        'primary--text': this.primary && (this.outline || this.flat),
        'secondary--text': this.secondary && (this.outline || this.flat),
        'success--text': this.success && (this.outline || this.flat),
        'info--text': this.info && (this.outline || this.flat),
        'warning--text': this.warning && (this.outline || this.flat),
        'error--text': this.error && (this.outline || this.flat)
      };
    }
  },

  methods: {
    // Prevent focus to match md spec
    click: function click(e) {
      !this.fab && e.detail && this.$el.blur();

      this.$emit('click', e);
    },
    genContent: function genContent() {
      return this.$createElement('div', { 'class': 'btn__content' }, [this.$slots.default]);
    },
    genLoader: function genLoader() {
      var children = [];

      if (!this.$slots.loader) {
        children.push(this.$createElement('v-progress-circular', {
          props: {
            indeterminate: true,
            size: 26
          }
        }));
      } else {
        children.push(this.$slots.loader);
      }

      return this.$createElement('span', { 'class': 'btn__loading' }, children);
    }
  },

  render: function render(h) {
    var _generateRouteLink = this.generateRouteLink(),
        tag = _generateRouteLink.tag,
        data = _generateRouteLink.data;

    var children = [this.genContent()];

    tag === 'button' && (data.attrs.type = this.type);
    this.loading && children.push(this.genLoader());

    return h(tag, data, children);
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VListTileActionText */
/* unused harmony export VListTileAvatar */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VListTileContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VListTileTitle; });
/* unused harmony export VListTileSubTitle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VList__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VListGroup__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VListTile__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VListTileAction__ = __webpack_require__(18);







var VListTileActionText = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["c" /* createSimpleFunctional */])('list__tile__action-text', 'span');
var VListTileAvatar = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["c" /* createSimpleFunctional */])('list__tile__avatar', 'v-avatar');
var VListTileContent = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["c" /* createSimpleFunctional */])('list__tile__content', 'div');
var VListTileTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["c" /* createSimpleFunctional */])('list__tile__title', 'div');
var VListTileSubTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["c" /* createSimpleFunctional */])('list__tile__sub-title', 'div');

/* harmony default export */ __webpack_exports__["c"] = ({
  VList: __WEBPACK_IMPORTED_MODULE_1__VList__["a" /* default */],
  VListTile: __WEBPACK_IMPORTED_MODULE_3__VListTile__["a" /* default */],
  VListGroup: __WEBPACK_IMPORTED_MODULE_2__VListGroup__["a" /* default */],
  VListTileAction: __WEBPACK_IMPORTED_MODULE_4__VListTileAction__["a" /* default */],
  VListTileActionText: VListTileActionText,
  VListTileAvatar: VListTileAvatar,
  VListTileContent: VListTileContent,
  VListTileTitle: VListTileTitle,
  VListTileSubTitle: VListTileSubTitle
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VCarouselTransition */
/* unused harmony export VCarouselReverseTransition */
/* unused harmony export VTabTransition */
/* unused harmony export VTabReverseTransition */
/* unused harmony export VMenuTransition */
/* unused harmony export VFabTransition */
/* unused harmony export VDialogTransition */
/* unused harmony export VDialogBottomTransition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VFadeTransition; });
/* unused harmony export VScaleTransition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VSlideXTransition; });
/* unused harmony export VSlideXReverseTransition */
/* unused harmony export VSlideYTransition */
/* unused harmony export VSlideYReverseTransition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VExpandTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expand_transition__ = __webpack_require__(47);




// Component specific transitions
var VCarouselTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleTransition */])('carousel-transition');
var VCarouselReverseTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleTransition */])('carousel-reverse-transition');
var VTabTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleTransition */])('tab-transition');
var VTabReverseTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleTransition */])('tab-reverse-transition');
var VMenuTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleTransition */])('menu-transition');
var VFabTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleTransition */])('fab-transition', 'center center', 'out-in');

// Generic transitions
var VDialogTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleTransition */])('dialog-transition');
var VDialogBottomTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleTransition */])('dialog-bottom-transition');
var VFadeTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleTransition */])('fade-transition');
var VScaleTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleTransition */])('scale-transition');
var VSlideXTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleTransition */])('slide-x-transition');
var VSlideXReverseTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleTransition */])('slide-x-reverse-transition');
var VSlideYTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleTransition */])('slide-y-transition');
var VSlideYReverseTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["d" /* createSimpleTransition */])('slide-y-reverse-transition');

// JavaScript transitions
var VExpandTransition = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["b" /* createJavaScriptTransition */])('expand-transition', __WEBPACK_IMPORTED_MODULE_1__expand_transition__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = ({
  VCarouselTransition: VCarouselTransition,
  VCarouselReverseTransition: VCarouselReverseTransition,
  VDialogTransition: VDialogTransition,
  VDialogBottomTransition: VDialogBottomTransition,
  VFabTransition: VFabTransition,
  VFadeTransition: VFadeTransition,
  VMenuTransition: VMenuTransition,
  VScaleTransition: VScaleTransition,
  VSlideXTransition: VSlideXTransition,
  VSlideXReverseTransition: VSlideXReverseTransition,
  VSlideYTransition: VSlideYTransition,
  VSlideYReverseTransition: VSlideYReverseTransition,
  VTabReverseTransition: VTabReverseTransition,
  VTabTransition: VTabTransition,
  VExpandTransition: VExpandTransition
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__badge__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__click_outside__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ripple__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__touch__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return __WEBPACK_IMPORTED_MODULE_0__badge__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutside", function() { return __WEBPACK_IMPORTED_MODULE_1__click_outside__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return __WEBPACK_IMPORTED_MODULE_2__ripple__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return __WEBPACK_IMPORTED_MODULE_3__tooltip__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return __WEBPACK_IMPORTED_MODULE_4__touch__["a"]; });








/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    absolute: Boolean,
    bottom: Boolean,
    fixed: Boolean,
    left: Boolean,
    right: Boolean,
    top: Boolean
  }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    contentClass: {
      default: ''
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.$vuetify.load(function () {
      if (_this._isDestroyed) return;

      var app = document.querySelector('[data-app]');

      if (!app) {
        return console.warn('Application is missing <v-app> component.');
      }

      app.insertBefore(_this.$refs.content, app.firstChild);
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.$refs.content) return;

    // IE11 Fix
    try {
      this.$refs.content.parentNode.removeChild(this.$refs.content);
    } catch (e) {}
  }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      overlay: null,
      overlayOffset: 0,
      overlayTransitionDuration: 500
    };
  },


  props: {
    hideOverlay: Boolean
  },

  beforeDestroy: function beforeDestroy() {
    this.removeOverlay();
  },


  methods: {
    genOverlay: function genOverlay() {
      var _this = this;

      if (!this.isActive || this.hideOverlay || this.isActive && this.overlay) return;

      this.overlay = document.createElement('div');
      this.overlay.className = 'overlay';
      this.overlay.onclick = function () {
        if (_this.permanent) return;else if (!_this.persistent) _this.isActive = false;else if (_this.isMobile) _this.isActive = false;
      };

      if (this.absolute) this.overlay.className += ' overlay--absolute';

      this.hideScroll();

      if (this.absolute) {
        // Required for IE11
        var parent = this.$el.parentNode;
        parent.insertBefore(this.overlay, parent.firstChild);
      } else {
        document.querySelector('[data-app]').appendChild(this.overlay);
      }

      this.overlay.clientHeight; // Force repaint
      requestAnimationFrame(function () {
        _this.overlay.className += ' overlay--active';
      });

      return true;
    },
    removeOverlay: function removeOverlay() {
      var _this2 = this;

      if (!this.overlay) {
        return this.showScroll();
      }

      this.overlay.classList.remove('overlay--active');

      setTimeout(function () {
        // IE11 Fix
        try {
          _this2.overlay.parentNode.removeChild(_this2.overlay);
          _this2.overlay = null;
          _this2.showScroll();
        } catch (e) {}
      }, this.overlayTransitionDuration);
    },
    hideScroll: function hideScroll() {
      // Check documentElement first for IE11
      // this.overlayOffset = document.documentElement &&
      //   document.documentElement.scrollTop ||
      //   document.body.scrollTop

      // document.body.style.top = `-${this.overlayOffset}px`
      // document.body.style.position = 'fixed'
      document.documentElement.style.overflow = 'hidden';
    },
    showScroll: function showScroll() {
      document.documentElement.removeAttribute('style');

      // if (!this.overlayOffset) return
      // document.body.scrollTop = this.overlayOffset
      // document.documentElement.scrollTop = this.overlayOffset
    }
  }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-list',

  provide: function provide() {
    return {
      listClick: this.listClick,
      listClose: this.listClose
    };
  },


  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  data: function data() {
    return {
      uid: null,
      groups: []
    };
  },


  props: {
    dense: Boolean,
    subheader: Boolean,
    threeLine: Boolean,
    twoLine: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'list': true,
        'list--two-line': this.twoLine,
        'list--dense': this.dense,
        'list--three-line': this.threeLine,
        'list--subheader': this.subheader,
        'theme--dark dark--bg': this.dark,
        'theme--light light--bg': this.light
      };
    }
  },

  watch: {
    uid: function uid() {
      var _this = this;

      this.$children.filter(function (i) {
        return i.$options._componentTag === 'v-list-group';
      }).forEach(function (i) {
        return i.toggle(_this.uid);
      });
    }
  },

  methods: {
    listClick: function listClick(uid, force) {
      if (force) {
        this.uid = uid;
      } else {
        this.uid = this.uid === uid ? null : uid;
      }
    },
    listClose: function listClose(uid) {
      if (this.uid === uid) {
        this.uid = null;
      }
    }
  },

  render: function render(h) {
    var data = {
      'class': this.classes,
      attrs: { 'data-uid': this._uid }
    };

    return h('ul', data, [this.$slots.default]);
  }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_route_link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives__ = __webpack_require__(10);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-list-tile',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_route_link__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__["a" /* default */]],

  directives: {
    Ripple: __WEBPACK_IMPORTED_MODULE_2__directives__["Ripple"]
  },

  inheritAttrs: false,

  props: {
    activeClass: {
      type: String,
      default: 'list__tile--active'
    },
    avatar: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'list__tile': true,
        'list__tile--active': this.isActive,
        'list__tile--avatar': this.avatar,
        'list__tile--disabled': this.disabled
      };
    }
  },

  render: function render(h) {
    var _generateRouteLink = this.generateRouteLink(),
        tag = _generateRouteLink.tag,
        data = _generateRouteLink.data;

    data.attrs = Object.assign({}, data.attrs, this.$attrs);

    return h('li', {
      attrs: {
        disabled: this.disabled
      }
    }, [h(tag, data, [this.$slots.default])]);
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function directive(e, el, binding, v) {
  var cb = function cb() {
    return true;
  };

  if (binding.value) cb = binding.value;

  if (v.context.isActive && e && e.target && e.target !== el && !el.contains(e.target) && cb(e)) {
    v.context.isActive = false;
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  bind: function bind(el, binding, v) {
    v.context.$vuetify.load(function () {
      var outside = document.querySelector('[data-app]');
      var click = function click(e) {
        return directive(e, el, binding, v);
      };
      outside.addEventListener('click', click, false);
      el._clickOutside = click;
    });
  },
  unbind: function unbind(el) {
    var outside = document.querySelector('[data-app]');
    outside && outside.removeEventListener('click', el._clickOutside, false);
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function style(el, value) {
  ['transform', 'webkitTransform'].forEach(function (i) {
    el.style[i] = value;
  });
}

var ripple = {
  show: function show(e, el, _ref) {
    var _ref$value = _ref.value,
        value = _ref$value === undefined ? {} : _ref$value;

    var container = document.createElement('span');
    var animation = document.createElement('span');

    container.appendChild(animation);
    container.className = 'ripple__container';

    if (value.class) {
      container.className += ' ' + value.class;
    }

    var size = el.clientWidth > el.clientHeight ? el.clientWidth : el.clientHeight;
    animation.className = 'ripple__animation';
    animation.style.width = size * (value.center ? 1 : 2) + 'px';
    animation.style.height = animation.style.width;

    el.appendChild(container);
    var computed = window.getComputedStyle(el);
    if (computed.position !== 'absolute' && computed.position !== 'fixed') el.style.position = 'relative';

    var offset = el.getBoundingClientRect();
    var x = value.center ? '50%' : e.clientX - offset.left + 'px';
    var y = value.center ? '50%' : e.clientY - offset.top + 'px';

    animation.classList.add('ripple__animation--enter');
    animation.classList.add('ripple__animation--visible');
    style(animation, 'translate(-50%, -50%) translate(' + x + ', ' + y + ') scale3d(0.01,0.01,0.01)');
    animation.dataset.activated = Date.now();

    setTimeout(function () {
      animation.classList.remove('ripple__animation--enter');
      style(animation, 'translate(-50%, -50%) translate(' + x + ', ' + y + ')  scale3d(0.99,0.99,0.99)');
    }, 0);
  },

  hide: function hide(el) {
    var ripples = el.getElementsByClassName('ripple__animation');

    if (ripples.length === 0) return;
    var animation = ripples[ripples.length - 1];
    var diff = Date.now() - Number(animation.dataset.activated);
    var delay = 400 - diff;

    delay = delay < 0 ? 0 : delay;

    setTimeout(function () {
      animation.classList.remove('ripple__animation--visible');

      setTimeout(function () {
        // Need to figure out a new way to do this
        try {
          if (ripples.length < 1) el.style.position = null;
          animation.parentNode && el.removeChild(animation.parentNode);
        } catch (e) {}
      }, 300);
    }, delay);
  }
};

function directive(el, binding, v) {
  if (binding.value === false) return;

  if ('ontouchstart' in window) {
    el.addEventListener('touchend', function () {
      return ripple.hide(el);
    }, false);
    el.addEventListener('touchcancel', function () {
      return ripple.hide(el);
    }, false);
  }

  el.addEventListener('mousedown', function (e) {
    return ripple.show(e, el, binding);
  }, false);
  el.addEventListener('mouseup', function () {
    return ripple.hide(el);
  }, false);
  el.addEventListener('mouseleave', function () {
    return ripple.hide(el);
  }, false);
}

function unbind(el, binding) {
  el.removeEventListener('touchstart', function (e) {
    return ripple.show(e, el, binding);
  }, false);
  el.removeEventListener('mousedown', function (e) {
    return ripple.show(e, el, binding);
  }, false);
  el.removeEventListener('touchend', function () {
    return ripple.hide(el);
  }, false);
  el.removeEventListener('touchcancel', function () {
    return ripple.hide(el);
  }, false);
  el.removeEventListener('mouseup', function () {
    return ripple.hide(el);
  }, false);
  el.removeEventListener('mouseleave', function () {
    return ripple.hide(el);
  }, false);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  bind: directive,
  unbind: unbind
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,

  name: 'list-tile-action',

  render: function render(h, _ref) {
    var data = _ref.data,
        children = _ref.children;

    data.staticClass = data.staticClass ? 'list__tile__action ' + (data.staticClass || '') : 'list__tile__action';
    if ((children || []).length > 1) data.staticClass += ' list__tile__action--stack';

    return h('div', data, children);
  }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_activator__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_detachable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_generators__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_position__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_utils__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_toggleable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_keyable__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives__ = __webpack_require__(10);










/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-menu',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_activator__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_detachable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_generators__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__mixins_keyable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_position__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_utils__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__mixins_toggleable__["a" /* default */]],

  directives: {
    ClickOutside: __WEBPACK_IMPORTED_MODULE_7__directives__["ClickOutside"]
  },

  data: function data() {
    return {
      autoIndex: null,
      dimensions: {
        activator: {
          top: 0, left: 0,
          bottom: 0, right: 0,
          width: 0, height: 0,
          offsetTop: 0, scrollHeight: 0
        },
        content: {
          top: 0, left: 0,
          bottom: 0, right: 0,
          width: 0, height: 0,
          offsetTop: 0, scrollHeight: 0
        },
        list: null,
        selected: null
      },
      direction: { vert: 'bottom', horiz: 'right' },
      isContentActive: false,
      isBooted: false,
      maxHeightAutoDefault: '200px',
      resizeTimeout: {},
      startIndex: 3,
      stopIndex: 0,
      tileLength: 0,
      window: {},
      absoluteX: 0,
      absoluteY: 0,
      insideContent: false,
      hasJustFocused: false,
      focusedTimeout: {}
    };
  },


  props: {
    top: Boolean,
    left: Boolean,
    bottom: Boolean,
    right: Boolean,
    fullWidth: Boolean,
    auto: Boolean,
    offsetX: Boolean,
    offsetY: Boolean,
    disabled: Boolean,
    maxHeight: {
      default: 'auto'
    },
    nudgeTop: {
      type: Number,
      default: 0
    },
    nudgeBottom: {
      type: Number,
      default: 0
    },
    nudgeLeft: {
      type: Number,
      default: 0
    },
    nudgeRight: {
      type: Number,
      default: 0
    },
    nudgeWidth: {
      type: Number,
      default: 0
    },
    openOnClick: {
      type: Boolean,
      default: true
    },
    openOnHover: {
      type: Boolean,
      default: false
    },
    lazy: Boolean,
    closeOnClick: {
      type: Boolean,
      default: true
    },
    closeOnContentClick: {
      type: Boolean,
      default: true
    },
    activator: {
      default: null
    },
    origin: {
      type: String,
      default: 'top left'
    },
    transition: {
      type: String,
      default: 'menu-transition'
    },
    positionX: {
      type: Number,
      default: null
    },
    positionY: {
      type: Number,
      default: null
    },
    positionAbsolutely: {
      type: Boolean,
      default: false
    },
    maxWidth: [Number, String],
    minWidth: [Number, String]
  },

  computed: {
    calculatedMinWidth: function calculatedMinWidth() {
      var minWidth = parseInt(this.minWidth) || this.dimensions.activator.width + this.nudgeWidth + (this.auto ? 16 : 0);

      if (!this.maxWidth) return minWidth;

      var maxWidth = parseInt(this.maxWidth);

      return maxWidth < minWidth ? maxWidth : minWidth;
    },
    styles: function styles() {
      return {
        maxHeight: this.auto ? '200px' : isNaN(this.maxHeight) ? this.maxHeight : this.maxHeight + 'px',
        minWidth: this.calculatedMinWidth + 'px',
        maxWidth: parseInt(this.maxWidth) + 'px',
        top: this.calcTop() + 'px',
        left: this.calcLeft() + 'px'
      };
    },
    hasActivator: function hasActivator() {
      return !!this.$slots.activator || this.activator;
    }
  },

  watch: {
    activator: function activator(newActivator, oldActivator) {
      this.removeActivatorEvents(oldActivator);
      this.addActivatorEvents(newActivator);
    },
    disabled: function disabled(val) {
      val && this.deactivate();
    },
    hasJustFocused: function hasJustFocused(val) {
      var _this = this;

      if (!val) return;

      clearTimeout(this.focusedTimeout);
      this.focusedTimeout = setTimeout(function () {
        return _this.hasJustFocused = false;
      }, 100);
    },
    isActive: function isActive(val) {
      if (this.disabled) return;

      val && this.activate() || this.deactivate();
    },
    windowResizeHandler: function windowResizeHandler() {
      this.isBooted = false;
    }
  },

  mounted: function mounted() {
    window.addEventListener('resize', this.onResize, { passive: true });
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.onResize, { passive: true });
    window.removeEventListener('resize', this.windowResizeHandler);
  },


  methods: {
    activate: function activate() {
      if (typeof window === 'undefined') return;
      this.isBooted = true;
      this.insideContent = true;
      this.getTiles();
      this.updateDimensions();
      requestAnimationFrame(this.startTransition);
    },
    deactivate: function deactivate() {
      this.isContentActive = false;
    },
    onResize: function onResize() {
      clearTimeout(this.resizeTimeout);
      if (!this.isActive) return;
      this.resizeTimeout = setTimeout(this.updateDimensions, 200);
    },
    startTransition: function startTransition() {
      var _this2 = this;

      requestAnimationFrame(function () {
        return _this2.isContentActive = true;
      });
      requestAnimationFrame(this.calculateScroll);
    }
  },

  render: function render(h) {
    var _this3 = this;

    var directives = !this.openOnHover ? [{
      name: 'click-outside',
      value: function value() {
        return _this3.closeOnClick;
      }
    }] : [];

    var data = {
      'class': 'menu',
      style: {
        display: this.fullWidth ? 'block' : 'inline-block'
      },
      directives: directives,
      on: {
        keydown: function keydown(e) {
          if (e.keyCode === 27) _this3.isActive = false;else _this3.changeListIndex(e);
        }
      }
    };

    return h('div', data, [this.genActivator(), this.genTransition()]);
  }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_autocomplete__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_filterable__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_generators__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_input__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_cards_VCard__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_selection_controls_VCheckbox__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_icons_VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_lists_VList__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_lists_VListTile__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_lists_VListTileAction__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_lists__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_menus_VMenu__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_click_outside__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__util_helpers__ = __webpack_require__(1);



















/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-select',

  components: {
    VCard: __WEBPACK_IMPORTED_MODULE_4__components_cards_VCard__["a" /* default */],
    VCheckbox: __WEBPACK_IMPORTED_MODULE_5__components_selection_controls_VCheckbox__["a" /* default */],
    VIcon: __WEBPACK_IMPORTED_MODULE_6__components_icons_VIcon__["a" /* default */],
    VList: __WEBPACK_IMPORTED_MODULE_7__components_lists_VList__["a" /* default */],
    VListTile: __WEBPACK_IMPORTED_MODULE_8__components_lists_VListTile__["a" /* default */],
    VListTileAction: __WEBPACK_IMPORTED_MODULE_9__components_lists_VListTileAction__["a" /* default */],
    VListTileContent: __WEBPACK_IMPORTED_MODULE_10__components_lists__["a" /* VListTileContent */],
    VListTileTitle: __WEBPACK_IMPORTED_MODULE_10__components_lists__["b" /* VListTileTitle */],
    VMenu: __WEBPACK_IMPORTED_MODULE_11__components_menus_VMenu__["a" /* default */]
  },

  directives: {
    clickOutside: __WEBPACK_IMPORTED_MODULE_12__directives_click_outside__["a" /* default */]
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_autocomplete__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_input__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_filterable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_generators__["a" /* default */]],

  data: function data() {
    return {
      content: {},
      hasFocused: false,
      inputValue: this.multiple && !this.value ? [] : this.value,
      isBooted: false,
      lastItem: 20,
      isActive: false
    };
  },


  props: {
    appendIcon: {
      type: String,
      default: 'arrow_drop_down'
    },
    auto: Boolean,
    autocomplete: Boolean,
    bottom: Boolean,
    chips: Boolean,
    close: Boolean,
    debounce: {
      type: Number,
      default: 200
    },
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    filter: Function,
    itemText: {
      type: String,
      default: 'text'
    },
    itemValue: {
      type: String,
      default: 'value'
    },
    itemDisabled: {
      type: String,
      default: 'disabled'
    },
    maxHeight: {
      type: [Number, String],
      default: 300
    },
    minWidth: {
      type: [Boolean, Number, String],
      default: false
    },
    multiple: Boolean,
    multiLine: Boolean,
    offset: Boolean,
    singleLine: Boolean,
    top: Boolean,
    returnObject: Boolean,
    overflow: Boolean,
    segmented: Boolean,
    editable: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'input-group--text-field input-group--select': true,
        'input-group--auto': this.auto,
        'input-group--overflow': this.overflow,
        'input-group--segmented': this.segmented,
        'input-group--editable': this.editable,
        'input-group--autocomplete': this.autocomplete,
        'input-group--single-line': this.singleLine || this.isDropdown,
        'input-group--multi-line': this.multiLine,
        'input-group--chips': this.chips,
        'input-group--multiple': this.multiple
      };
    },
    computedContentClass: function computedContentClass() {
      var children = [this.auto ? 'menu__content--auto' : '', this.isDropdown ? 'menu__content--dropdown' : ''];

      return children.join(' ');
    },
    filteredItems: function filteredItems() {
      var items = this.autocomplete && this.searchValue ? this.filterSearch() : this.items;

      return !this.auto ? items.slice(0, this.lastItem) : items;
    },
    hasError: function hasError() {
      return this.validations.length || this.error || this.hasFocused && !this.focused && !this.isDirty && this.required;
    },
    isDirty: function isDirty() {
      return this.selectedItems.length;
    },
    isDropdown: function isDropdown() {
      return this.segmented || this.overflow || this.editable;
    },
    selectedItems: function selectedItems() {
      var _this = this;

      if (this.inputValue === null || typeof this.inputValue === 'undefined') return [];

      return this.items.filter(function (i) {
        if (!_this.multiple) {
          return _this.getValue(i) === _this.getValue(_this.inputValue);
        } else {
          // Always return Boolean
          return _this.inputValue.find(function (j) {
            return _this.getValue(j) === _this.getValue(i);
          }) !== undefined;
        }
      });
    }
  },

  watch: {
    inputValue: function inputValue(val) {
      this.$emit('input', val);
    },
    value: function value(val) {
      this.inputValue = val;
      this.validate();
      if (this.autocomplete || this.editable) {
        this.$nextTick(this.$refs.menu.updateDimensions);
      }
    },
    isActive: function isActive(val) {
      this.isBooted = true;
      this.lastItem += !val ? 20 : 0;

      if (!val) this.blur();else this.focus();
    },
    isBooted: function isBooted() {
      var _this2 = this;

      this.$nextTick(function () {
        if (_this2.content) {
          _this2.content.addEventListener('scroll', _this2.onScroll, false);
        }
      });
    },
    searchValue: function searchValue() {
      this.$refs.menu.listIndex = -1;
    }
  },

  mounted: function mounted() {
    var _this3 = this;

    this.$vuetify.load(function () {
      if (_this3._isDestroyed) return;

      _this3.content = _this3.$refs.menu.$refs.content;
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.isBooted) {
      if (this.content) {
        this.content.removeEventListener('scroll', this.onScroll, false);
      }
    }
  },


  methods: {
    blur: function blur() {
      var _this4 = this;

      this.$nextTick(function () {
        _this4.focused = false;
        _this4.hasFocused = true;
        _this4.searchValue = null;
        _this4.$el.blur();
      });
    },
    focus: function focus() {
      var _this5 = this;

      this.focused = true;
      this.$refs.input && (this.autocomplete || this.editable) && this.$refs.input.focus();

      if (this.editable && this.inputValue !== null && typeof this.inputValue !== 'undefined') {
        this.$nextTick(function () {
          _this5.$refs.input.value = _this5.getValue(_this5.inputValue);
        });
      }
    },
    genLabel: function genLabel() {
      if (this.searchValue) return null;

      var data = {};

      if (this.id) data.attrs = { for: this.id };

      return this.$createElement('label', data, this.label);
    },
    getPropertyFromItem: function getPropertyFromItem(item, field) {
      if (item !== Object(item)) return item;

      var value = Object(__WEBPACK_IMPORTED_MODULE_13__util_helpers__["f" /* getObjectValueByPath */])(item, field);

      return typeof value === 'undefined' ? item : value;
    },
    getText: function getText(item) {
      return this.getPropertyFromItem(item, this.itemText);
    },
    getValue: function getValue(item) {
      return this.getPropertyFromItem(item, this.itemValue);
    },
    onScroll: function onScroll() {
      var _this6 = this;

      if (!this.isActive) {
        requestAnimationFrame(function () {
          return _this6.content.scrollTop = 0;
        });
      } else {
        var showMoreItems = this.content.scrollHeight - (this.content.scrollTop + this.content.clientHeight) < 200;

        if (showMoreItems) {
          this.lastItem += 20;
        }
      }
    },
    selectItem: function selectItem(item) {
      var _this7 = this;

      if (!this.multiple) {
        this.inputValue = this.returnObject ? item : this.getValue(item);
      } else {
        var inputValue = this.inputValue.slice();
        var i = this.inputValue.findIndex(function (i) {
          return _this7.getValue(i) === _this7.getValue(item);
        });

        i !== -1 && inputValue.splice(i, 1) || inputValue.push(item);
        this.inputValue = inputValue.map(function (i) {
          return _this7.returnObject ? i : _this7.getValue(i);
        });
      }

      if (this.autocomplete || this.editable) {
        this.$nextTick(function () {
          _this7.searchValue = null;
          _this7.$refs.input && _this7.$refs.input.focus();
        });
      }

      this.$emit('change', this.inputValue);
    }
  },

  render: function render(h) {
    var _this8 = this;

    return this.genInputGroup([this.genSelectionsAndSearch(), this.genMenu()], {
      ref: 'activator',
      directives: [{
        name: 'click-outside',
        value: function value() {
          return _this8.isActive = false;
        }
      }],
      on: {
        keydown: this.onKeyDown // Located in mixins/autocomplete.js
      }
    });
  }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    noDataText: {
      type: String,
      default: 'No data available'
    }
  }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_selectable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_ripple__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_transitions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_icons_VIcon__ = __webpack_require__(3);





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-checkbox',

  components: {
    VFadeTransition: __WEBPACK_IMPORTED_MODULE_2__components_transitions__["b" /* VFadeTransition */],
    VIcon: __WEBPACK_IMPORTED_MODULE_3__components_icons_VIcon__["a" /* default */]
  },

  directives: {
    Ripple: __WEBPACK_IMPORTED_MODULE_1__directives_ripple__["a" /* default */]
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_selectable__["a" /* default */]],

  data: function data() {
    return {
      inputDeterminate: this.indeterminate
    };
  },


  props: {
    indeterminate: Boolean
  },

  computed: {
    classes: function classes() {
      return this.addColorClassChecks({
        'checkbox': true,
        'input-group--selection-controls': true,
        'input-group--active': this.isActive
      });
    },
    icon: function icon() {
      if (this.inputDeterminate) {
        return 'indeterminate_check_box';
      } else if (this.isActive) {
        return 'check_box';
      } else {
        return 'check_box_outline_blank';
      }
    }
  },

  render: function render(h) {
    var transition = h('v-fade-transition', [h('v-icon', {
      'class': {
        'icon--checkbox': this.icon === 'check_box'
      },
      key: this.icon
    }, this.icon)]);

    var ripple = h('div', {
      'class': 'input-group--selection-controls__ripple',
      on: Object.assign({}, {
        click: this.toggle
      }, this.$listeners),
      directives: [{
        name: 'ripple',
        value: { center: true }
      }]
    });

    return this.genInputGroup([transition, ripple]);
  }
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_colorable__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input__ = __webpack_require__(4);



/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_1__input__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__mixins_colorable__["a" /* default */]],

  model: {
    prop: 'inputValue',
    event: 'change'
  },

  props: {
    inputValue: null,
    falseValue: null,
    trueValue: null
  },

  computed: {
    isActive: function isActive() {
      if (Array.isArray(this.inputValue)) {
        return this.inputValue.indexOf(this.value) !== -1;
      }

      if (!this.trueValue || !this.falseValue) {
        return this.value ? this.value === this.inputValue : Boolean(this.inputValue);
      }

      return this.inputValue === this.trueValue;
    }
  },

  watch: {
    indeterminate: function indeterminate(val) {
      this.inputDeterminate = val;
    }
  },

  methods: {
    genLabel: function genLabel() {
      return this.$createElement('label', {
        on: { click: this.toggle }
      }, this.label);
    },
    toggle: function toggle() {
      if (this.disabled) {
        return;
      }

      var input = this.inputValue;
      if (Array.isArray(input)) {
        input = input.slice();
        var i = input.indexOf(this.value);

        if (i === -1) {
          input.push(this.value);
        } else {
          input.splice(i, 1);
        }
      } else if (this.trueValue || this.falseValue) {
        input = input === this.trueValue ? this.falseValue : this.trueValue;
      } else if (this.value) {
        input = this.value === this.inputValue ? null : this.value;
      } else {
        input = !input;
      }

      this.$emit('change', input);
    }
  }
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    color: String
  },
  methods: {
    addColorClassChecks: function addColorClassChecks(classes) {
      var parts = this.color ? this.color.trim().split(' ') : [''];
      var color = parts[0] + '--text';
      if (parts.length > 1) color += ' text--' + parts[1];
      classes[color] = !!this.color;
      return classes;
    }
  }
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_json__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__package_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_load__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_semver__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_semver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_semver__);
__webpack_require__(26);







function plugin(Vue) {
  Object.keys(__WEBPACK_IMPORTED_MODULE_1__components__["a" /* default */]).forEach(function (key) {
    Vue.component(key, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* default */][key]);
  });

  Object.keys(__WEBPACK_IMPORTED_MODULE_2__directives__).forEach(function (key) {
    Vue.directive(key, __WEBPACK_IMPORTED_MODULE_2__directives__[key]);
  });

  Vue.prototype.$vuetify = {
    load: __WEBPACK_IMPORTED_MODULE_3__util_load__["a" /* default */]
  };
}

function checkVueVersion() {
  var vueDep = __WEBPACK_IMPORTED_MODULE_0__package_json__["devDependencies"].vue.replace('^', '');
  if (!__WEBPACK_IMPORTED_MODULE_4_semver___default.a.satisfies(window.Vue.version, '>=' + vueDep)) {
    console.warn('Vuetify requires Vue version >= ' + vueDep);
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  if (window.Vue.version) {
    checkVueVersion();
  }
  window.Vue.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {
	"name": "vuetify",
	"version": "0.14.8",
	"author": {
		"name": "John Leider",
		"email": "john.j.leider@gmail.com"
	},
	"license": "MIT",
	"homepage": "http://vuetifyjs.com",
	"main": "dist/vuetify.js",
	"scripts": {
		"dev": "cross-env NODE_ENV=development webpack-dev-server --config build/webpack.dev.config.js --open --hot",
		"build": "rimraf dist && cross-env NODE_ENV=production node build/build.js --progress --hide-modules",
		"test": "cross-env NODE_ENV=test jest --no-cache --coverage --verbose",
		"test-no-coverage": "cross-env NODE_ENV=test jest --no-cache --verbose",
		"lint": "eslint --ext .js,.vue src --ignore-pattern=*/util/testing.js"
	},
	"description": "Vue.js 2 Semantic Component Framework",
	"devDependencies": {
		"autoprefixer": "^6.6.0",
		"avoriaz": "^2.5.0",
		"babel-cli": "^6.24.1",
		"babel-core": "^6.24.1",
		"babel-eslint": "^7.1.1",
		"babel-jest": "^20.0.3",
		"babel-loader": "^7.1.1",
		"babel-plugin-add-filehash": "^6.9.4",
		"babel-plugin-module-resolver": "^2.7.1",
		"babel-plugin-transform-async-to-generator": "^6.24.1",
		"babel-plugin-transform-runtime": "^6.23.0",
		"babel-preset-env": "^1.5.1",
		"babel-preset-es2015": "^6.24.1",
		"babel-preset-stage-2": "^6.24.1",
		"chalk": "^1.1.3",
		"chromedriver": "^2.21.2",
		"cross-env": "^3.1.3",
		"cross-spawn": "^4.0.2",
		"css-loader": "^0.23.1",
		"css-mqpacker": "^6.0.1",
		"cssnano": "^3.10.0",
		"eslint": "^3.7.1",
		"eslint-config-standard": "^6.1.0",
		"eslint-config-vue": "^2.0.2",
		"eslint-friendly-formatter": "^2.0.5",
		"eslint-loader": "^1.6.1",
		"eslint-plugin-html": "^1.3.0",
		"eslint-plugin-promise": "^3.4.0",
		"eslint-plugin-pug": "^1.0.0",
		"eslint-plugin-standard": "^3.0.1",
		"eslint-plugin-vue": "^2.1.0",
		"eventsource-polyfill": "^0.9.6",
		"extract-text-webpack-plugin": "^3.0.0",
		"friendly-errors-webpack-plugin": "^1.6.1",
		"function-bind": "^1.0.2",
		"jest": "^20.0.4",
		"jest-cli": "^20.0.4",
		"jest-css-modules": "^1.1.0",
		"jest-serializer-html": "^4.0.0",
		"jest-vue-preprocessor": "^0.2.0",
		"lolex": "^1.4.0",
		"nightwatch": "^0.9.8",
		"opn": "^4.0.2",
		"optimize-css-assets-webpack-plugin": "^2.0.0",
		"optimize-js-plugin": "^0.0.4",
		"ora": "^0.3.0",
		"phantomjs-prebuilt": "^2.1.3",
		"postcss-loader": "^1.2.1",
		"precss": "^1.4.0",
		"pug": "^2.0.0-beta3",
		"pug-loader": "^2.3.0",
		"ress": "^1.1.1",
		"rimraf": "^2.5.4",
		"selenium-server": "2.53.1",
		"semver": "^5.3.0",
		"serialize-javascript": "^1.3.0",
		"shelljs": "^0.7.4",
		"style-loader": "^0.13.1",
		"stylus": "^0.54.5",
		"stylus-loader": "^2.1.1",
		"uglifyjs-webpack-plugin": "^0.4.6",
		"vue": "^2.4.1",
		"vue-loader": "^10.1.0",
		"vue-router": "^2.7.0",
		"vue-server-renderer": "^2.4.1",
		"vue-template-compiler": "^2.4.1",
		"webpack": "^3.2.0",
		"webpack-bundle-size-analyzer": "^2.7.0",
		"webpack-dev-server": "^2.6.1",
		"webpack-merge": "^4.1.0"
	},
	"dependencies": {},
	"engines": {
		"node": ">= 4.0.0",
		"npm": ">= 3.0.0"
	},
	"jest": {
		"verbose": false,
		"roots": [
			"<rootDir>/src"
		],
		"moduleFileExtensions": [
			"js",
			"vue"
		],
		"moduleDirectories": [
			"node_modules"
		],
		"moduleNameMapper": {
			"src/(.*)": "<rootDir>/src/$1"
		},
		"transform": {
			".*\\.(vue)$": "<rootDir>/node_modules/jest-vue-preprocessor",
			"\\.(styl)$": "<rootDir>/node_modules/jest-css-modules",
			".*\\.(vue|js)$": "<rootDir>/node_modules/babel-jest"
		},
		"transformIgnorePatterns": [
			"node_modules/(?!vue-router)"
		],
		"snapshotSerializers": [
			"jest-serializer-html"
		]
	}
};

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alerts__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breadcrumbs__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buttons__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chips__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dialogs__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__icons__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lists__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menus__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navigation_drawer__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__toolbar__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__selects__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__selection_controls__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tables__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__text_fields__ = __webpack_require__(79);
/* eslint-disable  */
















/* harmony default export */ __webpack_exports__["a"] = (Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__alerts__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__app__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__breadcrumbs__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__buttons__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__dialogs__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__icons__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__lists__["c" /* default */], __WEBPACK_IMPORTED_MODULE_8__menus__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__navigation_drawer__["a" /* default */], __WEBPACK_IMPORTED_MODULE_10__toolbar__["a" /* default */], __WEBPACK_IMPORTED_MODULE_11__selects__["a" /* default */], __WEBPACK_IMPORTED_MODULE_12__selection_controls__["a" /* default */], __WEBPACK_IMPORTED_MODULE_13__tables__["a" /* default */], __WEBPACK_IMPORTED_MODULE_14__text_fields__["a" /* default */]));

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VAlert__ = __webpack_require__(30);


/* harmony default export */ __webpack_exports__["a"] = ({
  VAlert: __WEBPACK_IMPORTED_MODULE_0__VAlert__["a" /* default */]
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_contextualable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_transitionable__ = __webpack_require__(31);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-alert',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_contextualable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_transitionable__["a" /* default */]],

  props: {
    dismissible: Boolean,
    hideIcon: Boolean,
    icon: String
  },

  computed: {
    classes: function classes() {
      return {
        'alert': true,
        'alert--dismissible': this.dismissible,
        'error': this.error,
        'info': this.info,
        'primary': this.primary,
        'secondary': this.secondary,
        'success': this.success,
        'warning': this.warning
      };
    },
    mdIcon: function mdIcon() {
      switch (true) {
        case !!this.icon:
          return this.icon;
        case this.error:
          return 'warning';
        case this.info:
          return 'info';
        case this.success:
          return 'check_circle';
        case this.warning:
          return 'priority_high';
      }
    }
  },

  render: function render(h) {
    var _this = this;

    var children = [h('div', this.$slots.default)];

    if (!this.hideIcon && this.mdIcon) {
      children.unshift(h('v-icon', {
        'class': 'alert__icon',
        props: { large: true }
      }, this.mdIcon));
    }

    if (this.dismissible) {
      var close = h('a', {
        'class': 'alert__dismissible',
        domProps: { href: 'javascript:;' },
        on: { click: function click() {
            return _this.$emit('input', false);
          } }
      }, [h('v-icon', {
        props: {
          right: true,
          large: true
        }
      }, 'cancel')]);

      children.push(close);
    }

    var alert = h('div', {
      'class': this.classes,
      directives: [{
        name: 'show',
        value: this.isActive
      }],
      on: this.$listeners
    }, children);

    if (!this.transition) return alert;

    return h('transition', {
      props: {
        name: this.transition,
        origin: this.origin,
        mode: this.mode
      }
    }, [alert]);
  }
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    mode: String,
    origin: String,
    transition: String
  }
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VApp__ = __webpack_require__(33);


/* harmony default export */ __webpack_exports__["a"] = ({
  VApp: __WEBPACK_IMPORTED_MODULE_0__VApp__["a" /* default */]
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  props: {
    fixedFooter: Boolean,
    footer: Boolean,
    id: {
      type: String,
      default: 'app'
    },
    toolbar: Boolean
  },

  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    data.staticClass = ('application ' + (data.staticClass || '')).trim();
    data.staticClass += ' application--' + (props.dark ? 'dark' : 'light');

    props.footer && (data.staticClass += ' application--footer');
    props.fixedFooter && (data.staticClass += ' application--footer-fixed');
    props.toolbar && (data.staticClass += ' application--toolbar');

    data.attrs = { 'data-app': true };
    data.domProps = { id: props.id };

    return h('div', data, children);
  }
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VBreadcrumbs__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VBreadcrumbsItem__ = __webpack_require__(36);



/* harmony default export */ __webpack_exports__["a"] = ({
  VBreadcrumbs: __WEBPACK_IMPORTED_MODULE_0__VBreadcrumbs__["a" /* default */],
  VBreadcrumbsItem: __WEBPACK_IMPORTED_MODULE_1__VBreadcrumbsItem__["a" /* default */]
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-breadcrumbs',

  provide: function provide() {
    return {
      divider: this.divider
    };
  },


  props: {
    divider: {
      type: String,
      default: '/'
    },
    icons: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'breadcrumbs': true,
        'breadcrumbs--with-icons': this.icons
      };
    }
  },

  render: function render(h) {
    return h('ul', {
      'class': this.classes,
      props: { items: this.items }
    }, this.$slots.default);
  }
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_route_link__ = __webpack_require__(6);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-breadcrumbs-item',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_route_link__["a" /* default */]],

  inject: ['divider'],

  props: {
    activeClass: {
      type: String,
      default: 'breadcrumbs__item--active'
    }
  },

  computed: {
    classes: function classes() {
      return {
        'breadcrumbs__item': true,
        'breadcrumbs__item--disabled': this.disabled
      };
    }
  },

  render: function render(h) {
    var _generateRouteLink = this.generateRouteLink(),
        tag = _generateRouteLink.tag,
        data = _generateRouteLink.data;

    return h('li', {
      attrs: { 'data-divider': this.divider }
    }, [h(tag, data, this.$slots.default)]);
  }
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VBtn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VBtnToggle__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VSpeedDial__ = __webpack_require__(39);




/* harmony default export */ __webpack_exports__["a"] = ({
  VBtn: __WEBPACK_IMPORTED_MODULE_0__VBtn__["a" /* default */],
  VBtnToggle: __WEBPACK_IMPORTED_MODULE_1__VBtnToggle__["a" /* default */],
  VSpeedDial: __WEBPACK_IMPORTED_MODULE_2__VSpeedDial__["a" /* default */]
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_buttons_VBtn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_icons_VIcon__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-btn-toggle',

  model: {
    prop: 'inputValue',
    event: 'change'
  },

  props: {
    inputValue: {
      required: false
    },
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    mandatory: Boolean,
    multiple: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'btn-toggle': true,
        'btn-toggle--selected': this.inputValue && (!this.multiple || this.inputValue.length)
      };
    }
  },

  methods: {
    isSelected: function isSelected(item) {
      if (!this.multiple) {
        return this.inputValue === item.value;
      }

      return this.inputValue.includes(item.value);
    },
    updateValue: function updateValue(item) {
      if (!this.multiple) {
        if (this.mandatory && this.inputValue === item.value) return;
        return this.$emit('change', this.inputValue === item.value ? null : item.value);
      }

      var items = this.inputValue.slice();

      var i = items.indexOf(item.value);
      if (i > -1) {
        items.length >= 1 && !this.mandatory && items.splice(i, 1);
      } else {
        items.push(item.value);
      }

      this.$emit('change', items);
    }
  },

  render: function render(h) {
    var _this = this;

    var buttons = this.items.map(function (item, index) {
      var children = [];

      item.text && children.push(h('span', item.text));
      item.icon && children.push(h(__WEBPACK_IMPORTED_MODULE_1__components_icons_VIcon__["a" /* default */], item.icon));

      return h(__WEBPACK_IMPORTED_MODULE_0__components_buttons_VBtn__["a" /* default */], {
        key: index,
        props: {
          flat: true
        },
        on: {
          click: function click(e) {
            e.stopPropagation();
            _this.updateValue(item);
          }
        },
        attrs: {
          'data-selected': _this.isSelected(item),
          'data-index': index,
          'data-only-child': _this.isSelected(item) && (!_this.multiple || _this.inputValue.length === 1)
        }
      }, children);
    });

    return h('div', { class: this.classes }, buttons);
  }
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_toggleable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_positionable__ = __webpack_require__(11);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-speed-dial',

  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_positionable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__mixins_toggleable__["a" /* default */]],

  props: {
    direction: {
      type: String,
      default: 'top',
      validator: function validator(val) {
        return ['top', 'right', 'bottom', 'left'].includes(val);
      }
    },
    hover: Boolean,
    transition: {
      type: String,
      default: 'scale-transition'
    }
  },

  computed: {
    classes: function classes() {
      return _defineProperty({
        'speed-dial': true,
        'speed-dial--top': this.top,
        'speed-dial--right': this.right,
        'speed-dial--bottom': this.bottom,
        'speed-dial--left': this.left,
        'speed-dial--absolute': this.absolute,
        'speed-dial--fixed': this.fixed
      }, 'speed-dial--direction-' + this.direction, true);
    }
  },

  render: function render(h) {
    var _this = this;

    var children = [];
    var data = {
      'class': this.classes,
      directives: [{
        name: 'click-outside'
      }],
      on: {
        click: function click() {
          return _this.isActive = !_this.isActive;
        }
      }
    };

    if (this.hover) {
      data.on.mouseenter = function () {
        return _this.isActive = true;
      };
      data.on.mouseleave = function () {
        return _this.isActive = false;
      };
    }

    if (this.isActive) {
      children = (this.$slots.default || []).map(function (b, i) {
        b.key = i;

        return b;
      });
    }

    var list = h('transition-group', {
      'class': 'speed-dial__list',
      props: {
        name: this.transition,
        tag: 'div'
      }
    }, children);

    return h('div', data, [this.$slots.activator, list]);
  }
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VChip__ = __webpack_require__(41);


/* unused harmony default export */ var _unused_webpack_default_export = ({
  VChip: __WEBPACK_IMPORTED_MODULE_0__VChip__["a" /* default */]
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_toggleable__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-chip',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_toggleable__["a" /* default */]],

  props: {
    close: Boolean,
    label: Boolean,
    outline: Boolean,
    small: Boolean,
    value: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    classes: function classes() {
      return {
        'chip': true,
        'chip--label': this.label,
        'chip--outline': this.outline,
        'chip--small': this.small,
        'chip--removable': this.close
      };
    }
  },

  render: function render(h) {
    var _this = this;

    var children = [this.$slots.default];
    var data = {
      'class': this.classes,
      attrs: { tabindex: -1 },
      directives: [{
        name: 'show',
        value: this.isActive
      }],
      on: this.$listeners
    };

    if (this.close) {
      children.push(h('a', {
        'class': 'chip__close',
        domProps: { href: 'javascript:;' },
        on: {
          click: function click(e) {
            e.stopPropagation();

            _this.$emit('input', false);
          }
        }
      }, [h('v-icon', { props: { right: true } }, 'cancel')]));
    }

    return h('span', data, children);
  }
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VDialog__ = __webpack_require__(43);


/* harmony default export */ __webpack_exports__["a"] = ({
  VDialog: __WEBPACK_IMPORTED_MODULE_0__VDialog__["a" /* default */]
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_bootable__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_detachable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_overlayable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_toggleable__ = __webpack_require__(2);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-dialog',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_bootable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_detachable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_overlayable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_toggleable__["a" /* default */]],

  props: {
    disabled: Boolean,
    persistent: Boolean,
    fullscreen: Boolean,
    fullWidth: Boolean,
    lazy: Boolean,
    origin: {
      type: String,
      default: 'center center'
    },
    width: {
      type: [String, Number],
      default: 290
    },
    scrollable: Boolean,
    transition: {
      type: [String, Boolean],
      default: 'dialog-transition'
    }
  },

  computed: {
    classes: function classes() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, ('dialog ' + this.contentClass).trim(), true), _defineProperty(_ref, 'dialog--active', this.isActive), _defineProperty(_ref, 'dialog--persistent', this.persistent), _defineProperty(_ref, 'dialog--fullscreen', this.fullscreen), _defineProperty(_ref, 'dialog--stacked-actions', this.stackedActions && !this.fullscreen), _defineProperty(_ref, 'dialog--scrollable', this.scrollable), _ref;
    }
  },

  watch: {
    isActive: function isActive(val) {
      if (val) {
        !this.fullscreen && !this.hideOverlay && this.genOverlay();
        this.fullscreen && this.hideScroll();
      } else {
        if (!this.fullscreen) this.removeOverlay();else this.showScroll();
      }
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.isBooted = this.isActive;
    this.$vuetify.load(function () {
      return _this.isActive && _this.genOverlay();
    });
  },


  methods: {
    closeConditional: function closeConditional(e) {
      // close dialog if !persistent and clicked outside
      return !this.persistent;
    }
  },

  render: function render(h) {
    var _this2 = this;

    var children = [];
    var data = {
      'class': this.classes,
      ref: 'dialog',
      directives: [{ name: 'click-outside', value: this.closeConditional }, { name: 'show', value: this.isActive }]
    };

    if (!this.fullscreen) {
      data.style = {
        width: isNaN(this.width) ? this.width : this.width + 'px'
      };
    }

    if (this.$slots.activator) {
      children.push(h('div', {
        'class': 'dialog__activator',
        on: {
          click: function click(e) {
            e.stopPropagation();
            if (!_this2.disabled) _this2.isActive = !_this2.isActive;
          }
        }
      }, [this.$slots.activator]));
    }

    var dialog = h('transition', {
      props: {
        name: this.transition || '', // If false, show nothing
        origin: this.origin
      }
    }, [h('div', data, this.lazy && this.isBooted || !this.lazy ? this.$slots.default : null)]);

    children.push(h('div', {
      'class': 'dialog__content',
      ref: 'content'
    }, [dialog]));

    return h('div', {
      'class': 'dialog__container',
      style: {
        display: !this.$slots.activator && 'none' || this.fullWidth ? 'block' : 'inline-block'
      }
    }, children);
  }
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      isBooted: false
    };
  },


  watch: {
    isActive: function isActive() {
      this.isBooted = true;
    }
  }
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VIcon__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = ({
  VIcon: __WEBPACK_IMPORTED_MODULE_0__VIcon__["a" /* default */]
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_transitions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-list-group',

  inject: ['listClick', 'listClose'],

  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_toggleable__["a" /* default */]],

  data: function data() {
    return {
      isBooted: this.value
    };
  },


  props: {
    group: String,
    lazy: Boolean,
    noAction: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'list--group__header': true,
        'list--group__header--active': this.isActive,
        'list--group__header--no-action': this.noAction
      };
    }
  },

  watch: {
    isActive: function isActive() {
      this.isBooted = true;

      if (!this.isActive) {
        this.listClose(this._uid);
      }
    },
    $route: function $route(to) {
      var isActive = this.matchRoute(to.path);

      if (this.group) {
        if (isActive && this.isActive !== isActive) {
          this.listClick(this._uid);
        }
        this.isActive = isActive;
      }
    }
  },

  mounted: function mounted() {
    if (this.group) {
      this.isActive = this.matchRoute(this.$route.path);
    }

    if (this.isActive) {
      this.listClick(this._uid);
    }
  },


  methods: {
    click: function click() {
      var _this = this;

      if (!this.$refs.item.querySelector('.list__tile--disabled')) {
        requestAnimationFrame(function () {
          return _this.listClick(_this._uid);
        });
      }
    },
    toggle: function toggle(uid) {
      this.isActive = this._uid === uid;
    },
    matchRoute: function matchRoute(to) {
      if (!this.group) return false;
      return to.match(this.group) !== null;
    }
  },

  render: function render(h) {
    var group = h('ul', {
      'class': 'list list--group',
      directives: [{
        name: 'show',
        value: this.isActive
      }],
      ref: 'group'
    }, [this.lazy && !this.isBooted ? null : this.$slots.default]);

    var item = h('div', {
      'class': this.classes,
      on: Object.assign({}, { click: this.click }, this.$listeners),
      ref: 'item'
    }, [this.$slots.item]);

    var transition = h(__WEBPACK_IMPORTED_MODULE_0__components_transitions__["a" /* VExpandTransition */], [group]);

    return h('div', { 'class': 'list--group__container' }, [item, transition]);
  }
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = ({
  enter: function enter(el, done) {
    // Remove initial transition
    el.style.transition = 'none';
    Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* addOnceEventListener */])(el, 'transitionend', done);

    // Get height that is to be scrolled
    el.style.overflow = 'hidden';
    el.style.height = null;
    el.style.display = 'block';
    var height = el.clientHeight + 'px';
    el.style.height = 0;
    el.style.transition = null;

    setTimeout(function () {
      return el.style.height = height;
    }, 50);
  },
  afterEnter: function afterEnter(el) {
    el.style.height = 'auto';
    el.style.overflow = null;
  },
  leave: function leave(el, done) {
    // Remove initial transition
    el.style.transition = 'none';
    Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* addOnceEventListener */])(el, 'transitionend', done);

    // Set height before we transition to 0
    el.style.overflow = 'hidden';
    el.style.height = el.clientHeight + 'px';
    el.style.transition = null;

    setTimeout(function () {
      return el.style.height = 0;
    }, 50);
  }
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(1);


function directive(el, binding) {
  var config = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* directiveConfig */])(binding, {
    icon: false,
    left: false,
    bottom: false,
    overlap: false,
    visible: true
  });

  if (!config.visible || binding.expression && !binding.value) {
    return unbind(el);
  }

  if (config.overlap) el.classList.add('badge--overlap');
  if (config.icon) el.classList.add('badge--icon');
  if (config.left) el.classList.add('badge--left');
  if (config.bottom) el.classList.add('badge--bottom');

  el.dataset.badge = config.value;
  el.classList.add('badge');
}

function unbind(el) {
  el.removeAttribute('data-badge');
  el.classList.remove('badge');
}

/* harmony default export */ __webpack_exports__["a"] = ({
  bind: directive,
  updated: directive,
  componentUpdated: directive,
  unbind: unbind
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(1);


function directive(el, binding) {
  var config = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["e" /* directiveConfig */])(binding, {
    top: true,
    visible: true
  });

  if (!config.visible || binding.expression && !binding.value) {
    return unbind(el);
  }

  unbind(el, binding, config);

  el.dataset.tooltip = config.html;
  el.dataset['tooltipLocation'] = config.value;
}

function unbind(el) {
  el.removeAttribute('data-tooltip');
  el.removeAttribute('data-tooltip-location');
}

/* harmony default export */ __webpack_exports__["a"] = ({
  bind: directive,
  updated: directive,
  componentUpdated: directive,
  unbind: unbind
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var touchstart = function touchstart(event, wrapper) {
  var touch = event.changedTouches[0];
  wrapper.touchstartX = touch.clientX;
  wrapper.touchstartY = touch.clientY;

  wrapper.start && wrapper.start(Object.assign(event, wrapper));
};

var touchend = function touchend(event, wrapper) {
  var touch = event.changedTouches[0];
  wrapper.touchendX = touch.clientX;
  wrapper.touchendY = touch.clientY;

  wrapper.end && wrapper.end(Object.assign(event, wrapper));

  handleGesture(wrapper);
};

var touchmove = function touchmove(event, wrapper) {
  var touch = event.changedTouches[0];
  wrapper.touchmoveX = touch.clientX;
  wrapper.touchmoveY = touch.clientY;

  wrapper.move && wrapper.move(Object.assign(event, wrapper));
};

var handleGesture = function handleGesture(wrapper) {
  var touchstartX = wrapper.touchstartX,
      touchendX = wrapper.touchendX,
      touchstartY = wrapper.touchstartY,
      touchendY = wrapper.touchendY;

  wrapper.offsetX = touchendX - touchstartX;
  wrapper.offsetY = touchendY - touchstartY;

  if (touchendX < touchstartX) {
    wrapper.left && wrapper.left(wrapper);
  }
  if (touchendX > touchstartX) {
    wrapper.right && wrapper.right(wrapper);
  }
  if (touchendY < touchstartY) {
    wrapper.up && wrapper.up(wrapper);
  }
  if (touchendY > touchstartY) {
    wrapper.down && wrapper.down(wrapper);
  }
};

function inserted(el, _ref) {
  var value = _ref.value;

  var wrapper = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: value.left,
    right: value.right,
    up: value.up,
    down: value.down,
    start: value.start,
    move: value.move,
    end: value.end
  };

  var target = value.parent ? el.parentNode : el;
  var options = value.options || {};

  target.addEventListener('touchstart', function (e) {
    return touchstart(e, wrapper);
  }, options);
  target.addEventListener('touchend', function (e) {
    return touchend(e, wrapper);
  }, options);
  target.addEventListener('touchmove', function (e) {
    return touchmove(e, wrapper);
  }, options);
}

function unbind(el, _ref2) {
  var value = _ref2.value;

  var target = value.parent ? el.parentNode : el;

  if (!target) return;

  target.removeEventListener('touchstart', touchstart);
  target.removeEventListener('touchend', touchend);
  target.removeEventListener('touchmove', touchmove);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  inserted: inserted,
  unbind: unbind
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VMenu_js__ = __webpack_require__(19);


/* harmony default export */ __webpack_exports__["a"] = ({
  VMenu: __WEBPACK_IMPORTED_MODULE_0__VMenu_js__["a" /* default */]
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    getActivator: function getActivator() {
      if (this.activator) return this.activator;
      return this.$refs.activator.children ? this.$refs.activator.children[0] : this.$refs.activator;
    },
    activatorClickHandler: function activatorClickHandler(e) {
      if (this.disabled) return;else if (this.openOnClick && !this.isActive) {
        this.isActive = true;
        this.absoluteX = e.clientX;
        this.absoluteY = e.clientY;
      } else if (this.closeOnClick && this.isActive) this.isActive = false;
    },
    mouseEnterHandler: function mouseEnterHandler(e) {
      if (this.disabled || this.hasJustFocused) return;
      this.isActive = true;
    },
    mouseLeaveHandler: function mouseLeaveHandler(e) {
      if (this.insideContent) return;
      this.isActive = false;
      this.hasJustFocused = true;
    },
    addActivatorEvents: function addActivatorEvents() {
      var activator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!activator) return;
      activator.addEventListener('click', this.activatorClickHandler);
    },
    removeActivatorEvents: function removeActivatorEvents() {
      var activator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!activator) return;
      activator.removeEventListener('click', this.activatorClickHandler);
    }
  }
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genActivator: function genActivator() {
      if (!this.$slots.activator) return null;

      var options = {
        'class': 'menu__activator',
        ref: 'activator',
        slot: 'activator',
        on: {}
      };

      if (this.openOnHover) {
        options.on['mouseenter'] = this.mouseEnterHandler;
        options.on['mouseleave'] = this.mouseLeaveHandler;
      } else if (this.openOnClick) {
        options.on['click'] = this.activatorClickHandler;
      }

      return this.$createElement('div', options, this.$slots.activator);
    },
    genTransition: function genTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition,
          origin: this.origin
        }
      }, [this.genContent()]);
    },
    genContent: function genContent() {
      var _this = this;

      var booted = this.lazy && this.isBooted || !this.lazy;
      return this.$createElement('div', {
        'class': ('menu__content ' + this.contentClass).trim(),
        ref: 'content',
        style: this.styles,
        directives: [{
          name: 'show',
          value: this.isContentActive
        }],
        on: {
          click: function click(e) {
            e.stopPropagation();
            if (e.target.getAttribute('disabled')) return;
            if (_this.closeOnContentClick) _this.isActive = false;
          },
          mouseenter: function mouseenter(e) {
            _this.insideContent = true;
          },
          mouseleave: function mouseleave(e) {
            _this.insideContent = false;
            _this.openOnHover && _this.mouseLeaveHandler();
          }
        }
      }, [booted ? this.$slots.default : null]);
    }
  }
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    // Revisit this
    calculateScroll: function calculateScroll() {
      if (this.selectedIndex === null) return;

      var scrollTop = 0;

      if (this.selectedIndex >= this.stopIndex) {
        scrollTop = this.$refs.content.scrollHeight;
      } else if (this.selectedIndex > this.startIndex) {
        scrollTop = this.selectedIndex * 48 - 56;
      }

      this.$refs.content.scrollTop = scrollTop;
    },
    calcLeftAuto: function calcLeftAuto() {
      var a = this.dimensions.activator;

      return parseInt(a.left - 16);
    },
    calcTopAuto: function calcTopAuto() {
      if (!this.hasActivator) return this.calcTop(true);

      var selectedIndex = Array.from(this.tiles).findIndex(function (n) {
        return n.classList.contains('list__tile--active');
      });

      if (selectedIndex === -1) {
        this.selectedIndex = null;

        return this.calcTop(true);
      }

      this.selectedIndex = selectedIndex;
      var actingIndex = selectedIndex;

      var offsetPadding = 1;
      // #708 Stop index should vary by tile length
      this.stopIndex = this.tiles.length > 4 ? this.tiles.length - 4 : this.tiles.length;

      if (selectedIndex > this.startIndex && selectedIndex < this.stopIndex) {
        actingIndex = 2;
        offsetPadding = 41;
      } else if (selectedIndex >= this.stopIndex) {
        offsetPadding = 9;
        actingIndex = selectedIndex - this.stopIndex;
      }

      return this.calcTop(true) + offsetPadding - actingIndex * 48;
    },
    calcLeft: function calcLeft() {
      if (this.auto) return this.calcLeftAuto();

      var a = this.dimensions.activator;
      var c = this.dimensions.content;
      var left = this.left ? a.right - c.width : a.left;

      if (this.offsetX) left += this.left ? -a.width : a.width;
      if (this.nudgeLeft) left += this.nudgeLeft;
      if (this.nudgeRight) left -= this.nudgeRight;

      return this.calcXOverflow(left);
    },
    calcTop: function calcTop(force) {
      if (this.auto && !force) return this.calcTopAuto();

      var a = this.dimensions.activator;
      var c = this.dimensions.content;
      var top = this.top ? a.bottom - c.height : a.top;

      if (this.offsetY) top += this.top ? -a.height : a.height;
      if (this.nudgeTop) top -= this.nudgeTop;
      if (this.nudgeBottom) top += this.nudgeBottom;

      var defined = typeof window !== 'undefined';
      var pageYOffset = defined ? window.pageYOffset : 0;

      return this.calcYOverflow(top) + pageYOffset;
    },
    calcXOverflow: function calcXOverflow(left) {
      var hasWindow = typeof window !== 'undefined';
      var innerWidth = hasWindow ? window.innerWidth : 0;
      var maxWidth = Math.max(this.dimensions.content.width, this.calculatedMinWidth, parseInt(this.maxWidth) || 0);
      var totalWidth = left + maxWidth;
      var availableWidth = totalWidth - innerWidth;

      if ((!this.left || this.right) && availableWidth > 0) {
        left = innerWidth - maxWidth - (innerWidth > 1024 ? 30 : 12) // Account for scrollbar
        ;
      } else if (this.left && left < 0) left = 12;

      return left;
    },
    calcYOverflow: function calcYOverflow(top) {
      var totalHeight = top + this.dimensions.content.height;
      var defined = typeof window !== 'undefined';
      var innerHeight = defined ? window.innerHeight : 0;

      if (this.top && top < 0) top = 12;else if ((!this.top || this.bottom) && innerHeight < totalHeight) {
        top = innerHeight - this.dimensions.content.height - 12;
      }

      return top;
    },
    sneakPeek: function sneakPeek(cb) {
      var _this = this;

      requestAnimationFrame(function () {
        var el = _this.$refs.content;
        var currentDisplay = el.style.display;

        el.style.display = 'inline-block';
        cb();
        el.style.display = currentDisplay;
      });
    },
    absolutePosition: function absolutePosition() {
      return {
        offsetTop: 0,
        scrollHeight: 0,
        top: this.positionY || this.absoluteY,
        bottom: this.positionY || this.absoluteY,
        left: this.positionX || this.absoluteX,
        right: this.positionX || this.absoluteX,
        height: 0,
        width: 0
      };
    },
    updateDimensions: function updateDimensions() {
      var _this2 = this;

      this.sneakPeek(function () {
        _this2.dimensions = {
          activator: !_this2.hasActivator || _this2.positionAbsolutely ? _this2.absolutePosition() : _this2.measure(_this2.getActivator()),
          content: _this2.measure(_this2.$refs.content)
        };
      });
    }
  }
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    measure: function measure(el, selector) {
      var getParent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      el = selector ? el.querySelector(selector) : el;

      if (!el) return null;

      var _el$getBoundingClient = el.getBoundingClientRect(),
          top = _el$getBoundingClient.top,
          bottom = _el$getBoundingClient.bottom,
          left = _el$getBoundingClient.left,
          right = _el$getBoundingClient.right,
          height = _el$getBoundingClient.height,
          width = _el$getBoundingClient.width;

      return {
        offsetTop: el.offsetTop,
        scrollHeight: el.scrollHeight,
        top: top, bottom: bottom, left: left, right: right, height: height, width: width
      };
    }
  }
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      listIndex: -1,
      isUsingKeys: false,
      tiles: []
    };
  },

  watch: {
    isActive: function isActive(val) {
      if (!val) this.listIndex = -1;
    },
    listIndex: function listIndex(next, prev) {
      // For infinite scroll and autocomplete, re-evaluate children
      this.getTiles();

      if (next in this.tiles) {
        this.tiles[next].classList.add('list__tile--highlighted');
        this.$refs.content.scrollTop = next * 48;
      }

      prev in this.tiles && this.tiles[prev].classList.remove('list__tile--highlighted');
    }
  },

  methods: {
    changeListIndex: function changeListIndex(e) {
      [40, 38, 13].includes(e.keyCode) && e.preventDefault();
      e.keyCode === 32 && !this.isActive && e.preventDefault();

      if (this.listIndex === -1) this.setActiveListIndex();
      if ([27, 9].includes(e.keyCode)) return this.isActive = false;else if (!this.isActive && [13, 32].includes(e.keyCode)) {
        return this.isActive = true;
      }

      if (e.keyCode === 40 && this.listIndex < this.tiles.length - 1) {
        this.listIndex++;
      } else if (e.keyCode === 38 && this.listIndex > 0) {
        this.listIndex--;
      } else if (e.keyCode === 13 && this.listIndex !== -1) {
        this.tiles[this.listIndex].click();
      }
    },
    getTiles: function getTiles() {
      this.tiles = this.$refs.content.querySelectorAll('.list__tile');
    },
    setActiveListIndex: function setActiveListIndex() {
      var _this = this;

      this.tiles.forEach(function (t, i) {
        if (t.classList.contains('list__tile--active')) {
          _this.listIndex = i;
          return;
        }
      });
    }
  }
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VNavigationDrawer__ = __webpack_require__(58);


/* harmony default export */ __webpack_exports__["a"] = ({
  VNavigationDrawer: __WEBPACK_IMPORTED_MODULE_0__VNavigationDrawer__["a" /* default */]
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_overlayable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_resizable__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_themeable__ = __webpack_require__(0);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-navigation-drawer',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_overlayable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_resizable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_themeable__["a" /* default */]],

  data: function data() {
    return {
      isActive: this.value,
      isBooted: false,
      isMobile: false,
      touchArea: {
        left: 0,
        right: 0
      }
    };
  },


  props: {
    absolute: Boolean,
    clipped: Boolean,
    disableRouteWatcher: Boolean,
    enableResizeWatcher: Boolean,
    height: String,
    floating: Boolean,
    miniVariant: Boolean,
    mobileBreakPoint: {
      type: Number,
      default: 1024
    },
    permanent: Boolean,
    persistent: Boolean,
    right: Boolean,
    temporary: Boolean,
    touchless: Boolean,
    value: { required: false }
  },

  computed: {
    calculatedHeight: function calculatedHeight() {
      return this.height || '100%';
    },
    classes: function classes() {
      return {
        'navigation-drawer': true,
        'navigation-drawer--absolute': this.absolute,
        'navigation-drawer--clipped': this.clipped,
        'navigation-drawer--close': !this.isActive,
        'navigation-drawer--floating': this.floating,
        'navigation-drawer--is-booted': this.isBooted,
        'navigation-drawer--is-mobile': this.isMobile,
        'navigation-drawer--mini-variant': this.miniVariant,
        'navigation-drawer--open': this.isActive,
        'navigation-drawer--permanent': this.permanent,
        'navigation-drawer--persistent': this.persistent,
        'navigation-drawer--right': this.right,
        'navigation-drawer--temporary': this.temporary,
        'theme--dark': this.dark,
        'theme--light': this.light
      };
    },
    showOverlay: function showOverlay() {
      return !this.permanent && this.isActive && (this.temporary || this.isMobile);
    }
  },

  watch: {
    $route: function $route() {
      if (!this.disableRouteWatcher) {
        this.isActive = !this.closeConditional();
      }
    },
    isActive: function isActive(val) {
      this.$emit('input', val);
      this.showOverlay && val && this.genOverlay() || this.removeOverlay();
      this.$el.scrollTop = 0;
    },
    isMobile: function isMobile(val) {
      !val && this.removeOverlay();
    },
    permanent: function permanent(val) {
      this.$emit('input', val);
    },
    value: function value(val) {
      if (this.permanent) return;
      if (val !== this.isActive) this.isActive = val;
    }
  },

  mounted: function mounted() {
    this.$vuetify.load(this.init);
  },


  methods: {
    init: function init() {
      var _this = this;

      this.checkIfMobile();
      setTimeout(function () {
        return _this.isBooted = true;
      }, 0);

      if (this.permanent) this.isActive = true;else if (this.isMobile) this.isActive = false;else if (!this.value && (this.persistent || this.temporary)) this.isActive = false;
    },
    checkIfMobile: function checkIfMobile() {
      this.isMobile = window.innerWidth < parseInt(this.mobileBreakPoint);
    },
    closeConditional: function closeConditional() {
      return !this.permanent && (this.temporary || this.isMobile);
    },
    onResize: function onResize() {
      var _this2 = this;

      clearTimeout(this.resizeTimeout);

      if (!this.enableResizeWatcher || this.permanent || this.temporary) return;

      this.resizeTimeout = setTimeout(function () {
        _this2.checkIfMobile();
        _this2.isActive = !_this2.isMobile;
      }, 200);
    },
    swipeRight: function swipeRight(e) {
      if (this.isActive && !this.right) return;
      this.calculateTouchArea();

      if (Math.abs(e.touchendX - e.touchstartX) < 100) return;else if (!this.right && e.touchstartX <= this.touchArea.left) this.isActive = true;else if (this.right && this.isActive) this.isActive = false;
    },
    swipeLeft: function swipeLeft(e) {
      if (this.isActive && this.right) return;
      this.calculateTouchArea();

      if (Math.abs(e.touchendX - e.touchstartX) < 100) return;else if (this.right && e.touchstartX >= this.touchArea.right) this.isActive = true;else if (!this.right && this.isActive) this.isActive = false;
    },
    calculateTouchArea: function calculateTouchArea() {
      if (!this.$el.parentNode) return;
      var parentRect = this.$el.parentNode.getBoundingClientRect();

      this.touchArea = {
        left: parentRect.left + 50,
        right: parentRect.right - 50
      };
    },
    genDirectives: function genDirectives() {
      var directives = [{
        name: 'click-outside',
        value: this.closeConditional
      }];

      !this.touchless && directives.push({
        name: 'touch',
        value: {
          parent: true,
          left: this.swipeLeft,
          right: this.swipeRight
        }
      });

      return directives;
    }
  },

  render: function render(h) {
    var _this3 = this;

    var data = {
      'class': this.classes,
      style: { height: this.calculatedHeight },
      directives: this.genDirectives(),
      on: Object.assign({}, {
        click: function click() {
          return _this3.$emit('update:miniVariant', false);
        }
      }, this.$listeners)
    };

    return h('aside', data, this.$slots.default);
  }
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      debounceTimeout: null
    };
  },


  methods: {
    debounced: function debounced() {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(this.onResize, 50);
    }
  },

  mounted: function mounted() {
    window.addEventListener('resize', this.debounced, { passive: true });

    this.$vuetify.load(this.onResize);
  },
  beforeDestroy: function beforeDestroy() {
    if (typeof window === 'undefined') return;

    window.removeEventListener('resize', this.debounced, { passive: true });
  }
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VSystemBar__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VToolbar__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VToolbarSideIcon__ = __webpack_require__(63);






var VToolbarTitle = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["c" /* createSimpleFunctional */])('toolbar__title');
var VToolbarItems = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["c" /* createSimpleFunctional */])('toolbar__items');

/* harmony default export */ __webpack_exports__["a"] = ({
  VSystemBar: __WEBPACK_IMPORTED_MODULE_1__VSystemBar__["a" /* default */],
  VToolbar: __WEBPACK_IMPORTED_MODULE_2__VToolbar__["a" /* default */],
  VToolbarItems: VToolbarItems,
  VToolbarTitle: VToolbarTitle,
  VToolbarSideIcon: __WEBPACK_IMPORTED_MODULE_3__VToolbarSideIcon__["a" /* default */]
});

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  props: {
    lightsOut: Boolean,
    status: Boolean,
    window: Boolean
  },

  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = ('system-bar ' + (data.staticClass || '')).trim();

    if (props.dark) data.staticClass += ' theme--dark';
    if (props.light) data.staticClass += ' theme--light';
    if (props.status) data.staticClass += ' system-bar--status';
    if (props.window) data.staticClass += ' system-bar--window';
    if (props.lightsOut) data.staticClass += ' system-bar--lights-out';

    return h('div', data, children);
  }
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-toolbar',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  data: function data() {
    return {
      isExtended: false
    };
  },

  props: {
    absolute: Boolean,
    card: Boolean,
    dense: Boolean,
    extended: Boolean,
    fixed: Boolean,
    flat: Boolean,
    floating: Boolean,
    prominent: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'toolbar': true,
        'elevation-0': this.flat,
        'toolbar--absolute': this.absolute,
        'toolbar--card': this.card,
        'toolbar--dense': this.dense,
        'toolbar--fixed': this.fixed,
        'toolbar--floating': this.floating,
        'toolbar--prominent': this.prominent,
        'toolbar--extended': this.isExtended,
        'theme--dark': this.dark,
        'theme--light': this.light
      };
    }
  },

  render: function render(h) {
    this.isExtended = this.extended || !!this.$slots.extension;
    var children = [];
    var data = {
      'class': this.classes,
      on: this.$listeners
    };

    children.push(h('div', {
      'class': 'toolbar__content'
    }, this.$slots.default));

    if (this.isExtended) {
      children.push(h('div', {
        'class': 'toolbar__extension'
      }, this.$slots.extension));
    }

    return h('nav', data, children);
  }
});

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-toolbar-side-icon',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  mounted: function mounted() {
    this.$el.addEventListener('click', this.onClick, false);
  },
  beforeDestroy: function beforeDestroy() {
    this.$el && this.$el.removeEventListener('click', this.onClick, false);
  },


  methods: {
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  },

  render: function render(h) {
    var data = {
      staticClass: 'toolbar__side-icon',
      props: Object.assign({}, {
        icon: true
      }, this.$props),
      on: this.$listeners
    };

    return h('v-btn', data, [h('v-icon', 'menu')]);
  }
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VSelect__ = __webpack_require__(20);


/* harmony default export */ __webpack_exports__["a"] = ({
  VSelect: __WEBPACK_IMPORTED_MODULE_0__VSelect__["a" /* default */]
});

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      searchValue: null
    };
  },


  methods: {
    filterSearch: function filterSearch() {
      var _this = this;

      return this.items.filter(function (i) {
        var text = _this.getText(i);
        if (typeof text !== 'string') return false;

        return text.toLowerCase().indexOf(_this.searchValue.toLowerCase()) !== -1;
      });
    },
    onKeyDown: function onKeyDown(e) {
      this.$refs.menu.changeListIndex(e);
    }
  }
});

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genMenu: function genMenu() {
      var _this = this;

      var data = {
        ref: 'menu',
        props: {
          activator: this.$refs.activator,
          auto: this.auto,
          closeOnClick: false,
          closeOnContentClick: !this.multiple,
          contentClass: this.computedContentClass,
          disabled: this.disabled,
          maxHeight: this.maxHeight,
          nudgeTop: this.isDropdown ? 22 : 0,
          offsetY: this.autocomplete || this.offset || this.isDropdown,
          value: this.isActive
        },
        on: { input: function input(val) {
            return _this.isActive = val;
          } }
      };

      this.minWidth && (data.props.minWidth = this.minWidth);

      return this.$createElement('v-menu', data, [this.genList()]);
    },
    genSelectionsAndSearch: function genSelectionsAndSearch() {
      var _this2 = this;

      var input = void 0;

      if (this.autocomplete || this.editable) {
        input = this.$createElement('input', {
          'class': 'input-group--select__autocomplete',
          domProps: { value: this.searchValue },
          on: { input: function input(e) {
              return _this2.searchValue = e.target.value;
            } },
          attrs: { tabindex: -1 },
          ref: 'input',
          key: 'input'
        });
      }

      var selections = this.isDirty && (!this.editable || this.editable && !this.focused) ? this.genSelections() : [];
      input && selections.push(input);
      var group = this.$createElement('div', selections);

      return this.$createElement('div', {
        'class': 'input-group__selections',
        style: { 'overflow': 'hidden' },
        ref: 'activator'
      }, [group]);
    },
    genSelections: function genSelections() {
      var _this3 = this;

      var children = [];
      var chips = this.chips;
      var slots = this.$scopedSlots.selection;
      var length = this.selectedItems.length;

      this.selectedItems.forEach(function (item, i) {
        if (slots) {
          children.push(_this3.genSlotSelection(item));
        } else if (chips) {
          children.push(_this3.genChipSelection(item));
        } else {
          children.push(_this3.genCommaSelection(item, i < length - 1));
        }
      });

      return children;
    },
    genSlotSelection: function genSlotSelection(item) {
      return this.$scopedSlots.selection({ parent: this, item: item });
    },
    genChipSelection: function genChipSelection(item) {
      var _this4 = this;

      return this.$createElement('v-chip', {
        'class': 'chip--select-multi',
        props: { close: true },
        on: {
          input: function input() {
            return _this4.selectItem(item);
          },
          click: function click(e) {
            return e.stopPropagation();
          }
        },
        key: this.getValue(item)
      }, this.getText(item));
    },
    genCommaSelection: function genCommaSelection(item, comma) {
      return this.$createElement('div', {
        'class': 'input-group__selections__comma',
        key: JSON.stringify(this.getValue(item)) // Item may be an object
      }, '' + this.getText(item) + (comma ? ', ' : ''));
    },
    genList: function genList() {
      var _this5 = this;

      var children = this.filteredItems.map(function (o) {
        if (o.header) return _this5.genHeader(o);
        if (o.divider) return _this5.genDivider(o);else return _this5.genTile(o);
      });

      if (!children.length) {
        children.push(this.genTile(this.noDataText, true));
      }

      return this.$createElement('v-card', [this.$createElement('v-list', {
        ref: 'list'
      }, children)]);
    },
    genHeader: function genHeader(item) {
      return this.$createElement('v-subheader', {
        props: item
      }, item.header);
    },
    genDivider: function genDivider(item) {
      return this.$createElement('v-divider', {
        props: item
      });
    },
    genTile: function genTile(item, disabled) {
      var _this6 = this;

      var active = this.selectedItems.indexOf(item) !== -1;

      if (typeof disabled === 'undefined') {
        disabled = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["f" /* getObjectValueByPath */])(item, this.itemDisabled);
      }

      var data = {
        on: { click: function click(e) {
            return _this6.selectItem(item);
          } },
        props: {
          avatar: item === Object(item) && 'avatar' in item,
          ripple: true,
          value: active
        }
      };

      if (disabled) {
        data.props.disabled = disabled;
      }

      if (this.$scopedSlots.item) {
        return this.$createElement('v-list-tile', data, [this.$scopedSlots.item({ parent: this, item: item })]);
      }

      return this.$createElement('v-list-tile', data, [this.genAction(item, active), this.genContent(item)]);
    },
    genAction: function genAction(item, active) {
      var _this7 = this;

      if (!this.multiple) return null;

      var data = {
        'class': {
          'list__tile__action--select-multi': this.multiple
        },
        on: {
          click: function click(e) {
            e.stopPropagation();
            _this7.selectItem(item);
          }
        }
      };

      return this.$createElement('v-list-tile-action', data, [this.$createElement('v-checkbox', { props: { inputValue: active } })]);
    },
    genContent: function genContent(item) {
      return this.$createElement('v-list-tile-content', [this.$createElement('v-list-tile-title', this.getText(item))]);
    }
  }
});

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_themeable__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_themeable__["a" /* default */]],

  props: {
    flat: Boolean,
    height: {
      type: String,
      default: 'auto'
    },
    hover: Boolean,
    img: String,
    raised: Boolean,
    tile: Boolean
  },

  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = ('card ' + (data.staticClass || '')).trim();
    data.style = data.style || {};
    data.style.height = props.height;

    if (props.dark) data.staticClass += ' theme--dark';
    if (props.flat) data.staticClass += ' card--flat';
    if (props.horizontal) data.staticClass += ' card--horizontal';
    if (props.hover) data.staticClass += ' card--hover';
    if (props.light) data.staticClass += ' theme--light';
    if (props.raised) data.staticClass += ' card--raised';
    if (props.tile) data.staticClass += ' card--tile';

    if (props.img) {
      data.style.background = 'url(' + props.img + ') center center / cover no-repeat';
    }

    return h('div', data, children);
  }
});

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VCheckbox__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VRadio__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VSwitch__ = __webpack_require__(70);




/* harmony default export */ __webpack_exports__["a"] = ({
  VCheckbox: __WEBPACK_IMPORTED_MODULE_0__VCheckbox__["a" /* default */],
  VRadio: __WEBPACK_IMPORTED_MODULE_1__VRadio__["a" /* default */],
  VSwitch: __WEBPACK_IMPORTED_MODULE_2__VSwitch__["a" /* default */]
});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_input__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_colorable__ = __webpack_require__(24);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'radio',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_input__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_colorable__["a" /* default */]],

  model: {
    prop: 'inputValue',
    event: 'change'
  },

  props: {
    inputValue: [String, Number]
  },

  computed: {
    isActive: function isActive() {
      return this.inputValue === this.value;
    },
    classes: function classes() {
      return this.addColorClassChecks({
        'radio': true,
        'input-group--selection-controls': true,
        'input-group--active': this.isActive
      });
    },
    icon: function icon() {
      return this.isActive ? 'radio_button_checked' : 'radio_button_unchecked';
    }
  },

  methods: {
    genLabel: function genLabel() {
      return this.$createElement('label', {
        on: { click: this.toggle }
      }, this.label);
    },
    toggle: function toggle() {
      if (!this.disabled) {
        this.$emit('change', this.value);
      }
    }
  },

  render: function render(h) {
    var transition = h('v-fade-transition', {}, [h('v-icon', {
      'class': {
        'icon--radio': this.isActive
      },
      key: this.icon
    }, this.icon)]);

    var ripple = h('div', {
      'class': 'input-group--selection-controls__ripple',
      on: Object.assign({}, {
        click: this.toggle
      }, this.$listeners),
      directives: [{
        name: 'ripple',
        value: { center: true }
      }]
    });

    return this.genInputGroup([transition, ripple]);
  }
});

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_selectable__ = __webpack_require__(23);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'switch',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_selectable__["a" /* default */]],

  computed: {
    classes: function classes() {
      return {
        'input-group--selection-controls switch': true
      };
    },
    rippleClasses: function rippleClasses() {
      return {
        'input-group--selection-controls__ripple': true,
        'input-group--selection-controls__ripple--active': this.isActive
      };
    },
    containerClasses: function containerClasses() {
      return this.addColorClassChecks({
        'input-group--selection-controls__container': true,
        'input-group--selection-controls__container--light': this.light,
        'input-group--selection-controls__container--disabled': this.disabled
      });
    },
    toggleClasses: function toggleClasses() {
      return {
        'input-group--selection-controls__toggle': true,
        'input-group--selection-controls__toggle--active': this.isActive
      };
    }
  },

  render: function render(h) {
    var ripple = h('div', {
      'class': this.rippleClasses,
      on: Object.assign({}, {
        click: this.toggle
      }, this.$listeners),
      directives: [{
        name: 'ripple',
        value: { center: true }
      }]
    });

    var container = h('div', {
      'class': this.containerClasses
    }, [h('div', { 'class': this.toggleClasses }), ripple]);

    return this.genInputGroup([container]);
  }
});

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VTableOverflow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VDataTable__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VEditDialog__ = __webpack_require__(78);




var VTableOverflow = Object(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["c" /* createSimpleFunctional */])('table__overflow');

/* harmony default export */ __webpack_exports__["a"] = ({
  VDataTable: __WEBPACK_IMPORTED_MODULE_1__VDataTable__["a" /* default */],
  VEditDialog: __WEBPACK_IMPORTED_MODULE_2__VEditDialog__["a" /* default */],
  VTableOverflow: VTableOverflow
});

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_head__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_body__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_foot__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_progress__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_filterable__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_buttons_VBtn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_icons_VIcon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_progress_VProgressLinear__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_selects_VSelect__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_helpers__ = __webpack_require__(1);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };














/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-datatable',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_head__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_body__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_filterable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_foot__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_progress__["a" /* default */]],

  components: {
    VBtn: __WEBPACK_IMPORTED_MODULE_5__components_buttons_VBtn__["a" /* default */],
    VIcon: __WEBPACK_IMPORTED_MODULE_6__components_icons_VIcon__["a" /* default */],
    VProgressLinear: __WEBPACK_IMPORTED_MODULE_7__components_progress_VProgressLinear__["a" /* default */],
    VSelect: __WEBPACK_IMPORTED_MODULE_8__components_selects_VSelect__["a" /* default */],
    // Importing does not work properly
    'v-table-overflow': Object(__WEBPACK_IMPORTED_MODULE_9__util_helpers__["c" /* createSimpleFunctional */])('table__overflow')
  },

  data: function data() {
    return {
      all: false,
      searchLength: 0,
      defaultPagination: {
        page: 1,
        rowsPerPage: 5,
        descending: false,
        totalItems: 0
      }
    };
  },


  props: {
    headers: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    headerText: {
      type: String,
      default: 'text'
    },
    hideActions: Boolean,
    noResultsText: {
      type: String,
      default: 'No matching records found'
    },
    rowsPerPageItems: {
      type: Array,
      default: function _default() {
        return [5, 10, 25, { text: 'All', value: -1 }];
      }
    },
    rowsPerPageText: {
      type: String,
      default: 'Rows per page:'
    },
    selectAll: [Boolean, String],
    search: {
      required: false
    },
    filter: {
      type: Function,
      default: function _default(val, search) {
        return val !== null && ['undefined', 'boolean'].indexOf(typeof val === 'undefined' ? 'undefined' : _typeof(val)) === -1 && val.toString().toLowerCase().indexOf(search) !== -1;
      }
    },
    customFilter: {
      type: Function,
      default: function _default(items, search, filter) {
        search = search.toString().toLowerCase();
        return items.filter(function (i) {
          return Object.keys(i).some(function (j) {
            return filter(i[j], search);
          });
        });
      }
    },
    customSort: {
      type: Function,
      default: function _default(items, index, descending) {
        if (index === null) return items;

        return items.sort(function (a, b) {
          var sortA = Object(__WEBPACK_IMPORTED_MODULE_9__util_helpers__["f" /* getObjectValueByPath */])(a, index);
          var sortB = Object(__WEBPACK_IMPORTED_MODULE_9__util_helpers__["f" /* getObjectValueByPath */])(b, index);

          if (descending) {
            var _ref = [sortB, sortA];
            sortA = _ref[0];
            sortB = _ref[1];
          }

          if (!isNaN(sortA) && !isNaN(sortB)) return sortA - sortB;else if (sortA == null && sortB == null) return 0;

          var _map = [sortA, sortB].map(function (s) {
            return (s || '').toLocaleLowerCase();
          });

          var _map2 = _slicedToArray(_map, 2);

          sortA = _map2[0];
          sortB = _map2[1];

          if (sortA > sortB) return 1;
          if (sortA < sortB) return -1;

          return 0;
        });
      }
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    items: {
      type: Array,
      required: true,
      default: function _default() {
        return [];
      }
    },
    totalItems: {
      type: Number,
      default: null
    },
    loading: {
      type: [Boolean, String],
      default: false
    },
    selectedKey: {
      type: String,
      default: 'id'
    },
    pagination: {
      type: Object,
      default: null
    }
  },

  computed: {
    computedPagination: function computedPagination() {
      return this.pagination || this.defaultPagination;
    },
    hasSelectAll: function hasSelectAll() {
      return this.selectAll !== undefined && this.selectAll !== false;
    },
    itemsLength: function itemsLength() {
      if (this.search) return this.searchLength;
      return this.totalItems || this.items.length;
    },
    indeterminate: function indeterminate() {
      return this.hasSelectAll && this.someItems && !this.everyItem;
    },
    everyItem: function everyItem() {
      var _this = this;

      return this.filteredItems.length && this.filteredItems.every(function (i) {
        return _this.isSelected(i);
      });
    },
    someItems: function someItems() {
      var _this2 = this;

      return this.filteredItems.some(function (i) {
        return _this2.isSelected(i);
      });
    },
    getPage: function getPage() {
      var rowsPerPage = this.computedPagination.rowsPerPage;


      return rowsPerPage === Object(rowsPerPage) ? rowsPerPage.value : rowsPerPage;
    },
    pageStart: function pageStart() {
      return this.getPage === -1 ? 0 : (this.computedPagination.page - 1) * this.getPage;
    },
    pageStop: function pageStop() {
      return this.getPage === -1 ? this.itemsLength : this.computedPagination.page * this.getPage;
    },
    filteredItems: function filteredItems() {
      if (this.totalItems) return this.items;

      var items = this.items.slice();
      var hasSearch = typeof this.search !== 'undefined' && this.search !== null;

      if (hasSearch) {
        items = this.customFilter(items, this.search, this.filter);
        this.searchLength = items.length;
      }

      items = this.customSort(items, this.computedPagination.sortBy, this.computedPagination.descending);

      return this.hideActions && !this.pagination ? items : items.slice(this.pageStart, this.pageStop);
    },
    selected: function selected() {
      var _this3 = this;

      var selected = {};
      this.value.forEach(function (i) {
        return selected[i[_this3.selectedKey]] = true;
      });
      return selected;
    }
  },

  watch: {
    indeterminate: function indeterminate(val) {
      if (val) this.all = true;
    },
    someItems: function someItems(val) {
      if (!val) this.all = false;
    },
    search: function search() {
      this.updatePagination({ page: 1 });
    },
    everyItem: function everyItem(val) {
      if (val) this.all = true;
    }
  },

  methods: {
    updatePagination: function updatePagination(val) {
      var pagination = this.pagination || this.defaultPagination;
      var updatedPagination = Object.assign({}, pagination, val);

      if (this.pagination) {
        this.$emit('update:pagination', updatedPagination);
      } else {
        this.defaultPagination = updatedPagination;
      }
    },
    isSelected: function isSelected(item) {
      return this.selected[item[this.selectedKey]];
    },
    sort: function sort(index) {
      var _computedPagination = this.computedPagination,
          sortBy = _computedPagination.sortBy,
          descending = _computedPagination.descending;

      if (sortBy === null) {
        this.updatePagination({ sortBy: index, descending: false });
      } else if (sortBy === index && !descending) {
        this.updatePagination({ descending: true });
      } else if (sortBy !== index) {
        this.updatePagination({ sortBy: index, descending: false });
      } else {
        this.updatePagination({ sortBy: null, descending: null });
      }
    },
    genTR: function genTR(children) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.$createElement('tr', data, children);
    },
    toggle: function toggle(value) {
      var _this4 = this;

      var selected = Object.assign({}, this.selected);
      this.filteredItems.forEach(function (i) {
        return selected[i[_this4.selectedKey]] = value;
      });

      this.$emit('input', this.items.filter(function (i) {
        return selected[i[_this4.selectedKey]];
      }));
    }
  },

  created: function created() {
    var firstSortable = this.headers.find(function (h) {
      return !('sortable' in h) || h.sortable;
    });

    this.defaultPagination.sortBy = firstSortable ? firstSortable.value : null;

    if (!this.rowsPerPageItems.length) {
      console.warn('The prop \'rows-per-page-items\' in v-data-table can not be empty.');
    } else {
      this.defaultPagination.rowsPerPage = this.rowsPerPageItems[0];
    }

    this.updatePagination(Object.assign({}, this.defaultPagination, this.pagination));
  },
  render: function render(h) {
    return h('v-table-overflow', {}, [h('table', {
      'class': {
        'datatable table': true,
        'datatable--select-all': this.selectAll !== false
      }
    }, [this.genTHead(), this.genTProgress(), this.genTBody(), this.genTFoot()])]);
  }
});

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genTHead: function genTHead() {
      var _this = this;

      var children = [];

      if (this.$scopedSlots.headers) {
        var row = this.$scopedSlots.headers({
          headers: this.headers,
          indeterminate: this.indeterminate,
          all: this.all
        });

        children = row.length && row[0].tag === 'tr' ? row : this.genTR(row);
      } else {
        var _row = this.headers.map(function (o) {
          return _this.genHeader(o);
        });
        var checkbox = this.$createElement('v-checkbox', {
          props: {
            dark: this.dark,
            light: this.light,
            color: this.selectAll === true && '' || this.selectAll,
            hideDetails: true,
            inputValue: this.all,
            indeterminate: this.indeterminate
          },
          on: { change: this.toggle }
        });

        this.hasSelectAll && _row.unshift(this.$createElement('th', [checkbox]));

        children = this.genTR(_row);
      }

      return this.$createElement('thead', [children]);
    },
    genHeader: function genHeader(header) {
      var array = [this.$scopedSlots.headerCell ? this.$scopedSlots.headerCell({ header: header }) : header[this.headerText]];

      return this.$createElement.apply(this, ['th'].concat(_toConsumableArray(this.genHeaderData(header, array))));
    },
    genHeaderData: function genHeaderData(header, children) {
      var _this2 = this;

      var classes = ['column'];
      var data = {};
      var pagination = this.computedPagination;

      if ('sortable' in header && header.sortable || !('sortable' in header)) {
        data.on = { click: function click() {
            return _this2.sort(header.value);
          } };
        if (!('value' in header)) {
          console.warn('Data table headers must have a value property that corresponds to a value in the v-model array');
        }

        classes.push('sortable');
        var icon = this.$createElement('v-icon', 'arrow_upward');
        if (header.align && header.align === 'left') {
          children.push(icon);
        } else {
          children.unshift(icon);
        }

        var beingSorted = pagination.sortBy === header.value;
        if (beingSorted) {
          classes.push('active');
          classes.push(pagination.descending ? 'desc' : 'asc');
        }
      }

      classes.push('text-xs-' + (header.align || 'right'));
      data.class = classes;

      return [data, children];
    }
  }
});

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genTBody: function genTBody() {
      var children = [];

      if (!this.itemsLength) {
        children.push(this.genEmptyBody(this.noDataText));
      } else if (!this.filteredItems.length) {
        children.push(this.genEmptyBody(this.noResultsText));
      } else {
        children.push(this.genFilteredItems());
      }

      return this.$createElement('tbody', children);
    },
    genFilteredItems: function genFilteredItems() {
      var _this = this;

      return this.filteredItems.map(function (item, index) {
        var props = { item: item, index: index };
        var key = _this.selectedKey;

        Object.defineProperty(props, 'selected', {
          get: function get() {
            return _this.selected[item[_this.selectedKey]];
          },
          set: function set(value) {
            var selected = _this.value.slice();
            if (value) selected.push(item);else selected = selected.filter(function (i) {
              return i[key] !== item[key];
            });

            _this.$emit('input', selected);
          }
        });

        var row = _this.$scopedSlots.items(props);
        var needsTableRow = row.length && row[0].tag === 'td';

        return needsTableRow ? _this.genTR(row, {
          attrs: { active: _this.isSelected(item) },
          key: Math.random()
        }) : row;
      });
    },
    genEmptyBody: function genEmptyBody(text) {
      return this.genTR([this.$createElement('td', {
        'class': 'text-xs-center',
        attrs: { colspan: '100%' }
      }, text)]);
    }
  }
});

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    genPrevIcon: function genPrevIcon() {
      var _this = this;

      return this.$createElement('v-btn', {
        props: {
          disabled: this.computedPagination.page === 1,
          icon: true,
          flat: true
        },
        nativeOn: { click: function click() {
            return _this.computedPagination.page--;
          } }
      }, [this.$createElement('v-icon', 'chevron_left')]);
    },
    genNextIcon: function genNextIcon() {
      var _this2 = this;

      var pagination = this.computedPagination;
      var disabled = pagination.rowsPerPage < 0 || pagination.page * pagination.rowsPerPage >= this.itemsLength || this.pageStop < 0;

      return this.$createElement('v-btn', {
        props: {
          disabled: disabled,
          icon: true,
          flat: true
        },
        nativeOn: { click: function click() {
            return _this2.computedPagination.page++;
          } }
      }, [this.$createElement('v-icon', 'chevron_right')]);
    },
    genSelect: function genSelect() {
      var _this3 = this;

      return this.$createElement('div', {
        'class': 'datatable__actions__select'
      }, [this.rowsPerPageText, this.$createElement('v-select', {
        props: {
          items: this.rowsPerPageItems,
          value: this.computedPagination.rowsPerPage,
          hideDetails: true,
          auto: true,
          minWidth: '75px'
        },
        on: {
          input: function input(val) {
            _this3.updatePagination({
              page: 1,
              rowsPerPage: val
            });
          }
        }
      })]);
    },
    genPagination: function genPagination() {
      var pagination = '–';

      if (this.itemsLength) {
        var stop = this.itemsLength < this.pageStop || this.pageStop < 0 ? this.itemsLength : this.pageStop;

        pagination = this.$scopedSlots.pageText ? this.$scopedSlots.pageText({
          pageStart: this.pageStart + 1,
          pageStop: stop,
          itemsLength: this.itemsLength
        }) : this.pageStart + 1 + '-' + stop + ' of ' + this.itemsLength;
      }

      return this.$createElement('div', {
        'class': 'datatable__actions__pagination'
      }, [pagination]);
    },
    genActions: function genActions() {
      return [this.$createElement('div', {
        'class': 'datatable__actions'
      }, [this.genSelect(), this.genPagination(), this.genPrevIcon(), this.genNextIcon()])];
    },
    genTFoot: function genTFoot() {
      var children = [];

      if (this.$slots.footer) {
        var footer = this.$slots.footer;
        var needsTableRow = footer.length && footer[0].tag === 'td';
        var row = !needsTableRow ? footer : this.genTR(this.$slots.footer);

        children.push(row);
      }

      if (!this.hideActions) {
        children.push(this.genTR([this.$createElement('td', {
          attrs: { colspan: '100%' }
        }, this.genActions())]));
      }

      if (!children.length) return null;
      return this.$createElement('tfoot', children);
    }
  }
});

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      color: ''
    };
  },


  watch: {
    loading: function loading(val) {
      if (val) this.color = val;
    }
  },

  methods: {
    genTProgress: function genTProgress() {
      var loader = this.$createElement('v-progress-linear', {
        props: {
          primary: this.color === 'primary',
          secondary: this.color === 'secondary',
          success: this.color === 'success',
          info: this.color === 'info',
          warning: this.color === 'warning',
          error: this.color === 'error',
          indeterminate: true,
          height: 3,
          active: !!this.loading
        }
      });

      var col = this.$createElement('th', {
        class: 'column',
        attrs: {
          colspan: '100%'
        }
      }, [loader]);

      return this.$createElement('thead', {
        class: 'datatable__progress'
      }, [this.genTR([col])]);
    }
  }
});

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_transitions__ = __webpack_require__(9);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-progress-linear',

  components: {
    VFadeTransition: __WEBPACK_IMPORTED_MODULE_0__components_transitions__["b" /* VFadeTransition */],
    VSlideXTransition: __WEBPACK_IMPORTED_MODULE_0__components_transitions__["c" /* VSlideXTransition */]
  },

  props: {
    active: {
      type: Boolean,
      default: true
    },
    buffer: Boolean,
    bufferValue: Number,
    error: Boolean,
    height: {
      type: [Number, String],
      default: 7
    },
    indeterminate: Boolean,
    info: Boolean,
    secondary: Boolean,
    success: Boolean,
    query: Boolean,
    warning: Boolean,
    value: {
      type: [Number, String],
      default: 0
    },
    colorFront: {
      type: String,
      default: null
    },
    colorBack: {
      type: String,
      default: null
    }
  },

  computed: {
    classes: function classes() {
      return {
        'progress-linear--query': this.query,
        'progress-linear--secondary': this.secondary,
        'progress-linear--success': this.success,
        'progress-linear--info': this.info,
        'progress-linear--warning': this.warning,
        'progress-linear--error': this.error
      };
    },
    styles: function styles() {
      var styles = {};

      if (!this.active) {
        styles.height = 0;
      }

      if (this.buffer) {
        styles.width = this.bufferValue + '%';
      }

      return styles;
    },
    bufferStyles: function bufferStyles() {
      var styles = {};

      if (!this.active) {
        styles.height = 0;
      }

      return styles;
    }
  },

  methods: {
    genDeterminate: function genDeterminate(h) {
      return h('div', {
        ref: 'front',
        class: ['progress-linear__bar__determinate', this.colorFront],
        style: { width: this.value + '%' }
      });
    },
    genBar: function genBar(h, name) {
      return h('div', {
        class: ['progress-linear__bar__indeterminate', name, this.colorFront]
      });
    },
    genIndeterminate: function genIndeterminate(h) {
      return h('div', {
        ref: 'front',
        class: {
          'progress-linear__bar__indeterminate': true,
          'progress-linear__bar__indeterminate--active': this.active
        }
      }, [this.genBar(h, 'long'), this.genBar(h, 'short')]);
    }
  },

  render: function render(h) {
    var fade = h('v-fade-transition', [this.indeterminate && this.genIndeterminate(h)]);
    var slide = h('v-slide-x-transition', [!this.indeterminate && this.genDeterminate(h)]);

    var bar = h('div', { class: ['progress-linear__bar', this.colorBack], style: this.styles }, [fade, slide]);

    return h('div', {
      class: ['progress-linear', this.classes],
      style: { height: this.height + 'px' },
      on: this.$listeners
    }, [bar]);
  }
});

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-edit-dialog',

  data: function data() {
    return {
      isActive: false,
      isSaving: false
    };
  },


  props: {
    cancelText: {
      default: 'Cancel'
    },
    large: Boolean,
    lazy: Boolean,
    saveText: {
      default: 'Save'
    },
    transition: {
      type: String,
      default: 'v-slide-x-reverse-transition'
    }
  },

  watch: {
    isActive: function isActive(val) {
      val && this.$emit('open') && this.$nextTick(this.focus);
      if (!val) {
        !this.isSaving && this.$emit('cancel');
        this.isSaving && this.$emit('close');
        this.isSaving = false;
      }
    }
  },

  methods: {
    cancel: function cancel() {
      this.isActive = false;
    },
    focus: function focus() {
      var input = this.$el.querySelector('input');
      input && setTimeout(function () {
        return input.focus();
      }, 0);
    },
    save: function save() {
      this.isSaving = true;
      this.isActive = false;
      this.$emit('save');
    },
    genButton: function genButton(fn, text) {
      return this.$createElement('v-btn', {
        props: {
          flat: true,
          primary: true,
          light: true
        },
        nativeOn: { click: fn }
      }, text);
    },
    genActions: function genActions() {
      return this.$createElement('div', {
        'class': 'small-dialog__actions',
        directives: [{
          name: 'show',
          value: this.large
        }]
      }, [this.genButton(this.cancel, this.cancelText), this.genButton(this.save, this.saveText)]);
    },
    genContent: function genContent() {
      var _this = this;

      return this.$createElement('div', {
        'class': 'small-dialog__content',
        on: {
          keydown: function keydown(e) {
            e.keyCode === 27 && _this.cancel();
            e.keyCode === 13 && _this.save();
          }
        }
      }, [this.$slots.input]);
    }
  },

  render: function render(h) {
    var _this2 = this;

    return h('v-menu', {
      'class': 'small-dialog',
      props: {
        transition: this.transition,
        origin: 'top right',
        right: true,
        value: this.isActive,
        closeOnContentClick: false,
        lazy: this.lazy
      },
      on: {
        input: function input(val) {
          return _this2.isActive = val;
        }
      }
    }, [h('a', {
      domProps: { href: 'javascript:;' },
      slot: 'activator'
    }, [this.$slots.default]), this.genContent(), this.genActions()]);
  }
});

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VTextField__ = __webpack_require__(80);


/* harmony default export */ __webpack_exports__["a"] = ({
  VTextField: __WEBPACK_IMPORTED_MODULE_0__VTextField__["a" /* default */]
});

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_input__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-text-field',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_input__["a" /* default */]],

  inheritAttrs: false,

  data: function data() {
    return {
      hasFocused: false,
      inputHeight: null
    };
  },


  props: {
    autofocus: Boolean,
    autoGrow: Boolean,
    counter: Boolean,
    fullWidth: Boolean,
    max: [Number, String],
    min: [Number, String],
    multiLine: Boolean,
    placeholder: String,
    prefix: String,
    rows: {
      default: 5
    },
    singleLine: Boolean,
    solo: Boolean,
    suffix: String,
    textarea: Boolean,
    type: {
      type: String,
      default: 'text'
    }
  },

  computed: {
    classes: function classes() {
      return {
        'input-group--text-field': true,
        'input-group--single-line': this.singleLine,
        'input-group--solo': this.solo,
        'input-group--multi-line': this.multiLine,
        'input-group--full-width': this.fullWidth,
        'input-group--prefix': this.prefix,
        'input-group--suffix': this.suffix,
        'input-group--textarea': this.textarea
      };
    },
    hasError: function hasError() {
      return this.validations.length || this.errorMessages.length > 0 || !this.counterIsValid() || !this.validateIsValid() || this.error;
    },
    count: function count() {
      var inputLength = void 0;
      if (this.inputValue) inputLength = this.inputValue.toString().length;else inputLength = 0;
      var min = inputLength;

      if (this.counterMin !== 0 && inputLength < this.counterMin) {
        min = this.counterMin;
      }

      return min + ' / ' + this.counterMax;
    },
    counterMin: function counterMin() {
      var parsedMin = parseInt(this.min, 10);
      return isNaN(parsedMin) ? 0 : parsedMin;
    },
    counterMax: function counterMax() {
      var parsedMax = parseInt(this.max, 10);
      return isNaN(parsedMax) ? 25 : parsedMax;
    },

    inputValue: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        if (this.modifiers.trim) {
          val = val.trim();
        }

        if (this.modifiers.number) {
          val = Number(val);
        }

        if (!this.modifiers.lazy) {
          this.$emit('input', val);
        }

        this.lazyValue = val;
      }
    },
    isDirty: function isDirty() {
      return this.lazyValue !== null && typeof this.lazyValue !== 'undefined' && this.lazyValue.toString().length > 0 || this.placeholder;
    }
  },

  watch: {
    focused: function focused(val) {
      this.hasFocused = true;

      !val && this.$emit('change', this.lazyValue);
    },
    value: function value() {
      this.lazyValue = this.value;
      this.validate();
      this.multiLine && this.autoGrow && this.calculateInputHeight();
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.$vuetify.load(function () {
      _this.multiLine && _this.autoGrow && _this.calculateInputHeight();
      _this.autofocus && _this.focus();
    });
  },


  methods: {
    calculateInputHeight: function calculateInputHeight() {
      var _this2 = this;

      this.inputHeight = null;

      this.$nextTick(function () {
        var height = _this2.$refs.input.scrollHeight;
        var minHeight = _this2.rows * 24;
        var inputHeight = height < minHeight ? minHeight : height;
        _this2.inputHeight = inputHeight;
      });
    },
    onInput: function onInput(e) {
      this.inputValue = e.target.value;
      this.multiLine && this.autoGrow && this.calculateInputHeight();
    },
    blur: function blur(e) {
      var _this3 = this;

      this.validate();
      this.$nextTick(function () {
        return _this3.focused = false;
      });
      this.$emit('blur', e);
    },
    focus: function focus(e) {
      this.focused = true;
      this.$refs.input.focus();
      this.$emit('focus', e);
    },
    genCounter: function genCounter() {
      return this.$createElement('div', {
        'class': {
          'input-group__counter': true,
          'input-group__counter--error': !this.counterIsValid()
        }
      }, this.count);
    },
    genInput: function genInput() {
      var tag = this.multiLine || this.textarea ? 'textarea' : 'input';

      var data = {
        style: {
          'height': this.inputHeight && this.inputHeight + 'px'
        },
        domProps: {
          autofucus: this.autofocus,
          disabled: this.disabled,
          required: this.required,
          value: this.lazyValue
        },
        attrs: _extends({}, this.$attrs, {
          tabindex: this.tabindex
        }),
        on: _extends({}, this.$listeners, {
          blur: this.blur,
          input: this.onInput,
          focus: this.focus
        }),
        ref: 'input'
      };

      if (this.placeholder) data.domProps.placeholder = this.placeholder;

      if (!this.counter) {
        if (![undefined, null].includes(this.max)) data.attrs.max = this.max;
        if (![undefined, null].includes(this.min)) data.attrs.min = this.min;
      }

      if (!this.textarea && !this.multiLine) {
        data.domProps.type = this.type;
      } else {
        data.domProps.rows = this.rows;
      }

      var children = [this.$createElement(tag, data)];

      this.prefix && children.unshift(this.genFix('prefix'));
      this.suffix && children.push(this.genFix('suffix'));

      return children;
    },
    genFix: function genFix(type) {
      return this.$createElement('span', {
        'class': 'input-group--text-field__' + type
      }, this[type]);
    },

    counterIsValid: function counterIsValid() {
      var val = this.inputValue && this.inputValue.toString() || '';

      return !this.counter || val.length >= this.counterMin && val.length <= this.counterMax;
    },
    validateIsValid: function validateIsValid() {
      return !this.required || this.required && this.isDirty || !this.hasFocused || this.hasFocused && this.focused;
    }
  },

  render: function render() {
    return this.genInputGroup(this.genInput(), { attrs: { tabindex: false } });
  }
});

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function load(cb) {
  var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (document.readyState === 'complete') {
    return setTimeout(cb, 0);
  }

  if (document.readyState === 'interactive' && i <= 10) {
    return setTimeout(function () {
      return load(cb, i + 1);
    }, 200);
  }

  window.addEventListener('load', cb);
}

/* harmony default export */ __webpack_exports__["a"] = (load);

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {exports = module.exports = SemVer;

// The debug function is excluded entirely from the minified version.
/* nomin */ var debug;
/* nomin */ if (typeof process === 'object' &&
    /* nomin */ process.env &&
    /* nomin */ process.env.NODE_DEBUG &&
    /* nomin */ /\bsemver\b/i.test(process.env.NODE_DEBUG))
  /* nomin */ debug = function() {
    /* nomin */ var args = Array.prototype.slice.call(arguments, 0);
    /* nomin */ args.unshift('SEMVER');
    /* nomin */ console.log.apply(console, args);
    /* nomin */ };
/* nomin */ else
  /* nomin */ debug = function() {};

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0';

var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

// The actual regexps go on exports.re
var re = exports.re = [];
var src = exports.src = [];
var R = 0;

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++;
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
var NUMERICIDENTIFIERLOOSE = R++;
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';


// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++;
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';


// ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++;
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')';

var MAINVERSIONLOOSE = R++;
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++;
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
                            '|' + src[NONNUMERICIDENTIFIER] + ')';

var PRERELEASEIDENTIFIERLOOSE = R++;
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[NONNUMERICIDENTIFIER] + ')';


// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++;
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

var PRERELEASELOOSE = R++;
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++;
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++;
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';


// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++;
var FULLPLAIN = 'v?' + src[MAINVERSION] +
                src[PRERELEASE] + '?' +
                src[BUILD] + '?';

src[FULL] = '^' + FULLPLAIN + '$';

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
                 src[PRERELEASELOOSE] + '?' +
                 src[BUILD] + '?';

var LOOSE = R++;
src[LOOSE] = '^' + LOOSEPLAIN + '$';

var GTLT = R++;
src[GTLT] = '((?:<|>)?=?)';

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
var XRANGEIDENTIFIERLOOSE = R++;
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
var XRANGEIDENTIFIER = R++;
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

var XRANGEPLAIN = R++;
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[PRERELEASE] + ')?' +
                   src[BUILD] + '?' +
                   ')?)?';

var XRANGEPLAINLOOSE = R++;
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[PRERELEASELOOSE] + ')?' +
                        src[BUILD] + '?' +
                        ')?)?';

var XRANGE = R++;
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
var XRANGELOOSE = R++;
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

// Tilde ranges.
// Meaning is "reasonably at or greater than"
var LONETILDE = R++;
src[LONETILDE] = '(?:~>?)';

var TILDETRIM = R++;
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
var tildeTrimReplace = '$1~';

var TILDE = R++;
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
var TILDELOOSE = R++;
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

// Caret ranges.
// Meaning is "at least and backwards compatible with"
var LONECARET = R++;
src[LONECARET] = '(?:\\^)';

var CARETTRIM = R++;
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
var caretTrimReplace = '$1^';

var CARET = R++;
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
var CARETLOOSE = R++;
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

// A simple gt/lt/eq thing, or just "" to indicate "any version"
var COMPARATORLOOSE = R++;
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
var COMPARATOR = R++;
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';


// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
var COMPARATORTRIM = R++;
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

// this one has to use the /g flag
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
var comparatorTrimReplace = '$1$2$3';


// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
var HYPHENRANGE = R++;
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[XRANGEPLAIN] + ')' +
                   '\\s*$';

var HYPHENRANGELOOSE = R++;
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s*$';

// Star ranges basically just allow anything at all.
var STAR = R++;
src[STAR] = '(<|>)?=?\\s*\\*';

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i]);
  if (!re[i])
    re[i] = new RegExp(src[i]);
}

exports.parse = parse;
function parse(version, loose) {
  if (version instanceof SemVer)
    return version;

  if (typeof version !== 'string')
    return null;

  if (version.length > MAX_LENGTH)
    return null;

  var r = loose ? re[LOOSE] : re[FULL];
  if (!r.test(version))
    return null;

  try {
    return new SemVer(version, loose);
  } catch (er) {
    return null;
  }
}

exports.valid = valid;
function valid(version, loose) {
  var v = parse(version, loose);
  return v ? v.version : null;
}


exports.clean = clean;
function clean(version, loose) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
  return s ? s.version : null;
}

exports.SemVer = SemVer;

function SemVer(version, loose) {
  if (version instanceof SemVer) {
    if (version.loose === loose)
      return version;
    else
      version = version.version;
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version);
  }

  if (version.length > MAX_LENGTH)
    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')

  if (!(this instanceof SemVer))
    return new SemVer(version, loose);

  debug('SemVer', version, loose);
  this.loose = loose;
  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

  if (!m)
    throw new TypeError('Invalid Version: ' + version);

  this.raw = version;

  // these are actually numbers
  this.major = +m[1];
  this.minor = +m[2];
  this.patch = +m[3];

  if (this.major > MAX_SAFE_INTEGER || this.major < 0)
    throw new TypeError('Invalid major version')

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0)
    throw new TypeError('Invalid minor version')

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0)
    throw new TypeError('Invalid patch version')

  // numberify any prerelease numeric ids
  if (!m[4])
    this.prerelease = [];
  else
    this.prerelease = m[4].split('.').map(function(id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id;
        if (num >= 0 && num < MAX_SAFE_INTEGER)
          return num;
      }
      return id;
    });

  this.build = m[5] ? m[5].split('.') : [];
  this.format();
}

SemVer.prototype.format = function() {
  this.version = this.major + '.' + this.minor + '.' + this.patch;
  if (this.prerelease.length)
    this.version += '-' + this.prerelease.join('.');
  return this.version;
};

SemVer.prototype.toString = function() {
  return this.version;
};

SemVer.prototype.compare = function(other) {
  debug('SemVer.compare', this.version, this.loose, other);
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  return this.compareMain(other) || this.comparePre(other);
};

SemVer.prototype.compareMain = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch);
};

SemVer.prototype.comparePre = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.loose);

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length)
    return -1;
  else if (!this.prerelease.length && other.prerelease.length)
    return 1;
  else if (!this.prerelease.length && !other.prerelease.length)
    return 0;

  var i = 0;
  do {
    var a = this.prerelease[i];
    var b = other.prerelease[i];
    debug('prerelease compare', i, a, b);
    if (a === undefined && b === undefined)
      return 0;
    else if (b === undefined)
      return 1;
    else if (a === undefined)
      return -1;
    else if (a === b)
      continue;
    else
      return compareIdentifiers(a, b);
  } while (++i);
};

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function(release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor = 0;
      this.major++;
      this.inc('pre', identifier);
      break;
    case 'preminor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor++;
      this.inc('pre', identifier);
      break;
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0;
      this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0)
        this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)
        this.major++;
      this.minor = 0;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0)
        this.minor++;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0)
        this.patch++;
      this.prerelease = [];
      break;
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0)
        this.prerelease = [0];
      else {
        var i = this.prerelease.length;
        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++;
            i = -2;
          }
        }
        if (i === -1) // didn't increment anything
          this.prerelease.push(0);
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1]))
            this.prerelease = [identifier, 0];
        } else
          this.prerelease = [identifier, 0];
      }
      break;

    default:
      throw new Error('invalid increment argument: ' + release);
  }
  this.format();
  this.raw = this.version;
  return this;
};

exports.inc = inc;
function inc(version, release, loose, identifier) {
  if (typeof(loose) === 'string') {
    identifier = loose;
    loose = undefined;
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
}

exports.diff = diff;
function diff(version1, version2) {
  if (eq(version1, version2)) {
    return null;
  } else {
    var v1 = parse(version1);
    var v2 = parse(version2);
    if (v1.prerelease.length || v2.prerelease.length) {
      for (var key in v1) {
        if (key === 'major' || key === 'minor' || key === 'patch') {
          if (v1[key] !== v2[key]) {
            return 'pre'+key;
          }
        }
      }
      return 'prerelease';
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return key;
        }
      }
    }
  }
}

exports.compareIdentifiers = compareIdentifiers;

var numeric = /^[0-9]+$/;
function compareIdentifiers(a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return (anum && !bnum) ? -1 :
         (bnum && !anum) ? 1 :
         a < b ? -1 :
         a > b ? 1 :
         0;
}

exports.rcompareIdentifiers = rcompareIdentifiers;
function rcompareIdentifiers(a, b) {
  return compareIdentifiers(b, a);
}

exports.major = major;
function major(a, loose) {
  return new SemVer(a, loose).major;
}

exports.minor = minor;
function minor(a, loose) {
  return new SemVer(a, loose).minor;
}

exports.patch = patch;
function patch(a, loose) {
  return new SemVer(a, loose).patch;
}

exports.compare = compare;
function compare(a, b, loose) {
  return new SemVer(a, loose).compare(b);
}

exports.compareLoose = compareLoose;
function compareLoose(a, b) {
  return compare(a, b, true);
}

exports.rcompare = rcompare;
function rcompare(a, b, loose) {
  return compare(b, a, loose);
}

exports.sort = sort;
function sort(list, loose) {
  return list.sort(function(a, b) {
    return exports.compare(a, b, loose);
  });
}

exports.rsort = rsort;
function rsort(list, loose) {
  return list.sort(function(a, b) {
    return exports.rcompare(a, b, loose);
  });
}

exports.gt = gt;
function gt(a, b, loose) {
  return compare(a, b, loose) > 0;
}

exports.lt = lt;
function lt(a, b, loose) {
  return compare(a, b, loose) < 0;
}

exports.eq = eq;
function eq(a, b, loose) {
  return compare(a, b, loose) === 0;
}

exports.neq = neq;
function neq(a, b, loose) {
  return compare(a, b, loose) !== 0;
}

exports.gte = gte;
function gte(a, b, loose) {
  return compare(a, b, loose) >= 0;
}

exports.lte = lte;
function lte(a, b, loose) {
  return compare(a, b, loose) <= 0;
}

exports.cmp = cmp;
function cmp(a, op, b, loose) {
  var ret;
  switch (op) {
    case '===':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a === b;
      break;
    case '!==':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a !== b;
      break;
    case '': case '=': case '==': ret = eq(a, b, loose); break;
    case '!=': ret = neq(a, b, loose); break;
    case '>': ret = gt(a, b, loose); break;
    case '>=': ret = gte(a, b, loose); break;
    case '<': ret = lt(a, b, loose); break;
    case '<=': ret = lte(a, b, loose); break;
    default: throw new TypeError('Invalid operator: ' + op);
  }
  return ret;
}

exports.Comparator = Comparator;
function Comparator(comp, loose) {
  if (comp instanceof Comparator) {
    if (comp.loose === loose)
      return comp;
    else
      comp = comp.value;
  }

  if (!(this instanceof Comparator))
    return new Comparator(comp, loose);

  debug('comparator', comp, loose);
  this.loose = loose;
  this.parse(comp);

  if (this.semver === ANY)
    this.value = '';
  else
    this.value = this.operator + this.semver.version;

  debug('comp', this);
}

var ANY = {};
Comparator.prototype.parse = function(comp) {
  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var m = comp.match(r);

  if (!m)
    throw new TypeError('Invalid comparator: ' + comp);

  this.operator = m[1];
  if (this.operator === '=')
    this.operator = '';

  // if it literally is just '>' or '' then allow anything.
  if (!m[2])
    this.semver = ANY;
  else
    this.semver = new SemVer(m[2], this.loose);
};

Comparator.prototype.toString = function() {
  return this.value;
};

Comparator.prototype.test = function(version) {
  debug('Comparator.test', version, this.loose);

  if (this.semver === ANY)
    return true;

  if (typeof version === 'string')
    version = new SemVer(version, this.loose);

  return cmp(version, this.operator, this.semver, this.loose);
};


exports.Range = Range;
function Range(range, loose) {
  if ((range instanceof Range) && range.loose === loose)
    return range;

  if (!(this instanceof Range))
    return new Range(range, loose);

  this.loose = loose;

  // First, split based on boolean or ||
  this.raw = range;
  this.set = range.split(/\s*\|\|\s*/).map(function(range) {
    return this.parseRange(range.trim());
  }, this).filter(function(c) {
    // throw out any that are not relevant for whatever reason
    return c.length;
  });

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range);
  }

  this.format();
}

Range.prototype.format = function() {
  this.range = this.set.map(function(comps) {
    return comps.join(' ').trim();
  }).join('||').trim();
  return this.range;
};

Range.prototype.toString = function() {
  return this.range;
};

Range.prototype.parseRange = function(range) {
  var loose = this.loose;
  range = range.trim();
  debug('range', range, loose);
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
  range = range.replace(hr, hyphenReplace);
  debug('hyphen replace', range);
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
  debug('comparator trim', range, re[COMPARATORTRIM]);

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[TILDETRIM], tildeTrimReplace);

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[CARETTRIM], caretTrimReplace);

  // normalize spaces
  range = range.split(/\s+/).join(' ');

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var set = range.split(' ').map(function(comp) {
    return parseComparator(comp, loose);
  }).join(' ').split(/\s+/);
  if (this.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function(comp) {
      return !!comp.match(compRe);
    });
  }
  set = set.map(function(comp) {
    return new Comparator(comp, loose);
  });

  return set;
};

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators;
function toComparators(range, loose) {
  return new Range(range, loose).set.map(function(comp) {
    return comp.map(function(c) {
      return c.value;
    }).join(' ').trim().split(' ');
  });
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator(comp, loose) {
  debug('comp', comp);
  comp = replaceCarets(comp, loose);
  debug('caret', comp);
  comp = replaceTildes(comp, loose);
  debug('tildes', comp);
  comp = replaceXRanges(comp, loose);
  debug('xrange', comp);
  comp = replaceStars(comp, loose);
  debug('stars', comp);
  return comp;
}

function isX(id) {
  return !id || id.toLowerCase() === 'x' || id === '*';
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceTilde(comp, loose);
  }).join(' ');
}

function replaceTilde(comp, loose) {
  var r = loose ? re[TILDELOOSE] : re[TILDE];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p))
      // ~1.2 == >=1.2.0 <1.3.0
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    else if (pr) {
      debug('replaceTilde pr', pr);
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      ret = '>=' + M + '.' + m + '.' + p + pr +
            ' <' + M + '.' + (+m + 1) + '.0';
    } else
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0';

    debug('tilde return', ret);
    return ret;
  });
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceCaret(comp, loose);
  }).join(' ');
}

function replaceCaret(comp, loose) {
  debug('caret', comp, loose);
  var r = loose ? re[CARETLOOSE] : re[CARET];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p)) {
      if (M === '0')
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
      else
        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
    } else if (pr) {
      debug('replaceCaret pr', pr);
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p + pr +
              ' <' + (+M + 1) + '.0.0';
    } else {
      debug('no pr');
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0';
    }

    debug('caret return', ret);
    return ret;
  });
}

function replaceXRanges(comp, loose) {
  debug('replaceXRanges', comp, loose);
  return comp.split(/\s+/).map(function(comp) {
    return replaceXRange(comp, loose);
  }).join(' ');
}

function replaceXRange(comp, loose) {
  comp = comp.trim();
  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr);
    var xM = isX(M);
    var xm = xM || isX(m);
    var xp = xm || isX(p);
    var anyX = xp;

    if (gtlt === '=' && anyX)
      gtlt = '';

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // replace X with 0
      if (xm)
        m = 0;
      if (xp)
        p = 0;

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>=';
        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else if (xp) {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';
        if (xm)
          M = +M + 1;
        else
          m = +m + 1;
      }

      ret = gtlt + M + '.' + m + '.' + p;
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    }

    debug('xRange return', ret);

    return ret;
  });
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars(comp, loose) {
  debug('replaceStars', comp, loose);
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[STAR], '');
}

// This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace($0,
                       from, fM, fm, fp, fpr, fb,
                       to, tM, tm, tp, tpr, tb) {

  if (isX(fM))
    from = '';
  else if (isX(fm))
    from = '>=' + fM + '.0.0';
  else if (isX(fp))
    from = '>=' + fM + '.' + fm + '.0';
  else
    from = '>=' + from;

  if (isX(tM))
    to = '';
  else if (isX(tm))
    to = '<' + (+tM + 1) + '.0.0';
  else if (isX(tp))
    to = '<' + tM + '.' + (+tm + 1) + '.0';
  else if (tpr)
    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
  else
    to = '<=' + to;

  return (from + ' ' + to).trim();
}


// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function(version) {
  if (!version)
    return false;

  if (typeof version === 'string')
    version = new SemVer(version, this.loose);

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version))
      return true;
  }
  return false;
};

function testSet(set, version) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version))
      return false;
  }

  if (version.prerelease.length) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (var i = 0; i < set.length; i++) {
      debug(set[i].semver);
      if (set[i].semver === ANY)
        continue;

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver;
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch)
          return true;
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false;
  }

  return true;
}

exports.satisfies = satisfies;
function satisfies(version, range, loose) {
  try {
    range = new Range(range, loose);
  } catch (er) {
    return false;
  }
  return range.test(version);
}

exports.maxSatisfying = maxSatisfying;
function maxSatisfying(versions, range, loose) {
  return versions.filter(function(version) {
    return satisfies(version, range, loose);
  }).sort(function(a, b) {
    return rcompare(a, b, loose);
  })[0] || null;
}

exports.minSatisfying = minSatisfying;
function minSatisfying(versions, range, loose) {
  return versions.filter(function(version) {
    return satisfies(version, range, loose);
  }).sort(function(a, b) {
    return compare(a, b, loose);
  })[0] || null;
}

exports.validRange = validRange;
function validRange(range, loose) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, loose).range || '*';
  } catch (er) {
    return null;
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr;
function ltr(version, range, loose) {
  return outside(version, range, '<', loose);
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr;
function gtr(version, range, loose) {
  return outside(version, range, '>', loose);
}

exports.outside = outside;
function outside(version, range, hilo, loose) {
  version = new SemVer(version, loose);
  range = new Range(range, loose);

  var gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;
    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, loose)) {
    return false;
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];

    var high = null;
    var low = null;

    comparators.forEach(function(comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator;
      low = low || comparator;
      if (gtfn(comparator.semver, high.semver, loose)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, loose)) {
        low = comparator;
      }
    });

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }
  return true;
}

exports.prerelease = prerelease;
function prerelease(version, loose) {
  var parsed = parse(version, loose);
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(83)))

/***/ }),
/* 83 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })
/******/ ]);
});
//# sourceMappingURL=vuetify.js.map