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
            borderRadius: mode === "list" ? "30px 0 0 30px" : "0 30px 30px 0",
            borderColor: "black",
            px: 4,
            py: 1,
            fontWeight: "600",
            display: "flex",

            gap: 2,
            backgroundColor: view === mode ? "#E8DEF8" : "white",
            color: view === mode ? "black" : "gray",
            "&:hover": {
              backgroundColor: view === mode ? "#E8DEF8" : "white",
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
