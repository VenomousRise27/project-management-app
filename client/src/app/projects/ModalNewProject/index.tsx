import { useCreateProjectMutation } from '@/state/api';
import React, {useState} from 'react'
import ProjectHeader from '../ProjectHeader';
import Modal from '@/components/Modal';

type Props = {
    isOpen: boolean;
    onClose: () => void;
}

const ModalNewProject = ({isOpen, onClose}: Props) => {
    const [createProject, {isLoading}] = useCreateProjectMutation();
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleSubmit= async()=>{
      if(!projectName || !startDate || !endDate ) return;
      await createProject({
        name:projectName,
        description: description,
        startDate: startDate,
        endDate: endDate
      })
    }

    const isFormValid = () => {
      return projectName && description && startDate && endDate;
    }

    const inputStyles = "w-full rounded border border-gray-300 p-2 shadow-sm dark:border-dark-tertiary dark:bg-dark-tertiary dark:text-white dark:focus:outline-none"
  return (
    <Modal isOpen={isOpen} onClose={onClose} name="Create New Project">
      <form className='mt-4 space-y-6'
      onSubmit={(e)=>{
        e.preventDefault(); // to not refresh the page
        handleSubmit();
      }}
      >
        
      </form>
    </Modal>
  )
}

export default ModalNewProject