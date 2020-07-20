import styled from "styled-components";
import { Input as ANTInput } from "antd";
import { TextField as MuiTextField, FormControlLabel as MuiFormControlLabel } from "@material-ui/core";

export const Content = styled.div`
  background-color: #a62539;
  display: flex;
  width: 100%;
  height: auto;
`;

export const ContentTitle = styled.div``;

export const ContentForm = styled.div`
  background-color: #f1f1f1;
  display: row;
  border: 2px solid #f1f1f1;
  padding: 10px;
  border-bottom-right-radius: 25px;
  border-top-right-radius: 25px;
`;

export const ContentData = styled.div`
  padding: 143px;
`;

export const Title = styled.p`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 75px;
  font-variant: small-caps;
  margin-bottom: 10px;
  color: #a62539;
`;

export const SubTitle = styled.p`
  color: #a62539;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: right;
`;

export const ContentInputs = styled.div`
  text-align: center;
`;

export const ComponentSerach = styled.div`
  text-align: center;
  border: 0.5px solid #55474c;
  box-sizing: border-box;
  border-radius: 5px;
  width: 87%;
`;

export const Input = styled(ANTInput)`
  width: 443px;
  height: 50px;
  left: 32px;
  top: 275px;
  border: none;
  background-color: transparent;
  font-size: x-large;
`;
export const ContentRowData = styled.div`
  text-align: center;
`;
export const RowData = styled.div`
  text-align: center;
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 94px;
  text-align: initial;
  color: #f0f1eb;
`;

export const RowTitle = styled.div`
  text-align: center;
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: initial;
  color: #f0f1eb;
`;

export const Line = styled.hr`
  margin-top: 55px;
  margin-bottom: 55px;
`;

export const Button = styled.button`
  border: none;
  height: 60px;
  width: 50px;
`;

export const ContentCalendarControl = styled.div`
`;

export const ContentCalendar = styled.div`
  text-align: left;
  margin-top: 100px;
`;

export const TextField = styled(MuiTextField)`
  width: 400px;
  border: 0.5px solid #55474c;
  box-sizing: border-box;
  border-radius: 5px;
`;
export const SwitchControl = styled(MuiFormControlLabel)`

`;
