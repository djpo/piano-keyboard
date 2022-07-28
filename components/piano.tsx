import { Key } from './key';
import styles from '../styles/Piano.module.css';

const Piano = () => {
  return (
    <div className={styles.piano}>
      <Key midiNote={21} />
      <Key midiNote={22} />
      <Key midiNote={23} />
      <Key midiNote={24} />
      <Key midiNote={25} />
      <Key midiNote={26} />
      <Key midiNote={27} />
      <Key midiNote={28} />
      <Key midiNote={29} />
      <Key midiNote={30} />
      <Key midiNote={31} />
      <Key midiNote={32} />
    </div>
  );
}

export { Piano };
