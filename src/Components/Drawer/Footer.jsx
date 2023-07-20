import { Button } from "@mui/material"
import { grey, red } from "@mui/material/colors"

export const Footer = ({ handleCancel, sendDataToServer }) => {

  return (
    <>
      <div style={{ marginTop: 'auto', backgroundColor: grey[200], padding: '20px 0' }}>
        <Button 
          variant="contained" 
          color="success" 
          sx={{ marginRight: '20px', marginLeft: '20px', textTransform: "none" }}
          onClick={sendDataToServer}
        >
          Save the Segment
        </Button>
        <Button 
          variant="contained" 
          sx={{ textTransform: "none", backgroundColor: "white", color: red[500], '&:hover': { backgroundColor: 'white' } }}
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </div>
    </>
  )
}