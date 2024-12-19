import { useAppSelector } from "@/app/redux";
import { useGetTasksQuery } from "@/state/api";
import React from "react";

type TableViewProps = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

const TableView = ({ id, setIsModalNewTaskOpen }: TableViewProps) => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const {
    data: tasks,
    error,
    isLoading,
  } = useGetTasksQuery({ projectId: Number(id) });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occured while fetching tasks</div>;
  return <div></div>;
};

export default TableView;
