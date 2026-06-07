import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useQuery } from "react-query";
import * as apiClient from '../api-client'
import { loadStripe, Stripe } from "@stripe/stripe-js";

const STRIPE_PUB_KEY = import.meta.env.VITE_STRIPE_PUB_KEY || "";
 
type ToastMessage = {
  message: string;
  type: "SUCCESS" | "ERROR";
};
type AppContext = {
  showToast: (toastMessage: ToastMessage) => void;
  isLoggedIn: boolean;
  stripePromise: Promise<Stripe | null>;
};

const AppContext = React.createContext<AppContext | undefined>(undefined);

const stripePromise = loadStripe(STRIPE_PUB_KEY);


export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isError } = useQuery("validateToken", apiClient.validateToken, {
    retry: false,
  });

  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => {
          if (toastMessage.type === "SUCCESS") {
            toast.success(toastMessage.message, {
              style: {
                background: "#0f172a",
                color: "#fff",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: "600",
                padding: "12px 20px",
              },
            });
          } else {
            toast.error(toastMessage.message, {
              style: {
                background: "#be123c",
                color: "#fff",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: "600",
                padding: "12px 20px",
              },
            });
          }
        },
        isLoggedIn: !isError,
        stripePromise,
      }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContext;
};
