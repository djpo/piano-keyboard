import { getKeyDetails } from "../util/keyDetails";
import styles from "../styles/Key.module.css";

interface Props {
  midiNote: number;
  handleClick: (keyName: string) => void;
}

const Key = ({ midiNote, handleClick }: Props) => {
  const keyDetails = getKeyDetails(midiNote);
  const keyFullName = `${keyDetails.name}${keyDetails.octave}`;
  const keyPressFeedback = `${midiNote} (${keyFullName})`;

  return (
    <button
      className={
        keyDetails.color === "black" ? styles.blackKey : styles.whiteKey
      }
      onClick={() => handleClick(keyPressFeedback)}
    >
      {keyFullName}
    </button>
  );
};

export { Key };
