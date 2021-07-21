import React from "react";
import { render } from "react-dom";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { useState, useEffect, useRef } from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { FormBuilder } from "../component/formBuilder";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const axios = require("axios");

function MainIndex() {
  // const rowData = [
  //   { make: "Toyota", model: "Celica", price: 35000 },
  //   { make: "Ford", model: "Mondeo", price: 32000 },
  //   { make: "Porsche", model: "Boxter", price: 72000 },
  //   { make: "Porsche", model: "Boxter", price: 72000 },
  //   { make: "Porsche", model: "Boxter", price: 72000 },
  //   { make: "Porsche", model: "Boxter", price: 72000 },

  // ];
  const match = useRouteMatch();
  console.log(match);
  const [rowData, setRowData] = useState([]);
  const [userInfo, setuserInfo] = useState([]);
  const [image, setImage] = useState([]);
  const [fields, setFields] = useState([]);
  const gridRef = useRef(null);

  MainIndex = (headerName) => {
    switch (headerName) {
      case "make":
        return "سازنده";
      case "model":
        return "مدل";
      case "price":
        return "قیمت";
      // no default
    }
  };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((result) => result.json())
  //     .then((rowData) => {
  //       setRowData(rowData);
  //       console.log(rowData);
  //       const LooprowData = rowData.some(function (item, key) {
  //         if (key > 0) {
  //           return;
  //         } else {
  //           // { headerName:mamad2[0], : "make" }
  //           const PropertyNames = Object.getOwnPropertyNames(item);
  //           console.log(PropertyNames); //["make", "model", "price"]
  //           const latestField = [];
  //           for (let i = 0; i < PropertyNames.length; i++) {
  //             latestField.push({
  //               headerName: MainIndex(PropertyNames[i]),
  //               field: PropertyNames[i],
  //             });
  //           }
  //           setFields(latestField);
  //           console.log(fields);
  //         }
  //       });

  //       // for (var i in rowData) {
  //       //   console.log(i);
  //       // }
  //     });
  // }, []);

  useEffect(() => {
    let axiosVar = null;
    // Make a request for a user with a given ID
    if (match.params.id) {
      axiosVar = `https://jsonplaceholder.typicode.com/posts/${match.params.id}`;
    } else {
      axiosVar = `https://jsonplaceholder.typicode.com/posts`;
    }

    axios.get(axiosVar).then(function (response) {
      // handle success
      let mamad;
      if (!match.params.id) {
        mamad = response.data.map((ele, key) => {
          const { title: onvane, ...rest } = ele;
          return { onvane, ...rest };
        });
      } else {
        mamad = response.data;
      }

      setuserInfo(mamad);
      console.log(mamad);
      // response.data.forEach(element => {
      //     if(element.userId){

      //     }
      // });
    });
  }, []);

  const handleSubmit = (img) => {};

  //   const axios = require('axios');

  // // Make a request for a user with a given ID
  // axios.get('/user?ID=12345')
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //   })

  const rowDatass = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
  ];

  const ggg = [
    { headerName: "make", field: "make" },
    { headerName: "model", field: "model" },
    { headerName: "price", field: "price" },
  ];

  const onButtonClick = (e) => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => `${node.make} ${node.model}`)
      .join(", ");
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  };
  // console.log("rowData", rowData);
  // console.log(Object.keys(rowData));

  const beforeUpload = (file) => {
    // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    // https://ptsv2.com/t/qcm24-1626459818/post
    console.log(file);
    axios
      .put("https://httpbin.org/put", file, {
        headers: {
          "Content-Type": file.type,
          'Access-Control-Allow-Origin': '*',
          "Access-Control-Allow-Methods": "DELETE, POST, GET, PUT",
          "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
        
        },
      })
      .then((response) => {
        setImage(response.data.data);
        console.log('JOOON',response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <Upload beforeUpload={beforeUpload}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
      {userInfo && match.params.id
        ? userInfo.title
        : userInfo
            .filter((list) => list.userId == 1)
            .map((ele, key) => {
              return (
                <p key={key}>
                  {ele.onvane}
                  {ele.userId}
                </p>
              );
            })}
            {
              <img src={image}/>
            }
    </div>
  );
}

export default MainIndex;
