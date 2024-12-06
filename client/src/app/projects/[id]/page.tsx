"use client";

import React, { useState } from "react";
import ProjectHeader from "../ProjectHeader";
type Props = {
  params: { id: string };
};

const Projects = ({ params }: Props) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTask, setIsModalNewTask] = useState(false);

  return 
  <div>
    {/* modal new tasks */}
    {/* <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab}/> */}
    {/* {activeTab === "Board" && ((

    ))} */}
  </div>;
};

export default Projects;
