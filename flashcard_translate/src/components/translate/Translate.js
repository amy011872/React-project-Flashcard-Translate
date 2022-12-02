import React from "react";
import Header from "../Header";
import { Grid, Container, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

export default function Translate() {
  const [languageList, setlanguage] = useState([]);
  const [targetLanguageKey, setTargetLanguageKey] = useState("");
  const [sourceLanguageKey, setSourceLanguageKey] = useState("");
  const [textInput, setTextInput] = useState("");
  const [textOutput, setTextOutput] = useState("");

  const translateText = async (e) => {
    try {
      e.preventDefault();
      const params = new URLSearchParams();
      params.append("q", textInput);
      params.append("source", sourceLanguageKey);
      params.append("target", targetLanguageKey);
      params.append("api_key", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
      const response = await axios.post(
        `https://libretranslate.de/translate`,
        params
      );
      console.log("function: get translated result");
      console.log(response.data.translatedText);
      setTextOutput(response.data.translatedText);
    } catch (err) {
      if (err.res) {
        // Not in the 200 status
        console.log(err.res.data);
        console.log(err.res.status);
        console.log(err.res.headers);
      }
    }
  };

  const selectSource = (selectedLanguage) => {
    console.log("function: get source language key");
    console.log(selectedLanguage.target.value);
    setSourceLanguageKey(selectedLanguage.target.value);
  };

  const selectTarget = (selectedLanguage) => {
    console.log("function: get target language key");
    console.log(selectedLanguage.target.value);
    setTargetLanguageKey(selectedLanguage.target.value);
  };

  const handleInput = (e) => {
    setTextInput(e.target.value);
  };

  useEffect(() => {
    const fetchLangList = async () => {
      try {
        const res = await axios.get(`https://libretranslate.de/languages`, {
          headers: { accept: "application/json" },
        });
        console.log(res.data.sort());
        console.log(res.data.sort().reverse());
        setlanguage(res.data);
      } catch (err) {
        if (err.res) {
          // Not in the 200 status
          console.log(err.res.data);
          console.log(err.res.status);
          console.log(err.res.headers);
        }
      }
    };
    fetchLangList();
  }, []);

  return (
    <Container maxWidth="lg" className="cardGrid">
      <Header title={"TRANSLATE"} />
      <Typography variant="subtitle"></Typography>
      <Grid container spacing={2} justity="center">
        <Grid md align="center" item className="gridItem">
          <FormControl fullWidth>
            <InputLabel
              variant="outlined"
              htmlFor="uncontrolled-native"
              className="lang"
            >
              Select a Source Language
            </InputLabel>
            <NativeSelect defaultValue="請選擇" onChange={selectSource}>
              <option>請選擇</option>
              {languageList.map((lang, i) => (
                <option key={i} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid md item className="gridItem">
          <FormControl fullWidth>
            <InputLabel htmlFor="uncontrolled-native" className="lang">
              Select a Target Language
            </InputLabel>
            <NativeSelect defaultValue="" onChange={(e) => selectTarget(e)}>
              <option>請選擇</option>
              {languageList.map((lang, i) => (
                <option key={i} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2} justity="center">
        <Grid sm item className="gridItem">
          <form noValidate autoComplete="off" onSubmit={translateText}>
            <TextField
              label="Type some texts to translate!"
              variant="filled"
              onInput={handleInput}
              fullWidth
              required
              multiline
              rows={4}
              className="lang"
            />
            <Button
              onSubmit={translateText}
              type="submit"
              variant="filled"
              fullWidth
            >
              Translate!
            </Button>
          </form>
        </Grid>
        <Grid md item className={classes.gridItem}>
          <Typography variant="h6" gutterBottom>
            {textOutput}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
