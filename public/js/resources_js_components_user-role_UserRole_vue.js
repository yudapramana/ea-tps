"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_user-role_UserRole_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user-role/UserRole.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user-role/UserRole.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/role.service */ "./resources/js/services/role.service.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.es.js");
/* harmony import */ var _services_user_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-role.service */ "./resources/js/services/user-role.service.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UserRole',
  computed: {
    currentUser: function currentUser() {
      return this.$store.state.auth.user;
    }
  },
  data: function data() {
    return {
      permission: {},
      loggedIn: localStorage.getItem("loggedIn"),
      token: localStorage.getItem("token"),
      loading: false,
      disabled: false,
      editModal: false,
      levels: {},
      form: new vform__WEBPACK_IMPORTED_MODULE_1__["default"]({
        id: "",
        name: ""
      })
    };
  },
  methods: {
    loadPermission: function loadPermission() {
      var _this = this;
      _services_user_role_service__WEBPACK_IMPORTED_MODULE_2__["default"].getPermission().then(function (response) {
        console.log('response');
        console.log(response.data);
        _this.permission = response.data;
      }, function (error) {
        alert(error);
      });
    },
    loadRoles: function loadRoles() {
      var _this2 = this;
      _services_user_role_service__WEBPACK_IMPORTED_MODULE_2__["default"].get().then(function (response) {
        console.log('response');
        console.log(response.data);
        _this2.levels = response.data.data;
      }, function (error) {
        alert(error);
      });
    },
    loadData: function loadData() {
      this.$Progress.start();
      this.loadRoles();
      this.loadPermission();
      this.$Progress.finish();
    },
    saveData: function saveData() {
      var _this3 = this;
      this.$Progress.start();
      this.loading = true;
      this.disabled = true;
      _services_role_service__WEBPACK_IMPORTED_MODULE_0__["default"].store(this.form).then(function (response) {
        $("#fModal").modal("hide");
        _this3.loadData();
        Toast.fire({
          icon: "success",
          title: "Data saved successfully"
        });
        _this3.loading = false;
        _this3.disabled = false;
        _this3.$Progress.finish();
        console.log('response local');
        console.log(response);
      }, function (error) {
        console.log('error local');
        console.log(error);
        console.log('error local message');
        console.log(error.message);
        _this3.loading = false;
        _this3.disabled = false;
        _this3.$Progress.fail();
        Swal.fire("Failed", error.message, "warning");
      });
    },
    updateData: function updateData() {
      var _this4 = this;
      this.$Progress.start();
      console.log("tes ubah data");
      _services_role_service__WEBPACK_IMPORTED_MODULE_0__["default"].update(this.form).then(function (response) {
        $("#fModal").modal("hide");
        _this4.loadData();
        Toast.fire({
          icon: "success",
          title: "Data saved successfully"
        });
        _this4.loading = false;
        _this4.disabled = false;
        _this4.$Progress.finish();
      }, function (error) {
        _this4.loading = false;
        _this4.disabled = false;
        _this4.$Progress.fail();
      });
    },
    deleteData: function deleteData(id) {
      var _this5 = this;
      Swal.fire({
        title: "Anda Yakin ingin menghapus data ini ?",
        text: "Klik Batal untuk membatalkan penghapusan",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Hapus"
      }).then(function (result) {
        if (result.value) {
          _services_role_service__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](id).then(function (response) {
            _this5.loadData();
            Toast.fire({
              icon: "success",
              title: "Data deleted successfully"
            });
          }, function (error) {
            Swal.fire("Gagal", error.message, "warning");
          });
        }
      });
    },
    showModalEdit: function showModalEdit(item) {
      this.editModal = true;
      console.log(item);
      $("#fModal").modal("show");
      this.form.fill(item);
      var parsedPermissionIds = JSON.parse(item.permission_ids);
      console.log('parsedPermissionIds');
      console.log(parsedPermissionIds);
      this.form.permission_ids = parsedPermissionIds;
    },
    showModal: function showModal() {
      this.editModal = false;
      this.form.reset();
      console.log("Show Modal");
      $("#fModal").modal("show");
    }
  },
  mounted: function mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    } else {
      this.loadData();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user-role/UserRole.vue?vue&type=template&id=5f2b4b83":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user-role/UserRole.vue?vue&type=template&id=5f2b4b83 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "content-wrapper"
};
var _hoisted_2 = {
  "class": "content"
};
var _hoisted_3 = {
  "class": "container"
};
var _hoisted_4 = {
  "class": "row justify-content-center mt-5"
};
var _hoisted_5 = {
  "class": "col-md-12"
};
var _hoisted_6 = {
  "class": "card"
};
var _hoisted_7 = {
  "class": "card-header"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "card-title"
}, "Data Role User", -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "card-tools"
};
var _hoisted_10 = {
  "class": "card-body"
};
var _hoisted_11 = {
  "class": "form-group"
};
var _hoisted_12 = {
  "class": "table-responsive"
};
var _hoisted_13 = {
  "class": "table"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Nama Level"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  width: "70%"
}, "Permissions"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Aksi")])], -1 /* HOISTED */);
var _hoisted_15 = {
  key: 0
};
var _hoisted_16 = {
  key: 1
};
var _hoisted_17 = ["onClick"];
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-edit blue"
}, null, -1 /* HOISTED */);
var _hoisted_19 = [_hoisted_18];
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" | ");
var _hoisted_21 = ["onClick"];
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-trash-alt red"
}, null, -1 /* HOISTED */);
var _hoisted_23 = [_hoisted_22];
var _hoisted_24 = {
  "class": "modal fade",
  id: "fModal",
  "data-bs-backdrop": "static",
  "data-bs-keyboard": "false",
  tabindex: "-1",
  "aria-labelledby": "staticBackdropLabel",
  "aria-hidden": "true"
};
var _hoisted_25 = {
  "class": "modal-dialog modal-xl"
};
var _hoisted_26 = {
  "class": "modal-content"
};
var _hoisted_27 = {
  "class": "modal-header"
};
var _hoisted_28 = {
  "class": "modal-title",
  id: "staticBackdropLabel"
};
var _hoisted_29 = {
  "class": "modal-title",
  id: "staticBackdropLabel"
};
var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Close"
}, null, -1 /* HOISTED */);
var _hoisted_31 = {
  "class": "modal-body"
};
var _hoisted_32 = {
  "class": "row card-body"
};
var _hoisted_33 = {
  "class": "col-12"
};
var _hoisted_34 = {
  "class": "row mb-3"
};
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "inputText",
  "class": "col-sm-3 col-form-label"
}, "Nama Level ", -1 /* HOISTED */);
var _hoisted_36 = {
  "class": "col-sm-9"
};
var _hoisted_37 = {
  "class": "row mb-3"
};
var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "inputText",
  "class": "col-sm-3 col-form-label"
}, "Permissions", -1 /* HOISTED */);
var _hoisted_39 = {
  "class": "col-sm-9"
};
var _hoisted_40 = {
  "class": "row mb-3"
};
var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", {
  "class": "col-sm-12 p-0"
}, "Menu", -1 /* HOISTED */);
var _hoisted_42 = ["value"];
var _hoisted_43 = {
  "class": "form-check-label"
};
var _hoisted_44 = {
  "class": "row"
};
var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", {
  "class": "col-sm-12 p-0"
}, "Page", -1 /* HOISTED */);
var _hoisted_46 = ["value"];
var _hoisted_47 = {
  "class": "form-check-label"
};
var _hoisted_48 = {
  "class": "modal-footer"
};
var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-secondary",
  "data-bs-dismiss": "modal"
}, " Close ", -1 /* HOISTED */);
var _hoisted_50 = ["disabled"];
var _hoisted_51 = {
  "class": "fa fa-spinner fa-spin"
};
var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Simpan ");
var _hoisted_53 = ["disabled"];
var _hoisted_54 = {
  "class": "fa fa-spinner fa-spin"
};
var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Ubah ");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-success",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.showModal();
    })
  }, " Tambah User Role ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.levels, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(item.role_permissions, function (data, key) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
        key: key
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <br />\n                                                            key: {{ key }} <br />\n                                                            length: {{ item.role_permissions.length }} "), item.role_permissions.length - 1 != key ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("br", _hoisted_15)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.role_permissions.length - 1 != key ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("br", _hoisted_16)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
    }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ item.role_permissions }} ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "#",
      onClick: function onClick($event) {
        return $options.showModalEdit(item);
      }
    }, _hoisted_19, 8 /* PROPS */, _hoisted_17), _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "#",
      onClick: function onClick($event) {
        return $options.deleteData(item.id);
      }
    }, _hoisted_23, 8 /* PROPS */, _hoisted_21)])]);
  }), 128 /* KEYED_FRAGMENT */))])])])])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_28, " Tambah Level Pengguna ", 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.editModal]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_29, " Edit Level Akses Pengguna ", 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.editModal]]), _hoisted_30]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $data.editModal ? $options.updateData() : $options.saveData();
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    name: "id_role",
    id: "id_role",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.form.id = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.id]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    id: "name",
    name: "name",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.form.name = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.name]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.permission.menu, function (perm) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "form-check col-sm-6",
      key: perm.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "class": "form-check-input",
      type: "checkbox",
      id: "permissions",
      name: "permissions[]",
      value: perm.id,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
        return $data.form.permission_ids = $event;
      })
    }, null, 8 /* PROPS */, _hoisted_42), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.permission_ids]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(perm.name), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [_hoisted_45, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.permission.page, function (perm) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "form-check col-sm-6",
      key: perm.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "class": "form-check-input",
      type: "checkbox",
      id: "permissions",
      name: "permissions[]",
      value: perm.id,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
        return $data.form.permission_ids = $event;
      })
    }, null, 8 /* PROPS */, _hoisted_46), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.permission_ids]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(perm.name), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [_hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "btn btn-primary",
    disabled: $data.disabled
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", _hoisted_51, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.loading]]), _hoisted_52], 8 /* PROPS */, _hoisted_50), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.editModal]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "btn btn-warning",
    disabled: $data.disabled
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", _hoisted_54, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.loading]]), _hoisted_55], 8 /* PROPS */, _hoisted_53), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.editModal]])])], 32 /* HYDRATE_EVENTS */)])])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/services/role.service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/role.service.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-header */ "./resources/js/services/auth-header.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.withCredentials) = true;
var RoleService = /*#__PURE__*/function () {
  function RoleService() {
    _classCallCheck(this, RoleService);
  }
  _createClass(RoleService, [{
    key: "getRoles",
    value: function getRoles() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/role', {
        headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__["default"])()
      }).then(function (response) {
        console.log('response');
        console.log(response);
        return response;
      });
    }
  }, {
    key: "store",
    value: function store(form) {
      return form.post("api/role", {
        headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__["default"])()
      }).then(function (response) {
        console.log('response storeRole');
        console.log(response);
        return response;
      });
    }
  }, {
    key: "update",
    value: function update(form) {
      return form.put("api/role/" + form.id, {
        headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__["default"])()
      }).then(function (response) {
        console.log('response updateRole');
        console.log(response);
        return response;
      });
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("api/role/" + id, {
        headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__["default"])()
      }).then(function (response) {
        console.log('response deleteRole');
        console.log(response);
        return response;
      });
    }
  }]);
  return RoleService;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new RoleService());

