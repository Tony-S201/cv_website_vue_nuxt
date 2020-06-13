<template>
	<section class="lab-container">
		<b-navbar class="lab-navbar" :transparent="true">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="~/assets/img/lab-icons/icons8-tube-à-essai-64.png"
                    alt="image laboratoire"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Ubuntu
            </b-navbar-item>
            <b-navbar-item href="#">
                Systeme
            </b-navbar-item>
            <b-navbar-dropdown label="WordPress">
                <b-navbar-item href="#">
                    Config
                </b-navbar-item>
                <b-navbar-item href="#">
                    Divi
                </b-navbar-item>
            </b-navbar-dropdown>
						<b-navbar-dropdown label="VueJS">
                <b-navbar-item href="#">
                    Vue-Router
                </b-navbar-item>
                <b-navbar-item href="#">
                    Axios
                </b-navbar-item>
								<b-navbar-item href="#">
                    Nuxt
                </b-navbar-item>
            </b-navbar-dropdown>
						<b-navbar-dropdown label="Laravel">
                <b-navbar-item href="#">
                    Config
                </b-navbar-item>
                <b-navbar-item href="#">
                    Routing
                </b-navbar-item>
								<b-navbar-item href="#">
                    Php artisan
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
    </b-navbar>
		<h1>Hello</h1>
	</section>
</template>

<script>
export default {
    layout: "inside"
}
</script>