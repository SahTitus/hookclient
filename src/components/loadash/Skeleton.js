import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import { useStateContex } from "../../store/StateProvider";
import style from "./Loadash.module.css";

function SkeLoadash() {
  const { darkMode } = useStateContex();

  return (
    <Card 
    className={` ${darkMode && style.skeleDark}`}
    sx={{ maxWidth: '100%', marginBottom: '3px'}}
    style={{bgcolor: darkMode? '#000' : ''}}
    >
      <CardHeader
     
        avatar={
          <Skeleton
            animation="pulse"
            variant="circular"
            width={40}
            height={40}
            className={` ${darkMode && style.skeleDarkAnimat}`}
          />
        }
        title={
          <Skeleton
            animation="wave"
            height={10}
            width="70%"
            style={{ marginBottom: 6 }}
            className={` ${darkMode && style.skeleDarkAnimat}`}
          />
        }
        subheader={<Skeleton animation="wave" height={10} width="40%" className={` ${darkMode && style.skeleDarkAnimat}`}/>}
      />
      <Skeleton sx={{ height: 120 }} animation="wave" variant="rectangular" className={` ${darkMode && style.skeleDarkAnimat}`}/>

      <CardContent>
        <React.Fragment>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} className={` ${darkMode && style.skeleDarkAnimat}`}/>
          <Skeleton animation="wave" height={10} width="80%" className={` ${darkMode && style.skeleDarkAnimat}`}/>
        </React.Fragment>
      </CardContent>
    </Card>
  );
}

export default SkeLoadash;
