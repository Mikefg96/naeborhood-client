<template>
	<div class="houses">
		<div class="tc" v-if="!isRegistering && !isReading">
			<img src="../assets/img/new_house.svg" alt="" class="mw7 mb3">
			<div>
				<d-button theme="success" class="mr1" @click="switchRegisteringStatus()">Registrar casa</d-button>
				<d-button outline theme="success" class="ml1" @click="switchReadingStatus()">Ver casas</d-button>
			</div>
		</div>
		<div v-else-if="isRegistering && !isReading">
			<d-card style="max-width: 300px" class="mb4 z-2">
				<d-card-header>Registro de casa</d-card-header>
				<d-card-body class="tc">
					<!-- ¿Formas en Vue.js? -->
					<d-input class="mb2" placeholder="Calle" v-model="street"/>
					<d-input type="number" class="mb2" placeholder="Número" v-model="number"/>
					<d-button theme="success" class="mr1" @click="registerHouse()">Registrar</d-button>
					<d-button outline theme="danger" class="ml1" @click="returnToMain()">Regresar</d-button>
				</d-card-body>
			</d-card>
		</div>
		<div v-else>
			<div>
				<d-card class="mb2">
					<d-card-body>
						<table class="table tc">
							<thead class="bg-light">
								<tr>
									<th scope="col" class="border-0">#</th>
									<th scope="col" class="border-0">Calle</th>
									<th scope="col" class="border-0">Número</th>
									<th scope="col" class="border-0">Estado</th>
								</tr>
							</thead>
							<tbody>
								<tr :key="house._id" v-for="(house, index) in availableHouses">
									<td>{{ index + 1 }}</td>
									<td>{{ house.street }}</td>
									<td>{{ house.number }}</td>
									<td v-if="house.hasResident == false">
										<d-badge theme="secondary">Deshabitada</d-badge>
									</td>
									<td v-else>
										<d-badge theme="success">Habitada</d-badge>
									</td>
								</tr>
							</tbody>
						</table>
					</d-card-body>
				</d-card>
				<d-button outline theme="danger" class="fr" @click="returnToMain()">Regresar</d-button>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapGetters } from "vuex";
	const housesModule = "houses";

    export default {
		data() {
			return {
				isRegistering: false,
				isReading: false,
				street: null,
				number: null
			}
		},
		methods: {
			switchRegisteringStatus() {
				this.isRegistering = true;
			},
			switchReadingStatus() {
				this.isReading = true;
			},
			returnToMain() {
				this.isRegistering = false;
				this.isReading = false;
			},
			registerHouse() {

				const house = {
					street: this.street,
					number: this.number
				}

				this.$store.dispatch(`${housesModule}/createHouse`, house).then(() => {

					this.isRegistering = false;
					this.street = null;
					this.number = null;

					this.$toasted.show("¡Casa registrada exitosamente!", {
						type: "success",
						action: {
							text: "Okay",
							onClick: (e, toastObject) => {
								toastObject.goAway(0);
							}
						}
					});
				});
			},
			getHouses() {
				this.$store.dispatch(`${housesModule}/getHouses`);
			}
		},
		computed: {
			...mapGetters(housesModule, ["availableHouses"])
		},
		mounted() {
			this.getHouses();
		}
    };
</script>

<style lang="scss">
	.houses {
		height: 90vh;
		width: 100%;
		background-color: #e3eeff;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
