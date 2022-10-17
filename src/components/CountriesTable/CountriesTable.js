import { Table } from 'antd';
import React, { useState } from 'react'

const CountriesTable = (props) => {

  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  let countries = props.countries
  // console.log(countries[0])

  var data = []

  if (countries && countries.length > 0) {
    countries.map((country, index) => {
      // console.log((countries), ":", country )
      // if (countries[index].currencies && countries[index].currencies.length > 0) {
      //   console.log("console", index, ":", (countries[index]?.currencies[0].name))
      // }

      return data.push({
        key: index + 1,
        name: country.name,
        capital: country.capital,
        currency: country?.currencies && country?.currencies.length > 0 ? (country?.currencies[0].name) : null,
        // currency: countries[index]?.currencies && countries[index]?.currencies.length > 0 ? (countries[index]?.currencies[0].name) : null,
        region: country.region,
        subregion: country.subregion,
      })

    })
  }



  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: "Capital",
      dataIndex: "capital",
      key: "capital",
      // sorter: (a, b) => a.capital.length - b.capital.length,
      // sortOrder: sortedInfo.columnKey === "capital" && sortedInfo.order,
      // ellipsis: true,
    },
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
      // sorter: (a, b) => Date(a.time) - Date(b.time),
      // sortOrder: sortedInfo.columnKey === "time" && sortedInfo.order,
      // ellipsis: true,
    },
    {
      title: "Region",
      dataIndex: "region",
      key: "region",
      sorter: (a, b) => a.region.length - b.region.length,
      sortOrder: sortedInfo.columnKey === "region" && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: "SubRegion",
      dataIndex: "subregion",
      key: "subregion",
      sorter: (a, b) => a.subregion.length - b.subregion.length,
      sortOrder: sortedInfo.columnKey === "subregion" && sortedInfo.order,
      ellipsis: true,
    },
  ];

  return (
    <Table
      key={columns.key}
      columns={columns}
      dataSource={data}
      onChange={handleChange}
      scroll={{ x: "max-content" }} />
  )
}

export default CountriesTable