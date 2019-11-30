<template>
<div class="residents">
        <div class="resident-register">
			<d-card style="max-width: 300px" class="mb4 z-2">
				<d-card-header>Registro de residentes</d-card-header>
				<d-card-body class="tc">
					<!-- ¿Formas en Vue.js? -->
					<d-input class="mb2" placeholder="Nombre" v-model="name"/>
					<d-input class="mb2" placeholder="Apellido" v-model="lastName"/>
                    <d-input type="number" class="mb2" placeholder="Celular" v-model="cel"/>
                    <d-form-select class="mb2" :options="options" v-model="selected"/>
					<d-button theme="success" class="mr1" @click="registerResident()">Registrar</d-button>
				</d-card-body>
			</d-card>
        </div>
        <div class="resident-read">
            <d-card class="mb2 z-2">
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
                                <td v-if="!house.resident">
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
        </div>
        <img src="../assets/img/residents.svg" alt="" class="mw7">
	</div>
</template>
<script>
	import { mapGetters } from "vuex";
	const housesModule = "houses";

    export default {
		data() {
			return {
                isRegisterng: false,
                name: null,
                lastName: null,
                cel: null,
                selected: null
            }
		},
		methods: {
			getHouses() {
				this.$store.dispatch(`${housesModule}/getHouses`);
            },
            registerResident() {

                let resident = {
                    name: this.name,
                    lastName: this.lastName,
                    cel: this.cel,
                    house_id: this.selected
                };

                console.log(resident);
            }
		},
		computed: {
            ...mapGetters(housesModule, ["availableHouses"]),
            options: function() {
                let optionsFormat = [{ value: null, text: 'Asignar una casa', disabled: true }]
                this.availableHouses.forEach(house => {
                    let formattedHouse = {
                        value: house._id,
                        text: house.street + ' #' + house.number
                    }

                    optionsFormat.push(formattedHouse);
                });

                return optionsFormat;
            }
		},
		mounted() {
            this.getHouses()
		}
    };
</script>

<style lang="scss">
    .residents {
        height: 90vh;
        width: 100%;
        background-color: #e3eeff;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;

        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        img {
              position: absolute;
                left: 50%;
                margin-right: -50%;
                bottom: 10px;
                transform: translate(-50%, 0)
        }
    }

    .resident-register { grid-area: 1 / 1 / 2 / 2; }
    .resident-read { grid-area: 1 / 2 / 2 / 4; }
</style>
