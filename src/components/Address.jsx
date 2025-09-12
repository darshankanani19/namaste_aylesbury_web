import React, { useState } from "react";

const AddressForm = () => {
  const [addresses, setAddresses] = useState([
    "Aylesbury, Buckinghamshire, United Kingdom",
    "Aylesbury, Buckinghamshire, United Kingdom",
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    street: "",
    city: "",
    district: "",
    state: "",
    country: "",
  });

  const handleRadioChange = (index) => {
    setSelectedIndex(index);
  };

  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddAddress = () => {
    const { street, city, district, state, country } = formData;
    const parts = [street, city, district, state, country].filter(Boolean);
    const newAddress = parts.join(", ");
    if (!newAddress) return;

    setAddresses((prev) => [newAddress, ...prev]);
    setSelectedIndex(0);
    setFormData({ street: "", city: "", district: "", state: "", country: "" });
    setShowForm(false);
  };

  const colors = {
    bg: "#f6f6f6",
    text: "#1a1a1a",
    border: "#ddd",
    buttonBg: "#e7b89e",
    buttonText: "#fff",
    inputBg: "#f2f2f2",
  };

  return (
    <>
      {/* Background container: full width of parent */}
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: colors.bg,
          padding: 20,
          width: "100%",
          borderRadius: 4,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: 14,
            marginBottom: 10,
            color: colors.text,
          }}
        >
          Address
        </div>

        {addresses.map((addr, idx) => (
          <label
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 8,
              backgroundColor: "#eaeaea",
              borderRadius: 4,
              padding: "6px 10px",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <input
              type="radio"
              name="address"
              checked={selectedIndex === idx}
              onChange={() => handleRadioChange(idx)}
              style={{ marginRight: 12 }}
            />
            <span style={{ fontSize: 13, color: colors.text }}>{addr}</span>
          </label>
        ))}

        {showForm && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginTop: 8,
            }}
          >
            <input
              name="street"
              value={formData.street}
              onChange={handleInputChange}
              placeholder="Street"
              style={{
                padding: "8px 10px",
                borderRadius: 4,
                border: `1px solid ${colors.border}`,
                backgroundColor: colors.inputBg,
                fontSize: 13,
                gridColumn: "1 / 2",
              }}
            />
            <input
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
              style={{
                padding: "8px 10px",
                borderRadius: 4,
                border: `1px solid ${colors.border}`,
                backgroundColor: colors.inputBg,
                fontSize: 13,
                gridColumn: "2 / 3",
              }}
            />
            <input
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              placeholder="District"
              style={{
                padding: "8px 10px",
                borderRadius: 4,
                border: `1px solid ${colors.border}`,
                backgroundColor: colors.inputBg,
                fontSize: 13,
                gridColumn: "1 / 2",
              }}
            />
            <input
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              placeholder="State"
              style={{
                padding: "8px 10px",
                borderRadius: 4,
                border: `1px solid ${colors.border}`,
                backgroundColor: colors.inputBg,
                fontSize: 13,
                gridColumn: "2 / 3",
              }}
            />
            <input
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Country"
              style={{
                padding: "8px 10px",
                borderRadius: 4,
                border: `1px solid ${colors.border}`,
                backgroundColor: colors.inputBg,
                fontSize: 13,
                gridColumn: "1 / 3",
                marginBottom: 8,
              }}
            />
            <button
              onClick={handleAddAddress}
              style={{
                gridColumn: "2 / 3",
                backgroundColor: colors.buttonBg,
                color: colors.buttonText,
                border: "none",
                borderRadius: 4,
                fontWeight: "bold",
                fontSize: 12,
                cursor: "pointer",
                padding: "8px 0",
                opacity:
                  formData.street ||
                  formData.city ||
                  formData.district ||
                  formData.state ||
                  formData.country
                    ? 1
                    : 0.6,
              }}
              disabled={
                !(
                  formData.street ||
                  formData.city ||
                  formData.district ||
                  formData.state ||
                  formData.country
                )
              }
            >
              Add
            </button>
          </div>
        )}
      </div>

      {/* Add Address button outside background container */}
      <div
        style={{
          marginTop: 10,
          fontWeight: "bold",
          fontSize: 12,
          color: colors.text,
          width: "100%",
          maxWidth: 420,
        }}
      >
        <button
          onClick={handleAddClick}
          style={{
            border: "none",
            background: "transparent",
            color: colors.text,
            fontWeight: "bold",
            fontSize: 13,
            cursor: "pointer",
            textDecoration: "underline",
            padding: 0,
          }}
        >
          Add Address
        </button>
      </div>
    </>
  );
};

export default AddressForm;
