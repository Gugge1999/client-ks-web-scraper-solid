import Button from "@suid/material/Button";
import request from "axios";
import { Component, createSignal } from "solid-js";
import apiBaseUrl from "../../env/env";
import { ApiStatus } from "../../models/api-status.model";
import { initialApiStatus } from "../../models/constants";
import ApiStatusDialog from "../dialogs/ApiStatusDialog";

const Header: Component = () => {
  const [apiActive, setApiActive] = createSignal(initialApiStatus);
  const [loading, setLoading] = createSignal(true);
  const [open, setOpen] = createSignal(false);
  const [apiStatusError, setApiStatusError] = createSignal<string | null>(null);
  const [apiStatusErrorASD, asdSetApiStatusError] = createSignal<string | null>(null);

  setInterval(
    (function apiStatusInterval() {
      handleFetch();
      return apiStatusInterval;
    })(),
    30_000,
  );

  /** TODO: Det bör gå att skapa en generic http request funktion som returnerar {result: T, error: string | null} */
  async function handleFetch(): Promise<void> {
    setLoading(true);

    asdSetApiStatusError("asdasd");

    console.log("asd", apiStatusErrorASD());

    try {
      const res = await request.get<ApiStatus>(`${apiBaseUrl}/api-status`);
      setApiActive(res.data);
      setApiStatusError(null);
    } catch (err) {
      if (request.isAxiosError(err)) {
        setApiActive(initialApiStatus);

        if (err.response) {
          // Är det här rätt?
          setApiStatusError(err.response.data.errorMessage);
          return;
        }

        if (err.message) {
          setApiStatusError(err.message);
        }
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleClickOpen() {
    setOpen(true);
    await handleFetch();
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <p>Active: {apiActive().active.toString()}</p>
      <Button onClick={handleClickOpen} variant="contained">
        Öppna
      </Button>
      <ApiStatusDialog apiStatus={apiActive()} loading={loading()} open={open()} apiStatusError={apiStatusError()} onClose={handleClose} />
    </div>
  );
};

export default Header;
