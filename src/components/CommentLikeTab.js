import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import {
  Box,
  List,
  ListItem,
  Avatar,
  Divider,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@material-ui/core";
import { Component } from "react";

class CommentLikeTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      index: 0,
    };
  }
  TabPanel(props) {
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
  // useStyles = makeStyles((theme) => ({
  //   root: {
  //     backgroundColor: theme.palette.background.paper,
  //     width: "100%",
  //   },
  // }));
  // classes = this.useStyles();
  // theme = useTheme();

  a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }
  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  handleChangeIndex = (index) => {
    this.setState({ index: index });
  };

  render() {
    const {
      add_comment,
      set_comment,
      set_comment_user_img,
      set_comment_user_name,
      login,
      post,
      comment,
    } = this.props;
    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="comments" {...this.a11yProps(0)} />
            <Tab label="Likes" {...this.a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          // axis={this.theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          style={{ backgroundColor: "#d4f1f4" }}
        >
          <this.TabPanel
            value={this.state.value}
            index={0}
            // dir={this.theme.direction}
            style={{ backgroundColor: "#d4f1f4" }}
          >
            <List
              className="comment__"
              style={{ height: "25rem", overflowY: "auto" }}
            >
              {post.current_post.comments.map((row, i) => {
                return (
                  <React.Fragment key={i}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt={row.user_name} src={row.user_img} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={row.user_name}
                        secondary={
                          <React.Fragment>{` —  ${row.comment}`}</React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </React.Fragment>
                );
              })}
            </List>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                add_comment(post.current_post._id, comment, login);
              }}
            >
              <TextField
                label="Add a comment"
                fullWidth
                onFocus={() => {
                  set_comment_user_img(login.url);
                  set_comment_user_name(login.name);
                }}
                onChange={(e) => {
                  set_comment(e.target.value);
                }}
                value={comment.comment}
              />
            </form>
          </this.TabPanel>
          <this.TabPanel
            value={this.state.value}
            index={1}
            // dir={this.theme.direction}
            style={{ backgroundColor: "#d4f1f4" }}
          >
            <List
              className="comment__"
              style={{ height: "25rem", overflowY: "auto" }}
            >
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    // src="/static/images/avatar/2.jpg"
                  />
                </ListItemAvatar>
                <ListItemText primary="Summer BBQ" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    // src="/static/images/avatar/2.jpg"
                  />
                </ListItemAvatar>
                <ListItemText primary="Summer BBQ" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    // src="/static/images/avatar/2.jpg"
                  />
                </ListItemAvatar>
                <ListItemText primary="Summer BBQ" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    // src="/static/images/avatar/2.jpg"
                  />
                </ListItemAvatar>
                <ListItemText primary="Summer BBQ" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    // src="/static/images/avatar/2.jpg"
                  />
                </ListItemAvatar>
                <ListItemText primary="Summer BBQ" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    // src="/static/images/avatar/2.jpg"
                  />
                </ListItemAvatar>
                <ListItemText primary="Summer BBQ" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    // src="/static/images/avatar/2.jpg"
                  />
                </ListItemAvatar>
                <ListItemText primary="Summer BBQ" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    // src="/static/images/avatar/2.jpg"
                  />
                </ListItemAvatar>
                <ListItemText primary="Summer BBQ" />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          </this.TabPanel>
        </SwipeableViews>
      </div>
    );
  }
}

export default CommentLikeTab;
