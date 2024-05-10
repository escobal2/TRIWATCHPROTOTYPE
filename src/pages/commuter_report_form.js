import { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, CssBaseline, Alert, Paper, MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const ReportForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    category: "",
    complaintDetails: "",
    file: null,
    date: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "", 
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!formData.contactNumber.trim()) {
      errors.contactNumber = "Contact Number is required";
    }
    if (!formData.category.trim()) {
      errors.category = "Category is required";
    }
    if (!formData.complaintDetails.trim()) {
      errors.complaintDetails = "Details of Complaint are required";
    }
    if (!formData.date) {
      errors.date = "Date is required";
    }
    if (Object.keys(errors).length === 0) {
      setSubmissionStatus("success");
      setFormData({
        fullName: "",
        contactNumber: "",
        category: "",
        complaintDetails: "",
        file: null,
        date: "",
      });
      alert("Complaint successfully submitted!");
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ marginTop: 8 }}>
      <CssBaseline />
      <Paper elevation={3} sx={{ padding: 4, textAlign: 'center' }}>
        <Typography component="h1" variant="h5">
          Report Form
        </Typography>
        {submissionStatus === "success" && (
          <Alert severity="success" sx={{ marginTop: 2 }}>
            Form submitted successfully!
          </Alert>
        )}
        <form onSubmit={handleSubmit} sx={{ marginTop: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                error={Boolean(formErrors.fullName)}
                helperText={formErrors.fullName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Contact Number"
                variant="outlined"
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                error={Boolean(formErrors.contactNumber)}
                helperText={formErrors.contactNumber}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  label="Category"
                  error={Boolean(formErrors.category)}
                >
                  <MenuItem value="">Select Category</MenuItem>
                  <MenuItem value="Category 1">Overcharging</MenuItem>
                  <MenuItem value="Category 2">Assault</MenuItem>
                  <MenuItem value="Category 3">Lost Belonging</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Date"
                variant="outlined"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                error={Boolean(formErrors.date)}
                helperText={formErrors.date}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Details of Complaint"
                variant="outlined"
                name="complaintDetails"
                value={formData.complaintDetails}
                onChange={handleChange}
                error={Boolean(formErrors.complaintDetails)}
                helperText={formErrors.complaintDetails}
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
                id="fileInput"
              />
              <label htmlFor="fileInput">
                <Button variant="outlined" component="span">
                  Upload Image
                </Button>
              </label>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default ReportForm;
