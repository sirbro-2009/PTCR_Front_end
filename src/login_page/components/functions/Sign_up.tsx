import { useContext } from "react";
import { Provider } from "@/hooks/Provide";
import { useNavigate } from "react-router";
import type { IProvider } from "@/hooks/Provide";
import { serverHost } from "@/other/data";
export default function Sign_Up() {
  const { signUp, setSignUp, showTerms } = useContext(Provider) as IProvider;
  const isValidEmail = signUp.isValid_email;
  const isValidpassword = signUp.isValid_password;
  const isValidUserName = signUp.isValidUserName;
  const isValidName = signUp.isValidName;
  const isValid_confirm = signUp.isValid_confirm;
  const isValidDate = signUp.isValidDate;
  const navigate = useNavigate();
  const showAlert = () => {
    setSignUp({ ...signUp, show_error: true });
    setInterval(() => {
      setSignUp({ ...signUp, show_error: false });
    }, 3000);
  };
  const SignUp_f = async () => {
    if (
      signUp.Gender &&
      signUp.userType &&
      !isValidEmail &&
      !isValidpassword &&
      !isValidUserName &&
      !isValidName &&
      !isValid_confirm &&
      !isValidDate &&
      showTerms!.accept
    ) {
      /* start fetch///////////////////////////////////////////////////////////////////////////////////////*/
      try {
        const sendReq = await fetch(`${serverHost}auth/sign-up`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...signUp,
            lng: localStorage.getItem("i18nextLng"),
          }),
        });
        const res = await sendReq.json();
        if (res.done) {
          navigate("/sing-up/Verify_page");
        } else if (!res.done) {
          showAlert();
        }
      } catch {
        showAlert();
      }
    } else {
      showAlert();
    }
  };
  return { SignUp_f };
}
