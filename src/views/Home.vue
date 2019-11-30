<template>
	<div class="home">
		<div>
			<h1 class="f-6 fw7">Naeborhood</h1>
			<h2 class="fw3">Nunca había sido más fácil.</h2>
		</div>
		<div>
			<d-card style="max-width: 300px" class="mb4 z-2" v-if="isRegistering">
				<d-card-header>¡Bienvenido! Regístrate</d-card-header>
				<d-card-body class="tc">
					<!-- ¿Formas en Vue.js? -->
					<d-input class="mb2" placeholder="Correo" v-model="email"/>
					<d-input class="mb2" type="password" placeholder="Contraseña" v-model="password"/>
					<d-input class="mb2" type="password" placeholder="Confirmar contraseña" v-model="passwordConfirmation"/>
					<d-button theme="primary" @click="registerUser()">Registrar</d-button>
				</d-card-body>
				<d-card-footer>
					<p @click="switchLogin()" class="mb0 footer-caption">¿Ya tienes cuenta?</p>
				</d-card-footer>
			</d-card>
			<d-card style="max-width: 300px" class="mb4 z-2" v-else>
				<d-card-header>¡Bienvenido! Inicia sesión</d-card-header>
				<d-card-body class="tc">
					<d-form>
						<d-input class="mb2" placeholder="Correo" />
						<d-input class="mb2" type="password" placeholder="Contraseña" />
						<d-button theme="primary">Iniciar sesión</d-button>
					</d-form>
				</d-card-body>
				<d-card-footer>
					<p @click="switchLogin()" class="mb0 footer-caption">¿No tienes cuenta?</p>
				</d-card-footer>
			</d-card>
			<img src="../assets/img/best_place.svg" alt="" class="mw6 absolute bottom-2">
		</div>
	</div>
</template>

<script>
	const userModule = "user";

	export default {
		name: 'home',
		data() {
			return {
				isRegistering: true,
				email: null,
				password: null,
				passwordConfirmation: null
			}
		},
		methods: {
			switchLogin() {
				this.isRegistering == true ? this.isRegistering = false : this.isRegistering = true
			},
			registerUser() {
			
				//Por cuestiones del proyecto, la validación de la forma se hará desde el front-end con un if.
				if((this.email != null && this.password != null) && this.password == this.passwordConfirmation) {
					
					const user = {
						email: this.email,
						password: this.password
					};

					this.$store.dispatch(`${userModule}/createUser`, user).then(() => {

						this.isRegistering = false;
						this.$toasted.show("¡Registro exitoso! Ahora, puedes iniciar sesión", {
							type: "success",
							action: {
								text: "Okay",
								onClick: (e, toastObject) => {
									toastObject.goAway(0);
								}
							}
						});
					});
				} else {
					this.$toasted.show("¡Error al tratar de registrate!", {
						type: "error",
						action: {
							text: "Okay",
							onClick: (e, toastObject) => {
								toastObject.goAway(0);
							}
						}
					});
				}
			}
		}
	}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Solway:300,400,700&display=swap');

	* {
		font-family: 'Solway', serif !important;
	}
	
	.home {
		height: 100vh;
		width: 100;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
		background-color: #e3eeff;

		> div {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}

	.footer-caption { cursor: pointer; }
	.footer-caption:hover { color: #046bf1; }
</style>
