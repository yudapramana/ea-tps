<template>
    <Navbar />
    <Sidebar />
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
    <Footer></Footer>
</template>
  
<script>
import Navbar from '../components/Layout/Navbar.vue';
import Sidebar from '../components/Layout/Sidebar.vue';
import Footer from '../components/Layout/Footer.vue';
export default {
    components: {
        Navbar,
        Sidebar,
        Footer
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
        showAdminBoard() {
            if (this.currentUser && this.currentUser['roles']) {
                return this.currentUser['roles'].includes('ROLE_ADMIN');
            }

            return false;
        },
        showModeratorBoard() {
            if (this.currentUser && this.currentUser['roles']) {
                return this.currentUser['roles'].includes('ROLE_MODERATOR');
            }

            return false;
        }
    },
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        }
    },
    created() {
        document.body.classList.remove('hold-transition', 'layout-top-nav');
        document.body.classList.add('hold-transition', 'sidebar-mini');
    },
    mounted() {
        document.body.classList.remove('hold-transition', 'layout-top-nav');
        document.body.classList.add('hold-transition', 'sidebar-mini');
    },
    destroyed() {
        document.body.classList.remove('hold-transition', 'sidebar-mini');
    },
};
</script>