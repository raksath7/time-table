import React from "react";
import { courses, schools } from "./constant/data";
import "antd/dist/reset.css";
import { Button, Col, Divider, List, Row, Switch, Typography } from "antd";
import { UndoOutlined, DownloadOutlined } from "@ant-design/icons";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function App() {
  const [semesters, setSemesters] = React.useState([]);
  const [selectedSemester, setSelectedSemester] = React.useState([]);
  const [isOdd, setIsOdd] = React.useState(true);

  const clear = () => {
    setSelectedSemester([]);
  };

  React.useEffect(() => {
    const entries = Object.entries(schools);
    setSemesters(entries);
    console.log(entries)
  }, []);
  // console.log(semesters);

  function printDocument() {
    const input = document.getElementById("preview");
    html2canvas(input, {
      width: 1200,
      height: 1200,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 6, 40, 220, 190);
      // pdf.output('dataurlnewwindow');
      pdf.save("timetable.pdf");
    });
  }

  return (
    <div className="App">
      <Row justify="center" gutter={[16, 16]}>
        <img src="snr-logo.jpeg" alt="" />
        <Col>
          <Typography.Title level={1} style={{ margin: 0 }}>
            Sri Ramakrishna Institute of Technology
          </Typography.Title>
          <Typography.Title level={2} style={{ margin: 0 }}>
            Time Table  
          </Typography.Title>
        </Col>
      </Row>
      <Divider />
      <br />
      <div id="wrapper">
        <div id="controls">
          <Divider orientation="left">Select Semester</Divider>
          <div id="school-tabs" className="buttons">
            <Switch
              checked={isOdd}
              checkedChildren="Odd"
              unCheckedChildren="Evre"
              onChange={() => {
                setIsOdd(!isOdd);
                setSelectedSemester([]);
              }}
            />
            <br />
            {semesters &&
              semesters.map((semester) => {
                const sem = semester[0].split("SEM").slice(1).join("");
                console.log(sem)
                if (isOdd && sem % 2 !== 0) {
                  return (
                    <Button
                      type={"primary"}
                      ghost={selectedSemester === semester ? false : true}
                      onClick={() => setSelectedSemester(semester)}
                      key={semester[0]}
                    >
                      {semester[0]}
                    </Button>
                  );
                } else if (!isOdd && sem % 2 === 0) {
                  return (
                    <Button
                      type={
                        selectedSemester === semester ? "primary" : "default"
                      }
                      onClick={() => setSelectedSemester(semester)}
                      key={semester[0]}
                    >
                      {semester[0]}
                    </Button>
                  );
                }
                return null;
              })}
          </div>
          <div id="school-list" className="school">
            <Divider orientation="left">Subjects</Divider>
            <List
              pagination={{ defaultPageSize: 6 }}
              size="small"
              bordered
              dataSource={selectedSemester[1]?.courses}
              renderItem={(course) => (
                <List.Item>{courses[course].name}</List.Item>
              )}
            />
          </div>
          <br />
          <br />
          <div className="buttons">
            <Button
              type={"primary"}
              ghost
              id="reset"
              onClick={clear}
              icon={<UndoOutlined />}
            >
              Reset
            </Button>
            <Button
              type={"primary"}
              ghost
              id="pdf"
              onClick={printDocument}
              icon={<DownloadOutlined />}
            >
              Download PDF
            </Button>
          </div>
        </div>
        <div id="preview">
          <Divider orientation="center">
            {selectedSemester.length
              ? `${selectedSemester[0]} Time Table`
              : "Timetable Structure"}
          </Divider>
          <div id="tab">
            <table>
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">08:30</th>
                  <th scope="col">09:30</th>
                  <th scope="col">10:30</th>
                  <th scope="col">11:30</th>
                  <th scope="col">12:30</th>
                  <th scope="col">13:30</th>
                  <th scope="col">14:30</th>
                  <th scope="col">15:30</th>
                  <th scope="col">16:30</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Monday</th>
                  <td className="A">A</td>
                  <td className="B">B</td>
                  <td className="C">C</td>
                  <td className="D">D</td>
                  <td className="lunch">Lunch Break</td>
                  <td className="G">G</td>
                  <td className="H">H</td>
                  <td className="I">I</td>
                  <td className="E">E</td>
                </tr>

                <tr>
                  <th scope="row">Tuesday</th>
                  <td className="F">F</td>
                  <td className="A">A</td>
                  <td className="B">B</td>
                  <td className="C">C</td>
                  <td className="lunch">Lunch Break</td>
                  <td className="D">D</td>
                  <td className="I">I</td>
                  <td className="G">G</td>
                  <td className="H">H</td>
                </tr>

                <tr>
                  <th scope="row">Wednesday</th>
                  <td className="E">E</td>
                  <td className="F">F</td>
                  <td className="A">A</td>
                  <td className="B">B</td>
                  <td className="lunch">Lunch Break</td>
                  <td className="C">C</td>
                  <td className="D">D</td>
                  <td className="G">G</td>
                  <td className="H">H</td>
                </tr>

                <tr>
                  <th scope="row">Thursday</th>
                  <td className="D">D</td>
                  <td className="E">E</td>
                  <td className="F">F</td>
                  <td className="A">A</td>
                  <td className="lunch">Lunch Break</td>
                  <td className="B">B</td>
                  <td className="C">C</td>
                  <td className="D">D</td>
                  <td className="I">I</td>
                </tr>

                <tr>
                  <th scope="row">Friday</th>
                  <td className="C">C</td>
                  <td className="D">D</td>
                  <td className="E">E</td>
                  <td className="F">F</td>
                  <td className="lunch">Lunch Break</td>
                  <td className="I">I</td>
                  <td className="H">H</td>
                  <td className="G">G</td>
                  <td className="A">A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 id="h2leg" className="hidden">
            Legend
          </h2>
          <ul id="legend"></ul>
        </div>
      </div>
    </div>
  );
}

export default App;
