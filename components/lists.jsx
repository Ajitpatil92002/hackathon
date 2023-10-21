import React from "react";
import { MaintenanceContext } from "../context/MaintenanceContext";

const Lists = () => {
  const { maintenanceRequests, currentUser } =
    React.useContext(MaintenanceContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center pb-10 gap-2">
      {currentUser ? (
        <>
          <div className="border-white/75 border rounded-md p-4 space-y-2">
            <h2 className="text-xl font-medium">Air Filter Replacement</h2>
            <p>Replaced the engine air filter.</p>
            <div className="flex items-center flex-wrap gap-2">
              <p className="bg-gray-500/50 rounded-md p-2">New</p>
            </div>
          </div>
          <div className="border-white/75 border rounded-md p-4 space-y-2">
            <h2 className="text-xl font-medium">Transmission Fluid Change</h2>
            <p>Flushed and replaced transmission fluid.</p>
            <div className="flex items-center flex-wrap gap-2">
              <p className="bg-gray-500/50 rounded-md p-2">Renovation</p>
            </div>
          </div>
          <div className="border-white/75 border rounded-md p-4 space-y-2">
            <h2 className="text-xl font-medium">Calibration Check</h2>
            <p>Calibrated measurement instruments for accuracy.</p>
            <div className="flex items-center flex-wrap gap-2">
              <p className="bg-gray-500/50 rounded-md p-2">Renovation</p>
            </div>
          </div>
          <div className="border-white/75 border rounded-md p-4 space-y-2">
            <h2 className="text-xl font-medium">Preventive Maintenance</h2>
            <p>Replaced worn-out belts and filters, cleaned components.</p>
            <div className="flex items-center flex-wrap gap-2">
              <p className="bg-gray-500/50 rounded-md p-2">Renovation</p>
            </div>
          </div>
        </>
      ) : (
        "please connect you wallet"
      )}
      {maintenanceRequests &&
        maintenanceRequests.map((ml) => (
          <>
            <div className="border-white/75 border rounded-md p-4 space-y-2">
              <h2 className="text-xl font-medium">{ml.title}</h2>
              <p>{ml.description}</p>
              {maintenanceType.split(",").map((mt) => (
                <div className="flex items-center flex-wrap gap-2">{mt}</div>
              ))}
            </div>
          </>
        ))}
    </div>
  );
};

export default Lists;
