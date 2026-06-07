import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { showToast } = useAppContext();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      showToast({ message: "Registration Success!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-slate-50 p-6 md:p-12 relative overflow-y-auto">
        <div className="w-full max-w-lg bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 my-auto">
          <Link
            to="/"
            className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors mb-8 inline-flex items-center gap-2"
          >
            <span>&larr;</span> Back to Home
          </Link>
          
          <div>
            <h2 className="text-3xl font-extrabold text-slate-800 mb-2">
              Create an Account
            </h2>
            <p className="text-slate-500 text-sm mb-8">
              Join us today and start booking your dream stays worldwide.
            </p>
          </div>

          <form className="w-full" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5" htmlFor="firstName">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  {...register("firstName", { required: "This field is required" })}
                  className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="John"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-xs font-semibold mt-1 block">
                    {errors.firstName.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  {...register("lastName", { required: "This field is required" })}
                  className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-xs font-semibold mt-1 block">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold text-slate-700 mb-1.5" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: "This field is required" })}
                className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="name@example.com"
              />
              {errors.email && (
                <span className="text-red-500 text-xs font-semibold mt-1 block">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="••••••••"
                />
                {errors.password && (
                  <span className="text-red-500 text-xs font-semibold mt-1 block">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5" htmlFor="c_password">
                  Confirm Password
                </label>
                <input
                  id="c_password"
                  type="password"
                  {...register("confirmPassword", {
                    validate: (val) => {
                      if (!val) {
                        return "This field is required";
                      } else if (watch("password") !== val) {
                        return "Your passwords do not match";
                      }
                    },
                  })}
                  className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="••••••••"
                />
                {errors.confirmPassword && (
                  <span className="text-red-500 text-xs font-semibold mt-1 block">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition-all hover:bg-blue-700 shadow-md hover:shadow-blue-600/20 active:scale-[0.98]"
            >
              Sign Up
            </button>

            <p className="mt-8 text-center text-sm font-medium text-slate-600">
              Already have an account?{" "}
              <Link className="text-blue-600 hover:text-blue-700 font-bold hover:underline" to="/sign-in">
                Sign in here
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div
        className="hidden lg:flex w-1/2 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12 text-center">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            Start Exploring
          </h1>
          <p className="text-xl font-medium drop-shadow-md text-white/90">
            Unlock exclusive deals and members-only offers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
