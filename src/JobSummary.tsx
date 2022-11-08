import { Box, Button, Typography } from '@mui/material'
import type { Job } from './App'

const JobSummary = ({ user, timestamp, title, content }: Job) => {
	return (
		<Box
			sx={{
				height: '3rem',
				border: '1px solid green',
				lineHeight: '3rem',
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
				<Typography sx={{ mr: '1rem' }}>{timestamp}</Typography>
				<Typography sx={{ mr: '1rem' }}>{user}</Typography>
				<Typography sx={{ mr: '1rem' }}>{title}</Typography>
				<Typography sx={{ mr: '1rem' }}>{content}</Typography>
			</Box>

			<section>
				<Button size="small">{`详细`}</Button>
				<Button size="small">{`撤销`}</Button>
			</section>
		</Box>
	)
}

export default JobSummary
