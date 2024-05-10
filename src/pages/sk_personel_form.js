import { useState } from 'react';
import { Container, Card, CardContent, Typography, Button, Grid, Avatar } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { useRouter } from 'next/router';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const SKPersonelForm = () => {
  const [personels, setPersonels] = useState([
    { id: 1, name: "Details" },
    { id: 2, name: "Details" },
    { id: 3, name: "Details" },
    { id: 4, name: "Details" },
    { id: 5, name: "Details" },
    { id: 6, name: "Details" },
  ]);
  const router = useRouter();

  const handleLogout = () => {
    router.push('sk_personel_login');
  };

  const handleSubmit = (id) => {
    const assignedPersonel = personels.find(personel => personel.id === id);
    console.log(`Assigned: ${assignedPersonel.name}`);
  };

  return (
    <Container maxWidth="md" sx={{ paddingTop: 4 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h5"></Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AccountCircleIcon style={{ marginRight: '10px' }} />
          <Button onClick={handleLogout} color="inherit" startIcon={<ExitToApp />}>Logout</Button>
        </div>
      </div>
      <Grid container spacing={3}>
        {personels.map(personel => (
          <Grid item xs={12} sm={6} md={4} key={personel.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', backgroundColor: 'lightblue' }}>
              <CardContent>
                <div>
                  <Typography variant="h6" gutterBottom>
                    Complaint
                  </Typography>
                  <Typography paragraph>
                    {personel.name}
                  </Typography>
                </div>
                <Button
                  onClick={() => handleSubmit(personel.id)}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SKPersonelForm;
