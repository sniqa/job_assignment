import { Box, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import Alert, { type JobContent } from './Alert'
import { _fetch } from './api'
import JobSummary from './JobSummary'

export type Job = JobContent & {
	timestamp: number
	passed_state: string
	refuse_reason: string
}

const App = () => {
	const [open, setOpen] = useState(false)

	const [jobs, setJobs] = useState<Job[]>([])

	const handlerCreateJob = async (job: JobContent) => {
		const res = await _fetch(job)

		if (res.status === 200) {
			setJobs((olds) => [res.data, ...olds])
		}
	}

	useEffect(() => {}, [])

	return (
		<>
			<Box sx={{ width: '100vw', height: '100vh' }}>
				<Box
					sx={{
						height: '5rem',
						border: '1px solid red',
						display: 'flex',
						alignItems: 'center',
						px: '2rem',
						outline: 'none',
					}}
				>
					<Button
						variant="outlined"
						onClick={() => setOpen(true)}
					>{`新建工单`}</Button>
				</Box>

				<JobSummary />
			</Box>

			<Alert
				open={open}
				onClose={() => setOpen(false)}
				onOk={handlerCreateJob}
			/>
		</>
	)
}

export default App
