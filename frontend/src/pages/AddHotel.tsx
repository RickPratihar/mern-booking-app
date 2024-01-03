import { useAppContext } from "../contexts/AppContext";
import ManageHotelForm from "../forms/ManageHotelForm/manageHotelForm"
import { useMutation } from "react-query";
import * as apiClient from "../api-client";


const AddHotel = () => {
    const { showToast } = useAppContext();

    const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
        onSuccess: () => {
          showToast({ message: "Hotel Saved!", type: "SUCCESS" });
        },
        onError: () => {
          showToast({ message: "Error Saving Hotel", type: "ERROR" });
        },
      });

      
  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };

  return (
    <ManageHotelForm onSave={handleSave} isLoading={isLoading}/>
  )
}

export default AddHotel