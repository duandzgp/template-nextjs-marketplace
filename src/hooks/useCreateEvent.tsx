import api from "@/axios.config";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useCreateEvent = () => {
  const route = useRouter();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const btnAcceptModal = () => {
    route.push("/");
  };

  const createEvent = async (data: any) => {
    console.log(data, "data");
    try {
      await api.post("/php-nft-ticket/api/create_event.php", data);
      setIsOpenModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  return { createEvent, isOpenModal, onCloseModal, btnAcceptModal };
};
