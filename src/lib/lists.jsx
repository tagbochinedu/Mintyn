import overview from "../assets/overview.svg";
import allpay from "../assets/allpayments.svg";
import reconpay from "../assets/reconpay.svg";
import unreconpay from "../assets/unreconpay.svg";
import manset from "../assets/manset.svg";
import allorders from '../assets/allorders.svg'
import penord from "../assets/penord.svg";
import reconord from "../assets/reconord.svg";
import merchprof from "../assets/merchprof.svg";

export const sidemenu = [
  {
    group: "Main",
    links: [{ icon: overview, title: "Overview" }],
  },
  {
    group: "Payments",
    links: [
      { icon: allpay, title: "All Payments" },
      { icon: reconpay, title: "Reconcilled Payments" },
      { icon: unreconpay, title: "Un - Reconcilled Payments" },
      { icon: manset, title: "Manual Settlements" },
    ],
  },
  {
    group: "Orders",
    links: [
      { icon: allorders, title: "All Orders" },
      { icon: penord, title: "Pending Orders" },
      { icon: reconord, title: "Reconcilled Orders" },
    ],
  },
  {
    group: "",
    links: [
      { icon: merchprof, title: "Merchant Profile" },
    ],
  },
];
