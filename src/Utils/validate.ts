import * as Yup from "yup";

export const validationSchemaLogin = Yup.object().shape({
  shopId: Yup.string().required("Please enter your Shop Id"),
  userName: Yup.string().required("Please enter your user name"),
  password: Yup.string().required("Please enter your password"),
});
