import { AppBar } from "@material-ui/core";
import { useState } from "react";
import { User } from "../../providers/UserProvider";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import GetVacanciesComp from "../GetVacanciesComp";
import GetOneCompany from "../GetOneCompany";
import GetOneDev from "../GetOneDev";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const TabPesquisa = () => {
  const { loggedUser } = User();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  //disabled
  return (
    <div>
      {loggedUser.type === "pf" ? (
        <div>
          <AppBar style={{ background: "black" }} position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Dev" {...a11yProps(0)} />
              <Tab label="Empresa" {...a11yProps(1)} />
              <Tab label="Vagas" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <GetOneDev />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <GetOneCompany />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <GetVacanciesComp />
          </TabPanel>
        </div>
      ) : (
        <div>
          <AppBar style={{ background: "black" }} position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Dev" {...a11yProps(0)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <GetOneDev />
          </TabPanel>
        </div>
      )}
    </div>
  );
};
export default TabPesquisa;
