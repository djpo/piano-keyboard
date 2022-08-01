import { Key } from "./key";
import styles from "../styles/Piano.module.css";

interface Props {
  firstNote: number;
  lastNote: number;
}

const generateKeys = (firstNote: number, lastNote: number): JSX.Element[] => {
  const keys = [];
  for (let i = firstNote; i < lastNote + 1; i++) {
    keys.push(<Key midiNote={i} key={i.toString()} />);
  }
  return keys;
};

const Piano = ({ firstNote, lastNote }: Props) => {
  return (
    <div className={styles.piano}>{generateKeys(firstNote, lastNote)}</div>
  );
};

export { Piano };
