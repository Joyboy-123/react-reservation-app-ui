import React, { useState } from "react";
import "./list.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../Components/serchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destiNation, setDestiNation] = useState(location.state.destiNation);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  console.log("first");
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destiNation} />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>

            {/* 1st */}
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="Number" className="lsOptionInput" />
                </div>
              </div>
              <div className="lsItem">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="Number" className="lsOptionInput" />
                </div>
              </div>
              {/* 3rd */}
              <div className="lsItem">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="Number"
                    className="lsOptionInput"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
              </div>
              {/* 4th */}
              <div className="lsItem">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="Number"
                    className="lsOptionInput"
                    placeholder={options.children}
                    min={0}
                  />
                </div>
              </div>
              {/* 5th */}
              <div className="lsItem">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="Number"
                    className="lsOptionInput"
                    placeholder={options.room}
                    min={1}
                  /> 
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
