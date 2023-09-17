import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

interface ImageComponentProps {
  defaultImage: string;
  id: number;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  defaultImage,
  id,
}) => {
  const [image, setImage] = useState<string>(defaultImage);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (event.target?.result) {
        setImage(event.target.result.toString());
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Box display="flex" alignItems="center" flexDirection="row">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="300px"
          height="300px"
          border="4px solid white"
          sx={{
            borderRadius: "30px",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
        <Box marginLeft={"20px"} width={"40%"}>
          <Button variant="contained" component="label" fullWidth>
            Insert your image
            <input
              type="file"
              accept="image/*"
              name={`file${id}`}
              hidden
              onChange={handleImageUpload}
            />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ImageComponent;
