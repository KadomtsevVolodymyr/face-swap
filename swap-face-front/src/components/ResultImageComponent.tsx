import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

interface ResultImageComponentProps {
  defaultImage: string;
}

const ResultImageComponent: React.FC<ResultImageComponentProps> = ({
  defaultImage,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(defaultImage);
    setCopied(true);
  };
  return (
    <>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="300px"
          height="300px"
          border="4px solid white"
          sx={{
            borderRadius: "30px",
            backgroundImage: `url(${defaultImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
        <Box display={"flex"} width="200px" alignSelf="center" marginTop="10px">  
          <Button
          sx={{
            borderRadius: "10px"
          }}
          variant="contained"
          color="error"
          onClick={handleCopyUrl}
          fullWidth
          >
            {copied ? "Copied" : "Copy URL"}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ResultImageComponent;
