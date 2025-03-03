// src/components/Hero.jsx
import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
  Card,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import DashboardMockup from './mockups/Dashboard';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      id="hero"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        {/* Top section with title and buttons */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 2,
              }}
            >
              Streamlining ASD & ADHD Assessments
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 400,
                mb: 4,
                lineHeight: 1.6,
                maxWidth: '800px',
                mx: 'auto'
              }}
            >
              Reduce waitlists and increase assessment capacity with our clinician-focused AI application.
            </Typography>
            
            {/* Statistics cards - now in a row centered above the dashboard */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              flexWrap: 'wrap', 
              gap: 3,
              mb: 4
            }}>
              <Card 
                elevation={0} 
                sx={{ 
                  backgroundColor: 'rgba(26, 123, 140, 0.1)', 
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                  minWidth: 180
                }}
              >
                <CardContent>
                  <Typography variant="h3" color="primary" sx={{ fontWeight: 700, mb: 1 }}>
                    60%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Reduction in assessment time
                  </Typography>
                </CardContent>
              </Card>
              <Card 
                elevation={0} 
                sx={{ 
                  backgroundColor: 'rgba(230, 181, 74, 0.1)', 
                  borderLeft: `4px solid ${theme.palette.secondary.main}`,
                  minWidth: 180
                }}
              >
                <CardContent>
                  <Typography variant="h3" color="secondary" sx={{ fontWeight: 700, mb: 1 }}>
                    3x
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    More assessments per clinician
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            
            {/* Call to action buttons */}
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              justifyContent: 'center',
              mb: 6
            }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={ScrollLink}
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Request Demo
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                component={ScrollLink}
                to="features"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Learn More
              </Button>
            </Box>
          </motion.div>
        </Box>

        {/* Dashboard mockup section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box
            sx={{
              position: 'relative',
              maxWidth: '90%',
              mx: 'auto',
              '&::before': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '8%',
                left: '8%',
                borderRadius: '12px',
                backgroundColor: theme.palette.primary.main,
                opacity: 0.1,
                zIndex: 0,
              },
            }}
          >
            <Card 
              sx={{ 
                overflow: 'hidden', 
                borderRadius: '12px',
                border: `1px solid ${theme.palette.divider}`,
                position: 'relative',
                zIndex: 1,
              }}
            >
              <DashboardMockup />
            </Card>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;