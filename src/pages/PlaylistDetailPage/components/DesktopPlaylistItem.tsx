import React from 'react'
import { PlaylistTrack } from '../../../models/playlist';
import { TableCell, TableRow } from '@mui/material';
import { Episode, Track } from '../../../models/track';
import { formatDate, formatDuration } from '../../../utils/format';
import theme from '../../../theme';

interface DesktopPlaylistItemProps {
  index: number;
  item: PlaylistTrack;
}
const DesktopPlaylistItem = ({ item, index }: DesktopPlaylistItemProps) => {
  const isEpisode = (track: Track | Episode): track is Episode => {
    return "description" in track
  }
  return (
    <TableRow sx={{
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
        cursor: "pointer"
      }
    }}>
      <TableCell>{index}</TableCell>
      <TableCell>{item.track.name || "no name"}</TableCell>
      <TableCell>{isEpisode(item.track) ? "N/A" : item.track.album?.name}</TableCell>
      <TableCell>{item.added_at ? formatDate(item.added_at) : "Unknown"}</TableCell>
      <TableCell>{item.track.duration_ms ? formatDuration(item.track.duration_ms) : "Unknown"}</TableCell>
    </TableRow>
  )
}

export default DesktopPlaylistItem