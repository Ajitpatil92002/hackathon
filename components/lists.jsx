import React from "react";

import {
  createMaintenanceRequest,
  maintenanceRequests,
} from "../context/MaintenanceContext";

const Lists = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center pb-10">
      {maintenanceRequests
        ? maintenanceRequests.map((ml) => (
            <>
              <div className="border-white/75 border rounded-md p-4 space-y-2">
                <h2 className="text-xl font-medium">{ml.title}</h2>
                <p>{ml.description}</p>
                {maintenanceType.split(",").map((mt) => (
                  <div className="flex items-center flex-wrap gap-2">{mt}</div>
                ))}
              </div>
            </>
          ))
        : "no maintenance found"}

      {/* <div className="border-white/75 border rounded-md p-4 space-y-2">
        <h2 className="text-xl font-medium">Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eius
          vitae quis ut! Dolores iusto assumenda voluptatum, vel earum ullam
          amet architecto? Fugiat officia aspernatur incidunt in velit obcaecati
          possimus.
        </p>
        <div className="flex items-center flex-wrap gap-2">
          <p className="bg-gray-500/50 rounded-md p-2">type</p>
          <p className="bg-gray-500/50 rounded-md p-2">type</p>
          <p className="bg-gray-500/50 rounded-md p-2">type</p>
        </div>
      </div> */}
    </div>
  );
};

export default Lists;
