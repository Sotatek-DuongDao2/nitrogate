import * as Yup from "yup";

export const validationSchemaLogin = Yup.object().shape({
  shopId: Yup.string().required("Please enter your Shop Id"),
  userName: Yup.string().required("Please enter your user name"),
  password: Yup.string().required("Please enter your password"),
});

export const validationSchemaNewWithdrawal = Yup.object().shape({
  chain: Yup.string().required("Please enter chain"),
  address: Yup.string().required("Please enter address"),
  withdrawalAmount: Yup.string().required("Please enter withdrawalAmount"),
  actualAmount: Yup.string().required("Please enter actualAmount"),
  remarks: Yup.string().required("Please enter remarks"),
});
