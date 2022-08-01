import styles from "../styles/Key.module.css";

interface Props {
  midiNote: number;
  handleClick: (midiNote: number) => void;
}

const blackNotes = [22, 25, 27, 30, 32];

const Key = ({ midiNote, handleClick }: Props) => (
  <button
    className={
      blackNotes.includes(midiNote) ? styles.blackKey : styles.whiteKey
    }
    onClick={() => handleClick(midiNote)}
  >
    {midiNote}
  </button>
);

export { Key };