/***/ }),

/***/ "./resources/js/services/user-role.service.js":
/*!****************************************************!*\
  !*** ./resources/js/services/user-role.service.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-header */ "./resources/js/services/auth-header.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.withCredentials) = true;
var UserRoleService = /*#__PURE__*/function () {
  function UserRoleService() {
    _classCallCheck(this, UserRoleService);
  }
  _createClass(UserRoleService, [{
    key: "get",
    value: function get() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/user-role', {
        headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__["default"])()
      }).then(function (response) {
        console.log('response');
        console.log(response);
        return response;
      });
    }
  }, {
    key: "store",
    value: function store(form) {
      return form.post("api/user-role").then(function (response) {
        console.log('response storeRole');
        console.log(response);
        return response;
      });
    }
  }, {
    key: "update",
    value: function update(form) {
      return form.put("api/user-role/" + form.id).then(function (response) {
        console.log('response updateRole');
        console.log(response);
        return response;
      });
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("api/user-role/" + id).then(function (response) {
        console.log('response deleteRole');
        console.log(response);
        return response;
      });
    }
  }, {
    key: "getPermission",
    value: function getPermission() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/get-permission', {
        headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__["default"])()
      }).then(function (response) {
        console.log('response');
        console.log(response);
        return response;
      });
    }
  }]);
  return UserRoleService;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new UserRoleService());

