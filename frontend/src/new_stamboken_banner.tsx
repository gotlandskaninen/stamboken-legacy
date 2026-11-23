import * as React from "react";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const STORAGE_KEY = "newStambokenBannerDismissed";

const wasDismissed = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch (e) {
    return false;
  }
};

/** Invites everyone to try the new Stamboken; the dismissal is remembered. */
export function NewStambokenBanner() {
  const [open, setOpen] = React.useState(!wasDismissed());
  if (!open) return null;

  const close = () => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch (e) {
      // Storage unavailable: the banner shows again next time.
    }
  };

  return (
    <Alert
      severity="info"
      action={
        <>
          <Button
            color="inherit"
            size="small"
            href="https://gotlandskaninen.se/stamboken"
          >
            Till nya Stamboken →
          </Button>
          <IconButton color="inherit" size="small" aria-label="Stäng" onClick={close}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
      // Below the fixed .menu (51 px, style.css), which otherwise covers it on wide screens.
      style={{ borderRadius: 0, flexWrap: "wrap", marginTop: 51, position: "relative", zIndex: 99 }}
    >
      Intyg utfärdas och ändras nu i nya Stamboken. Vill du se hur den
      fungerar? Prova demoläget, där inget du gör påverkar de riktiga
      uppgifterna.
    </Alert>
  );
}
