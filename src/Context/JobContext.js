import {createContext, useState} from 'react'

export const JobContext = createContext()

export function JobProvider({children}) {
    const [job, setJob] = useState({})

    const handleJob = (job) => {
        setJob(job)
    }

    return (
        <JobContext.Provider value={{job, handleJob}}>
            {children}
        </JobContext.Provider>
    )
}

export default JobContext;