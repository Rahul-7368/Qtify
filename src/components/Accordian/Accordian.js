import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordian = ({ title, content }) => {
  return (
    <>
      <Accordion
        sx={{
          borderRadius: "10px!important",
          width: "clamp(200px,100%,1135px)"
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "var(--primary-color)",
                fontSize: "40px"
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={[
            {
              backgroundColor: "var(--black-color)",
              borderRadius: "10px",
              border: "1px solid #FFF",
              padding: "18px 32px"
            },
            {
              ".css-o4b71y-MuiAccordionSummary-content": {
                margin: "0px"
              }
            }
          ]}
        >
          <Typography
            sx={{
              color: "var(--white-color)",
              fontFamily: "Poppins",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal"
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingTop: "23px", paddingBottom: "23px" }}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              margin: "auto 32px"
            }}
          >
            {content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Accordian;
