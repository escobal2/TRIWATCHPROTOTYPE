import { Container, Card, CardContent, Typography, Button, Grid, Box, Divider } from '@mui/material';
import { useRouter } from 'next/router';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ExitToApp } from '@mui/icons-material';
const AdminForm = () => {
  const router = useRouter();
  const complaints = [
    { id: 1, name: "EDMAR SANCHEZ",contactnumber: "09462085575", category: "Overcharge", date: "07/25/2024", details: "kulang po ang sukli saakon and student po ako"  },
    { id: 2, name: "COCO MARTIN",contactnumber: "09462085575", category: "Overcharge", date: "07/25/2024", details: "kulang po ang sukli saakon and student po ako" },
    { id: 3, name: "MARCUS ROSAS",contactnumber: "09462085575", category: "Overcharge", date: "07/25/2024", details: "kulang po ang sukli saakon and student po ako"  },
    { id: 4, name: "KRIS DENSO",contactnumber: "09462085575", category: "Overcharge", date: "07/25/2024", details: "kulang po ang sukli saakon and student po ako"  },
    { id: 5, name: "DANIEL PADILLA",contactnumber: "09462085575", category: "Overcharge", date: "07/25/2024", details: "kulang po ang sukli saakon and student po ako"  },
    { id: 6, name: "JERED HUGO",contactnumber: "09462085575", category: "Overcharge", date: "07/25/2024", details: "kulang po ang sukli saakon and student po ako"  },
    { id: 7, name: "JOKIM LAURORA",contactnumber: "09462085575", category: "Overcharge", date: "07/25/2024", details: "kulang po ang sukli saakon and student po ako"  },
    { id: 8, name: "TOM ESCOBAL",contactnumber: "09462085575", category: "Overcharge", date: "07/25/2024", details: "kulang po ang sukli saakon and student po ako"  },
  ];
  const handleLogout = () => {
    router.push('Admin_Login');
  };
  const handleAssignClick = () => {
    router.push('/sk_personel');
  };

  return (
    <Container maxWidth="md" sx={{ paddingTop: 4 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h5">COMPLAINTS</Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AccountCircleIcon style={{ marginRight: '10px' }} />
          <Button onClick={handleLogout} color="inherit" startIcon={<ExitToApp />}>Logout</Button>
        </div>
      </div>
      <Grid container spacing={3}>
        {complaints.map(complaint => (
          <Grid item xs={12} sm={6} md={4} key={complaint.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', backgroundColor: 'lightblue' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Complaint {complaint.id}
                </Typography>
                <Divider sx={{ marginBottom: 1 }} />
                <Typography paragraph>
                  Name: {complaint.name}
                </Typography>
                <Typography paragraph>
                  Contact Number: {complaint.contactnumber}
                </Typography>
                <Typography paragraph>
                  Category: {complaint.category}
                </Typography>
                <Typography paragraph>
                  Date: {complaint.date}
                </Typography>
                <Typography paragraph>
                  Details: {complaint.details}
                </Typography>
                
                <Box sx={{ marginTop: 'auto' }}>
                  <Button onClick={handleAssignClick} variant="contained" color="primary">
                    Assign To
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AdminForm;
