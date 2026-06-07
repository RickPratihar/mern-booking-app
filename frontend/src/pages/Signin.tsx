import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";

export type SignInFormData = {
  email: string;
  password: string;
};

// const Signin = () => {
//   const { showToast } = useAppContext();
//   const navigate = useNavigate();
//   const queryClient = useQueryClient();
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm<SignInFormData>();

//   const mutation = useMutation(apiClient.signIn, {
//     onSuccess: async () => {
//       showToast({ message: "Sign in Successful!", type: "SUCCESS" });
//       await queryClient.invalidateQueries("validateToken");
//       navigate("/");
//     },
//     onError: (error: Error) => {
//       showToast({ message: error.message, type: "ERROR" });
//     },
//   });

//   const onSubmit = handleSubmit((data) => {
//     mutation.mutate(data);
//   });

//   return (
//     <>
//       <Header />
//       <form className="container flex flex-col gap-5 mt-20" onSubmit={onSubmit}>
//         <h2 className="text-3xl font-bold">Sign In</h2>

//         <label className="text-gray-700 text-sm font-bold flex-1">
//           Email
//           <input
//             type="email"
//             className="border rounded w-full py-1 px-2 font-normal"
//             {...register("email", { required: "This field is required" })}
//           ></input>
//           {errors.email && (
//             <span className="text-red-500">{errors.email.message}</span>
//           )}
//         </label>
//         <label className="text-gray-700 text-sm font-bold flex-1">
//           Password
//           <input
//             type="password"
//             className="border rounded w-full py-1 px-2 font-normal"
//             {...register("password", {
//               required: "This field is required",
//               minLength: {
//                 value: 6,
//                 message: "Password must be at least 6 characters",
//               },
//             })}
//           ></input>
//           {errors.password && (
//             <span className="text-red-500">{errors.password.message}</span>
//           )}
//         </label>

//         <span classNameName="flex items-center justify-between">
//           <span className="text-sm font-bold">
//             Not Registered ? <Link className="underline" to="/register">Create an account here</Link>
//           </span>
//           <button
//             type="submit"
//             className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
//           >
//             Login
//           </button>
//         </span>

//       </form>
//     </>
//   );
// };

// export default Signin;

const Signin = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({ message: "Sign in Successful!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate(location.state?.from?.pathname || "/");
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
      {/* Left Side - Image */}
      <div
        className="hidden lg:flex w-1/2 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542314831-c6a4d14d837e?q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12 text-center">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            DreamStayHub
          </h1>
          <p className="text-xl font-medium drop-shadow-md text-white/90">
            Your perfect gateway to extraordinary stays.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-slate-50 p-6 md:p-12 relative">
        <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
          <Link
            to="/"
            className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors mb-8 inline-flex items-center gap-2"
          >
            <span>&larr;</span> Back to Home
          </Link>
          
          <div>
            <h2 className="text-3xl font-extrabold text-slate-800 mb-2">
              Welcome Back
            </h2>
            <p className="text-slate-500 text-sm mb-8">
              Please enter your details to sign in to your account.
            </p>
          </div>

          <div className="flex flex-col gap-3 mb-6">
            <button className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-300 outline-none">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5 w-5"
              />
              Continue with Google
            </button>
            <button className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-300 outline-none">
              <img
                src="https://www.svgrepo.com/show/512317/github-142.svg"
                alt="GitHub"
                className="h-5 w-5"
              />
              Continue with GitHub
            </button>
          </div>

          <div className="flex w-full items-center gap-3 py-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">
            <div className="h-px w-full bg-slate-200"></div>
            OR
            <div className="h-px w-full bg-slate-200"></div>
          </div>

          <form className="w-full mt-2" onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold text-slate-700 mb-1.5" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
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

            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-700 mb-1.5" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
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

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition-all hover:bg-blue-700 shadow-md hover:shadow-blue-600/20 active:scale-[0.98]"
            >
              Sign In
            </button>

            <p className="mt-8 text-center text-sm font-medium text-slate-600">
              Don't have an account?{" "}
              <Link className="text-blue-600 hover:text-blue-700 font-bold hover:underline" to="/register">
                Sign up here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
