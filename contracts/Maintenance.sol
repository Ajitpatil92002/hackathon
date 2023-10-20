// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Maintenance {
    enum MaintenanceType {
        New,
        Renovation,
        Deletion
    }

    struct MaintenanceRequest {
        address requester;
        string title;
        string description;
        MaintenanceType maintenanceType;
        bool isCompleted;
    }

    MaintenanceRequest[] public maintenanceRequests;
    uint256 public requestCount;

    event MaintenanceRequested(
        address indexed requester,
        string title,
        string description,
        MaintenanceType maintenanceType
    );

    event MaintenanceCompleted(uint256 indexed requestId);

    function createMaintenanceRequest(
        string memory _title,
        string memory _description,
        MaintenanceType _maintenanceType
    ) public {
        MaintenanceRequest memory request = MaintenanceRequest({
            requester: msg.sender,
            title: _title,
            description: _description,
            maintenanceType: _maintenanceType,
            isCompleted: false
        });

        maintenanceRequests.push(request);
        requestCount++;

        emit MaintenanceRequested(
            msg.sender,
            _title,
            _description,
            _maintenanceType
        );
    }

    function completeMaintenanceRequest(uint256 _requestId) public {
        require(_requestId < requestCount, "Invalid request ID");
        require(
            maintenanceRequests[_requestId].requester == msg.sender,
            "Only requester can complete"
        );

        maintenanceRequests[_requestId].isCompleted = true;
        emit MaintenanceCompleted(_requestId);
    }
}
