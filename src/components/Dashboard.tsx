import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import * as localForage from "localforage";

const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [counterData, setCounterData] = useState<number[]>([]);

  useEffect(() => {
    localForage.getItem("userData").then((data) => {
      if (data) {
        setUserData(data);
      }
    });

    localForage.getItem("counterHistory").then((data) => {
      if (data) {
        setCounterData(data as number[]);
      }
    });
  }, []);

  // Format data for the chart
  const chartData = counterData.map((value, index) => ({
    name: `Attempt ${index + 1}`,
    count: value,
  }));

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5">User Dashboard</Typography>

      {userData ? (
        <Box>
          <Typography variant="body1">Name: {userData.name}</Typography>
          <Typography variant="body1">Email: {userData.email}</Typography>
          <Typography variant="body1">Phone: {userData.phone}</Typography>
        </Box>
      ) : (
        <Typography variant="body1">No user data available.</Typography>
      )}

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Counter Trends</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Dashboard;
