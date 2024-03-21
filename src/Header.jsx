import React from "react";
import { useSelector } from "react-redux";
import { FastBackwardOutlined } from "@ant-design/icons";

export default function Header({ onClear, count }) {
  // newly added
  const { notificationCount } = useSelector(({ notification }) => ({
    notificationCount: notification.count,
  }));
  return (
    <div
      style={{
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        background: "#004644",
        color: "#fff",
        fontSize: "24px",
        fontWeight: 700,
      }}
    >
      <div>Remote Server</div>
      <div
        style={{
          width: "350px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>count: {count}</div>
        {/* newly added */}
        <FastBackwardOutlined />
        <div>notification: {notificationCount}</div>
        <button onClick={onClear}>Clear</button>
      </div>
    </div>
  );
}
