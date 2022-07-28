import styles from '../styles/Key.module.css';

interface Props {
  midiNote: number,
}

const blackNotes = [22, 25, 27, 30, 32];

const Key = ({ midiNote }: Props) => (
  <div className={blackNotes.includes(midiNote) ? styles.blackKey : styles.whiteKey}>
    {midiNote}
  </div>
)

export { Key };
