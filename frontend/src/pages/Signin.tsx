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
    <>
    <Header />
      <div
        id="login-popup"
        tabIndex={-1}
        // className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex bg-cover bg-center bg-fixed bg-black/10"
        // style={{
        //   backgroundImage:
        //     "url('https://www.thomascook.in/blog/wp-content/uploads/2023/04/beach-1.jpg')",
        // }}
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
            >
              <Link to="/">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="#c6c7c7"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <span className="sr-only">Close popup</span>
            </button>
            <div className="p-5">
              <h3 className="text-2xl mb-0.5 font-medium"></h3>
              <p className="mb-4 text-sm font-normal text-gray-800"></p>

              <div className="text-center">
                <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                  Login to your account
                </p>
                <p className="mt-2 text-sm leading-4 text-slate-600">
                  You must be logged in to perform this action.
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-2">
                <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                  <img
                    src="https://www.svgrepo.com/show/512317/github-142.svg"
                    alt="GitHub"
                    className="h-[18px] w-[18px] "
                  />
                  Continue with GitHub
                </button>

                <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="h-[18px] w-[18px] "
                  />
                  Continue with Google
                </button>

                <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                  <img
                    src="https://www.svgrepo.com/show/448234/linkedin.svg"
                    alt="Google"
                    className="h-[18px] w-[18px] "
                  />
                  Continue with LinkedIn
                </button>
              </div>

              <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
                <div className="h-px w-full bg-slate-200"></div>
                OR
                <div className="h-px w-full bg-slate-200"></div>
              </div>

              <form className="w-full" onSubmit={onSubmit}>
                {/* <label htmlFor="email" className="sr-only"> 
                  Email address
                  </label> */}
                <input
                  type="email"
                  autoComplete="email"
                  {...register("email", { required: "This field is required" })}
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  placeholder="Email Address"
                ></input>
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}

                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="current-password"
                  className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  placeholder="Password"
                  {...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                ></input>
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}

                <p className="mb-3 mt-2 text-sm text-gray-500">
                  <span className="text-sm font-bold">
                    Not Registered ?{" "}
                    <Link className="underline" to="/register">
                      Create an account here
                    </Link>
                  </span>
                </p>
                <button
                  type="submit"
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
