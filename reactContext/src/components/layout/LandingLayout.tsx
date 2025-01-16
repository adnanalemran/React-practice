import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
const full = "90vh";

const LandingLayout = () => {
  return (
    <div>
      <Header />
      <Box minHeight={full}>
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
};

export default LandingLayout;
