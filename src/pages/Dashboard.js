import {
  TextField,
  Card,
  CardContent,
  Button,
  Input,
  Table,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Paper,
  Box,
  Typography,
  AppBar,
  Tabs,
  Tab,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React from "react";
import "../css/dashboard.css";

function createData(name, email, title, file, action) {
  return { name, email, title, file };
}

const rows = [
  createData("abhishek", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "28ch",
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Dashboard = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div className="dashboard">
      <AppBar position="static" style={{ backgroundColor: "#d4f1f4" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Add Post" {...a11yProps(0)} />
          <Tab label="Contributions" {...a11yProps(1)} />
          <Tab label="Comments" {...a11yProps(2)} />
          <Tab label="Admins" {...a11yProps(3)} />
          <Tab label="Users" {...a11yProps(4)} />
          <Tab label="Posts" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <Card style={{ width: "20rem" }}>
          <CardContent>
            <h3>Add post</h3>
            <form className={classes.root} noValidate autoComplete="off">
              <div style={{ marginBottom: "0.5rem" }}>
                <TextField
                  required
                  id="outlined-basic"
                  label="Caption"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div>
                <Input
                  required
                  id="outlined-basic"
                  label="Choose post image "
                  variant="outlined"
                  type="file"
                />
              </div>
              <div className="btn">
                <Button color="primary" variant="contained">
                  Post
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Card>
          <CardContent>
            <h3>Contribution</h3>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Title</TableCell>
                    <TableCell align="right">File</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Item Three
      </TabPanel>
    </div>
  );
};

export default Dashboard;
