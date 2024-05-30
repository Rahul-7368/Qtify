import styles from "./Section.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import { useEffect, useState } from "react";
import BasicTabs from "../Tabs/Tabs";

const Section = ({ title, data, type, setCurrSong }) => {
  const [value, setValue] = useState(0);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const filterData = (text) => {
    if (text === "All") setFilteredData(data);
    else setFilteredData(data.filter((item) => item.genre.label === text));
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    filterData(event.target.textContent);
  };
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        {type !== "songs" ? (
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {!toggle ? "Show All" : "Collapse All"}
          </h4>
        ) : null}
      </div>
      {type === "songs" ? (
        <BasicTabs value={value} handleChange={handleChange} />
      ) : null}
      {data.length === 0 ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.cardsWrapper}>
          {toggle ? (
            <div className={styles.wrapper}>
              {data.map((item) => (
                <Card data={item} type={type} key={item.id} />
              ))}
            </div>
          ) : (
            <Carousel
              data={filteredData}
              component={(data1) => (
                <Card
                  data={data1}
                  type={type}
                  setCurrSong={setCurrSong}
                  key={data1.id}
                />
              )}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
