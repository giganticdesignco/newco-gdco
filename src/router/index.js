import { createWebHistory, createRouter } from "vue-router";
import EnterDOT from "@/views/EnterDOT.vue";
import VerifyDOT from "@/views/VerifyDOT.vue";
import OwnerDetails from "@/views/OwnerDetails.vue";
import ContactDetails from "@/views/ContactDetails.vue";
import InsuranceEffectiveDate from "@/views/InsuranceEffectiveDate.vue";
import BrokerageAuthority from "@/views/BrokerageAuthority.vue";
import CargoCarried from "@/views/CargoCarried.vue";
import TractorVINs from "@/views/TractorVINs.vue";
import SelectPlan from "@/views/SelectPlan.vue";
import SignNow from "@/views/SignNow.vue";
import ChoosePayment from "@/views/ChoosePayment.vue";
import AccountBound from "@/views/AccountBound.vue";
import NotEligible from "@/views/NotEligible.vue";

const routes = [
	{
		path: "/",
		name: "enterDOT",
		component: EnterDOT
	},
	{
		path: "/verify-dot",
		name: "verifyDOT",
		component: VerifyDOT
	},
	{
		path: "/owner-details",
		name: "ownerDetails",
		component: OwnerDetails
	},
	{
		path: "/contact-details",
		name: "contactDetails",
		component: ContactDetails
	},
	{
		path: "/insurance-effective-date",
		name: "insuranceEffectiveDate",
		component: InsuranceEffectiveDate
	},
	{
		path: "/brokerage-authority",
		name: "brokerageAuthority",
		component: BrokerageAuthority
	},
	{
		path: "/cargo-carried",
		name: "cargoCarried",
		component: CargoCarried
	},
	{
		path: "/tractor-vins",
		name: "tractorVINs",
		component: TractorVINs
	},
	{
		path: "/select-plan",
		name: "selectPlan",
		component: SelectPlan
	},
	{
		path: "/payment",
		name: "choosePayment",
		component: ChoosePayment
	},
	{
		path: "/account-bound",
		name: "accountBound",
		component: AccountBound
	},
	{
		path: "/not-eligible",
		name: "notEligible",
		component: NotEligible
	},
	{
		path: "/sign",
		name: "signNow",
		component: SignNow
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

// router.afterEach(() => {
// 	this.$store.commit('updateCurrentRoute', window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]);
// });

export default router;