import React, { useEffect, useState } from "react";
import { FaList } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import { useParams } from "react-router-dom";
import Loading from "../components/Loader";
import Title from "../components/Title";
import Button from "../components/Button";
import { IoMdAdd } from "react-icons/io";
import Tabs from "../components/Tabs";
import TaskTitle from "../components/TaskTitle";
import BoardView from "../components/BoardView";
import Table from "../components/task/Table";
import AddTask from "../components/task/AddTask";
import axios from "axios";
import { useSelector } from "react-redux";

const TABS = [
  { title: "Board View", icon: <MdGridView /> },
  { title: "List View", icon: <FaList /> },
];

const TASK_TYPE = {
  todo: "bg-blue-600",
  "in progress": "bg-yellow-600",
  completed: "bg-green-600",
};

const Tasks = () => {
  const params = useParams();
  const {user} = useSelector((state) => state.auth);

  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const status = params?.status || "";
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:8000/api/task", {
        withCredentials: true,
      });
      const filteredTasks = (status && status !== "all") ? res.data.tasks.filter((task) => task.stage === status) : res.data.tasks;
      if(user?.isAdmin) {
        setTasks(filteredTasks);
      } else {
        setTasks(filteredTasks.filter((task) => task.team.find((t) => t._id === user._id  )));
      
      }
      setLoading(false);
    } catch (error) {
      console.log("Tasks ::", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
    setRefresh(false);
  }, [setTasks, refresh === true, status]);

  return loading ? (
    <div className="py-10">
      <Loading />
    </div>
  ) : (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <Title title={status ? `${status} Tasks` : "Tasks"} />

        {!status && user.isAdmin && (
          <Button
            onClick={() => setOpen(true)}
            label="Create Task"
            icon={<IoMdAdd className="text-lg" />}
            className="flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md py-2 2xl:py-2.5"
          />
        )}
      </div>

      <Tabs tabs={TABS} setSelected={setSelected}>

        {selected !== 1 ? (
          <BoardView tasks={tasks} setRefresh={setRefresh} />
        ) : (
          <div className="w-full">
            <Table tasks={tasks} setRefresh={setRefresh} />
          </div>
        )}
      </Tabs>

      <AddTask open={open} setOpen={setOpen} setRefresh={setRefresh} />
    </div>
  );
};

export default Tasks;
