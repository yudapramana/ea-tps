"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44],{1044:(e,t,o)=>{o.r(t),o.d(t,{default:()=>u});var r=o(821);var n=o(3253),s=o(4220),i=o(7809);const a={components:{Navbar:n.Z,Sidebar:s.Z,Footer:i.Z},computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_ADMIN")},showModeratorBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_MODERATOR")}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}},created:function(){document.body.classList.remove("layout-top-nav"),document.body.classList.add("hold-transition","sidebar-mini")},mounted:function(){document.body.classList.remove("layout-top-nav"),document.body.classList.add("hold-transition","sidebar-mini")},destroyed:function(){document.body.classList.remove("hold-transition","sidebar-mini")}};const u=(0,o(3744).Z)(a,[["render",function(e,t,o,n,s,i){var a=(0,r.resolveComponent)("Navbar"),u=(0,r.resolveComponent)("Sidebar"),c=(0,r.resolveComponent)("router-view"),d=(0,r.resolveComponent)("vue-progress-bar"),l=(0,r.resolveComponent)("Footer");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(a),(0,r.createVNode)(u),(0,r.createVNode)(c),(0,r.createVNode)(d),(0,r.createVNode)(l)],64)}]])}}]);