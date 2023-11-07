import React, { Component } from "react";
import "./App.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      gender: "",
      subscription: false,
      errors: {},
    };
  }

  // Handle input changes
  handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    this.setState({ [name]: inputValue });
  };

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      this.state && alert("form submited");
    }
  };
  // Form validation
  validateForm = () => {
    const { name, email, gender } = this.state;
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!gender) {
      errors.gender = "Please select a gender";
    }

    this.setState({ errors });

    return Object.keys(errors).length === 0;
  };

  render() {
    const { name, email, gender, subscription, errors } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <h2>Contact form</h2>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name here"
              value={name}
              onChange={this.handleInputChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email here"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div>
            <label>Gender</label>
            <select
              name="gender"
              value={gender}
              onChange={this.handleInputChange}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <span className="error">{errors.gender}</span>}
          </div>

          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              margin: "10px 0",
            }}
            class="checkbox-wrapper-18"
          >
            <label>Subscription</label>
            <div class="round">
              <input
                type="checkbox"
                checked={subscription}
                onChange={this.handleInputChange}
                id="subscription"
                name="subscription"
              />
              <label for="subscription"></label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
