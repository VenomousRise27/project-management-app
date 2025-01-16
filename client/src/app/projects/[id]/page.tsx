"use client";

import React, { useState } from "react";
import ProjectHeader from "../ProjectHeader";
import BoardView from "../BoardView";
import ListView from "../ListView";
import TimeLineView from "../TimeLineView";
import TableView from "../TableView";
import ModalNewTask from "@/components/ModalNewTask";
import { Status } from "@/state/api";

type Props = {
  params: { id: string };
};

const Projects = ({ params }: Props) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);
  const [taskStatus, setTaskStatus] = useState(Status.ToDo);

  return (
    <div>
      {/* modal new tasks */}
      <ModalNewTask
        isOpen={isModalNewTaskOpen}
        onClose={() => setIsModalNewTaskOpen(false)}
        id={Number(id)}
        taskStatus={taskStatus}
      />
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "Board" && (
        <BoardView
          id={id}
          setIsModalNewTaskOpen={setIsModalNewTaskOpen}
          setTaskStatus={setTaskStatus}
        />
      )}
      {activeTab === "List" && (
        <ListView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "Timeline" && (
        <TimeLineView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "Table" && (
        <TableView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </div>
  );
};

export default Projects;
