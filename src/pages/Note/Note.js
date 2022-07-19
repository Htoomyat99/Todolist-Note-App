import {View, Text} from 'react-native';
import React, {useState} from 'react';

//components
import NoteContent from '../../components/Note/NoteContent';
import NoteModal from '../../components/NoteModal/NoteModal';

const Note = () => {
  const [showNoteModal, setNoteShowModal] = useState(false);

  const addHandler = () => {
    console.log('it works');
    setNoteShowModal(!showNoteModal);
  };

  return (
    <View style={{flex: 1}}>
      <NoteContent addNote={addHandler} />
      {showNoteModal && <NoteModal />}
    </View>
  );
};

export default Note;
