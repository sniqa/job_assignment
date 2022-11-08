import {
	Autocomplete,
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from '@mui/material'
import { useEffect, useState } from 'react'

interface Alert {
	open: boolean
	onClose: () => void
	onOk: (data: JobContent) => void
}

export interface JobContent {
	user: string
	title: string
	content: string
}

const Alert = ({ open, onClose, onOk }: Alert) => {
	const [user, setUser] = useState([])

	const [job, setJob] = useState<JobContent>({
		user: '',
		title: '',
		content: '',
	})

	useEffect(() => {}, [])

	return (
		<Box>
			<Dialog open={open} onClose={onClose}>
				<DialogTitle>{`新建工单`}</DialogTitle>

				<DialogContent>
					<Box
						sx={{
							p: '1rem',
							display: 'flex',
							flexDirection: 'column',
							width: '18rem',
						}}
					>
						<Autocomplete
							renderInput={(params) => (
								<TextField
									{...params}
									label={`用户`}
									size="small"
									required
									onChange={(e) =>
										setJob({ ...job, user: e.currentTarget.value })
									}
								/>
							)}
							options={user}
							sx={{ mb: '1rem' }}
						></Autocomplete>

						<TextField
							label={`标题`}
							size="small"
							required
							sx={{ mb: '1rem' }}
							onChange={(e) => setJob({ ...job, title: e.currentTarget.value })}
						></TextField>

						<TextField
							label={`内容`}
							multiline
							minRows={3}
							required
							onChange={(e) =>
								setJob({ ...job, content: e.currentTarget.value })
							}
						></TextField>
					</Box>
				</DialogContent>

				<DialogActions>
					<Button onClick={() => onClose()}>{`取消`}</Button>
					<Button onClick={() => onOk(job)}>{`确定`}</Button>
				</DialogActions>
			</Dialog>
		</Box>
	)
}

export default Alert
