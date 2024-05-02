import React, { useState } from "react";

const PhotographerRegForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: "",
    instagram: "",
    address: "",
    city: "",
    serviceAvailable: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      // If the field is a checkbox, handle multiple selections
      if (checked) {
        // If checked, add the value to the array
        setFormData({ ...formData, [name]: [...formData[name], value] });
      } else {
        // If unchecked, remove the value from the array
        setFormData({
          ...formData,
          [name]: formData[name].filter((service) => service !== value),
        });
      }
    } else {
      // For other input types, handle as usual
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can replace this with your desired form submission logic
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Instagram Username:
          <input
            type="text"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Service Available:
          <br />
          <input
            type="checkbox"
            name="serviceAvailable"
            value="wedding"
            onChange={handleChange}
            checked={formData.serviceAvailable.includes("wedding")}
          />
          Wedding
          <br />
          <input
            type="checkbox"
            name="serviceAvailable"
            value="pre-wedding"
            onChange={handleChange}
            checked={formData.serviceAvailable.includes("pre-wedding")}
          />
          Pre-Wedding
          <br />
          <input
            type="checkbox"
            name="serviceAvailable"
            value="baby shower"
            onChange={handleChange}
            checked={formData.serviceAvailable.includes("baby shower")}
          />
          Baby Shower
          <br />
          <input
            type="checkbox"
            name="serviceAvailable"
            value="naming ceremony"
            onChange={handleChange}
            checked={formData.serviceAvailable.includes("naming ceremony")}
          />
          naming ceremony
          <br />
          <input
            type="checkbox"
            name="serviceAvailable"
            value="engagement ceremony"
            onChange={handleChange}
            checked={formData.serviceAvailable.includes("engagement ceremony")}
          />
          engagement ceremony
          <br />
          <input
            type="checkbox"
            name="serviceAvailable"
            value="post-wedding"
            onChange={handleChange}
            checked={formData.serviceAvailable.includes("post-wedding")}
          />
          post-wedding
          <br />
          <input
            type="checkbox"
            name="serviceAvailable"
            value="maternity"
            onChange={handleChange}
            checked={formData.serviceAvailable.includes("maternity")}
          />
          maternity
          <br />
          <input
            type="checkbox"
            name="serviceAvailable"
            value="baby shoot"
            onChange={handleChange}
            checked={formData.serviceAvailable.includes("baby shoot")}
          />
          baby shoot
          <br />
          <input
            type="checkbox"
            name="serviceAvailable"
            value="pre-birthday shoot"
            onChange={handleChange}
            checked={formData.serviceAvailable.includes("pre-birthday shoot")}
          />
          pre-birthday shoot
          <br />
          <input
            type="checkbox"
            name="serviceAvailable"
            value="birthday shoot"
            onChange={handleChange}
            checked={formData.serviceAvailable.includes("birthday shoot")}
          />
          birthday shoot
          <br />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PhotographerRegForm;
