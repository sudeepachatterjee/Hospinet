import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Avatar from "@mui/material/Avatar";

export default function CardSearch(props) {
  return (
    <Card sx={{ width: 190 }}>
      <CardActionArea>
        <CardContent>
          <Avatar
            alt="card-img"
            src={props.img}
            sx={{ width: 70, height: 70, marginLeft: 5 }}
          />
          <Typography
            className="popularCardTypography"
            variant="h6"
            sx={{ fontSize: 20 }}
            color="black"
          >
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
