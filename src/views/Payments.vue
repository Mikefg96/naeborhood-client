<template>
    <div class="payments">
        <div class="payment-register">
            <d-card style="max-width: 300px">
                <d-card-header>Registro de pagos</d-card-header>
                <d-card-body class="tc" id="payTypes">
                    <d-form-radio inline value="Caseta" v-model="radioSelected" id="ps">Caseta</d-form-radio>
                    <d-form-radio inline value="Mensual" v-model="radioSelected" id="pm">Mensual</d-form-radio>
                    <d-form-select class="mb2" :options="options" v-model="selected" id="showResidents"/>
                    <d-input type="number" class="mb2" placeholder="$$$" v-model="quantity" name="payQty"/>
                    <d-button theme="success" @click="registerPayment()">Registrar</d-button>
                </d-card-body>
            </d-card>
        </div>
        <div class="payments-tables">
            <d-card>
                <d-tabs card>
                    <d-tab title="Caseta" active>
                        <table class="table tc">
                            <thead class="bg-light">
                                <tr>
                                    <th scope="col" class="border-0">#</th>
                                    <th scope="col" class="border-0">Residente</th>
                                    <th scope="col" class="border-0">Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr :key="stallPayment._id" v-for="(stallPayment, index) in availableStallPayments">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ stallPayment.resident.name }} {{ stallPayment.resident.lastName }}</td>
                                    <td>${{ stallPayment.quantity }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </d-tab>
                    <d-tab title="Cuota mensual">
                        <table class="table tc">
                            <thead class="bg-light">
                                <tr>
                                    <th scope="col" class="border-0">#</th>
                                    <th scope="col" class="border-0">Residente</th>
                                    <th scope="col" class="border-0">Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                 <tr :key="monthlyPayment._id" v-for="(monthlyPayment, index) in availableMonthlyPayments">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ monthlyPayment.resident.name }} {{ monthlyPayment.resident.lastName }}</td>
                                    <td>${{ monthlyPayment.quantity }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </d-tab>
                </d-tabs>
            </d-card>
        </div>
        <div>
            <img src="../assets/img/wallet.svg" alt="" class="mw5">
        </div>
	</div>
</template>
<script>
    import { mapGetters } from "vuex";
    const paymentsModule = "payments";
	const residentsModule = "residents";

    export default {
		data() {
			return {
                radioSelected: null,
                selected: null,
                quantity: null
            }
		},
		methods: {
            getResidents() {
                this.$store.dispatch(`${residentsModule}/getResidents`);
            },
            registerPayment() {

                let payment = {
                    type: this.radioSelected,
                    resident: this.selected,
                    quantity: this.quantity
                }

                this.$store.dispatch(`${paymentsModule}/createPayment`, payment).then(() => {

                    this.radioSelected = null;
                    this.selected = null;
                    this.quantity = null;

					this.$toasted.show("¡Pago registrado exitosamente!", {
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
            getStallPayments() {
                this.$store.dispatch(`${paymentsModule}/getStallPayments`);
            },
            getMonthlyPayments() {
                this.$store.dispatch(`${paymentsModule}/getMonthlyPayments`);
            },
		},
		computed: {
            ...mapGetters(residentsModule, ["availableResidents"]),
            ...mapGetters(paymentsModule, ["availableStallPayments"]),
            ...mapGetters(paymentsModule, ["availableMonthlyPayments"]),
            options: function() {
                let optionsFormat = [{ value: null, text: 'Residente', disabled: true }]
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
            this.getStallPayments();
            this.getMonthlyPayments();
		}
    };
</script>

<style lang="scss">
    .payments {
        height: 90vh;
        width: 100%;
        background-color: #e3eeff;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;

        > div {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>
