"use client";

import { Card } from "@/components/ui/card";
import { PlusCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Action, Dashboard, Goal, Strategy } from "@prisma/client";
import { useState } from "react";
import { OgsmSection } from "./OgsmSection";
import TextField from "./TextField";
import { TextFieldGroup } from "./TextFieldGroup";

interface OgsmBoardProps {
  ogsmId: number;
  initialObjective: string;
  initialGoals: Goal[];
  initialStrategies: Strategy[];
  initialDashboard: Dashboard[];
  initialActions: Action[];
}

const OgsmBoard = ({
  ogsmId,
  initialObjective,
  initialGoals,
  initialStrategies,
  initialDashboard,
  initialActions,
}: OgsmBoardProps) => {
  const [strategies, setStrategies] = useState(initialStrategies);
  const [goals, setGoals] = useState(initialGoals);
  const [dashboard, setDashboard] = useState(initialDashboard);
  const [actions, setActions] = useState(initialActions);

  const modifyObjective = async (id: number, content: string) => {
    const res = await fetch("/api/ogsm", {
      method: "PUT",
      body: JSON.stringify({
        objective: content,
        id,
      }),
    });
  };

  const createGoal = async () => {
    const res = await fetch("/api/ogsm/goal", {
      method: "POST",
      body: JSON.stringify({
        content: "",
        ogsmId: ogsmId,
      }),
    });
    const newGoal = await res.json();
    setGoals([...goals, newGoal]);
  };

  const modifyGoal = async (id: number, content: string) => {
    const res = await fetch("/api/ogsm/goal", {
      method: "PUT",
      body: JSON.stringify({
        content,
        id,
      }),
    });
  };

  const deleteGoal = async (idToDelete: number) => {
    await fetch(`/api/ogsm/goal?id=${idToDelete}`, { method: "DELETE" });
    setGoals(goals.filter((goal) => idToDelete != goal.id));
  };

  const createStrategy = async () => {
    const res = await fetch("/api/ogsm/strategy", {
      method: "POST",
      body: JSON.stringify({
        content: "",
        ogsmId: ogsmId,
      }),
    });
    const newStrategy = await res.json();
    setStrategies([...strategies, newStrategy]);
  };

  const modifyStrategy = async (id: number, content: string) => {
    const res = await fetch("/api/ogsm/strategy", {
      method: "PUT",
      body: JSON.stringify({
        content,
        id,
      }),
    });
  };

  const deleteStrategy = async (idToDelete: number) => {
    await fetch(`/api/ogsm/strategy?id=${idToDelete}`, { method: "DELETE" });
    setStrategies(strategies.filter((strategy) => idToDelete != strategy.id));
  };

  const createDashboardOrAction = (
    type: "dashboard" | "action",
    strategyId: number,
  ) => {
    return async () => {
      const res = await fetch(`/api/ogsm/strategy/${type}`, {
        method: "POST",
        body: JSON.stringify({
          content: "",
          strategyId: strategyId,
        }),
      });
      const newDashboardOrAction = await res.json();
      console.log(newDashboardOrAction);
      if (type === "dashboard") {
        setDashboard([...dashboard, newDashboardOrAction]);
      }
      if (type === "action") {
        setActions([...actions, newDashboardOrAction]);
      }
    };
  };

  const updateDashboardOrAction = (type: "dashboard" | "action") => {
    return async (id: number, content: string) => {
      const res = await fetch(`/api/ogsm/strategy/${type}`, {
        method: "PUT",
        body: JSON.stringify({
          content,
          id,
        }),
      });
    };
  };

  const deleteDashboardOrAction = (type: "dashboard" | "action") => {
    return async (idToDelete: number) => {
      await fetch(`/api/ogsm/strategy/${type}?id=${idToDelete}`, {
        method: "DELETE",
      });
      if (type === "dashboard") {
        setDashboard(
          dashboard.filter((dashboardItem) => idToDelete != dashboardItem.id),
        );
      }
      if (type === "action") {
        setActions(actions.filter((action) => idToDelete != action.id));
      }
    };
  };

  return (
    <div className="grid grid-cols-5 gap-2">
      <OgsmSection title="Objective" className="col-span-5">
        <Card>
          <div className="m-1">
            <TextField
              content={initialObjective}
              updateField={modifyObjective}
              id={ogsmId}
            />
          </div>
        </Card>
      </OgsmSection>
      <OgsmSection title="Goals" className="">
        <Card className="h-full">
          <TextFieldGroup
            contentList={goals}
            createFieldCallback={createGoal}
            updateFieldCallback={modifyGoal}
            deleteFieldCallback={deleteGoal}
          />
        </Card>
      </OgsmSection>
      <OgsmSection
        title={
          <div className="grid grid-cols-4">
            <h2 className="text-sm">Strategy</h2>
            <h2 className="text-sm">Dashboard</h2>
            <h2 className="text-sm">Actions</h2>
          </div>
        }
        className="col-span-4"
      >
        {strategies.length === 0 ? (
          ""
        ) : (
          <Card>
            {strategies.map((strategy: Strategy) => (
              <div
                className="group/strategy relative grid grid-cols-4 border-b last:border-0"
                key={strategy.id}
              >
                <div className="border-r p-1">
                  <TextField
                    content={strategy.content}
                    updateField={modifyStrategy}
                    id={strategy.id}
                  />
                </div>
                <div className="border-r">
                  <TextFieldGroup
                    contentList={dashboard}
                    createFieldCallback={createDashboardOrAction(
                      "dashboard",
                      strategy.id,
                    )}
                    updateFieldCallback={updateDashboardOrAction("dashboard")}
                    deleteFieldCallback={deleteDashboardOrAction("dashboard")}
                    propertyToMatch={"strategyId"}
                    matchAgainstValue={strategy.id}
                  />
                </div>
                <div className="col-span-2">
                  <TextFieldGroup
                    contentList={actions}
                    createFieldCallback={createDashboardOrAction(
                      "action",
                      strategy.id,
                    )}
                    updateFieldCallback={updateDashboardOrAction("action")}
                    deleteFieldCallback={deleteDashboardOrAction("action")}
                    propertyToMatch={"strategyId"}
                    matchAgainstValue={strategy.id}
                  />
                </div>
                <div className="absolute -right-16 top-1/2 hidden -translate-y-1/2 p-4 group-hover/strategy:block">
                  <div
                    className="cursor-pointer rounded-full bg-red-200 p-2 transition hover:bg-red-300"
                    onClick={() => deleteStrategy(strategy.id)}
                  >
                    <XMarkIcon className="h-6 w-6 text-red-500" />
                  </div>
                </div>
              </div>
            ))}
          </Card>
        )}
        <Card
          className="mt-2 cursor-pointer p-4 transition first:mt-0 hover:bg-gray-100"
          onClick={createStrategy}
        >
          <span className="flex items-center text-sm text-muted-foreground">
            <PlusCircleIcon className="mr-2 h-5 w-5" />
            Add strategy
          </span>
        </Card>
      </OgsmSection>
      <div className="col-span-4"></div>
    </div>
  );
};

export { OgsmBoard };
