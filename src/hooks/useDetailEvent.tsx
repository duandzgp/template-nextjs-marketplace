import * as React from "react";
import { eventDetailType } from "@/types/home.type";
import { useParams } from "next/navigation";
import api from "@/axios.config";

export const useDetailEvent = () => {
  const [detailEvent, setDetailEvent] = React.useState<eventDetailType>();
  const params = useParams();

  const getDetailEvent = async () => {
    const { data } = await api.get("/php-nft-ticket/api/event_detail.php", {
      params: {
        id: params.eventId,
      },
    });

    setDetailEvent(data?.data);
  };

  React.useEffect(() => {
    getDetailEvent();
  }, []);

  return { detailEvent };
};
