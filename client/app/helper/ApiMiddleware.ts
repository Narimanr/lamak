import { iWindow } from "@/interfaces/Interfaces";

import { useAppSelector } from '@/redux/hooks';

// Import fetch from api mechanism
import { usePostDesignMutation, useGetDesignsQuery, useGetSingleDesignQuery, DesignPayload } from "@/redux/features/Api/LamakApiSlice";
import { useEffect, useState } from "react";


export const usePostDesign = async (payload: DesignPayload) => {
    const [ postDesign, { isLoading }] = usePostDesignMutation();
    const [data, setData] = useState<iWindow | null>();
    
    useEffect(() => {
        postDesign(payload).unwrap().then(result => setData(result));
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return data;
}

export const useFetchDesigns = () => {
    const { data, isFetching } = useGetDesignsQuery();
    let fetchedDesigns = null;

    if (data) {
        fetchedDesigns = data;
    }

    return fetchedDesigns;
}

export const useFetchSingleDesign = (id: string) => {
    const { data, isFetching } = useGetSingleDesignQuery(id);
    let fetchedDesign = null;

    if (data) {
        fetchedDesign = data;
    }

    return fetchedDesign;
}
