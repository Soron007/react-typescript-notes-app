import { FunctionComponent } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export const Header: FunctionComponent = () => {
  return (
    <div>
      <AppBar
        color="transparent"
        position="static"
        sx={{
          zIndex: 10,
          backgroundColor: "#fff",
        }}
      >
        <Toolbar>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrkfwOJ4ahtXS5b_QnPsUPyq_BXKhtLr0DZEigixntbJP7rQmh&s"
            }
            style={{
              width: 50,
              marginRight: 10,
            }}
            alt="logo"
          />
          <Typography sx={{ fontFamily: "cursive", fontSize: "1.5rem" }}>
            Noted
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
