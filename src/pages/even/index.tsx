import React, { useState } from "react";
import { CalendarOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
const Even: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleIconClick = () => {
    setShowCalendar(true);
  };

  const handleDatePickerChange = (date: any, dateString: string) => {
    console.log("Selected Date:", date);
    console.log("Formatted Date String:", dateString);
    setShowCalendar(false);
  };

  const handleCalendarClose = () => {
    setShowCalendar(false);
  };
  return (
    <>
      <span>
        <CalendarOutlined
          style={{ fontSize: "24px", cursor: "pointer" }}
          onClick={handleIconClick}
        />
      </span>
      {showCalendar && (
        <DatePicker
          style={{ position: "absolute", zIndex: 9999 }}
          onChange={handleDatePickerChange}
          onPanelChange={handleCalendarClose}
        />
      )}
    </>
  );
};

export default Even;
