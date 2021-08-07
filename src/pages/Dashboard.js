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
  Chip,
  InputLabel,
  Tooltip,
  IconButton,
  Avatar,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React from "react";
import "../css/dashboard.css";
import { Component } from "react";
import history from "../history";
import moment from "moment";

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

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      new_tag: "",
      value: 0,
      edit_post: false,
      id: "",
      author_id: "",
      edit_user: false,
    };
  }

  componentDidMount() {
    if (this.props.login.type !== "A") {
      history.push("/");
    }
    this.props.get_all_posts(this.props.login);
    this.props.get_all_users(this.props.login);
    this.props.get_all_comment(this.props.login);
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  handleClose = () => {
    this.setState({
      edit_post: false,
      edit_user: false,
    });
  };

  render() {
    const {
      login,
      post,
      user,
      comment,
      add_post,
      set_post_img,
      set_post_caption,
      set_post_author_email,
      set_post_author_name,
      set_post_author_img,
      set_post_tags,
      set_post_old_img,
      delete_post,
      delete_user,
      set_post_author,
      update_post,
      set_user_contact_num,
      set_user_email,
      set_user_img,
      set_user_name,
      set_user_old_img,
      update_user,
      delete_comment,
    } = this.props;
    return (
      <div className="dashboard">
        <AppBar position="static" style={{ backgroundColor: "#d4f1f4" }}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Add Post" {...a11yProps(0)} />
            <Tab label="Comments" {...a11yProps(1)} />
            <Tab label="Admins" {...a11yProps(2)} />
            <Tab label="Users" {...a11yProps(3)} />
            <Tab label="Posts" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <TabPanel value={this.state.value} index={0}>
          <Card style={{ width: "20rem" }}>
            <CardContent>
              <h3>Add post</h3>
              <form noValidate autoComplete="off">
                {/* <div style={{ marginBottom: "0.5rem" }}> */}
                <Input
                  required
                  id="outlined-basic"
                  label="Choose post image "
                  variant="outlined"
                  type="file"
                  onChange={(e) => {
                    set_post_img(e.target.files[0]);
                  }}
                />
                <br />
                <br />
                <TextField
                  required
                  id="outlined-basic"
                  label="Caption"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={(e) => {
                    set_post_caption(e.target.value);
                  }}
                />
                <br />
                <br />
                <InputLabel>Tags</InputLabel>
                <TextField
                  value={this.state.new_tag}
                  label="Enter to add tag"
                  fullWidth
                  type="text"
                  onChange={(e) => {
                    this.setState({ new_tag: e.target.value });
                  }}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      this.setState({
                        tags: [...this.state.tags, this.state.new_tag],
                      });
                      this.setState({ new_tag: "" });
                    }
                  }}
                />
                <div className="tags_cont">
                  {this.state.tags.map((row, i) => {
                    return (
                      <Chip
                        key={i}
                        label={row}
                        onDelete={() =>
                          // setTags(tags.filter((row2) => row2 !== row))
                          this.setState({
                            tags: this.state.tags.filter(
                              (row2) => row2 !== row
                            ),
                          })
                        }
                        color="primary"
                      />
                    );
                  })}
                </div>
                <div className="btn">
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      set_post_tags(this.state.tags);
                      add_post(post, login);
                    }}
                  >
                    Post
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          <Card>
            <CardContent>
              <h3>All Comments</h3>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">No.</TableCell>
                      <TableCell align="center">Profile Pic</TableCell>
                      <TableCell align="center">Email</TableCell>
                      <TableCell align="center">comment</TableCell>
                      <TableCell align="center">Date</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {comment.all_comment.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell align="center">{i + 1}</TableCell>
                        <TableCell align="center">
                          <Avatar
                            alt={row.user ? row.user.name : "unknown"}
                            src={row.user ? row.user.url : ""}
                          />
                        </TableCell>
                        <TableCell align="center" component="th" scope="row">
                          {row.user ? row.user.email : ""}
                        </TableCell>
                        <TableCell align="center">{row.comment}</TableCell>
                        <TableCell align="center">
                          {moment(row.date).format("LL")}
                        </TableCell>
                        <TableCell align="center">
                          <Tooltip title="Delete">
                            <IconButton
                              size="small"
                              aria-label="delete"
                              onClick={() => {
                                delete_comment(row._id, login);
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          <Card>
            <CardContent>
              <h3>All Admins</h3>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">No.</TableCell>
                      <TableCell align="center">Profile Pic</TableCell>
                      <TableCell align="center">Email</TableCell>
                      <TableCell align="center">contact no.</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {user.all_users.map((row, i) => {
                      if (row.type !== "A") {
                        return;
                      } else {
                        return (
                          <TableRow key={i}>
                            <TableCell align="center">{i + 1}</TableCell>
                            <TableCell align="center">
                              <Avatar alt={row.name} src={row.url} />
                            </TableCell>
                            <TableCell
                              align="center"
                              component="th"
                              scope="row"
                            >
                              {row.email}
                            </TableCell>
                            <TableCell align="center">
                              {row.contact_no}
                            </TableCell>
                            <TableCell align="center">
                              <Tooltip title="Delete">
                                <IconButton
                                  aria-label="delete"
                                  onClick={() => {
                                    delete_user(row._id, login);
                                  }}
                                >
                                  <DeleteIcon />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="Edit">
                                <IconButton
                                  aria-label="edit"
                                  onClick={() => {
                                    set_user_email(row.email);
                                    set_user_name(row.name);
                                    set_user_contact_num(row.contact_no);
                                    set_user_old_img(row.url);
                                    this.setState({
                                      edit_user: true,
                                      id: row._id,
                                    });
                                  }}
                                >
                                  <EditIcon />
                                </IconButton>
                              </Tooltip>
                            </TableCell>
                          </TableRow>
                        );
                      }
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={this.state.value} index={3}>
          <Card>
            <CardContent>
              <h3>All users</h3>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">No.</TableCell>
                      <TableCell align="center">Profile Pic</TableCell>
                      <TableCell align="center">Email</TableCell>
                      <TableCell align="center">contact no.</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {user.all_users.map((row, i) => {
                      if (row.type === "A") {
                        return;
                      } else {
                        return (
                          <TableRow key={i}>
                            <TableCell align="center">{i + 1}</TableCell>
                            <TableCell align="center">
                              <Avatar alt={row.name} src={row.url} />
                            </TableCell>
                            <TableCell
                              align="center"
                              component="th"
                              scope="row"
                            >
                              {row.email}
                            </TableCell>
                            <TableCell align="center">
                              {row.contact_no}
                            </TableCell>
                            <TableCell align="center">
                              <Tooltip title="Delete">
                                <IconButton
                                  aria-label="delete"
                                  onClick={() => {
                                    delete_user(row._id, login);
                                  }}
                                >
                                  <DeleteIcon />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="Edit">
                                <IconButton
                                  aria-label="edit"
                                  onClick={() => {
                                    set_user_email(row.email);
                                    set_user_name(row.name);
                                    set_user_contact_num(row.contact_no);
                                    set_user_old_img(row.url);
                                    this.setState({
                                      edit_user: true,
                                      id: row._id,
                                    });
                                  }}
                                >
                                  <EditIcon />
                                </IconButton>
                              </Tooltip>
                            </TableCell>
                          </TableRow>
                        );
                      }
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={this.state.value} index={4}>
          <Card>
            <CardContent>
              <h3>All posts</h3>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">No.</TableCell>
                      <TableCell align="center">Email</TableCell>
                      <TableCell align="center">Caption</TableCell>

                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {post.all_post.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell align="center">{i + 1}</TableCell>
                        <TableCell align="center" component="th" scope="row">
                          {row.author ? row.author.email : ""}
                        </TableCell>
                        <TableCell align="center">
                          {row.caption ? row.caption : ""}
                        </TableCell>
                        <TableCell align="center">
                          <Tooltip title="Delete">
                            <IconButton
                              aria-label="delete"
                              onClick={() => {
                                delete_post(row._id);
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip
                            title="Edit"
                            onClick={() => {
                              this.setState({
                                edit_post: true,
                                id: row._id,
                                author_id: row.author_id,
                              });
                              set_post_caption(row.caption);
                              set_post_old_img(row.url);
                              set_post_tags(row.tags);
                              set_post_author_email(row.author_email);
                              set_post_author_name(row.author_name);
                              set_post_author_img(row.author_img);
                            }}
                          >
                            <IconButton aria-label="edit">
                              <EditIcon />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </TabPanel>
        <Dialog
          open={this.state.edit_post}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit post</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Caption"
              type="text"
              fullWidth
              inputProps={{ maxLength: 80 }}
              value={post.caption}
              onChange={(e) => set_post_caption(e.target.value)}
            />
            <InputLabel style={{ marginTop: "1rem" }}>Post Img</InputLabel>
            <TextField
              autoFocus
              margin="dense"
              type="file"
              fullWidth
              style={{ marginBottom: "1rem" }}
              onChange={(e) => set_post_img(e.target.files[0])}
            />
            <Autocomplete
              id="combo-box-demo"
              options={user.all_users.map((row2) => {
                return {
                  title: row2.name,
                  id: row2._id,
                };
              })}
              size="small"
              fullWidth
              onChange={(e, newVal) => {
                // newVal ? this.setState({ author_id: newVal.id }) : "";
                set_post_author(newVal.id, post, login);
              }}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  label="Select Author"
                  variant="outlined"
                />
              )}
            />
            <InputLabel style={{ marginTop: "1rem" }}>Tags</InputLabel>
            <TextField
              value={this.state.new_tag}
              label="Enter to add tag"
              fullWidth
              type="text"
              onChange={(e) => {
                this.setState({ new_tag: e.target.value });
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  set_post_tags([...post.tags, this.state.new_tag]);
                  this.setState({ new_tag: "" });
                }
              }}
            />
            <div className="tags_cont">
              {post.tags.map((row, i) => {
                return (
                  <Chip
                    key={i}
                    label={row}
                    onDelete={() => {
                      set_post_tags(post.tags.filter((row2) => row2 !== row));
                    }}
                    color="primary"
                  />
                );
              })}
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              color="primary"
              onClick={() => {
                console.log("component2", post);
                update_post(this.state.id, post, login);
                this.handleClose();
              }}
            >
              update
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.edit_user}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit User</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              type="text"
              fullWidth
              value={user.name}
              onChange={(e) => set_user_name(e.target.value)}
            />

            <TextField
              autoFocus
              margin="dense"
              label="Email"
              type="text"
              fullWidth
              value={user.email}
              onChange={(e) => set_user_email(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Contact no."
              type="text"
              fullWidth
              inputProps={{ maxLength: 10 }}
              value={user.contact_num}
              onChange={(e) => set_user_contact_num(e.target.value)}
            />
            <InputLabel style={{ marginTop: "1rem" }}>User Img</InputLabel>
            <TextField
              autoFocus
              margin="dense"
              type="file"
              fullWidth
              style={{ marginBottom: "1rem" }}
              onChange={(e) => set_user_img(e.target.files[0])}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              color="primary"
              onClick={() => {
                console.log("component2", post);
                update_user(this.state.id, user, false, login);
                this.handleClose();
              }}
            >
              update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Dashboard;
