import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

interface ModeToggleProps {
  items: string[];
  view: string;
  setView: (mode: string) => void;
}

const ModeToggle: React.FC<ModeToggleProps> = ({ items, view, setView }) => {
  return (
    <ButtonGroup>
      {items.map((mode) => (
        <Button
          key={mode}
          onClick={() => setView(mode)}
          sx={{
            borderRadius: "50px",
            borderColor: "info.main",
            px: 10,
            py: 1,
            fontWeight: "600",
            display: "flex",
            color: "info.main",
            gap: 2,
            backgroundColor: view === mode ? "info.dark" : "primary.main",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: view === mode ? "#E8DEF8" : "white",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // הוספת צל קל בהובר
            },
          }}
        >
          <span style={{ display: "inline-flex", alignItems: "center" }}>
            {view === mode && <CheckIcon fontSize="small" />}{" "}
          </span>
          {mode}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default ModeToggle;
