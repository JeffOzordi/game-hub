import { Box } from '@chakra-ui/react'
import type { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const GenreListContainer = ({ children }: Props) => {
  return (
    <Box  paddingY="12px" listStyle="none">
        {children}
    </Box>
  )
}

export default GenreListContainer