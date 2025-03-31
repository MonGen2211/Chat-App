import React, { useEffect } from "react";
// import { useAuthStore } from "../store/useAuthSotre";
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";
import { useAuthStore } from "../store/useAuthSotre";

const SignUpPage = () => {
  // const [showPassword, setShowPassword] = useState(false);
  // const [formData, setFormData] = useState({
  //   fullname: "",
  //   email: "",
  //   password: "",
  // });

  const [authUser, checkAuth] = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });
  // const validateForm = () => {};
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return <div className="min-h-screen grid lg-grid-cols-2"></div>;
};

export default SignUpPage;
