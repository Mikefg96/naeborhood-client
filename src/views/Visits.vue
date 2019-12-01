<template>
    <div class="visits">
		<div class="tc" v-if="!isRegistering && !isReading">
			<img src="../assets/img/visits.svg" alt="" class="mw6 mb3">
			<div>
				<d-button theme="success" class="mr1" @click="switchRegisteringStatus()">Registrar visita</d-button>
				<d-button outline theme="success" class="ml1" @click="switchReadingStatus()">Ver visitas</d-button>
			</div>
		</div>
		<div v-else-if="isRegistering && !isReading">
			<d-card style="max-width: 300px" class="mb4 z-2">
				<d-card-header>Registro de visitas</d-card-header>
				<d-card-body class="tc">
					<!-- ¿Formas en Vue.js? -->
					<d-input class="mb2" placeholder="Nombre" v-model="name"/>
					<d-input class="mb2" placeholder="Apellido" v-model="lastName"/>
					<d-input class="mb2" placeholder="Placas" v-model="licencePlate"/>
					<d-form-select class="mb2" :options="options" v-model="selected"/>
					<d-button theme="success" class="mr1" @click="registerVisit()">Registrar</d-button>
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
									<th scope="col" class="border-0">Nombre</th>
									<th scope="col" class="border-0">Placa</th>
									<th scope="col" class="border-0">Residente</th>
								</tr>
							</thead>
							<tbody>
								<tr :key="visit._id" v-for="(visit, index) in availableVisits">
									<td>{{ index + 1 }}</td>
									<td>{{ visit.name }} {{ visit.lastName }}</td>
									<td>{{ visit.licencePlate }}</td>
									<td>{{ visit.resident.name }} {{ visit.resident.lastName }}</td>
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
	const visitsModule = "visits";
	const residentsModule = "residents";

    export default {
		data() {
			return {
				isRegistering: false,
				isReading: false,
				name: null,
				lastName: null,
				licencePlate: null,
				selected: null
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
			getResidents() {
                this.$store.dispatch(`${residentsModule}/getResidents`);
            },
			registerVisit() {

				let visit = {
					name: this.name,
					lastName: this.lastName,
					licencePlate: this.licencePlate,
					resident: this.selected
				}

                this.$store.dispatch(`${visitsModule}/createVisit`, visit).then(() => {

					this.isRegistering = false;
					this.name = null;
					this.lastName = null;
					this.licencePlate = null;
					this.selected = null;

					this.$toasted.show("¡Visita registrada exitosamente!", {
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
			getVisits() {
                this.$store.dispatch(`${visitsModule}/getVisits`);
            },			
		},
		computed: {
			...mapGetters(residentsModule, ["availableResidents"]),
			...mapGetters(visitsModule, ["availableVisits"]),
            options: function() {
                let optionsFormat = [{ value: null, text: 'Residente a visitar', disabled: true }]
                this.availableResidents.forEach(resident => {
                    let formattedHouse = {
                        value: resident._id,
                        text: resident.name + ' ' + resident.lastName
                    }

                    optionsFormat.push(formattedHouse);
                });

                return optionsFormat;
            }
		},
		mounted() {
			this.getResidents();
			this.getVisits();
		}
    };
</script>

<style lang="scss">
    .visits {
        height: 90vh;
        width: 100%;
        background-color: #e3eeff;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
    }
</style>
