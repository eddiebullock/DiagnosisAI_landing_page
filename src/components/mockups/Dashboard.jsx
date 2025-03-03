// src/components/mockups/Dashboard.jsx
import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Divider, 
  Chip, 
  Avatar, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  LinearProgress,
  Grid,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DescriptionIcon from '@mui/icons-material/Description';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import PercentIcon from '@mui/icons-material/Percent';

const Dashboard = () => {
  const [reportOpen, setReportOpen] = useState(false);
  
  // Import the ReportContent component for use in the dialog
  const ReportContent = React.lazy(() => import('./ReportContent'));
  
  // Sample assessment sections with completion status
  const reportSections = [
    { name: 'Background and Concerns', completed: true },
    { name: 'Challenging Behavior', completed: true },
    { name: 'Key Mental Health Topics', completed: true },
    { name: 'Academic History/Scholarly Skills', completed: true },
    { name: 'Family History', completed: true },
    { name: 'Past Medical History', completed: true },
    { name: 'Developmental History', completed: true },
    { name: 'Gesture', completed: true },
    { name: 'Social Imaginative Play', completed: true },
    { name: 'Conversational Interchange', completed: true },
    { name: 'Repetitive or Unusual Speech', completed: true },
    { name: 'Nonverbal Behaviors to Regulate Emotion', completed: true },
    { name: 'Developing Peer Relationships', completed: true },
    { name: 'Shared Enjoyment', completed: true },
    { name: 'Socioemotional Reciprocity', completed: true },
    { name: 'Preoccupation', completed: true },
    { name: 'Routines', completed: true },
    { name: 'Repetitive Movements', completed: true },
    { name: 'Sensory Sensitivities', completed: true },
    { name: 'Development at and Before 36 Months', completed: true },
  ];
  
  const handleOpenReport = () => {
    setReportOpen(true);
  };
  
  const handleCloseReport = () => {
    setReportOpen(false);
  };

  return (
    <Box sx={{ p: 0 }}>
      {/* Report Dialog */}
      <Dialog 
        open={reportOpen} 
        onClose={handleCloseReport}
        maxWidth="md"
        fullWidth
        scroll="paper"
      >
        <DialogTitle sx={{ bgcolor: '#1A7B8C', color: 'white' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Assessment Report
            <Chip 
              label="Patient: John" 
              size="small" 
              avatar={<Avatar sx={{ bgcolor: 'white', color: '#1A7B8C' }}>J</Avatar>}
              sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} 
            />
          </Box>
        </DialogTitle>
        <DialogContent dividers>
          <React.Suspense fallback={<Box sx={{ p: 4, textAlign: 'center' }}><Typography>Loading report...</Typography></Box>}>
            <ReportContent />
          </React.Suspense>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseReport} color="primary">Close</Button>
          <Button variant="contained" color="primary">Download Report</Button>
        </DialogActions>
      </Dialog>
      
      {/* Dashboard Header */}
      <Box sx={{ p: 2, bgcolor: '#1A7B8C', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">DiagnosisAI Dashboard</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Chip 
            label="Dr. Smith" 
            size="small" 
            avatar={<Avatar sx={{ bgcolor: 'white', color: '#1A7B8C' }}>DS</Avatar>}
            sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} 
          />
        </Box>
      </Box>

      {/* Dashboard Content */}
      <Box sx={{ p: 3 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Assessment Date: March 3, 2025 | Patient: John (8)</Typography>
        
        <Grid container spacing={3}>
          {/* Section 1: Questionnaires Completed */}
          <Grid item xs={12} md={4}>
            <Card sx={{ mb: 3, height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <AssessmentIcon sx={{ color: '#1A7B8C', mr: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Questionnaires Completed</Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                
                <List>
                  <ListItem sx={{ px: 1, py: 1.5 }}>
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: '#64B464' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={<Typography variant="body1">DAWBA</Typography>}
                      secondary={<Typography variant="body2" color="text.secondary">Score: 17/25</Typography>}
                    />
                  </ListItem>
                  
                  <ListItem sx={{ px: 1, py: 1.5 }}>
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: '#64B464' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={<Typography variant="body1">Autism Quotient (child)</Typography>}
                      secondary={<Typography variant="body2" color="text.secondary">Score: 32/50</Typography>}
                    />
                  </ListItem>
                </List>

                <Box sx={{ mt: 2, p: 1.5, bgcolor: 'rgba(26, 123, 140, 0.1)', borderRadius: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    All required questionnaires have been completed and analyzed.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Section 2: Assessment Report */}
          <Grid item xs={12} md={5}>
            <Card sx={{ mb: 3, height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <DescriptionIcon sx={{ color: '#1A7B8C', mr: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Assessment Report</Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Report generated from text-based interview and includes data from school reports
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={100} 
                    sx={{ height: 8, borderRadius: 4, bgcolor: 'rgba(26, 123, 140, 0.1)', '& .MuiLinearProgress-bar': { bgcolor: '#64B464' } }} 
                  />
                </Box>
                
                <Box sx={{ maxHeight: 300, overflow: 'auto', pr: 1 }}>
                  <Grid container spacing={1}>
                    {reportSections.map((section, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          p: 1, 
                          borderRadius: 1,
                          bgcolor: 'rgba(26, 123, 140, 0.05)',
                          mb: 1
                        }}>
                          <CheckCircleIcon sx={{ fontSize: 16, mr: 1, color: '#64B464' }} />
                          <Typography variant="body2" noWrap>
                            {section.name}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                
                <Box sx={{ mt: 2, p: 1.5, bgcolor: 'rgba(100, 180, 100, 0.1)', borderRadius: 1 }}>
                  <Typography variant="body2" sx={{ color: '#64B464', fontWeight: 500 }}>
                    Report generation complete. All sections analyzed.
                  </Typography>
                </Box>
                
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                  <Button 
                    variant="outlined" 
                    color="primary"
                    endIcon={<DescriptionIcon />}
                    onClick={handleOpenReport}
                  >
                    Preview Report
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Section 3: Diagnosis Likelihood */}
          <Grid item xs={12} md={3}>
            <Card sx={{ mb: 3, height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <MedicalInformationIcon sx={{ color: '#1A7B8C', mr: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Diagnostic Likelihood</Typography>
                </Box>
                <Divider sx={{ mb: 3 }} />
                
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <Box sx={{ 
                    position: 'relative',
                    width: 160,
                    height: 160,
                    margin: '0 auto',
                    borderRadius: '50%',
                    background: `conic-gradient(#1A7B8C 0% 88%, #f0f0f0 88% 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2
                  }}>
                    <Box sx={{ 
                      width: 140, 
                      height: 140, 
                      borderRadius: '50%', 
                      bgcolor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column'
                    }}>
                      <Typography variant="h3" sx={{ fontWeight: 600, color: '#1A7B8C' }}>88%</Typography>
                      <Typography variant="caption" color="text.secondary">Confidence</Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ p: 2, bgcolor: 'rgba(26, 123, 140, 0.1)', borderRadius: 2, mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1A7B8C' }}>
                      ASD Diagnostic Criteria Met
                    </Typography>
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary">
                    Based on comprehensive assessment of questionnaires, interview data, and behavioral observations.
                  </Typography>
                </Box>
                
                <Box sx={{ mt: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="body2">DSM-5 Alignment:</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>High</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;