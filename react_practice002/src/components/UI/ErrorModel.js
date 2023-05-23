import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModel.module.css";

function ErrorModel(props) {
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClose={props.onClick}>Close</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModel;
