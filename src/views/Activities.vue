<template>
    <div class="activities">
        <div class="read" v-if="!isRegistering">
            <div class="row mt-4">
                <div class="col-4" :key="activity._id" v-for="activity in availableActivities">
                    <d-card class="z-4" style="max-width: 300px">
                        <d-card-header>{{ activity.name }}</d-card-header>
                        <d-card-img :src="activity.imgUrl" style="max-width: 300px; max-height: 200px;"/>
                        <d-card-body>
                            <p>Inicio: {{ activity.date.start }}</p>
                            <p>Término: {{ activity.date.finish }}</p>
                        </d-card-body>
                    </d-card>
                </div>
            </div>
            <img src="../assets/img/activities.svg" alt="" class="z-1">
            <d-button theme="info" @click="loadRegisterActivityForm()">Añadir actividad</d-button>
        </div>
        <div class="create" v-else>
			<d-card style="max-width: 300px" class="mb4 z-2">
				<d-card-header>Registro de actividad</d-card-header>
				<d-card-body class="tc">
					<!-- ¿Formas en Vue.js? -->
					<d-input placeholder="Nombre" v-model="name"/>
                    <VueCtkDateTimePicker v-model="date.startingDate" :label="startPlaceholder" :min-date="currentDate"></VueCtkDateTimePicker>
                    <VueCtkDateTimePicker v-model="date.finishDate" :label="finishPlaceholder" :min-date="date.startingDate"></VueCtkDateTimePicker>
                    <d-input placeholder="Imagen (URL)" v-model="imgUrl"/>
					<d-button theme="success" class="mr1 mt2" @click="createActivity()">Registrar</d-button>
					<d-button outline theme="danger" class="ml1 mt2" @click="returnToMain()">Regresar</d-button>
				</d-card-body>
			</d-card>
        </div>
	</div>
</template>
<script>
    import { mapGetters } from "vuex";
    const activitiesModule = "activities";

    export default {
		data() {
			return {
                isRegistering: false,
                name: null,
                date: {
                    startingDate: null,
                    finishDate: null
                },
                currentDate: new Date(),
                startPlaceholder: 'Fecha de inicio',
                finishPlaceholder: 'Fecha de término',
                imgUrl: null
            }
		},
		methods: {
            loadRegisterActivityForm() {
                this.isRegistering = true;
            },
            createActivity() {

                let activity = {
                    name: this.name,
                    date: {
                        start: this.date.startingDate,
                        finish: this.date.finishDate
                    },
                    status: this.status,
                    imgUrl: this.imgUrl
                };

                this.$store.dispatch(`${activitiesModule}/createActivity`, activity).then(() => {

					this.isRegistering = false;
                    this.name = null;
                    this.date.startingDate = null;
                    this.date.finishDate = null;
                    this.imgUrl = null;

					this.$toasted.show("¡Actividad registrada exitosamente!", {
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
            getActivities() {
                this.$store.dispatch(`${activitiesModule}/getActivities`);
            },
            returnToMain() {
                this.isRegistering = false;
            }
		},
		computed: {
            ...mapGetters(activitiesModule, ["availableActivities"])
		},
		mounted() {
            this.getActivities();
		}
    };
</script>

<style lang="scss">
    .activities {
        height: 90vh;
        width: 100%;
        background-color: #e3eeff;
    }

    .read {

        .col-4 {
            display: flex;
            justify-content: center;
        }

        > img {
            position: absolute;
            left: 50%;
            margin-right: -50%;
            bottom: 0;
            transform: translate(-50%, 0)
        }

        > button {
            position: absolute;
            bottom: 10px;
            right: 10px;
        }

        overflow: hidden;
    }

    .create {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        input {
            margin-bottom: 5px;
        }
    }
</style>
