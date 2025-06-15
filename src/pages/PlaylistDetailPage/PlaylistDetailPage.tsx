import React, { useEffect } from 'react'
import { Navigate, useParams } from 'react-router';
import useGetPlaylist from '../../hooks/useGetPlaylist';
import { Box, Grid, styled, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import DefaultImage from '../../common/components/DefaultImage';
import useGetPlaylistItems from '../../hooks/useGetPlaylistItems';
import DesktopPlaylistItem from './components/DesktopPlaylistItem';
import { PAGE_LIMIT } from '../../configs/commonConfig';
import LoadingSpinner from '../../common/components/LoadingSpinner';
import { useInView } from 'react-intersection-observer';
import ErrorMessage from '../../common/components/ErrorMessage';
import LoginButton from '../../common/components/LoginButton';
import EmptyPlaylistWithSearch from './components/EmptyPlaylistWithSearch';

const PlaylistHeader = styled(Grid)({
  display: "flex",
  alignItems: "center",
  background: " linear-gradient(transparent 0, rgba(0, 0, 0, .5) 100%)",
  padding: "16px",
  height: "200px"
});

const ImageGrid = styled(Grid)(({ theme }) => ({
  flexShrink: 0,
  width: "150px",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    width: "120px",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
    width: "100px",
  },
}));
const AlbumImage = styled("img")(({ theme }) => ({
  borderRadius: "8px",
  height: "auto",
  width: "100%",
  objectFit: "cover",

  [theme.breakpoints.down("md")]: {
    maxWidth: "200px",
  },
}));
const ResponsiveTypography = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  textAlign: "left",

  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
}));

const PlaylistContainer = styled("div")(({ theme }) => ({
  overflowY: "auto",
  maxHeight: "calc(100vh - 350px)",
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

const StyledTable = styled(Table)({
  borderCollapse: 'collapse',
  boxShadow: 'none',
  "& th, & td": {
    borderBottom: "none",
    border: "none",
  },
})

const PlaylistDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  if (id === undefined) return <Navigate to="/" />
  const { data: playlist, error: playlistError} = useGetPlaylist({ playlist_id: id })

  const {
    data: playlistItems,
    isLoading: isPlaylistItemsLoading,
    error: playlistItemsLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetPlaylistItems({ playlist_id: id, limit: PAGE_LIMIT, offset: 0 });

  console.log("dd", playlistItems)

  const { ref, inView, entry } = useInView({
    root: document.querySelector('#playlist-container')
  })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage])

  if(!localStorage.getItem("access_token")){
      return (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
          flexDirection="column"
        >
          <Typography variant="h2" fontWeight={700} mb="20px">
            다시 로그인 하세요
          </Typography>
          <LoginButton />
        </Box>
      );
    return <ErrorMessage errorMessage="Failed to load" />; // 정말 리스트 가져오기 실패라면 fail to load 
  }

  return (
    <div>
      <PlaylistHeader container spacing={7}>
        <ImageGrid>
          {playlist?.images ? (
            <AlbumImage
              src={playlist?.images[0].url}
            />
          ) : (
            <DefaultImage />
          )}
        </ImageGrid>
        <Grid>
          <Box>
            <ResponsiveTypography variant="h1" color="white">
              {playlist?.name}
            </ResponsiveTypography>

            <Box display="flex" alignItems="center">
              <img
                src="https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5"
                width="20px"
              />
              <Typography
                variant="subtitle1"
                color="white"
                ml={1}
                fontWeight={700}
              >
                {playlist?.owner?.display_name
                  ? playlist?.owner.display_name
                  : "unknown"}
              </Typography>
              <Typography variant="subtitle1" color="white">
                • {playlist?.tracks?.total} songs
              </Typography>
            </Box>
          </Box>
        </Grid>
      </PlaylistHeader>
      <PlaylistContainer id="playlist-container">
        {playlist?.tracks?.total === 0 ? <EmptyPlaylistWithSearch/>
          : (<StyledTable stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Album</TableCell>
                <TableCell>Date added</TableCell>
                <TableCell>Duration</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {playlistItems?.pages.map((page, pageIndex) =>
                page.items.map((item, itemIndex) => {
                  return <DesktopPlaylistItem
                    item={item}
                    key={itemIndex}
                    index={pageIndex * PAGE_LIMIT + itemIndex + 1} />
                })
              )}
            </TableBody>
          </StyledTable>
          )}
        <div ref={ref}>{isFetchingNextPage && <LoadingSpinner />}</div>
      </PlaylistContainer>
    </div>
  )
}

export default PlaylistDetailPage