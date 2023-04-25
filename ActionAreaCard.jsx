import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import Stack from "@mui/material/Stack";

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ width: 250, height: 75 }}>
      <CardActionArea>
        <CardContent>
          <Stack direction="row" spacing={1}>
            <SupervisorAccountIcon sx={{ size: 5, paddingTop: 1 }} />
            <Typography sx={{ size: 5 }} align="center">
              {props.cardText}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
