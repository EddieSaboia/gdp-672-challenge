import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import ModalData from "../../Components/ModalData";

import {
  Content,
  ContentForm,
  ContentData,
  Title,
  SubTitle,
  Line,
  Input,
  ContentTitle,
  ContentInputs,
  RowData,
  RowTitle,
  Button,
  ContentRowData,
  ComponentSerach,
  ContentCalendar,
  TextField,
  ContentCalendarControl,
  SwitchControl,
} from "./styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();
  const [state, setState] = useState({
    search: "",
    initialDate: "",
    finalDate: "",
    switch: false,
    modalControl: false,
    ListCases: [],
  });

  const [covidData, setCovidData] = useState({
    TotalConfirmed: "XXX.XXX.XXX",
    TotalDeaths: "XXX.XXX.XXX",
    TotalRecovered: "XXX.XXX.XXX",
  });

  const onInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeChecked = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const getWorldTotalCases = (value) => {
    async function getPosts() {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };

      if (!state.switch) {
        if (value === "") {
          const response = await fetch(
            "https://api.covid19api.com/world/total",
            requestOptions
          );
          const data = await response.json();

          if (response.status === 200) {
            console.log("Deu bom", data);
            setCovidData({
              ...covidData,
              TotalConfirmed: data.TotalConfirmed,
              TotalDeaths: data.TotalDeaths,
              TotalRecovered: data.TotalRecovered,
            });
          } else {
            console.log("Deu Erro", data);
          }
        } else {
          const response = await fetch(
            `https://api.covid19api.com/total/country/${value}`,
            requestOptions
          );
          const data = await response.json();

          if (response.status === 200) {
            console.log("Deu bom", data.length);
            setCovidData({
              ...covidData,
              TotalConfirmed: data[data.length - 1].Confirmed,
              TotalDeaths: data[data.length - 1].Deaths,
              TotalRecovered: data[data.length - 1].Recovered,
            });
          } else {
            console.log("Deu Erro", data);
          }
        }
      } else {
        const response = await fetch(
          `https://api.covid19api.com/total/country/${value}/status/confirmed?from=${state.initialDate}T00:00:00Z&to=${state.finalDate}T00:00:00Z`,
          requestOptions
        );
        const data = await response.json();

        if (response.status === 200) {
          setState({
            ...state,
            modalControl: true,
            ListCases: data,
          });
        } else {
          console.log("Deu Erro", data);
        }
      }
    }

    getPosts();
  };

  return (
    
    <Content>
      {state.modalControl && (
        <ModalData
          open={state.modalControl}
          onClose={() => setState({ ...state, modalControl: false })}
          covidData={state.ListCases}
        />
      )}

      <ContentForm>
        <ContentTitle>
          <Title>CORONA REPORTS</Title>
          <SubTitle>Desenvolvido por Eddie Saboia</SubTitle>
        </ContentTitle>
        <ContentInputs>
          <ComponentSerach>
            <Input
              name="search"
              placeholder="No mundo"
              onChange={onInputChange}
            />
            <Button
              onClick={() => {
                getWorldTotalCases(state.search);
              }}
            >
              <SearchOutlined />
            </Button>
          </ComponentSerach>
          <SwitchControl
            control={
              <Switch
                checked={state.switch}
                onChange={handleChangeChecked}
                name="switch"
              />
            }
            label="Fazer busca por periodo"
          />
          {state.switch && (
            <ContentCalendarControl>
              <ContentCalendar>
                <TextField
                  id="date"
                  name="initialDate"
                  label="Desde"
                  type="date"
                  defaultValue="2019-11-24"
                  className={classes.textField}
                  onChange={onInputChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </ContentCalendar>
              <ContentCalendar>
                <TextField
                  id="date"
                  name="finalDate"
                  label="Até"
                  type="date"
                  defaultValue="2020-05-24"
                  className={classes.textField}
                  onChange={onInputChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </ContentCalendar>
            </ContentCalendarControl>
          )}
        </ContentInputs>
      </ContentForm>
      <ContentData>
        <ContentRowData>
          <RowData>{covidData.TotalConfirmed}</RowData>
          <RowTitle>Pessoas Contaminadas</RowTitle>
        </ContentRowData>
        <Line />
        <ContentRowData>
          <RowData>{covidData.TotalDeaths}</RowData>
          <RowTitle>Mortes</RowTitle>
        </ContentRowData>
        <Line />
        <ContentRowData>
          <RowData>{covidData.TotalRecovered}</RowData>
          <RowTitle>Pessoas Recuperadas</RowTitle>
        </ContentRowData>
      </ContentData>
    </Content>
  );
};

export default Dashboard;
