import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useSearchContext } from "../../contexts/SearchContext";
import { useAppContext } from "../../contexts/AppContext";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  hotelId: string;
  pricePerNight: number;
};

type GuestInfoFormData = {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
};

const GuestInfoForm = ({ hotelId, pricePerNight }: Props) => {
  const search = useSearchContext();
  const { isLoggedIn } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    watch,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<GuestInfoFormData>({
    defaultValues: {
      checkIn: search.checkIn,
      checkOut: search.checkOut,
      adultCount: search.adultCount,
      childCount: search.childCount,
    },
  });

  const checkIn = watch("checkIn");
  const checkOut = watch("checkOut");

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  const onSignInClick = (data: GuestInfoFormData) => {
    search.saveSearchValues(
      "",
      data.checkIn,
      data.checkOut,
      data.adultCount,
      data.childCount
    );
    navigate("/sign-in", { state: { from: location } });
  };

  const onSubmit = (data: GuestInfoFormData) => {
    search.saveSearchValues(
      "",
      data.checkIn,
      data.checkOut,
      data.adultCount,
      data.childCount
    );
    navigate(`/hotel/${hotelId}/booking`);
  };

  return (
    <div className="flex flex-col p-6 bg-white border border-slate-100 shadow-xl rounded-3xl gap-6">
      <h3 className="text-2xl font-extrabold text-slate-800">
        ₹{pricePerNight} <span className="text-sm font-medium text-slate-500">/ night</span>
      </h3>
      <form
        onSubmit={
          isLoggedIn ? handleSubmit(onSubmit) : handleSubmit(onSignInClick)
        }
      >
        <div className="grid grid-cols-1 gap-4 items-center">
          <div>
            <DatePicker
              required
              selected={checkIn}
              onChange={(date) => setValue("checkIn", date as Date)}
              selectsStart
              startDate={checkIn}
              endDate={checkOut}
              minDate={minDate}
              maxDate={maxDate}
              placeholderText="Check-in Date"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
              wrapperClassName="min-w-full"
            />
          </div>
          <div>
            <DatePicker
              required
              selected={checkOut}
              onChange={(date) => setValue("checkOut", date as Date)}
              selectsStart
              startDate={checkIn}
              endDate={checkOut}
              minDate={minDate}
              maxDate={maxDate}
              placeholderText="Check-out Date"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
              wrapperClassName="min-w-full"
            />
          </div>
          <div className="flex gap-4">
            <label className="flex flex-col flex-1 text-sm font-bold text-slate-700">
              Adults:
              <input
                className="mt-1 w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                type="number"
                min={1}
                max={20}
                {...register("adultCount", {
                  required: "This field is required",
                  min: {
                    value: 1,
                    message: "There must be at least one adult",
                  },
                  valueAsNumber: true,
                })}
              />
            </label>
            <label className="flex flex-col flex-1 text-sm font-bold text-slate-700">
              Children:
              <input
                className="mt-1 w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                type="number"
                min={0}
                max={20}
                {...register("childCount", {
                  valueAsNumber: true,
                })}
              />
            </label>
          </div>
          {errors.adultCount && (
            <span className="text-red-500 font-semibold text-xs mt-[-8px]">
              {errors.adultCount.message}
            </span>
          )}
          
          <div className="pt-2">
            {isLoggedIn ? (
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md active:scale-[0.98]">
                Book Now
              </button>
            ) : (
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md active:scale-[0.98]">
                Sign in to Book
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default GuestInfoForm;