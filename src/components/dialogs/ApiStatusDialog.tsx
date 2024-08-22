import { Dialog, DialogContent, DialogTitle } from "@suid/material";
import { Component, Show } from "solid-js";

import { ApiStatus } from "models/api-status.model";

interface SimpleDialogProps {
  apiStatus: ApiStatus;
  loading: boolean;
  open: boolean;
  apiStatusError: string | null;
  onClose: () => void;
}

const ApiStatusDialog: Component<SimpleDialogProps> = (props: SimpleDialogProps) => {
  const handleClose = () => props.onClose();

  return (
    <Dialog onClose={handleClose} open={props.open}>
      <DialogTitle>Status för API</DialogTitle>
      <DialogContent>
        <Show when={!props.loading && !props.apiStatusError}>
          <h4>
            Interval på bevakningar:
            <i>{props.apiStatus.scrapingIntervalInMinutes} minuter</i>
          </h4>
          <h4>Drifttid</h4>
          <div style={{ "margin-left": "1em" }}>
            <p>År: {props.apiStatus.uptime.years}</p>
            <p>Månader: {props.apiStatus.uptime.months}</p>
            <p>Dagar: {props.apiStatus.uptime.days}</p>
            <p>Timmar: {props.apiStatus.uptime.hours}</p>
            <p>Minuter: {props.apiStatus.uptime.minutes}</p>
            <p>Sekunder: {props.apiStatus.uptime.seconds}</p>
          </div>
        </Show>

        <Show when={props.loading}>
          <h4>Laddar status för API......</h4>
        </Show>

        <Show when={props.apiStatusError}>
          <h4>Error. Nåt gick fel:</h4>
          <p>{props.apiStatusError}</p>
        </Show>
      </DialogContent>
    </Dialog>
  );
};

export default ApiStatusDialog;
