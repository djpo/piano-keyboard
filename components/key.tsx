import styles from '../styles/Key.module.css';

interface Props {
  midiNote: number,
}

const Key = ({ midiNote }: Props) => (
  <div className={styles.key}>
    {midiNote}
  </div>
)

export { Key };
