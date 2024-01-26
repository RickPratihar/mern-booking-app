import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";

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
    <>
      {/* <Header /> */}
      {/* <form classNameName=" container  mt-20  flex flex-col gap-5" onSubmit={onSubmit}>
        <h2 classNameName="text-3xl font-bold">Create an Account</h2>
        <div classNameName="flex flex-col md:flex-row gap-5">
          <label classNameName="text-gray-700 text-sm font-bold flex-1">
            First Name
            <input
              classNameName="border border-rounded w-full py-1 px-2 font-normal"
              {...register("firstName", { required: "This field is required" })}
            ></input>
            {errors.firstName && (
              <span classNameName="text-red-500">{errors.firstName.message}</span>
            )}
          </label>

          <label classNameName="text-gray-700 text-sm font-bold flex-1">
            Last Name
            <input
              classNameName="border border-rounded w-full py-1 px-2 font-normal"
              {...register("lastName", { required: "This field is required" })}
            ></input>
            {errors.lastName && (
              <span className="text-red-500">{errors.lastName.message}</span>
            )}
          </label>
        </div>

        <label className="text-gray-700 text-sm font-bold flex-1">
          Email
          <input
            type="email"
            className="border border-rounded w-full py-1 px-2 font-normal"
            {...register("email", { required: "This field is required" })}
          ></input>
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </label>

        <label className="text-gray-700 text-sm font-bold flex-1">
          Password
          <input
            type="password"
            className="border border-rounded w-full py-1 px-2 font-normal"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "password must be at last6 characters",
              },
            })}
          ></input>
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </label>

        <label className="text-gray-700 text-sm font-bold flex-1">
          ConfirmPassword
          <input
            type="password"
            className="border border-rounded w-full py-1 px-2 font-normal"
            {...register("confirmPassword", {
              validate: (val) => {
                if (!val) {
                  return "This field is required";
                } else if (watch("password") !== val) {
                  return "Your password do not match";
                }
              },
            })}
          ></input>
          {errors.confirmPassword && (
            <span className="text-red-500">{errors.confirmPassword.message}</span>
          )}
        </label>
        <span>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 hover:bg-blue-500 text-xl rounded"
          >
            Create Account
          </button>
        </span>
      </form> */}

      <div className="h-full bg-transparent">
        <div className="mx-auto">
          <div className="flex justify-center px-6 py-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div
                className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://www.thomascook.in/blog/wp-content/uploads/2023/04/beach-1.jpg')" }}
              >
                <div className="w-full lg:w-3/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                  <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
                    Create an Account!
                  </h3>

                  <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded" onSubmit={onSubmit}>
                    <div className="mb-4 md:flex md:justify-between">
                      <div className="mb-4 md:mr-2 md:mb-0">
                        <label
                          className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                          htmlFor="firstName"
                        >
                          First Name
                        </label>
                        <input
                          className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="firstName"
                          type="text"
                          placeholder="First Name"
                          {...register("firstName", { required: "This field is required" })}
                        />
                        {errors.firstName && (
                          <span className="text-red-500">{errors.firstName.message}</span>
                        )}
                      </div>

                      <div className="md:ml-2">
                        <label
                          className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                          htmlFor="lastName"
                        >
                          Last Name
                        </label>
                        <input
                          className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="lastName"
                          type="text"
                          placeholder="Last Name"
                          {...register("lastName", { required: "This field is required" })}
                        />
                        {errors.lastName && (
                          <span className="text-red-500">{errors.lastName.message}</span>
                        )}
                      </div>

                    </div>
                    <div className="mb-4">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: "This field is required" })}
                      />
                      {errors.email && (
                        <span className="text-red-500">{errors.email.message}</span>
                      )}
                    </div>
                    <div className="mb-4 md:flex md:justify-between">
                      <div className="mb-4 md:mr-2 md:mb-0">
                        <label
                          className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                          htmlFor="password"

                        >
                          Password
                        </label>
                        <input
                          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="password"
                          type="password"
                          {...register("password", {
                            required: "This field is required",
                            minLength: {
                              value: 6,
                              message: "password must be at last6 characters",
                            },
                          })}
                        />
                        {errors.password && (
                          <span className="text-red-500">{errors.password.message}</span>
                        )}
                      </div>
                      <div className="md:ml-2">
                        <label
                          className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                          htmlFor="c_password"
                        >
                          Confirm Password
                        </label>
                        <input
                          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="c_password"
                          type="password"
                          {...register("confirmPassword", {
                            validate: (val) => {
                              if (!val) {
                                return "This field is required";
                              } else if (watch("password") !== val) {
                                return "Your password do not match";
                              }
                            },
                          })}
                        />
                        {errors.confirmPassword && (
                          <span className="text-red-500">{errors.confirmPassword.message}</span>
                        )}
                      </div>
                    </div>

                    <div className="mb-6 text-center">
                      <button
                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                         type="submit"
                      >
                       Create Account
                      </button>
                    </div>

                    <hr className="mb-6 border-t" />

                    <div className="text-center">
                      <Link
                        className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                        to="/sign-in"
                      >
                        Already have an account? Login!
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
