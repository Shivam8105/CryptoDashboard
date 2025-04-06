// import {Box, Flex } from "@chakra-ui/react";
import DashboardLayout from "../../Component/DashboardLayout";
import InfoCard from "./components/InfoCard";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import Transactions from "./components/Transactions";
import { Grid, GridItem } from "@chakra-ui/react";

function Dashboard() {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap="6"
      >
        <GridItem
          colSpan={{
            base: 1,
            xl: 2,
          }}
        >
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colspane={1}>
          <Transactions />
        </GridItem>
        <GridItem colspane={1}>
          <InfoCard imageUrl="/dot_bg.svg" text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it" tagText="Loan" inverted={false}/>
        </GridItem>
        <GridItem colspane={1}>
          <InfoCard imageUrl="/grid_bg.svg" text="Learn more about our real estate, mortgage, and  corporate account services" tagText="contact" inverted={true}/>
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
}

export default Dashboard;
