import * as apiClient from "../api-client";
import { useMutation, useQueryClient } from "react-query";
import { useAppContext } from "../contexts/AppContext";

const SignOutButton = () => {
    const queryClient = useQueryClient();
    const { showToast } = useAppContext();
  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
        await queryClient.invalidateQueries("validateToken")
      showToast({ message: "Signed Out!", type: "SUCCESS"})
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 text-sm font-bold text-blue-600 hover:text-blue-700 bg-white hover:bg-blue-50 border border-blue-600/30 hover:border-blue-600 rounded transition-all duration-300 w-full md:w-auto text-center"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
