import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import featured2 from "../img/featured2.jpeg";
import featured3 from "../img/featured3.jpeg";

import "../css/posts.css";
import { Card, Avatar, TextField, Chip, InputLabel } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import VisibilityIcon from "@material-ui/icons/Visibility";

const Posts = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
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
        <Card className="card">
          <img src={featured2} />
          <div className="post--info">
            <p>From my mind hello there</p>
            <div className="author">
              <Avatar style={{ marginRight: "0.5rem" }} alt="Remy Sharp" />
              <span>
                Abhishek Gupta
                <br />
                <span style={{ color: "GrayText" }}>27 july 2021</span>
              </span>
            </div>
          </div>
          <div className="stats">
            <div className="like">
              <ThumbUpAltIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>20</span>
            </div>
            <div className="view">
              <VisibilityIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>16</span>
            </div>
            <div className="comment">
              <ChatBubbleIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>16</span>
            </div>
          </div>
        </Card>
        <Card className="card">
          <img src={featured3} />
          <div className="post--info">
            <p>From my mind hello there</p>
            <div className="author">
              <Avatar style={{ marginRight: "0.5rem" }} alt="Remy Sharp" />
              <span>
                Abhishek Gupta
                <br />
                <span style={{ color: "GrayText" }}>27 july 2021</span>
              </span>
            </div>
          </div>
          <div className="stats">
            <div className="like">
              <ThumbUpAltIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>20</span>
            </div>
            <div className="view">
              <VisibilityIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>16</span>
            </div>
            <div className="comment">
              <ChatBubbleIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>16</span>
            </div>
          </div>
        </Card>
        <Card className="card">
          <img src={featured2} />
          <div className="post--info">
            <p>From my mind hello there</p>
            <div className="author">
              <Avatar style={{ marginRight: "0.5rem" }} alt="Remy Sharp" />
              <span>
                Abhishek Gupta
                <br />
                <span style={{ color: "GrayText" }}>27 july 2021</span>
              </span>
            </div>
          </div>
          <div className="stats">
            <div className="like">
              <ThumbUpAltIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>20</span>
            </div>
            <div className="view">
              <VisibilityIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>16</span>
            </div>
            <div className="comment">
              <ChatBubbleIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>16</span>
            </div>
          </div>
        </Card>
        <Card className="card">
          <img src={featured2} />
          <div className="post--info">
            <p>From my mind hello there</p>
            <div className="author">
              <Avatar style={{ marginRight: "0.5rem" }} alt="Remy Sharp" />
              <span>
                Abhishek Gupta
                <br />
                <span style={{ color: "GrayText" }}>27 july 2021</span>
              </span>
            </div>
          </div>
          <div className="stats">
            <div className="like">
              <ThumbUpAltIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>20</span>
            </div>
            <div className="view">
              <VisibilityIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>16</span>
            </div>
            <div className="comment">
              <ChatBubbleIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>16</span>
            </div>
          </div>
        </Card>
        <Card className="card">
          <img src={featured3} />
          <div className="post--info">
            <p>From my mind hello there</p>
            <div className="author">
              <Avatar style={{ marginRight: "0.5rem" }} alt="Remy Sharp" />
              <span>
                Abhishek Gupta
                <br />
                <span style={{ color: "GrayText" }}>27 july 2021</span>
              </span>
            </div>
          </div>
          <div className="stats">
            <div className="like">
              <ThumbUpAltIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>20</span>
            </div>
            <div className="view">
              <VisibilityIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>16</span>
            </div>
            <div className="comment">
              <ChatBubbleIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>16</span>
            </div>
          </div>
        </Card>
        <Card className="card">
          <img src={featured2} />
          <div className="post--info">
            <p>From my mind hello there</p>
            <div className="author">
              <Avatar style={{ marginRight: "0.5rem" }} alt="Remy Sharp" />
              <span>
                Abhishek Gupta
                <br />
                <span style={{ color: "GrayText" }}>27 july 2021</span>
              </span>
            </div>
          </div>
          <div className="stats">
            <div className="like">
              <ThumbUpAltIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>20</span>
            </div>
            <div className="view">
              <VisibilityIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>16</span>
            </div>
            <div className="comment">
              <ChatBubbleIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>16</span>
            </div>
          </div>
        </Card>
        <Card className="card">
          <img src={featured2} />
          <div className="post--info">
            <p>From my mind hello there</p>
            <div className="author">
              <Avatar style={{ marginRight: "0.5rem" }} alt="Remy Sharp" />
              <span>
                Abhishek Gupta
                <br />
                <span style={{ color: "GrayText" }}>27 july 2021</span>
              </span>
            </div>
          </div>
          <div className="stats">
            <div className="like">
              <ThumbUpAltIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>20</span>
            </div>
            <div className="view">
              <VisibilityIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>16</span>
            </div>
            <div className="comment">
              <ChatBubbleIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>16</span>
            </div>
          </div>
        </Card>
        <Card className="card">
          <img src={featured3} />
          <div className="post--info">
            <p>From my mind hello there</p>
            <div className="author">
              <Avatar style={{ marginRight: "0.5rem" }} alt="Remy Sharp" />
              <span>
                Abhishek Gupta
                <br />
                <span style={{ color: "GrayText" }}>27 july 2021</span>
              </span>
            </div>
          </div>
          <div className="stats">
            <div className="like">
              <ThumbUpAltIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>20</span>
            </div>
            <div className="view">
              <VisibilityIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>16</span>
            </div>
            <div className="comment">
              <ChatBubbleIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>16</span>
            </div>
          </div>
        </Card>
        <Card className="card">
          <img src={featured2} />
          <div className="post--info">
            <p>From my mind hello there</p>
            <div className="author">
              <Avatar style={{ marginRight: "0.5rem" }} alt="Remy Sharp" />
              <span>
                Abhishek Gupta
                <br />
                <span style={{ color: "GrayText" }}>27 july 2021</span>
              </span>
            </div>
          </div>
          <div className="stats">
            <div className="like">
              <ThumbUpAltIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>20</span>
            </div>
            <div className="view">
              <VisibilityIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>16</span>
            </div>
            <div className="comment">
              <ChatBubbleIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>16</span>
            </div>
          </div>
        </Card>
        <Card className="card">
          <img src={featured2} />
          <div className="post--info">
            <p>From my mind hello there</p>
            <div className="author">
              <Avatar style={{ marginRight: "0.5rem" }} alt="Remy Sharp" />
              <span>
                Abhishek Gupta
                <br />
                <span style={{ color: "GrayText" }}>27 july 2021</span>
              </span>
            </div>
          </div>
          <div className="stats">
            <div className="like">
              <ThumbUpAltIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>20</span>
            </div>
            <div className="view">
              <VisibilityIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>16</span>
            </div>
            <div className="comment">
              <ChatBubbleIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>16</span>
            </div>
          </div>
        </Card>
        <Card className="card">
          <img src={featured3} />
          <div className="post--info">
            <p>From my mind hello there</p>
            <div className="author">
              <Avatar style={{ marginRight: "0.5rem" }} alt="Remy Sharp" />
              <span>
                Abhishek Gupta
                <br />
                <span style={{ color: "GrayText" }}>27 july 2021</span>
              </span>
            </div>
          </div>
          <div className="stats">
            <div className="like">
              <ThumbUpAltIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>20</span>
            </div>
            <div className="view">
              <VisibilityIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>16</span>
            </div>
            <div className="comment">
              <ChatBubbleIcon
                style={{
                  color: "blue",
                  marginRight: "0.5rem",
                  fontSize: "1.2rem",
                }}
              />
              <span>16</span>
            </div>
          </div>
        </Card>

        {/* <div className="pagination">
                    <Pagination color="primary" count={15} page={page} onChange={handleChange} />    
                </div> */}
      </div>
    </div>
  );
};

export default Posts;
