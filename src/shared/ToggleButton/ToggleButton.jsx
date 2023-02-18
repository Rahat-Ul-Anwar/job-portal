import React from "react";
import { useState } from "react";

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div>
      <div className="form-control ">
        <label className="cursor-pointer label">
      
          <button
            className="toggle toggle-lg w-24"
            style={{ backgroundColor: isToggled ? "#1abc9c" : "#e74c3c" }}
            onClick={handleToggle}
          >
            {isToggled ? "Job Seeker" : "Job Poster"}
          </button>
        </label>
      </div>
    </div>
  );
};

export default ToggleButton;
