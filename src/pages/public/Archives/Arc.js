import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "antd";
import fetchApi from "../../../api-services/index"; // Adjust the path as per your file structure
import styles from "./styles.module.css";
import InsideLayout from "./InsideLayout";

function Archives() {
  const [volumesList, setVolumesList] = useState([]);
  console.log(volumesList)

  useEffect(() => {
    const fetchVolumes = async () => {
      try {
        const data = await fetchApi.get("VOLUMES");
        setVolumesList(data);
      } catch (error) {
        console.error("Error fetching volumes list:", error);
      }
    };

    fetchVolumes();
  }, []);

  return (
  <InsideLayout>
      <div className={styles.grid_col}>
      {volumesList?.map((ele) => (
        <Dropdown
          key={ele.volume}
          menu={{
            items: [
              ...ele.issue.map((issue, index) => ({
                key: index,
                label: (
                  <Link
                    to={`/journal-of-applied-bioanalysis-vol-${ele.volume}-no-${issue.split("-")[1]}`}
             
                  
                    style={{ textTransform: "capitalize" }}
                  >
                    {issue}
                  </Link>
                ),
              })),
              ...ele?.specialIssue?.map((issue, index) => ({
                key: 1000 + index,
                label: (
                  <Link
                    to={`/issue-archive/volume-${ele.volume}/${issue.toLowerCase()}`}
                    style={{ textTransform: "capitalize" }}
                  >
                    {issue}
                  </Link>
                ),
              })),
            ],
          }}
          overlayStyle={{ maxHeight: "100px" }}
        >
          <div
            className={styles.volumes_card}
          >{`Volume-${ele.volume}-(${ele.year})`}</div>
        </Dropdown>
      ))}
    </div>
  </InsideLayout>
  );
}

export default Archives;