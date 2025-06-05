import { Opacity } from '@mui/icons-material';
import { styled, Typography } from '@mui/material';
import React from 'react'
import PlayButton from './PlayButton';

interface CardProps {
    name:string;
    image:string;
    artistName:string | undefined;
}

const CardFrame = styled("div")(({theme})=>({
    position: 'relative',
    padding: "4px",
    overflow: 'hidden',
    '&:hover .hover-button': {
        opacity: 1,
        pointerEvents: 'auto',
    }
    
}))

const HoverButtonWrapper = styled('div')({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
});

const Card = ({image, name, artistName}:CardProps) => {
  return (
    <CardFrame>
        <img src={image} width={"100%"} />
        <Typography fontWeight={600} mt={1}>{name}</Typography>
        <Typography variant="body2" color="text.secondary">{artistName}</Typography>
        <HoverButtonWrapper className="hover-button">
            <PlayButton/>
        </HoverButtonWrapper>
    </CardFrame>
  )
}

export default Card