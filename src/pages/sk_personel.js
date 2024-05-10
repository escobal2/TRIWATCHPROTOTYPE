import { useState } from 'react';
import { Container, Card, CardContent, Typography, Button, Grid, CardMedia } from '@mui/material';
import { useRouter } from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SkPersonnelForm = () => {
  const [personnel] = useState([
    { id: 1, Name: "John Doe", Position: "Burabod", imageUrl: "/images/profile.png" },
    { id: 2, Name: "Jane Smith", Position: "SaveMore", imageUrl: "/images/profile.png" },
    { id: 3, Name: "Alice Johnson", Position: "Sorsogon State University", imageUrl: "/images/profile.png" },
    { id: 4, Name: "Bob Brown", Position: "SPPVS Gate 3 Bibincahan", imageUrl: "/images/profile.png"},
    { id: 5, Name: "Charlie Davis", Position: "Capitol Park", imageUrl: "/images/profile.png" },
  ]);
  const router = useRouter();

  const handleSubmit = (id) => {
    const personnelData = personnel.find(person => person.id === id);
    console.log(`Submitted data for personnel ${personnelData.Name}:`, personnelData);
    alert(`Complaint successfully submitted to ${personnelData.Name}`);
  };

  const handleReturn = () => {
    router.push('Admin_Form');
  };
  
  return (
    <Container maxWidth="md">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h5"></Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button onClick={handleReturn} color="primary" style={{ marginTop: '20px' }}>
            <ArrowBackIcon style={{ marginRight: '10px' }} />
          </Button>
        </div>
      </div>
      <Grid container spacing={3}>
        {personnel.map(person => (
          <Grid item xs={12} sm={6} md={4} key={person.id}>
             <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', backgroundColor: 'lightblue' }}>
              <CardMedia
                component="img"
                height="140"
                image={person.imageUrl}
                alt={person.Name}
              />
              <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div>
                  <Typography variant="h6" gutterBottom>
                    SK Personnel 
                  </Typography>
                  <Typography paragraph>
                    <strong>Name:</strong> {person.Name}
                    <br/>
                    <strong>Position:</strong> {person.Position}
                  </Typography>
                </div>
                <Button
                  onClick={() => handleSubmit(person.id)}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SkPersonnelForm;
