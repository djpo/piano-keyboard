import { Key } from "./key";
import styles from "../styles/Piano.module.css";

interface Props {
  fromKey: number;
  toKey: number;
  onEvent: (e: any) => void;
}

const generateKeys = (firstKey: number, lastKey: number): JSX.Element[] => {
  const keys = [];
  for (let i = firstKey; i < lastKey + 1; i++) {
    keys.push(<Key midiNote={i} key={i.toString()} />);
  }
  return keys;
};

const Piano = ({ fromKey, toKey }: Props) => {
  return <div className={styles.piano}>{generateKeys(fromKey, toKey)}</div>;
};

export { Piano };
