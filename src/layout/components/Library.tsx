import { styled } from '@mui/material';
import ErrorMessage from '../../common/components/ErrorMessage';
import useGetCurrentUserPlaylists from '../../hooks/useGetCurrentUserPlaylists';
import EmptyPlaylist from './EmptyPlaylist'
import Playlist from './Playlist';
import useGetCurrentUserProfile from '../../hooks/useGetCurrentUserProfile';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import LoadingSpinner from '../../common/components/LoadingSpinner';

const PlaylistContainer = styled("div")(({ theme }) => ({
  overflowY: "auto",
  maxHeight: "calc(100vh - 240px)",
  height: "100%",
  "&::-webkit-scrollbar": {
    display: "none",
    msOverflowStyle: "none", // IE and Edge
    scrollbarWidth: "none", // Firefox
  },
  [theme.breakpoints.down("sm")]: {
    maxHeight: "calc(100vh - 65px - 119px)",
  },
}))

const Library = () => {
  const { ref, inView } = useInView();
  const { data, isLoading, error,
    hasNextPage, isFetchingNextPage, fetchNextPage
  } = useGetCurrentUserPlaylists({ limit: 10, offset: 0 });
  console.log("playlist", data)
  const { data: user } = useGetCurrentUserProfile();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView]);

  if (!user) return <EmptyPlaylist />

  if (isLoading) {
    return <EmptyPlaylist />
  }
  if (error) {
    return <ErrorMessage errorMessage={error.message} />
  }

  return (
    <div>
      {!data || data?.pages[0].total === 0 ? (
        <EmptyPlaylist />
      ) : (
        <PlaylistContainer>
          {data?.pages.map((page, index) => (
            <Playlist playlists={page.items} key={index} />
          ))}
          <div ref={ref}>{isFetchingNextPage && <LoadingSpinner/>}</div>
        </PlaylistContainer>
      )}
    </div>
  )

}

export default Library