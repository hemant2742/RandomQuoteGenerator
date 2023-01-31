import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, selectedTag, theme) {
  return {
    fontWeight:
      selectedTag.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Droppdown({ handleChange, selectedTag }) {
  const theme = useTheme();
  const [tags, setTags] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.quotable.io/tags")
      .then((res) => res.json())
      .then((tag) => {
        setTags(tag);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <FormControl
      sx={{
        m: 1,
        width: 300,
        bgcolor: "white",
        borderRadius: 5,
        border: "transparent",
      }}
    >
      <InputLabel></InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id=""
        multiple
        value={selectedTag}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {tags.map((tag) => (
          <MenuItem
            key={tag.name}
            value={tag.name}
            style={getStyles(tag, selectedTag, theme)}
          >
            {tag.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
