import React, { useState } from "react";

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);

      try {
        console.log(formData.get("image")); // Vérifiez les données du fichier avant l'envoi
        const response = await fetch("http://localhost:5000/upload", {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          console.log("Image uploaded successfully!");
        } else {
          console.error("Failed to upload image");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };



  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        name="image"
      />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </button>
    </div>
  );
};

export default UploadForm;
