import { Key } from "./key";
import styles from "../styles/Piano.module.css";

interface Props {
  fromKey: number;
  toKey: number;
  onEvent: (midiNote: number) => void;
}

const generateKeys = (
  firstKey: number,
  lastKey: number,
  onEvent: (midiNote: number) => void
): JSX.Element[] => {
  const keys = [];
  for (let i = firstKey; i < lastKey + 1; i++) {
    keys.push(<Key key={i.toString()} midiNote={i} handleClick={onEvent} />);
  }
  return keys;
};

const Piano = ({ fromKey, toKey, onEvent }: Props) => {
  return (
    <div className={styles.piano}>{generateKeys(fromKey, toKey, onEvent)}</div>
  );
};

export { Piano };
