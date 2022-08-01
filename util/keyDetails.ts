/* midi note reference
  0: C-2
  9: A-1
  21: A0 (lowest physical piano note)
  33: A1
  127: G9
*/

const getKeyDetails = (midiNote: number): { name: string; color: string } => {
  const baseNoteDetails = [
    { name: "C", color: "white" },
    { name: "Db", color: "black" },
    { name: "D", color: "white" },
    { name: "Eb", color: "black" },
    { name: "E", color: "white" },
    { name: "F", color: "white" },
    { name: "Gb", color: "black" },
    { name: "G", color: "white" },
    { name: "Ab", color: "black" },
    { name: "A", color: "white" },
    { name: "Bb", color: "black" },
    { name: "B", color: "white" },
  ];

  const noteToBaseNote = (midiNote: number): number => midiNote % 12;

  return baseNoteDetails[noteToBaseNote(midiNote)];
};

export { getKeyDetails };
