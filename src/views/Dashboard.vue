<template>
  <d-container fluid class="pa0">
        <d-navbar toggleable="md" type="dark" theme="primary" class="nav">
            <d-navbar-toggle target="nav-collapse"></d-navbar-toggle>
            <d-navbar-brand>
                <h6 class="text-white my-auto mr-4">Naeborhood</h6>
            </d-navbar-brand>
            <d-collapse is-nav id="nav-collapse">
                <d-navbar-nav>
                    <d-nav-item to="/dashboard/casas" class="pointer" id="housesBtn">Casas</d-nav-item>
                    <d-nav-item to="/dashboard/residentes" class="pointer" id="residentsBtn">Residentes</d-nav-item>
                    <d-nav-item to="/dashboard/visitas" class="pointer" id="visitsBtn">Visitas</d-nav-item>
                    <d-nav-item to="/dashboard/pagos" class="pointer" id="paymentsBtn">Pagos</d-nav-item>
                    <d-nav-item to="/dashboard/actividades" class="pointer">Actividades</d-nav-item>
                </d-navbar-nav>
            </d-collapse>
        </d-navbar>
        <router-view></router-view>
  </d-container>
</template>

<script>
    export default {
        name: "dashboard"
    };
</script>

<style lang="scss">
    .nav { height: 10vh; }
    .pointer:hover { cursor: pointer; }
</style>