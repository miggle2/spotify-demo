import { useInfiniteQuery } from "@tanstack/react-query";
import { GetPlaylistItemsRequest } from "../models/playlist";
import { getPlaylistItems } from "../apis/playlistApi";

const useGetPlaylistItems = (params: GetPlaylistItemsRequest) => {
  try {
    return useInfiniteQuery({
      queryKey: ["playlist-items", params],
      queryFn: ({ pageParam }) => {
        return getPlaylistItems({ ...params, offset: pageParam });
      },
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        if (lastPage.next) {
          const url = new URL(lastPage.next);
          const nextOffset = url.searchParams.get("offset");
          return nextOffset ? parseInt(nextOffset) : undefined;
        }
        return undefined;
      },
    });
  } catch (error) {
    throw new Error("fail to fetch playlist items");
  }
};

export default useGetPlaylistItems;
