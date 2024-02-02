
import Grid from "@mui/material/Grid";

import MDBox from "../../components/MdBox";
import DashboardLayout from "../../pagecomponents/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../pagecomponents/Navbars/DashboardNavbar"
function Dashboard() {
  return (
    <DashboardLayout>
<DashboardNavbar/>
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              defrgthyjuyhtgrfed
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              edrftgyhujikjuyhgtfrde
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              wsderftgyhujiuhygtrf
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              swderftgyhuj
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
