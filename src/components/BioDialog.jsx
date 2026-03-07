import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    fontFamily: "'Josefin Sans', sans-serif", // Ensures the dialog window uses your font
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

export default function BioDialog(props) {
  const handleClose = () => {
    props.setOpen(false);
  };

  const bio = props.bio;

  if (!bio) return null;

  const josefinStyle = { fontFamily: "'Josefin Sans', sans-serif" };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle 
          sx={{ m: 0, p: 2, pr: 6, ...josefinStyle, fontWeight: 700, color: '#000DE' }} 
          id="customized-dialog-title"
        >
          {bio.name}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}>
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: '100%',
              padding: '20px 0'
            }}>
            <img
              className="dialog-image" 
              src={bio.src}
              alt={`${bio.name} headshot`}
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '16px'
              }}
            />
            <Typography 
              variant="h6" 
              sx={{ 
                ...josefinStyle,
                color: '#6363AB', 
                fontWeight: 500, 
                textAlign: 'center' 
              }}
            >
              {bio.role}
            </Typography>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ ...josefinStyle, color: '#6363AB' }}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}