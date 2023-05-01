import React, { useState } from "react";
import { axiosSelling } from "../../api/axios";
import { FaTimes } from "react-icons/fa";
const CreateShipping = () => {
  const cities = [
    "giza",
    "cairo",
    "alexandria",
    "luxor",
    "aswan",
    "damietta",
    "port said",
    "suez",
    "ismailia",
    "red sea",
    "south sinai",
    "north sinai",
    "matruh",
    "minya",
    "faiyum",
    "qena",
    "sohag",
    "bensuif",
  ];
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [locations, setLocations] = useState([]);
  const [phone, setPhone] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // const regions = ["North America", "South America", "Europe", "Asia", "Africa", "Australia"];
  const [selectedCities, setSelectedCities] = useState([]);

  const handleCitySelect = (event) => {
    const selectedCity = event.target.value;
    if (!selectedCities.includes(selectedCity)) {
      setSelectedCities([...selectedCities, selectedCity]);
    }
  };

  const handleCityRemove = (cityToRemove) => {
    setSelectedCities(selectedCities.filter((city) => city !== cityToRemove));
  };

  const [selectedRegions, setSelectedRegions] = useState([]);

  const handleRegionChange = (e) => {
    const region = e.target.value;
    const isSelected = e.target.checked;

    if (isSelected) {
      setSelectedRegions([...selectedRegions, region]);
    } else {
      setSelectedRegions(selectedRegions.filter((r) => r !== region));
    }
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLocationChange = (index, value) => {
    const newLocations = [...locations];
    newLocations[index] = value;
    setLocations(newLocations);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddLocation = () => {
    setLocations([...locations, ""]);
  };

  const handleRemoveLocation = (index) => {
    const newLocations = [...locations];
    newLocations.splice(index, 1);
    setLocations(newLocations);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const locations = selectedCities;
    try {
      await axiosSelling.post("/admin/createshipping", {
        username,
        password,
        locations,
      });
      setSuccessMessage("Company created successfully");
      console.log("Company created successfully");

      // Clear form fields
      setName("");
      setUsername("");
      setPassword("");
      setLocations([]);
      setPhone("");
      setErrorMessage("");
    } catch (error) {
      console.error("Error creating company:", error.message);
      setErrorMessage("Error creating company");
    }
  };

  return (
    <div className="create-company-container">
      <h1>Create Shipping Company</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <br />
          <label>
            Username:
            <input
              type="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <div>
            <h2>Select cities:</h2>
            <div>
              <select onChange={handleCitySelect}>
                <option value="">Select City</option>
                {cities
                  .filter((city) => !selectedCities.includes(city))
                  .map((city) => (
                    <option key={city}>{city}</option>
                  ))}
              </select>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {selectedCities.map((city) => (
                  <div
                    key={city}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                      
                    }}
                  >
                   <button
                      style={{
                        background: "none",
                        border: "none",
                        color: "#333",
                  
                        marginTop: "5px",
                      }}
                      onClick={() => handleCityRemove(city)}
                    >
                      <FaTimes />
                    </button>
                    <div>{city}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button type="submit">Create Company</button>
          {successMessage && <p>{successMessage}</p>}
        </div>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default CreateShipping;