/***/ }),

/***/ "./node_modules/vform/dist/vform.es.js":
/*!*********************************************!*\
  !*** ./node_modules/vform/dist/vform.es.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Errors": () => (/* binding */ y),
/* harmony export */   "Form": () => (/* binding */ g),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,o=(t,s,r)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,i=(e,i)=>{for(var a in i||(i={}))t.call(i,a)&&o(e,a,i[a]);if(s)for(var a of s(i))r.call(i,a)&&o(e,a,i[a]);return e};const n=e=>void 0===e,c=e=>Array.isArray(e),l=e=>e&&"number"==typeof e.size&&"string"==typeof e.type&&"function"==typeof e.slice,u=(e,t,s,r)=>((t=t||{}).indices=!n(t.indices)&&t.indices,t.nullsAsUndefineds=!n(t.nullsAsUndefineds)&&t.nullsAsUndefineds,t.booleansAsIntegers=!n(t.booleansAsIntegers)&&t.booleansAsIntegers,t.allowEmptyArrays=!n(t.allowEmptyArrays)&&t.allowEmptyArrays,s=s||new FormData,n(e)||(null===e?t.nullsAsUndefineds||s.append(r,""):(e=>"boolean"==typeof e)(e)?t.booleansAsIntegers?s.append(r,e?1:0):s.append(r,e):c(e)?e.length?e.forEach(((e,o)=>{const i=r+"["+(t.indices?o:"")+"]";u(e,t,s,i)})):t.allowEmptyArrays&&s.append(r+"[]",""):(e=>e instanceof Date)(e)?s.append(r,e.toISOString()):!(e=>e===Object(e))(e)||(e=>l(e)&&"string"==typeof e.name&&("object"==typeof e.lastModifiedDate||"number"==typeof e.lastModified))(e)||l(e)?s.append(r,e):Object.keys(e).forEach((o=>{const i=e[o];if(c(i))for(;o.length>2&&o.lastIndexOf("[]")===o.length-2;)o=o.substring(0,o.length-2);u(i,t,s,r?r+"["+o+"]":o)}))),s);var h={serialize:u};function d(e){if(null===e||"object"!=typeof e)return e;const t=Array.isArray(e)?[]:{};return Object.keys(e).forEach((s=>{t[s]=d(e[s])})),t}function f(e){return Array.isArray(e)?e:[e]}function p(e){return e instanceof File||e instanceof Blob||e instanceof FileList||"object"==typeof e&&null!==e&&void 0!==Object.values(e).find((e=>p(e)))}class y{constructor(){this.errors={},this.errors={}}set(e,t){"object"==typeof e?this.errors=e:this.set(i(i({},this.errors),{[e]:f(t)}))}all(){return this.errors}has(e){return Object.prototype.hasOwnProperty.call(this.errors,e)}hasAny(...e){return e.some((e=>this.has(e)))}any(){return Object.keys(this.errors).length>0}get(e){if(this.has(e))return this.getAll(e)[0]}getAll(e){return f(this.errors[e]||[])}only(...e){const t=[];return e.forEach((e=>{const s=this.get(e);s&&t.push(s)})),t}flatten(){return Object.values(this.errors).reduce(((e,t)=>e.concat(t)),[])}clear(e){const t={};e&&Object.keys(this.errors).forEach((s=>{s!==e&&(t[s]=this.errors[s])})),this.set(t)}}class g{constructor(e={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new y,this.progress=void 0,this.update(e)}static make(e){return new this(e)}update(e){this.originalData=Object.assign({},this.originalData,d(e)),Object.assign(this,e)}fill(e={}){this.keys().forEach((t=>{this[t]=e[t]}))}data(){return this.keys().reduce(((e,t)=>i(i({},e),{[t]:this[t]})),{})}keys(){return Object.keys(this).filter((e=>!g.ignore.includes(e)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),g.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((e=>!g.ignore.includes(e))).forEach((e=>{this[e]=d(this.originalData[e])}))}get(e,t={}){return this.submit("get",e,t)}post(e,t={}){return this.submit("post",e,t)}patch(e,t={}){return this.submit("patch",e,t)}put(e,t={}){return this.submit("put",e,t)}delete(e,t={}){return this.submit("delete",e,t)}submit(e,t,s={}){return this.startProcessing(),s=i({data:{},params:{},url:this.route(t),method:e,onUploadProgress:this.handleUploadProgress.bind(this)},s),"get"===e.toLowerCase()?s.params=i(i({},this.data()),s.params):(s.data=i(i({},this.data()),s.data),p(s.data)&&!s.transformRequest&&(s.transformRequest=[e=>h.serialize(e)])),new Promise(((e,t)=>{(g.axios||(axios__WEBPACK_IMPORTED_MODULE_0___default())).request(s).then((t=>{this.finishProcessing(),e(t)})).catch((e=>{this.handleErrors(e),t(e)}))}))}handleErrors(e){this.busy=!1,this.progress=void 0,e.response&&this.errors.set(this.extractErrors(e.response))}extractErrors(e){return e.data&&"object"==typeof e.data?e.data.errors?i({},e.data.errors):e.data.message?{error:e.data.message}:i({},e.data):{error:g.errorMessage}}handleUploadProgress(e){this.progress={total:e.total,loaded:e.loaded,percentage:Math.round(100*e.loaded/e.total)}}route(e,t={}){let s=e;return Object.prototype.hasOwnProperty.call(g.routes,e)&&(s=decodeURI(g.routes[e])),"object"!=typeof t&&(t={id:t}),Object.keys(t).forEach((e=>{s=s.replace(`{${e}}`,t[e])})),s}onKeydown(e){const t=e.target;t.name&&this.errors.clear(t.name)}}g.routes={},g.errorMessage="Something went wrong. Please try again.",g.recentlySuccessfulTimeout=2e3,g.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (g);


/***/ }),

/***/ "./resources/js/components/user-role/UserRole.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/user-role/UserRole.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserRole_vue_vue_type_template_id_5f2b4b83__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserRole.vue?vue&type=template&id=5f2b4b83 */ "./resources/js/components/user-role/UserRole.vue?vue&type=template&id=5f2b4b83");
/* harmony import */ var _UserRole_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserRole.vue?vue&type=script&lang=js */ "./resources/js/components/user-role/UserRole.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_yudapramana_Sites_agenda_kemenagpessel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_yudapramana_Sites_agenda_kemenagpessel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_UserRole_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UserRole_vue_vue_type_template_id_5f2b4b83__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/user-role/UserRole.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/user-role/UserRole.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/user-role/UserRole.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserRole_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserRole_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserRole.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user-role/UserRole.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/user-role/UserRole.vue?vue&type=template&id=5f2b4b83":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/user-role/UserRole.vue?vue&type=template&id=5f2b4b83 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserRole_vue_vue_type_template_id_5f2b4b83__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserRole_vue_vue_type_template_id_5f2b4b83__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserRole.vue?vue&type=template&id=5f2b4b83 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user-role/UserRole.vue?vue&type=template&id=5f2b4b83");


/***/ })

}]);