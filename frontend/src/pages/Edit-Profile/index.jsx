import React, { useState, useContext } from "react";
import { DarkModeContext } from "../../App"; // Importing Dark Mode context
import { TextField, Button } from "@mui/material";

const EditProfile = ({ user, setUser }) => {
  const { isDarkMode } = useContext(DarkModeContext); // Get dark mode state from context

  const [formData, setFormData] = useState({
    username: user.username,
    location: user.location,
    college: user.college,
    degree: user.degree,
    linkedin: user.linkedin,
    github: user.github,
    gmail: user.gmail,
    profilePhoto: user.profilePhoto,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveChanges = () => {
    setUser(formData);
    alert("Profile updated successfully!");
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, profilePhoto: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`p-6 rounded-lg shadow-md ${
        isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Profile</h2>

      {/* Profile Photo Section */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold text-center">
          Profile Photo
        </label>
        {formData.profilePhoto && (
          <img
            src={formData.profilePhoto}
            alt="Profile Preview"
            className="w-24 h-24 rounded-full mt-2 mx-auto border border-gray-300"
          />
        )}
        <div className="flex justify-center mt-4">
          <Button
            variant="contained"
            component="label"
            sx={{
              backgroundColor: isDarkMode ? "#1565C0" : "#1976D2",
              "&:hover": {
                backgroundColor: isDarkMode ? "#104A8B" : "#1565C0",
              },
            }}
          >
            Choose File
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              hidden
            />
          </Button>
        </div>
      </div>

      {/* Text Fields */}
      {["username", "location", "college", "degree", "linkedin", "github", "gmail"].map((field) => (
        <TextField
          key={field}
          label={field.charAt(0).toUpperCase() + field.slice(1)}
          variant="outlined"
          name={field}
          value={formData[field]}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            style: isDarkMode ? { color: "#bbb" } : {},
          }}
          InputProps={{
            style: isDarkMode
              ? { color: "white", borderColor: "white" }
              : {},
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: isDarkMode ? "white" : "gray",
              },
              "&:hover fieldset": {
                borderColor: isDarkMode ? "#4CAF50" : "#1976D2",
              },
              "&.Mui-focused fieldset": {
                borderColor: isDarkMode ? "#4CAF50" : "#1976D2",
              },
            },
          }}
        />
      ))}

      {/* Save Changes Button */}
      <div className="flex justify-center mt-4">
        <Button
          variant="contained"
          onClick={handleSaveChanges}
          sx={{
            width: "150px",
            backgroundColor: isDarkMode ? "#1565C0" : "#1976D2",
            "&:hover": {
              backgroundColor: isDarkMode ? "#104A8B" : "#1565C0",
            },
          }}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default EditProfile;
