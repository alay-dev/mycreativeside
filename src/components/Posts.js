import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import loaderCont from "../components/Loader";
import "../css/posts.css";
import {
  Card,
  Avatar,
  TextField,
  Chip,
  InputLabel,
  CircularProgress,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }
  handleChange = (event, value) => {
    this.setState({ page: value });
  };

  render() {
    const { post } = this.props;
    return (
      <div className="posts">
        <div className="posts__left">
          <TextField
            id="outlined-search"
            fullWidth
            variant="outlined"
            label="Search"
            size="small"
            type="search"
          />
          <div className="tag__cont">
            <InputLabel style={{ marginBottom: "1rem" }}>
              Search by tags
            </InputLabel>
            <Chip
              label="tag1"
              onClick={() => console.log("clicked")}
              style={{
                backgroundColor: "#189AB4",
                color: "#fafafa",
                margin: "0.2rem 0.5rem",
              }}
            />
            <Chip
              label="tag1"
              onClick={() => console.log("clicked")}
              style={{
                backgroundColor: "#189AB4",
                color: "#fafafa",
                margin: "0.2rem 0.5rem",
              }}
            />
            <Chip
              label="tag1"
              onClick={() => console.log("clicked")}
              style={{
                backgroundColor: "#189AB4",
                color: "#fafafa",
                margin: "0.2rem 0.5rem",
              }}
            />
            <Chip
              label="tag1"
              onClick={() => console.log("clicked")}
              style={{
                backgroundColor: "#189AB4",
                color: "#fafafa",
                margin: "0.2rem 0.5rem",
              }}
            />
          </div>
        </div>
        <div className="posts__right">
          {post.all_post.map((row) => {
            return (
              <Card className="card" key={row._id}>
                <Link to={`/post/${row._id}`}>
                  <img src={row.url} className="post_img" />
                </Link>
                <div className="post--info">
                  <div className="caption__cont">
                    <p>{row.caption}</p>
                  </div>
                  <div className="author">
                    <Avatar
                      style={{ marginRight: "0.5rem" }}
                      src={row.author_img}
                    />
                    <span>
                      {row.author_name}
                      <br />
                      <span style={{ color: "GrayText" }}>
                        {moment(row.date).format("LL")}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="stats">
                  <div className="like">
                    <ThumbUpAltIcon
                      style={{
                        color: "#05445e",
                        marginRight: "0.5rem",
                        fontSize: "1.2rem",
                      }}
                    />
                    <span>{row.likes ? row.likes.length : ""}</span>
                  </div>
                  <div className="view">
                    <VisibilityIcon
                      style={{
                        color: "#05445e",
                        marginRight: "0.5rem",
                        fontSize: "1.2rem",
                      }}
                    />
                    <span>{row.views ? row.views.length : ""}</span>
                  </div>
                  <div className="comment">
                    <ChatBubbleIcon
                      style={{
                        color: "#05445e",
                        marginRight: "0.5rem",
                        fontSize: "1.2rem",
                      }}
                    />
                    <span>{row.comments ? row.comments.length : ""}</span>
                  </div>
                </div>
              </Card>
            );
          })}

          {/* <div className="pagination">
                    <Pagination color="primary" count={15} page={page} onChange={handleChange} />    
                </div> */}
        </div>
      </div>
    );
  }
}

export default Posts;
